import React, { useState, useMemo, useEffect } from 'react';
import { STUDY_CHAPTERS } from '../data/studyMaterials';
import { StudyChapter } from '../types';
import { 
  BookOpen, 
  GraduationCap, 
  Award, 
  Layers, 
  Sprout, 
  FlaskConical, 
  Leaf, 
  Search, 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  Zap, 
  Table, 
  HelpCircle, 
  Bookmark, 
  ArrowRight, 
  Copy, 
  Check, 
  Share2,
  Sparkles,
  Info
} from 'lucide-react';

interface StudyMaterialViewProps {
  selectedSource?: string;
  onNavigateToQuiz?: (topicId: string) => void;
  onNavigateToFlashcards?: (topicId: string) => void;
}

export const StudyMaterialView: React.FC<StudyMaterialViewProps> = ({
  selectedSource = 'all',
  onNavigateToQuiz,
  onNavigateToFlashcards,
}) => {
  const [activeChapterId, setActiveChapterId] = useState<string>('chap-1');
  const [viewMode, setViewMode] = useState<'full' | 'summary' | 'comparisons' | 'qa'>('full');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [copiedChapter, setCopiedChapter] = useState<boolean>(false);
  const [revealedAnswers, setRevealedAnswers] = useState<{ [key: number]: boolean }>({});
  const [readChapters, setReadChapters] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('duoc_lieu_read_chapters');
      return saved ? JSON.parse(saved) : ['chap-1'];
    } catch {
      return ['chap-1'];
    }
  });

  const activeChapter = useMemo(() => {
    return STUDY_CHAPTERS.find((c) => c.id === activeChapterId) || STUDY_CHAPTERS[0];
  }, [activeChapterId]);

  const toggleChapterRead = (chapId: string) => {
    setReadChapters((prev) => {
      const isRead = prev.includes(chapId);
      const updated = isRead ? prev.filter((id) => id !== chapId) : [...prev, chapId];
      try {
        localStorage.setItem('duoc_lieu_read_chapters', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save read chapters', e);
      }
      return updated;
    });
  };

  const getChapterIcon = (iconName: string, className = 'w-4 h-4') => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className={className} />;
      case 'Award':
        return <Award className={className} />;
      case 'Layers':
        return <Layers className={className} />;
      case 'Sprout':
        return <Sprout className={className} />;
      case 'FlaskConical':
        return <FlaskConical className={className} />;
      case 'Leaf':
        return <Leaf className={className} />;
      default:
        return <BookOpen className={className} />;
    }
  };

  const copyChapterSummary = () => {
    const text = `📘 ${activeChapter.title} (${activeChapter.pageRange})\n\nTổng quan:\n${activeChapter.overview}\n\nTrọng tâm:\n${activeChapter.keyPoints.map((k) => `• ${k}`).join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopiedChapter(true);
    setTimeout(() => setCopiedChapter(false), 2000);
  };

  const toggleAnswer = (idx: number) => {
    setRevealedAnswers((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Top Banner introducing the PDF Textbook */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Giáo Trình Đại Cương Dược Liệu Học
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base max-w-2xl">
              Tổng hợp toàn văn 25 trang bài giảng chuẩn: Định nghĩa, Lịch sử Y Dược, Quy tắc thu hái, Sắc ký, Chiết xuất & Bảo tồn nguồn gen cây thuốc.
            </p>
          </div>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="bg-white/20 backdrop-blur-lg px-6 py-4 rounded-3xl border border-white/30 text-center shadow-md flex flex-col items-center justify-center min-w-[140px]">
              <div className="text-3xl sm:text-4xl font-black tracking-tight text-white">{readChapters.length}/7</div>
              <div className="text-xs sm:text-sm font-bold text-emerald-100 mt-1 uppercase tracking-wider">Chương đã học</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Layout: Sidebar Navigation + Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: 7 Chapters List Navigation */}
        <aside className="lg:col-span-4 space-y-3">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Mục Lục 7 Chương Học
              </span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                {Math.round((readChapters.length / STUDY_CHAPTERS.length) * 100)}% hoàn thành
              </span>
            </div>

            <nav className="space-y-1.5">
              {STUDY_CHAPTERS.map((chapter) => {
                const isActive = chapter.id === activeChapterId;
                const isRead = readChapters.includes(chapter.id);

                return (
                  <button
                    key={chapter.id}
                    onClick={() => {
                      setActiveChapterId(chapter.id);
                      setRevealedAnswers({});
                    }}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 cursor-pointer border ${
                      isActive
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500/50 text-slate-900 dark:text-slate-100 shadow-xs'
                        : 'bg-white dark:bg-slate-900 border-transparent hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                        isActive
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {getChapterIcon(chapter.iconName, 'w-4 h-4')}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase">
                          Chương {chapter.chapterNumber}
                        </span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                          {chapter.pageRange}
                        </span>
                      </div>
                      <div className="text-xs font-bold truncate mt-0.5">
                        {chapter.title}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                        {chapter.subtitle}
                      </div>
                    </div>

                    <div className="shrink-0 mt-1">
                      {isRead ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-slate-300 dark:border-slate-600"></div>
                      )}
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>

        </aside>

        {/* Right Column: Active Chapter Content */}
        <main className="lg:col-span-8 space-y-6">
          {/* Chapter Header Card */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xs space-y-5">
            {/* Title & Page range */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-black uppercase tracking-wider">
                    Chương {activeChapter.chapterNumber}
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {activeChapter.pageRange} trong tài liệu PDF
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-slate-100">
                  {activeChapter.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {activeChapter.subtitle}
                </p>
              </div>

              {/* Action Buttons: Copy, Mark as Read */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={copyChapterSummary}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition cursor-pointer"
                  title="Sao chép tóm tắt chương"
                >
                  {copiedChapter ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => toggleChapterRead(activeChapter.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                    readChapters.includes(activeChapter.id)
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{readChapters.includes(activeChapter.id) ? 'Đã học xong' : 'Đánh dấu đã học'}</span>
                </button>
              </div>
            </div>

            {/* View Mode Tabs Switcher */}
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 custom-scrollbar">
              <button
                onClick={() => setViewMode('full')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  viewMode === 'full'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Toàn Văn Lý Thuyết</span>
              </button>

              <button
                onClick={() => setViewMode('summary')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  viewMode === 'summary'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Tóm Tắt Nhanh (Cheat Sheet)</span>
              </button>

              {activeChapter.comparisons && activeChapter.comparisons.length > 0 && (
                <button
                  onClick={() => setViewMode('comparisons')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                    viewMode === 'comparisons'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <Table className="w-3.5 h-3.5" />
                  <span>Bảng So Sánh Đối Chiếu</span>
                </button>
              )}

              <button
                onClick={() => setViewMode('qa')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  viewMode === 'qa'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Câu Hỏi Trọng Tâm ({activeChapter.quickReview.length})</span>
              </button>
            </div>

            {/* Key Takeaways Callout Card */}
            <div className="bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 rounded-2xl p-4 sm:p-5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Tổng Quan Cốt Lõi Chương {activeChapter.chapterNumber}:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                {activeChapter.overview}
              </p>
              <div className="space-y-1.5 pt-1">
                {activeChapter.keyPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VIEW MODE 1: FULL THEORY MODE */}
          {viewMode === 'full' && (
            <div className="space-y-6">
              {activeChapter.sections.map((section) => (
                <div
                  key={section.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4"
                >
                  <h4 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    {section.title}
                  </h4>

                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {section.content.map((paragraph, pIdx) => (
                      <p key={pIdx} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Subsections if any */}
                  {section.subSections && section.subSections.length > 0 && (
                    <div className="space-y-3 pt-2">
                      {section.subSections.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-4 space-y-2"
                        >
                          <div className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                            <span className="text-emerald-600 dark:text-emerald-400 font-black">▶</span>
                            {sub.title}
                          </div>
                          <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                            {sub.items.map((item, iIdx) => (
                              <li key={iIdx} className="flex items-start gap-2">
                                <span className="text-emerald-500 font-bold">•</span>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Notes callouts if any */}
                  {section.notes && section.notes.length > 0 && (
                    <div className="bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-2xl p-4 space-y-1.5 text-xs text-amber-900 dark:text-amber-200">
                      <div className="font-bold flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
                        <Info className="w-3.5 h-3.5" />
                        <span>Điểm cần lưu ý:</span>
                      </div>
                      {section.notes.map((note, nIdx) => (
                        <p key={nIdx} className="leading-relaxed">
                          • {note}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* VIEW MODE 2: SUMMARY CHEAT SHEET */}
          {viewMode === 'summary' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xs space-y-5">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  Sổ Tay Tóm Tắt Ghi Nhớ Nhanh Chương {activeChapter.chapterNumber}
                </h4>
                <button
                  onClick={copyChapterSummary}
                  className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  Sao chép
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeChapter.keyPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-1.5"
                  >
                    <div className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      Mục {idx + 1}
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIEW MODE 3: COMPARISON MATRIX */}
          {viewMode === 'comparisons' && activeChapter.comparisons && (
            <div className="space-y-6">
              {activeChapter.comparisons.map((table, tIdx) => (
                <div
                  key={tIdx}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4"
                >
                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    <Table className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    {table.title}
                  </h4>

                  <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700">
                          {table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="py-3 px-4 first:rounded-l-xl last:rounded-r-xl">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                        {table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`py-3 px-4 ${
                                  cIdx === 0 ? 'font-bold text-slate-800 dark:text-slate-100' : ''
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {table.note && (
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                      * {table.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* VIEW MODE 4: QUICK REVIEW Q&A ACCORDIONS */}
          {viewMode === 'qa' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Bộ Câu Hỏi Trọng Tâm Ôn Tập Nhanh ({activeChapter.quickReview.length} câu)
                </h4>
                <span className="text-xs text-slate-400">Nhấn để lật xem đáp án</span>
              </div>

              <div className="space-y-3">
                {activeChapter.quickReview.map((item, qIdx) => {
                  const isRevealed = revealedAnswers[qIdx];
                  return (
                    <div
                      key={qIdx}
                      className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleAnswer(qIdx)}
                        className="w-full text-left p-4 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-start justify-between gap-3 cursor-pointer"
                      >
                        <div className="space-y-1">
                          {item.importantTag && (
                            <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 uppercase">
                              {item.importantTag}
                            </span>
                          )}
                          <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">
                            {item.question}
                          </div>
                        </div>

                        <span
                          className={`text-xs font-bold px-2.5 py-1 rounded-lg shrink-0 transition ${
                            isRevealed
                              ? 'bg-emerald-600 text-white'
                              : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          {isRevealed ? 'Ẩn đáp án' : 'Xem đáp án'}
                        </span>
                      </button>

                      {isRevealed && (
                        <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed font-medium">
                          👉 {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bottom Next / Previous Chapter Navigation */}
          <div className="flex items-center justify-between gap-4 pt-4">
            {activeChapter.chapterNumber > 1 ? (
              <button
                onClick={() => {
                  const prevId = `chap-${activeChapter.chapterNumber - 1}`;
                  setActiveChapterId(prevId);
                  setRevealedAnswers({});
                }}
                className="px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-2 transition cursor-pointer shadow-xs"
              >
                <span>← Chương {activeChapter.chapterNumber - 1}</span>
              </button>
            ) : (
              <div></div>
            )}

            {activeChapter.chapterNumber < STUDY_CHAPTERS.length ? (
              <button
                onClick={() => {
                  const nextId = `chap-${activeChapter.chapterNumber + 1}`;
                  setActiveChapterId(nextId);
                  setRevealedAnswers({});
                }}
                className="px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 transition cursor-pointer shadow-xs"
              >
                <span>Chương {activeChapter.chapterNumber + 1} →</span>
              </button>
            ) : (
              <button
                onClick={() => onNavigateToQuiz?.('daicuong')}
                className="px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-2 transition cursor-pointer shadow-xs"
              >
                <span>Làm Bài Thi Tổng Hợp Đại Cương 🏆</span>
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
