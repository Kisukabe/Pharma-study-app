import React, { useState } from 'react';
import { BookOpen, Layers, HelpCircle, Sparkles, BarChart2, Search, GraduationCap, Sun, Moon, Monitor } from 'lucide-react';

interface HeaderProps {
  activeTab: 'flashcards' | 'quiz' | 'dictionary' | 'ai' | 'stats';
  setActiveTab: (tab: 'flashcards' | 'quiz' | 'dictionary' | 'ai' | 'stats') => void;
  masteredCount: number;
  totalFlashcards: number;
  completedQuizzesCount: number;
  themeMode: 'light' | 'dark' | 'system';
  setThemeMode: (mode: 'light' | 'dark' | 'system') => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  masteredCount,
  totalFlashcards,
  completedQuizzesCount,
  themeMode,
  setThemeMode,
}) => {
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Title */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('flashcards')}>
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-sm shadow-blue-500/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight tracking-tight text-slate-800 dark:text-slate-100">
                DượcLiệu<span className="text-blue-600 dark:text-blue-400">.ai</span>
              </h1>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Ôn Tập Dược Liệu Học & Trắc Nghiệm</p>
            </div>
          </div>

          {/* Quick Stats Badges */}
          <div className="hidden lg:flex items-center space-x-3 text-xs font-medium">
            <div className="bg-blue-50 dark:bg-blue-950/50 px-3 py-1.5 rounded-full border border-blue-100 dark:border-blue-900/60 text-blue-900 dark:text-blue-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
              Đã thuộc: <span className="text-blue-700 dark:text-blue-300 font-bold">{masteredCount}/{totalFlashcards}</span> thẻ
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/60 text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
              Đã thi: <span className="text-emerald-700 dark:text-emerald-300 font-bold">{completedQuizzesCount}</span> bài
            </div>
          </div>

          {/* Right Area: Navigation Tabs & Theme Selector */}
          <div className="flex items-center space-x-2">
            <nav className="flex items-center space-x-1">
              <button
                id="tab-flashcards"
                onClick={() => setActiveTab('flashcards')}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'flashcards'
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/80 border border-blue-100 dark:border-blue-900 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span className="hidden sm:inline">Flashcards</span>
              </button>

              <button
                id="tab-quiz"
                onClick={() => setActiveTab('quiz')}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'quiz'
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/80 border border-blue-100 dark:border-blue-900 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Trắc Nghiệm</span>
              </button>

              <button
                id="tab-dictionary"
                onClick={() => setActiveTab('dictionary')}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'dictionary'
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/80 border border-blue-100 dark:border-blue-900 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Tra Cứu</span>
              </button>

              <button
                id="tab-ai"
                onClick={() => setActiveTab('ai')}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'ai'
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/80 border border-blue-100 dark:border-blue-900 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="hidden sm:inline">Trợ Lý AI</span>
              </button>

              <button
                id="tab-stats"
                onClick={() => setActiveTab('stats')}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'stats'
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/80 border border-blue-100 dark:border-blue-900 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <BarChart2 className="w-4 h-4" />
                <span className="hidden sm:inline">Thống Kê</span>
              </button>
            </nav>

            {/* Theme Mode Dropdown / Toggle Button */}
            <div className="relative pl-1 border-l border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer flex items-center gap-1.5"
                title="Thay đổi giao diện Sáng / Tối / Hệ thống"
              >
                {themeMode === 'light' && <Sun className="w-4 h-4 text-amber-500" />}
                {themeMode === 'dark' && <Moon className="w-4 h-4 text-indigo-400" />}
                {themeMode === 'system' && <Monitor className="w-4 h-4 text-blue-500" />}
              </button>

              {showThemeMenu && (
                <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-1.5 z-50 text-xs space-y-0.5">
                  <div className="px-2.5 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-700 mb-1">
                    Giao Diện
                  </div>
                  <button
                    onClick={() => {
                      setThemeMode('light');
                      setShowThemeMenu(false);
                    }}
                    className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-left transition cursor-pointer ${
                      themeMode === 'light'
                        ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 font-bold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span>Sáng (Light)</span>
                  </button>

                  <button
                    onClick={() => {
                      setThemeMode('dark');
                      setShowThemeMenu(false);
                    }}
                    className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-left transition cursor-pointer ${
                      themeMode === 'dark'
                        ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 font-bold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    <Moon className="w-4 h-4 text-indigo-400" />
                    <span>Tối (Dark)</span>
                  </button>

                  <button
                    onClick={() => {
                      setThemeMode('system');
                      setShowThemeMenu(false);
                    }}
                    className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-left transition cursor-pointer ${
                      themeMode === 'system'
                        ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 font-bold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    <Monitor className="w-4 h-4 text-blue-500" />
                    <span>Theo Hệ Thống</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
