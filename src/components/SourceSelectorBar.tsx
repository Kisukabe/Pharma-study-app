import React, { useRef, useState } from 'react';
import { Topic } from '../types';
import { 
  BookOpen, 
  GraduationCap, 
  Award, 
  Sprout, 
  FlaskConical, 
  Leaf, 
  Layers, 
  FileText, 
  ChevronLeft, 
  ChevronRight, 
  ListFilter, 
  LayoutList, 
  SlidersHorizontal,
  CheckCircle2
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<'slider' | 'vertical'>('slider');

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'd2022':
        return <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'deso2':
        return <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case 'deso3':
        return <Layers className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case 'daicuong':
        return <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'harvest-process':
        return <Sprout className="w-4 h-4 text-green-600 dark:text-green-400" />;
      case 'analysis-chromatography':
        return <FlaskConical className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'compounds-resources':
        return <Leaf className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
      default:
        return <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    }
  };

  const getBadgeColor = (id: string, isSelected: boolean) => {
    if (!isSelected) {
      return 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700';
    }
    switch (id) {
      case 'd2022':
        return 'bg-blue-600 text-white font-bold border-blue-600 shadow-sm';
      case 'deso2':
        return 'bg-indigo-600 text-white font-bold border-indigo-600 shadow-sm';
      case 'deso3':
        return 'bg-amber-600 text-white font-bold border-amber-600 shadow-sm';
      case 'daicuong':
        return 'bg-emerald-600 text-white font-bold border-emerald-600 shadow-sm';
      case 'harvest-process':
        return 'bg-green-700 text-white font-bold border-green-700 shadow-sm';
      case 'analysis-chromatography':
        return 'bg-purple-600 text-white font-bold border-purple-600 shadow-sm';
      case 'compounds-resources':
        return 'bg-teal-600 text-white font-bold border-teal-600 shadow-sm';
      default:
        return 'bg-slate-800 dark:bg-slate-700 text-white font-bold border-slate-800 shadow-sm';
    }
  };

  const selectedTopicObj = topics.find((t) => t.id === selectedSource) || topics[0];

  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-16 z-30 shadow-2xs py-2.5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
        {/* Header Control Row */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center space-x-2 shrink-0">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              Chọn Nguồn Bộ Đề:
            </span>
          </div>

          {/* Toggle Slider vs Vertical List Mode */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode(viewMode === 'slider' ? 'vertical' : 'slider')}
              className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
              title="Chuyển đổi giao diện chọn dạng cuộn / dạng danh sách hàng dọc"
            >
              {viewMode === 'slider' ? (
                <>
                  <LayoutList className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Xếp Hàng Dọc</span>
                </>
              ) : (
                <>
                  <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Thanh Cuộn Ngang</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* View Mode 1: Horizontal Slider with Scroll Buttons & Custom Scrollbar */}
        {viewMode === 'slider' && (
          <div className="relative group flex items-center">
            {/* Scroll Left Button */}
            <button
              onClick={() => scroll('left')}
              className="hidden sm:flex items-center justify-center p-1.5 rounded-l-xl bg-slate-100/90 dark:bg-slate-800/90 hover:bg-blue-600 hover:text-white text-slate-600 dark:text-slate-300 transition shrink-0 z-10 cursor-pointer border border-r-0 border-slate-200 dark:border-slate-700 shadow-2xs"
              title="Cuộn sang trái"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Scrollable Container with Custom Scrollbar */}
            <div
              ref={scrollContainerRef}
              className="flex items-center space-x-2 overflow-x-auto custom-scrollbar py-2 px-1 scroll-smooth w-full"
            >
              {topics.map((topic) => {
                const isSelected = selectedSource === topic.id;
                return (
                  <button
                    key={topic.id}
                    onClick={() => onSelectSource(topic.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs border transition-all whitespace-nowrap cursor-pointer shrink-0 ${getBadgeColor(
                      topic.id,
                      isSelected
                    )}`}
                  >
                    <span className={isSelected ? 'text-white' : ''}>{getIcon(topic.id)}</span>
                    <span>{topic.title}</span>
                    {topic.id !== 'all' && (
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ml-0.5 ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300'
                        }`}
                      >
                        {activeTab === 'quiz' ? `${topic.questionCount} câu` : `${topic.flashcardCount} thẻ`}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Scroll Right Button */}
            <button
              onClick={() => scroll('right')}
              className="hidden sm:flex items-center justify-center p-1.5 rounded-r-xl bg-slate-100/90 dark:bg-slate-800/90 hover:bg-blue-600 hover:text-white text-slate-600 dark:text-slate-300 transition shrink-0 z-10 cursor-pointer border border-l-0 border-slate-200 dark:border-slate-700 shadow-2xs"
              title="Cuộn sang phản"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* View Mode 2: Vertical List View (Các phần chọn được xếp theo hàng dọc) */}
        {viewMode === 'vertical' && (
          <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-3 my-2 space-y-2 max-h-72 overflow-y-auto custom-scrollbar">
            <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Danh Sách Tất Cả Bộ Đề Thi (Xếp Theo Hàng Dọc):</span>
              <span className="text-blue-600 dark:text-blue-400">{topics.length} nguồn</span>
            </div>
            <div className="flex flex-col space-y-1.5">
              {topics.map((topic) => {
                const isSelected = selectedSource === topic.id;
                return (
                  <button
                    key={topic.id}
                    onClick={() => {
                      onSelectSource(topic.id);
                    }}
                    className={`flex items-center justify-between p-3 rounded-xl border text-left transition cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 font-bold shadow-xs'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 text-slate-800 dark:text-slate-100'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-800'}`}>
                        {getIcon(topic.id)}
                      </div>
                      <div>
                        <div className="text-xs font-bold flex items-center gap-1.5">
                          <span>{topic.title}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white fill-white/20" />}
                        </div>
                        <p className={`text-[11px] mt-0.5 line-clamp-1 ${isSelected ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                          {topic.description}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 text-right ml-2">
                      <span className={`text-[11px] font-bold px-2 py-1 rounded-md ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}>
                        {activeTab === 'quiz' ? `${topic.questionCount} câu` : `${topic.flashcardCount} thẻ`}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Selected Source Active Banner */}
        {selectedSource !== 'all' && (
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 bg-slate-50/80 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-800 dark:text-slate-100">Đang tập trung nguồn:</span>
              <span className="font-semibold text-blue-700 dark:text-blue-400">{selectedTopicObj.title}</span>
              <span className="hidden sm:inline text-slate-400 dark:text-slate-500">— {selectedTopicObj.description}</span>
            </div>
            <button
              onClick={() => onSelectSource('all')}
              className="text-[11px] font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 underline shrink-0 ml-2 cursor-pointer"
            >
              Hiện tất cả nguồn ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
