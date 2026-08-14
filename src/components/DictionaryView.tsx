import React, { useState, useEffect, useMemo } from 'react';
import { DICTIONARY_ITEMS } from '../data/dictionary';
import { DictItem } from '../types';
import { 
  Search, 
  BookMarked, 
  Filter, 
  Bookmark, 
  Copy, 
  Check, 
  Sparkles, 
  X, 
  ChevronRight, 
  Layers, 
  BookOpen,
  Info,
  ExternalLink
} from 'lucide-react';

interface DictionaryViewProps {
  selectedSource?: string;
}

export const DictionaryView: React.FC<DictionaryViewProps> = ({ selectedSource = 'all' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [activeSourceFilter, setActiveSourceFilter] = useState<string>('all');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('duoc_lieu_dict_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedItemForModal, setSelectedItemForModal] = useState<DictItem | null>(null);

  // Sync internal source filter when top prop selectedSource changes
  useEffect(() => {
    if (selectedSource) {
      setActiveSourceFilter(selectedSource);
    }
  }, [selectedSource]);

  // Persist dict bookmarks
  useEffect(() => {
    try {
      localStorage.setItem('duoc_lieu_dict_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error('Failed to save dict bookmarks', e);
    }
  }, [bookmarkedIds]);

  // Handle bookmarking
  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Copy text to clipboard
  const copyToClipboard = (item: DictItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const content = `${item.term} (${item.latinOrAlt || ''})\nThẩm định: ${item.definition}\nChi tiết: ${item.details}`;
    navigator.clipboard.writeText(content);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Derive all unique categories
  const categories = useMemo(() => {
    const set = new Set(DICTIONARY_ITEMS.map((item) => item.category));
    return ['Tất cả', 'Đã đánh dấu', ...Array.from(set)];
  }, []);

  // Source topics list
  const sourceTopics = [
    { id: 'all', label: 'Tất cả nguồn' },
    { id: 'daicuong', label: '🌿 Đại Cương & Lịch Sử' },
    { id: 'harvest-process', label: '🌱 Thu Hái - Chế Biến' },
    { id: 'analysis-chromatography', label: '🧪 Sắc Ký & Kiểm Nghiệm' },
    { id: 'compounds-resources', label: '🍃 Hoạt Chất & Tài Nguyên' },
  ];

  // Filtering items
  const filteredItems = useMemo(() => {
    return DICTIONARY_ITEMS.filter((item) => {
      // Search term filter
      const matchesSearch =
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.latinOrAlt && item.latinOrAlt.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.details.toLowerCase().includes(searchTerm.toLowerCase());

      // Category filter
      let matchesCategory = true;
      if (selectedCategory === 'Đã đánh dấu') {
        matchesCategory = bookmarkedIds.includes(item.id);
      } else if (selectedCategory !== 'Tất cả') {
        matchesCategory = item.category === selectedCategory;
      }

      // Source topic filter
      let matchesSource = true;
      if (activeSourceFilter !== 'all') {
        if (activeSourceFilter === 'daicuong') {
          matchesSource = item.category.includes('Lịch sử') || item.category.includes('Khái niệm') || item.category.includes('Danh y') || item.category.includes('Đại cương');
        } else if (activeSourceFilter === 'harvest-process') {
          matchesSource = item.category.includes('Thu hái') || item.category.includes('Chế biến') || item.category.includes('Phơi sấy');
        } else if (activeSourceFilter === 'analysis-chromatography') {
          matchesSource = item.category.includes('Kiểm nghiệm') || item.category.includes('Sắc ký') || item.category.includes('Định lượng');
        } else if (activeSourceFilter === 'compounds-resources') {
          matchesSource = item.category.includes('Hoạt chất') || item.category.includes('Dược liệu') || item.category.includes('Hợp chất');
        }
      }

      return matchesSearch && matchesCategory && matchesSource;
    });
  }, [searchTerm, selectedCategory, activeSourceFilter, bookmarkedIds]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* View Title */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 text-xs font-bold">
          <BookMarked className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Tra Cứu Thuật Ngữ Tra Cứu Dược Y
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">Từ Điển Chuyên Ngành Dược Liệu</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Tra cứu nhanh định nghĩa, danh y lịch sử (Tuệ Tĩnh, Hải Thượng Lãn Ông, Paracelsus), các phương pháp kiểm nghiệm (GACP, HPLC) & hoạt chất (Coumarin, Pectin...).
        </p>
      </div>

      {/* Controls & Search Bar Box */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 shadow-sm">
        {/* Source Filter Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar border-b border-slate-100 dark:border-slate-800 pb-3">
          <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            Nguồn:
          </span>
          {sourceTopics.map((src) => (
            <button
              key={src.id}
              onClick={() => setActiveSourceFilter(src.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                activeSourceFilter === src.id
                  ? 'bg-blue-600 text-white font-bold shadow-2xs'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700'
              }`}
            >
              {src.label}
            </button>
          ))}
        </div>

        {/* Input Search with Clear button */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Nhập thuật ngữ, tên Latin, danh y (Tuệ Tĩnh, Paracelsus, Coumarin, GACP, HPLC, Pectin)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-10 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-600 transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === cat
                  ? 'bg-slate-800 dark:bg-slate-700 text-white font-bold shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700'
              }`}
            >
              {cat === 'Đã đánh dấu' && <Bookmark className="w-3 h-3 text-amber-400 fill-amber-400" />}
              <span>{cat}</span>
              {cat === 'Đã đánh dấu' && bookmarkedIds.length > 0 && (
                <span className="ml-1 px-1.5 py-0.2 bg-amber-500 text-white text-[10px] rounded-full font-bold">
                  {bookmarkedIds.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Results Indicator Bar */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1 font-medium">
        <span>
          Tìm thấy <strong className="text-slate-800 dark:text-slate-100">{filteredItems.length}</strong> thuật ngữ phù hợp
        </span>
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
          >
            Xóa bộ lọc tìm kiếm
          </button>
        )}
      </div>

      {/* Main Items Grid */}
      {filteredItems.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center space-y-3 shadow-sm">
          <BookOpen className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">Không tìm thấy thuật ngữ phù hợp</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Thử nhập từ khóa khác như "Tuệ Tĩnh", "Phân loại", "GACP", "HPLC" hoặc chuyển sang danh mục "Tất cả".
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item) => {
            const isBookmarked = bookmarkedIds.includes(item.id);
            const isCopied = copiedId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItemForModal(item)}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 rounded-2xl p-5 space-y-4 transition shadow-2xs hover:shadow-xs group cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Top Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900 inline-block">
                        {item.category}
                      </span>
                      <h3 className="font-bold text-base text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition leading-snug">
                        {item.term}
                      </h3>
                      {item.latinOrAlt && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 italic font-mono">
                          {item.latinOrAlt}
                        </p>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-1 shrink-0">
                      <button
                        onClick={(e) => copyToClipboard(item, e)}
                        className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition cursor-pointer"
                        title="Sao chép nội dung"
                      >
                        {isCopied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={(e) => toggleBookmark(item.id, e)}
                        className={`p-1.5 rounded-lg transition cursor-pointer ${
                          isBookmarked ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/80' : 'text-slate-400 dark:text-slate-500 hover:text-amber-500'
                        }`}
                        title="Đánh dấu thuật ngữ"
                      >
                        <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Core Definition */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {item.definition}
                  </p>
                </div>

                {/* Card Footer Click to details */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                  <span>Xem chi tiết chuyên sâu</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal Popup for Detailed Term */}
      {selectedItemForModal && (
        <div className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative custom-scrollbar">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItemForModal(null)}
              className="absolute right-6 top-6 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900 inline-block">
                {selectedItemForModal.category}
              </span>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                {selectedItemForModal.term}
              </h3>
              {selectedItemForModal.latinOrAlt && (
                <p className="text-sm font-mono italic text-blue-600 dark:text-blue-400">
                  {selectedItemForModal.latinOrAlt}
                </p>
              )}
            </div>

            {/* Content Body */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <div className="p-4 bg-blue-50/50 dark:bg-blue-950/40 rounded-2xl border border-blue-100 dark:border-blue-900/60">
                <h4 className="font-bold text-blue-900 dark:text-blue-300 text-xs uppercase tracking-wider mb-1">Tóm Tắt Định Nghĩa:</h4>
                <p>{selectedItemForModal.definition}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Nội Dung & Thông Tin Chi Tiết:
                </h4>
                <p className="whitespace-pre-line text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                  {selectedItemForModal.details}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setSelectedItemForModal(null)}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
