import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // AI Chat and Explanation Proxy Endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { prompt, context, systemInstruction, sourceContext } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
        return res.status(400).json({
          error: "Chưa cấu hình GEMINI_API_KEY trong hệ thống. Vui lòng thêm GEMINI_API_KEY vào panel cài đặt Secrets.",
        });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const SOURCE_NAMES: Record<string, string> = {
        all: "Toàn bộ chương trình Dược Liệu Học",
        daicuong: "Phần Đại Cương & Lịch Sử Y Dược Liệu",
        midterm: "Bộ Đề Thi Giữa Kỳ 60 Câu / 30 Phút",
        "harvest-process": "Phần Thu Hái, Chế Biến & Bảo Quản Dược Liệu",
        "analysis-chromatography": "Phần Sắc Ký (TLC, HPLC) & Kiểm Nghiệm Dược Liệu",
        "compounds-resources": "Phần Hoạt Chất (Coumarin, Pectin...) & Tài Nguyên Dược Liệu",
      };

      const systemPrompt =
        systemInstruction ||
        "Bạn là giảng viên chuyên ngành Dược Liệu Học (Pharmacognosy) giàu kinh nghiệm. Bạn trả lời bằng tiếng Việt thân thiện, chính xác theo chương trình Y Dược TP.HCM và Hà Nội, giải thích mạch lạc các câu hỏi trắc nghiệm, thuật ngữ, cấu trúc hóa học, kỹ thuật chiết xuất/sắc ký, và tài nguyên cây thuốc.";

      let fullPrompt = "";
      if (context) {
        fullPrompt += `[Bối cảnh/Câu hỏi cần giải thích]:\n${context}\n\n`;
      }
      if (sourceContext && SOURCE_NAMES[sourceContext]) {
        fullPrompt += `[Chủ đề/Nguồn trọng tâm]: ${SOURCE_NAMES[sourceContext]}\n\n`;
      }
      fullPrompt += `[Câu hỏi/Thắc mắc của sinh viên]:\n${prompt}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: fullPrompt,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.7,
        },
      });

      return res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      return res.status(500).json({
        error: "Lỗi xử lý yêu cầu AI: " + (error?.message || "Không thể kết nối Gemini API"),
      });
    }
  });

  // AI Quiz/Flashcard Generator Endpoint
  app.post("/api/generate-cards", async (req, res) => {
    try {
      const { topic, count = 5 } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
        return res.status(400).json({
          error: "Chưa cấu hình GEMINI_API_KEY.",
        });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const prompt = `Hãy tạo ${count} câu hỏi trắc nghiệm Dược Liệu Học về chủ đề "${topic}".
Trả về định dạng JSON thuần túy (dạng mảng JSON):
[
  {
    "id": "gen_1",
    "question": "Câu hỏi...",
    "options": ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
    "correctIndex": 0,
    "explanation": "Giải thích lý do đúng...",
    "category": "${topic}"
  }
]
Chỉ trả về JSON hợp lệ, không có markdown code blocks hay chữ nào khác.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
      });

      const cleanText = (response.text || "").replace(/```json/g, "").replace(/```/g, "").trim();
      const parsed = JSON.parse(cleanText);
      return res.json({ items: parsed });
    } catch (error: any) {
      console.error("Generate error:", error);
      return res.status(500).json({ error: "Không thể tạo tự động câu hỏi." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      const indexPath = path.join(distPath, "index.html");
      res.sendFile(indexPath, (err) => {
        if (err && !res.headersSent) {
          console.error("Error serving index.html:", err);
          res.status(500).send("Error loading application. Please refresh or re-build.");
        }
      });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
