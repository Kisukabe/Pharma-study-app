import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { apiRouter } from "./routes/api.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// =========================================================================
// 1. RATE LIMITING MIDDLEWARE (Chống DDoS & Bảo vệ Quota Gemini AI)
// =========================================================================
interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const ipRequestMap = new Map<string, RateLimitRecord>();

// Dọn dẹp bộ nhớ định kỳ mỗi 5 phút để tránh rò rỉ RAM
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of ipRequestMap.entries()) {
    if (now > record.resetTime) {
      ipRequestMap.delete(ip);
    }
  }
}, 5 * 60 * 1000);

/**
 * Middleware Rate Limiter chuẩn Cloud-Native
 * @param maxRequests Số request tối đa trong 1 cửa sổ thời gian
 * @param windowMs Thời gian của cửa sổ (ms)
 */
function createRateLimiter(maxRequests: number = 60, windowMs: number = 60 * 1000) {
  return (req: Request, res: Response, next: NextFunction) => {
    // Lấy IP của client (hỗ trợ cả khi đứng sau Reverse Proxy / Cloudflare / Render)
    const clientIp =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0].trim() ||
      req.socket.remoteAddress ||
      "unknown-ip";

    const now = Date.now();
    const record = ipRequestMap.get(clientIp);

    if (!record || now > record.resetTime) {
      ipRequestMap.set(clientIp, {
        count: 1,
        resetTime: now + windowMs,
      });
      res.setHeader("X-RateLimit-Limit", maxRequests);
      res.setHeader("X-RateLimit-Remaining", maxRequests - 1);
      return next();
    }

    if (record.count >= maxRequests) {
      const retryAfterSeconds = Math.ceil((record.resetTime - now) / 1000);
      res.setHeader("Retry-After", retryAfterSeconds);
      res.setHeader("X-RateLimit-Limit", maxRequests);
      res.setHeader("X-RateLimit-Remaining", 0);
      return res.status(429).json({
        error: "Quá nhiều yêu cầu từ thiết bị của bạn. Vui lòng thử lại sau ít phút.",
        retryAfterSeconds,
      });
    }

    record.count += 1;
    res.setHeader("X-RateLimit-Limit", maxRequests);
    res.setHeader("X-RateLimit-Remaining", Math.max(0, maxRequests - record.count));
    next();
  };
}

// Áp dụng Rate Limit: Tối đa 60 requests/phút cho toàn bộ API
app.use("/api", createRateLimiter(60, 60 * 1000));

// =========================================================================
// 2. CORS & BODY PARSER
// =========================================================================
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : ["*"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes("*") || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true); // Cho phép cross-origin linh hoạt cho môi trường dev/staging
      }
    },
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));

// =========================================================================
// 3. MOUNT ROUTES & HEALTH CHECK
// =========================================================================
app.use("/api", apiRouter);

// Root Endpoint - Thông tin tình trạng dịch vụ & Hệ thống
const startTime = Date.now();
app.get("/", (_req, res) => {
  const uptimeSeconds = Math.floor((Date.now() - startTime) / 1000);
  const memoryUsageMB = Math.round(process.memoryUsage().heapUsed / 1024 / 1024);

  res.json({
    message: "Dược Liệu Học - Standalone API Backend",
    status: "healthy",
    uptimeSeconds,
    memoryUsageMB: `${memoryUsageMB} MB`,
    environment: process.env.NODE_ENV || "development",
    healthCheck: "/api/health",
  });
});

// =========================================================================
// 4. SERVER START & GRACEFUL SHUTDOWN (Cloud-Native Standard)
// =========================================================================
const server = app.listen(PORT, () => {
  console.log(`🚀 [Production Ready] Standalone Backend chạy tại port ${PORT}`);
  console.log(`🔒 Rate Limit: 60 requests/phút/IP kích hoạt`);
});

// Hàm xử lý tắt server an toàn
function gracefulShutdown(signal: string) {
  console.log(`\n🛑 Nhận tín hiệu ${signal}. Đang tiến hành Graceful Shutdown...`);
  
  // Ngừng nhận request mới, đợi các request dở dang xử lý xong
  server.close(() => {
    console.log("✅ Đã hoàn tất các kết nối HTTP đang chạy. Đóng server an toàn.");
    process.exit(0);
  });

  // Đặt timeout 10 giây ép buộc thoát nếu còn tiến trình treo
  setTimeout(() => {
    console.error("⚠️ Timeout 10s: Ép buộc dừng server do còn request chưa hoàn thành.");
    process.exit(1);
  }, 10000);
}

// Bắt các tín hiệu từ hệ điều hành / Docker / Kubernetes / Render
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));

// Bắt các lỗi chưa được catch để tránh crash đột ngột
process.on("unhandledRejection", (reason, promise) => {
  console.error("⚠️ Unhandled Promise Rejection:", promise, "reason:", reason);
});

process.on("uncaughtException", (error) => {
  console.error("💥 Uncaught Exception:", error);
  gracefulShutdown("UNCAUGHT_EXCEPTION");
});

