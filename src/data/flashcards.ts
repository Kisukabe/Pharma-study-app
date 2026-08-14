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
  },

  // ==========================================
  // --- BỘ FLASHCARDS GIÁO TRÌNH ĐẠI CƯƠNG (DCQ2022) ---
  // ==========================================
  {
    id: 'fc_dc_01',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Từ nguyên học',
    front: 'Thuật ngữ "Pharmacognosis" và "Analecta Pharmacognostica" lần đầu được đề xuất bởi ai?',
    back: 'J.A. Schmidt (1811) đề xuất Pharmacognosis; C.A. Seydler (1815) đề xuất Analecta Pharmacognostica.',
    subText: 'Pharmakon (thuốc) + Gnosis (hiểu biết/tri thức).'
  },
  {
    id: 'fc_dc_02',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Từ nguyên học',
    front: 'Thuật ngữ "Physiopharmacognosy" do ai đề xuất và có ý nghĩa gì?',
    back: 'Do Wasicki đề xuất ("Physio" = tự nhiên), mang nghĩa nghiên cứu thuốc từ tự nhiên để phân biệt với hóa dược tổng hợp.',
    subText: 'Đây được coi là danh xưng chính xác nhất về mặt bản chất của môn học.'
  },
  {
    id: 'fc_dc_03',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Định nghĩa',
    front: 'Phân biệt định nghĩa RỘNG và HẸP của Dược liệu học?',
    back: 'Định nghĩa rộng: Nghiên cứu nguyên liệu làm thuốc có nguồn gốc TỰ NHIÊN (vô cơ + sinh học). Định nghĩa hẹp: Nghiên cứu nguyên liệu có nguồn gốc SINH HỌC.',
    subText: 'Hiện nay Dược liệu học tập trung chủ yếu vào định nghĩa hẹp (nguồn gốc sinh học).'
  },
  {
    id: 'fc_dc_04',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Đối tượng nghiên cứu',
    front: '4 nguồn gốc sinh vật chính cung cấp nguyên liệu làm thuốc?',
    back: 'Thực vật (nhiều nhất), Động vật (hormone/insulin), Vi sinh vật (kháng sinh/penicillin) và Tài nguyên biển (hải sâm, san hô, rong tảo).',
    subText: 'Thực vật là đối tượng được nghiên cứu tập trung và phong phú nhất.'
  },
  {
    id: 'fc_dc_05',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Khái niệm',
    front: 'Phân biệt "Cây thuốc" và "Dược liệu"?',
    back: 'Cây thuốc là cây CÒN SỐNG; Dược liệu là bộ phận hoặc sản phẩm tiết/chiết xuất đã lấy ra (khô hoặc tươi) dùng làm thuốc.',
    subText: 'Một cây thuốc có thể cung cấp một hoặc nhiều dược liệu khác nhau.'
  },
  {
    id: 'fc_dc_06',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Dạng chiết xuất',
    front: 'Đặc điểm phân biệt Cao chiết toàn phần, Cao chiết tinh chế và Hoạt chất tinh khiết?',
    back: 'Toàn phần: chứa 40-60% dược chất + tạp; Tinh chế (hoạt chất toàn phần): chỉ giữ lại nhóm hoạt chất chính; Tinh khiết: 1 hợp chất đơn lẻ >99%.',
    subText: 'Xu hướng hiện đại đang quay lại cao chiết tinh chế nhờ tác dụng hiệp đồng sinh học.'
  },
  {
    id: 'fc_dc_07',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Lịch sử cổ đại',
    front: 'Bằng chứng khảo cổ sớm nhất về việc con người dùng dược liệu?',
    back: 'Người Neandertan (60.000 TCN) chôn xác cùng lượng lớn phấn hoa của các cây thuốc.',
    subText: 'Tương tự phát hiện tại di chỉ Cư dân vùng hồ Thụy Sĩ (5.000 - 6.000 TCN).'
  },
  {
    id: 'fc_dc_08',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Lịch sử thế giới',
    front: 'Bản thảo y học nổi tiếng nhất của Ai Cập cổ đại và vị thần y Ai Cập là ai?',
    back: 'Bản thảo Papyrus Ebers (1550 TCN) và danh y Imhotep (được tôn vinh là ông tổ y học Ai Cập).',
    subText: 'Người Ai Cập cổ cũng rất giỏi thuật ướp xác bằng tinh dầu và nhựa thơm.'
  },
  {
    id: 'fc_dc_09',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Lịch sử thế giới',
    front: 'Hệ thống y học cổ truyền Ấn Độ gọi là gì và hai danh y huyền thoại là ai?',
    back: 'Ayurveda (Khoa học sự sống); Danh y Charaka (500 phương thuốc) và Susruta (750 cây thuốc).',
    subText: 'Susruta cũng được coi là bậc thầy phẫu thuật cổ đại.'
  },
  {
    id: 'fc_dc_10',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Lịch sử thế giới',
    front: 'Học thuyết "Quinta essentia" (Chất tinh túy) do ai đề xướng?',
    back: 'Paracelsus (1493 - 1541), đề xuất chỉ có một phần nhỏ trong cây có tác dụng và cổ xúy chiết xuất dùng độc vị.',
    subText: 'Phản đối học thuyết pha trộn dược liệu của Galen.'
  },
  {
    id: 'fc_dc_11',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Lịch sử thế giới',
    front: 'Mốc son phân lập Morphine từ nhựa thuốc phiện diễn ra vào năm nào, do ai?',
    back: 'Năm 1806 bởi dược sĩ Friedrich Sertürner (người Đức).',
    subText: 'Chứng minh thực nghiệm hoàn toàn học thuyết Quinta essentia của Paracelsus.'
  },
  {
    id: 'fc_dc_12',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Lịch sử Việt Nam',
    front: 'Thói quen dùng thảo dược phòng bệnh của người Việt từ thời Hồng Bàng (2879 TCN)?',
    back: 'Nhai trầu bảo vệ răng miệng, uống chè vối dễ tiêu hóa, dùng gừng, hành, tỏi phòng cảm lạnh.',
    subText: 'Thời An Dương Vương có sự tích nỏ thần dùng mũi tên tẩm độc thảo mộc.'
  },
  {
    id: 'fc_dc_13',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Lịch sử Việt Nam',
    front: 'Cơ quan y tế phụ trách thu hái thuốc nam dưới thời nhà Lý và nhà Trần gọi là gì?',
    back: 'Thời Lý: Ty Thái y; Thời Trần: Viện Thái y (tổ chức trồng và thu hái thuốc nam chuẩn bị 3 lần kháng chiến chống Nguyên Mông).',
    subText: 'Thời Hậu Lê thành lập thêm Tế sinh đường chăm lo thuốc men cho nhân dân.'
  },
  {
    id: 'fc_dc_14',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Lịch sử Việt Nam',
    front: 'Vị thế của Tuệ Tĩnh và Lê Hữu Trác trong nền Y Dược học Việt Nam?',
    back: 'Tuệ Tĩnh là người SÁNG LẬP THỰC SỰ; Lê Hữu Trác (Lãn Ông) là người HỆ THỐNG HÓA VÀ TRUYỀN BÁ VĨ ĐẠI.',
    subText: 'Tuệ Tĩnh tương đương Imhotep của Ai Cập; Lãn Ông tương đương Hippocrates của Hy Lạp.'
  },
  {
    id: 'fc_dc_15',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Vai trò & Thống kê',
    front: 'Số liệu thống kê về vai trò của thuốc có nguồn gốc tự nhiên trên thế giới?',
    back: '80% dân số phụ thuộc vào thuốc tự nhiên ban đầu; >50% thuốc lâm sàng có nguồn gốc tự nhiên; 12/25 thuốc bán chạy nhất bắt nguồn tự nhiên.',
    subText: 'Xu hướng thời đại: Quay về thiên nhiên & Phòng bệnh hơn chữa bệnh.'
  },
  {
    id: 'fc_dc_16',
    topic: 'daicuong',
    isMidterm: true,
    category: 'Luật Dược 2016',
    front: 'Phân biệt "Thuốc Dược Liệu" và "Thuốc Cổ Truyền" theo Luật Dược 2016?',
    back: 'Thuốc Dược liệu: Dùng DƯỢC LÝ HIỆN ĐẠI để xây dựng công thức; Thuốc Cổ truyền: Dùng LÝ LUẬN Y HỌC CỔ TRUYỀN để xây dựng công thức.',
    subText: 'Cả hai đều có thành phần từ nguyên liệu tự nhiên/dược liệu.'
  },
  {
    id: 'fc_dc_17',
    topic: 'harvest-process',
    isMidterm: true,
    category: 'Thu hái',
    front: 'Tại sao cây chứa tinh dầu bắt buộc phải thu hái vào sáng sớm trước khi mặt trời mọc?',
    back: 'Để tránh tinh dầu bị bốc hơi hao hụt khi nhiệt độ mặt trời tăng lên vào buổi trưa.',
    subText: 'Đồng thời phải thu hái lúc trời nắng ráo để dễ phơi sấy ngay.'
  },
  {
    id: 'fc_dc_18',
    topic: 'harvest-process',
    isMidterm: true,
    category: 'Thu hái',
    front: 'Thời điểm thu hái tối ưu cho Vỏ cây nếu muốn giữ cho cây tiếp tục sống?',
    back: 'Vào MÙA XUÂN (cây nhiều nhựa luyện, mô phân sinh hoạt động mạnh, dễ bóc vỏ và vỏ mau tái sinh).',
    subText: 'Nếu đốn hạ toàn cây (như Quế, Kina) thì thu hoạch vào cuối thu.'
  },
  {
    id: 'fc_dc_19',
    topic: 'harvest-process',
    isMidterm: true,
    category: 'Thu hái',
    front: 'Kể tên 3 dược liệu bắt buộc phải thu hái khi còn ở giai đoạn NỤ HOA?',
    back: 'Nụ hoa hòe (giàu Rutin), Nụ đinh hương (giàu Eugenol) và Kim ngân hoa.',
    subText: 'Nếu để hoa nở xòe bung cánh thì lượng hoạt chất quý sẽ bị sụt giảm mạnh.'
  },
  {
    id: 'fc_dc_20',
    topic: 'harvest-process',
    isMidterm: true,
    category: 'Thu hái',
    front: 'Phân biệt Chỉ thực và Chỉ xác dựa vào thời điểm thu hái quả?',
    back: 'Chỉ thực: Thu hái khi QUẢ CÒN NON (chứa nhiều flavonoid); Chỉ xác: Thu hái TRƯỚC KHI QUẢ CHÍN (quả bánh tẻ).',
    subText: 'Đều là quả của cây thuộc chi Citrus (cam/bưởi/chua).'
  },
  {
    id: 'fc_dc_21',
    topic: 'harvest-process',
    isMidterm: true,
    category: 'Tiêu chuẩn',
    front: '4 nội dung chính trong Hướng dẫn Thực hành tốt trồng trọt và thu hái (GACP-WHO)?',
    back: 'ĐÚNG (đúng giống loài), TỐT (chất lượng cao), AN TOÀN (sạch, không thuốc trừ sâu/aflatoxin, bảo vệ môi trường), KINH TẾ (hiệu quả sản xuất).',
    subText: 'GACP là bộ phận trực thuộc hệ thống đảm bảo chất lượng GMP.'
  },
  {
    id: 'fc_dc_22',
    topic: 'harvest-process',
    isMidterm: true,
    category: 'Bảo quản',
    front: 'Nguyên nhân CHỦ YẾU gây hư hỏng dược liệu và giới hạn độ ẩm an toàn theo Dược điển?',
    back: 'ĐỘ ẨM là nguyên nhân chủ yếu; Giới hạn độ ẩm an toàn của đa số dược liệu là ≤ 13%.',
    subText: 'Độ ẩm >13% kích hoạt enzym thủy phân và làm nấm mốc nảy mầm sinh độc tố aflatoxin.'
  },
  {
    id: 'fc_dc_23',
    topic: 'analysis-chromatography',
    isMidterm: true,
    category: 'Sắc ký',
    front: 'Mục đích chính của Sắc ký điều chế (Preparative Chromatography) là gì?',
    back: 'Nhằm TÁCH VÀ THU LẤY HỢP CHẤT TINH KHIẾT khỏi hỗn hợp dịch chiết (không nhằm mục đích phân tích định lượng).',
    subText: 'Bao gồm SKLM điều chế và Sắc ký cột cổ điển nhồi lượng lớn dịch chiết.'
  },
  {
    id: 'fc_dc_24',
    topic: 'analysis-chromatography',
    isMidterm: true,
    category: 'Sắc ký',
    front: 'Sắc ký điểm chỉ (Fingerprint Chromatography) là gì và ứng dụng tiêu biểu?',
    back: 'So sánh toàn bộ sắc ký đồ HPLC phức tạp của mẫu thử với mẫu dược liệu chuẩn để định danh.',
    subText: 'Ví dụ: Phân biệt Sâm Ngọc Linh thật với Sâm Tây Bắc / Tam thất hoang.'
  },
  {
    id: 'fc_dc_25',
    topic: 'analysis-chromatography',
    isMidterm: true,
    category: 'Quang phổ',
    front: 'Phương pháp quang phổ nào giúp xác định nhóm chức hóa học và liên kết bội?',
    back: 'Phổ Hồng ngoại (Infrared Spectroscopy - IR).',
    subText: 'Dao động hóa trị và biến dạng đặc trưng cho -OH, -COOH, C=O, C≡N.'
  },
  {
    id: 'fc_dc_26',
    topic: 'analysis-chromatography',
    isMidterm: true,
    category: 'Quang phổ',
    front: 'Phổ Khối (MS) và Phổ NMR cung cấp thông tin cốt lõi gì trong xác định cấu trúc?',
    back: 'Phổ MS xác định PHÂN TỬ LƯỢNG và mảnh vỡ phân tử; Phổ NMR (1H, 13C) xác định BỘ KHUNG CẤU TRÚC và vị trí các nguyên tử.',
    subText: 'Kết hợp MS và NMR 2D là tiêu chuẩn vàng giải mã cấu trúc hợp chất tự nhiên mới.'
  },
  {
    id: 'fc_dc_27',
    topic: 'analysis-chromatography',
    isMidterm: true,
    category: 'Quang phổ',
    front: 'CD (Lưỡng cực vòng) và ORD (Tán sắc quay quang) dùng để xác định điều gì?',
    back: 'Xác định đồng phân quang học, cấu hình carbon bất đối (R/S) và dạng đồng phân alpha / beta.',
    subText: 'Tương tác với ánh sáng phân cực tròn.'
  },
  {
    id: 'fc_dc_28',
    topic: 'harvest-process',
    isMidterm: true,
    category: 'Chiết xuất',
    front: 'Phân biệt "Chiết" (hòa tan) và "Chiết xuất" (extraction)?',
    back: 'Chiết là hòa tan chất ở bên ngoài (như nghiền viên nén paracetamol); Chiết xuất là lấy hoạt chất nằm sâu trong LÒNG TẾ BÀO thực vật.',
    subText: 'Chiết xuất đòi hỏi dung môi thấm qua vách tế bào rồi hoạt chất khuếch tán ngược ra ngoài.'
  },
  {
    id: 'fc_dc_29',
    topic: 'harvest-process',
    isMidterm: true,
    category: 'Chiết xuất',
    front: 'Hoạt chất chuyển hóa thứ cấp làm thuốc trong tế bào thực vật nằm chủ yếu ở bào quan nào?',
    back: 'Nằm chủ yếu trong KHÔNG BÀO (Vacuole) của tế bào thực vật.',
    subText: 'Được bao bọc bởi màng không bào và vách cellulose gia cố.'
  },
  {
    id: 'fc_dc_30',
    topic: 'harvest-process',
    isMidterm: true,
    category: 'Chiết xuất',
    front: 'Kênh bào tương (Plasmodesmata) có vai trò gì trong quá trình thẩm tích chiết xuất?',
    back: 'Là các kênh liên thông giữa các tế bào thực vật liền kề, giúp hoạt chất di chuyển xuyên qua các tế bào ra bề mặt tiếp xúc dung môi.',
    subText: 'Chỉ các phân tử có kích thước nhỏ hơn đường kính kênh mới đi qua được.'
  },
  {
    id: 'fc_dc_31',
    topic: 'harvest-process',
    isMidterm: true,
    category: 'Chiết xuất',
    front: 'Vì sao trong chiết xuất công nghiệp người ta ưu tiên giữ tế bào nguyên vẹn hơn là xay nát phá vỡ?',
    back: 'Vì vách tế bào nguyên vẹn đóng vai trò màng siêu lọc giữ lại đại phân tử (tinh bột, chất nhầy, protein) -> Dịch chiết trong, sạch tạp và rất dễ lọc.',
    subText: 'Nếu phá vỡ tế bào, chất nhầy tràn ra làm dung dịch keo nhớt, tắc màng lọc và dễ cháy khét khi cô.'
  },
  {
    id: 'fc_dc_32',
    topic: 'harvest-process',
    isMidterm: true,
    category: 'Chiết xuất',
    front: 'Nguyên tắc cốt lõi của kỹ thuật Ngấm kiệt (Percolation) liên tục?',
    back: 'Dung môi MỚI tiếp xúc với dược liệu CŨ; Dung môi CŨ tiếp xúc với dược liệu MỚI.',
    subText: 'Giúp tận thu triệt để hoạt chất và thu được dịch chiết đầu đậm đặc nhất.'
  },
  {
    id: 'fc_dc_33',
    topic: 'compounds-resources',
    isMidterm: true,
    category: 'Tài nguyên',
    front: 'Việt Nam xếp thứ mấy trên thế giới về độ đa dạng sinh vật và có bao nhiêu loài cây thuốc?',
    back: 'Xếp thứ 16 trên thế giới; Đã thống kê và ghi nhận > 5.000 loài thực vật làm thuốc.',
    subText: 'Nằm trong trung tâm đa dạng sinh học rừng mưa nhiệt đới Đông Nam Á.'
  },
  {
    id: 'fc_dc_34',
    topic: 'compounds-resources',
    isMidterm: true,
    category: 'Bảo tồn',
    front: 'Phân biệt 3 hình thức: Bảo tồn In situ, Ex situ và On farm?',
    back: 'In situ: Bảo tồn tại chỗ (Vườn quốc gia); Ex situ: Bảo tồn chuyển chỗ (Vườn thực vật, Ngân hàng gen); On farm: Bảo tồn tại trang trại/đồng ruộng nông nghiệp.',
    subText: 'In situ duy trì tiến hóa tự nhiên; Ex situ dễ chăm sóc quản lý.'
  },
  {
    id: 'fc_dc_35',
    topic: 'compounds-resources',
    isMidterm: true,
    category: 'Dược lý dân tộc',
    front: 'Dược lý dân tộc học (Ethnopharmacology) là gì và hai tuyên ngôn bảo vệ quyền sở hữu trí tuệ?',
    back: 'Môn khoa học liên ngành ghi nhận kinh nghiệm dùng cây thuốc của các dân tộc và chứng minh bằng khoa học; Tuyên ngôn Belem và Manila.',
    subText: 'Bảo vệ quyền lợi của cộng đồng bản địa, chống cướp sinh học (Biopiracy).'
  }
];
