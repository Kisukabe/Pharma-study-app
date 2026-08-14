import { Question } from '../types';

export const QUIZ_QUESTIONS: Question[] = [
  // --- ĐỀ THI GIỮA KÌ DƯỢC LIỆU 1 LỚP D2022 (60 câu) ---
  {
    id: 1,
    question: "Con đường sinh tổng hợp triterpenoid là từ:",
    options: ["Mevalonat", "Shikimat", "Acetat", "Citrat"],
    correctIndex: 0,
    explanation: "Triterpenoid (C30) được sinh tổng hợp qua con đường acid mevalonic (Mevalonat / MVA pathway) từ 6 đơn vị isoprene C5 (squalene).",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 2,
    question: "Sesterterpen có bao nhiêu carbon trong cấu trúc?",
    options: ["20 carbon", "15 carbon", "30 carbon", "25 carbon"],
    correctIndex: 3,
    explanation: "Sesterterpen gồm 5 đơn vị isoprene (5 × C5 = 25 carbon). Hemiterpen (C5), Monoterpen (C10), Sesquiterpen (C15), Diterpen (C20), Sesterterpen (C25), Triterpen (C30).",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 3,
    question: "Phổ UV của một glycosid tim có bước sóng hấp thu cực đại λmax = 300 nm. Phổ này là của glycosid tim nào?",
    options: ["Cardenolid", "Bufadienolid", "Digoxin", "Oleanderin"],
    correctIndex: 1,
    explanation: "Bufadienolid có vòng lacton 6 cạnh chứa 2 nối đôi liên hợp hấp thu UV cực đại ở 300 nm, trong khi Cardenolid (vòng lacton 5 cạnh có 1 nối đôi) hấp thu ở 217 nm.",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 4,
    question: "Phân nhóm Dammaran thuộc nhóm saponin nào?",
    options: ["Saponin triterpen 4 vòng", "Saponin triterpen 5 vòng", "Saponin steroid đơn giản", "Saponin steroid alkaloid"],
    correctIndex: 0,
    explanation: "Dammaran (có trong Nhân sâm - Ginsenoside) thuộc nhóm saponin triterpen 4 vòng (tetracyclic triterpenoid).",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 5,
    question: "Quil-A là saponin tách từ cây Quillaja saponaria được sử dụng chủ yếu làm gì?",
    options: ["Làm thuốc kháng ung thư", "Làm chất tẩy rửa sinh học", "Làm tá dược tá chất hỗ trợ trong vaccine gia súc (adjuvant)", "Làm thuốc trị ho long đờm"],
    correctIndex: 2,
    explanation: "Quil-A là hỗn hợp saponin chiết từ cây Quillaja saponaria dùng làm tá dược kích thích miễn dịch (adjuvant) trong vaccine thú y và gia súc.",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Khó"
  },
  {
    id: 6,
    question: "Điểm khác biệt cơ bản về mặt hóa học giữa saponin triterpen và saponin steroid là gì?",
    options: ["Vị trí và số lượng nhóm methyl", "Gem-dimethyl ở vòng A và số lượng nhóm methyl", "Vị trí gắn đường glycosid", "Cấu hình nhóm -OH ở vị trí C3"],
    correctIndex: 1,
    explanation: "Saponin triterpen (C30) có nhóm gem-dimethyl (2 nhóm methyl gắn cùng C4) ở vòng A và tổng cộng 8 nhóm methyl, trong khi saponin steroid (C27) không có gem-dimethyl ở vòng A.",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 7,
    question: "Bộ phận dùng chính của dược liệu Trúc đào (Nerium oleander) chứa glycosid tim là gì?",
    options: ["Hạt", "Thân", "Lá (Folium Nerii)", "Rễ"],
    correctIndex: 2,
    explanation: "Lá Trúc đào (Folium Nerii) chứa hoạt chất glycosid tim chính là oleandrin (neriolin) có tác dụng cường tim mạnh.",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 8,
    question: "Glycosid tim phân bố chủ yếu ở một số họ thực vật nhất định. Khi tìm kiếm glycosid tim nên tập trung vào họ nào?",
    options: ["Amaryllidaceae", "Menispermaceae", "Euphorbiaceae", "Scrophulariaceae (Họ Hoa mõm chó)"],
    correctIndex: 3,
    explanation: "Scrophulariaceae (Họ Hoa mõm chó - chứa chi Digitalis) và Apocynaceae (Họ Trúc đào - chứa Nerium, Strophanthus) là các họ tập trung nhiều glycosid tim nhất.",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 9,
    question: "Các hợp chất thứ cấp được gọi là 'kháng sinh' thì được phân loại theo nguyên tắc nào?",
    options: ["Theo tiền chất tổng hợp", "Theo con đường sinh tổng hợp", "Theo cấu trúc hóa học", "Theo tác dụng sinh học"],
    correctIndex: 3,
    explanation: "Kháng sinh là cách phân loại dựa trên tác dụng sinh học (ức chế hoặc tiêu diệt vi sinh vật), dù cấu trúc hóa học có thể thuộc nhiều nhóm khác nhau (beta-lactam, aminoglycosid, macrolid...).",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 10,
    question: "Người Việt cổ đã biết sử dụng các chất độc từ thực/động vật để săn bắn và chống giặc từ thời nào?",
    options: ["Thời Tiền Lê", "Thời Lý", "Thời Hùng Vương", "Thời An Dương Vương"],
    correctIndex: 2,
    explanation: "Từ thời Hùng Vương (Văn Lang cổ đại), người Việt cổ đã biết dùng nhựa cây độc (như nhựa ngón, củ ấu tẩu...) tẩm vào đầu mũi tên nỏ săn bắn và tự vệ.",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 11,
    question: "Loại phổ nào thông dụng và hiệu quả nhất hiện nay trong xác định cấu trúc hợp chất hữu cơ tinh khiết?",
    options: ["Phổ NMR (Cộng hưởng từ hạt nhân) và Phổ MS (Khối phổ)", "Phổ HR-MS", "Phổ IR và NMR", "Phổ nhiễu xạ đơn tinh thể tia X"],
    correctIndex: 0,
    explanation: "Sự kết hợp giữa Phổ cộng hưởng từ hạt nhân (NMR: 1H-NMR, 13C-NMR, 2D-NMR) và Khối phổ (MS) là phương pháp tiêu chuẩn thông dụng nhất xác định cấu trúc hợp chất tự nhiên.",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 12,
    question: "Phần nào trong cấu trúc glycosid tim ảnh hưởng lớn nhất lên độ tan và sự hấp thu của thuốc?",
    options: ["Khung steroid", "Số lượng nối đôi", "Vòng lacton", "Phần đường (Glycon)"],
    correctIndex: 3,
    explanation: "Phần đường (glycon) có nhiều nhóm -OH phân cực quyết định độ tan trong nước, khả năng hấp thu qua đường tiêu hóa và tốc độ thải trừ của glycosid tim.",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 13,
    question: "Kinh nghiệm sử dụng cây cỏ làm thuốc được ghi chép sớm nhất trên giấy Papyrus thuộc nền văn minh nào?",
    options: ["La Mã cổ đại", "Ai Cập cổ đại", "Hy Lạp cổ đại", "Assyri - Babylon"],
    correctIndex: 1,
    explanation: "Giấy Papyrus Ebers (khoảng 1550 TCN) của Ai Cập cổ đại ghi chép hơn 700 bài thuốc và vị thuốc từ thảo mộc, động vật và khoáng vật.",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 14,
    question: "Khung cấu trúc nào sau đây thuộc phân nhóm saponin triterpen 4 vòng?",
    options: ["Olean", "Ursan", "Dammaran", "Lupan"],
    correctIndex: 2,
    explanation: "Dammaran và Lanostan là khung triterpen 4 vòng. Trong khi Olean, Ursan và Lupan thuộc saponin triterpen 5 vòng (pentacyclic triterpenoid).",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 15,
    question: "Tác phẩm y dược cổ truyền kinh điển 'Nam Dược Thần Hiệu' là của đại danh y nào?",
    options: ["Đỗ Tất Lợi", "Hải Thượng Lãn Ông (Lê Hữu Trác)", "Nguyễn Bá Tĩnh (Tuệ Tĩnh)", "Lý Thời Trân"],
    correctIndex: 2,
    explanation: "Thiền sư Tuệ Tĩnh (Nguyễn Bá Tĩnh) biên soạn bộ sách 'Nam Dược Thần Hiệu' gồm 11 quyển tổng kết 580 vị thuốc Nam và ngàn bài thuốc dân gian.",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 16,
    question: "Tác giả đề xướng thuyết 'Độc vị' (dùng đơn chất hóa học tinh khiết làm thuốc) thời Phục Hưng là ai?",
    options: ["Paracelsus", "Avien", "Asclepius", "Celsus"],
    correctIndex: 0,
    explanation: "Paracelsus (1493-1541) phản đối việc phối hợp thô sơ nhiều dược liệu, đề xướng dùng hoạt chất tinh khiết và khẳng định 'Liều lượng quyết định chất độc' (Dosis sola facit venenum).",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 17,
    question: "Những nhóm chất nào sau đây có chứa cấu trúc γ-pyron (gamma-pyron): 1. Coumarin, 2. Flavonoid, 3. Anthraquinon, 4. Xanthon?",
    options: ["1, 3", "3, 4", "2, 3, 4", "1, 4"],
    correctIndex: 2,
    explanation: "Flavonoid, Anthraquinon và Xanthon đều chứa vòng gamma-pyron (vòng 6 cạnh có carbonyl ở vị trí gamma so với oxy). Coumarin có vòng alpha-pyron.",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 18,
    question: "Glycosid tim có vòng lacton 5 carbon (vòng 5 cạnh unsaturated) được gọi tên là gì?",
    options: ["Bufadienolid", "Cardenolid", "Bufanolid", "Cardienolid"],
    correctIndex: 1,
    explanation: "Glycosid tim chứa vòng lacton 5 carbon (vòng 5 cạnh có 1 nối đôi) gọi là Cardenolid (ví dụ: Digitoxin, Digoxin, Oleandrin).",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 19,
    question: "Glycosid tim có vòng lacton 6 carbon (vòng 6 cạnh unsaturated chứa 2 nối đôi) được gọi tên là gì?",
    options: ["Cardienolid", "Cardenolid", "Bufanolid", "Bufadienolid"],
    correctIndex: 3,
    explanation: "Glycosid tim chứa vòng lacton 6 carbon (vòng 6 cạnh có 2 nối đôi) gọi là Bufadienolid (ví dụ: Scillaren A trong Hành biển, nhựa Thiềm thư).",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 20,
    question: "Các hợp chất polyphenol trong thực vật được phân loại dựa trên yếu tố nào?",
    options: ["Theo con đường sinh tổng hợp trong cây", "Theo mạch carbon gắn trên vòng thơm", "Theo số lượng nhóm -OH", "Theo cấu trúc khung cơ bản (C6-C1, C6-C3, C6-C3-C6...)"],
    correctIndex: 3,
    explanation: "Polyphenol được phân loại hệ thống dựa theo cấu trúc khung carbon cơ bản: C6-C1 (acid phenolic), C6-C3 (coumarin, phenylpropanoid), C6-C3-C6 (flavonoid), (C6-C3)n (lignan, tannin)...",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 21,
    question: "Môn Dược liệu học (Pharmacognosy) theo định nghĩa chuẩn mực là môn học:",
    options: ["Nghiên cứu về thuốc có nguồn gốc tự nhiên", "Nghiên cứu về nguyên liệu làm thuốc có nguồn gốc sinh học", "Nghiên cứu về thuốc có nguồn gốc hữu cơ", "Nghiên cứu về thuốc có nguồn gốc sinh vật"],
    correctIndex: 1,
    explanation: "Dược liệu học nghiên cứu toàn diện về nguyên liệu làm thuốc có nguồn gốc sinh học (thực vật, động vật, vi sinh vật, nấm, sinh vật biển).",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 22,
    question: "Khái niệm 'Loài đặc hữu' (Endemic species) trong sinh học và dược liệu nghĩa là gì?",
    options: ["Là loài đặc trưng chỉ xuất hiện tự nhiên ở một vùng lãnh thổ/quốc gia nhất định mà không có ở nơi khác", "Là loài có tác dụng sinh học đặc trưng chữa bệnh hiểm nghèo", "Là loài đã được đăng ký sở hữu trí tuệ", "Là loài thảo dược đã bị tuyệt chủng ngoài tự nhiên"],
    correctIndex: 0,
    explanation: "Loài đặc hữu là loài chỉ phân bố tự nhiên trong phạm vi một vùng địa lý hay lãnh thổ hẹp nhất định (ví dụ: Sâm Ngọc Linh là loài đặc hữu Việt Nam).",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 23,
    question: "Môn Dược liệu học cung cấp những nhóm thông tin quan trọng nào sau đây?",
    options: ["Nguồn gốc phân loại thực vật/động vật", "Thành phần hóa học, tính chất lý hóa, kiểm nghiệm", "Công dụng, tác dụng dược lý và cách sử dụng trong y học", "Cả 3 nhóm nội dung trên (A, B, C)"],
    correctIndex: 3,
    explanation: "Dược liệu học cung cấp đầy đủ thông tin từ nguồn gốc phân loại, thành phần hóa học, kiểm nghiệm chất lượng đến tác dụng dược lý và công dụng điều trị.",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 24,
    question: "Chất màu tự nhiên tạo nên màu đỏ tím đặc trưng ở củ dền thuộc nhóm nào?",
    options: ["Betalain", "Alkaloid", "Alkamid", "Glucosinat"],
    correctIndex: 0,
    explanation: "Màu đỏ tím của củ dền (*Beta vulgaris*) do sắc tố Betalain (Betacyanin) tạo nên, chứa nitơ nhưng không thuộc nhóm alkaloid.",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 25,
    question: "Yêu cầu quan trọng nhất khi thu hoạch/thu hái dược liệu là gì?",
    options: ["Thu hái vào ngày nắng đẹp", "Tránh thời điểm mưa bão", "Thu hái đúng thời điểm để đạt hàm lượng hoạt chất cao nhất", "Thu hái đạt năng suất khối lượng lớn nhất"],
    correctIndex: 2,
    explanation: "Yêu cầu cốt lõi nhất khi thu hái dược liệu là phải đúng thời điểm chu kỳ sinh trưởng nhằm đảm bảo lượng hoạt chất trong dược liệu đạt cao nhất.",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 26,
    question: "Phương pháp hiệu quả nhất để diệt/ức chế enzym nội sinh gây phân hủy hoạt chất khi sơ chế dược liệu tươi?",
    options: ["Làm lạnh xuống 0°C", "Xử lý bằng cồn sôi (hơi cồn 95°) hoặc sấy nhanh ở nhiệt độ cao", "Đun sôi trong nước lạnh", "Để nguyên dược liệu ở nhiệt độ phòng"],
    correctIndex: 1,
    explanation: "Dùng hơi cồn sôi (ổn định dược liệu) hoặc sấy nóng nhanh ở 80-100°C làm biến tính protein enzym, diệt enzym tận gốc giúp bảo vệ hoạt chất (glycosid, alkaloid).",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 27,
    question: "Để xác định tỷ lệ đất, cát, tạp chất vô cơ không tan lẫn vào mẫu dược liệu, kiểm tra chỉ tiêu nào?",
    options: ["Tro toàn phần", "Tro không tan trong acid HCl", "Soi vi phẫu bột dược liệu", "Đánh giá cảm quan màu sắc"],
    correctIndex: 1,
    explanation: "Tro không tan trong acid (chủ yếu là silic/silicat từ đất cát dính vào) là chỉ số phản ánh chính xác độ sạch và hành vi lẫn đất cát trong dược liệu.",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 28,
    question: "Để bảo quản ổn định các mẫu sinh học kém bền với nhiệt như nọc rắn, sữa ong chúa, vacxin, dùng phương pháp nào?",
    options: ["Sấy dưới 50°C", "Sấy sôi", "Dùng chất hút ẩm", "Phương pháp đông khô (sấy thăng hoa)"],
    correctIndex: 3,
    explanation: "Đông khô (Lyophilization) làm đông lạnh nhanh mẫu rồi thăng hoa nước ở áp suất giảm, giúp bảo toàn cấu trúc protein/enzym nhạy cảm nhiệt như nọc rắn, sữa ong chúa.",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 29,
    question: "Dược liệu nào sau đây bắt buộc phải thu hái khi hoa còn là nụ chưa nở?",
    options: ["Hồng hoa", "Đinh hương (Flos Caryophylli)", "Cúc hoa", "Ké đầu ngựa"],
    correctIndex: 1,
    explanation: "Đinh hương (Flos Caryophylli) và Kim ngân hoa (Flos Lonicerae) bắt buộc thu hái khi nụ hoa chớm ngả hồng tím/chưa nở để giữ hàm lượng tinh dầu và flavonoid tối đa.",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 30,
    question: "Saponin, carotenoid, cao su tự nhiên, iridoid... đều thuộc nhóm phân loại theo:",
    options: ["Tiền chất ban đầu", "Cấu trúc hóa học", "Con đường sinh tổng hợp (Isoprenoid / Mevalonat pathway)", "Tác dụng dược lý"],
    correctIndex: 2,
    explanation: "Tất cả các hợp chất trên đều được tổng hợp qua con đường Isoprenoid (Mevalonat pathway) từ tiền chất isopentenyl pyrophosphat (IPP).",
    topic: "d2022",
    isMidterm: true,
    difficulty: "Trung bình"
  },

  // --- ĐỀ SỐ 2: GIỮA KỲ DƯỢC LIỆU (60 CÂU) ---
  {
    id: 31,
    question: "Giai đoạn nào Y Dược học Phương Tây bắt đầu khôi phục và phát triển mạnh sau thời kỳ đóng băng lâu dài?",
    options: ["Thời Cận Đại", "Thời Trung Cổ", "Thời Phục Hưng", "Thời Kỷ ánh sáng"],
    correctIndex: 2,
    explanation: "Thời Phục Hưng (thế kỷ XV - XVI) đánh dấu sự thức tỉnh của y dược học phương Tây với các phát minh giải phẫu học và hóa dược của Paracelsus.",
    topic: "deso2",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 32,
    question: "Danh y có ảnh hưởng lớn nhất tới bước ngoặt chuyển đổi Y Dược học thời Phục Hưng ở Phương Tây là:",
    options: ["Sertürner", "Schleiden", "Scheele", "Paracelsus"],
    correctIndex: 3,
    explanation: "Paracelsus là đại diện kiệt xuất thời Phục Hưng, đưa hóa học vào y học và sáng lập ngành Hóa dược.",
    topic: "deso2",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 33,
    question: "Vị thuốc Bắc nào sau đây được ghi nhận là do người Trung Hoa học tập kinh nghiệm chữa bệnh của người Việt cổ?",
    options: ["Trầm hương", "Ý dĩ", "Sử quân tử", "Cả 3 vị thuốc trên"],
    correctIndex: 3,
    explanation: "Cả Trầm hương, Ý dĩ và Sử quân tử đều là các vị thuốc bản địa Nam y mà người Trung Hoa học tập và đưa vào sử dụng trong YHCT.",
    topic: "deso2",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 34,
    question: "Cách nào dưới đây KHÔNG áp dụng được trong quy trình diệt/bất hoạt hoàn toàn enzym ổn định dược liệu?",
    options: ["Nhiệt độ cao trong thời gian ngắn", "Thay đổi cấu trúc lập thể (biến tính) của enzym", "Thay đổi pH môi trường ra ngoài pH tối thích của enzym", "Dùng hơi cồn sôi 95°"],
    correctIndex: 2,
    explanation: "Thay đổi pH ra ngoài pH tối thích chỉ kìm hãm tạm thời hoạt tính enzym; khi đưa pH trở lại bình thường enzym sẽ khôi phục hoạt động, do đó không diệt được enzym hoàn toàn.",
    topic: "deso2",
    isMidterm: true,
    difficulty: "Khó"
  },
  {
    id: 35,
    question: "Trường hợp nào sau đây được gọi là 'Ức chế tạm thời' (kìm hãm) hoạt động của enzym?",
    options: ["Hấp dược liệu bằng hơi nước nóng", "Làm lạnh dược liệu xuống 0°C", "Ủ dược liệu trong cồn cao độ", "Xử lý bằng hơi cồn sôi"],
    correctIndex: 1,
    explanation: "Hạ nhiệt độ xuống 0°C chỉ kìm hãm ức chế enzym tạm thời. Khi nâng nhiệt độ trở lại, enzym sẽ hoạt động trở lại bình thường.",
    topic: "deso2",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 36,
    question: "Ý tưởng sử dụng đơn chất tinh khiết và học thuyết 'Độc vị' xuất phát từ danh y phương Tây nào?",
    options: ["Hippocrates", "Paracelsus", "Sertürner", "Galen"],
    correctIndex: 1,
    explanation: "Paracelsus là người đầu tiên chủ trương chiết chất tinh túy ('Quinta essentia') và sử dụng độc vị thay cho bài thuốc phối hợp phức tạp.",
    topic: "deso2",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 37,
    question: "Kinh nghiệm chữa bệnh sớm nhất của loài người thu được ban đầu chủ yếu thông qua con đường nào?",
    options: ["Thử nghiệm trên động vật", "Phương pháp thử và sai (Trial and Error)", "Quan sát ngẫu nhiên", "Cả A, B, C đều đúng"],
    correctIndex: 3,
    explanation: "Kinh nghiệm y dược cổ xưa tích lũy từ sự quan sát ngẫu nhiên trong tự nhiên, hành vi loài vật và phương pháp thử - sai qua nhiều thế hệ.",
    topic: "deso2",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 38,
    question: "Bộ Y tế Việt Nam hiện nay khuyến khích tiêu chuẩn 'Thực hành tốt' nào trong trồng trọt và thu hái dược liệu?",
    options: ["GACP-WHO (Thực hành tốt trồng trọt và thu hái)", "GMP (Thực hành tốt sản xuất)", "GLP (Thực hành tốt kiểm nghiệm)", "GSP (Thực hành tốt bảo quản)"],
    correctIndex: 0,
    explanation: "GACP-WHO là tiêu chuẩn bắt buộc khuyến khích áp dụng trong trồng trọt, thu hái và sơ chế dược liệu nhằm đảm bảo chất lượng và độ an toàn.",
    topic: "deso2",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 39,
    question: "Để xác định tính đúng chủng loại của một dược liệu, phương pháp phân tích nào thích hợp và hiện đại nhất?",
    options: ["Định tính hóa học phản ứng màu", "Định tính sắc ký lớp mỏng (TLC) hoặc HPLC so sánh vân phổ sắc ký điểm chỉ (Fingerprint) với dược liệu chuẩn", "Soi kính hiển vi vi phẫu", "Đo hằng số vật lý"],
    correctIndex: 1,
    explanation: "Sắc ký điểm chỉ (Fingerprint) so sánh peak dịch chiết với dược liệu chuẩn là tiêu chuẩn vàng định danh chính xác chủng loại dược liệu.",
    topic: "deso2",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 40,
    question: "Vị thuốc nào dưới đây thực sự là thuốc 'Bắc' (có nguồn gốc xuất xứ và nhập khẩu từ Trung Quốc)?",
    options: ["Quế", "Cam thảo (*Glycyrrhiza uralensis*)", "Sa nhân", "Ý dĩ"],
    correctIndex: 1,
    explanation: "Cam thảo (*Glycyrrhiza uralensis*) phân bố chủ yếu ở Trung Quốc, Nga, Mông Cổ và là vị thuốc nhập khẩu ('Thuốc Bắc') thực sự.",
    topic: "deso2",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 41,
    question: "O-glycosid là hợp chất mà phần đường và phần aglycon liên kết với nhau qua dây nối dạng nào?",
    options: ["Dây nối Ether", "Dây nối Ester", "Dây nối Acetal (Ether đặc biệt)", "Dây nối C-C"],
    correctIndex: 2,
    explanation: "Dây nối O-glycosid thực chất là liên kết bán acetal / acetal giữa nhóm -OH bán acetal của đường với nhóm -OH của aglycon.",
    topic: "deso2",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 42,
    question: "Hợp chất Pseudoglycosid là những chất có phần đường kết hợp với phần genin/aglycon bằng dây nối:",
    options: ["Dây nối Ester", "Dây nối Ether", "Dây nối Acetal", "Dây nối Amid"],
    correctIndex: 0,
    explanation: "Pseudoglycosid (glycosid giả) có dây nối ester giữa đường và acid hữu cơ aglycon (ví dụ: caffeoylquinic acid).",
    topic: "deso2",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 43,
    question: "Sintrom là tên biệt dược chống đông máu của hợp chất dẫn xuất Coumarin nào?",
    options: ["Phenprocoumon", "Coumadin", "Acenocoumarol", "Neodicoumarol"],
    correctIndex: 2,
    explanation: "Sintrom chứa hoạt chất Acenocoumarol - dẫn xuất 4-hydroxycoumarin đối kháng Vitamin K dùng chống đông máu trong tim mạch.",
    topic: "deso2",
    isMidterm: true,
    difficulty: "Khó"
  },
  {
    id: 44,
    question: "Dẫn xuất Coumarin nào sau đây được ứng dụng trong các chế phẩm mỹ phẩm bảo vệ da chống tia UV?",
    options: ["4-hydroxycoumarin", "7-hydroxycoumarin", "4-methylumbelliferon", "3,4-dihydroxycoumarin"],
    correctIndex: 2,
    explanation: "4-methylumbelliferon (Hymecromone) và umbelliferon hấp thụ mạnh tia UV, phát huỳnh quang huỳnh quang xanh lam được dùng trong kem chống nắng và bảo vệ da.",
    topic: "deso2",
    isMidterm: true,
    difficulty: "Khó"
  },
  {
    id: 45,
    question: "Phản ứng của hợp chất Coumarin với thuốc thử Diazoni nên thực hiện trong môi trường nào?",
    options: ["Môi trường acid mạnh (pH < 2)", "Môi trường acid yếu (pH 4-6)", "Môi trường kiềm mạnh (pH > 12)", "Môi trường kiềm yếu (pH 9-10)"],
    correctIndex: 3,
    explanation: "Phản ứng ghép đôi diazo thế vào vị trí H-6 hoặc H-8 của coumarin xảy ra thuận lợi nhất trong môi trường kiềm yếu (pH 9-10).",
    topic: "deso2",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 46,
    question: "Các hợp chất coumestan chính có tác dụng bảo vệ gan trong cây Sài đất (*Wedelia chinensis*) là gì?",
    options: ["Wedelolacton và nor-wedelolacton", "Furanocoumarin", "Scopoletin và Angelicin", "Pyranocoumarin"],
    correctIndex: 0,
    explanation: "Sài đất chứa Wedelolacton và Nor-wedelolacton có cấu trúc coumestan có tác dụng bảo vệ tế bào gan, kháng viêm và kháng khuẩn.",
    topic: "deso2",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 47,
    question: "Nấm Linh chi (*Ganoderma lucidum*) chứa hàm lượng cao polysaccharid nào giúp tăng cường miễn dịch?",
    options: ["(1,4)-beta-glucan", "(1,3)-beta-D-glucan", "(1,6)-beta-D-glucan", "(1,2)-beta-D-glucan"],
    correctIndex: 1,
    explanation: "Nấm Linh chi chứa polysaccharid chính là (1,3)-beta-D-glucan kích thích hệ miễn dịch, đại thực bào và hỗ trợ điều trị ung thư.",
    topic: "deso2",
    isMidterm: true,
    difficulty: "Khó"
  },
  {
    id: 48,
    question: "Sucrose (Đường kính / Đường mía) được cấu tạo bởi hai đơn vị monosaccharid nào?",
    options: ["Glucose-beta-1,4-glucose", "Glucose-alpha-1,2-fructose", "Glucose-alpha-1,4-glucose", "Glucose-beta-1,2-fructose"],
    correctIndex: 1,
    explanation: "Sucrose là disaccharid không có tính khử, cấu tạo từ alpha-D-glucopyranose và beta-D-fructofuranose nối qua liên kết alpha-1,2-glycosid.",
    topic: "deso2",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 49,
    question: "Đặc điểm soi kính hiển vi nào sau đây là đặc trưng của tinh bột Lúa mì?",
    options: ["Hạt hình đĩa, kích thước to khoảng 30 μm, hạt nhỏ 6-7 μm, ít hạt trung gian", "Hạt hình đĩa, rốn hình sao phân nhánh", "Hạt hình đa giác, kích thước nhỏ 2-10 μm", "Hạt hình trứng, tễ lệch một bên"],
    correctIndex: 0,
    explanation: "Tinh bột Lúa mì gồm 2 loại hạt hình đĩa rõ rệt: hạt lớn (đường kính ~30 μm) và hạt nhỏ (6-7 μm), rất ít hạt kích thước trung gian.",
    topic: "deso2",
    isMidterm: true,
    difficulty: "Khó"
  },
  {
    id: 50,
    question: "Cellulose phthalate (CAP - Cellulose acetate phthalate) thường được dùng làm tá dược nào trong công nghiệp dược phẩm?",
    options: ["Tá dược dính", "Tá dược trơn", "Tá dược bao phim tan trong ruột (Enteric coating)", "Tá dược rã"],
    correctIndex: 2,
    explanation: "Cellulose acetate phthalate (CAP) không tan trong môi trường acid dạ dày nhưng tan trong môi trường kiềm ruột non, nên dùng làm màng bao phim tan trong ruột.",
    topic: "deso2",
    isMidterm: true,
    difficulty: "Trung bình"
  },

  // --- ĐỀ SỐ 3: BỘ CÂU HỎI MỞ RỘNG GIỮA KỲ DƯỢC LIỆU 1 (80 CÂU) ---
  {
    id: 51,
    question: "Để bảo tồn tài nguyên cây thuốc hiệu quả, người ta áp dụng biện pháp nào?",
    options: ["Bảo toàn nguồn gen cây thuốc ngoài tự nhiên (In situ) và trong vườn thực vật (Ex situ)", "Duy trì và phát triển việc sử dụng cây thuốc bền vững", "Bảo tồn tri thức y học dân gian dân tộc", "Cả 3 phương án A, B, C"],
    correctIndex: 3,
    explanation: "Bảo tồn cây thuốc đòi hỏi sự kết hợp giữa bảo tồn nguồn gen vật thể (In situ / Ex situ) và bảo tồn tri thức phi vật thể y học cổ truyền.",
    topic: "deso3",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 52,
    question: "Theo định nghĩa hẹp, nghiên cứu về các nguyên liệu làm thuốc có nguồn gốc sinh vật là nghiên cứu:",
    options: ["Nguyên liệu làm thuốc từ động vật", "Nguyên liệu làm thuốc từ các chất hữu cơ", "Nguyên liệu làm thuốc từ Dược liệu học nói chung", "Nguyên liệu làm thuốc có nguồn gốc từ vi sinh vật"],
    correctIndex: 3,
    explanation: "Theo nghĩa hẹp chuẩn xác, nghiên cứu dược liệu sinh vật tập trung vào nguyên liệu làm thuốc xuất xứ từ vi sinh vật và tế bào sinh học.",
    topic: "deso3",
    isMidterm: true,
    difficulty: "Khó"
  },
  {
    id: 53,
    question: "Số loài thực vật bậc cao được biết có công dụng làm thuốc ở Việt Nam hiện nay vào khoảng:",
    options: ["1.500 loài", "5.000 loài", "8.000 loài", "12.000 loài"],
    correctIndex: 1,
    explanation: "Theo thống kê của Viện Dược liệu, Việt Nam đã phát hiện và ghi nhận khoảng 5.000 loài thực vật bậc cao có công dụng làm thuốc.",
    topic: "deso3",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 54,
    question: "Yếu tố nào gây hậu quả nghiêm trọng và nguy hiểm nhất khi thu hái và sử dụng dược liệu?",
    options: ["Tự tiện thay thế các vị thuốc", "Bất cẩn khi thu hái lẫn cỏ dại", "Nhầm lẫn do hình dạng, tên gọi giống nhau giữa các cây thuốc/vị thuốc độc", "Cố ý giả mạo dược liệu"],
    correctIndex: 2,
    explanation: "Sự nhầm lẫn giữa các cây thuốc có tên gọi/hình dáng tương tự nhưng chứa chất độc nguy hiểm (như nhầm Mã tiền với cây khác, nhầm Lá sen với Lá ngón) gây ngộ độc tử vong.",
    topic: "deso3",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 55,
    question: "Dược liệu chứa tinh dầu thường được khuyến cáo thu hái vào thời điểm nào trong ngày?",
    options: ["Buổi sáng sớm khi trời nắng ráo, sương vừa tan", "Buổi trưa nắng gay gắt", "Buổi chiều tối", "Mọi thời điểm trong ngày đều như nhau"],
    correctIndex: 0,
    explanation: "Thu hái thảo mộc chứa tinh dầu vào sáng sớm khi sương vừa tan giúp giữ nguyên lượng tinh dầu cao nhất, tránh bốc hơi do nắng gắt buổi trưa.",
    topic: "deso3",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 56,
    question: "Trong kiểm định dược liệu, đặc điểm hiển vi (soi vi phẫu, bột dược liệu) là tiêu chuẩn:",
    options: ["Bắt buộc đối với tất cả dược liệu khô tán bột/nguyên vẹn", "Áp dụng cho đa số dược liệu", "Không được đặt ra", "Chỉ áp dụng cho vài vị thuốc"],
    correctIndex: 0,
    explanation: "Kiểm nghiệm đặc điểm soi hiển vi vi phẫu và soi bột là chỉ tiêu bắt buộc tiêu chuẩn quy định trong Dược điển để xác định tính đúng của dược liệu.",
    topic: "deso3",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 57,
    question: "Tác dụng dược lý đáng chú ý và đặc trưng nhất của nhóm chất Coumarin là gì?",
    options: ["Kháng khuẩn", "Trị ho long đờm", "Chống co thắt, giãn động mạch vành và chống đông máu", "Giảm đau hạ sốt"],
    correctIndex: 2,
    explanation: "Coumarin nổi tiếng với tác dụng chống co thắt cơ trơn, giãn động mạch vành (như Visnadin) và chống đông máu (như Warfarin, Dicoumarol).",
    topic: "deso3",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 58,
    question: "Bộ phận dùng chủ yếu chứa furanocoumarin làm thuốc của cây Tiền Hồ (*Angelica decursiva*) là:",
    options: ["Lá", "Rễ củ (Radix Angelicae decursivae)", "Tinh dầu", "Toàn thân"],
    correctIndex: 1,
    explanation: "Rễ Tiền hồ (Radix Angelicae decursivae) chứa franocoumarin và pyranocoumarin dùng trị ho, long đờm, hen suyễn.",
    topic: "deso3",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 59,
    question: "Công dụng chủ yếu trong y học cổ truyền của vị thuốc Bạch Chỉ (*Angelica dahurica*) là gì?",
    options: ["Trị cao huyết áp", "Chữa cảm sốt, nhức đầu, đau răng, viêm xoang mũi", "Trị viêm nhiễm ngoài da", "Phòng ngừa bệnh tim mạch"],
    correctIndex: 1,
    explanation: "Bạch chỉ chứa furanocoumarin có tác dụng giảm đau, kháng khuẩn, chữa cảm mạo, nhức đầu trán, đau răng và viêm xoang.",
    topic: "deso3",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 60,
    question: "Inulin là một polysaccharides phân bố nhiều trong rễ củ họ Cúc (*Asteraceae*) có đặc điểm:",
    options: ["Có chức năng dự trữ năng lượng thay tinh bột ở rễ củ họ Cúc", "Không bị tiêu hóa bởi enzym người, đóng vai trò là xơ hòa tan Prebiotic", "Dùng tiêm truyền đo tốc độ lọc cầu thận (GFR) trong lâm sàng", "Cả A, B, C đều đúng"],
    correctIndex: 3,
    explanation: "Inulin là fructosan dự trữ ở họ Cúc, không làm tăng đường huyết, nuôi vi khuẩn có lợi đường ruột và dùng làm chuẩn đo độ lọc cầu thận (GFR).",
    topic: "deso3",
    isMidterm: true,
    difficulty: "Trung bình"
  },

  // =========================================================================
  // --- BỘ 50 CÂU HỎI TRẮC NGHIỆM GIÁO TRÌNH ĐẠI CƯƠNG DƯỢC LIỆU HỌC (DCQ2022) ---
  // =========================================================================
  {
    id: 101,
    question: "Thuật ngữ 'Pharmacognosis' lần đầu tiên được đề xuất vào năm 1811 bởi tác giả nào?",
    options: ["J.A. Schmidt", "C.A. Seydler", "Wasicki", "Carl Linnaeus"],
    correctIndex: 0,
    explanation: "Năm 1811, J.A. Schmidt lần đầu tiên đề xuất thuật ngữ 'Pharmacognosis' trong tác phẩm Lehrbuch der Materia Medica.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 102,
    question: "Tác phẩm 'Analecta Pharmacognostica' xuất bản năm 1815 là của nhà khoa học nào?",
    options: ["Hippocrates", "C.A. Seydler", "J.A. Schmidt", "Paracelsus"],
    correctIndex: 1,
    explanation: "C.A. Seydler (1815) là người đề xuất thuật ngữ và xuất bản luận án 'Analecta Pharmacognostica'.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 103,
    question: "Thuật ngữ 'Physiopharmacognosy' do Wasicki đề xuất có ý nghĩa bản chất là gì?",
    options: [
      "Hiểu biết về các loại thuốc có nguồn gốc tự nhiên (để phân biệt với thuốc hóa dược tổng hợp)",
      "Nghiên cứu về cơ chế tác dụng sinh lý của thuốc trên cơ thể người",
      "Nghiên cứu sự chuyển hóa của thuốc qua đường tiêu hóa",
      "Nghiên cứu về các dạng bào chế thuốc hiện đại"
    ],
    correctIndex: 0,
    explanation: "'Physio' bắt nguồn từ gốc tự nhiên/thiên nhiên; Wasicki đề xuất Physiopharmacognosy để chỉ các hiểu biết về thuốc có nguồn gốc thiên nhiên nhằm phân biệt với hóa dược.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 104,
    question: "Theo định nghĩa hẹp (cũng là hướng tập trung chủ yếu hiện nay), Dược liệu học là môn khoa học nghiên cứu về:",
    options: [
      "Các nguyên liệu làm thuốc có nguồn gốc vô cơ và khoáng vật",
      "Các nguyên liệu làm thuốc có nguồn gốc sinh học",
      "Các hợp chất hóa dược tổng hợp trong phòng thí nghiệm",
      "Kỹ thuật đóng gói bao bì dược phẩm"
    ],
    correctIndex: 1,
    explanation: "Định nghĩa hẹp hiện đại: Dược liệu học là môn khoa học nghiên cứu về các nguyên liệu làm thuốc có nguồn gốc sinh học (thực vật, động vật, vi sinh vật, biển).",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 105,
    question: "Trong 4 nguồn nguyên liệu sinh học làm thuốc, đối tượng nào cung cấp nhiều hoạt chất nhất cho y học hiện đại?",
    options: ["Động vật", "Vi sinh vật", "Thực vật", "Tài nguyên biển"],
    correctIndex: 2,
    explanation: "Thực vật là giới sinh vật cung cấp số lượng hoạt chất đa dạng và phong phú nhất (>80% hoạt chất tự nhiên) cho y dược học hiện đại.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 106,
    question: "Điểm phân biệt căn bản giữa 'Cây thuốc' và 'Dược liệu' là:",
    options: [
      "Cây thuốc là cây còn sống; Dược liệu là bộ phận hoặc sản phẩm đã lấy ra từ cây thuốc (khô hoặc tươi) dùng làm thuốc",
      "Cây thuốc dùng trong Y học hiện đại; Dược liệu chỉ dùng trong Đông y",
      "Cây thuốc chỉ có độc tính; Dược liệu không có độc tính",
      "Cây thuốc là chất tinh khiết; Dược liệu là hỗn hợp cao chiết"
    ],
    correctIndex: 0,
    explanation: "Cây thuốc là cơ thể thực vật còn sống cung cấp nguyên liệu; Dược liệu là bộ phận/sản phẩm đã thu hái, sơ chế phục vụ mục đích y học.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 107,
    question: "Sản phẩm dịch chiết từ dược liệu sau khi cô bớt dung môi, chứa khoảng 40 - 60% dược chất cùng với các tạp chất tự nhiên được gọi là:",
    options: ["Hoạt chất tinh khiết", "Cao chiết toàn phần", "Cao chiết tinh chế (hoạt chất toàn phần)", "Chất chuẩn đối chiếu"],
    correctIndex: 1,
    explanation: "Cao chiết toàn phần chứa 40-60% dược chất cùng các chất phụ trợ tan trong dung môi chiết xuất.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 108,
    question: "Đặc điểm của 'Cao chiết tinh chế' (Hoạt chất toàn phần, ví dụ cao Ginkgo biloba) là gì?",
    options: [
      "Là một chất hóa học đơn lẻ đạt độ tinh khiết > 99%",
      "Là hỗn hợp đã được loại bỏ phần lớn tạp chất, chỉ chuẩn hóa giữ lại một hoặc một vài nhóm hoạt chất chính",
      "Chưa qua bất kỳ quá trình lọc hoặc loại tạp nào",
      "Là bột dược liệu thô tán mịn"
    ],
    correctIndex: 1,
    explanation: "Cao chiết tinh chế đã qua các công đoạn loại tạp chất đại phân tử, chuẩn hóa nồng độ nhóm hoạt chất đặc hiệu (như flavonoid và terpenoid trong bạch quả).",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 109,
    question: "Vì sao trong nhiều trường hợp hiện nay, người ta có xu hướng quay lại sử dụng cao chiết toàn phần hoặc tinh chế thay vì hoạt chất tinh khiết?",
    options: [
      "Vì các thành phần trong hỗn hợp có tác dụng hiệp đồng bổ sung, tăng hiệu quả và giảm tác dụng phụ, tiết kiệm chi phí",
      "Vì hoạt chất tinh khiết không thể tổng hợp hoặc phân lập được",
      "Vì cao chiết không bao giờ bị nấm mốc hay biến chất",
      "Vì cao chiết luôn có chỉ số trị liệu hẹp hơn hoạt chất tinh khiết"
    ],
    correctIndex: 0,
    explanation: "Các hợp chất tự nhiên trong cao chiết tạo hiệu ứng cộng lực (synergy), bảo vệ chống oxy hóa, trợ tan sinh học và giảm chi phí tinh chế đắt đỏ.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 110,
    question: "Bằng chứng khảo cổ học sớm nhất (khoảng 60.000 TCN) chứng minh người tiền sử đã biết sử dụng dược liệu là:",
    options: [
      "Bản khắc đất sét nung tại Babylon",
      "Mộ táng người Neandertan được chôn cùng lượng lớn phấn hoa của nhiều loài cây thuốc",
      "Các cuộn giấy cói Papyrus Ebers dưới kim tự tháp",
      "Các bài thơ khắc trên mai rùa thời nhà Thương"
    ],
    correctIndex: 1,
    explanation: "Phát hiện phấn hoa cây thuốc mật độ cao trong mộ táng tộc người Neandertan (60.000 TCN) là bằng chứng sớm nhất về mối quan hệ giữa con người và thảo dược trị bệnh.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 111,
    question: "Lịch sử cho thấy ngành Dược chính thức tách rời độc lập khỏi ngành Y vào khoảng thời gian nào?",
    options: ["Khoảng năm 1700", "Khoảng năm 500 TCN", "Khoảng năm 1945", "Khoảng thế kỷ 14"],
    correctIndex: 0,
    explanation: "Trước thế kỷ 18, thầy thuốc kiêm cả việc hái cây, bào chế và trị bệnh. Đến khoảng năm 1700, ngành Dược mới chính thức tách độc lập khỏi Y khoa.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 112,
    question: "Tác phẩm y dược cổ nổi tiếng nhất của nền văn minh Ai Cập cổ đại (khoảng 1550 TCN) là:",
    options: ["Bản thảo Papyrus Ebers", "Thần Nông Bản Thảo Kinh", "Thương Hàn Luận", "De Materia Medica"],
    correctIndex: 0,
    explanation: "Papyrus Ebers (1550 TCN) là bản thảo y học cổ dài hơn 20m mô tả hàng trăm phương thuốc thảo mộc và khoáng vật của người Ai Cập cổ đại.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 113,
    question: "Hệ thống y học cổ truyền Ayurveda ('Khoa học về sự sống') bắt nguồn từ nền văn minh nào?",
    options: ["Hy Lạp cổ đại", "Ấn Độ cổ đại", "Ai Cập cổ đại", "La Mã cổ đại"],
    correctIndex: 1,
    explanation: "Ayurveda là nền y học cổ truyền kinh điển của Ấn Độ, nhấn mạnh sự cân bằng giữa thể xác, tinh thần và thiên nhiên.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 114,
    question: "Hai danh y huyền thoại của nền y học Ayurveda Ấn Độ là:",
    options: ["Charaka và Susruta", "Hippocrates và Galen", "Tuệ Tĩnh và Lê Hữu Trác", "Thần Nông và Lý Thời Trân"],
    correctIndex: 0,
    explanation: "Charaka (tác giả 500 phương thuốc) và Susruta (tác giả mô tả 750 cây thuốc, bậc thầy phẫu thuật) là hai đại danh y của Ayurveda Ấn Độ.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 115,
    question: "Ai được tôn vinh là tác giả bộ sách kinh điển 'De Materia Medica' mô tả hơn 600 vị thuốc thảo mộc?",
    options: ["Dioscorides", "Hippocrates", "Theophrastus", "Galen"],
    correctIndex: 0,
    explanation: "Dioscorides (bác sĩ quân đội La Mã thế kỷ I) là tác giả bộ sách 'De Materia Medica' làm kim chỉ nam y dược suốt 15 thế kỷ.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 116,
    question: "Thầy thuốc Paracelsus (1493 - 1541) nổi tiếng với tư tưởng đột phá nào?",
    options: [
      "Đề xướng học thuyết 'Quinta essentia' (Chất tinh túy), cổ xúy chiết xuất và dùng độc vị",
      "Thuyết 4 thể dịch của cơ thể",
      "Chủ trương không dùng bất kỳ hóa chất nào làm thuốc",
      "Phương pháp châm cứu bấm huyệt"
    ],
    correctIndex: 0,
    explanation: "Paracelsus đề xướng 'Quinta essentia', cho rằng trong cây chỉ có phần nhỏ là chất tinh túy mang hoạt tính trị liệu, mở đường cho Hóa Dược và chiết xuất hoạt chất.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 117,
    question: "Mốc son lịch sử Friedrich Sertürner phân lập thành công Morphine từ nhựa thuốc phiện diễn ra vào năm nào?",
    options: ["Năm 1806", "Năm 1700", "Năm 1910", "Năm 1850"],
    correctIndex: 0,
    explanation: "Năm 1806, Friedrich Sertürner phân lập thành công tinh thể morphin, chứng minh giả thuyết của Paracelsus và khai sinh kỷ nguyên phân lập alkaloid.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 118,
    question: "Tục lệ nhai trầu, uống chè vối, dùng gừng hành tỏi phòng bệnh của người Việt đã được ghi nhận từ thời kỳ nào?",
    options: ["Thời Hồng Bàng (2879 TCN)", "Thời nhà Lý", "Thời nhà Nguyễn", "Thời Pháp thuộc"],
    correctIndex: 0,
    explanation: "Từ thời Hồng Bàng (2879 TCN), người Việt cổ đã hình thành các thói quen vệ sinh và dùng thảo dược quen thuộc để bảo vệ sức khỏe.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 119,
    question: "Dưới thời nhà Lý ở Việt Nam, cơ quan y tế phụ trách khám chữa bệnh và quản lý dược liệu có tên là:",
    options: ["Ty Thái y", "Viện Thái y", "Tế sinh đường", "Thái y viện Triều Nguyễn"],
    correctIndex: 0,
    explanation: "Thời nhà Lý thành lập Ty Thái y để chăm lo y tế cho vua quan và giao lưu y học với Tống Huy Tông.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 120,
    question: "Dưới thời nhà Trần, Viện Thái y đã tổ chức hoạt động dược liệu nổi bật nào phục vụ quốc phòng?",
    options: [
      "Tổ chức thu hái và trồng trọt cây thuốc Nam chuẩn bị y tế cho 3 lần kháng chiến chống quân Nguyên Mông",
      "Nhập khẩu toàn bộ thuốc từ phương Bắc",
      "Cấm dân chúng sử dụng thuốc Nam",
      "Mở trường đại học y dược Tây y"
    ],
    correctIndex: 0,
    explanation: "Nhà Trần lập Viện Thái y, tổ chức thu hái dược liệu thuốc Nam trên quy mô lớn làm hậu cần cứu thương chiến thắng 3 lần quân Nguyên Mông.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 121,
    question: "Vị danh y nào được suy tôn là 'Ông tổ thực sự sáng lập nghề thuốc Nam Việt Nam' với tuyên ngôn 'Nam dược trị Nam nhân'?",
    options: ["Thiền sư Tuệ Tĩnh (Nguyễn Bá Tĩnh)", "Hải Thượng Lãn Ông (Lê Hữu Trác)", "Phan Phù Tiên", "Chu Văn An"],
    correctIndex: 0,
    explanation: "Thiền sư Tuệ Tĩnh (thế kỷ 14) là người xướng xuất tư tưởng 'Nam dược trị Nam nhân' và biên soạn 'Nam Dược Thần Hiệu'.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 122,
    question: "Bộ bách khoa toàn thư y học cổ truyền gồm 28 tập, 66 quyển 'Hải Thượng Y Tông Tâm Lĩnh' là trước tác của ai?",
    options: ["Lê Hữu Trác (Hải Thượng Lãn Ông)", "Nguyễn Bá Tĩnh (Tuệ Tĩnh)", "Nguyễn Trãi", "Lý Thời Trân"],
    correctIndex: 0,
    explanation: "Hải Thượng Lãn Ông Lê Hữu Trác (1720 - 1791) dành hơn 30 năm biên soạn bộ 'Hải Thượng Y Tông Tâm Lĩnh' đồ sộ.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 123,
    question: "Trong danh xưng 'Hải Thượng Lãn Ông', chữ 'Lãn Ông' mang ý nghĩa gì?",
    options: [
      "Ông già lười công danh phú quý (từ chối làm quan trong phủ Chúa Trịnh)",
      "Người thích sống an nhàn không làm việc",
      "Thầy thuốc chuyên chữa bệnh cho người già",
      "Tên một địa danh tại Hưng Yên"
    ],
    correctIndex: 0,
    explanation: "Lê Hữu Trác tự đặt hiệu là Lãn Ông (ông già lười) hàm ý lười biếng danh lợi, 3 lần chữa khỏi bệnh cho chúa Trịnh đều từ chối ở lại làm quan để về quê viết sách.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 124,
    question: "Theo báo cáo của Tổ chức Y tế Thế giới (WHO), khoảng bao nhiêu % dân số thế giới phụ thuộc vào thuốc tự nhiên ban đầu?",
    options: ["Khoảng 80%", "Khoảng 20%", "Khoảng 50%", "Khoảng 95%"],
    correctIndex: 0,
    explanation: "Khoảng 80% dân số toàn cầu (chủ yếu ở các nước đang phát triển) phụ thuộc vào y học cổ truyền và thảo dược trong chăm sóc sức khỏe ban đầu.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 125,
    question: "Trên lâm sàng y học hiện đại ngày nay, tỉ lệ thuốc có nguồn gốc trực tiếp hoặc bán tổng hợp từ thiên nhiên là:",
    options: ["Trên 50%", "Dưới 10%", "Khoảng 25%", "100%"],
    correctIndex: 0,
    explanation: "Trên 50% thuốc sử dụng trên lâm sàng hiện nay có nguồn gốc từ tự nhiên (hoặc bán tổng hợp từ khung cấu trúc tự nhiên).",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 126,
    question: "Theo quy định của Luật Dược 2016, tiêu chí phân biệt cơ bản giữa Thuốc Dược Liệu và Thuốc Cổ Truyền là gì?",
    options: [
      "Thuốc Dược liệu xây dựng công thức theo Dược lý hiện đại; Thuốc Cổ truyền xây dựng theo Lý luận YHCT",
      "Thuốc Dược liệu chỉ chứa hóa chất; Thuốc Cổ truyền chỉ chứa cây cỏ",
      "Thuốc Dược liệu không cần kiểm nghiệm; Thuốc Cổ truyền phải kiểm nghiệm nghiêm ngặt",
      "Thuốc Dược liệu chỉ do bác sĩ kê đơn; Thuốc Cổ truyền luôn không cần kê đơn"
    ],
    correctIndex: 0,
    explanation: "Thuốc Dược liệu dùng phương pháp Dược lý hiện đại chứng minh công thức; Thuốc Cổ truyền dùng lý luận Y học cổ truyền (Quân - Thần - Tá - Sứ).",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 127,
    question: "Dược liệu chứa tinh dầu bắt buộc phải thu hái vào buổi sáng sớm trước khi mặt trời mọc nhằm mục đích gì?",
    options: [
      "Tránh tinh dầu bị bốc hơi hao hụt do sức nóng mặt trời",
      "Tránh sâu bọ ăn lá vào buổi trưa",
      "Để lá có màu xanh đẹp hơn",
      "Để dễ chiết nước lạnh hơn"
    ],
    correctIndex: 0,
    explanation: "Tinh dầu là hợp chất dễ bay hơi; nắng gắt ban trưa sẽ làm tinh dầu bốc hơi mạnh làm giảm nghiêm trọng hàm lượng hoạt chất.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 128,
    question: "Bộ phận Rễ và Thân rễ (Củ) của cây thuốc được khuyến cáo thu hái vào thời điểm nào tốt nhất?",
    options: [
      "Cuối thời kỳ sinh dưỡng (cuối thu - đầu đông hoặc cuối mùa mưa)",
      "Đầu mùa xuân khi cây vừa đâm chồi",
      "Giữa mùa hè khi cây đang ra hoa rộ",
      "Bất kỳ thời điểm nào trong năm"
    ],
    correctIndex: 0,
    explanation: "Cuối thời kỳ sinh dưỡng cây ngừng phát triển chồi lá, toàn bộ chất dinh dưỡng và hoạt chất tích tụ dồn đặc xuống củ rễ dưới đất.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 129,
    question: "Lá và ngọn non của cây thuốc nên thu hoạch vào giai đoạn nào để đạt hàm lượng hoạt chất cao nhất?",
    options: [
      "Khi cây quang hợp mạnh nhất: Trước khi ra hoa hoặc bắt đầu chớm nụ",
      "Sau khi hoa đã tàn và quả đã chín rụng",
      "Vào mùa đông khi lá chuyển vàng úa",
      "Khi cây vừa nảy mầm cao 2cm"
    ],
    correctIndex: 0,
    explanation: "Lá bánh tẻ phát triển đầy đủ trước khi ra hoa có hoạt động quang hợp mạnh nhất và tích lũy tối đa hoạt chất.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 130,
    question: "Nếu muốn thu hoạch vỏ cây (như Hoàng bá, Đỗ trọng) mà vẫn giữ cho cây sống tiếp, người ta thu hái vào mùa nào?",
    options: ["Mùa xuân", "Mùa đông", "Mùa thu", "Mùa khô hạn"],
    correctIndex: 0,
    explanation: "Mùa xuân cây đâm chồi nảy lộc, nhiều nước và nhựa luyện, tầng phát sinh hoạt động mạnh giúp bóc vỏ dễ dàng và cây mau liền vỏ để sống tiếp.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 131,
    question: "Dược liệu nào sau đây bắt buộc phải thu hái khi còn ở giai đoạn NỤ HOA?",
    options: [
      "Nụ hoa hòe, Nụ đinh hương, Kim ngân hoa",
      "Hồng hoa, Cà độc dược",
      "Hoa cúc La Mã, Hoa hướng dương",
      "Hoa sen, Hoa dâm bụt"
    ],
    correctIndex: 0,
    explanation: "Hoa hòe (chứa Rutin), Đinh hương (chứa Eugenol), Kim ngân hoa tích lũy hoạt chất cao nhất khi còn là nụ chưa nở.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 132,
    question: "Vị thuốc Chỉ thực trong Đông y là bộ phận nào của cây chi Citrus?",
    options: ["Quả hái khi còn non", "Quả hái trước khi chín", "Quả hái khi đã chín mọng", "Hạt của quả chín"],
    correctIndex: 0,
    explanation: "Chỉ thực là quả non rụng hoặc thu hái sớm (chứa hàm lượng flavonoid rất cao).",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 133,
    question: "Vị thuốc Chỉ xác trong Đông y được thu hái ở giai đoạn nào?",
    options: ["Quả thu hái trước khi chín (quả bánh tẻ)", "Quả non vừa đậu", "Quả chín nẫu", "Vỏ rễ cây cam"],
    correctIndex: 0,
    explanation: "Chỉ xác là quả gần chín (bánh tẻ), bổ đôi phơi khô.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 134,
    question: "Bốn nội dung trụ cột trong tiêu chuẩn GACP-WHO (Thực hành tốt trồng trọt và thu hái cây thuốc) gồm:",
    options: [
      "ĐÚNG (giống loài) – TỐT (chất lượng) – AN TOÀN (sạch, môi trường) – KINH TẾ (hiệu quả)",
      "NHANH – NHIỀU – TỐT – RẺ",
      "KHÔ – SẠCH – ĐẸP – RẺ",
      "ĐỒNG ĐỀU – KHÔNG MỐC – KHÔNG MỌT – ĐÚNG GIÁ"
    ],
    correctIndex: 0,
    explanation: "GACP-WHO quy định 4 tiêu chí cốt lõi: Đúng định danh, Tốt chất lượng, An toàn cho người & sinh thái, Kinh tế tối ưu.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 135,
    question: "Yếu tố môi trường nào là nguyên nhân CHỦ YẾU và nguy hiểm nhất gây hư hỏng dược liệu trong quá trình bảo quản?",
    options: ["Độ ẩm", "Ánh sáng tán xạ", "Tiếng ồn", "Bụi bẩn không khí"],
    correctIndex: 0,
    explanation: "Độ ẩm kích hoạt enzym nội sinh thủy phân hoạt chất và tạo điều kiện cho nấm mốc nảy mầm sinh độc tố aflatoxin, hô hấp tạo thêm nước làm hỏng dược liệu theo vòng xoắn ốc.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 136,
    question: "Theo Dược điển Việt Nam, giới hạn độ ẩm an toàn để bảo quản đa số dược liệu khô thông thường là:",
    options: ["Không quá 13%", "Không quá 25%", "Phải bằng 0%", "Không quá 30%"],
    correctIndex: 0,
    explanation: "Giới hạn độ ẩm an toàn tiêu chuẩn của đa số dược liệu là ≤ 13% (trừ một số dược liệu giàu đường cho phép cao hơn một chút).",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 137,
    question: "Phương pháp sắc ký nào sau đây sử dụng pha tĩnh là lớp mỏng chất hấp phụ tráng trên bản nhôm hoặc kính để định tính nhận biết hoạt chất?",
    options: ["Sắc ký lớp mỏng (TLC / HPTLC)", "Sắc ký khí (GC)", "Điện di mao quản", "Sắc ký lỏng siêu tới hạn"],
    correctIndex: 0,
    explanation: "Sắc ký lớp mỏng (Thin Layer Chromatography - TLC) có pha tĩnh là lớp mỏng Silica gel trải phẳng.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 138,
    question: "Mục đích chính của phương pháp 'Sắc ký điều chế' (Preparative Chromatography) là gì?",
    options: [
      "Nhằm tách và thu lấy hợp chất tinh khiết khỏi hỗn hợp dịch chiết",
      "Nhằm đo diện tích pic định lượng hàm lượng phần trăm",
      "Nhằm kiểm tra độ ẩm của dược liệu",
      "Nhằm diệt vi khuẩn trong mẫu"
    ],
    correctIndex: 0,
    explanation: "Sắc ký điều chế (Preparative TLC/Column) được thiết kế với lượng mẫu lớn nhằm mục đích phân lập và thu hồi chất tinh khiết.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 139,
    question: "Kỹ thuật 'Sắc ký điểm chỉ' (Chromatographic Fingerprint) trên HPLC được ứng dụng chủ yếu để:",
    options: [
      "So sánh toàn bộ bản đồ sắc ký đồ phức tạp của mẫu thử với mẫu chuẩn nhằm định danh chính xác loài dược liệu",
      "Xác định độ ẩm và độ tro của dược liệu",
      "Phá hủy cấu trúc phân tử thành mảnh vỡ",
      "Xác định đồng phân quay cực"
    ],
    correctIndex: 0,
    explanation: "Fingerprint HPLC cung cấp dấu vân tay hóa học đặc trưng, dùng so sánh phân biệt dược liệu thật - giả (như phân biệt Sâm Ngọc Linh với sâm khác).",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 140,
    question: "Quang phổ Tử ngoại – Khả kiến (UV-Vis) trong nghiên cứu dược liệu chủ yếu dùng để phát hiện cấu trúc nào?",
    options: [
      "Các hệ nối đôi, nối đôi liên hợp và vòng thơm (nhóm mang màu)",
      "Nguyên tử Carbon bất đối",
      "Khối lượng phân tử chính xác",
      "Các mảnh vỡ ion phân tử"
    ],
    correctIndex: 0,
    explanation: "UV-Vis (190-800 nm) đo sự hấp thu năng lượng kích thích electron của các hệ nối đôi liên hợp (chromophore).",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 141,
    question: "Phương pháp Quang phổ Hồng ngoại (IR) cung cấp thông tin trực tiếp về:",
    options: [
      "Các nhóm chức hóa học (-OH, C=O, -COOH...) và liên kết bội trong phân tử",
      "Phân tử lượng chính xác của hợp chất",
      "Số lượng nguyên tử hydro trong phân tử",
      "Độ tinh khiết sinh học của dược liệu"
    ],
    correctIndex: 0,
    explanation: "Phổ IR đo dao động hóa trị và biến dạng của các liên kết hóa học, giúp nhận diện nhóm chức đặc trưng.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 142,
    question: "Phổ Cộng hưởng từ hạt nhân (NMR 1H và 13C) là phương pháp đặc trưng nhất để xác định:",
    options: [
      "Bộ khung cấu trúc hóa học và vị trí các nguyên tử C, H trong phân tử",
      "Khối lượng ion phân tử",
      "Góc quay cực của dung dịch",
      "Độ tan của chất trong dung môi"
    ],
    correctIndex: 0,
    explanation: "NMR 1D và 2D là công cụ quyền lực nhất giúp giải mã hoàn chỉnh cấu trúc khung phân tử hữu cơ.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 143,
    question: "Phương pháp nào sau đây giúp xác định chính xác PHÂN TỬ LƯỢNG và các mảnh vỡ cấu trúc của một chất mới?",
    options: ["Phổ Khối (Mass Spectrometry - MS)", "Phổ UV-Vis", "Khúc xạ kế", "Phổ IR"],
    correctIndex: 0,
    explanation: "Khối phổ (MS) đo tỉ số m/z của các ion phân tử, cho biết chính xác phân tử lượng đến 4 số lẻ thập phân.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 144,
    question: "Trong cấu tạo tế bào thực vật, các hợp chất chuyển hóa thứ cấp làm thuốc phân bố chủ yếu ở bào quan nào?",
    options: ["Không bào (Vacuole)", "Lục lạp", "Ti thể", "Nhân tế bào"],
    correctIndex: 0,
    explanation: "Đa phần các chất chuyển hóa thứ cấp (alkaloid, flavonoid, glycosid, tanin...) được tổng hợp và dự trữ trong không bào.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 145,
    question: "Cấu trúc vi thể nào liên thông giữa các tế bào thực vật liền kề, cho phép hoạt chất khuếch tán qua màng khi chiết xuất?",
    options: ["Kênh bào tương (Plasmodesmata)", "Màng nhân", "Lỗ khí khổng", "Tầng biểu bì cutin"],
    correctIndex: 0,
    explanation: "Kênh bào tương (Plasmodesmata) là cầu nối tế bào chất giữa các tế bào thực vật, hoạt chất có kích thước nhỏ hơn đường kính kênh sẽ đi xuyên qua được.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 146,
    question: "Tại sao trong chiết xuất công nghiệp người ta ưu tiên giữ tế bào nguyên vẹn thay vì phá vỡ tế bào?",
    options: [
      "Vì vách tế bào đóng vai trò màng siêu lọc giữ lại các đại phân tử (tinh bột, chất nhầy, protein), giúp dịch chiết trong và dễ lọc",
      "Vì tế bào bị vỡ sẽ không giải phóng hoạt chất",
      "Vì phá vỡ tế bào làm dung môi bốc hơi hết",
      "Vì chiết tế bào nguyên vẹn luôn tốn ít dung môi hơn"
    ],
    correctIndex: 0,
    explanation: "Giữ tế bào nguyên vẹn ngăn các chất đại phân tử (nhầy, pectin, tinh bột) tràn vào dịch chiết, giúp dịch chiết trong, không bị nhớt dính tắc màng lọc.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 147,
    question: "Nguyên tắc cốt lõi của kỹ thuật chiết Ngấm kiệt (Percolation) liên tục là gì?",
    options: [
      "Dung môi mới tiếp xúc với dược liệu cũ; Dung môi cũ tiếp xúc với dược liệu mới",
      "Dung môi mới luôn tiếp xúc với dược liệu mới",
      "Ngâm tĩnh dược liệu trong 30 ngày",
      "Đun sôi dược liệu ở nhiệt độ 200°C"
    ],
    correctIndex: 0,
    explanation: "Dung môi mới (nồng độ chất tan = 0) tiếp xúc dược liệu đã chiết gần kiệt để rút nốt hoạt chất; dung môi đã hòa tan một phần dược chất sẽ tiếp xúc dược liệu mới để tạo dịch chiết đậm đặc nhất.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Trung bình"
  },
  {
    id: 148,
    question: "Việt Nam xếp thứ mấy trên thế giới về mức độ đa dạng sinh vật và hiện đã thống kê được bao nhiêu loài cây thuốc?",
    options: [
      "Xếp thứ 16 trên thế giới; trên 5.000 loài cây thuốc",
      "Xếp thứ 1 trên thế giới; trên 50.000 loài cây thuốc",
      "Xếp thứ 80 trên thế giới; khoảng 500 loài cây thuốc",
      "Xếp thứ 50 trên thế giới; khoảng 1.000 loài cây thuốc"
    ],
    correctIndex: 0,
    explanation: "Việt Nam nằm trong top 16 quốc gia đa dạng sinh học cao nhất thế giới và đã ghi nhận hơn 5.000 loài thực vật làm thuốc.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 149,
    question: "Hình thức bảo tồn nguồn gen cây thuốc ngay tại môi trường sinh thái tự nhiên nguyên bản (Vườn quốc gia, Khu dự trữ sinh quyển) gọi là:",
    options: ["Bảo tồn In situ (Tại chỗ)", "Bảo tồn Ex situ (Chuyển chỗ)", "Bảo tồn On farm", "Bảo tồn In vitro"],
    correctIndex: 0,
    explanation: "Bảo tồn In situ là bảo tồn nguyên trạng tại môi trường tự nhiên giúp sinh vật tiếp tục tương tác và tiến hóa theo tự nhiên.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Dễ"
  },
  {
    id: 150,
    question: "Dược lý dân tộc học (Ethnopharmacology) là môn khoa học liên ngành nhằm mục tiêu cốt lõi nào?",
    options: [
      "Ghi nhận kinh nghiệm sử dụng cây thuốc của các dân tộc và chứng minh, định danh hoạt chất bằng khoa học hiện đại",
      "Chỉ thu mua cây thuốc giá rẻ của các dân tộc thiểu số",
      "Nghiên cứu lai tạo các giống cây đột biến gen vô tính",
      "Khai tử các phương pháp chữa bệnh dân gian"
    ],
    correctIndex: 0,
    explanation: "Dược lý dân tộc học nghiên cứu ghi nhận tri thức dân gian bản địa, chứng minh tác dụng bằng thực nghiệm và bảo vệ quyền sở hữu trí tuệ của cộng đồng bản địa.",
    topic: "daicuong",
    isMidterm: true,
    difficulty: "Trung bình"
  }
];
