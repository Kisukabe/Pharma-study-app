import { DictItem } from '../types';

export const DICTIONARY_ITEMS: DictItem[] = [
  // --- ĐẠI CƯƠNG DƯỢC LIỆU & LỊCH SỬ ---
  {
    id: 'dict_dc_1',
    term: 'Pharmacognosy (Dược liệu học)',
    latinOrAlt: 'Từ nguyên: Pharmakon (Thuốc) + Gnosis (Tri thức / Hiểu biết)',
    topic: 'daicuong',
    category: 'Khái niệm & Định nghĩa',
    definition: 'Môn khoa học ứng dụng nghiên cứu toàn diện về các nguyên liệu làm thuốc có nguồn gốc sinh học.',
    details: 'Dược liệu học nghiên cứu lịch sử, nguồn gốc phân loại, đặc điểm hình thái, đặc điểm giải phẫu, thành phần hóa học, phương pháp thu hái, chế biến, bảo quản, kiểm nghiệm chất lượng và tác dụng sinh học/dược lý của các nguyên liệu từ thực vật, động vật, vi sinh vật và tài nguyên biển.',
    keyPoints: [
      'Nguồn gốc: Thực vật, Động vật, Nấm, Vi sinh vật, Sinh vật biển.',
      'Gồm 2 phần chính: Đại cương dược liệu học và Các nhóm hoạt chất chuyên biệt.',
      'Là cầu nối trực tiếp giữa Y học cổ truyền và Dược học hiện đại.'
    ],
    relatedTerms: ['Dược liệu thô', 'Materia Medica', 'Biopiracy']
  },
  {
    id: 'dict_dc_2',
    term: 'Tuệ Tĩnh (Nguyễn Bá Tĩnh)',
    latinOrAlt: 'Thánh sư Nam Y thế kỷ XIV (Thời Trần)',
    topic: 'daicuong',
    category: 'Lịch sử YHCT Việt Nam',
    definition: 'Thiền sư - Đại y tôn đặt nền móng và xướng xuất tư tưởng y dược độc lập dân tộc Việt Nam.',
    details: 'Ngài xướng xuất tư tưởng lịch sử "Nam dược trị Nam nhân" (Thuốc Nam chữa bệnh cho người Nam). Ông tổng kết kinh nghiệm chữa bệnh bằng thảo dược bản địa dân dã, chú trọng phương pháp dưỡng sinh, xông gội, châm cứu.',
    keyPoints: [
      'Tác phẩm bất hủ: "Nam Dược Thần Hiệu" (11 quyển) và "Hồng Nghĩa Giác Tự Y Thư".',
      'Đã thống kê và mô tả tác dụng của hơn 500 vị thuốc Nam.',
      'Đặt nguyên tắc sử dụng cây thuốc sẵn có tại địa phương để phòng và chữa bệnh.'
    ],
    relatedTerms: ['Lê Hữu Trác', 'Nam Dược Thần Hiệu', 'Hồng Nghĩa Giác Tự Y Thư']
  },
  {
    id: 'dict_dc_3',
    term: 'Lê Hữu Trác (Hải Thượng Lãn Ông)',
    latinOrAlt: 'Đại Y tôn Việt Nam thế kỷ XVIII (1720 - 1791)',
    topic: 'daicuong',
    category: 'Lịch sử YHCT Việt Nam',
    definition: 'Danh y kiệt xuất, nhà văn hóa lớn, người hệ thống hóa toàn bộ nền y học cổ truyền Việt Nam.',
    details: 'Với danh hiệu "Hải Thượng Lãn Ông" (Ông lão lười ở Hải Thượng), ông đã dành trọn đời biên soạn công trình y học đồ sộ, đúc kết lý luận y trị, phương dược cổ truyền kết hợp thực tiễn lâm sàng Việt Nam.',
    keyPoints: [
      'Bộ sách vĩ đại: "Hải Thượng Y Tông Tâm Lĩnh" gồm 28 tập, 66 quyển.',
      'Phát triển học thuyết Âm Dương Ngũ Hành, Thủy Hỏa, Khí Huyết áp dụng chữa bệnh.',
      'Đề cao y đức qua bài văn "Y huấn cách ngôn" chỉ dẫn thái độ người làm thuốc.'
    ],
    relatedTerms: ['Tuệ Tĩnh', 'Hải Thượng Y Tông Tâm Lĩnh', 'Y đức']
  },
  {
    id: 'dict_dc_4',
    term: 'Hippocrates',
    latinOrAlt: '460 - 377 TCN (Thời Cổ đại Hy Lạp)',
    topic: 'daicuong',
    category: 'Lịch sử Y Dược Thế giới',
    definition: 'Danh y Hy Lạp cổ đại được tôn vinh là "Ông tổ của Y học Phương Tây".',
    details: 'Hippocrates tách rời Y học khỏi mê tín thần quyền và ma thuật. Ông đưa ra thuyết "4 thể dịch" (Máu, Nhầy, Mật vàng, Mật đen) và sử dụng hơn 200 loài cây thuốc làm phương tiện điều trị.',
    keyPoints: [
      'Tác giả của "Lời thề Hippocrates" (Hippocratic Oath) về chuẩn mực y đức.',
      'Sử dụng các thảo dược tiêu biểu: Thuốc phiện, Cây liễu (chứa salicin), Tỏi, Cù đèn.',
      'Nguyên tắc: "Trước hết không làm hại bệnh nhân" (Primum non nocere).'
    ],
    relatedTerms: ['Dioscorides', 'Galen', 'Lời thề Hippocrates']
  },
  {
    id: 'dict_dc_5',
    term: 'Dioscorides',
    latinOrAlt: '40 - 90 SCN (Thời Đế quốc La Mã)',
    topic: 'daicuong',
    category: 'Lịch sử Y Dược Thế giới',
    definition: 'Y sĩ quân y người La Mã - tác giả bộ dược điển thảo dược ảnh hưởng nhất lịch sử.',
    details: 'Ông đã chu du khắp Địa Trung Hải để thu thập, phân loại và mô tả chi tiết đặc điểm sinh học, cách thu hái, tác dụng chữa bệnh của hơn 600 loài cây thuốc, động vật và khoáng vật.',
    keyPoints: [
      'Kiệt tác: "De Materia Medica" (Về nguyên liệu làm thuốc) gồm 5 tập.',
      'Tác phẩm là tài liệu tham khảo cốt lõi của Y Dược châu Âu suốt hơn 1.500 năm.',
      'Là người đầu tiên phân loại dược liệu theo tác dụng dược lý thay vì thứ tự bảng chữ cái.'
    ],
    relatedTerms: ['Hippocrates', 'De Materia Medica', 'Dược liệu thô']
  },
  {
    id: 'dict_dc_6',
    term: 'Claudius Galenus (Galen)',
    latinOrAlt: '129 - 216 SCN (La Mã cổ đại)',
    topic: 'daicuong',
    category: 'Lịch sử Y Dược Thế giới',
    definition: 'Nhà y dược học La Mã đề xướng phương pháp chiết xuất chế phẩm thảo dược thô.',
    details: 'Galen là người đầu tiên đưa ra lý luận chiết rút hoạt chất từ cây thuốc bằng dung môi (rượu, nước, dấm) để tạo thành các dạng thuốc dịch chiết, cồn thuốc, cao thuốc.',
    keyPoints: [
      'Thuật ngữ "Chế phẩm Galen" (Galenicals) ra đời để chỉ các dạng thuốc dịch chiết thô.',
      'Đặt nền móng cho kỹ thuật Bào chế học hiện đại.',
      'Chủ trương phối ngũ phức tạp nhiều dược liệu trong một bài thuốc (Theriac).'
    ],
    relatedTerms: ['Galenicals', 'Chiết xuất', 'Paracelsus']
  },
  {
    id: 'dict_dc_7',
    term: 'Paracelsus',
    latinOrAlt: '1490 - 1541 (Thời Phục Hưng)',
    topic: 'daicuong',
    category: 'Lịch sử Y Dược Thế giới',
    definition: 'Bác sĩ, nhà hóa học Thụy Sĩ mở đường cho Hóa Dược và Độc chất học.',
    details: 'Paracelsus phản đối việc dùng bài thuốc phối hợp thô sơ của Galen. Ông đưa ra thuyết "Quinta essentia" (Chiết chất tinh túy) và khẳng định mọi tác dụng chữa bệnh hay độc tính phụ thuộc vào liều dùng.',
    keyPoints: [
      'Câu nói kinh điển: "Dosis sola facit venenum" (Chỉ có liều lượng mới quyết định một chất là chất độc hay không).',
      'Thúc đẩy việc dùng đơn chất độc vị và hóa chất tinh khiết trong y học.',
      'Đặt nhịp cầu chuyển giao từ Dược liệu học cổ điển sang Hóa dược tinh chế.'
    ],
    relatedTerms: ['Quinta essentia', 'Độc học', 'Sertürner']
  },
  {
    id: 'dict_dc_8',
    term: 'Friedrich Sertürner',
    latinOrAlt: '1783 - 1841 (Dược sĩ người Đức)',
    topic: 'daicuong',
    category: 'Lịch sử Y Dược Thế giới',
    definition: 'Dược sĩ đầu tiên phân lập thành công đơn chất Alcaloid tinh khiết (Morphine) từ thuốc phiện.',
    details: 'Năm 1805 (và công bố đầy đủ 1817), Sertürner đã tách được "Principium somniferum" từ nhựa thuốc phiện (*Papaver somniferum*), đặt tên là Morphine (theo vị thần giấc mơ Morpheus).',
    keyPoints: [
      'Mở ra kỷ nguyên nghiên cứu Hóa học các hợp chất tự nhiên (Natural Products Chemistry).',
      'Chứng minh tác dụng dược lý của cây thuốc do các đơn chất hóa học tinh khiết quyết định.',
      'Mở đường cho việc phân lập Strychnin, Quinin, Atropin, Caffein sau đó.'
    ],
    relatedTerms: ['Morphine', 'Alcaloid', 'Paracelsus']
  },
  {
    id: 'dict_dc_9',
    term: 'Carl Linnaeus & Danh pháp hai phần',
    latinOrAlt: 'Binomial Nomenclature (1753)',
    topic: 'daicuong',
    category: 'Danh pháp & Phân loại',
    definition: 'Hệ thống đặt tên khoa học tiêu chuẩn quốc tế cho mọi loài sinh vật gồm 2 từ tiếng Latin.',
    details: 'Do nhà thực vật học Carl Linnaeus đề xướng trong tác phẩm "Species Plantarum" (1753). Tên khoa học của cây thuốc gồm: Tên Chi (viết hoa) + Tên Loài (viết thường) + Tên tác giả đặt danh pháp.',
    keyPoints: [
      'Cấu trúc: *Genus species* Author (Ví dụ: *Panax ginseng* C.A.Mey.).',
      'Tên Chi và Tên Loài bắt buộc phải in nghiêng (hoặc gạch chân khi viết tay).',
      'Loại bỏ sự nhầm lẫn giữa các tên gọi dân gian địa phương trên toàn thế giới.'
    ],
    relatedTerms: ['Danh pháp Dược điển', 'Taxonomy', 'Sách Đỏ']
  },
  {
    id: 'dict_dc_10',
    term: 'Danh pháp Dược liệu theo Dược điển',
    latinOrAlt: 'Dược điển Việt Nam V & Dược điển Quốc tế',
    topic: 'daicuong',
    category: 'Danh pháp & Phân loại',
    definition: 'Quy tắc đặt tên thương mại/kiểm nghiệm cho bộ phận dùng của dược liệu bằng tiếng Latin.',
    details: 'Được cấu tạo theo công thức: Tên bộ phận dùng (ở cách 1 Latin) + Tên Chi hoặc Tên Loài của cây thuốc (ở cách 2 - Genitive case Latin).',
    keyPoints: [
      'Bộ phận dùng: Radix (Rễ), Rhizoma (Thân rễ), Folium (Lá), Flos (Hoa), Fructus (Quả), Semen (Hạt), Cortex (Vỏ).',
      'Ví dụ: *Radix Ginseng* (Rễ Nhân sâm), *Flos Sophorae* (Hoa Hòe), *Folium Sennae* (Lá Phan tả diệp).',
      'Giúp kiểm nghiệm viên xác định chính xác bộ phận thu hái và loài nguồn gốc.'
    ],
    relatedTerms: ['Dược liệu thô', 'Dược điển Việt Nam V', 'Carl Linnaeus']
  },
  {
    id: 'dict_dc_11',
    term: 'Dược liệu thô (Crude Drug)',
    latinOrAlt: 'Materia alimentaria et medicamentosa',
    topic: 'daicuong',
    category: 'Khái niệm & Định nghĩa',
    definition: 'Nguyên liệu tự nhiên chưa qua chế biến tinh chế phức tạp, chỉ qua sơ chế cơ bản.',
    details: 'Dược liệu thô gồm các bộ phận thực vật hay động vật được làm sạch, phơi/sấy khô, thái lát hoặc tán bột thô. Chưa bị chiết tách lấy đơn chất tinh khiết.',
    keyPoints: [
      'Chứa hỗn hợp phức tạp nhiều thành phần hoạt chất và chất kèm.',
      'Cần được kiểm nghiệm về độ đúng chủng loại, độ sạch và hàm lượng hoạt chất.',
      'Là đầu vào cho sản xuất cao dược liệu, đông dược và chiết xuất hóa dược.'
    ],
    relatedTerms: ['Pharmacognosy', 'Sơ chế', 'GACP-WHO']
  },
  {
    id: 'dict_dc_12',
    term: 'Mẫu tiêu chuẩn Dược liệu (Voucher Specimen)',
    latinOrAlt: 'Herbarium Specimen',
    topic: 'daicuong',
    category: 'Danh pháp & Phân loại',
    definition: 'Mẫu cây thuốc ép khô hoàn chỉnh có hoa/quả dùng làm bằng chứng xác thực loài sinh học.',
    details: 'Mẫu được thu hái ngoài tự nhiên, ép khô mounted trên giấy chuyên dụng kèm nhãn địa điểm, tọa độ, ngày thu hái, tên người thu hái và được lưu trữ vĩnh viễn tại các Bảo tàng Thực vật (Herbarium).',
    keyPoints: [
      'Bắt buộc phải có trong mọi nghiên cứu khoa học và công bố quốc tế về dược liệu.',
      'Căn cứ pháp lý đối chiếu khi có tranh chấp về phân loại thực vật.',
      'Giúp truy xuất nguồn gốc chính xác của loài nghiên cứu.'
    ],
    relatedTerms: ['Carl Linnaeus', 'Taxonomy', 'GACP-WHO']
  },

  // --- THU HÁI - CHẾ BIẾN - BẢO QUẢN ---
  {
    id: 'dict_hp_1',
    term: 'Quy tắc thu hái Dược liệu theo bộ phận',
    latinOrAlt: 'Harvesting Rules',
    topic: 'harvest-process',
    category: 'Thu hái & Chế biến',
    definition: 'Các thời điểm vàng trong năm/ngày để thu hoạch dược liệu nhằm đạt hàm lượng hoạt chất cao nhất.',
    details: 'Hàm lượng hoạt chất biến đổi theo chu kỳ sinh trưởng của cây. Quy tắc chung: Lá/Ngọn thu hái khi cây quang hợp mạnh trước/bắt đầu ra hoa; Rễ/Củ thu hái cuối thu - đầu đông; Vỏ cây thu hái mùa xuân; Tinh dầu thu hái sáng sớm.',
    keyPoints: [
      'Lá & Thân ngọn: Trước hoặc ngay khi cây bắt đầu chớm nở hoa.',
      'Rễ & Thân rễ: Cuối mùa sinh trưởng (Thu - Đông) khi chất dinh dưỡng dồn xuống củ.',
      'Vỏ thân/Vỏ rễ: Mùa xuân khi nhựa lưu thông mạnh, vỏ dẻo dễ bóc.',
      'Tinh dầu: Sáng sớm trước khi mặt trời mọc để tránh bốc hơi.'
    ],
    relatedTerms: ['GACP-WHO', 'Ổn định dược liệu', 'Hoạt chất']
  },
  {
    id: 'dict_hp_2',
    term: 'Ổn định dược liệu (Stabilization)',
    latinOrAlt: 'Inactivation of Enzymes',
    topic: 'harvest-process',
    category: 'Bảo quản & Enzym',
    definition: 'Kỹ thuật bất hoạt hoàn toàn hoặc tiêu diệt hệ enzym nội sinh trong dược liệu tươi.',
    details: 'Khi cây bị cắt thu hoạch, các enzym (thủy phân, oxidase, polyphenoloxidase) hoạt động mạnh làm phân hủy glycosid, alcaloid và chất màu. Ổn định dược liệu dùng nhiệt cao để biến tính protein enzym.',
    keyPoints: [
      'Phương pháp: Dùng hơi cồn sôi (cồn 95°), hơi nước nhiệt ẩm hoặc sấy nhanh ở nhiệt độ 80-100°C.',
      'Bắt buộc với các dược liệu chứa glycosid dễ bị thủy phân (Digitalis, Phan tả diệp).',
      'Giúp bảo tồn nguyên vẹn dạng glycosid ban đầu của dược liệu tươi.'
    ],
    relatedTerms: ['Enzym', 'Glycosid', 'Sấy đông khô']
  },
  {
    id: 'dict_hp_3',
    term: 'Độ ẩm an toàn của Dược liệu',
    latinOrAlt: 'Safe Moisture Content (<12 - 13%)',
    topic: 'harvest-process',
    category: 'Bảo quản & Enzym',
    definition: 'Giới hạn hàm lượng nước tối đa cho phép trong dược liệu khô để tránh hư hỏng.',
    details: 'Độ ẩm là kẻ thù số 1 của dược liệu. Nếu độ ẩm vượt quá 13%, enzym nội sinh sẽ tái hoạt động, đồng thời nấm mốc (đặc biệt là *Aspergillus flavus* sinh độc tố Aflatoxin) và vi khuẩn phát triển mạnh.',
    keyPoints: [
      'Giới hạn chung: ≤ 12 - 13% (tùy theo quy định từng chuyên luận Dược điển).',
      'Dược liệu chứa đường/mật: ≤ 15%.',
      'Phương pháp xác định: Sấy mất khối lượng do sấy khô, hoặc cất với dung môi bay hơi (Xylen/Toluen).'
    ],
    relatedTerms: ['Bảo quản', 'Aflatoxin', 'Tro toàn phần']
  },
  {
    id: 'dict_hp_4',
    term: 'GACP-WHO',
    latinOrAlt: 'Good Agricultural and Collection Practices',
    topic: 'harvest-process',
    category: 'Quy chế & Tiêu chuẩn',
    definition: 'Thực hành tốt trồng trọt và thu hái dược liệu theo tiêu chuẩn Tổ chức Y tế Thế giới.',
    details: 'Bộ nguyên tắc đảm bảo dược liệu sản xuất ra đạt chất lượng an toàn, đồng đều, đúng chủng loại, không chứa dư lượng thuốc trừ sâu, kim loại nặng, chất độc hại và bảo vệ môi trường sinh thái.',
    keyPoints: [
      'Kiểm soát từ khâu chọn giống, đất trồng, nguồn nước, phân bón, thu hái đến sơ chế.',
      'Yêu cầu truy xuất nguồn gốc (Traceability) rõ ràng cho từng lô dược liệu.',
      'Là điều kiện bắt buộc để dược liệu xuất khẩu và đưa vào sản xuất thuốc công nghiệp.'
    ],
    relatedTerms: ['Dược liệu thô', 'Sách Đỏ', 'Kiểm nghiệm']
  },

  // --- SẮC KÝ & KIỂM NGHIỆM ---
  {
    id: 'dict_ac_1',
    term: 'Sắc ký điểm chỉ (Fingerprint Chromatogram)',
    latinOrAlt: 'Chromatographic Fingerprint Analysis',
    topic: 'analysis-chromatography',
    category: 'Kiểm nghiệm & Sắc ký',
    definition: 'Hình ảnh sắc ký đặc trưng thể hiện tổng thể toàn bộ các thành phần hóa học trong dược liệu.',
    details: 'Thay vì chỉ định lượng 1 chất đơn lẻ, sắc ký điểm chỉ (bằng TLC, HPLC hoặc GC) ghi nhận vân phổ sắc ký của toàn bộ dịch chiết. Mẫu dược liệu thử được đối chiếu trực tiếp với mẫu chuẩn xác thực.',
    keyPoints: [
      'Công cụ số 1 để phát hiện gian lận, trộn lẫn hoặc giả mạo dược liệu.',
      'Đánh giá tính đồng đều chất lượng giữa các lô dược liệu thu hái ở các mùa/vùng khác nhau.',
      'Được Dược điển Mỹ (USP), Châu Âu (EP) và Việt Nam (DDVN V) công nhận rộng rãi.'
    ],
    relatedTerms: ['HPLC', 'TLC', 'Thử tinh khiết']
  },
  {
    id: 'dict_ac_2',
    term: 'Chỉ số tro trong Dược liệu',
    latinOrAlt: 'Ash Values (Total Ash & Acid-Insoluble Ash)',
    topic: 'analysis-chromatography',
    category: 'Kiểm nghiệm & Sắc ký',
    definition: 'Chỉ tiêu kiểm nghiệm phần cặn vô cơ còn lại sau khi nung cháy hoàn toàn dược liệu.',
    details: 'Gồm: (1) Tro toàn phần: cặn vô cơ có sẵn trong cây + đất cát dính ngoài; (2) Tro bất tan trong acid HCl: đánh giá riêng lượng đất, cát, silicat bẩn lẫn vào do làm sạch kém.',
    keyPoints: [
      'Nung ở nhiệt độ 500 - 600°C đến khối lượng không đổi.',
      'Tro bất tan trong acid là chỉ số phản ánh mức độ tinh sạch và vệ sinh khi thu hái.',
      'Giúp phát hiện hành vi cố tình trộn thêm đất cát để tăng trọng lượng dược liệu.'
    ],
    relatedTerms: ['Kiểm nghiệm', 'Thử tinh khiết', 'Dược điển Việt Nam V']
  },
  {
    id: 'dict_ac_3',
    term: 'Sắc ký lớp mỏng (TLC)',
    latinOrAlt: 'Thin Layer Chromatography (TLC / HPTLC)',
    topic: 'analysis-chromatography',
    category: 'Kiểm nghiệm & Sắc ký',
    definition: 'Phương pháp sắc ký lỏng phẳng phân tách chất dựa trên sự phân bố giữa pha tĩnh và pha động.',
    details: 'Pha tĩnh thường là Silica gel G tráng trên bản mỏng nhôm/thủy tinh. Pha động là hỗn hợp dung môi hữu cơ bay lên theo mao dẫn. Bán định tính và định tính dựa trên hệ số dịch chuyển $R_f$ và màu sắc vết.',
    keyPoints: [
      'Hệ số $R_f = \\frac{\\text{Khoảng cách vết chất dịch chuyển}}{\\text{Khoảng cách dung môi dịch chuyển}}$.',
      'Hiện màu bằng đèn UV 254nm, UV 365nm hoặc thuốc thử hiện màu chuyên biệt (Vanillin-Sulfuric, Dragendorff).',
      'Ưu điểm: Rẻ, nhanh, phân tích đồng thời nhiều mẫu trên một bản mỏng.'
    ],
    relatedTerms: ['Sắc ký điểm chỉ', 'HPLC', 'Rf']
  },
  {
    id: 'dict_ac_4',
    term: 'HPLC (Sắc ký lỏng hiệu năng cao)',
    latinOrAlt: 'High-Performance Liquid Chromatography',
    topic: 'analysis-chromatography',
    category: 'Kiểm nghiệm & Sắc ký',
    definition: 'Kỹ thuật sắc ký hiện đại tách, định tính và định lượng chính xác các chất trong hỗn hợp phức tạp.',
    details: 'Pha động lỏng được bơm qua cột sắc ký chứa hạt pha tĩnh kích thước rất nhỏ (3-5 µm) dưới áp suất cao. Kết hợp với các đầu dò UV-Vis, PDA, MS, FLD cho độ nhạy và độ lặp lại cực cao.',
    keyPoints: [
      'Pha đảo (Reversed-phase HPLC - C18): Pha tĩnh không cực, pha động cực (Nước - Acetonitril/Methanol).',
      'Định lượng dựa trên diện tích đỉnh (Peak Area) so với chất chuẩn (Reference Standard).',
      'Tiêu chuẩn vàng trong kiểm nghiệm chất lượng dược liệu và thành phẩm đông dược.'
    ],
    relatedTerms: ['Sắc ký điểm chỉ', 'TLC', 'Chất chuẩn']
  },

  // --- HOẠT CHẤT & DƯỢC LÝ ---
  {
    id: 'dict_cr_1',
    term: 'Glycosid & Độ bền dây nối',
    latinOrAlt: 'Glycosides (O-, S-, N-, C-glycosides)',
    topic: 'compounds-resources',
    category: 'Hoạt chất & Dược lý',
    definition: 'Hợp chất chứa phần đường (Glycon) ngưng tụ với phần không đường (Aglycon/Genin).',
    details: 'Phân loại theo nguyên tử nối: O-glycosid (phổ biến nhất), S-glycosid (chứa lưu huỳnh như Sinigrin), N-glycosid (như Nucleosid), C-glycosid (dây nối C-C trực tiếp giữa đường và khung thơm).',
    keyPoints: [
      'Độ bền thủy phân: C-glycosid > N-glycosid > S-glycosid > O-glycosid.',
      'C-glycosid (như Barbaloin trong Lô hội, Mangiferin trong Lá xoài) bền nhất với acid loãng và enzym.',
      'Phần Aglycon quyết định tác dụng dược lý, phần đường quyết định độ hòa tan và hấp thu.'
    ],
    relatedTerms: ['Aglycon', 'Barbaloin', 'Ổn định dược liệu']
  },
  {
    id: 'dict_cr_2',
    term: 'Coumarin & Tác dụng chống đông máu',
    latinOrAlt: 'Benzo-alpha-pyron derivatives',
    topic: 'compounds-resources',
    category: 'Hoạt chất & Dược lý',
    definition: 'Nhóm hợp chất tự nhiên có khung Benzo-α-pyron, phát quang huỳnh quang mạnh dưới ánh sáng UV.',
    details: 'Đặc điểm hóa học: Bị mở vòng pyron trong môi trường kiềm tạo muối Coumarinat, khi acid hóa sẽ đóng vòng trở lại. Dẫn xuất 4-hydroxycoumarin (Warfarin, Dicoumarol) có tác dụng chống đông máu đối kháng Vitamin K.',
    keyPoints: [
      'Phát huỳnh quang xanh lam hoặc xanh lục rõ rệt dưới tia UV 365nm khi kiềm hóa.',
      'Tác dụng sinh học: Chống đông máu, giãn mạch vành, chống co thắt, kháng khuẩn, chống UV.',
      'Có nhiều trong các họ thực vật: Rutaceae (Bưởi, Cam), Apiaceae (Cần tây, Tiền hồ), Fabaceae.'
    ],
    relatedTerms: ['Warfarin', 'Huỳnh quang', 'Mở vòng pyron']
  },
  {
    id: 'dict_cr_3',
    term: 'Pectin & Phản ứng tạo gel',
    latinOrAlt: 'Polygalacturonic acid polymer',
    topic: 'compounds-resources',
    category: 'Hoạt chất & Dược lý',
    definition: 'Polysaccharid cấu tạo từ chuỗi acid polygalacturonic liên kết alpha-1,4-glycosid.',
    details: 'Pectin có nhiều trong vỏ quả giữa họ Cam chanh (*Rutaceae*), Táo, Củ cải đường. Có khả năng tạo đông (gel) khi có mặt đường (>50%) và acid (pH 3-3.5) hoặc kết tủa đông vón với ion $Ca^{2+}$.',
    keyPoints: [
      'Ứng dụng y học: Chữa tiêu chảy, cầm máu đường tiêu hóa, làm giảm cholesterol máu.',
      'Dùng làm tá dược nhũ hóa, chất làm dầy và tạo gel trong kỹ thuật bào chế.',
      'Chỉ số methoxyl quyết định cơ chế tạo gel của Pectin (High Methoxyl vs Low Methoxyl).'
    ],
    relatedTerms: ['Carbohydrat', 'Inulin', 'Polysaccharid']
  },
  {
    id: 'dict_cr_4',
    term: 'Inulin',
    latinOrAlt: 'Fructosan (GpyFn)',
    topic: 'compounds-resources',
    category: 'Hoạt chất & Dược lý',
    definition: 'Polysaccharid đường fructosan gồm chuỗi fructofuranose kết thúc bằng một đơn vị glucose.',
    details: 'Có nhiều trong các củ họ Cúc (*Asteraceae*) như Bồ công anh, Mộc hương, Cúc vu. Inulin tan trong nước nóng, không bị enzym tiêu hóa của người phân hủy nên đóng vai trò là chất xơ hòa tan (Prebiotic).',
    keyPoints: [
      'Ứng dụng lâm sàng đặc biệt: Dùng tiêm truyền thăm dò và đo độ lọc cầu thận (GFR).',
      'Giúp nuôi dưỡng hệ vi sinh đường ruột có lợi và hỗ trợ điều trị tiểu đường.',
      'Không làm tăng đường huyết do không bị alpha-amylase thủy phân.'
    ],
    relatedTerms: ['Pectin', 'Carbohydrat', 'Độ lọc cầu thận']
  },
  {
    id: 'dict_cr_5',
    term: 'Biopiracy (Cướp sinh học) & CITES',
    latinOrAlt: 'Convention on International Trade in Endangered Species',
    topic: 'compounds-resources',
    category: 'Quy chế & Tiêu chuẩn',
    definition: 'Hành vi thương mại hóa và đăng ký bằng sáng chế tài nguyên sinh học mà không chia sẻ lợi ích.',
    details: 'Biopiracy xảy ra khi các tập đoàn nước ngoài lấy gen cây thuốc và tri thức bản địa của các nước đang phát triển để đăng ký độc quyền. Công ước CITES điều chỉnh thương mại quốc tế bảo vệ các loài nguy cấp.',
    keyPoints: [
      'Yêu cầu tuân thủ Nghị định thư Nagoya về truy xuất nguồn gốc và chia sẻ lợi ích công bằng (ABS).',
      'Bảo vệ quyền sở hữu trí tuệ đối với tri thức y học dân gian bản địa.',
      'CITES Phụ lục I cấm hoàn toàn thương mại quốc tế các loài dược liệu cực kỳ nguy cấp.'
    ],
    relatedTerms: ['Sách Đỏ', 'GACP-WHO', 'Tài nguyên sinh học']
  },

  // =========================================================================
  // --- CÁC THUẬT NGỮ GIÁO TRÌNH ĐẠI CƯƠNG DƯỢC LIỆU HỌC (DCQ2022) ---
  // =========================================================================
  {
    id: 'dict_dc_seydler_schmidt',
    term: 'J.A. Schmidt & C.A. Seydler',
    latinOrAlt: '1811 (Lehrbuch der Materia Medica) & 1815 (Analecta Pharmacognostica)',
    topic: 'daicuong',
    category: 'Lịch sử Y Dược Thế giới',
    definition: 'Hai nhà khoa học đầu tiên đề xuất và hệ thống hóa thuật ngữ Pharmacognosy trên thế giới.',
    details: 'J.A. Schmidt (1811) dùng từ "Pharmacognosis" trong sách giáo khoa Materia Medica tại Vienna. Sau đó C.A. Seydler (1815) dùng danh xưng "Analecta Pharmacognostica" trong luận án tại Halle (Đức), chính thức khai sinh tên gọi môn học.',
    keyPoints: [
      'Gốc từ Hy Lạp: Pharmakon (Thuốc) + Gnosis (Tri thức / Sự hiểu biết).',
      'Đánh dấu bước ngoặt phân định ranh giới chuyên ngành Dược liệu học.'
    ],
    relatedTerms: ['Pharmacognosy', 'Physiopharmacognosy', 'Wasicki']
  },
  {
    id: 'dict_dc_physio',
    term: 'Physiopharmacognosy (Wasicki)',
    latinOrAlt: 'Tự nhiên học dược liệu (Physio = Thiên nhiên)',
    topic: 'daicuong',
    category: 'Khái niệm & Định nghĩa',
    definition: 'Thuật ngữ do Wasicki đề xuất chỉ môn học nghiên cứu về các loại thuốc có nguồn gốc từ tự nhiên.',
    details: 'Wasicki đề xuất danh xưng này để nhấn mạnh bản chất của môn học là nghiên cứu hoạt chất sinh học tự nhiên, phân biệt rạch ròi với ngành Hóa dược (nghiên cứu phân tử tổng hợp nhân tạo mới).',
    keyPoints: [
      'Được coi là danh xưng chính xác nhất về mặt học thuật của Dược liệu học.',
      'Bao hàm cả thực vật, động vật, vi sinh vật và sinh vật biển.'
    ],
    relatedTerms: ['Pharmacognosy', 'Pharmaceutisch Biologie']
  },
  {
    id: 'dict_dc_quinta_essentia',
    term: 'Quinta Essentia (Chất tinh túy - Paracelsus)',
    latinOrAlt: 'Học thuyết Paracelsus (1493 - 1541)',
    topic: 'daicuong',
    category: 'Lịch sử Y Dược Thế giới',
    definition: 'Khái niệm tiền đề của Hoạt chất (Active Principle) trong cây thuốc do Paracelsus đề xướng.',
    details: 'Paracelsus khẳng định trong một cây thuốc chỉ có một lượng rất nhỏ là chất tinh túy mang tác dụng trị liệu ("Quinta essentia"), phần còn lại là tạp chất. Ông cổ xúy việc chiết xuất hoạt chất và dùng độc vị (1 bệnh - 1 thuốc) thay vì bài thuốc hỗn tạp.',
    keyPoints: [
      'Đặt nền móng cho Hóa Dược và công nghệ chiết xuất hoạt chất tinh khiết.',
      'Được Sertürner chứng minh bằng thực nghiệm qua việc phân lập Morphine năm 1806.'
    ],
    relatedTerms: ['Paracelsus', 'Morphine', 'Sertürner']
  },
  {
    id: 'dict_dc_serturner',
    term: 'Friedrich Sertürner (1806)',
    latinOrAlt: 'Dược sĩ người Đức (1783 – 1841)',
    topic: 'daicuong',
    category: 'Lịch sử Y Dược Thế giới',
    definition: 'Nhà khoa học đầu tiên phân lập thành công Morphine tinh khiết từ nhựa cây thuốc phiện (*Papaver somniferum*).',
    details: 'Thành tựu năm 1806 của Sertürner là mốc son chói lọi mở đầu kỷ nguyên phân lập các hợp chất tự nhiên có tính kiềm (Alkaloid), khai sinh ngành Hóa Dược và chiết xuất hiện đại.',
    keyPoints: [
      'Chứng minh trọn vẹn học thuyết Quinta essentia của Paracelsus.',
      'Mở đường phân lập Quinine (1820), Strychnine (1818), Caffeine (1819), Atropine (1831).'
    ],
    relatedTerms: ['Morphine', 'Quinta Essentia', 'Alkaloid']
  },
  {
    id: 'dict_dc_cao_chiet',
    term: 'Cao chiết toàn phần & Cao tinh chế',
    latinOrAlt: 'Crude Extract vs Standardized Purified Extract',
    topic: 'daicuong',
    category: 'Chiết xuất & Chế phẩm',
    definition: 'Các cấp độ tinh sạch của sản phẩm chiết xuất từ dược liệu thô.',
    details: 'Cao toàn phần chứa 40-60% dược chất lẫn tạp tự nhiên. Cao tinh chế (hoạt chất toàn phần) đã loại tạp đại phân tử, chuẩn hóa nồng độ nhóm hoạt chất chính (như cao Bạch quả Ginkgo biloba).',
    keyPoints: [
      'Cao tinh chế mang lại hiệu ứng hiệp đồng sinh học, giảm độc tính và tác dụng êm dịu hơn đơn chất tinh khiết.',
      'Là xu hướng sản xuất thuốc dược liệu chuẩn hóa hàng đầu hiện nay.'
    ],
    relatedTerms: ['Hoạt chất tinh khiết', 'Ginkgo biloba', 'Chiết xuất']
  },
  {
    id: 'dict_dc_fingerprint',
    term: 'Sắc ký Điểm chỉ (Chromatographic Fingerprint)',
    latinOrAlt: 'Bản đồ sắc ký đồ HPLC / TLC chuẩn',
    topic: 'analysis-chromatography',
    category: 'Sắc ký & Kiểm nghiệm',
    definition: 'Kỹ thuật so sánh toàn bộ phổ sắc ký phức tạp của mẫu thử với mẫu dược liệu đối chiếu chuẩn.',
    details: 'Khi không có chất chuẩn đơn lẻ hoặc đối với bài thuốc đông y đa thành phần, HPLC fingerprint cung cấp "dấu vân tay hóa học" toàn diện giúp định danh chính xác loài, nguồn gốc địa lý và phát hiện giả mạo.',
    keyPoints: [
      'Ứng dụng tiêu biểu: Phân biệt Sâm Ngọc Linh thật với Tam thất hoang / Sâm Tây Bắc.',
      'Tiêu chuẩn bắt buộc trong kiểm tra chất lượng dược liệu quốc tế.'
    ],
    relatedTerms: ['HPLC', 'Định danh dược liệu', 'Sâm Ngọc Linh']
  },
  {
    id: 'dict_dc_ccc',
    term: 'Sắc ký Phân bố Ngược dòng (CCC)',
    latinOrAlt: 'Counter-Current Chromatography (Lỏng - Lỏng)',
    topic: 'analysis-chromatography',
    category: 'Sắc ký & Kiểm nghiệm',
    definition: 'Kỹ thuật sắc ký điều chế mà cả pha tĩnh và pha động đều ở trạng thái lỏng không hòa lẫn.',
    details: 'Khác với sắc ký cột dùng Silica gel, CCC không dùng chất mang rắn nên tránh được hiện tượng hấp phụ không thuận nghịch, không làm biến tính hoạt chất, hiệu suất thu hồi gần 100% và chi phí dung môi rất rẻ.',
    keyPoints: [
      'Chuyên dùng trong phân lập và điều chế hoạt chất tự nhiên độ sạch cao.',
      'Là phương pháp chiết tách phân đoạn tinh sạch kinh tế nhất trong nghiên cứu dược liệu.'
    ],
    relatedTerms: ['Sắc ký điều chế', 'HPLC', 'Phân lập']
  },
  {
    id: 'dict_dc_plasmodesmata',
    term: 'Kênh Bào Tương (Plasmodesmata)',
    latinOrAlt: 'Cầu sinh chất liên thông tế bào thực vật',
    topic: 'harvest-process',
    category: 'Chiết xuất & Tế bào',
    definition: 'Các vi kênh xuyên qua vách tế bào cellulose liên kết tế bào chất giữa các tế bào thực vật kề nhau.',
    details: 'Trong quá trình chiết xuất và thẩm tích, hoạt chất trong không bào muốn đi ra ngoài dung môi phải di chuyển xuyên qua các kênh bào tương này. Kích thước kênh quyết định tốc độ khuếch tán của phân tử chất tan.',
    keyPoints: [
      'Kênh càng nhỏ, vách tế bào càng dày thì quá trình chiết càng chậm.',
      'Là cấu trúc giải thích tại sao tế bào nguyên vẹn vẫn có thể giải phóng hoạt chất ra ngoài.'
    ],
    relatedTerms: ['Thẩm tích', 'Chiết xuất', 'Không bào']
  },
  {
    id: 'dict_dc_percolation',
    term: 'Kỹ thuật Ngấm Kiệt (Percolation)',
    latinOrAlt: 'Chiết động liên tục ngược dòng',
    topic: 'harvest-process',
    category: 'Chiết xuất & Chế phẩm',
    definition: 'Phương pháp chiết xuất động liên tục bằng cách cho dung môi chảy qua khối dược liệu trong bình ngấm kiệt.',
    details: 'Vận hành theo nguyên tắc vàng: Dung môi mới tiếp xúc với dược liệu cũ (đã chiết gần hết); Dung môi cũ tiếp xúc với dược liệu mới. Nhờ đó luôn duy trì gradient nồng độ chênh lệch tối đa, tận thu kiệt hoạt chất và tiết kiệm dung môi.',
    keyPoints: [
      'Ưu việt hơn hẳn phương pháp ngâm tĩnh gián đoạn.',
      'Dịch chiết đầu rất đậm đặc, giảm năng lượng cô đặc dung môi.'
    ],
    relatedTerms: ['Chiết ngâm', 'Dung môi', 'Dịch chiết']
  },
  {
    id: 'dict_dc_in_situ_ex_situ',
    term: 'Bảo tồn In Situ & Ex Situ',
    latinOrAlt: 'Bảo tồn tại chỗ (In situ) & Bảo tồn chuyển chỗ (Ex situ)',
    topic: 'compounds-resources',
    category: 'Tài nguyên & Bảo tồn',
    definition: 'Hai chiến lược bảo tồn đa dạng sinh học và nguồn gen cây thuốc cốt lõi.',
    details: 'In situ bảo tồn các loài ngay tại môi trường tự nhiên (Vườn quốc gia, Khu dự trữ sinh quyển) giúp duy trì sự tiến hóa tự nhiên. Ex situ bảo tồn tại Vườn thực vật, Ngân hàng gen, Ngân hàng hạt giống giúp dễ quản lý và nhân giống.',
    keyPoints: [
      'Bảo tồn On farm: Hình thức bảo tồn bổ trợ tại trang trại đồng ruộng nông hộ.',
      'Việt Nam có >5.000 loài cây thuốc cần được ưu tiên phân loại bảo tồn.'
    ],
    relatedTerms: ['Đa dạng sinh học', 'Sách Đỏ', 'CITES']
  },
  {
    id: 'dict_dc_ethnopharmacology',
    term: 'Dược lý Dân tộc học (Ethnopharmacology)',
    latinOrAlt: 'Khoa học liên ngành Y học dân gian & Dược lý hiện đại',
    topic: 'compounds-resources',
    category: 'Tài nguyên & Bảo tồn',
    definition: 'Môn khoa học liên ngành nghiên cứu các kinh nghiệm sử dụng cây cỏ chữa bệnh của các cộng đồng dân tộc bản địa.',
    details: 'Ethnopharmacology khảo sát, thu thập bài thuốc dân gian, sau đó phân lập định danh hoạt chất và chứng minh tác dụng bằng thực nghiệm lâm sàng hiện đại. Đi kèm với tuyên ngôn Belem và Manila bảo vệ quyền sở hữu trí tuệ của người bản địa.',
    keyPoints: [
      'Ví dụ điển hình: Bài thuốc tắm sau sinh của phụ nữ người Dao đỏ, cây Bằng đắng chữa lành vết thương.',
      'Ngăn chặn nạn cướp sinh học (Biopiracy) của các tập đoàn đa quốc gia.'
    ],
    relatedTerms: ['Biopiracy', 'Tuyên ngôn Belem', 'Kinh nghiệm dân gian']
  }
];
