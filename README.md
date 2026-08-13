# 🌿 Học Dược Cùng Ngọt (Pharma Study App)

> **Nền tảng ôn tập Dược Liệu Học & Trắc nghiệm tương tác tích hợp Trợ lý AI (Google Gemini 3.6 Flash)**  
> Ứng dụng giúp sinh viên Dược dễ dàng ghi nhớ cây thuốc, họ thực vật, hoạt chất, quy trình thu hái, chiết xuất, kiểm nghiệm và luyện đề thi trắc nghiệm.

---

## ✨ Tính Năng Nổi Bật

- 🗂️ **Hệ Thống Flashcard Thông Minh**: Ôn tập nhanh các khái niệm đại cương, nhóm hoạt chất (Coumarin, Glycosid...), tiêu chuẩn GACP-WHO, hỗ trợ đánh dấu *"Đã thuộc"* hoặc *"Cần ôn lại"*.
- 📝 **Ngân Hàng Đề Thi Trắc Nghiệm**: Bộ đề thi Giữa kỳ chuẩn Dược 1 (Đề D2022, Đề 60 câu/30 phút, Bộ câu hỏi nâng cao), có tính giờ, chấm điểm tự động và giải thích chi tiết từng câu.
- 📖 **Từ Điển Chuyên Ngành Dược Liệu**: Tra cứu nhanh danh mục cây thuốc, tên khoa học (Latinh), họ thực vật, bộ phận dùng, hoạt chất chính và công dụng chữa bệnh.
- 🤖 **Trợ Lý Giảng Viên AI (Gemini 3.6 Flash)**: Hỏi đáp, giải thích sâu các câu trắc nghiệm khó, phân biệt cơ chế tác dụng, phương pháp sắc ký (TLC, HPLC) và gợi ý mẹo học tập.
- 📊 **Thống Kê Tiến Độ Cá Nhân**: Theo dõi số thẻ đã thuộc, lịch sử làm bài thi, tỉ lệ trả lời đúng theo từng chuyên đề (tự động lưu vào trình duyệt).
---

## 🏗️ Kiến Trúc Hệ Thống

Dự án được xây dựng theo mô hình **Tách rời hiện đại (Decoupled Frontend SPA + Backend API)**:

```text
[Người Dùng / Trình Duyệt]
           │
           ▼
┌───────────────────────────────────────┐
│     FRONTEND (React 19 + Vite)        │  ---> Host trên VERCEL
│   Tailwind CSS v4 • Lucide Icons      │       (Global CDN Tốc Độ Cao)
└──────────────────┬────────────────────┘
                   │ HTTPS API Call (/api/chat, /api/health)
                   ▼
┌───────────────────────────────────────┐
│     BACKEND (Node.js + Express)       │  ---> Host trên RENDER.COM
│   Standalone API Proxy Server         │       (Web Service Node.js)
└──────────────────┬────────────────────┘
                   │
                   ▼
┌───────────────────────────────────────┐
│     GOOGLE GEMINI 3.6 FLASH AI        │  ---> API Key được bảo mật
│   Xử lý ngôn ngữ tự nhiên Y Dược      │       100% trên Server
└───────────────────────────────────────┘
```

---

## 🌐 Vai Trò & Áp Dụng Công Nghệ Triển Khai

- 🐳 **Docker (`Dockerfile`, `docker-compose`)**: Đóng gói toàn bộ Frontend & Backend thành các container độc lập, giúp chạy ứng dụng trên máy local/VPS nhanh chóng chỉ với 1 lệnh `docker-compose up -d` mà không cần cài môi trường.
- ⚡ **Vercel**: Nền tảng lưu trữ (Host) **Frontend SPA**, phân phối qua mạng lưới Edge CDN toàn cầu và tự động build/deploy (CI/CD) mỗi khi push code lên GitHub.
- 🛡️ **Render.com**: Nền tảng lưu trữ (Host) **Backend Express API**, đóng vai trò làm API Proxy chạy 24/7 giúp kết nối và bảo mật tuyệt đối `GEMINI_API_KEY`.
- 🤖 **GitHub Actions**: Tự động kiểm tra chất lượng code (Typecheck/Lint) và xác thực build mỗi khi có thay đổi trong repository.

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Ứng Dụng

### Lựa Chọn 1: Chạy Local (Phát triển / Lập trình)

