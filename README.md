# 🌿 Học Dược Cùng Ngọt (Pharma Study App)

> **Nền tảng ôn tập Dược Liệu Học & Trắc nghiệm tương tác tích hợp Trợ lý AI (Google Gemini 3.6 Flash)**  
> Ứng dụng hỗ trợ sinh viên Dược ghi nhớ hệ thống kiến thức 7 chương lý thuyết đại cương, quy trình thu hái, chiết xuất, sắc ký, tiêu chuẩn GACP, bảo tồn tài nguyên và luyện đề thi trắc nghiệm giữa kỳ chấm điểm tự động.

---

## ✨ Tính Năng Nổi Bật

- 📘 **Giáo Trình Lý Thuyết 7 Chương (PDF 25 trang)**: Tích hợp đầy đủ 7 chương giáo trình Dược liệu học đại cương với 4 chế độ đọc linh hoạt (*Toàn văn lý thuyết*, *Tóm tắt trọng tâm*, *Bảng so sánh đối chiếu*, và *Hỏi đáp lật mở đáp án*).
- 🎴 **Hệ Thống Flashcard Thông Minh**: Bộ 59+ thẻ ghi nhớ phân loại theo từng chuyên đề và bài học. Phân tách nguồn học tập thông minh, hỗ trợ xáo trộn thẻ và đánh dấu *"Đã thuộc"* / *"Cần ôn lại"*.
- 📝 **Ngân Hàng Đề Thi Trắc Nghiệm Tự Động Tráo Câu Hỏi**: Bộ ngân hàng 160+ câu hỏi trắc nghiệm giữa kỳ chuẩn cấu trúc 60 câu / 30 phút. **Tự động tráo ngẫu nhiên thứ tự câu hỏi (Shuffle)** mỗi lượt làm đề mới giúp sinh viên luyện tập đa dạng không bị rập khuôn.
- 🔍 **Tra Cứu Từ Điển Chuyên Ngành Dược Liệu**: Tìm kiếm nhanh chóng hàng chục thuật ngữ, họ thực vật, hợp chất (Coumarin, Glycosid, Carbohydrat...), phương pháp chiết xuất, chỉ số sắc ký (HPLC, TLC, UV-Vis, IR, NMR, MS).
- 🤖 **Trợ Lý Giảng Viên AI (Gemini 3.6 Flash)**: Hỏi đáp trực tiếp, giải thích chi tiết đáp án câu hỏi khó và tư vấn phương pháp học tập chuẩn Y Dược.
- 📊 **Thống Kê Tiến Độ Cá Nhân**: Tự động lưu tiến độ học tập, theo dõi tỉ lệ thuộc thẻ flashcards, lịch sử thi trắc nghiệm và điểm số trực tiếp trên trình duyệt (`localStorage`).

---

## 🏗️ Kiến Trúc Hệ Thống

Ứng dụng được thiết kế theo kiến trúc **Decoupled Monolith & Micro-Services**:

```text
[Người Dùng / Trình Duyệt]
           │
           ▼
┌───────────────────────────────────────┐
│     FRONTEND (React 19 + Vite)        │  ---> Deploy trên VERCEL
│   Tailwind CSS v4 • Lucide Icons      │       (Global Edge CDN)
└──────────────────┬────────────────────┘
                   │ HTTPS API Proxy (/api/chat, /api/health)
                   ▼
┌───────────────────────────────────────┐
│     BACKEND (Node.js + Express)       │  ---> Deploy trên RENDER.COM
│   Standalone Express API Proxy        │       (Web Service Node.js 22)
└──────────────────┬────────────────────┘
                   │
                   ▼
┌───────────────────────────────────────┐
│     GOOGLE GEMINI 3.6 FLASH AI        │  ---> Bảo mật API Key 100%
│   SDK @google/genai v2.4              │       ở Server Backend
└───────────────────────────────────────┘
```

