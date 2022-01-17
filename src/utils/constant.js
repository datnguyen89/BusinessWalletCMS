import ICONS from '../icons'

export const PAGES = {
  HOME: {
    NAME: 'home',
    PATH: '/',
  },
  IDENTITY: {
    NAME: 'identity-info',
    PATH: '/identity-info',
  },
  TRANSACTION_MANAGE: {
    NAME: 'transaction-manage',
    PATH: '/transaction-manage',
  },
  TRANSACTION_HISTORY: {
    NAME: 'transaction-history',
    PATH: '/transaction-history',
  },
  TERM_OF_USE: {
    NAME: 'term-of-use',
    PATH: '/term-of-use',
  },
  ADD_LINK: {
    NAME: 'add-link',
    PATH: '/add-link',
  },
  SUPPORT: {
    NAME: 'support',
    PATH: '/support',
  },
  ABOUT_US: {
    NAME: 'about-us',
    PATH: '/about-us',
  },
  CONTACT: {
    NAME: 'contact',
    PATH: '/contact',
  },
  POLICY: {
    NAME: 'policy',
    PATH: '/policy',
  },
  PHONE_CARD: {
    NAME: 'phone-card',
    PATH: '/phone-card',
  },
  PREPAID: {
    NAME: 'prepaid',
    PATH: '/prepaid',
  },
  POSTPAID: {
    NAME: 'post-paid',
    PATH: '/post-paid',
  },
  PHONE_DATA: {
    NAME: 'phone-data',
    PATH: '/phone-data',
  },
  CARD_DATA: {
    NAME: 'card-data',
    PATH: '/card-data',
  },
  ELECTRIC_BILL: {
    NAME: 'electric-bill',
    PATH: '/electric-bill',
  },
  WATER_BILL: {
    NAME: 'water-bill',
    PATH: '/water-bill',
  },
  INTERNET_BILL: {
    NAME: 'internet-bill',
    PATH: '/internet-bill',
  },
  TELEVISION_BILL: {
    NAME: 'television-bill',
    PATH: '/television-bill',
  },
  SERVICE_RECHARGE: {
    NAME: 'service-recharge',
    PATH: '/service-recharge',
  },
  APARTMENT_FEE: {
    NAME: 'apartment-fee',
    PATH: '/apartment-fee',
  },
  EDUCATION_FEE: {
    NAME: 'education-fee',
    PATH: '/education-fee',
  },
  DEPOSIT: {
    NAME: 'deposit',
    PATH: '/deposit',
  },
  TRANSFER_WALLET: {
    NAME: 'transfer-wallet',
    PATH: '/transfer-wallet',
  },
  TRANSFER_MULTIPLE: {
    NAME: 'transfer-multiple',
    PATH: '/transfer-multiple',
  },
  RECEIVE_FROM_MM: {
    NAME: 'receive-from-mm',
    PATH: '/receive-from-mm',
  },
  TRANSFER_TO_MM: {
    NAME: 'transfer-to-mm',
    PATH: '/transfer-to-mm',
  },
  LINK_BANK: {
    NAME: 'link-bank',
    PATH: '/link-bank',
  },
  WITHDRAW: {
    NAME: 'withdraw',
    PATH: '/withdraw',
  },
  LOGIN: {
    NAME: 'login',
    PATH: '/login',
  },
  FORGOT_PASSWORD: {
    NAME: 'forgot-password',
    PATH: '/forgot-password',
  },
  NOT_PERMISSION: {
    NAME: 'not-permission',
    PATH: '/not-permission',
  },
}

