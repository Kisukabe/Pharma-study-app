# 🚀 Hướng Dẫn Deploy & Cấu Hình CI/CD (Vercel + Hugging Face Spaces)

Dự án hỗ trợ kiến trúc phân tách hiện đại:
- **Frontend SPA**: Deploy lên **Vercel** (CDN toàn cầu, tốc độ cao, hoàn toàn miễn phí).
- **Backend API (Node.js/Express + Gemini AI)**: Deploy lên **Hugging Face Spaces** (Docker SDK miễn phí, chạy 24/7, bảo mật API Key tuyệt đối).
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
[Backend: Hugging Face Spaces (Docker Node.js)] <--- Port 7860
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

### Bước 1: Deploy Backend lên Hugging Face Spaces

1. Đăng nhập vào [Hugging Face](https://huggingface.co/) và bấm **New Space**.
2. Thiết lập thông số:
   - **Space name**: Ví dụ `pharma-study-backend`
   - **License**: `mit` hoặc `apache-2.0`
   - **Space SDK**: Chọn **Docker** -> Chọn **Blank**
   - **Space Hardware**: Chọn **Free (CPU basic · 2 vCPU · 16 GB · Free)**
   - **Privacy**: `Public` (để Frontend từ Vercel có thể gọi API)
3. Sau khi tạo Space, vào **Settings** -> **Variables and secrets**:
   - Thêm Secret `GEMINI_API_KEY`: Điền API key từ Google AI Studio.
   - Thêm Variable `ALLOWED_ORIGINS`: Điền `*` hoặc domain Vercel của bạn.
4. Lấy **Direct URL của Space**:
   - URL có dạng: `https://<username>-<space-name>.hf.space` (Ví dụ: `https://kisukabe-pharma-study-backend.hf.space`).
   - Kiểm tra bằng cách truy cập: `https://<your-space>.hf.space/api/health` -> Nhận được `{"status":"ok"}` là thành công.

---

### Bước 2: Deploy Frontend lên Vercel

1. Đăng nhập vào [Vercel](https://vercel.com/) và bấm **Add New...** -> **Project**.
2. Import repository GitHub của bạn.
3. Thiết lập Build & Output:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build:frontend`
   - **Output Directory**: `dist`
4. Cấu hình **Environment Variables**:
   - `VITE_API_BASE_URL`: Điền URL Backend Hugging Face ở Bước 1 (Ví dụ: `https://kisukabe-pharma-study-backend.hf.space`).
5. Bấm **Deploy**. Sau 1-2 phút, Frontend đã live trực tuyến!

---

## 🔄 Tự Động Hóa CI/CD (GitHub Actions)

Dự án đã tích hợp sẵn 3 workflows trong `.github/workflows/`:

1. **`ci.yml` (Continuous Integration & Quality Gate)**:
   - Tự động chạy mỗi khi có `push` hoặc `pull_request` vào nhánh `main`.
   - Chạy kiểm tra TypeScript (`tsc --noEmit`), build thử Frontend, Backend độc lập và Monolith.

2. **`deploy-frontend.yml` (CD Vercel)**:
   - Tự động trigger build và deploy Frontend lên Vercel khi có commit mới.
   - Yêu cầu cấu hình GitHub Secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`, `VITE_API_BASE_URL`.

3. **`deploy-backend-hf.yml` (CD Hugging Face Spaces)**:
   - Tự động đồng bộ code Backend lên Hugging Face Space repository.
   - Yêu cầu cấu hình GitHub Secrets: `HF_TOKEN` (lấy tại `huggingface.co/settings/tokens`), `HF_SPACE_REPO` (dạng `username/space-name`).

---

## 🐳 Triển Khai Local / VPS Bằng Docker Compose

Nếu muốn chạy toàn bộ trên máy cá nhân hoặc VPS riêng:

```bash
# 1. Tạo file .env và cấu hình GEMINI_API_KEY
echo "GEMINI_API_KEY=your_gemini_api_key" > .env

# 2. Khởi chạy 2 container độc lập
docker-compose up -d --build
```
- Frontend: `http://localhost:8080`
- Backend API: `http://localhost:5000`
- API Health: `http://localhost:5000/api/health`

---

## 🔐 Bảo Mật API Key
- `GEMINI_API_KEY` luôn được giữ an toàn phía Backend/Server (trên Hugging Face Space Secret), tuyệt đối không bao giờ được lộ ra mã nguồn trình duyệt Client.
- Mọi tương tác AI đều được proxy an toàn qua endpoint `/api/chat` và `/api/generate-cards`.
