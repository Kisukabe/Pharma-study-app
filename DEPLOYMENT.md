# 🚀 Hướng Dẫn Deploy & Cấu Hình CI/CD (Vercel + Render.com)

Dự án hỗ trợ kiến trúc phân tách hiện đại (100% Miễn phí, không cần thẻ tín dụng):
- **Frontend SPA**: Deploy lên **Vercel** (CDN toàn cầu, tốc độ cao, hoàn toàn miễn phí).
- **Backend API (Node.js/Express + Gemini AI)**: Deploy lên **Render.com** (Web Service Node.js miễn phí, bảo mật API Key tuyệt đối).
- **CI/CD Quality Gate**: Tự động hóa qua **GitHub Actions** (`.github/workflows/`).

---

## 📂 Kiến Trúc Hệ Thống

```text
[Trình duyệt / Người dùng]
          │
          ▼
[Frontend: Vercel (React Vite SPA)]  <--- Vercel CDN
          │
          ▼ (HTTPS API Call)
[Backend: Render.com (Node.js Express API)] <--- Port tự động
          │
          ▼ (Internal Proxy)
[Google Gemini 3.6 Flash API] <--- GEMINI_API_KEY được bảo mật
```

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
| `npm run lint` | Kiểm tra lỗi kiểu TypeScript (`tsc --noEmit`) |

---

## 🌐 HƯỚNG DẪN TRIỂN KHAI CHI TIẾT

### Bước 1: Deploy Backend lên Render.com (Làm trước)

1. Truy cập [render.com](https://render.com/) và đăng nhập bằng tài khoản GitHub.
2. Bấm **New +** ở góc trên ➔ Chọn **Web Service**.
3. Chọn **Build and deploy from a Git repository** ➔ Bấm **Next**.
4. Tìm và chọn repository `Pharma-study-app` của bạn ➔ Bấm **Connect**.
5. Cấu hình thông số:
   - **Name**: `pharma-study-backend` (hoặc tên tùy thích)
   - **Region**: `Singapore` (hoặc `Oregon`)
   - **Branch**: `main`
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm run build:backend`
   - **Start Command**: `npm run start:backend`
   - **Instance Type**: Chọn **Free** (0$/tháng)
6. Cuộn xuống mục **Environment Variables** ➔ Bấm **Add Environment Variable**:
   - `GEMINI_API_KEY`: Dán Key Gemini API của bạn từ Google AI Studio.
   - `ALLOWED_ORIGINS`: `*`
7. Bấm **Create Web Service**.
8. Đợi 1-2 phút Render build xong, bạn sẽ nhận được **URL Backend** ở đầu trang (dạng: `https://pharma-study-backend.onrender.com`).
   - *Kiểm tra: Mở link `https://pharma-study-backend.onrender.com/api/health` ➔ Thấy `{"status":"ok"}` là backend đã sẵn sàng!*

---

### Bước 2: Deploy Frontend lên Vercel (Làm sau)

1. Truy cập [vercel.com](https://vercel.com/) và đăng nhập bằng tài khoản GitHub.
2. Bấm **Add New...** ➔ Chọn **Project**.
3. Tìm kho lưu trữ `Pharma-study-app` của bạn và bấm **Import**.
4. Cấu hình dự án:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build:frontend`
   - **Output Directory**: `dist`
5. Mở mục **Environment Variables**:
   - **Key**: `VITE_API_BASE_URL`
   - **Value**: Dán URL Backend Render ở Bước 1 vào (Ví dụ: `https://pharma-study-backend.onrender.com`).
6. Bấm **Deploy**. Sau 1 phút, ứng dụng của bạn đã chính thức online!

---

## 🔐 Bảo Mật API Key
- `GEMINI_API_KEY` luôn được giữ an toàn phía Backend/Server trên Render.com, tuyệt đối không lộ ở phía Client/Browser.
- Mọi tương tác AI đều được proxy an toàn qua endpoint `/api/chat` và `/api/generate-cards`.
