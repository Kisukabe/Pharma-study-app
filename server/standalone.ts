import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { apiRouter } from "./routes/api.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS for standalone backend deployment
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : ["*"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes("*") || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true); // Allow for seamless development
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// Mount API routes
app.use("/api", apiRouter);

// Root Endpoint for Standalone API status
app.get("/", (_req, res) => {
  res.json({
    message: "Dược Liệu Học - Standalone API Backend",
    docs: "/api/health",
  });
});

app.listen(PORT, () => {
  console.log(`Backend API Server running on port ${PORT}`);
});
