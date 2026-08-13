import React from 'react';
import { UserProgress, Topic } from '../types';
import { Award, Layers, HelpCircle, CheckCircle2, Clock, RotateCcw, TrendingUp } from 'lucide-react';

interface StatsViewProps {
  progress: UserProgress;
  totalFlashcards: number;
  totalQuestions: number;
  topics: Topic[];
  onResetProgress: () => void;
}

export const StatsView: React.FC<StatsViewProps> = ({
  progress,
  totalFlashcards,
  totalQuestions,
  topics,
  onResetProgress,
}) => {
  const masteredCount = progress.masteredFlashcardIds.length;
  const needReviewCount = progress.needReviewFlashcardIds.length;
  const masteredPercentage = Math.round((masteredCount / totalFlashcards) * 100);

  const quizHistory = progress.quizHistory || [];
  const totalQuizzes = quizHistory.length;

  const totalAttemptedQuestions = quizHistory.reduce((acc, q) => acc + q.total, 0);
  const totalCorrectQuestions = quizHistory.reduce((acc, q) => acc + q.score, 0);
  const averageAccuracy = totalAttemptedQuestions > 0
    ? Math.round((totalCorrectQuestions / totalAttemptedQuestions) * 100)
    : 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Thống Kê Tiến Độ Học Tập</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Theo dõi tỷ lệ ghi nhớ flashcard và kết quả thi thử qua các phiên học.
          </p>
        </div>

        <button
          onClick={() => {
            if (confirm('Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ học tập không?')) {
              onResetProgress();
            }
          }}
          className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-xl text-xs font-semibold transition flex items-center gap-2 self-start md:self-auto shadow-sm cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Đặt Lại Tiến Độ
        </button>
      </div>

      {/* KPI Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Thẻ Đã Thuộc</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-800 dark:text-slate-100">
            {masteredCount} <span className="text-xs font-medium text-slate-400 dark:text-slate-500">/ {totalFlashcards}</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full" style={{ width: `${masteredPercentage}%` }}></div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Thẻ Cần Ôn</span>
            <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-800 dark:text-slate-100">
            {needReviewCount} <span className="text-xs font-medium text-slate-400 dark:text-slate-500">thẻ</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">Thẻ được đánh dấu cần xem lại</p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Độ Chính Xác Thi</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-blue-600 dark:text-blue-400">{averageAccuracy}%</div>
          <p className="text-xs text-slate-500 dark:text-slate-400">Trung bình trắc nghiệm</p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Bài Đã Thi</span>
            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-800 dark:text-slate-100">{totalQuizzes} <span className="text-xs font-medium text-slate-400 dark:text-slate-500">lần</span></div>
          <p className="text-xs text-slate-500 dark:text-slate-400">Tổng số đề thi đã nộp</p>
        </div>
      </div>

      {/* Quiz History Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
        <h3 className="font-bold text-base text-slate-800 dark:text-slate-100 flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          Lịch Sử Thi Thử Gần Đây
        </h3>

        {quizHistory.length === 0 ? (
          <div className="text-center py-8 text-slate-400 dark:text-slate-500 text-xs">
            Chưa có bài thi trắc nghiệm nào được hoàn thành. Hãy bắt đầu bài thi thử đầu tiên!
          </div>
        ) : (
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-3">Thời gian</th>
                  <th className="py-3 px-3">Chủ đề</th>
                  <th className="py-3 px-3">Số câu đúng</th>
                  <th className="py-3 px-3">Tỷ lệ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 font-medium text-slate-700 dark:text-slate-300">
                {quizHistory.slice(-10).reverse().map((res, idx) => {
                  const pct = Math.round((res.score / res.total) * 100);
                  return (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                      <td className="py-3 px-3 text-slate-500 dark:text-slate-400">{res.date}</td>
                      <td className="py-3 px-3 font-semibold text-slate-800 dark:text-slate-100">{res.topic}</td>
                      <td className="py-3 px-3">
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">{res.score}</span> / {res.total}
                      </td>
                      <td className="py-3 px-3">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                            pct >= 80
                              ? 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                              : pct >= 50
                              ? 'bg-amber-50 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                              : 'bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
                          }`}
                        >
                          {pct}%
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
