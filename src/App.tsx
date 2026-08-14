import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SourceSelectorBar } from './components/SourceSelectorBar';
import { StudyMaterialView } from './components/StudyMaterialView';
import { FlashcardView } from './components/FlashcardView';
import { QuizView } from './components/QuizView';
import { DictionaryView } from './components/DictionaryView';
import { AiAssistant } from './components/AiAssistant';
import { StatsView } from './components/StatsView';

import { FLASHCARDS } from './data/flashcards';
import { QUIZ_QUESTIONS } from './data/quizQuestions';
import { TOPICS } from './data/topics';
import { UserProgress, QuizResult } from './types';

const STORAGE_KEY = 'duoc_lieu_user_progress_v1';
const THEME_KEY = 'duoc_lieu_theme_mode_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState<'materials' | 'flashcards' | 'quiz' | 'dictionary' | 'ai' | 'stats'>('materials');
  const [selectedSource, setSelectedSource] = useState<string>('all');

  // Theme state: 'light' | 'dark' | 'system'
  const [themeMode, setThemeMode] = useState<'light' | 'dark' | 'system'>(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system') {
        return savedTheme;
      }
    } catch (e) {
      console.error('Failed to load theme preference', e);
    }
    return 'system';
  });

  // Effect to manage theme class on html document element
  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, themeMode);
    } catch (e) {
      console.error('Failed to save theme preference', e);
    }

    const root = document.documentElement;

    const applyTheme = (mode: 'light' | 'dark' | 'system') => {
      let isDark = false;
      if (mode === 'dark') {
        isDark = true;
      } else if (mode === 'light') {
        isDark = false;
      } else {
        isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }

      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    applyTheme(themeMode);

    if (themeMode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [themeMode]);

  // Load progress from localStorage
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load user progress', e);
    }
    return {
      masteredFlashcardIds: [],
      needReviewFlashcardIds: [],
      bookmarkedQuestions: [],
      quizHistory: [],
    };
  });

  // Save progress to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userProgress));
    } catch (e) {
      console.error('Failed to save progress', e);
    }
  }, [userProgress]);

  // Flashcard handlers
  const handleToggleMastered = (cardId: string) => {
    setUserProgress((prev) => {
      const isMastered = prev.masteredFlashcardIds.includes(cardId);
      const newMastered = isMastered
        ? prev.masteredFlashcardIds.filter((id) => id !== cardId)
        : [...prev.masteredFlashcardIds, cardId];

      const newNeedReview = isMastered
        ? prev.needReviewFlashcardIds
        : prev.needReviewFlashcardIds.filter((id) => id !== cardId);

      return {
        ...prev,
        masteredFlashcardIds: newMastered,
        needReviewFlashcardIds: newNeedReview,
      };
    });
  };

  const handleToggleNeedReview = (cardId: string) => {
    setUserProgress((prev) => {
      const isNeedReview = prev.needReviewFlashcardIds.includes(cardId);
      const newNeedReview = isNeedReview
        ? prev.needReviewFlashcardIds.filter((id) => id !== cardId)
        : [...prev.needReviewFlashcardIds, cardId];

      const newMastered = isNeedReview
        ? prev.masteredFlashcardIds
        : prev.masteredFlashcardIds.filter((id) => id !== cardId);

      return {
        ...prev,
        masteredFlashcardIds: newMastered,
        needReviewFlashcardIds: newNeedReview,
      };
    });
  };

  // Question bookmark handler
  const handleToggleBookmark = (questionId: number) => {
    setUserProgress((prev) => {
      const bookmarked = prev.bookmarkedQuestions || [];
      const isBookmarked = bookmarked.includes(questionId);
      const newBookmarks = isBookmarked
        ? bookmarked.filter((id) => id !== questionId)
        : [...bookmarked, questionId];

      return {
        ...prev,
        bookmarkedQuestions: newBookmarks,
      };
    });
  };

  // Save Quiz result handler
  const handleSaveQuizResult = (result: QuizResult) => {
    setUserProgress((prev) => ({
      ...prev,
      quizHistory: [...(prev.quizHistory || []), result],
    }));
  };

  // Reset Progress handler
  const handleResetProgress = () => {
    const freshState: UserProgress = {
      masteredFlashcardIds: [],
      needReviewFlashcardIds: [],
      bookmarkedQuestions: [],
      quizHistory: [],
    };
    setUserProgress(freshState);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans flex flex-col selection:bg-blue-100 selection:text-blue-900 transition-colors">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        masteredCount={userProgress.masteredFlashcardIds.length}
        totalFlashcards={FLASHCARDS.length}
        completedQuizzesCount={userProgress.quizHistory?.length || 0}
        themeMode={themeMode}
        setThemeMode={setThemeMode}
      />

      {/* Global Source / Topic Selector Bar (Ẩn khi ở Tab Giáo Trình) */}
      {activeTab !== 'materials' && (
        <SourceSelectorBar
          topics={TOPICS}
          selectedSource={selectedSource}
          onSelectSource={setSelectedSource}
          activeTab={activeTab}
        />
      )}

      {/* Main Container */}
      <main className="flex-1 pb-12">
        {activeTab === 'materials' && (
          <StudyMaterialView
            selectedSource={selectedSource}
            onNavigateToFlashcards={(topicId) => {
              setSelectedSource(topicId || 'daicuong');
              setActiveTab('flashcards');
            }}
            onNavigateToQuiz={(topicId) => {
              setSelectedSource(topicId || 'daicuong');
              setActiveTab('quiz');
            }}
          />
        )}

        {activeTab === 'flashcards' && (
          <FlashcardView
            flashcards={FLASHCARDS}
            topics={TOPICS}
            selectedSource={selectedSource}
            masteredIds={userProgress.masteredFlashcardIds}
            needReviewIds={userProgress.needReviewFlashcardIds}
            onToggleMastered={handleToggleMastered}
            onToggleNeedReview={handleToggleNeedReview}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizView
            questions={QUIZ_QUESTIONS}
            topics={TOPICS}
            selectedSource={selectedSource}
            bookmarkedIds={userProgress.bookmarkedQuestions || []}
            onToggleBookmark={handleToggleBookmark}
            onSaveQuizResult={handleSaveQuizResult}
          />
        )}

        {activeTab === 'dictionary' && <DictionaryView selectedSource={selectedSource} />}

        {activeTab === 'ai' && <AiAssistant selectedSource={selectedSource} />}

        {activeTab === 'stats' && (
          <StatsView
            progress={userProgress}
            totalFlashcards={FLASHCARDS.length}
            totalQuestions={QUIZ_QUESTIONS.length}
            topics={TOPICS}
            onResetProgress={handleResetProgress}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-6 text-center text-xs text-slate-500 dark:text-slate-400 transition-colors">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-medium">
            © Dược Liệu Học - Hệ Thống Ôn Tập Flashcard & Trắc Nghiệm Tương Tác
          </p>
          <p className="text-slate-400 dark:text-slate-500">
            Nội dung bám sát giáo trình Dược Y & Đề thi trắc nghiệm Dược Liệu
          </p>
        </div>
      </footer>
    </div>
  );
}
