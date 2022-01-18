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
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotPermissionPage from './pages/NotPermissionPage'
import NotFoundPage from './pages/NotFoundPage'
import CustomerProfilePage from './pages/CustomerProfilePage'
import UserManagerPage from './pages/UserManagerPage'
import DepartmentPage from './pages/DepartmentPage'
import ApproveCompanyPage from './pages/ApproveCompanyPage'


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
            <Route exact path={PAGES.CUSTOMER_PROFILE.PATH} component={CustomerProfilePage} />
            <Route exact path={PAGES.USER_MANAGER.PATH} component={UserManagerPage} />
            <Route exact path={PAGES.DEPARTMENT.PATH} component={DepartmentPage} />
            <Route exact path={PAGES.APPROVE_COMPANY.PATH} component={ApproveCompanyPage} />
            <Route exact path={PAGES.NOT_PERMISSION.PATH} component={NotPermissionPage} /> {/*Không có quyền truy cập*/}
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
