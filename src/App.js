import React, { useEffect } from 'react'
// Axios
import axios from 'axios'
// ip
const publicIp = require('public-ip')
// Styling
import './App.less'
import ThemeProvider from './providers/ThemeProvider'
// React Router
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
// MobX
import { Provider } from 'mobx-react'
import commonStore from './stores/commonStore.js'
import mobileMoneyStore from './stores/mobileMoneyStore.js'
import infoAccountStore from './stores/infoAccountStore.js'
// Pages
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import NotPermissionPage from './pages/NotPermissionPage'
import ProtectedPage from './pages/ProtectedPage'
import LoginPage from './pages/LoginPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import IdentityInfoPage from './pages/IdentityInfoPage'
import SupportPage from './pages/SupportPage'
import TransactionHistoryPage from './pages/TransactionHistoryPage'
import TransactionManagePage from './pages/TransactionManagePage'
import TransferMultiplePage from './pages/TransferMultiplePage'
import DepositPage from './pages/DepositPage'
import WithdrawPage from './pages/WithdrawPage'
import LinkBankPage from './pages/LinkBankPage'
import TermsOfUsePage from './pages/TermsOfUsePage'
import AboutUsPage from './pages/AboutUsPage'
import ContactPage from './pages/ContactPage'
import PolicyPage from './pages/PolicyPage'
import PhoneCardPage from './pages/PhoneCardPage'
import PrepaidPage from './pages/PrepaidPage'
import PostpaidPage from './pages/PostpaidPage'
import PhoneDataPage from './pages/PhoneDataPage'
import CardDataPage from './pages/CardDataPage'
import ElectricBillPage from './pages/ElectricBillPage'
import WaterBillPage from './pages/WaterBillPage'
import InternetBillPage from './pages/InternetBillPage'
import TelevisionBillPage from './pages/TelevisionBillPage'
import ServiceRechargePage from './pages/ServiceRechargePage'
import ApartmentFeePage from './pages/ApartmentFeePage'
import EducationFeePage from './pages/EducationFeePage'
import TransferWalletPage from './pages/TransferWalletPage'
import ReceiveFromMmPage from './pages/ReceiveFromMmPage'
import TransferToMmPage from './pages/TransferToMmPage'

//moment
import moment from 'moment'
import 'moment/locale/vi'
import LoadingOverLay from './components/LoadingOverLay'
import { PAGES } from './utils/constant'
import { deviceDetect } from 'react-device-detect'
import authenticationStore from './stores/authenticationStore.js'
import AddLinkPage from './pages/AddLinkPage'
import accountWalletStore from './stores/accountWalletStore'
import providerStore from './stores/providerStore'
import mobileNetworkOperatorStore from './stores/mobileNetworkOperatorStore'
import customerStore from './stores/customerStore'

const history = createBrowserHistory()

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !localStorage.getItem('jwt') ? (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
)

moment.locale('vi', {
  week: {
    dow: 1,
  },
})

const rootStores = {
  commonStore,
  mobileMoneyStore,
  infoAccountStore,
  authenticationStore,
  accountWalletStore,
  providerStore,
  mobileNetworkOperatorStore,
  customerStore
}

// axios.defaults.timeout = 20000
axios.interceptors.request.use(
  config => {
    //config.headers
    //config.params
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error?.response?.status === 401) {
      // TODO: clear localstorage, user's State, store => redirect to login
    }
    return Promise.reject(error)
  },
)

