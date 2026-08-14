export interface DictItem {
  id: string;
  term: string;
  latinOrAlt?: string;
  topic: 'daicuong' | 'harvest-process' | 'analysis-chromatography' | 'compounds-resources' | 'midterm' | 'all';
  category: string;
  definition: string;
  details: string;
  keyPoints?: string[];
  relatedTerms?: string[];
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string; // 'daicuong' | 'intro-history' | 'midterm' | 'harvest-process' | 'analysis-chromatography' | 'compounds-resources'
  isMidterm?: boolean;
  difficulty?: 'Dễ' | 'Trung bình' | 'Khó';
}

export interface Flashcard {
  id: string;
  topic: string;
  isMidterm?: boolean;
  front: string;
  back: string;
  subText?: string;
  category: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  iconName: string;
  questionCount: number;
  flashcardCount: number;
}

export interface QuizResult {
  id: string;
  date: string;
  topic: string;
  score: number;
  total: number;
  timeSpentSeconds: number;
  answers: { [questionId: number]: number };
}

export interface QuickReviewItem {
  question: string;
  answer: string;
  importantTag?: string;
}

export interface ComparisonTable {
  title: string;
  headers: string[];
  rows: string[][];
  note?: string;
}

export interface StudySection {
  id: string;
  title: string;
  content: string[];
  subSections?: {
    title: string;
    items: string[];
    important?: boolean;
  }[];
  notes?: string[];
}

export interface StudyChapter {
  id: string;
  chapterNumber: number;
  title: string;
  subtitle: string;
  iconName: string;
  pageRange: string;
  overview: string;
  keyPoints: string[];
  sections: StudySection[];
  comparisons?: ComparisonTable[];
  quickReview: QuickReviewItem[];
  relatedTopicId: string;
}

export interface UserProgress {
  masteredFlashcardIds: string[];
  needReviewFlashcardIds: string[];
  quizHistory: QuizResult[];
  bookmarkedQuestions: number[];
  completedChapterIds?: string[];
}
