import React, { useState, useMemo, useEffect } from 'react';
import { Topic } from '../types';
import { FLASHCARDS } from '../data/flashcards';
import { 
  BookOpen, 
  GraduationCap, 
  Award, 
  Sprout, 
  FlaskConical, 
  Leaf, 
  Layers, 
  FileText, 
  CheckCircle2,
  Menu,
  X,
  ChevronRight,
  Filter
} from 'lucide-react';

interface SourceSelectorBarProps {
  topics: Topic[];
  selectedSource: string;
  onSelectSource: (sourceId: string) => void;
  activeTab: string;
}

export const SourceSelectorBar: React.FC<SourceSelectorBarProps> = ({
  topics,
  selectedSource,
  onSelectSource,
  activeTab,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // Filter topics based strictly on active tab context
  // Flashcards: ONLY Giáo Trình (daicuong) & Chuyên Đề (harvest-process, analysis-chromatography, compounds-resources)
  // Quiz: ONLY Đề Thi (d2022, deso2, deso3) & Bài Thi Giáo Trình (daicuong)
  const contextualTopics = useMemo(() => {
    if (activeTab === 'flashcards') {
      return topics.filter(
        (t) => t.id === 'all' || t.id === 'daicuong' || ['harvest-process', 'analysis-chromatography', 'compounds-resources'].includes(t.id)
      );
    }
    if (activeTab === 'quiz') {
      return topics.filter(
        (t) => t.id === 'all' || ['d2022', 'deso2', 'deso3', 'daicuong'].includes(t.id)
      );
    }
    return topics;
  }, [topics, activeTab]);

  // Reset selectedSource if invalid for current activeTab
  useEffect(() => {
    const isSourceValid = contextualTopics.some((t) => t.id === selectedSource);
    if (!isSourceValid) {
      onSelectSource('all');
    }
  }, [activeTab, selectedSource, contextualTopics, onSelectSource]);

  // Filtered topics based on Category Filter inside Drawer
  const filteredTopics = useMemo(() => {
    if (categoryFilter === 'textbook') {
      return contextualTopics.filter((t) => t.id === 'all' || t.id === 'daicuong');
    }
    if (categoryFilter === 'exams') {
      return contextualTopics.filter((t) => t.id === 'all' || ['d2022', 'deso2', 'deso3'].includes(t.id));
    }
    if (categoryFilter === 'topics') {
      return contextualTopics.filter(
        (t) => t.id === 'all' || ['harvest-process', 'analysis-chromatography', 'compounds-resources'].includes(t.id)
      );
    }
    return contextualTopics;
  }, [contextualTopics, categoryFilter]);

  const selectedTopicObj = useMemo(() => {
    return contextualTopics.find((t) => t.id === selectedSource) || contextualTopics[0] || topics[0];
  }, [contextualTopics, selectedSource, topics]);

  const getTopicTitle = (topic: Topic) => {
    if (topic.id === 'all') {
      if (activeTab === 'flashcards') return 'Tất Cả Thẻ Flashcards';
      if (activeTab === 'quiz') return 'Tất Cả Bộ Đề Thi';
      return 'Tất Cả Nguồn';
    }
    return topic.title;
  };

  const getTopicDescription = (topic: Topic) => {
    if (topic.id === 'all') {
      if (activeTab === 'flashcards') return `Toàn bộ ${FLASHCARDS.length} thẻ flashcards từ Giáo trình & Các chuyên đề`;
      if (activeTab === 'quiz') return 'Toàn bộ 160+ câu hỏi trắc nghiệm từ các bộ đề thi';
      return topic.description;
    }
    return topic.description;
  };

  const getIcon = (id: string, className = 'w-4 h-4') => {
    switch (id) {
      case 'daicuong':
        return <GraduationCap className={`${className} text-emerald-600 dark:text-emerald-400`} />;
      case 'd2022':
        return <Award className={`${className} text-blue-600 dark:text-blue-400`} />;
      case 'deso2':
        return <FileText className={`${className} text-indigo-600 dark:text-indigo-400`} />;
      case 'deso3':
        return <Layers className={`${className} text-amber-600 dark:text-amber-400`} />;
      case 'harvest-process':
        return <Sprout className={`${className} text-green-600 dark:text-green-400`} />;
      case 'analysis-chromatography':
        return <FlaskConical className={`${className} text-purple-600 dark:text-purple-400`} />;
      case 'compounds-resources':
        return <Leaf className={`${className} text-teal-600 dark:text-teal-400`} />;
      default:
        return <BookOpen className={`${className} text-blue-600 dark:text-blue-400`} />;
    }
  };

  const getItemCountBadge = (topic: Topic, isSelected: boolean) => {
    let countText = '';
    if (activeTab === 'quiz') {
      countText = `${topic.questionCount} câu`;
    } else {
      const cardCount = topic.id === 'all'
        ? FLASHCARDS.length
        : FLASHCARDS.filter((c) => c.topic === topic.id).length;
      countText = `${cardCount} thẻ`;
    }

    return (
      <span
        className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full shrink-0 ${
          isSelected
            ? 'bg-white/20 text-white backdrop-blur-md'
            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
        }`}
      >
        {countText}
      </span>
    );
  };

  const getBarTitle = () => {
    if (activeTab === 'flashcards') return 'Nguồn Flashcard';
    if (activeTab === 'quiz') return 'Bộ Đề Thi Trắc Nghiệm';
    return 'Nguồn Học Tập';
  };

  return (
    <>
      {/* Top Sticky Bar */}
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-16 z-30 py-2.5 transition-colors shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          {/* Hamburger Menu 3-gạch Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold flex items-center gap-2 transition cursor-pointer shadow-sm shadow-emerald-600/20 active:scale-95 shrink-0"
            title="Bấm nút 3 gạch ngang để mở cột dọc chọn nguồn"
          >
            <Menu className="w-4 h-4 stroke-[2.5]" />
            <span>{getBarTitle()}</span>
            <span className="bg-white/20 text-white px-1.5 py-0.2 rounded-full text-[10px] font-black">
              {contextualTopics.length}
            </span>
          </button>

          {/* Active Source Pill Display */}
          <div className="flex items-center space-x-2 text-xs overflow-hidden">
            <div className="hidden sm:flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-medium shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Đang chọn:</span>
            </div>
            
            <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 px-3 py-1.5 rounded-xl flex items-center gap-2 truncate">
              <span className="shrink-0">{getIcon(selectedTopicObj.id, 'w-3.5 h-3.5')}</span>
              <span className="font-bold text-slate-800 dark:text-slate-100 truncate text-xs">
                {getTopicTitle(selectedTopicObj)}
              </span>
              {getItemCountBadge(selectedTopicObj, false)}
            </div>

            {selectedSource !== 'all' && (
              <button
                onClick={() => onSelectSource('all')}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition cursor-pointer shrink-0"
                title="Đặt lại về Tất cả nguồn"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Slide-out Vertical Column Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsDrawerOpen(false)}
          ></div>

          {/* Vertical Column Drawer Container */}
          <aside className="relative w-full max-w-sm bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-full flex flex-col shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            {/* Drawer Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/80">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-emerald-600 text-white">
                  <Menu className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-800 dark:text-slate-100">
                    Cột Dọc {getBarTitle()}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {activeTab === 'flashcards'
                      ? 'Chỉ gồm nguồn Giáo Trình & Các Chuyên Đề'
                      : 'Chỉ gồm các Bộ Đề Thi Trắc Nghiệm'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition cursor-pointer"
                title="Đóng cột dọc"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contextual Category Filter Tabs inside Vertical Drawer */}
            <div className="p-3 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="flex items-center space-x-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-[11px] font-bold">
                <button
                  onClick={() => setCategoryFilter('all')}
                  className={`flex-1 py-1.5 rounded-lg transition text-center cursor-pointer ${
                    categoryFilter === 'all'
                      ? 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 shadow-2xs'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  Tất Cả
                </button>

                {activeTab === 'quiz' ? (
                  <>
                    <button
                      onClick={() => setCategoryFilter('exams')}
                      className={`flex-1 py-1.5 rounded-lg transition text-center cursor-pointer ${
                        categoryFilter === 'exams'
                          ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-2xs'
                          : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      📝 Đề Giữa Kỳ
                    </button>
                    <button
                      onClick={() => setCategoryFilter('textbook')}
                      className={`flex-1 py-1.5 rounded-lg transition text-center cursor-pointer ${
                        categoryFilter === 'textbook'
                          ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-2xs'
                          : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      📘 Giáo Trình
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setCategoryFilter('textbook')}
                      className={`flex-1 py-1.5 rounded-lg transition text-center cursor-pointer ${
                        categoryFilter === 'textbook'
                          ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-2xs'
                          : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      📘 Giáo Trình
                    </button>
                    <button
                      onClick={() => setCategoryFilter('topics')}
                      className={`flex-1 py-1.5 rounded-lg transition text-center cursor-pointer ${
                        categoryFilter === 'topics'
                          ? 'bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-2xs'
                          : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      🧪 Chuyên Đề
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Vertical List of Contextual Topic Cards */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar">
              {filteredTopics.map((topic) => {
                const isSelected = selectedSource === topic.id;

                return (
                  <button
                    key={topic.id}
                    onClick={() => {
                      onSelectSource(topic.id);
                      setIsDrawerOpen(false);
                    }}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start justify-between gap-3 cursor-pointer group ${
                      isSelected
                        ? 'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-500 text-slate-900 dark:text-slate-100 shadow-xs'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-start space-x-3 min-w-0">
                      <div
                        className={`p-2 rounded-xl shrink-0 mt-0.5 ${
                          isSelected
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {getIcon(topic.id, 'w-4 h-4')}
                      </div>

                      <div className="min-w-0 space-y-0.5">
                        <div className="text-xs font-bold truncate flex items-center gap-1.5">
                          <span>{getTopicTitle(topic)}</span>
                          {isSelected && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                          {getTopicDescription(topic)}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center space-x-1 mt-1">
                      {getItemCountBadge(topic, isSelected)}
                      <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-emerald-500 transition" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 text-center">
              <button
                onClick={() => {
                  onSelectSource('all');
                  setIsDrawerOpen(false);
                }}
                className="w-full py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition cursor-pointer"
              >
                {activeTab === 'flashcards' ? 'Hiển Thị Tất Cả Nguồn Flashcards' : 'Hiển Thị Tất Cả Nguồn Đề Thi'}
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};