export const PAYMENT_GROUP_PAGES = [
  PAGES.PHONE_CARD.NAME,
  PAGES.PREPAID.NAME,
  PAGES.POSTPAID.NAME,
  PAGES.PHONE_DATA.NAME,
  PAGES.CARD_DATA.NAME,
  PAGES.ELECTRIC_BILL.NAME,
  PAGES.WATER_BILL.NAME,
  PAGES.INTERNET_BILL.NAME,
  PAGES.TELEVISION_BILL.NAME,
  PAGES.SERVICE_RECHARGE.NAME,
  PAGES.APARTMENT_FEE.NAME,
  PAGES.EDUCATION_FEE.NAME,
]
export const TRANSFER_GROUP_PAGES = [
  PAGES.TRANSFER_WALLET.NAME,
  PAGES.TRANSFER_MULTIPLE.NAME,
  PAGES.RECEIVE_FROM_MM.NAME,
  PAGES.TRANSFER_TO_MM.NAME,
]

export const SIDEBAR_WIDTH_EXPAND = 240
export const SIDEBAR_WIDTH_COLLAPSE = 64
export const DEVICE = {
  MOBILE: 'MOBILE',
  TABLET: 'TABLET',
  DESKTOP: 'DESKTOP',
}

export const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAskgPKBcNpz71mi4NSYa5
    mazJrO0WZim7T2yy7qPxk2NqQE7OmWWakLJcaeUYnI0kO3yC57vck66RPCjKxWuW
    SGZ7dHXe0bWb5IXjcT4mNdnUIalR+lV8czsoH/wDUvkQdG1SJ+IxzW64WvoaCRZ+
    /4wBF2cSUh9oLwGEXiodUJ9oJXFZVPKGCEjPcBI0vC2ADBRmVQ1sKsZg8zbHN+gu
    U9rPLFzN4YNrCnEsSezVw/W1FKVS8J/Xx4HSSg7AyVwniz8eHi0e3a8VzFg+H09I
    5wK+w39sjDYfAdnJUkr6PjtSbN4/Sg/NMkKB2Ngn8oj7LCfe/7RNqIdiS+dQuSFg
    eQIDAQAB
    -----END PUBLIC KEY-----`;

export const TRANSACTION_STATUS = {
  WAITING: 1,
  APPROVED: 2,
  REJECTED: 3,
  CONFIRMED:4,
  ALL: 99,
}
export const USER_PROCESS_STATUS = {
  WAITING: 1,
  APPROVED: 2,
  REJECTED: 3,
  ALL: 99,
}
export const PROCESS_STATUS = {
  WAITING: 1,
  APPROVED: 2,
  REJECTED: 3,
  ALL: 99,
}
export const BREADCRUMB_DATA = {
  HOME: [
    { ID: 1, LABEL: 'Trang chủ', PATH: null },
  ],
  IDENTITY: [
    { ID: 2, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 3, LABEL: 'Thông tin định danh', PATH: null },
  ],
  MOBILE_MONEY: [
    { ID: 6, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 7, LABEL: 'Chuyển tiền Mobifone Money', PATH: null },
  ],
  TRANSACTION_MANAGE: [
    { ID: 8, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 9, LABEL: 'Quản lý giao dịch', PATH: null },
  ],
  TRANSACTION_HISTORY: [
    { ID: 10, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 11, LABEL: 'Lịch sử giao dịch', PATH: null },
  ],
  SUPPORT: [
    { ID: 14, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 15, LABEL: 'Trợ giúp', PATH: null },
  ],
  LINK_BANK: [
    { ID: 16, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 17, LABEL: 'Liên kết', PATH: null },
  ],
  TRANSFER: [
    { ID: 20, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 21, LABEL: 'Chuyển tiền', PATH: null },
  ],
  WITHDRAW: [
    { ID: 22, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 23, LABEL: 'Rút tiền', PATH: null },
  ],
  PHONE_CARD: [
    { ID: 24, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 25, LABEL: 'Mua mã thẻ', PATH: null },
  ],
  PREPAID: [
    { ID: 26, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 27, LABEL: 'Nạp tiền điện thoại trả trước', PATH: null },
  ],
  POSTPAID: [
    { ID: 28, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 29, LABEL: 'Nạp trả sau', PATH: null },
  ],
  PHONE_DATA: [
    { ID: 30, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 31, LABEL: 'Nạp data', PATH: null },
  ],
  CARD_DATA: [
    { ID: 32, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 33, LABEL: 'Mã thẻ data', PATH: null },
  ],
  ELECTRIC_BILL: [
    { ID: 34, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 35, LABEL: 'Hóa đơn tiền điện', PATH: null },
  ],
  WATER_BILL: [
    { ID: 36, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 37, LABEL: 'Hóa đơn tiền nước', PATH: null },
  ],
  INTERNET_BILL: [
    { ID: 38, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 39, LABEL: 'Hóa đơn internet', PATH: null },
  ],
  TELEVISION_BILL: [
    { ID: 40, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 41, LABEL: 'Hóa đơn truyền hình', PATH: null },
  ],
  SERVICE_RECHARGE: [
    { ID: 40, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 41, LABEL: 'Nạp dịch vụ', PATH: null },
  ],
  APARTMENT_FEE: [
    { ID: 42, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 43, LABEL: 'Phí chung cư', PATH: null },
  ],
  EDUCATION_FEE: [
    { ID: 44, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 45, LABEL: 'Học phí', PATH: null },
  ],
  DEPOSIT: [
    { ID: 46, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 47, LABEL: 'Nạp tiền', PATH: null },
  ],
  TRANSFER_WALLET: [
    { ID: 48, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 49, LABEL: 'Chuyển tiền ví', PATH: null },
  ],
  TRANSFER_MULTIPLE: [
    { ID: 50, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 51, LABEL: 'Chuyển tiền theo lô', PATH: null },
  ],
  RECEIVE_FROM_MM: [
    { ID: 52, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 53, LABEL: 'Nhận chuyển tiền từ Mobifone Money', PATH: null },
  ],
  TRANSFER_TO_MM: [
    { ID: 54, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 55, LABEL: 'Chuyển tiền tới Mobifone Money', PATH: null },
  ],
  TERM_OF_USE: [
    { ID: 56, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 57, LABEL: 'Điều khoản sử dụng', PATH: null },
  ],
  ABOUT_US: [
    { ID: 58, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 59, LABEL: 'Giới thiệu', PATH: null },
  ],
  CONTACT: [
    { ID: 60, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 61, LABEL: 'Liên hệ', PATH: null },
  ],
  POLICY: [
    { ID: 62, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 63, LABEL: 'Chính sách', PATH: null },
  ],
  ADD_LINK: [
    { ID: 64,  LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 65, LABEL: 'Thêm liên kết', PATH: null },
  ],
}
export const HOME_WIDGET_DATA = [
  {
    ID: 1,
    NUMBER: 440,
    ICON: ICONS.SUCCESS,
    LABEL: 'Đã duyệt',
    TOP_COLOR: '#28A745',
    BOTTOM_COLOR: '#228E3B',
  },
  {
    ID: 2,
    NUMBER: 800,
    ICON: ICONS.WAITING,
    LABEL: 'Đang chờ duyệt',
    TOP_COLOR: '#FFC107',
    BOTTOM_COLOR: '#D9A406',
  },
  {
    ID: 3,
    NUMBER: 100,
    ICON: ICONS.REJECT,
    LABEL: 'Từ chối',
    TOP_COLOR: '#DC3545',
    BOTTOM_COLOR: '#BB2D3B',
  },
]
export const SERVICES_DATA = [
  {
    ID: 1,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE1,
    ICON_SMALL: ICONS.SERVICE_SMALL1,
    SERVICE_NAME: 'Mã thẻ',
    DESCRIPTION: 'Mua mã thẻ di động',
    PATH: PAGES.PHONE_CARD.PATH,
  },
  {
    ID: 2,
    BADGE_NUMBER: 0,
    ICON: ICONS.SERVICE2,
    ICON_SMALL: ICONS.SERVICE_SMALL2,
    SERVICE_NAME: 'Nạp tiền',
    DESCRIPTION: 'Thanh toán di động trả trước',
    PATH: PAGES.PREPAID.PATH,
  },
  {
    ID: 3,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE3,
    ICON_SMALL: ICONS.SERVICE_SMALL3,
    SERVICE_NAME: 'Trả sau',
    DESCRIPTION: 'Thanh toán di động trả sau',
    PATH: PAGES.POSTPAID.PATH,
  },
  {
    ID: 4,
    BADGE_NUMBER: null,
    ICON: ICONS.SERVICE4,
    ICON_SMALL: ICONS.SERVICE_SMALL4,
    SERVICE_NAME: 'Nạp data',
    DESCRIPTION: 'Mua dung lượng data mobile internet',
    PATH: PAGES.PHONE_DATA.PATH,
  },
  {
    ID: 5,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE5,
    ICON_SMALL: ICONS.SERVICE_SMALL5,
    SERVICE_NAME: 'Mã thẻ data',
    DESCRIPTION: 'Mua mã thẻ gói data 3G/4G',
    PATH: PAGES.CARD_DATA.PATH,
  },
  {
    ID: 6,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE6,
    ICON_SMALL: ICONS.SERVICE_SMALL6,
    SERVICE_NAME: 'Điện',
    DESCRIPTION: 'Thanh toán tiền điện',
    PATH: PAGES.ELECTRIC_BILL.PATH,
  },
  {
    ID: 7,
    BADGE_NUMBER: null,
    ICON: ICONS.SERVICE7,
    ICON_SMALL: ICONS.SERVICE_SMALL7,
    SERVICE_NAME: 'Nước',
    DESCRIPTION: 'Thanh toán tiền nước nhanh chóng',
    PATH: PAGES.WATER_BILL.PATH,
  },
  {
    ID: 8,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE8,
    ICON_SMALL: ICONS.SERVICE_SMALL8,
    SERVICE_NAME: 'Internet',
    DESCRIPTION: 'Thanh toán cước Internet',
    PATH: PAGES.INTERNET_BILL.PATH,
  },
  {
    ID: 9,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE9,
    ICON_SMALL: ICONS.SERVICE_SMALL9,
    SERVICE_NAME: 'Truyền hình',
    DESCRIPTION: 'Thanh toán cước truyền hình',
    PATH: PAGES.TELEVISION_BILL.PATH,
  },
  {
    ID: 10,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE10,
    ICON_SMALL: ICONS.SERVICE_SMALL10,
    SERVICE_NAME: 'Nạp dịch vụ',
    DESCRIPTION: 'Nạp tiền dịch vụ',
    PATH: PAGES.SERVICE_RECHARGE.PATH,
  },
  {
    ID: 11,
    BADGE_NUMBER: null,
    ICON: ICONS.SERVICE11,
    ICON_SMALL: ICONS.SERVICE_SMALL11,
    SERVICE_NAME: 'Phí chung cư',
    DESCRIPTION: 'Thanh toán phí chung cư',
    PATH: PAGES.APARTMENT_FEE.PATH,
  },

  {
    ID: 12,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE12,
    ICON_SMALL: ICONS.SERVICE_SMALL12,
    SERVICE_NAME: 'Học phí',
    DESCRIPTION: 'Thanh toán học phí',
    PATH: PAGES.EDUCATION_FEE.PATH,
  },
]
export const THEME_LIST = [
  {
    name: 'blue',
    borderRadius: '8px',
    solidColor: '#0465B0',
    solidLightColor: 'rgb(233, 245, 254)',
    gradientColor: 'linear-gradient(108.88deg, #04BEFE 0%, #4481EB 100%)',
    shadowColor: '0 2px 10px rgba(68, 129, 235, 0.5)',
    lightShadowColor: '0 2px 4px rgba(61, 147, 190, 0.24), 0 4px 8px rgba(61, 153, 190, 0.16)',
  },
  // {
  //   name: 'pink',
  //   borderRadius: '8px',
  //   solidColor: 'rgb(244, 67, 54)',
  //   solidLightColor: 'rgb(254, 237, 235)',
  //   gradientColor: 'linear-gradient(108.84deg, #F77062 0%, #FE5196 100%)',
  //   shadowColor: '0 2px 10px rgba(254, 81, 150, 0.5)',
  //   lightShadowColor: '0 2px 4px rgba(190, 61, 97, 0.24), 0 4px 8px rgba(190, 61, 61, 0.16)',
  // },
  {
    name: 'green',
    borderRadius: '8px',
    solidColor: '#3DBEA3',
    solidLightColor: '#ecf9f6',
    gradientColor: 'linear-gradient(167.51deg, #2ECF94 24.37%, #3DBEA3 78.07%)',
    shadowColor: '0 2px 10px rgba(46,207,148,0.6)',
    lightShadowColor: '0 2px 4px rgba(61, 190, 163, 0.24), 0 4px 8px rgba(61, 190, 163, 0.16)',
  },
  {
    name: 'violet',
    borderRadius: '8px',
    solidColor: 'rgb(229,46,113)',
    solidLightColor: 'rgba(229,46,113, .2)',
    gradientColor: 'linear-gradient(to top left,#ff8a00,#e52e71)',
    shadowColor: '0px 2px 10px rgba(229,46,113, 0.5)',
    lightShadowColor: '0 2px 4px rgba(190, 61, 97, 0.24), 0 4px 8px rgba(190, 61, 61, 0.16)',
  },
  {
    name: 'black',
    borderRadius: '8px',
    solidColor: 'rgb(70, 70, 70)',
    solidLightColor: 'rgb(200, 200, 200)',
    gradientColor: 'linear-gradient(108.88deg, rgb(121, 121, 121) 0%, rgb(70, 70, 70) 100%)',
    shadowColor: '0px 2px 10px rgba(70, 70, 70, 0.5)',
    lightShadowColor: '0 2px 4px rgba(0, 0, 0, 0.22), 0 4px 8px rgba(0, 0, 0, 0.04)',
  },
]
export const mockupLinkedCard = [
  {
    icon: ICONS.ICON_CARD,
    cardNumber: '**** **** **** 1234',
    name: 'Tran Van A',
    expiredDate: '10/20',
    background: 'radial-gradient(93.93% 85.34% at 2.97% 8.14%, #355B7A 0%, #243747 100%)',
  },
  {
    icon: ICONS.ICON_CARD,
    cardNumber: '**** **** **** 4567',
    name: 'Tran Van B',
    expiredDate: '09/20',
    background: 'radial-gradient(93.93% 85.34% at 2.97% 8.14%, #355B7A 0%, #243747 100%)',
  },
  {
    icon: ICONS.ICON_CARD,
    cardNumber: '**** **** **** 6789',
    name: 'Tran Van C',
    expiredDate: '08/20',
    background: 'radial-gradient(93.93% 85.34% at 2.97% 8.14%, #355B7A 0%, #243747 100%)',
  },
]
export const TRANSFERS = [
  {
    ID: 1,
    ICON: ICONS.TRANSFER1,
    LABEL: 'Chuyển tiền Ví',
    PATH: PAGES.TRANSFER_WALLET.PATH,
  },
  {
    ID: 2,
    ICON: ICONS.TRANSFER2,
    LABEL: 'Chuyển tiền theo lô',
    PATH: PAGES.TRANSFER_MULTIPLE.PATH,
  },
  {
    ID: 3,
    ICON: ICONS.TRANSFER3,
    LABEL: 'Nhận chuyển tiền từ MM',
    PATH: PAGES.RECEIVE_FROM_MM.PATH,
  },
  {
    ID: 4,
    ICON: ICONS.TRANSFER4,
    LABEL: 'Chuyển tới Mobile Money',
    PATH: PAGES.TRANSFER_TO_MM.PATH,
  },
]