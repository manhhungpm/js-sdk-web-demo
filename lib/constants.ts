export const EXAMPLE_PATH = "blog-starter";
export const CMS_NAME = "Markdown";
// export const HOME_OG_IMAGE_URL =
//   'https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg'
export const HOME_OG_IMAGE_URL = "https://nganhangonline.net/wp-content/uploads/2021/11/lynkid.jpg";

export const CHILD_MENU_SP = [
  {
    icon: "/images/icon-menu/sp-1.svg",
    title: "Bộ công cụ đo lường",
    content:
      "Thống kê và đo lường các hành động tại đa nền tảng (Mobile, Web and etc..) từ các nguồn khác nhau. Đo lường hiệu quả ROI, LTV.",
    route: "/do-luong",
  },
  {
    icon: "/images/icon-menu/sp-2.svg",
    title: "Cá nhân hóa trải nghiệm người dùng",
    content:
      "Cá nhận hóa trải nghiệm theo từng điểm chạm. Sử dụng AI đưa ra các khuyến nghị theo hành vi của người tiêu dùng.",
    route: "/ca-nhan-hoa",
  },
  {
    icon: "/images/icon-menu/sp-3.svg",
    title: "Phân khúc khách hàng",
    content: "Xây dựng phân khúc dựa trên audience insight, thiết bị. Chia sẻ tệp dữ liệu giữa các kênh.",
    route: "phan-khuc",
  },
  {
    icon: "/images/icon-menu/sp-4.svg",
    title: "Phân tích",
    content: "Thống kê và phân tích chỉ số chiến dịch từ đó dễ dàng đưa ra quyết định tiếp theo.",
    route: "/phan-tich",
  },
  {
    icon: "/images/icon-menu/sp-5.svg",
    title: "Theo dõi sức khỏe Website & App",
    content: "Visualize mật độ tương tác trên app & web.   Đưa giá đánh giá, gợi ý để cải thiện cất lượng sản phẩm.",
    route: "suc-khoe-ung-dung",
  },
  {
    icon: "/images/icon-menu/sp-6.svg",
    title: "Dự báo",
    content: "Dự báo xu hướng thị trườngTối ưu hiệu suất chiến dịch với cảnh báo thông minh.",
    route: "du-bao",
  },
  {
    icon: "/images/icon-menu/sp-7.svg",
    title: "Phòng chống gian lận",
    content: "Ngăn chặn tối đa các click đáng ngờ đến từ nhiều nguồn khác nhau.",
    route: "/gian-lan",
  },
];

export const CHILD_MENU_GP = [
  {
    icon: "/images/icon-menu/gp-1.svg",
    title: "Tài chính",
    route: "",
  },
  {
    icon: "/images/icon-menu/gp-2.svg",
    title: "Sức khoẻ",
    route: "",
  },
  {
    icon: "/images/icon-menu/gp-3.svg",
    title: "Web 3",
    route: "",
  },
  {
    icon: "/images/icon-menu/gp-4.svg",
    title: "Mua sắm",
    route: "",
  },
  {
    icon: "/images/icon-menu/gp-5.svg",
    title: "Du lịch",
    route: "",
  },
  {
    icon: "/images/icon-menu/gp-6.svg",
    title: "CTV & OTT",
    route: "",
  },
  {
    icon: "/images/icon-menu/gp-7.svg",
    title: "Ăn uống",
    route: "",
  },
  {
    icon: "/images/icon-menu/gp-8.svg",
    title: "Bất động sản",
    route: "",
  },
  {
    icon: "/images/icon-menu/gp-9.svg",
    title: "Web",
    route: "",
  },
  {
    icon: "/images/icon-menu/gp-10.svg",
    title: "Giải trí",
    route: "",
  },
  {
    icon: "/images/icon-menu/gp-11.svg",
    title: "Trò chơi",
    route: "",
  },
  {
    icon: "/images/icon-menu/gp-12.svg",
    title: "Mobile",
    route: "",
  },
];

export const MENU = [
  {
    key: "sp",
    title: "Sản phẩm",
    haveSubMenu: true,
    child: CHILD_MENU_SP,
    route: "",
  },
  {
    key: "gp",
    title: "Giải pháp",
    haveSubMenu: true,
    child: CHILD_MENU_GP,
    route: "",
  },
  {
    key: "bg",
    title: "Bảng giá",
    haveSubMenu: false,
    child: [],
    route: "bang-gia",
  },
  {
    key: "lh",
    title: "Liên hệ",
    haveSubMenu: false,
    child: [],
    route: "lien-he",
  },
  {
    key: "https://developer.airflex.io/",
    title: "Dành cho nhà phát triển",
    haveSubMenu: false,
    child: [],
    route: "https://developer.airflex.io/",
  },
];

export const CONTACTS = [
  {
    key: "mail",
    icon: "/images/lienhe/mail.svg",
    title: "Email hỗ trợ",
    info: "support@linkid.vn",
    textLink: "Gửi email",
    hasLinkIcon: true,
  },
  {
    key: "fb",
    icon: "/images/lienhe/fb.svg",
    title: "Facebook",
    info: "facebook.com/lynkidofficial",
    textLink: "Truy cập ngay",
    hasLinkIcon: true,
  },
  {
    key: "phone",
    icon: "/images/lienhe/phone.svg",
    title: "Tổng đài 24/7",
    info: "Tiếp nhận mọi yêu cầu hỗ trợ.",
    textLink: "1900 6368 35",
  },
];

export const MAIN_LAYOUT_COL = { xs: 24, md: 12 };

export const UPPER_MD_ORDER_1_COL = { xs: { span: 24, order: 2 }, md: { span: 12, order: 1 } };

export const UPPER_MD_ORDER_2_COL = { xs: { span: 24, order: 1 }, md: { span: 12, order: 2 } };