```bash
# 1. Cài đặt các thư viện
npm install

# 2. Tạo file .env và điền Gemini API Key
cp .env.example .env
# Mở file .env và điền GEMINI_API_KEY=your_key_here

# 3. Khởi chạy chế độ phát triển (Monolith tích hợp cả FE + BE)
npm run dev
```
👉 Truy cập: `http://localhost:5173` (Frontend) hoặc `http://localhost:5000/api/health` (Backend API).

---

### Lựa Chọn 2: Chạy Bằng Docker Compose (Local / VPS)

```bash
# 1. Điền API Key vào file môi trường
echo "GEMINI_API_KEY=your_gemini_api_key_here" > .env

# 2. Khởi chạy 2 container độc lập
docker-compose up -d --build
```
- **Frontend Web**: `http://localhost:8080`
- **Backend API**: `http://localhost:5000`

---

### Lựa Chọn 3: Triển Khai Miễn Phí Lên Cloud (Vercel + Render.com)

1. **Deploy Backend lên [Render.com](https://render.com/)**:
   - Tạo **Web Service** mới từ GitHub repo `Pharma-study-app`.
   - **Runtime**: `Node`.
   - **Build Command**: `npm install && npm run build:backend`
   - **Start Command**: `npm run start:backend`
   - **Environment Variables**: `GEMINI_API_KEY` = *[Key của bạn]*, `ALLOWED_ORIGINS` = `*`.
   - Lấy URL Backend được cấp (Ví dụ: `https://pharma-study-backend.onrender.com`).

2. **Deploy Frontend lên [Vercel](https://vercel.com/)**:
   - Import repo `Pharma-study-app` vào Vercel.
   - **Framework Preset**: `Vite`.
   - **Environment Variables**: Thêm biến `VITE_API_BASE_URL` trỏ vào link Backend Render ở trên.
   - Bấm **Deploy**.

---

## 🛠️ Ngôn Ngữ, Công Nghệ & Phiên Bản Sử Dụng

Dự án sử dụng các công nghệ và thư viện phiên bản mới nhất:

| Thành Phần | Công Nghệ / Thư Viện | Phiên Bản | Mục Đích Sử Dụng |
|---|---|---|---|
| **Môi Trường & Ngôn Ngữ** | **Node.js** | `v20.x` (LTS) | Môi trường thực thi JavaScript/TypeScript server & build |
| | **TypeScript** | `v5.8.2` | Ngôn ngữ lập trình chính, đảm bảo an toàn kiểu dữ liệu (Type-Safe) |
| **Frontend Framework** | **React** | `v19.0.1` | Thư viện xây dựng giao diện người dùng SPA |
| | **React DOM** | `v19.0.1` | Render React elements vào DOM |
| **Build Tool & Bundler**| **Vite** | `v6.2.3` | Bundler & Dev Server siêu tốc cho Frontend |
| | **Esbuild** | `v0.25.0` | Đóng gói Backend Express thành Single File CJS cực nhanh |
| | **TSX** | `v4.21.0` | Chạy trực tiếp file TypeScript trên Node.js không cần compile |
| **Giao Diện & Hiệu Ứng** | **Tailwind CSS** | `v4.1.14` | Framework CSS thế hệ mới, tối ưu kích thước và tốc độ render |
| | **Motion (Framer)** | `v12.23.24` | Tạo animation, hiệu ứng lật thẻ và chuyển động mượt mà |
| | **Lucide React** | `v0.546.0` | Bộ icon SVG hiện đại, sắc nét |
| **Backend & AI Engine** | **Express.js** | `v4.21.2` | Web Framework xây dựng REST API Proxy |
| | **@google/genai** | `v2.4.0` | SDK chính thức từ Google kết nối **Gemini 3.6 Flash** |
| | **CORS & Dotenv** | `cors v2.8.6`, `dotenv v17.2.3` | Xử lý Cross-Origin Resource Sharing và biến môi trường |
| **DevOps & Hosting** | **Docker & Compose** | Dockerfile multi-stage, compose `v3.8` | Container hóa Nginx Alpine (Frontend) & Node Alpine (Backend) |
| | **GitHub Actions** | Workflows v4 | Tự động hóa CI/CD kiểm tra typecheck và build tự động |
| | **Vercel** | Edge Network / Vite Preset | Nền tảng hosting Frontend tĩnh toàn cầu |
| | **Render.com** | Node.js Web Service | Máy chủ hosting Backend API 24/7 |

---
