import React, { useState } from 'react';
import { 
  BookOpen, 
  Layers, 
  HelpCircle, 
  Sparkles, 
  BarChart2, 
  Search, 
  GraduationCap, 
  Sun, 
  Moon, 
  Monitor,
  Check
} from 'lucide-react';

interface HeaderProps {
  activeTab: 'materials' | 'flashcards' | 'quiz' | 'dictionary' | 'ai' | 'stats';
  setActiveTab: (tab: 'materials' | 'flashcards' | 'quiz' | 'dictionary' | 'ai' | 'stats') => void;
  masteredCount: number;
  totalFlashcards: number;
  completedQuizzesCount: number;
  themeMode: 'light' | 'dark' | 'system';
  setThemeMode: (mode: 'light' | 'dark' | 'system') => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  themeMode,
  setThemeMode,
}) => {
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const navItems = [
    {
      id: 'materials',
      label: 'Giáo Trình',
      icon: BookOpen,
      activeColor: 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 border-emerald-600',
      iconColor: 'text-emerald-500',
    },
    {
      id: 'flashcards',
      label: 'Flashcards',
      icon: Layers,
      activeColor: 'bg-teal-600 text-white shadow-md shadow-teal-600/25 border-teal-600',
      iconColor: 'text-teal-500',
    },
    {
      id: 'quiz',
      label: 'Trắc Nghiệm',
      icon: HelpCircle,
      activeColor: 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 border-indigo-600',
      iconColor: 'text-indigo-500',
    },
    {
      id: 'dictionary',
      label: 'Tra Cứu',
      icon: Search,
      activeColor: 'bg-violet-600 text-white shadow-md shadow-violet-600/25 border-violet-600',
      iconColor: 'text-violet-500',
    },
    {
      id: 'ai',
      label: 'Trợ Lý AI',
      icon: Sparkles,
      activeColor: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/25 border-amber-500',
      iconColor: 'text-amber-500',
    },
    {
      id: 'stats',
      label: 'Thống Kê',
      icon: BarChart2,
      activeColor: 'bg-slate-800 dark:bg-slate-700 text-white shadow-md border-slate-800',
      iconColor: 'text-slate-500',
    },
  ] as const;

  return (
    <header className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 sticky top-0 z-40 shadow-2xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Left Brand Logo & Title */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group shrink-0" 
            onClick={() => setActiveTab('materials')}
            title="Về màn hình chính Giáo Trình Dược Liệu"
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-md shadow-emerald-600/25 ring-2 ring-emerald-500/15 group-hover:scale-105 transition-transform duration-200">
              <GraduationCap className="w-5 h-5 stroke-[2.2]" />
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-sm sm:text-base tracking-tight text-slate-800 dark:text-slate-100">
                  Học Dược
                </span>
                <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent font-black text-sm sm:text-base">
                  Cùng Ngọt
                </span>
              </div>
              <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
                Ôn thi trắc nghiệm & Giáo trình chuẩn khoa dược
              </span>
            </div>
          </div>

          {/* Right Navigation Tabs & Theme Controls */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            {/* Nav Tabs */}
            <nav className="flex items-center space-x-1 bg-slate-100/70 dark:bg-slate-800/60 p-1 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    id={`tab-${item.id}`}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? `${item.activeColor} border scale-100`
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60 border border-transparent'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : item.iconColor}`} />
                    <span className="hidden md:inline">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Theme Mode Selector Dropdown */}
            <div className="relative pl-1 border-l border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className="p-2 rounded-2xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer flex items-center justify-center border border-slate-200/60 dark:border-slate-700/60"
                title="Thay đổi giao diện Sáng / Tối / Hệ thống"
              >
                {themeMode === 'light' && <Sun className="w-4 h-4 text-amber-500" />}
                {themeMode === 'dark' && <Moon className="w-4 h-4 text-indigo-400" />}
                {themeMode === 'system' && <Monitor className="w-4 h-4 text-blue-500" />}
              </button>

              {showThemeMenu && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowThemeMenu(false)}></div>
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl p-1.5 z-50 text-xs space-y-1 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-1.5 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider border-b border-slate-100 dark:border-slate-700/80 mb-1 flex items-center justify-between">
                      <span>Chế Độ Giao Diện</span>
                    </div>

                    <button
                      onClick={() => {
                        setThemeMode('light');
                        setShowThemeMenu(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition cursor-pointer ${
                        themeMode === 'light'
                          ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 font-bold border border-amber-200 dark:border-amber-900'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/60'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Sun className="w-4 h-4 text-amber-500" />
                        <span>Giao Diện Sáng</span>
                      </div>
                      {themeMode === 'light' && <Check className="w-3.5 h-3.5 text-amber-600" />}
                    </button>

                    <button
                      onClick={() => {
                        setThemeMode('dark');
                        setShowThemeMenu(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition cursor-pointer ${
                        themeMode === 'dark'
                          ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-200 dark:border-indigo-900'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/60'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Moon className="w-4 h-4 text-indigo-400" />
                        <span>Giao Diện Tối</span>
                      </div>
                      {themeMode === 'dark' && <Check className="w-3.5 h-3.5 text-indigo-400" />}
                    </button>

                    <button
                      onClick={() => {
                        setThemeMode('system');
                        setShowThemeMenu(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition cursor-pointer ${
                        themeMode === 'system'
                          ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-bold border border-blue-200 dark:border-blue-900'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/60'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Monitor className="w-4 h-4 text-blue-500" />
                        <span>Theo Hệ Thống</span>
                      </div>
                      {themeMode === 'system' && <Check className="w-3.5 h-3.5 text-blue-500" />}
                    </button>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};