const App = () => {

  // (async () => {
  //   console.log(await publicIp.v4())
  // })()
  // useEffect(() => {
  //   console.log(deviceDetect())
  // }, [])

  return (
    <Provider {...rootStores}>
      <ThemeProvider>
        <Router history={history}>
          <Switch>
            <Route exact path={PAGES.HOME.PATH}
                   component={HomePage} />
            <Route exact path={PAGES.IDENTITY.PATH}
                   component={IdentityInfoPage} /> {/*Thông tin định danh*/}
            <Route exact path={PAGES.TRANSACTION_MANAGE.PATH}
                   component={TransactionManagePage} /> {/*Quản lý giao dịch*/}
            <Route exact path={PAGES.TRANSACTION_HISTORY.PATH}
                   component={TransactionHistoryPage} /> {/*Lịch sử giao dịch*/}
            <Route exact path={PAGES.TERM_OF_USE.PATH}
                   component={TermsOfUsePage} /> {/*Điều khoản sử dụng*/}
            <Route exact path={PAGES.SUPPORT.PATH}
                   component={SupportPage} /> {/*Trợ giúp*/}
            <Route exact path={PAGES.ABOUT_US.PATH}
                   component={AboutUsPage} /> {/*Giới thiệu*/}
            <Route exact path={PAGES.CONTACT.PATH}
                   component={ContactPage} /> {/*Liên hệ*/}
            <Route exact path={PAGES.POLICY.PATH}
                   component={PolicyPage} /> {/*Chính sách*/}
            <Route exact path={PAGES.PHONE_CARD.PATH}
                   component={PhoneCardPage} /> {/*Mã thẻ*/}
            <Route exact path={PAGES.PREPAID.PATH}
                   component={PrepaidPage} /> {/*Nạp tiền điện thoại trả trước*/}
            <Route exact path={PAGES.POSTPAID.PATH}
                   component={PostpaidPage} /> {/*Nạp tiền điện thoại trả sau*/}
            <Route exact path={PAGES.PHONE_DATA.PATH}
                   component={PhoneDataPage} /> {/*Nạp data*/}
            <Route exact path={PAGES.CARD_DATA.PATH}
                   component={CardDataPage} /> {/*Mã thẻ data*/}
            <Route exact path={PAGES.ELECTRIC_BILL.PATH}
                   component={ElectricBillPage} /> {/*Hóa đơn điện*/}
            <Route exact path={PAGES.WATER_BILL.PATH}
                   component={WaterBillPage} /> {/*Hóa đơn nước*/}
            <Route exact path={PAGES.INTERNET_BILL.PATH}
                   component={InternetBillPage} /> {/*Internet*/}
            <Route exact path={PAGES.TELEVISION_BILL.PATH}
                   component={TelevisionBillPage} /> {/*Truyền hình*/}
            <Route exact path={PAGES.SERVICE_RECHARGE.PATH}
                   component={ServiceRechargePage} /> {/*Nạp dịch vụ*/}
            <Route exact path={PAGES.APARTMENT_FEE.PATH}
                   component={ApartmentFeePage} /> {/*Phí chung cư*/}
            <Route exact path={PAGES.EDUCATION_FEE.PATH}
                   component={EducationFeePage} /> {/*Học phí*/}
            <Route exact path={PAGES.DEPOSIT.PATH}
                   component={DepositPage} /> {/*Nạp tiền*/}
            <Route exact path={PAGES.TRANSFER_WALLET.PATH}
                   component={TransferWalletPage} /> {/*Chuyển tiền ví*/}
            <Route exact path={PAGES.TRANSFER_MULTIPLE.PATH}
                   component={TransferMultiplePage} /> {/*Chuyển tiền theo lô*/}
            <Route exact path={PAGES.RECEIVE_FROM_MM.PATH}
                   component={ReceiveFromMmPage} /> {/*Nhận chuyển tiền từ MM*/}
            <Route exact path={PAGES.TRANSFER_TO_MM.PATH}
                   component={TransferToMmPage} /> {/*Chuyển tiền tới MM*/}
            <Route exact path={PAGES.LINK_BANK.PATH}
                   component={LinkBankPage} /> {/*Liên kết*/}
            <Route exact path={PAGES.ADD_LINK.PATH}
                   component={AddLinkPage} /> {/*Thêm liên kết*/}
            <Route exact path={PAGES.WITHDRAW.PATH}
                   component={WithdrawPage} /> {/*Rút tiền*/}
            <Route exact path={PAGES.LOGIN.PATH}
                   component={LoginPage} /> {/*Đăng nhập*/}
            <Route exact path={PAGES.FORGOT_PASSWORD.PATH}
                   component={ForgotPasswordPage} /> {/*Quên mật khẩu*/}
            <Route exact path={PAGES.NOT_PERMISSION.PATH}
                   component={NotPermissionPage} /> {/*Không có quyền truy cập*/}
            <Route exact path={'/protected'}
                   component={ProtectedPage} /> {/*Test*/}
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
        <LoadingOverLay />
      </ThemeProvider>
    </Provider>
  )
}

export default App
