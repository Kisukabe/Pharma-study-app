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
- 🌓 **Đa Chế Độ Giao Diện**: Hỗ trợ giao diện Sáng (Light), Tối (Dark) và Tự động theo Hệ thống (System).

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

## ❓ Docker, Vercel và Render.com Dùng Để Làm Gì?

### 1. 🐳 Docker Dùng Để Làm Gì?
* **Đóng gói chuẩn hóa**: Toàn bộ mã nguồn, thư viện, môi trường Node.js và Nginx được đóng gói thành các Docker Image độc lập ([Dockerfile.frontend](file:///Users/giabao/Desktop/GItHub/Pharma-study-app/Dockerfile.frontend) & [Dockerfile.backend](file:///Users/giabao/Desktop/GItHub/Pharma-study-app/Dockerfile.backend)).
* **Chạy 1 lệnh duy nhất (`docker-compose up -d`)**: Bất kỳ ai tải project về đều có thể chạy ngay toàn bộ Frontend + Backend trên máy tính cá nhân hoặc VPS riêng mà **không cần phải cài đặt Node.js hay cấu hình môi trường phức tạp**.
* **Đảm bảo tính nhất quán**: Code chạy trên máy bạn như thế nào thì khi lên máy chủ production sẽ hoạt động chính xác 100% như vậy.

### 2. ⚡ Vercel Dùng Để Làm Gì?
* **Host Frontend SPA (React + Vite)**: Vercel là nền tảng tối ưu hàng đầu thế giới cho các ứng dụng React tĩnh.
* **Tốc độ cực nhanh**: Phân phối ứng dụng qua mạng lưới CDN toàn cầu (Edge Network), giúp người dùng tại Việt Nam mở web gần như ngay lập tức.
* **Tự động hóa CI/CD**: Mỗi khi bạn `git push` code mới lên GitHub, Vercel sẽ tự động phát hiện, build và cập nhật giao diện web trong vòng 30 giây.
* **Định tuyến SPA**: File [vercel.json](file:///Users/giabao/Desktop/GItHub/Pharma-study-app/vercel.json) giúp đảm bảo việc chuyển trang không bị lỗi 404.

### 3. 🛡️ Render.com Dùng Để Làm Gì?
* **Host Backend API (Node.js Express Server)**: Vì Vercel chỉ chạy web tĩnh, ta cần Render.com để chạy máy chủ Backend 24/7.
* **Bảo mật tuyệt đối `GEMINI_API_KEY`**: Khóa API AI của Google được lưu trên máy chủ Render, người dùng ở trình duyệt hoàn toàn không thể xem trộm được key.
* **Xử lý Proxy & CORS**: Tiếp nhận các yêu cầu hỏi đáp AI từ Frontend, gọi đến Google AI và trả dữ liệu về an toàn.

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

## 🛠️ Công Nghệ Sử Dụng

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4, Lucide React, Motion.
- **Backend**: Node.js, Express, `@google/genai` (Google Gen AI SDK), Esbuild, TSX.
- **DevOps & Deployment**: Docker, Docker Compose, GitHub Actions (CI/CD), Vercel, Render.com.

---

## 📄 Bản Quyền & Giấy Phép
Dự án được xây dựng phục vụ mục đích học tập, nghiên cứu và ôn thi môn Dược Liệu Học.
Nội dung bám sát khung chương trình đào tạo Dược học chính quy tại Việt Nam.
