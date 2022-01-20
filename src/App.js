import React, { useEffect } from 'react'
import { deviceDetect } from 'react-device-detect'
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
import authenticationStore from './stores/authenticationStore.js'

//moment
import moment from 'moment'
import 'moment/locale/vi'
import { PAGES } from './utils/constant'
// Pages
import HomePage from './pages/WebApp/HomePage'
import LoginPage from './pages/WebApp/LoginPage'
import NotPermissionPage from './pages/WebApp/NotPermissionPage'
import NotFoundPage from './pages/WebApp/NotFoundPage'
import Company_CustomerProfilePage from './pages/CompanyManager/Company_CustomerProfilePage'
import Company_UserManagerPage from './pages/CompanyManager/Company_UserManagerPage'
import Company_DepartmentManagerPage from './pages/CompanyManager/Company_DepartmentManagerPage'
import Company_ApproveCompanyPage from './pages/CompanyManager/Company_ApproveCompanyPage'
import Customer_CreateCustomerPage from './pages/CustomerManager/Customer_CreateCustomerPage'
import Customer_CreateUserCompanyPage from './pages/CustomerManager/Customer_CreateUserCompanyPage'
import Customer_ApproveCompanyPage from './pages/CustomerManager/Customer_ApproveCompanyPage'


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

moment.updateLocale('vi', {
  week: {
    dow: 1,
  },
})

const rootStores = {
  commonStore,
  authenticationStore,

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
            <Route exact path={PAGES.LOGIN.PATH} component={LoginPage} /> {/*Đăng nhập*/}
            <Route exact path={PAGES.HOME.PATH} component={HomePage} />
            
            <Route exact path={PAGES.COMPANY_CUSTOMER_PROFILE.PATH} component={Company_CustomerProfilePage} />
            <Route exact path={PAGES.COMPANY_USER_MANAGER.PATH} component={Company_UserManagerPage} />
            <Route exact path={PAGES.COMPANY_DEPARTMENT.PATH} component={Company_DepartmentManagerPage} />
            <Route exact path={PAGES.COMPANY_APPROVE_COMPANY.PATH} component={Company_ApproveCompanyPage} />
            
            <Route exact path={PAGES.CUSTOMER_CREATE_CUSTOMER.PATH} component={Customer_CreateCustomerPage} />
            <Route exact path={PAGES.CUSTOMER_CREATE_USER_COMPANY.PATH} component={Customer_CreateUserCompanyPage} />
            <Route exact path={PAGES.CUSTOMER_APPROVE_COMPANY.PATH} component={Customer_ApproveCompanyPage} />



            <Route exact path={PAGES.NOT_PERMISSION.PATH} component={NotPermissionPage} /> {/*Không có quyền truy cập*/}
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
