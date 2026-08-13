import { Flashcard } from '../types';

export const FLASHCARDS: Flashcard[] = [
  // --- ĐẠI CƯƠNG DƯỢC LIỆU ---
  {
    id: 'fc_1',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Định nghĩa',
    front: 'Dược liệu học (Pharmacognosy) là gì?',
    back: 'Môn khoa học nghiên cứu về các nguyên liệu làm thuốc có nguồn gốc sinh học (thực vật, động vật, vi sinh vật, tài nguyên biển).',
    subText: 'Từ nguyên: Pharmakon (thuốc) + Gnosis (hiểu biết).'
  },
  {
    id: 'fc_2',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Lịch sử Việt Nam',
    front: 'Tuyên ngôn “Nam dược trị Nam nhân” do ai xướng xuất?',
    back: 'Thiền sư Tuệ Tĩnh (Nguyễn Bá Tĩnh, thế kỷ 14).',
    subText: 'Thầy thuốc mở đầu nền y dược học cổ truyền dân tộc Việt Nam.'
  },
  {
    id: 'fc_3',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Lịch sử Việt Nam',
    front: 'Tác giả bộ sách “Hải Thượng Y tông Tâm lĩnh” là ai?',
    back: 'Hải Thượng Lãn Ông - Lê Hữu Trác (1720 - 1791).',
    subText: 'Bộ sách đồ sộ gồm 28 tập, 66 quyển về Y Dược học Việt Nam.'
  },
  {
    id: 'fc_4',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Lịch sử Thế giới',
    front: 'Ai được gọi là “Ông tổ của Y học Phương Tây”?',
    back: 'Hippocrates (460 - 377 TCN).',
    subText: 'Sử dụng trên 200 vị thuốc thảo dược và lập ra Lời thề Hippocrates.'
  },
  {
    id: 'fc_5',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Lịch sử Thế giới',
    front: 'Paracelsus (1490 - 1541) có đóng góp gì đột phá?',
    back: 'Đề xướng chiết rút “Quinta essentia” (chất tinh túy) làm thuốc và dùng độc vị, phản đối học thuyết Galen.',
    subText: 'Đặt nền móng cho Hóa dược tách khỏi Dược liệu học.'
  },
  {
    id: 'fc_6',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Lịch sử Thế giới',
    front: 'Dioscorides (40 - 90 SCN) nổi tiếng với tác phẩm nào?',
    back: 'Bộ sách “De Materia Medica” mô tả hơn 600 loài cây thuốc.',
    subText: 'Đã ảnh hưởng sâu rộng tới y học phương Tây suốt nhiều thế kỷ.'
  },
  {
    id: 'fc_7_dc',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Tài nguyên Y Dược',
    front: 'Đặc điểm chính của Danh mục Đỏ Việt Nam đối với thực vật làm thuốc?',
    back: 'Hệ thống đánh giá mức độ đe dọa tuyệt chủng của các loài thảo dược nguy cấp (CR, EN, VU) để ưu tiên bảo tồn.',
    subText: 'Cơ sở pháp lý bảo vệ nguồn gen y dược cổ truyền.'
  },
  {
    id: 'fc_8_dc',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Danh pháp & Phân loại',
    front: 'Quy tắc tên khoa học danh pháp hai phần (Binomial nomenclature) của Carl Linnaeus?',
    back: 'Tên Chi (viết hoa) + Tên Loài (viết thường) + Tác giả danh pháp (viết đứng/tắt).',
    subText: 'Ví dụ: Panax ginseng C.A.Mey.'
  },

  // --- THU HÁI - CHẾ BIẾN - BẢO QUẢN ---
  {
    id: 'fc_7',
    topic: 'harvest-process',
    isMidterm: true,
    category: 'Thu hái',
    front: 'Thời điểm thu hái Lá và Ngọn cây tối ưu là khi nào?',
    back: 'Thu hái vào thời kỳ cây quang hợp mạnh nhất: Trước khi cây ra hoa hoặc bắt đầu ra hoa.',
    subText: 'Giúp thu được hàm lượng hoạt chất tích lũy cao nhất.'
  },
  {
    id: 'fc_8',
    topic: 'harvest-process',
    isMidterm: true,
    category: 'Thu hái',
    front: 'Thời điểm thu hái Rễ và Thân rễ thích hợp nhất?',
    back: 'Cuối thời kỳ sinh dưỡng (cuối thu - đầu đông hoặc cuối mùa mưa - đầu khô).',
    subText: 'Lúc này cây ngừng sinh trưởng lá, dinh dưỡng dồn xuống củ/rễ.'
  },
  {
    id: 'fc_9',
    topic: 'harvest-process',
    isMidterm: true,
    category: 'Thu hái',
    front: 'Tại sao vỏ cây lại được thu hoạch vào Mùa Xuân?',
    back: 'Vỏ mềm dễ tách khỏi gỗ, nhựa cây lưu thông mạnh và đâm chồi nên ít tổn thương cây.',
    subText: 'Áp dụng cho vỏ thân, vỏ rễ.'
  },
  {
    id: 'fc_10',
    topic: 'harvest-process',
    isMidterm: true,
    category: 'Thu hái',
    front: 'Cây chứa Tinh dầu nên thu hái vào thời điểm nào trong ngày?',
    back: 'Thu hái lúc sáng sớm - TRƯỚC khi mặt trời mọc.',
    subText: 'Tránh ánh nắng mặt trời làm bốc hơi tinh dầu.'
  },
  {
    id: 'fc_11',
    topic: 'harvest-process',
    isMidterm: true,
    category: 'Bảo quản & Enzym',
    front: 'Mục đích của việc “Ổn định dược liệu” là gì?',
    back: 'Bất hoạt hoặc tiêu diệt enzym để bảo vệ hoạt chất không bị thủy phân/oxy hóa phân hủy.',
    subText: 'Phương pháp: Cồn sôi, nhiệt ẩm (hơi nước), nhiệt khô.'
  },
  {
    id: 'fc_12',
    topic: 'harvest-process',
    isMidterm: true,
    category: 'Bảo quản & Enzym',
    front: 'Yếu tố nào gây hư hỏng dược liệu nguy hại nhất?',
    back: 'ĐỘ ẨM.',
    subText: 'Độ ẩm kích hoạt enzym hoạt động và tạo điều kiện cho nấm mốc phát triển.'
  },
  {
    id: 'fc_13',
    topic: 'harvest-process',
    isMidterm: true,
    category: 'Tiêu chuẩn',
    front: 'GACP viết tắt của từ gì?',
    back: 'Good Agriculture and Collection Practice (Thực hành trồng trọt và thu hái tốt dược liệu).',
    subText: 'Bộ tiêu chuẩn đảm bảo nguyên liệu dược đúng, sạch, an toàn & chất lượng.'
  },

  // --- SẮC KÝ & KIỂM NGHIỆM ---
  {
    id: 'fc_14',
    topic: 'analysis-chromatography',
    isMidterm: true,
    category: 'Sắc ký',
    front: 'Sắc ký điểm chỉ (Fingerprint) là gì?',
    back: 'Phương pháp định tính đối chiếu toàn bộ hình ảnh sắc ký của dịch chiết mẫu thử với mẫu dược liệu chuẩn xác thực.',
    subText: 'Giúp phát hiện gian lận và đánh giá chất lượng tổng thể.'
  },
  {
    id: 'fc_15',
    topic: 'analysis-chromatography',
    isMidterm: true,
    category: 'Sắc ký',
    front: 'Thế mạnh lớn nhất của sắc ký HPLC trong kiểm nghiệm là gì?',
    back: 'Phân tích định tính và định lượng chính xác cao các chất kém bay hơi, độ nhạy cao.',
    subText: 'High Performance Liquid Chromatography.'
  },
  {
    id: 'fc_16',
    topic: 'analysis-chromatography',
    isMidterm: false,
    category: 'Quang phổ',
    front: 'Phổ Khối phổ (MS - Mass Spectrometry) cho thông tin gì?',
    back: 'Phân tử lượng và các mảnh vỡ cấu trúc phân tử.',
    subText: 'Rất hiệu quả khi ghép nối sắc ký GC-MS hoặc LC-MS.'
  },
  {
    id: 'fc_17',
    topic: 'analysis-chromatography',
    isMidterm: false,
    category: 'Quang phổ',
    front: 'Phổ NMR (Cộng hưởng từ hạt nhân) dùng để làm gì?',
    back: 'Xác định chính xác vị trí nguyên tử C và H, liên kết hóa học -> Giải mã cấu trúc không gian phân tử.',
    subText: 'Bao gồm 1D (1H, 13C) và 2D NMR (COSY, HSQC, HMBC).'
  },

  // --- NHÓM HOẠT CHẤT & TÀI NGUYÊN ---
  {
    id: 'fc_18',
    topic: 'compounds-resources',
    isMidterm: true,
    category: 'Coumarin',
    front: 'Coumarin có cấu trúc khung cơ bản là gì?',
    back: 'Benzo-alpha-pyron (gồm vòng benzen ngưng tụ với vòng alpha-pyron).',
    subText: 'Lưu ý: Không phải gamma-pyron.'
  },
  {
    id: 'fc_19',
    topic: 'compounds-resources',
    isMidterm: true,
    category: 'Coumarin',
    front: 'Coumarin có tác dụng chống đông máu khi mang nhóm thế nào?',
    back: 'Nhóm -OH tự do ở vị trí C-4 (Dẫn xuất 4-hydroxycoumarin như Warfarin, Dicoumarol).',
    subText: 'Đối kháng vitamin K gián tiếp ức chế prothrombin.'
  },
  {
    id: 'fc_20',
    topic: 'compounds-resources',
    isMidterm: true,
    category: 'Carbohydrat',
    front: 'Pectin bị kết tủa và đông cứng giòn nhờ hiện tượng gì?',
    back: 'Kết tủa bởi muối ion kim loại đa hóa trị (như Ca²⁺ trong nước vôi trong).',
    subText: 'Ứng dụng làm mứt, ngâm vỏ bưởi làm chè bưởi giòn dẻo.'
  },
  {
    id: 'fc_21',
    topic: 'compounds-resources',
    isMidterm: true,
    category: 'Glycosid',
    front: 'Trong 3 loại glycosid (O-glycosid, O-acid uronic, C-glycosid), loại nào BỀN NHẤT với thủy phân?',
    back: 'C-glycosid (dây nối C-C cực kỳ bền vững với cả acid lẫn enzym).',
    subText: 'Thứ tự độ bền: O-glycosid < O-acid uronic < C-glycosid.'
  },
  {
    id: 'fc_22',
    topic: 'compounds-resources',
    isMidterm: false,
    category: 'Bảo tồn',
    front: 'Cướp sinh học (Biopiracy) là gì?',
    back: 'Hành vi thương mại hóa nguồn gen và tri thức y học dân gian mà không chia sẻ lợi ích công bằng cho cộng đồng bản địa.',
    subText: 'Được kiểm soát bởi Công ước CITES và đa dạng sinh học.'
  }
];
