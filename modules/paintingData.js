// Source data from user's 2D website
const sourceData = [
  // Period 1930 - 1945
  {
      img: "history_1930_party_founding.png",
      title: "1930: Ánh Sáng Đầu Tiên",
      desc: "Hội nghị thành lập Đảng Cộng sản Việt Nam - Sự kiện chấm dứt khủng hoảng về đường lối cứu nước."
  },
  {
      img: "history_1941_pac_bo.png",
      title: "1941: Pác Bó Lịch Sử",
      desc: "Lãnh tụ Nguyễn Ái Quốc trở về nước, trực tiếp lãnh đạo phong trào cách mạng Việt Nam."
  },
  {
      img: "history_1945_august_revolution.png",
      title: "1945: Mùa Thu Cách Mạng",
      desc: "Biển người và cờ đỏ sao vàng trong ngày Tổng khởi nghĩa giành chính quyền."
  },
  // Period 1946 - 1954
  {
      img: "history_1946_hanoi_resistance.png",
      title: "1946: Quyết Tử Cho Tổ Quốc Quyết Sinh",
      desc: "Hà Nội mùa đông năm 1946 - Tinh thần kháng chiến bất diệt của quân và dân thủ đô."
  },
  {
      img: "history_1954_dien_bien_phu.png",
      title: "1954: Thiên Sử Vàng Điện Biên",
      desc: "Chiến thắng Điện Biên Phủ 'lừng lẫy năm châu, chấn động địa cầu'."
  },
  // Period 1955 - 1975
  {
      img: "history_1960_dong_khoi.png",
      title: "1960: Ngọn Lửa Đồng Khởi",
      desc: "Phong trào Đồng khởi tại Bến Tre mở đầu cho cao trào cách mạng miền Nam."
  },
  {
      img: "history_1965_truong_son_trail.png",
      title: "1959-1975: Huyền Thoại Trường Sơn",
      desc: "Tuyến đường huyết mạch chi viện cho miền Nam, biểu tượng ý chí 'Xẻ dọc Trường Sơn đi cứu nước'."
  },
  {
      img: "history_1972_hanoi_air_defense.png",
      title: "1972: Hà Nội Niềm Tin Và Hy Vọng",
      desc: "12 ngày đêm lịch sử 'Điện Biên Phủ trên không' bảo vệ bầu trời thủ đô."
  },
  {
      img: "history_1975_liberation.png",
      title: "1975: Khúc Khải Hoàn Ca",
      desc: "Xe tăng húc đổ cổng Dinh Độc Lập - Thời khắc giải phóng hoàn toàn miền Nam, thống nhất đất nước."
  },
  // Period 1976 - Present
  {
      img: "history_1976_reunification_train.png",
      title: "1976: Chuyến Tàu Thống Nhất",
      desc: "Nối liền mạch máu giao thông Bắc - Nam, biểu tượng của non sông liền một dải."
  },
  {
      img: "history_1986_doi_moi.png",
      title: "1986: Luồng Gió Đổi Mới",
      desc: "Đại hội VI khởi xướng công cuộc Đổi mới, mở ra kỷ nguyên hội nhập và phát triển."
  },
  {
      img: "history_1995_integration.png",
      title: "1995: Việt Nam Hội Nhập",
      desc: "Việt Nam gia nhập ASEAN, khẳng định vị thế và tinh thần 'Việt Nam muốn làm bạn với tất cả các nước'."
  },
  // Abstract & Modern Concepts (Selected first 4 to fit 16 slots)
  {
      img: "dai-doan-ket.png",
      title: "Đại Đoàn Kết Toàn Dân Tộc",
      desc: "Biểu tượng sức mạnh khối đại đoàn kết 54 dân tộc."
  },
  {
      img: "ethnic-unity.png",
      title: "54 Dân Tộc Anh Em",
      desc: "Sự gắn kết bền chặt giữa các dân tộc trên dải đất hình chữ S."
  },
  {
      img: "military-unity.png",
      title: "Tình Quân Dân",
      desc: "Quân với dân như cá với nước - Nguồn gốc sức mạnh vô địch."
  },
  {
      img: "history_2020_pandemic_unity.png",
      title: "2020: Nghĩa Đồng Bào",
      desc: "Tinh thần tương thân tương ái, lá lành đùm lá rách trong những ngày tháng chống dịch khó khăn."
  }
  // Note: Remaining images (hands-unity, modern-vietnam, future, lotus) omitted due to 16-slot limit
];

