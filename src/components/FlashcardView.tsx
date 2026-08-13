import React, { useState, useEffect } from 'react';
import { Flashcard, Topic } from '../types';
import { 
  Volume2, 
  RotateCw, 
  CheckCircle, 
  XCircle, 
  ChevronLeft, 
  ChevronRight, 
  Shuffle, 
  Filter,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface FlashcardViewProps {
  flashcards: Flashcard[];
  topics: Topic[];
  selectedSource: string;
  masteredIds: string[];
  needReviewIds: string[];
  onToggleMastered: (cardId: string) => void;
  onToggleNeedReview: (cardId: string) => void;
}

export const FlashcardView: React.FC<FlashcardViewProps> = ({
  flashcards,
  topics,
  selectedSource,
  masteredIds,
  needReviewIds,
  onToggleMastered,
  onToggleNeedReview,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'unmastered' | 'review'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [cardsList, setCardsList] = useState<Flashcard[]>(flashcards);

  // Base cards filtered by selectedSource
  const sourceCards = React.useMemo(() => {
    if (['all', 'daicuong', 'midterm', 'd2022', 'deso2', 'deso3'].includes(selectedSource)) {
      return flashcards;
    }
    return flashcards.filter((c) => c.topic === selectedSource);
  }, [flashcards, selectedSource]);

  const unmasteredCount = sourceCards.filter((c) => !masteredIds.includes(c.id)).length;
  const reviewCount = sourceCards.filter((c) => needReviewIds.includes(c.id)).length;

  // Filter cards based on selectedSource & status
  useEffect(() => {
    let filtered = sourceCards;

    if (filterMode === 'unmastered') {
      filtered = sourceCards.filter((c) => !masteredIds.includes(c.id));
    } else if (filterMode === 'review') {
      filtered = sourceCards.filter((c) => needReviewIds.includes(c.id));
    }

    setCardsList(filtered);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [sourceCards, filterMode, masteredIds, needReviewIds]);

  const currentCard = cardsList[currentIndex];

  const handleNext = () => {
    if (cardsList.length === 0) return;
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cardsList.length);
  };

  const handlePrev = () => {
    if (cardsList.length === 0) return;
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cardsList.length) % cardsList.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...cardsList].sort(() => Math.random() - 0.5);
    setCardsList(shuffled);
    setCurrentIndex(0);
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'vi-VN';
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (e.code === 'ArrowRight') {
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cardsList.length]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Top Filter Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Source Status Indicator */}
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            Nguồn thẻ:
          </span>
          <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900">
            {topics.find((t) => t.id === selectedSource)?.title || 'Tất Cả Nguồn'} ({sourceCards.length} thẻ)
          </span>
        </div>

        {/* Status Filter Toggles */}
        <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 self-start md:self-auto">
          <button
            onClick={() => setFilterMode('all')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              filterMode === 'all'
                ? 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-bold shadow-xs'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Tất cả ({sourceCards.length})
          </button>
          <button
            onClick={() => setFilterMode('unmastered')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              filterMode === 'unmastered'
                ? 'bg-amber-500 text-white font-bold shadow-xs'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Chưa thuộc ({unmasteredCount})
          </button>
          <button
            onClick={() => setFilterMode('review')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              filterMode === 'review'
                ? 'bg-rose-500 text-white font-bold shadow-xs'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Cần ôn lại ({reviewCount})
          </button>
        </div>
      </div>

      {/* Main Flashcard Container */}
      {cardsList.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center space-y-4 shadow-sm">
          <BookOpen className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto" />
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Không có thẻ ghi nhớ cho nguồn này</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Bạn đã thuộc tất cả thẻ trong nguồn này hoặc chưa có dữ liệu thẻ phù hợp với bộ lọc.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Card Info Header */}
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium px-1">
            <div className="flex items-center gap-2">
              <span className="bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 px-2.5 py-1 rounded-full border border-blue-200/80 dark:border-blue-900 font-bold">
                {currentCard?.category || 'Kiến thức'}
              </span>
              <span className="font-semibold text-slate-600 dark:text-slate-300">
                Thẻ {currentIndex + 1} / {cardsList.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShuffle}
                className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition shadow-2xs cursor-pointer"
                title="Xáo trộn thẻ"
              >
                <Shuffle className="w-4 h-4" />
              </button>
              <button
                onClick={() => speakText(isFlipped ? currentCard.back : currentCard.front)}
                className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 transition shadow-2xs cursor-pointer"
                title="Đọc nội dung"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3D Flip Card */}
          <div
            className="perspective-1000 w-full h-[360px] sm:h-[420px] cursor-pointer select-none relative"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div
              className={`relative w-full h-full duration-500 transform-style-3d transition-transform ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* FRONT SIDE */}
              <div className="absolute inset-0 w-full h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm backface-hidden group hover:border-blue-300 dark:hover:border-blue-700 transition-colors overflow-y-auto custom-scrollbar">
                <div className="flex items-center justify-between shrink-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Mặt Trước • Thuật ngữ / Câu hỏi
                  </span>
                  <RotateCw className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition" />
                </div>

                <div className="my-auto text-center space-y-3 py-4">
                  <h2 className="text-lg sm:text-2xl font-bold text-slate-800 dark:text-slate-100 leading-relaxed px-2">
                    {currentCard.front}
                  </h2>
                  {currentCard.subText && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 italic max-w-lg mx-auto">
                      {currentCard.subText}
                    </p>
                  )}
                </div>

                <div className="text-center text-[11px] text-slate-400 dark:text-slate-500 font-medium shrink-0 pt-2 border-t border-slate-100 dark:border-slate-800">
                  Nhấn vào thẻ hoặc bấm <span className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded">Space</span> để lật xem đáp án
                </div>
              </div>

              {/* BACK SIDE */}
              <div className="absolute inset-0 w-full h-full bg-slate-900 dark:bg-slate-950 text-white border border-slate-800 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md backface-hidden rotate-y-180 overflow-y-auto custom-scrollbar">
                <div className="flex items-center justify-between shrink-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Mặt Sau • Giải thích chi tiết
                  </span>
                  <RotateCw className="w-4 h-4 text-blue-400" />
                </div>

                <div className="my-auto text-center space-y-4 py-4">
                  <p className="text-base sm:text-xl font-medium text-slate-100 leading-relaxed max-w-2xl mx-auto px-2">
                    {currentCard.back}
                  </p>
                </div>

                <div className="text-center text-[11px] text-slate-400 font-medium shrink-0 pt-2 border-t border-slate-800">
                  Dùng phím <span className="px-1.5 py-0.5 bg-slate-800 text-slate-200 font-semibold rounded">←</span> <span className="px-1.5 py-0.5 bg-slate-800 text-slate-200 font-semibold rounded">→</span> để chuyển thẻ
                </div>
              </div>
            </div>
          </div>

          {/* Controls & Learning Status Toggles */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            {/* Status Buttons */}
            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                onClick={() => onToggleNeedReview(currentCard.id)}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  needReviewIds.includes(currentCard.id)
                    ? 'bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800 shadow-2xs'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <XCircle className="w-4 h-4 text-rose-500" />
                Cần ôn lại
              </button>

              <button
                onClick={() => onToggleMastered(currentCard.id)}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  masteredIds.includes(currentCard.id)
                    ? 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 shadow-2xs'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Đã thuộc
              </button>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
              <button
                onClick={handlePrev}
                className="flex items-center gap-1 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl text-xs font-bold transition shadow-2xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                Trước
              </button>
              <button
                onClick={handleNext}
                className="flex items-center gap-1 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-xs cursor-pointer"
              >
                Tiếp Theo
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
