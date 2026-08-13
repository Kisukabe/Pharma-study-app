# 🚀 Hướng Dẫn Deploy & Cấu Hình CI/CD cho Dự Án Dược Liệu Học

Dự án đã được cấu hình linh hoạt hỗ trợ cả **Deploy Tách Rời (Frontend SPA + Backend API)** lẫn **Deploy Gộp Monolith (Docker Fullstack)**.

---

## 📂 Cấu Trúc Dự Án Tách Rời

- **Frontend**: React + Vite + Tailwind CSS (Nằm ở `/src`).
- **Backend API**: Express + `@google/genai` (Nằm ở `/server`).
- **API Helper**: `/src/config/api.ts` tự động điều hướng API URL thông qua biến môi trường `VITE_API_BASE_URL`.

---

## 🛠️ Các Lệnh Build & Run Trong `package.json`

| Lệnh | Công Dụng |
|---|---|
| `npm run dev` | Chạy ứng dụng monolith tích hợp (Dev mode) |
| `npm run dev:frontend` | Chạy riêng Frontend Vite Dev Server (`localhost:5173`) |
| `npm run dev:backend` | Chạy riêng Backend API Express (`localhost:5000`) |
| `npm run build:frontend` | Build tĩnh Frontend SPA ra thư mục `/dist` |
| `npm run build:backend` | Bundle riêng Backend Express ra `/dist/server-backend.cjs` |
| `npm run start:backend` | Khởi chạy Standalone Backend production |
| `npm run build` | Build gộp cả Frontend & Backend Monolith |
| `npm run start` | Khởi chạy Monolith Server production |

---

## 🌐 LỰA CHỌN 1: Deploy Tách Rời Frontend & Backend (Khuyên Dùng)

### Step 1: Deploy Backend API (Render / Railway / Cloud Run / Fly.io)

1. Tải code lên kho chứa GitHub.
2. Tạo Service mới trên **Render** / **Railway**:
   - **Environment**: Node.js
   - **Build Command**: `npm install && npm run build:backend`
   - **Start Command**: `npm run start:backend`
3. Cấu hình các **Environment Variables**:
   - `GEMINI_API_KEY`: Key Gemini API của bạn từ Google AI Studio.
   - `ALLOWED_ORIGINS`: Domain Frontend của bạn (Ví dụ: `https://ten-app-cua-ban.vercel.app` hoặc `*`).
   - `PORT`: Default `5000` (hoặc cổng do hosting tự cấp).
4. Sau khi deploy xong, bạn sẽ thu được **Backend URL** (Ví dụ: `https://duoclieu-backend.onrender.com`).

---

### Step 2: Deploy Frontend SPA (Vercel / Netlify / GitHub Pages)

#### A. Deploy lên Vercel / Netlify:
1. Kết nối kho lưu trữ GitHub vào **Vercel** hoặc **Netlify**.
2. **Framework Preset**: Vite.
3. **Build Command**: `npm run build:frontend`
4. **Output Directory**: `dist`
5. Thêm biến môi trường (**Environment Variables**):
   - `VITE_API_BASE_URL`: Đặt bằng URL Backend ở Step 1 (Ví dụ: `https://duoclieu-backend.onrender.com`).

#### B. Deploy tự động lên GitHub Pages (Qua CI/CD Workflow):
- Dự án đã tích hợp sẵn File `.github/workflows/deploy-frontend.yml`.
- Vào repository trên GitHub -> **Settings** -> **Pages** -> Chọn **Source: GitHub Actions**.
- Trong **Settings** -> **Secrets and variables** -> **Actions**, thêm secret:
  - `VITE_API_BASE_URL`: URL API Backend của bạn.

---

## 🐳 LỰA CHỌN 2: Deploy Bằng Docker / Docker Compose

### 1. Chạy Cả Frontend & Backend độc lập với Docker Compose (Local/VPS):
```bash
# Tạo file .env và đặt GEMINI_API_KEY
echo "GEMINI_API_KEY=your_gemini_api_key" > .env

# Khởi chạy 2 container
docker-compose up -d --build
```
- Frontend: `http://localhost:8080`
- Backend API: `http://localhost:5000`

### 2. Build Docker Monolith Single Container:
```bash
docker build -t duoclieu-app .
docker run -d -p 3000:3000 -e GEMINI_API_KEY="your_api_key" duoclieu-app
```

---

## 🔄 Quy Trình CI/CD Tự Động (GitHub Actions)

Dự án bao gồm 3 file workflow CI/CD trong thư mục `.github/workflows/`:

1. **`ci.yml`**:
   - Tự động chạy khi có Push / Pull Request vào nhánh `main` / `master`.
   - Kiểm tra Typecheck (TypeScript linting), kiểm tra build độc lập Frontend, Backend và Monolith.
2. **`deploy-frontend.yml`**:
   - Tự động Build Frontend SPA & Deploy trực tiếp lên **GitHub Pages** khi push code mới.
3. **`deploy-backend.yml`**:
   - Kiểm tra khả năng đóng gói Docker Container cho Backend.

---

## 🔐 Bảo Mật API Key
- `GEMINI_API_KEY` luôn nằm trên Server/Backend, tuyệt đối không lộ ở phía Client/Browser.
- Mọi cuộc gọi AI từ Frontend đều thông qua Proxy `/api/chat` giúp bảo mật hoàn toàn API Key.