export const paintingData = [
  // Front Wall (Items 0-3)
  ...Array.from({ length: 4 }, (_, i) => {
    const titleParts = sourceData[i].title.split(':');
    const isYear = !isNaN(titleParts[0]) && titleParts[0].length === 4;
    return {
      imgSrc: `images/${sourceData[i].img}`,
      width: 5,
      height: 3,
      position: { x: -15 + 10 * i, y: 2, z: -19.5 },
      rotationY: 0,
      info: {
        title: sourceData[i].title,
        artist: 'Nguồn: Lịch Sử Việt Nam',
        description: sourceData[i].desc,
        year: isYear ? `Năm: ${titleParts[0]}` : 'Chủ đề: Tư Tưởng Hồ Chí Minh',
        
      },
    };
  }),
  // Back Wall (Items 4-7)
  ...Array.from({ length: 4 }, (_, i) => {
    const dataIndex = i + 4;
    const titleParts = sourceData[dataIndex].title.split(':');
    const isYear = !isNaN(titleParts[0].substring(0,4)); // Handle "1959-1975" case
    return {
      imgSrc: `images/${sourceData[dataIndex].img}`,
      width: 5,
      height: 3,
      position: { x: -15 + 10 * i, y: 2, z: 19.5 },
      rotationY: Math.PI,
      info: {
        title: sourceData[dataIndex].title,
        artist: 'Nguồn: Lịch Sử Việt Nam',
        description: sourceData[dataIndex].desc,
        year: isYear ? `Giai đoạn: ${titleParts[0]}` : 'Chủ đề: Tư Tưởng Hồ Chí Minh',
        
      },
    };
  }),
  // Left Wall (Items 8-11)
  ...Array.from({ length: 4 }, (_, i) => {
    const dataIndex = i + 8;
    const titleParts = sourceData[dataIndex].title.split(':');
    const isYear = !isNaN(titleParts[0]) && titleParts[0].length === 4;
    return {
      imgSrc: `images/${sourceData[dataIndex].img}`,
      width: 5,
      height: 3,
      position: { x: -19.5, y: 2, z: -15 + 10 * i },
      rotationY: Math.PI / 2,
      info: {
        title: sourceData[dataIndex].title,
        artist: 'Nguồn: Lịch Sử Việt Nam',
        description: sourceData[dataIndex].desc,
        year: isYear ? `Năm: ${titleParts[0]}` : 'Chủ đề: Đổi Mới & Hội Nhập',
      },
    };
  }),
  // Right Wall (Items 12-15)
  ...Array.from({ length: 4 }, (_, i) => {
    const dataIndex = i + 12;
    // For these abstract concepts, title usually doesn't have a year at start
    const titleParts = sourceData[dataIndex].title.split(':');
    const isYear = !isNaN(titleParts[0]) && titleParts[0].length === 4; 
    return {
      imgSrc: `images/${sourceData[dataIndex].img}`,
      width: 5,
      height: 3,
      position: { x: 19.5, y: 2, z: -15 + 10 * i },
      rotationY: -Math.PI / 2,
      info: {
        title: sourceData[dataIndex].title,
        artist: 'Nguồn: Lịch Sử Việt Nam',
        description: sourceData[dataIndex].desc,
        year: isYear ? `Năm: ${titleParts[0]}` : 'Giá trị: Đại Đoàn Kết',
      },
    };
  }),
];
