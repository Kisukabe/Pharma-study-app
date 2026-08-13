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
  }
];
