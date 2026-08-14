# 🏛️ Fullstack Architecture & CI/CD Framework Blueprint

Tài liệu này là **Khung Mẫu Chuẩn (Standard Blueprint)** được thiết kế để áp dụng cho mọi dự án Full-stack Web/App hiện đại, cân bằng giữa:
1. **Giai đoạn Ban đầu / Demo**: Hoàn toàn **0 VNĐ / tháng**, tối ưu hóa RAM và CPU tối đa.
2. **Giai đoạn Production Scale**: Sẵn sàng chịu tải cho hàng chục ngàn người dùng bằng Docker/Kubernetes mà không cần thay đổi kiến trúc mã nguồn.

---

## 🗺️ 1. Sơ Đồ Kiến Trúc Hệ Thống (Architecture Flow)

```text
               [ LẬP TRÌNH VIÊN ]
                       │
       (1) Test Local bằng Docker Desktop
           [ docker compose up --build ]
                       │
             (2) Git Push (GitHub)
                       │
       ┌───────────────┴─────────────────────────┐
       ▼                                         ▼
[ GITHUB ACTIONS (CI) ]                [ GITHUB REGISTRY (GHCR) ]
- TypeCheck (tsc --noEmit)             - Đóng gói Docker Image
- Test Build Frontend & Backend        - Đánh tag version (v1.0.0, latest)
- Docker Build Verification                      │
       │                                         │
       ├─────────────────────────────────────────┘
       ▼
[ CONTINUOUS DEPLOYMENT (CD) ]
       ├── Frontend ➔ Vercel / Cloudflare Pages (Static Edge CDN, 0đ)
       └── Backend  ➔ Render / VPS / Cloud Run (Docker Container siêu nhẹ, 0đ)
```

---

## 📁 2. Cấu Trúc Thư Mục Tiêu Chuẩn

```text
project-root/
├── .github/
│   └── workflows/
│       ├── ci.yml               # Quality Gate: Linting & Build verification
│       ├── deploy-frontend.yml  # Auto deploy Frontend lên Vercel/Cloudflare
│       └── deploy-backend-*.yml # Auto deploy Backend lên Render/HF/GHCR
├── server/                      # Standalone Backend Service (Node.js/Express)
│   ├── routes/                  # API Endpoints (/api/...)
│   └── standalone.ts            # Entrypoint Backend (Rate Limit, Health, Graceful Shutdown)
├── src/                         # Frontend Application (React, Vite, TailwindCSS)
├── dist/                        # Build output (Auto generated)
├── Dockerfile.backend           # Multi-stage Dockerfile cho Backend
├── Dockerfile.frontend          # Nginx Alpine Dockerfile cho Frontend
├── docker-compose.yml           # Unified orchestration for Local Testing
├── render.yaml                  # Infrastructure as Code cho Render Web Service
├── package.json                 # Standardized npm scripts
└── tsconfig.json                # TypeScript strict configuration
```

---

## ⚙️ 3. Danh Mục Lệnh Chuẩn (`package.json`)

| Script | Ý Nghĩa & Vai Trò |
|---|---|
| `npm run dev` | Chạy dev mode tích hợp (Monolith) |
| `npm run dev:frontend` | Chạy riêng Vite Dev Server (`localhost:5173`) |
| `npm run dev:backend` | Chạy riêng Backend Server (`localhost:5000`) |
| `npm run build:frontend` | Build static bundle Frontend ra `/dist` |
| `npm run build:backend` | Bundle Backend thành 1 file CJS duy nhất ra `/dist/server-backend.cjs` |
| `npm run start:backend` | Khởi chạy Production Backend |
| `npm run lint` | TypeScript TypeCheck toàn diện (`tsc --noEmit`) |

---

## 🐳 4. Đóng Gói Docker Chuẩn OCI (Multi-Stage)

### `Dockerfile.backend` (Dung lượng < 100MB, RAM < 40MB)
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build:backend

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist/server-backend.cjs ./dist/server-backend.cjs
EXPOSE 5000
CMD ["node", "dist/server-backend.cjs"]
```

---

## 🛡️ 5. Tiêu Chuẩn Backend Cloud-Native

1. **Rate Limiting**: Tự động chặn IP spam, bảo vệ Quota AI và chống quá tải tài nguyên.
2. **Health Check (`/api/health` hoặc `/`)**: Cung cấp trạng thái uptime, bộ nhớ RAM tiêu thụ để Load Balancer giám sát.
3. **Graceful Shutdown (`SIGTERM` / `SIGINT`)**: Chờ các kết nối HTTP đang xử lý hoàn thành trước khi tắt container khi re-deploy.