---

## 🛠️ Ngôn Ngữ, Công Nghệ & Thư Viện

| Thành Phần | Công Nghệ / Thư Viện | Phiên Bản | Công Dụng |
|---|---|---|---|
| **Môi Trường & Core** | **Node.js** | `v22.x` (LTS) | Môi trường chạy TypeScript/JavaScript & GitHub Actions Runner |
| | **TypeScript** | `v5.8.2` | Đảm bảo an toàn kiểu dữ liệu Type-Safe toàn bộ dự án |
| **Frontend Framework** | **React** | `v19.0.1` | Thư viện giao diện người dùng SPA |
| | **Vite** | `v6.2.3` | Bundler & Dev Server siêu tốc |
| **Giao Diện & Style** | **Tailwind CSS** | `v4.1.14` | Framework CSS v4 với `@custom-variant dark` linh hoạt |
| | **Lucide React** | `v0.546.0` | Bộ biểu tượng SVG hiện đại |
| **Backend & AI Engine** | **Express.js** | `v4.21.2` | Framework Web Service REST API |
| | **@google/genai** | `v2.4.0` | SDK kết nối Google Gemini 3.6 Flash |
| **DevOps & CI/CD** | **GitHub Actions** | `Node 22 Workflows` | CI Check & CD Deploy tự động lên Vercel bằng `npx vercel@latest` |
| | **Docker** | Multi-stage Dockerfile | Container hóa ứng dụng cho môi trường Local / VPS |

---

## 🚀 Hướng Dẫn Chạy & Cài Đặt

### 1. Khởi Chạy Local (Môi Trường Phát Triển)

```bash
# Cài đặt thư viện
npm install

# Tạo file biến môi trường
cp .env.example .env
# Mở file .env và bổ sung: GEMINI_API_KEY=your_gemini_key

# Chạy ứng dụng tích hợp
npm run dev
```
- **Frontend SPA**: `http://localhost:5173`
- **Backend API**: `http://localhost:5000/api/health`

---

### 2. Triển Khai Miễn Phí Lên Cloud (Render + Vercel)

#### 🔹 Bước A: Deploy Backend lên Render.com
1. Đăng nhập [render.com](https://render.com/) ➔ Chọn **New Web Service**.
2. Kết nối tới repository `Pharma-study-app`.
3. Cấu hình:
   - **Build Command**: `npm install && npm run build:backend`
   - **Start Command**: `npm run start:backend`
   - **Environment Variable**: `GEMINI_API_KEY` = *[API Key Gemini của bạn]*, `ALLOWED_ORIGINS` = `*`.

#### 🔹 Bước B: Deploy Frontend lên Vercel
1. Đăng nhập [vercel.com](https://vercel.com/) ➔ Import kho `Pharma-study-app`.
2. **Framework Preset**: `Vite`.
3. **Environment Variable**: `VITE_API_BASE_URL` = *[Link URL Backend Render ở Bước A]*.
4. Bấm **Deploy**.

#### 🔹 Bước C: Cấu Hình GitHub Actions Auto Deploy
Vào GitHub Repository ➔ **Settings** ➔ **Secrets and variables** ➔ **Actions**, thêm 3 secret:
- `VERCEL_TOKEN`: Token lấy từ [vercel.com/account/tokens](https://vercel.com/account/tokens).
- `VERCEL_ORG_ID`: Lấy từ `.vercel/repo.json` (`team_lmbYx8uJrRepWjSvsMCUmvZl`).
- `VERCEL_PROJECT_ID`: Lấy từ `.vercel/repo.json` (`prj_gbkOajiEDf7uBto9nUC7kivTGXyh`).

---

## 📜 Giấy Phép & Tác Quyền

Dự án phát triển phục vụ mục đích học tập và nghiên cứu môn **Dược Liệu Học 1**.  
Biên soạn bởi **Gia Bảo học dataScience**.
