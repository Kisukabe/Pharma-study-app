import { StudyChapter } from '../types';

export const STUDY_CHAPTERS: StudyChapter[] = [
  {
    id: 'chap-1',
    chapterNumber: 1,
    title: 'Định Nghĩa & Đối Tượng Nghiên Cứu',
    subtitle: 'Khái niệm Pharmacognosy, nguồn gốc sinh học, phân biệt cây thuốc & dạng chiết xuất',
    iconName: 'GraduationCap',
    pageRange: 'Trang 1 – 4',
    relatedTopicId: 'daicuong',
    overview: 'Nắm vững nguồn gốc từ nguyên của môn học, phân biệt định nghĩa rộng và hẹp của Dược liệu học, các nguồn nguyên liệu sinh học (thực vật, động vật, vi sinh vật, biển) và thang bậc sản phẩm từ cao toàn phần đến hoạt chất tinh khiết.',
    keyPoints: [
      'Từ nguyên: Pharmakon (Thuốc) + Gnosis/Nosy (Hiểu biết / Tri thức). Tên đúng nhất: Physiopharmacognosy (Wasicki).',
      'Định nghĩa hẹp (trọng tâm hiện nay): Môn khoa học nghiên cứu về nguyên liệu làm thuốc có nguồn gốc SINH HỌC.',
      'Phân biệt: Cây thuốc (còn sống) vs Dược liệu (bộ phận/sản phẩm đã thu hái, phơi khô/tươi).',
      'Thang bậc chiết xuất: Cao toàn phần (40-60% dược chất + tạp) → Cao tinh chế (hoạt chất toàn phần) → Hoạt chất tinh khiết (1 chất đơn lẻ).',
      'Xu hướng hiện đại: Có xu hướng quay lại sử dụng cao chiết toàn phần/tinh chế nhờ tác dụng tương hỗ, giảm tác dụng phụ và tiết kiệm chi phí.'
    ],
    sections: [
      {
        id: 'sec-1-1',
        title: '1. Định nghĩa & Lịch sử tên gọi Dược liệu học',
        content: [
          'Dược liệu (Materia Medica / Matière Médicale): Có nghĩa là nguyên liệu ban đầu dùng để làm thuốc.',
          'Từ "Pharmacognosy" xuất phát từ tiếng Hy Lạp: "Pharmakon" là thuốc, "Gnosis" là tri thức / sự hiểu biết.',
          'Các nhà khoa học đề xuất danh xưng trong lịch sử:',
          '• J.A. Schmidt (1811): Đề xuất thuật ngữ "Pharmacognosis" trong tác phẩm Lehrbuch der Materia Medica.',
          '• C.A. Seydler (1815): Đề xuất tên tác phẩm "Analecta Pharmacognostica".',
          '• Wasicki: Đề xuất danh xưng "Physiopharmacognosy" ("Physio" nghĩa là từ thiên nhiên) nhằm phân biệt thuốc có nguồn gốc tự nhiên với hóa dược tổng hợp mới.',
          '• Khái niệm "Pharmaceutisch Biologie": Sinh học dược phẩm (thuốc từ sinh vật tự nhiên).'
        ],
        subSections: [
          {
            title: 'Hai định nghĩa cốt lõi của Dược liệu học',
            items: [
              'Định nghĩa rộng: Môn khoa học nghiên cứu về các nguyên liệu làm thuốc có nguồn gốc tự nhiên (bao gồm cả vô cơ và sinh học). Ví dụ: Chloramphenicol xưa tìm thấy từ xạ khuẩn tự nhiên, dù nay tổng hợp vẫn thuộc phạm trù nghiên cứu; còn Digoxin nếu bị người vứt ra rừng cây hấp thụ thì không tính là nguồn tự nhiên của cây đó.',
              'Định nghĩa hẹp (hướng nghiên cứu chủ yếu hiện nay): Môn khoa học nghiên cứu về các nguyên liệu làm thuốc có nguồn gốc SINH HỌC (vì nguồn vô cơ chiếm tỉ lệ rất nhỏ).'
            ],
            important: true
          }
        ]
      },
      {
        id: 'sec-1-2',
        title: '2. Đối tượng nghiên cứu & Phân biệt khái niệm',
        content: [
          'Đối tượng sinh học gồm 4 nguồn chính: Thực vật (cung cấp nhiều hoạt chất nhất cho y học hiện đại), Động vật (hormone như Insulin, dịch chiết), Vi sinh vật (kháng sinh như Penicillin), Tài nguyên biển (san hô, rong tảo, hải sâm, vi sinh vật biển).',
          'Hương liệu & Mỹ phẩm: Mỹ phẩm ngày nay không chỉ che khuyết điểm mà còn tác động sinh lý lên da và trở thành một phần dược phẩm (kem làm trắng, nước súc miệng sát khuẩn, kem trị mụn).',
          'Cây độc, dị ứng & diệt côn trùng: Không có ranh giới tuyệt đối giữa cây thuốc và cây độc – đúng liều là thuốc, quá liều thành chất độc.'
        ],
        notes: [
          'Cây thuốc: Cơ thể thực vật còn sống, cung cấp 1 hoặc nhiều bộ phận dùng làm thuốc.',
          'Dược liệu: Bộ phận cây, chất tiết (nhựa, gôm), tinh dầu, hoặc hoạt chất đã được thu hái, sơ chế/chế biến từ cây thuốc.'
        ]
      },
      {
        id: 'sec-1-3',
        title: '3. Các bậc sản phẩm chiết xuất từ Dược liệu',
        content: [
          'Trong sản xuất và nghiên cứu dược liệu, sản phẩm chiết xuất được phân thành 3 mức độ tinh sạch:',
          '1. Cao chiết toàn phần: Dịch chiết sau khi cô bớt dung môi, chứa 40 - 60% dược chất cùng với các chất tan phụ trợ tự nhiên.',
          '2. Cao chiết tinh chế (Hoạt chất toàn phần): Đã loại bỏ phần lớn tạp chất, chỉ giữ lại một hoặc một vài nhóm hoạt chất chính (Ví dụ: Cao bạch quả Ginkgo biloba chỉ chuẩn hóa flavonoid, diterpen ginkgolid và bilobalid).',
          '3. Hoạt chất tinh khiết: Đơn chất hóa học được phân lập và kết tinh độ tinh khiết cao (>95-99%) như Morphine, Quinine, Artemisinin.'
        ],
        notes: [
          'Nghịch lý hoạt chất tinh khiết: Đôi khi hoạt chất tinh khiết có tác dụng đơn lẻ không êm dịu hoặc dễ gây kháng thuốc bằng cao chiết chuẩn hóa (do mất đi các chất hiệp đồng sinh học và chất chống oxy hóa đi kèm).'
        ]
      }
    ],
    comparisons: [
      {
        title: 'Bảng So Sánh Các Dạng Dược Liệu Chiết Xuất',
        headers: ['Đặc điểm', 'Cao chiết toàn phần', 'Cao chiết tinh chế', 'Hoạt chất tinh khiết'],
        rows: [
          ['Thành phần', 'Dược chất (40-60%) + tạp chất tự nhiên', 'Nhóm hoạt chất chính (đã loại bớt tạp)', 'Đơn chất tinh khiết (1 hợp chất duy nhất)'],
          ['Tác dụng sinh học', 'Hiệp đồng tương hỗ, êm dịu, ít tác dụng phụ', 'Rõ rệt theo nhóm hoạt chất chuẩn hóa', 'Mạnh, đặc hiệu, chỉ số trị liệu hẹp'],
          ['Ví dụ điển hình', 'Chiết flavonoid từ vỏ bưởi lẫn chất tan khác', 'Cao chuẩn hóa Ginkgo biloba (Bạch quả)', 'Morphine, Quinine, Artemisinin, Digoxin'],
          ['Chi phí sản xuất', 'Thấp nhất, quy trình đơn giản', 'Trung bình, công nghệ màng/sắc ký', 'Rất cao do tốn dung môi, năng lượng phân lập']
        ]
      }
    ],
    quickReview: [
      {
        question: 'Ai là người đầu tiên đề xuất thuật ngữ "Pharmacognosis"?',
        answer: 'J.A. Schmidt vào năm 1811 trong cuốn Lehrbuch der Materia Medica.',
        importantTag: 'Tác giả'
      },
      {
        question: 'Thuật ngữ "Physiopharmacognosy" do ai đề xướng và mang ý nghĩa gì?',
        answer: 'Do Wasicki đề xuất, mang nghĩa "Hiểu biết về thuốc có nguồn gốc tự nhiên" để phân biệt với thuốc hóa dược tổng hợp.',
        importantTag: 'Khái niệm'
      },
      {
        question: 'Phân biệt ngắn gọn giữa "Cây thuốc" và "Dược liệu"?',
        answer: 'Cây thuốc là cây còn sống trong tự nhiên/vườn trồng; Dược liệu là bộ phận hoặc sản phẩm đã lấy ra từ cây thuốc (khô hoặc tươi) dùng cho y học.',
        importantTag: 'Cốt lõi'
      }
    ]
  },
  {
    id: 'chap-2',
    chapterNumber: 2,
    title: 'Lịch Sử Phát Triển Dược Liệu Học',
    subtitle: 'Nền y học cổ đại phương Đông, phương Tây và di sản Y Dược học cổ truyền Việt Nam',
    iconName: 'Award',
    pageRange: 'Trang 5 – 9',
    relatedTopicId: 'daicuong',
    overview: 'Hành trình lịch sử từ thời tiền sử Neandertan đến các nền văn minh Ai Cập, Lưỡng Hà, Ấn Độ, Hy Lạp - La Mã; các bước ngoặt của Paracelsus và Sertürner; cùng truyền thống Nam y vẻ vang của Thiền sư Tuệ Tĩnh và Hải Thượng Lãn Ông Lê Hữu Trác.',
    keyPoints: [
      'Thời cổ đại: Người Neandertan (60.000 TCN) chôn xác cùng phấn hoa cây thuốc; Ai Cập cổ đại với bản thảo Papyrus Ebers và danh y Imhotep.',
      'Ấn Độ: Hệ thống Ayurveda (Khoa học sự sống) với Charaka (500 phương thuốc) và Susruta (750 cây thuốc).',
      'Hy Lạp & La Mã: Hippocrates (ông tổ Y học phương Tây), Theophrastus (lịch sử thực vật), Dioscorides ("De Materia Medica" mô tả >600 cây thuốc), Galen (Galenica - cồn thuốc, siro).',
      'Paracelsus (1493 - 1541): Đề xướng học thuyết "Quinta essentia" (Chất tinh túy trong cây cỏ), mở đường cho việc chiết tách hoạt chất đơn lẻ.',
      'Friedrich Sertürner (1806): Phân lập thành công Morphine từ nhựa thuốc phiện, chứng minh hoàn toàn thuyết Quinta essentia.',
      'Việt Nam: Thời Hồng Bàng (nhai trầu, vối, gừng tỏi), An Dương Vương (chế tên độc); Nhà Lý (Ty Thái y), Nhà Trần (Viện Thái y), Nhà Lê (Tế sinh đường).',
      'Tuệ Tĩnh (thế kỷ 14): Tuyên ngôn "Nam dược trị Nam nhân" – Ông tổ thực sự sáng lập nền y dược học dân tộc Việt Nam.',
      'Lê Hữu Trác (1720 - 1791): Bộ sách "Hải Thượng Y Tông Tâm Lĩnh" (28 tập, 66 quyển) – Người truyền bá vĩ đại nền Nam y.'
    ],
    sections: [
      {
        id: 'sec-2-1',
        title: '1. Nguồn gốc & Thu thập kiến thức y học cổ đại',
        content: [
          'Bằng chứng tiền sử: Khảo cổ học phát hiện di cốt người Neandertan (60.000 TCN) được chôn cùng lượng lớn phấn hoa của các cây thuốc (cúc, cẩm chướng, mã đề...). Cư dân vùng hồ Thụy Sĩ (5.000 - 6.000 TCN) cũng có tục lệ tương tự.',
          'Mối liên hệ giữa Y và Dược: Ban đầu Y và Dược hòa làm một (Thầy thuốc tự hái cây, tự sắc thuốc). Ngành Dược chính thức tách độc lập khỏi Y khoa vào khoảng năm 1700.',
          'Cách thu thập kiến thức: Xa xưa dựa trên kinh nghiệm ngẫu nhiên và phép "thử - sai" (thử đúng thì sống, thử độc thì chết). Ngày nay dựa trên thực nghiệm khoa học hiện đại từ tế bào, phân tử (Dược liệu học phân tử) đến thử nghiệm in vitro, in vivo.'
        ],
        notes: [
          'Dược liệu học là môn học có lịch sử thành lập lâu đời nhất của ngành Dược.'
        ]
      },
      {
        id: 'sec-2-2',
        title: '2. Các nền Y Dược học cổ đại trên thế giới',
        content: [
          'Ai Cập cổ đại: Bản thảo Papyrus (nổi tiếng nhất là Papyrus Ebers năm 1550 TCN), thuật ướp xác bằng tinh dầu/nhựa thơm, danh y Imhotep được tôn sùng là thần y.',
          'Lưỡng Hà (Assyria - Babylon): Nền văn minh Sumerian khắc đơn thuốc trên đất sét nung, bộ luật Hammurabi, thư viện vua Asshurbanipal lưu giữ hàng ngàn bảng y dược thảo mộc.',
          'Ấn Độ cổ đại: Nền y học Ayurveda ("Khoa học về sự sống"), hai danh y huyền thoại là Charaka (tác phẩm ghi 500 phương thuốc) và Susruta (mô tả 750 cây thuốc, bậc thầy phẫu thuật).',
          'Trung Hoa cổ đại: Thần Nông (Thần Nông Bản Thảo Kinh), Trương Trọng Cảnh (Thương Hàn Luận), Lý Thời Trân (Bản Thảo Cương Mục - 1.892 vị thuốc).',
          'Hy Lạp & La Mã: Hippocrates (460-377 TCN, Ông tổ Y học phương Tây, thuyết 4 thể dịch), Theophrastus (Lịch sử thực vật), Dioscorides (Bác sĩ quân đội La Mã, tác giả "De Materia Medica" 5 tập), Galen (người sáng lập dạng thuốc Galenica bào chế từ thảo dược).'
        ]
      },
      {
        id: 'sec-2-3',
        title: '3. Bước ngoặt Phương Tây: Thuyết Quinta Essentia & Phân lập hoạt chất',
        content: [
          'Paracelsus (1493 - 1541): Thầy thuốc người Thụy Sĩ nổi loạn, bác bỏ giáo điều Galen. Ông tuyên bố trong thảo dược chỉ có một phần nhỏ có tác dụng trị liệu thực sự gọi là "Quinta essentia" (Chất tinh túy / Hoạt chất), phần còn lại là bã vô bổ. Ông đề xướng chiết xuất hoạt chất tinh khiết và dùng độc vị.',
          'Karl Wilhelm Scheele: Dược sĩ Thụy Điển phân lập hàng loạt acid hữu cơ tinh khiết từ thực vật (acid citric, acid tartaric, acid oxalic, acid malic...).',
          'Friedrich Sertürner (1806): Dược sĩ người Đức phân lập thành công MORPHINE từ nhựa thuốc phiện. Đây là mốc son chói lọi chứng minh giả thuyết của Paracelsus, mở ra kỷ nguyên phân lập các alkaloid (Quinine, Strychnine, Atropine, Caffeine...) và khai sinh ngành Hóa Dược hiện đại.'
        ]
      },
      {
        id: 'sec-2-4',
        title: '4. Y Dược học Cổ truyền Việt Nam',
        content: [
          'Thời cổ xưa: Dân tộc ta có truyền thống dùng thuốc lâu đời từ thời Hồng Bàng (nhai trầu bảo vệ răng miệng, uống chè vối dễ tiêu hóa, dùng gừng hành tỏi phòng cảm cúm). Thời An Dương Vương biết tẩm độc thảo mộc vào mũi tên nỏ.',
          'Thời phong kiến: Nhà Lý lập Ty Thái y và giao lưu y dược với Tống Huy Tông; Nhà Trần lập Viện Thái y, tổ chức thu hái trồng trọt thuốc nam phục vụ quân dân chiến thắng 3 lần kháng chiến chống Nguyên Mông; Nhà Lê lập Tế sinh đường chăm sóc sức khỏe cho dân nghèo.',
          'Thiền sư Tuệ Tĩnh (Nguyễn Bá Tĩnh, thế kỷ 14): Tác giả "Nam Dược Thần Hiệu" và "Hồng Nghĩa Giác Tư Y Thư". Xướng xuất tuyên ngôn bất hủ "Nam dược trị Nam nhân" (Thuốc Nam chữa người Nam). Ông được coi là người thực sự đặt nền móng cho nền y dược học dân tộc.',
          'Hải Thượng Lãn Ông (Lê Hữu Trác, 1720 - 1791): Tác giả bộ bách khoa toàn thư y học "Hải Thượng Y Tông Tâm Lĩnh" (28 tập, 66 quyển). Ông là người kế thừa xuất sắc tư tưởng Nam dược và là người truyền bá, hệ thống hóa y học cổ truyền Việt Nam vĩ đại nhất.'
        ],
        notes: [
          'Tuệ Tĩnh tương đương với Imhotep của Ai Cập (người sáng lập), còn Lê Hữu Trác tương đương với Hippocrates của Hy Lạp (người hệ thống và truyền bá y đức sâu rộng).'
        ]
      }
    ],
    comparisons: [
      {
        title: 'So Sánh Đóng Góp Của Hai Đại Danh Y Dân Tộc',
        headers: ['Tiêu chí', 'Thiền Sư Tuệ Tĩnh (Nguyễn Bá Tĩnh)', 'Hải Thượng Lãn Ông (Lê Hữu Trác)'],
        rows: [
          ['Thời đại', 'Thế kỷ XIV (Thời nhà Trần)', 'Thế kỷ XVIII (1720 – 1791, Thời Hậu Lê)'],
          ['Tác phẩm chính', 'Nam Dược Thần Hiệu (11 quyển), Hồng Nghĩa Giác Tư Y Thư', 'Hải Thượng Y Tông Tâm Lĩnh (28 tập, 66 quyển)'],
          ['Tư tưởng cốt lõi', '"Nam dược trị Nam nhân" – Dùng cây cỏ bản địa trị bệnh cho người phương Nam', 'Kết hợp biện chứng luận trị Đông y với thực tiễn thuốc Nam, đề cao Y đức ("Y huấn cách ngôn")'],
          ['Vị thế lịch sử', 'Người sáng lập thực sự của nghề thuốc Nam Việt Nam', 'Người hệ thống hóa và truyền bá y học cổ truyền vĩ đại nhất']
        ]
      }
    ],
    quickReview: [
      {
        question: 'Tác giả của bộ sách y học "De Materia Medica" là ai?',
        answer: 'Dioscorides (bác sĩ quân y La Mã thế kỷ I), mô tả hơn 600 vị thuốc.',
        importantTag: 'Nhân vật'
      },
      {
        question: 'Ai là người đầu tiên phân lập thành công Morphine từ nhựa thuốc phiện?',
        answer: 'Friedrich Sertürner vào năm 1806, chứng minh học thuyết Quinta essentia của Paracelsus.',
        importantTag: 'Lịch sử'
      },
      {
        question: 'Giải thích ý nghĩa câu nói "Nam dược trị Nam nhân"?',
        answer: 'Do Thiền sư Tuệ Tĩnh xướng xuất: Người phương Nam sống trong thổ nhưỡng, khí hậu phương Nam thì dùng cây cỏ thuốc Nam sẽ tương thích và chữa bệnh hiệu quả nhất.',
        importantTag: 'Y học Việt Nam'
      }
    ]
  },
  {
    id: 'chap-3',
    chapterNumber: 3,
    title: 'Vai Trò & Xu Hướng Sử Dụng Thuốc Thiên Nhiên',
    subtitle: 'Vị thế dược liệu trong lâm sàng, xu hướng phòng bệnh và phân loại pháp lý thuốc',
    iconName: 'Layers',
    pageRange: 'Trang 10 – 12',
    relatedTopicId: 'daicuong',
    overview: 'Khám phá dữ liệu thống kê vai trò của dược liệu trên toàn cầu, lý do xu hướng quay về thiên nhiên, tác dụng hiệp đồng của hỗn hợp tự nhiên, sự khác biệt pháp lý giữa Thuốc Dược Liệu vs Thuốc Cổ Truyền vs Thực Phẩm Chức Năng.',
    keyPoints: [
      'Thống kê toàn cầu: 80% dân số thế giới phụ thuộc vào thuốc tự nhiên trong chăm sóc sức khỏe ban đầu; Trên 50% thuốc lâm sàng có nguồn gốc tự nhiên; 12/25 dược chất bán chạy nhất thế giới bắt nguồn từ thiên nhiên.',
      'Xu hướng thời đại: Từ 1940-1980 chuộng thuốc tổng hợp vì tác dụng nhanh, nhưng sau đó bộc lộ nhiều tác dụng phụ/di chứng lâu dài. Hiện nay xu hướng "Quay về thiên nhiên" và "Phòng bệnh hơn chữa bệnh" lên ngôi.',
      'Hiệp đồng tác dụng trong cao chiết: Ví dụ phối hợp Artemisinin với Flavonoid tự nhiên trong cây Thanh hao hoa vàng làm tăng hoạt tính diệt ký sinh trùng sốt rét hơn dùng riêng lẻ Artemisinin.',
      'Phân loại theo Luật Dược 2016: Thuốc Dược liệu (chứng minh bằng dược lý hiện đại) vs Thuốc Cổ truyền (theo lý luận YHCT) vs TPCN (chưa chứng minh đầy đủ theo YHHĐ nhưng hỗ trợ sức khỏe).',
      'Tiềm năng sàng lọc: Sàng lọc 1.000 mẫu thảo dược tương đương sàng lọc 5.000 - 10.000 chất tổng hợp hóa học, rút ngắn thời gian và chi phí R&D thuốc mới.'
    ],
    sections: [
      {
        id: 'sec-3-1',
        title: '1. Vị thế của Dược liệu trong Y tế Thế giới & Lâm sàng',
        content: [
          'Thống kê của Tổ chức Y tế Thế giới (WHO): Khoảng 80% dân số ở các nước đang phát triển dựa vào thảo dược thiên nhiên để điều trị các bệnh thông thường ban đầu.',
          'Phân bố nguồn gốc thuốc lâm sàng hiện đại:',
          '• >50% thuốc đang lưu hành có nguồn gốc trực tiếp từ thiên nhiên.',
          '• 25% là hóa chất tổng hợp toàn phần thuần túy (ví dụ: kháng sinh Quinolone).',
          '• 25% là thuốc bán tổng hợp lấy cảm hứng từ cấu trúc phân tử tự nhiên (ví dụ: các dẫn chất 4-aminoquinoline hoặc 8-aminoquinoline phát triển từ Quinine).',
          '12 trong số 25 loại thuốc bán chạy nhất (best-selling drugs) toàn cầu là các hoạt chất có nguồn gốc sinh học tự nhiên.'
        ]
      },
      {
        id: 'sec-3-2',
        title: '2. Xu hướng chuyển dịch & Tác dụng hiệp đồng sinh học',
        content: [
          'Lý do quay về với thiên nhiên: Các hợp chất chuyển hóa thứ cấp trong thực vật được tổng hợp trong tế bào sống nên có tính tương thích sinh học cao với cơ thể người, ít gây sốc phản vệ và ít tích lũy độc tính mạn tính so với hợp chất tổng hợp nhân tạo.',
          'Hỗn hợp hoạt chất tự nhiên vs Hoạt chất tinh khiết:',
          '• Hỗn hợp (Cao chiết): Các hoạt chất phụ (như flavonoid, polyphenol) đóng vai trò chất trợ tan, chất bảo vệ chống oxy hóa, hiệp đồng làm tăng tác dụng trị liệu và giảm độc tính của hoạt chất chính.',
          '• Hoạt chất tinh khiết: Tác dụng rất mạnh, đặc hiệu, nhưng chỉ số trị liệu hẹp (dễ ngộ độc liều cao), giá thành sản xuất cực đắt và vi khuẩn/ký sinh trùng dễ phát triển đột biến kháng thuốc.'
        ]
      },
      {
        id: 'sec-3-3',
        title: '3. Phân biệt Pháp lý: Thuốc Dược Liệu vs Thuốc Cổ Truyền vs TPCN',
        content: [
          'Luật Dược Việt Nam 2016 quy định rõ ranh giới giữa các nhóm sản phẩm có nguồn gốc từ thảo mộc:',
          '1. Thuốc Dược Liệu: Thuốc có thành phần từ dược liệu, được chứng minh tác dụng và độ an toàn bằng phương pháp DƯỢC LÝ HIỆN ĐẠI, bào chế dưới các dạng hiện đại (viên nén, viên nang, dung dịch, cao lỏng chuẩn hóa).',
          '2. Thuốc Cổ Truyền: Thuốc có nguồn gốc từ dược liệu, được phối ngũ, bào chế theo LÝ LUẬN VÀ PHƯƠNG PHÁP CỦA Y HỌC CỔ TRUYỀN (thang thuốc, hoàn, tễ, cao đơn hoàn tán).',
          '3. Thực phẩm chức năng (TPCN / Thực phẩm bổ sung): Đi từ thảo dược tự nhiên nhưng tác dụng trị liệu chưa được chứng minh đầy đủ theo tiêu chuẩn thử nghiệm lâm sàng hiện đại; dùng để tăng sức đề kháng, hỗ trợ chức năng cơ thể.'
        ]
      }
    ],
    comparisons: [
      {
        title: 'Bảng So Sánh Pháp Lý Các Dạng Thuốc & TPCN Từ Dược Liệu',
        headers: ['Tiêu chí', 'Thuốc Dược Liệu', 'Thuốc Cổ Truyền', 'Thực Phẩm Chức Năng'],
        rows: [
          ['Căn cứ xây dựng công thức', 'Dược lý học hiện đại & thử nghiệm lâm sàng', 'Lý luận Y học cổ truyền (Quân - Thần - Tá - Sứ)', 'Thành phần dinh dưỡng / hoạt chất bổ trợ'],
          ['Dạng bào chế', 'Dạng hiện đại (viên nén, nang mềm, siro chuẩn)', 'Dạng cổ truyền (thang sắc, cao, hoàn, tán...) hoặc hiện đại', 'Viên nang, bột hòa tan, nước uống dinh dưỡng'],
          ['Chứng minh tác dụng', 'Bắt buộc chứng minh bằng thực nghiệm khoa học', 'Theo y văn cổ truyền và kinh nghiệm lâm sàng thừa nhận', 'Chỉ công bố hỗ trợ sức khỏe, không thay thế thuốc'],
          ['Ví dụ', 'Viên nang Berberin clorid, Artesunat tiêm', 'Bài thuốc Bát vị hoàn, Lục vị địa hoàng thang', 'Viên uống bổ sung chiết xuất Hồng Sâm, Trà thảo mộc']
        ]
      }
    ],
    quickReview: [
      {
        question: 'Tỉ lệ phần trăm thuốc sử dụng trên lâm sàng có nguồn gốc từ thiên nhiên là bao nhiêu?',
        answer: 'Hơn 50% thuốc lâm sàng có nguồn gốc tự nhiên (trực tiếp hoặc bán tổng hợp từ khung tự nhiên).',
        importantTag: 'Số liệu'
      },
      {
        question: 'Sự khác biệt cốt lõi nhất giữa Thuốc Dược Liệu và Thuốc Cổ Truyền theo Luật Dược 2016 là gì?',
        answer: 'Thuốc Dược Liệu xây dựng công thức theo DƯỢC LÝ HIỆN ĐẠI; Thuốc Cổ Truyền xây dựng theo LÝ LUẬN Y HỌC CỔ TRUYỀN.',
        importantTag: 'Luật Dược'
      }
    ]
  },
  {
    id: 'chap-4',
    chapterNumber: 4,
    title: 'Thu Hái, Chế Biến, Bảo Quản & Tiêu Chuẩn GACP',
    subtitle: '8 quy tắc vàng thu hái theo bộ phận dùng, chống nhầm lẫn và kiểm soát độ ẩm ≤ 13%',
    iconName: 'Sprout',
    pageRange: 'Trang 13 – 15',
    relatedTopicId: 'harvest-process',
    overview: 'Nắm vững 8 quy tắc thu hái dược liệu theo từng bộ phận (rễ, thân rễ, vỏ, lá, hoa, quả, hạt), nguyên nhân gây nhầm lẫn dược liệu, tiêu chuẩn GACP-WHO và nguyên lý bảo quản chống nấm mốc sâu mọt.',
    keyPoints: [
      'Quy tắc chung: Thu hái lúc trời NẮNG RÁO để thuận tiện phơi sấy ngay, tránh ẩm mốc lên men.',
      'Cây chứa tinh dầu: Thu hái SÁNG SỚM trước khi mặt trời mọc (tránh tinh dầu bay hơi do nắng gắt).',
      'Rễ & Thân rễ: Thu hái vào CUỐI THỜI KỲ SINH DƯỠNG (cuối thu - đầu đông hoặc cuối mưa - đầu khô).',
      'Lá & Ngọn cây: Thu hái khi quang hợp mạnh nhất: TRƯỚC KHI CÂY RA HOA hoặc khi cây vừa bắt đầu ra hoa (lá bánh tẻ).',
      'Vỏ cây (thân, rễ): Thu hái vào MÙA XUÂN (nhựa luyện lưu thông dồi dào, dễ bóc vỏ và cây không bị chết).',
      'Hoa: Thu khi HOA MÃN KHAI (nở to nhất), hoặc thu dạng NỤ nếu hoạt chất tập trung ở nụ (Nụ hoa hòe, Nụ đinh hương, Kim ngân hoa).',
      'Quả: Quả non (Chỉ thực - nhiều flavonoid), Quả trước khi chín (Chỉ xác), Quả chín (Dâu, Nhãn), Quả già (Sa nhân).',
      'Hạt: Thu hái khi QUẢ ĐÃ GIÀ, bắt đầu khô (Hạt sen, Ý dĩ).',
      'Tiêu chuẩn GACP-WHO (Good Agricultural and Collection Practices): Đúng – Tốt – An toàn – Kinh tế.',
      'Bảo quản: ĐỘ ẨM LÀ NGUYÊN NHÂN CHỦ YẾU gây hỏng dược liệu. Tiêu chuẩn Dược điển quy định độ ẩm an toàn thường ≤ 13%.'
    ],
    sections: [
      {
        id: 'sec-4-1',
        title: '1. 8 Quy tắc vàng trong thu hái dược liệu',
        content: [
          '1. Trời nắng ráo: Giúp phơi sấy ngay lập tức, ngăn ngừa hoạt tính enzym nội tại phân hủy hoạt chất.',
          '2. Cây có tinh dầu: Thu hái lúc sáng sớm tinh mơ trước khi mặt trời mọc (tránh tinh dầu bốc hơi mất mát do nhiệt độ mặt trời).',
          '3. Rễ và Thân rễ (Củ): Thu hái vào cuối thời kỳ sinh dưỡng (cuối thu - đầu đông). Lúc này cây ngừng mọc chồi lá non, toàn bộ dinh dưỡng và hoạt chất tích lũy dồn đặc về phần củ rễ dưới đất.',
          '4. Lá và Ngọn non: Thu hái thời điểm quang hợp mạnh nhất, trước khi ra hoa (lá bánh tẻ phát triển đầy đủ). Khi hoa nở, dưỡng chất sẽ dồn về nuôi hoa làm giảm hoạt chất ở lá.',
          '5. Vỏ thân / Vỏ rễ: Thu hái vào mùa xuân nếu muốn giữ cây sống tiếp tục phát triển (nhựa luyện nhiều, tầng sinh mô hoạt động mạnh dễ tách vỏ). Nếu chặt đẵn toàn bộ (Kina, Quế) thì thu vào cuối thu.',
          '6. Hoa: Hái lúc trời nắng ráo. Đa số hái lúc hoa nở mãn khai; Những cây có hoạt chất cao nhất ở nụ thì bắt buộc hái khi còn là nụ (Nụ hoa hòe giàu rutin, Nụ đinh hương giàu eugenol, Kim ngân hoa); Một số ít hái khi hoa già (Hồng hoa, Cà độc dược).',
          '7. Quả: Thu hái theo giai đoạn hoạt chất cao nhất:',
          '• Quả non: Chỉ thực (quả non của cây bưởi/cam chua, giàu flavonoid).',
          '• Quả gần chín: Chỉ xác (quả bánh tẻ chuẩn bị chín).',
          '• Quả chín: Dâu tằm, Long nhãn, Kỷ tử.',
          '• Ngoại lệ: Quả sa nhân thu khi quả già chưa chín hẳn vì khi chín chứa nhiều đường dễ thu hút kiến côn trùng gây thối nát.',
          '8. Hạt: Thu hái khi quả đã già, vỏ bắt đầu khô chuyển màu (Hạt sen, Ý dĩ, Thảo quyết minh).'
        ]
      },
      {
        id: 'sec-4-2',
        title: '2. Chống nhầm lẫn & Tiêu chuẩn GACP-WHO',
        content: [
          'Nguyên nhân nhầm lẫn: Hình dạng cây giống nhau, bất cẩn lẫn cỏ dại khi thu hái, trùng tên gọi địa phương, chế biến làm biến dạng hình thể, hoặc cố ý giả mạo (ví dụ: dùng củ khoai mì giả mạo Hoài sơn, nhập nụ hoa hòe kém chất lượng trà trộn hoa hòe Việt Nam).',
          'Tiêu chuẩn GACP (Good Agricultural and Collection Practices): Hướng dẫn Thực hành tốt trồng trọt và thu hái cây thuốc theo khuyến cáo của WHO và EMEA châu Âu (2002).',
          '4 Tiêu chí cốt lõi trong GACP:',
          '1. ĐÚNG: Định danh chính xác tên loài thực vật, có mẫu chuẩn tiêu bản và hồ sơ nguồn gốc giống rõ ràng.',
          '2. TỐT: Đảm bảo chất lượng hoạt chất và độ đồng nhất giữa các lô sản phẩm.',
          '3. AN TOÀN: An toàn cho người dùng (không tồn dư thuốc trừ sâu, kim loại nặng, aflatoxin), an toàn môi trường sinh thái và tuân thủ pháp luật (không khai thác cây trong Sách Đỏ trái phép).',
          '4. KINH TẾ: Quy trình thu hái và canh tác đạt năng suất tối ưu.'
        ]
      },
      {
        id: 'sec-4-3',
        title: '3. Bảo quản Dược liệu & Giới hạn Độ ẩm',
        content: [
          'Nguyên nhân gây hư hỏng: Nhiệt độ, ánh sáng tử ngoại (kích hoạt phản ứng oxy hóa), không khí và đặc biệt là ĐỘ ẨM.',
          'Cơ chế phá hủy của độ ẩm: Độ ẩm cao kích hoạt hệ enzym nội sinh (thủy phân các liên kết glycosid, ester...), làm nảy mầm bào tử nấm mốc sinh độc tố aflatoxin. Nấm mốc và sâu mọt hô hấp lại tiếp tục sinh thêm hơi nước tạo thành vòng xoắn phá hủy dược liệu cực nhanh.',
          'Quy định Dược điển: Đa số dược liệu quy định độ ẩm an toàn phải ≤ 13% (trừ một số dược liệu chứa nhiều đường như Sinh địa, Long nhãn cho phép cao hơn một chút).'
        ]
      }
    ],
    comparisons: [
      {
        title: 'Bảng Tóm Tắt Thời Điểm Thu Hái Tối Ưu Theo Bộ Phận Dùng',
        headers: ['Bộ phận dùng', 'Thời điểm thu hái chuẩn', 'Lý do khoa học', 'Ví dụ điển hình'],
        rows: [
          ['Rễ & Thân rễ', 'Cuối thời kỳ sinh dưỡng (cuối thu - đầu đông)', 'Chất dinh dưỡng & hoạt chất dồn về dự trữ ở rễ', 'Sâm, Đương quy, Tam thất, Cát căn'],
          ['Thân cây / Gỗ', 'Mùa thu - đông khi lá rụng bớt', 'Lượng nước giảm, hoạt chất gỗ cô đặc', 'Tô mộc, Hoàng đằng'],
          ['Vỏ cây', 'Mùa xuân khi cây nảy lộc', 'Nhiều nhựa luyện, vỏ mềm dễ bóc, cây hồi phục nhanh', 'Vỏ Đỗ trọng, Vỏ Hoàng bá, Vỏ Quế'],
          ['Lá & Ngọn', 'Lúc quang hợp mạnh nhất, trước khi ra hoa', 'Hàm lượng hoạt chất đạt cực đại, chưa bị hoa hút', 'Lá Bạch đàn, Lá Dừa cạn, Lá Trúc đào'],
          ['Hoa', 'Lúc nở mãn khai hoặc khi còn là Nụ', 'Tránh hoa tàn rụng cánh; Nụ chứa nhiều tinh dầu/flavonoid', 'Nụ Hoa hòe (rutin), Nụ Đinh hương (eugenol)'],
          ['Quả', 'Tùy loài: Quả non, bánh tẻ hoặc quả chín', 'Flavonoid cao ở quả non; đường/tinh dầu cao ở quả già', 'Chỉ thực (quả non), Chỉ xác (bánh tẻ), Dâu (chín)'],
          ['Hạt', 'Khi quả đã già, bắt đầu khô', 'Hạt phát triển phôi mầm hoàn chỉnh', 'Hạt Sen (Liên nhục), Ý dĩ, Mã tiền']
        ]
      }
    ],
    quickReview: [
      {
        question: 'Vì sao dược liệu chứa tinh dầu phải thu hái vào buổi sáng sớm trước khi mặt trời mọc?',
        answer: 'Vì nhiệt độ mặt trời buổi trưa sẽ làm tinh dầu dễ dàng bay hơi, gây suy giảm nghiêm trọng hàm lượng hoạt chất.',
        importantTag: 'Quy tắc thu hái'
      },
      {
        question: 'Theo Dược điển, độ ẩm an toàn cho đa số dược liệu khô bảo quản là bao nhiêu?',
        answer: 'Độ ẩm an toàn thường phải ≤ 13% để ức chế enzym nội sinh và ngăn ngừa nấm mốc phát triển.',
        importantTag: 'Bảo quản'
      },
      {
        question: 'Kể tên 4 tiêu chí chính trong hướng dẫn GACP-WHO?',
        answer: 'ĐÚNG (đúng loài giống), TỐT (chất lượng cao), AN TOÀN (sạch, không độc hại, bảo vệ môi trường), KINH TẾ (hiệu quả sản xuất).',
        importantTag: 'Tiêu chuẩn'
      }
    ]
  },
  {
    id: 'chap-5',
    chapterNumber: 5,
    title: 'Sắc Ký & Quang Phổ Trong Nghiên Cứu Dược Liệu',
    subtitle: 'Kỹ thuật sắc ký định danh điểm chỉ (Fingerprint), HPLC, UV-Vis, IR, NMR, MS, CD/ORD',
    iconName: 'FlaskConical',
    pageRange: 'Trang 16 – 18',
    relatedTopicId: 'analysis-chromatography',
    overview: 'Tổng quan các phương pháp sắc ký phẳng, sắc ký cột điều chế, HPLC, sắc ký khí và các phương pháp quang phổ hiện đại (UV-Vis, Hồng ngoại IR, Cộng hưởng từ hạt nhân NMR, Khối phổ MS, CD/ORD) dùng trong định tính, định lượng và xác định cấu trúc phân tử hợp chất tự nhiên.',
    keyPoints: [
      'Sắc ký phẳng (SKLM, TLC, HPTLC): Pha tĩnh trải trên mặt phẳng, phát hiện vết bằng thuốc thử màu hoặc đèn tử ngoại UV 254/366 nm.',
      'Sắc ký điều chế (Preparative TLC / Column Chromatography): Mục tiêu để TÁCH LẤY CHẤT TINH KHIẾT khỏi hỗn hợp, không phải để phân tích hàm lượng.',
      'Sắc ký lỏng hiệu năng cao (HPLC): Độ phân giải cực cao, sắc ký đồ hiện nhiều pic, dùng so sánh định danh dược liệu và định lượng chất chuẩn.',
      'Sắc ký điểm chỉ (Fingerprint Chromatography): So sánh toàn bộ mẫu sắc ký đồ của dược liệu cần kiểm tra với mẫu dược liệu chuẩn (ví dụ phân biệt Sâm Tây Bắc với Sâm Ngọc Linh).',
      'Quang phổ UV-Vis: Xác định các hệ liên kết đôi liên hợp trong phân tử, ứng dụng nhiều trong định lượng.',
      'Phổ Hồng ngoại (IR): Xác định các nhóm chức hóa học (-OH, -COOH, -C=O, -NH2) và liên kết bội, dùng làm "dấu vân tay" định danh nhanh.',
      'Phổ Cộng hưởng từ hạt nhân (NMR): Cho biết đặc trưng cấu trúc khung carbon và nguyên tử Hydro (1H-NMR, 13C-NMR 1D và 2D).',
      'Phổ Khối (MS): Bắn phá phân tử thành mảnh vỡ, xác định chính xác PHÂN TỬ LƯỢNG và công thức phân tử.',
      'CD (Lưỡng cực vòng) & ORD (Tán sắc quay quang): Xác định đồng phân quang học alpha, beta và tâm bất đối Carbon.'
    ],
    sections: [
      {
        id: 'sec-5-1',
        title: '1. Các phương pháp Sắc ký trong Dược liệu',
        content: [
          'Sắc ký phẳng (TLC, HPTLC): Pha tĩnh là lớp mỏng chất hấp phụ (Silica gel G, RP-18) tráng trên bản nhôm hoặc kính. Dùng định tính nhận biết hoạt chất bằng hệ số lưu giữ Rf.',
          'Sắc ký cột cổ điển (Column Chromatography): Pha tĩnh nhồi trong cột thủy tinh lớn, cho hỗn hợp dịch chiết đi qua để rửa giải phân đoạn, mục đích là sắc ký điều chế lấy chất tinh khiết.',
          'Sắc ký lỏng hiệu năng cao (HPLC): Pha động là chất lỏng bơm qua cột hạt mịn dưới áp suất cao (50-400 bar). Cực kỳ hữu hiệu để định lượng và lập bản đồ sắc ký điểm chỉ.',
          'Sắc ký khí (GC): Phân tích các hợp chất dễ bay hơi và bền nhiệt (như tinh dầu, acid béo, dung môi tồn dư).',
          'Sắc ký phân bố ngược dòng (Counter-current Chromatography - CCC): Cả pha tĩnh và pha động đều là chất lỏng không hòa lẫn vào nhau. Không dùng chất mang rắn nên không mất mát mẫu, chi phí rẻ, dùng rất nhiều trong phân lập điều chế.'
        ],
        subSections: [
          {
            title: 'Sắc ký định danh điểm chỉ (Chromatographic Fingerprint)',
            items: [
              'Khi không có chất chuẩn đơn lẻ hoặc đối với bài thuốc hỗn hợp nhiều dược liệu, người ta chạy HPLC tạo ra "bản đồ điểm chỉ" (Fingerprint).',
              'So sánh phổ pic của mẫu thử với mẫu dược liệu chuẩn gốc. Nếu hệ thống pic và tỉ lệ pic tương đồng thì kết luận đúng loài dược liệu đó (Ví dụ: Dùng HPLC fingerprint để phân biệt Sâm Ngọc Linh thật với Sâm Tây Bắc / Tam thất hoang).'
            ],
            important: true
          }
        ]
      },
      {
        id: 'sec-5-2',
        title: '2. Các phương pháp Quang phổ xác định cấu trúc',
        content: [
          'Quang phổ Tử ngoại - Khả kiến (UV-Vis, 190 - 800 nm): Dùng phát hiện các nhóm mang màu (chromophore) có liên kết đôi liên hợp (như nhân thơm, nối đôi liên hợp trong flavonoid, coumarin, carotenoid). Thường dùng định lượng hơn định tính.',
          'Quang phổ Hồng ngoại (IR, 4000 - 400 cm⁻¹): Đo sự hấp thu dao động của các liên kết hóa học. Giúp xác định nhanh nhóm chức (-OH alcol, -OH phenol, C=O carbonyl, C-O ester, C≡N...).',
          'Phổ Cộng hưởng từ hạt nhân (NMR): Cung cấp thông tin trực tiếp về bộ khung phân tử. 1H-NMR cho biết số lượng và vị trí hydro; 13C-NMR cho biết số lượng và trạng thái lai hóa của carbon; NMR 2 chiều (COSY, HSQC, HMBC, NOESY) giúp ghép nối toàn bộ khung phân tử phức tạp.',
          'Khối phổ (MS): Ion hóa phân tử thành ion phân tử [M+H]+, [M-H]- và các mảnh ion con vỡ ra. Xác định chính xác khối lượng phân tử chính xác đến 4 chữ số thập phân (HR-MS) để suy ra công thức nguyên.',
          'CD (Circular Dichroism) & ORD (Optical Rotatory Dispersion): Đo độ quay cực và hiện tượng lưỡng sắc tròn quang học để xác định cấu hình lập thể (R/S), cấu hình alpha/beta và vị trí không gian của các nhóm thế gắn vào carbon bất đối.'
        ]
      }
    ],
    comparisons: [
      {
        title: 'Bảng Tóm Tắt Vai Trò Của Các Phương Pháp Phổ Hiện Đại',
        headers: ['Phương pháp phổ', 'Nguyên lý đo', 'Thông tin cung cấp chính', 'Ứng dụng đặc thù'],
        rows: [
          ['UV-Vis', 'Hấp thu bức xạ điện từ 190 - 800 nm', 'Hệ liên kết đôi liên hợp (π → π*, n → π*)', 'Định lượng hoạt chất và làm detector cho HPLC'],
          ['Hồng ngoại (IR)', 'Hấp thu dao động phân tử (dao động hóa trị, biến dạng)', 'Nhóm chức hóa học (-OH, C=O, -COOH, liên kết bội)', 'Điểm chỉ nhanh mẫu chất so với phổ chuẩn'],
          ['NMR (1H & 13C)', 'Cộng hưởng từ của hạt nhân nguyên tử (¹H, ¹³C) trong từ trường', 'Vị trí, số lượng, môi trường hóa học của H và C', 'Xác định hoàn chỉnh bộ khung cấu trúc hóa học'],
          ['Khối phổ (MS)', 'Đo tỉ số khối lượng trên điện tích (m/z) của các ion', 'Phân tử lượng chính xác và các mảnh vỡ cấu trúc', 'Tìm công thức phân tử hợp chất mới'],
          ['CD & ORD', 'Tương tác với ánh sáng phân cực tròn', 'Cấu hình lập thể tuyệt đối, đồng phân quang học (D/L, R/S)', 'Phân biệt dạng đồng phân alpha/beta của đường và aglycon']
        ]
      }
    ],
    quickReview: [
      {
        question: 'Phương pháp sắc ký nào có cả pha tĩnh và pha động đều ở trạng thái lỏng?',
        answer: 'Sắc ký phân bố ngược dòng (Counter-current Chromatography - CCC), dùng trong phân lập điều chế.',
        importantTag: 'Sắc ký'
      },
      {
        question: 'Để xác định chính xác phân tử lượng của một hoạt chất mới chiết xuất, ta dùng phương pháp phổ nào?',
        answer: 'Phương pháp Phổ khối (Mass Spectrometry - MS).',
        importantTag: 'Quang phổ'
      },
      {
        question: 'Phổ hồng ngoại (IR) chủ yếu dùng để xác định thông tin gì của phân tử?',
        answer: 'Xác định các nhóm chức hóa học (như -OH, C=O, -COOH, liên kết bội) có mặt trong phân tử.',
        importantTag: 'Phổ IR'
      }
    ]
  },
  {
    id: 'chap-6',
    chapterNumber: 6,
    title: 'Kỹ Thuật Chiết Xuất Dược Liệu',
    subtitle: 'Quá trình thẩm tích qua màng tế bào, kênh bào tương và so sánh phương pháp Ngâm vs Ngấm kiệt',
    iconName: 'Sprout',
    pageRange: 'Trang 19 – 22',
    relatedTopicId: 'harvest-process',
    overview: 'Tìm hiểu bản chất quá trình chiết xuất rắn - lỏng trong tế bào thực vật, quá trình thẩm tích qua màng và kênh bào tương, so sánh ưu nhược điểm giữa giữ nguyên vẹn tế bào và phá vỡ tế bào, cùng kỹ thuật ngâm và ngấm kiệt ngược dòng.',
    keyPoints: [
      'Bản chất chiết xuất: Là quá trình chiết RẮN – LỎNG nhằm lấy chất tan ra khỏi tế bào thực vật bằng dung môi thích hợp.',
      'Phân biệt Chiết vs Chiết xuất: Nghiền viên paracetamol hòa dung môi chỉ là "Chiết" (hòa tan ngoài bề mặt); còn lấy hoạt chất nằm sâu trong lòng tế bào thực vật mới gọi là "Chiết xuất".',
      'Cấu tạo tế bào: Vách cellulose dày cứng, hoạt chất thứ cấp tích lũy chủ yếu trong KHÔNG BÀO (Vacuole). Các tế bào liên thông qua KÊNH BÀO TƯƠNG.',
      'Quá trình chiết xuất gồm 2 giai đoạn kế tiếp: (1) Dung môi thấm qua vách vào hòa tan chất tan; (2) Chất tan thẩm tích và khuếch tán ra ngoài màng tế bào.',
      'So sánh chiến lược chiết:',
      '• Giữ nguyên vẹn tế bào: Chiết chậm hơn nhưng màng tế bào đóng vai trò màng siêu lọc giữ lại các đại phân tử (tinh bột, chất nhầy, protein) → Dịch chiết trong, sạch tạp.',
      '• Phá vỡ tế bào: Chiết rất nhanh nhưng toàn bộ tạp chất nhầy, tinh bột tuôn ra làm dịch chiết đặc quánh, khó lọc và khó tinh chế.',
      'Kỹ thuật Ngấm kiệt (Percolation): Phương pháp động liên tục với nguyên tắc vàng: "DUNG MÔI MỚI TIẾP XÚC VỚI DƯỢC LIỆU CŨ, DUNG MÔI CŨ TIẾP XÚC VỚI DƯỢC LIỆU MỚI" giúp tận thu kiệt hoạt chất và thu được dịch chiết đậm đặc nhất.'
    ],
    sections: [
      {
        id: 'sec-6-1',
        title: '1. Khái niệm & Cấu trúc tế bào thực vật trong chiết xuất',
        content: [
          'Định nghĩa Chiết xuất (Extraction): Quá trình tách các chất hòa tan từ nguyên liệu thực vật/động vật bằng một chất lỏng gọi là dung môi.',
          'Phân biệt Chiết vs Chiết xuất: Dược chất trong cây nằm bên trong không bào của tế bào sống/khô, được bao bọc bởi màng sinh chất và vách cellulose dày cứng. Để lấy được hoạt chất phải trải qua quá trình dung môi thấm vào tế bào rồi hoạt chất khuếch tán ngược ra ngoài.',
          'Sản phẩm sau chiết xuất:',
          '• Dịch chiết: Dung dịch thu được sau quá trình chiết.',
          '• Cao lỏng: Lượng dung môi còn lại > 20%.',
          '• Cao đặc: Lượng dung môi còn lại ≤ 20%.',
          '• Cao khô: Lượng ẩm/dung môi còn lại ≤ 5%.'
        ]
      },
      {
        id: 'sec-6-2',
        title: '2. Quá trình Thẩm tích & Kênh bào tương',
        content: [
          'Thẩm tích (Khuếch tán qua màng sinh học): Các tế bào thực vật liên kết chặt chẽ với nhau thông qua các KÊNH BÀO TƯƠNG (plasmodesmata).',
          'Các phân tử hoạt chất nhỏ hơn đường kính kênh bào tương sẽ di chuyển xuyên qua các tế bào để đi ra bề mặt tiếp xúc với dung môi.',
          'Tại sao chọn giữ nguyên vẹn tế bào thay vì phá vỡ hoàn toàn tế bào?',
          '• Khi tế bào còn nguyên vẹn, vách tế bào hoạt động như một màng bán thấm thiên nhiên, chỉ cho các phân tử hoạt chất nhỏ chui qua, chặn đứng các đại phân tử như tinh bột, gôm nhầy, pectin, protein bên trong tế bào.',
          '• Nếu xay nát phá vỡ tế bào, các chất nhầy và tinh bột sẽ tràn vào dịch chiết làm dung dịch nhớt quánh, gây tắc màng lọc và rất tốn kém chi phí tinh chế sau này.'
        ]
      },
      {
        id: 'sec-6-3',
        title: '3. Các yếu tố ảnh hưởng & Kỹ thuật chiết xuất',
        content: [
          'Các yếu tố ảnh hưởng lớn nhất:',
          '1. Sự chênh lệch nồng độ: Động lực chính của quá trình khuếch tán. Khuấy trộn hoặc đổi mới dung môi liên tục giúp duy trì gradient nồng độ cao nhất.',
          '2. Nhiệt độ: Tăng nhiệt độ làm giảm độ nhớt dung môi và tăng tốc độ khuếch tán (nhưng không dùng nhiệt cao với hoạt chất kém bền nhiệt như tinh dầu, glycosid tim).',
          '3. Độ nhớt dung môi: Dung môi linh động (cồn, nước, ete) khuếch tán nhanh; dung môi nhớt (glycerin, dầu thực vật) khuếch tán rất chậm.',
          '4. Bản chất dược liệu tươi vs khô: Dược liệu khô vách tế bào đã mất tính bán thấm sống nên chiết nhanh hơn; dược liệu tươi màng tế bào còn sống nên cản trở dung môi xâm nhập.',
          'Kỹ thuật chiết xuất chính:',
          '• Phương pháp tĩnh / gián đoạn (Ngâm - Maceration): Ngâm dược liệu trong dung môi tĩnh một thời gian rồi gạn lấy dịch chiết.',
          '• Phương pháp động / liên tục (Ngấm kiệt - Percolation): Cho dòng dung môi chảy liên tục qua khối dược liệu. Nguyên tắc: Dung môi mới tiếp xúc dược liệu đã chiết gần kiệt để rút nốt lượng hoạt chất còn sót lại; Dung môi đã hòa tan một phần dược chất sẽ tiếp xúc với dược liệu mới để tạo dịch chiết đậm đặc tối đa.'
        ]
      }
    ],
    comparisons: [
      {
        title: 'Bảng So Sánh Giữ Nguyên Tế Bào vs Phá Vỡ Tế Bào Khi Chiết Xuất',
        headers: ['Đặc điểm', 'Chiến lược Giữ nguyên vẹn tế bào', 'Chiến lược Phá vỡ tế bào (Xay mịn)'],
        rows: [
          ['Tốc độ chiết', 'Chậm hơn do phải khuếch tán qua vách tế bào', 'Rất nhanh do diện tích tiếp xúc trực tiếp lớn'],
          ['Độ tinh khiết dịch chiết', 'Dịch chiết trong, sạch, ít tạp chất đại phân tử', 'Dịch chiết đục, nhiều tạp chất (tinh bột, chất nhầy, protein)'],
          ['Khả năng lọc & cô đặc', 'Rất dễ lọc, dịch chiết linh động, không bị tắc màng', 'Dịch chiết keo nhớt, rất khó lọc, dễ bị cháy khét khi cô'],
          ['Ứng dụng thực tế', 'Phương pháp tiêu chuẩn trong sản xuất dược phẩm', 'Chỉ dùng khi chiết các hoạt chất gắn chặt hoặc enzym đặc biệt']
        ]
      },
      {
        title: 'Bảng So Sánh Phương Pháp Ngâm (Tĩnh) vs Ngấm Kiệt (Động)',
        headers: ['Tiêu chí', 'Phương pháp Ngâm (Maceration)', 'Phương pháp Ngấm kiệt (Percolation)'],
        rows: [
          ['Chế độ dòng chảy', 'Tĩnh (Dung môi và dược liệu đứng yên hoặc khuấy định kỳ)', 'Động (Dung môi chảy liên tục từ trên xuống dưới)'],
          ['Gradient nồng độ', 'Giảm dần theo thời gian khi dung môi bão hòa hoạt chất', 'Luôn duy trì ở mức chênh lệch tối đa'],
          ['Mức độ kiệt hoạt chất', 'Không triệt để (hoạt chất còn sót lại trong bã)', 'Tận thu kiệt hoạt chất trong dược liệu'],
          ['Nồng độ dịch chiết', 'Loãng hơn, cần dùng lượng lớn dung môi', 'Dịch chiết đầu rất đậm đặc, tiết kiệm dung môi']
        ]
      }
    ],
    quickReview: [
      {
        question: 'Nguyên tắc vàng trong kỹ thuật chiết ngấm kiệt là gì?',
        answer: 'Dung môi mới tiếp xúc với dược liệu cũ (đã chiết gần hết); Dung môi cũ tiếp xúc với dược liệu mới (để làm giàu nồng độ dịch chiết).',
        importantTag: 'Kỹ thuật chiết'
      },
      {
        question: 'Tại sao khi chiết xuất dược liệu công nghiệp người ta ưu tiên giữ tế bào nguyên vẹn?',
        answer: 'Để màng tế bào giữ lại các đại phân tử như tinh bột, chất nhầy, protein, giúp dịch chiết trong và dễ lọc tinh chế.',
        importantTag: 'Nguyên lý'
      }
    ]
  },
  {
    id: 'chap-7',
    chapterNumber: 7,
    title: 'Tài Nguyên Cây Thuốc & Bảo Tồn Bền Vững',
    subtitle: 'Đa dạng sinh học Việt Nam, Sách Đỏ, CITES, In situ / Ex situ / On farm và Dược lý dân tộc học',
    iconName: 'Leaf',
    pageRange: 'Trang 23 – 25',
    relatedTopicId: 'compounds-resources',
    overview: 'Đánh giá tiềm năng tài nguyên cây thuốc phong phú của Việt Nam (>5.000 loài), các chiến lược bảo tồn đa dạng sinh học (In situ, Ex situ, On farm), Công ước quốc tế CITES, Sách Đỏ và vai trò của Dược lý dân tộc học (Ethnopharmacology) trong bảo vệ tri thức bản địa.',
    keyPoints: [
      'Vị thế Việt Nam: Xếp thứ 16 trên thế giới về đa dạng sinh vật; Nằm trong trung tâm rừng mưa nhiệt đới Đông Nam Á.',
      'Số lượng loài: Ghi nhận > 5.000 loài cây thuốc (rất lớn so với Trung Quốc 10.000-12.000 loài trên diện tích gấp 30 lần).',
      'Loài đặc hữu: Loài chỉ phân bố tự nhiên ở một vùng sinh thái nhất định (Đặc hữu Việt Nam, Đặc hữu Đông Dương).',
      'Bảo tồn In situ (Tại chỗ): Bảo tồn nguyên vẹn trong môi trường tự nhiên (Vườn quốc gia, Khu dự trữ sinh quyển) → Đảm bảo tiến hóa tự nhiên.',
      'Bảo tồn Ex situ (Chuyển chỗ): Bảo tồn trong vườn thực vật, sở thú, ngân hàng hạt giống/ngân hàng gen → Dễ quản lý, ít tốn đất.',
      'Bảo tồn On farm (Trang trại): Bảo tồn giống cây trồng vật nuôi gắn liền hoạt động sản xuất nông nghiệp của nông dân.',
      'Công ước CITES: Công ước quốc tế về thương mại các loài động thực vật hoang dã nguy cấp.',
      'Dược lý dân tộc học (Ethnopharmacology): Ngành khoa học liên ngành ghi nhận kinh nghiệm y học dân gian của các dân tộc và chứng minh bằng khoa học hiện đại; Tuyên ngôn Belem & Manila về bảo vệ quyền sở hữu trí tuệ bản địa.',
      'Di thực cây thuốc: Đem cây thuốc quý từ nước ngoài về thuần hóa trồng tại Việt Nam (Ví dụ: Cây Phan Tả Diệp trồng tại Việt Nam cho chất lượng cao hơn cả Ấn Độ).'
    ],
    sections: [
      {
        id: 'sec-7-1',
        title: '1. Tiềm năng Tài nguyên Cây thuốc Việt Nam',
        content: [
          'Việt Nam là một trong 16 quốc gia có độ đa dạng sinh học cao nhất thế giới nhờ vị trí địa lý nằm trọn trong vành đai rừng mưa nhiệt đới Đông Nam Á.',
          'Hơn 23.500 loài sinh vật đã được ghi nhận, trong đó thực vật bậc cao chiếm khoảng 50%.',
          'Tài nguyên cây thuốc: Việt Nam đã thống kê được trên 5.000 loài thực vật làm thuốc.',
          'Di sản tri thức dân tộc: 54 dân tộc anh em sở hữu kho tàng kinh nghiệm dùng cây thuốc độc đáo (Ví dụ: Bài thuốc tắm sau sinh của phụ nữ người Dao đỏ giúp phục hồi thể lực thần tốc chỉ sau vài ngày).'
        ]
      },
      {
        id: 'sec-7-2',
        title: '2. Các phương thức Bảo tồn Đa dạng Sinh học & Nguồn gen',
        content: [
          '1. Bảo tồn In situ (Bảo tồn tại chỗ): Bảo tồn các loài ngay tại sinh cảnh tự nhiên nguyên bản dưới hình thức các Vườn quốc gia (Cúc Phương, Ba Bể, Bạch Mã), Khu bảo tồn thiên nhiên và Khu dự trữ sinh quyển.',
          '• Ưu điểm: Động thực vật tiếp tục tương tác trong chuỗi thức ăn, thuận theo quy luật tiến hóa tự nhiên.',
          '• Nhược điểm: Diện tích quá rộng lớn, dễ bị lâm tặc xâm hại, khó kiểm soát.',
          '2. Bảo tồn Ex situ (Bảo tồn chuyển chỗ): Đưa các loài quý hiếm ra khỏi môi trường tự nhiên vào lưu trữ tại Vườn thực vật, Trạm nghiên cứu dược liệu, Ngân hàng gen, Ngân hàng hạt giống, nuôi cấy mô in vitro.',
          '• Ưu điểm: Tập trung, dễ bảo vệ, ít tốn diện tích và nhân lực canh gác.',
          '• Nhược điểm: Cắt đứt sự tương tác sinh thái tự nhiên, không diễn ra quá trình thích nghi tiến hóa mới.',
          '3. Bảo tồn On farm (Bảo tồn trang trại): Duy trì các giống cây thuốc quý trực tiếp trên đồng ruộng, trang trại nông nghiệp của người dân.',
          'Công ước CITES: Hệ thống danh mục quốc tế kiểm soát việc buôn bán, xuất nhập khẩu các loài thảo dược nguy cấp xuyên biên giới.'
        ]
      },
      {
        id: 'sec-7-3',
        title: '3. Dược lý Dân tộc học & Quyền Sở hữu Trí tuệ',
        content: [
          'Dược lý dân tộc học (Ethnopharmacology): Môn khoa học liên ngành kết hợp giữa thực vật học, nhân chủng học và dược lý học nhằm:',
          '• Điều tra, ghi nhận các kinh nghiệm sử dụng cây cỏ chữa bệnh hoặc thuốc độc của các đồng bào dân tộc.',
          '• Tiến hành chiết xuất, phân lập và chứng minh tác dụng sinh học bằng thực nghiệm khoa học hiện đại.',
          'Bảo vệ quyền sở hữu trí tuệ bản địa: Tránh thực trạng các tập đoàn dược phẩm đa quốc gia lấy cắp tri thức dân gian bản địa ("Biopiracy") mà cộng đồng địa phương không được hưởng lợi. Tuyên ngôn Belem và Manila quy định sự chia sẻ quyền lợi công bằng giữa nhà nghiên cứu và người bản địa.',
          'Di thực cây thuốc: Mang giống cây thuốc từ nơi khác về nuôi trồng tại Việt Nam thành công (như Phan tả diệp, Atiso, Bạc hà Âu, Bạch hoa xà...).'
        ]
      }
    ],
    comparisons: [
      {
        title: 'Bảng So Sánh Các Phương Thức Bảo Tồn Nguồn Gen Cây Thuốc',
        headers: ['Tiêu chí', 'Bảo tồn In situ (Tại chỗ)', 'Bảo tồn Ex situ (Chuyển chỗ)', 'Bảo tồn On farm (Trang trại)'],
        rows: [
          ['Địa điểm thực hiện', 'Vườn quốc gia, Khu bảo tồn thiên nhiên', 'Vườn thực vật, Ngân hàng gen, Ngân hàng hạt giống', 'Đồng ruộng, trang trại nông hộ'],
          ['Môi trường sống', 'Môi trường sinh thái tự nhiên nguyên vẹn', 'Môi trường nhân tạo có kiểm soát', 'Môi trường nông nghiệp bán tự nhiên'],
          ['Ưu điểm lớn nhất', 'Duy trì trọn vẹn sự tương tác sinh thái và tiến hóa tự nhiên', 'Dễ quản lý, kiểm soát điều kiện tối ưu, tốn ít diện tích', 'Gắn liền với sản xuất và thu nhập của nông dân'],
          ['Thách thức', 'Khó quản lý do diện tích quá rộng, nguy cơ cháy rừng, săn trộm', 'Mất tính tương tác đa dạng sinh thái tự nhiên', 'Phụ thuộc vào thị trường tiêu thụ nông sản']
        ]
      }
    ],
    quickReview: [
      {
        question: 'Việt Nam xếp thứ mấy trên thế giới về độ đa dạng sinh học?',
        answer: 'Việt Nam xếp thứ 16 trên thế giới về mức độ đa dạng sinh vật.',
        importantTag: 'Tài nguyên'
      },
      {
        question: 'Phân biệt ngắn gọn giữa bảo tồn In situ và Ex situ?',
        answer: 'In situ là bảo tồn tại môi trường tự nhiên nguyên bản (Vườn quốc gia); Ex situ là bảo tồn ở nơi khác (Vườn thực vật, Ngân hàng gen).',
        importantTag: 'Bảo tồn'
      },
      {
        question: 'Tuyên ngôn nào đặt nền móng quốc tế cho việc bảo vệ quyền sở hữu trí tuệ của các dân tộc đối với cây thuốc?',
        answer: 'Tuyên ngôn Belem và Manila.',
        importantTag: 'Pháp lý quốc tế'
      }
    ]
  }
];
