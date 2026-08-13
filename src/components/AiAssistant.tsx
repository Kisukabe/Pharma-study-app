import React, { useState, useEffect } from 'react';
import { Sparkles, Send, Bot, User, Loader2 } from 'lucide-react';
import { getApiUrl } from '../config/api';

interface AiAssistantProps {
  selectedSource?: string;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ selectedSource = 'all' }) => {
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    {
      sender: 'ai',
      text: 'Chào bạn! Tôi là Trợ lý AI Dược Liệu Học. Bạn cần giải thích câu hỏi trắc nghiệm, thuật ngữ hay kiến thức thuộc nguồn nào?'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Dynamic sample prompts based on selectedSource
  const getSamplePrompts = () => {
    switch (selectedSource) {
      case 'daicuong':
        return [
          'Giải thích tại sao Pharmacognosy lại được ghép từ Pharmakon và Gnosis?',
          'So sánh vai trò lịch sử của Thiền sư Tuệ Tĩnh và Lê Hữu Trác (Hải Thượng Lãn Ông)?',
          'Đóng góp đột phá của Paracelsus đối với ngành Y Dược thế giới là gì?',
          'Tóm tắt các mốc phát triển chính của YHCT Việt Nam qua các thời kỳ lịch sử.'
        ];
      case 'midterm':
        return [
          'Tóm tắt các dạng câu hỏi trắc nghiệm dễ bẫy trong đề thi Giữa Kỳ Dược Liệu?',
          'Lập danh sách 5 câu hỏi trọng tâm nhất về thu hái và bảo quản dược liệu?',
          'Mẹo nhớ nhanh đáp án câu hỏi về tên tác giả & tác phẩm YHCT Việt Nam?',
          'Tại sao C-glycosid lại bền nhất với phản ứng thủy phân acid?'
        ];
      case 'harvest-process':
        return [
          'Giải thích tại sao vỏ cây lại thu hoạch tốt nhất vào Mùa Xuân?',
          'Mục đích của việc ổn định dược liệu diệt enzym là gì và thực hiện ra sao?',
          'Tại sao độ ẩm lại là yếu tố nguy hại hàng đầu làm hỏng dược liệu?',
          'Nêu các tiêu chí cốt lõi của chuẩn GACP-WHO trong trồng trọt và thu hái.'
        ];
      case 'analysis-chromatography':
        return [
          'Sắc ký điểm chỉ (Fingerprint) giúp phát hiện gian lận dược liệu như thế nào?',
          'Ưu điểm nổi bật của HPLC so với sắc ký lớp mỏng TLC?',
          'Phổ NMR và phổ MS cung cấp những thông tin cấu trúc nào?',
          'Thử tinh khiết dược liệu bao gồm những chỉ tiêu kiểm nghiệm nào?'
        ];
      case 'compounds-resources':
        return [
          'Phân biệt cấu trúc và tác dụng của Coumarin và Flavonoid?',
          'Hiện tượng gel hóa của Pectin diễn ra như thế nào?',
          'Công ước CITES và hành vi cướp sinh học (Biopiracy) là gì?',
          'Cơ chế chống đông máu của nhóm 4-hydroxycoumarin?'
        ];
      default:
        return [
          'Giải thích tại sao vỏ cây lại thu hái vào mùa xuân?',
          'Phân biệt giữa O-glycosid, C-glycosid và S-glycosid?',
          'Cơ chế chống đông máu của Coumarin là gì?',
          'Ưu điểm của kiểm nghiệm dược liệu bằng HPLC?'
        ];
    }
  };

  const samplePrompts = getSamplePrompts();

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg = query.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const response = await fetch(getApiUrl('/api/chat'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMsg, sourceContext: selectedSource }),
      });

      const data = await response.json();
      if (data.text) {
        setMessages((prev) => [...prev, { sender: 'ai', text: data.text }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: 'ai', text: data.error || 'Đã có lỗi xảy ra. Vui lòng thử lại!' }
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: 'Không thể kết nối đến máy chủ AI. Vui lòng kiểm tra lại kết nối mạng.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              Trợ Lý AI Dược Liệu Học
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-900">
                Gemini 3.6 Flash
              </span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Hỏi đáp, giải thích sâu các câu trắc nghiệm khó, cơ chế tác dụng & bài thi giữa kỳ.
            </p>
          </div>
        </div>
      </div>

      {/* Suggested Prompts */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block px-1">
          💡 Gợi ý câu hỏi tập trung nguồn hiện tại:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {samplePrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(p)}
              className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-slate-800 rounded-xl text-xs text-left text-slate-700 dark:text-slate-300 transition font-medium flex items-center gap-2 group shadow-2xs cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="line-clamp-2">{p}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm min-h-[360px] max-h-[500px] overflow-y-auto space-y-4 custom-scrollbar">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex items-start space-x-3 ${m.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
          >
            <div
              className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${
                m.sender === 'user' ? 'bg-slate-800 dark:bg-slate-700 text-white' : 'bg-blue-600 text-white'
              }`}
            >
              {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[85%] whitespace-pre-wrap ${
                m.sender === 'user'
                  ? 'bg-blue-600 text-white font-medium rounded-tr-none'
                  : 'bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-tl-none'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl rounded-tl-none text-xs text-slate-500 dark:text-slate-400 flex items-center space-x-2">
              <Loader2 className="w-4 h-4 animate-spin text-blue-600 dark:text-blue-400" />
              <span>Giảng viên AI đang phân tích dữ liệu Dược liệu học...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input Bar */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Nhập thắc mắc về Dược liệu học, trắc nghiệm hay bài thi giữa kỳ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-600 transition shadow-2xs"
        />
        <button
          onClick={() => handleSend()}
          disabled={loading || !input.trim()}
          className="px-5 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-bold rounded-xl text-xs transition shadow-xs flex items-center gap-1.5 cursor-pointer shrink-0"
        >
          <span>Gửi</span>
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
