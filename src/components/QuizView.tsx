import React, { useState, useEffect } from 'react';
import { Question, Topic, QuizResult } from '../types';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Bookmark, 
  Award, 
  RotateCcw, 
  HelpCircle, 
  ChevronLeft, 
  ChevronRight,
  BookOpen,
  Filter,
  Sparkles,
  Zap,
  FileText,
  Layers,
  Timer,
  Shuffle
} from 'lucide-react';

interface QuizViewProps {
  questions: Question[];
  topics: Topic[];
  selectedSource: string;
  bookmarkedIds: number[];
  onToggleBookmark: (questionId: number) => void;
  onSaveQuizResult: (result: QuizResult) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  questions,
  topics,
  selectedSource,
  bookmarkedIds,
  onToggleBookmark,
  onSaveQuizResult,
}) => {
  // Quiz Configuration State
  const [quizMode, setQuizMode] = useState<'selection' | 'active' | 'summary'>('selection');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [examType, setExamType] = useState<'full' | 'practice' | 'bookmarks'>('full');
  const [enableTimer, setEnableTimer] = useState<boolean>(true);
  const [selectedDurationMinutes, setSelectedDurationMinutes] = useState<number>(30); // Default 30 phút
  const [selectedQuestionCount, setSelectedQuestionCount] = useState<number>(60); // Default 60 câu
  const [instantFeedback, setInstantFeedback] = useState<boolean>(true);

  // Active Quiz State
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: number]: number }>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(30 * 60);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [filterWrongOnly, setFilterWrongOnly] = useState<boolean>(false);

  // Sync selectedTopic when selectedSource changes
  useEffect(() => {
    if (selectedSource !== 'all') {
      setSelectedTopic(selectedSource);
    }
  }, [selectedSource]);

  // Timer Effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (quizMode === 'active' && enableTimer && timeLeftSeconds > 0) {
      timer = setInterval(() => {
        setTimeLeftSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [quizMode, enableTimer, timeLeftSeconds]);

  // Start Quiz setup
  const handleStartQuiz = () => {
    let pool = questions;

    const activeSrc = selectedSource !== 'all' ? selectedSource : selectedTopic;

    if (activeSrc !== 'all') {
      if (activeSrc === 'daicuong') {
        pool = questions.filter((q) => q.topic === 'daicuong' || q.topic === 'd2022' || q.topic === 'deso2');
      } else {
        pool = questions.filter((q) => q.topic === activeSrc || (activeSrc === 'midterm' && q.isMidterm));
      }
    }

    if (examType === 'bookmarks') {
      pool = pool.filter((q) => bookmarkedIds.includes(q.id));
    }

    if (pool.length === 0) {
      alert("Không có câu hỏi nào thỏa mãn tiêu chí lựa chọn!");
      return;
    }

    // Shuffle (randomize) question pool automatically every time a quiz starts
    let prepared = [...pool].sort(() => Math.random() - 0.5);
    
    // Limit questions count according to selection
    if (selectedQuestionCount > 0 && prepared.length > selectedQuestionCount) {
      prepared = prepared.slice(0, selectedQuestionCount);
    }

    setActiveQuestions(prepared);
    setCurrentIdx(0);
    setSelectedAnswers({});
    setTimeLeftSeconds(selectedDurationMinutes * 60);
    setFilterWrongOnly(false);
    setQuizMode('active');
  };

  const handleSelectOption = (qId: number, optionIdx: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [qId]: optionIdx,
    }));
  };

  const handleSubmitQuiz = () => {
    let correctCount = 0;
    activeQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });

    const activeTopicTitle = topics.find((t) => t.id === (selectedSource !== 'all' ? selectedSource : selectedTopic))?.title || 'Tất cả nguồn';

    const result: QuizResult = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      topic: activeTopicTitle,
      score: correctCount,
      total: activeQuestions.length,
      timeSpentSeconds: (selectedDurationMinutes * 60) - timeLeftSeconds,
      answers: selectedAnswers,
    };

    onSaveQuizResult(result);
    setQuizMode('summary');
  };

  const currentQ = activeQuestions[currentIdx];

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Render Selection Screen
  if (quizMode === 'selection') {
    const sourceTopicObj = topics.find((t) => t.id === selectedSource) || topics[0];

    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 text-xs font-bold">
            <Sparkles className="w-4 h-4 text-amber-500" /> Ngân Hàng Đề Thi Giữa Kỳ 60 Câu / 30 Phút
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">Luyện Tập & Thi Thử Dược Liệu 1</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Hệ thống bộ đề thi trắc nghiệm chuẩn cấu trúc 60 câu hỏi trong 30 phút từ các đề thi chính thức.
          </p>
        </div>

        {/* Selected Source Banner */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 dark:from-blue-900 dark:via-indigo-900 dark:to-blue-950 text-white rounded-2xl p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 border border-blue-600/30">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-md">
              Nguồn bộ đề lựa chọn
            </span>
            <h3 className="text-xl font-bold">{sourceTopicObj.title}</h3>
            <p className="text-xs text-blue-100">{sourceTopicObj.description}</p>
            <div className="flex items-center gap-3 pt-1 text-xs text-blue-200">
              <span className="flex items-center gap-1 font-semibold">
                <FileText className="w-3.5 h-3.5" /> {selectedQuestionCount} câu hỏi
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-semibold">
                <Timer className="w-3.5 h-3.5" /> Thời gian: {selectedDurationMinutes} phút
              </span>
            </div>
          </div>
          <button
            onClick={handleStartQuiz}
            className="px-6 py-3 bg-white text-blue-700 rounded-xl text-xs font-bold shadow-md hover:bg-blue-50 transition shrink-0 cursor-pointer flex items-center gap-2"
          >
            <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
            Vào Làm Bài ngay
          </button>
        </div>

        {/* Mode Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            onClick={() => setExamType('full')}
            className={`cursor-pointer p-6 rounded-2xl border transition-all ${
              examType === 'full'
                ? 'bg-white dark:bg-slate-900 border-blue-600 dark:border-blue-500 shadow-sm ring-1 ring-blue-600 dark:ring-blue-500'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-800 dark:text-slate-100 mb-1">Thi Thử Chuẩn (60 câu / 30ph)</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Mô phỏng áp lực phòng thi chính thức với 60 câu hỏi làm trong 30 phút.
            </p>
          </div>

          <div
            onClick={() => setExamType('practice')}
            className={`cursor-pointer p-6 rounded-2xl border transition-all ${
              examType === 'practice'
                ? 'bg-white dark:bg-slate-900 border-blue-600 dark:border-blue-500 shadow-sm ring-1 ring-blue-600 dark:ring-blue-500'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-800 dark:text-slate-100 mb-1">Luyện Tập Tự Do</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Ôn luyện linh hoạt với đáp án và giải thích chi tiết xuất hiện ngay khi chọn.
            </p>
          </div>

          <div
            onClick={() => setExamType('bookmarks')}
            className={`cursor-pointer p-6 rounded-2xl border transition-all ${
              examType === 'bookmarks'
                ? 'bg-white dark:bg-slate-900 border-blue-600 dark:border-blue-500 shadow-sm ring-1 ring-blue-600 dark:ring-blue-500'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
              <Bookmark className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-800 dark:text-slate-100 mb-1">Câu Hỏi Đã Đánh Dấu</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Luyện tập riêng các câu khó ({bookmarkedIds.length} câu) đã được bookmark.
            </p>
          </div>
        </div>

        {/* Options Setup */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-6 shadow-sm">
          {/* Exam Set Selection */}
          {examType !== 'bookmarks' && selectedSource === 'all' && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                Chọn Bộ Đề / Chuyên Đề Thi:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {topics.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTopic(t.id)}
                    className={`p-3.5 rounded-xl border text-left transition cursor-pointer ${
                      selectedTopic === t.id
                        ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-600 dark:border-blue-500 text-blue-900 dark:text-blue-200 font-bold shadow-2xs'
                        : 'bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="text-sm font-semibold">{t.title}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{t.description}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Time & Count Customization */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Thời gian làm bài:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { m: 30, label: '30 phút (Chuẩn)' },
                  { m: 45, label: '45 phút' },
                  { m: 15, label: '15 phút' },
                ].map((item) => (
                  <button
                    key={item.m}
                    onClick={() => setSelectedDurationMinutes(item.m)}
                    className={`py-2 px-2 text-xs rounded-xl border font-semibold transition cursor-pointer ${
                      selectedDurationMinutes === item.m
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Số lượng câu hỏi:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { c: 60, label: '60 câu (Chuẩn)' },
                  { c: 50, label: '50 câu' },
                  { c: 30, label: '30 câu' },
                ].map((item) => (
                  <button
                    key={item.c}
                    onClick={() => setSelectedQuestionCount(item.c)}
                    className={`py-2 px-2 text-xs rounded-xl border font-semibold transition cursor-pointer ${
                      selectedQuestionCount === item.c
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold pt-1 flex items-center gap-1">
                <Shuffle className="w-3.5 h-3.5" />
                Hệ thống tự động tráo ngẫu nhiên bộ câu hỏi mới mỗi lần làm bài
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={enableTimer}
                  onChange={(e) => setEnableTimer(e.target.checked)}
                  className="rounded border-slate-300 dark:border-slate-700 text-blue-600 focus:ring-blue-600 cursor-pointer"
                />
                <span>Bật đếm ngược thời gian ({selectedDurationMinutes} phút)</span>
              </label>

              <label className="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={instantFeedback}
                  onChange={(e) => setInstantFeedback(e.target.checked)}
                  className="rounded border-slate-300 dark:border-slate-700 text-blue-600 focus:ring-blue-600 cursor-pointer"
                />
                <span>Hiển thị đáp án & giải thích ngay</span>
              </label>
            </div>

            <button
              onClick={handleStartQuiz}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-xs cursor-pointer flex items-center gap-2"
            >
              <span>Vào Thi Ngay</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active Quiz View
  if (quizMode === 'active' && currentQ) {
    const isBookmarked = bookmarkedIds.includes(currentQ.id);
    const userAns = selectedAnswers[currentQ.id];
    const isAnswered = userAns !== undefined;

    return (
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Sticky Header Bar */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center justify-between gap-4 sticky top-16 z-20">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900">
              Câu {currentIdx + 1} / {activeQuestions.length}
            </span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 hidden sm:inline">
              Đã làm: {Object.keys(selectedAnswers).length}/{activeQuestions.length}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {enableTimer && (
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900 text-xs font-bold">
                <Clock className="w-4 h-4" />
                <span>{formatTime(timeLeftSeconds)}</span>
              </div>
            )}

            <button
              onClick={() => setShowDrawer(!showDrawer)}
              className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold transition cursor-pointer"
            >
              Ma Trận Câu Hỏi
            </button>

            <button
              onClick={handleSubmitQuiz}
              className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-2xs cursor-pointer"
            >
              Nộp Bài
            </button>
          </div>
        </div>

        {/* Drawer Modal */}
        {showDrawer && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-md space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-200">
              <span>Danh Sách Tất Cả Câu Hỏi ({activeQuestions.length} câu)</span>
              <button
                onClick={() => setShowDrawer(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-8 sm:grid-cols-12 gap-2 max-h-48 overflow-y-auto p-1 custom-scrollbar">
              {activeQuestions.map((q, idx) => {
                const ans = selectedAnswers[q.id];
                const isSelected = ans !== undefined;
                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentIdx(idx);
                      setShowDrawer(false);
                    }}
                    className={`py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                      currentIdx === idx
                        ? 'ring-2 ring-blue-600 dark:ring-blue-400 font-extrabold'
                        : ''
                    } ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Question Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 leading-relaxed">
              {currentIdx + 1}. {currentQ.question}
            </h3>
            <button
              onClick={() => onToggleBookmark(currentQ.id)}
              className={`p-2 rounded-xl border transition cursor-pointer shrink-0 ${
                isBookmarked
                  ? 'bg-amber-50 dark:bg-amber-950/80 border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400'
                  : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-amber-500'
              }`}
              title="Đánh dấu câu khó"
            >
              <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-amber-500' : ''}`} />
            </button>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt, optIdx) => {
              const isChosen = userAns === optIdx;
              const isCorrectOpt = optIdx === currentQ.correctIndex;

              let btnStyle = 'bg-slate-50/70 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800';
              if (instantFeedback && isAnswered) {
                if (isCorrectOpt) {
                  btnStyle = 'bg-emerald-50 dark:bg-emerald-950/80 border-emerald-400 text-emerald-900 dark:text-emerald-200 font-semibold';
                } else if (isChosen && !isCorrectOpt) {
                  btnStyle = 'bg-rose-50 dark:bg-rose-950/80 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200 font-semibold';
                }
              } else if (isChosen) {
                btnStyle = 'bg-blue-50 dark:bg-blue-950/80 border-blue-600 dark:border-blue-500 text-blue-900 dark:text-blue-200 font-bold';
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(currentQ.id, optIdx)}
                  className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition flex items-start space-x-3 cursor-pointer ${btnStyle}`}
                >
                  <span className="w-6 h-6 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300 shrink-0 text-xs">
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span className="pt-0.5 leading-relaxed">{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Instant Feedback Explanation */}
          {instantFeedback && isAnswered && (
            <div className={`p-4 rounded-xl border text-xs leading-relaxed space-y-1.5 ${
              userAns === currentQ.correctIndex
                ? 'bg-emerald-50/80 dark:bg-emerald-950/80 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                : 'bg-rose-50/80 dark:bg-rose-950/80 border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200'
            }`}>
              <div className="flex items-center gap-1.5 font-bold">
                {userAns === currentQ.correctIndex ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Chính Xác!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                    <span>Chưa Đúng! (Đáp án đúng: {String.fromCharCode(65 + currentQ.correctIndex)})</span>
                  </>
                )}
              </div>
              <p className="text-slate-700 dark:text-slate-300 pt-1">{currentQ.explanation}</p>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
            disabled={currentIdx === 0}
            className="flex items-center gap-1 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 rounded-xl text-xs font-bold transition shadow-2xs cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            Câu Trước
          </button>

          <button
            onClick={() => setCurrentIdx((prev) => Math.min(activeQuestions.length - 1, prev + 1))}
            disabled={currentIdx === activeQuestions.length - 1}
            className="flex items-center gap-1 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-40 rounded-xl text-xs font-bold transition shadow-xs cursor-pointer"
          >
            Câu Tiếp
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Summary View
  let correctTotal = 0;
  activeQuestions.forEach((q) => {
    if (selectedAnswers[q.id] === q.correctIndex) {
      correctTotal++;
    }
  });

  const percentScore = Math.round((correctTotal / (activeQuestions.length || 1)) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center space-y-6 shadow-sm">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400">
          <Award className="w-8 h-8" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Kết Quả Bài Thi Trắc Nghiệm</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Đề thi 60 câu / 30 phút - Dược liệu 1</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto py-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
            <div className="text-2xl font-black text-blue-600 dark:text-blue-400">{correctTotal}/{activeQuestions.length}</div>
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Số Câu Đúng</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
            <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{percentScore}%</div>
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Điểm Số</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
            <div className="text-2xl font-black text-amber-600 dark:text-amber-400">
              {formatTime((selectedDurationMinutes * 60) - timeLeftSeconds)}
            </div>
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Thời Gian</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
            <div className="text-2xl font-black text-purple-600 dark:text-purple-400">
              {percentScore >= 70 ? 'ĐẠT' : 'CẦN ÔN'}
            </div>
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Đánh Giá</div>
          </div>
        </div>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => setQuizMode('selection')}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-xs cursor-pointer flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Làm Đề Khác
          </button>

          <button
            onClick={() => {
              setFilterWrongOnly(!filterWrongOnly);
            }}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
              filterWrongOnly
                ? 'bg-rose-50 dark:bg-rose-950/80 border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-300'
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            {filterWrongOnly ? 'Xem Tất Cả Câu' : 'Chỉ Xem Câu Sai'}
          </button>
        </div>
      </div>

      {/* Detailed Question Review List */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">Chi Tiết Bài Làm ({activeQuestions.length} câu)</h3>
        {activeQuestions.map((q, idx) => {
          const userAns = selectedAnswers[q.id];
          const isCorrect = userAns === q.correctIndex;

          if (filterWrongOnly && isCorrect) return null;

          return (
            <div
              key={q.id}
              className={`p-6 rounded-2xl border bg-white dark:bg-slate-900 space-y-4 ${
                isCorrect ? 'border-emerald-200 dark:border-emerald-800/80' : 'border-rose-200 dark:border-rose-800/80'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 leading-relaxed">
                  Câu {idx + 1}: {q.question}
                </h4>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                    isCorrect
                      ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300'
                      : 'bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300'
                  }`}
                >
                  {isCorrect ? 'Đúng' : 'Sai'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {q.options.map((opt, optIdx) => {
                  let optStyle = 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300';
                  if (optIdx === q.correctIndex) {
                    optStyle = 'bg-emerald-50 dark:bg-emerald-950/80 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold';
                  } else if (userAns === optIdx && !isCorrect) {
                    optStyle = 'bg-rose-50 dark:bg-rose-950/80 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200 font-bold';
                  }

                  return (
                    <div key={optIdx} className={`p-3 rounded-xl border flex items-center gap-2 ${optStyle}`}>
                      <span className="font-bold text-[11px]">{String.fromCharCode(65 + optIdx)}.</span>
                      <span>{opt}</span>
                    </div>
                  );
                })}
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <span className="font-bold text-slate-700 dark:text-slate-200">Giải thích: </span>
                {q.explanation}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
