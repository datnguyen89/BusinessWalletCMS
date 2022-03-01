import React from 'react'
import { apiUrl } from './config'
// Encrypt
import cypherUtil from './utils/cypherUtil'
import stringUtils from './utils/stringUtils'
// Axios
import axios from 'axios'
// Styling
import './App.less'
import ThemeProvider from './providers/ThemeProvider'
import 'antd/es/modal/style'
import 'antd/es/slider/style'
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
import NotPermissionPage from './pages/WebApp/NotPermissionPage'
import NotFoundPage from './pages/WebApp/NotFoundPage'
import TestPage from './pages/WebApp/TestPage'
import ProtectedModule from './modules/ProtectedModule'
import AuthModule from './modules/AuthModule'
// ip
const publicIp = require('public-ip')


const history = createBrowserHistory()

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !localStorage.getItem('jwt') ? (
        <Redirect
          to={{
            pathname: PAGES.LOGIN.PATH,
            state: { from: window.location.pathname },
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

// axios.defaults.headers.common['Ip-Address'] = commonStore.ipAddress
axios.interceptors.request.use(
  config => {
    if (config.disableSpinner) {
      commonStore.setAppLoading(false)
    } else {
      commonStore.setAppLoading(true)
    }
    console.log('REQUEST', config.url.replace(apiUrl, ''), config.data)
    let k = stringUtils.randomId(16)
    let obj = { key: k, iv: k }
    let strDataKey = JSON.stringify(obj)
    let strData = JSON.stringify({ ...config.data })

    let encryptedDataKey = cypherUtil.rsaEncrypt(strDataKey)
    let encryptedData = cypherUtil.aesEncrypt(strData, k, k)
    config.data = { data: encryptedData, objKey: encryptedDataKey }

    return config
  },
  error => {
    commonStore.setAppLoading(false)
    return Promise.reject(error)
  },
)

axios.interceptors.response.use(
  response => {
    commonStore.setAppLoading(false)
    console.log('RESPONSE', response.config.url.replace(apiUrl, ''), response)
    if (response.data.error) {
      console.log(response.data.message)
      if (response.data.responseCode === 401) {
        authenticationStore.logout()
          .finally(() => {
            history.push({
              pathname: PAGES.LOGIN.PATH,
              state: { from: window.location.pathname },
            })
          })
        message.error('Phiên đăng nhập hết hạn')
      }
    }
    return response
  },
  error => {
    commonStore.setAppLoading(false)
    if (error?.response?.status === 401) {
      authenticationStore.logout()
        .finally(() => {
          history.push({
            pathname: PAGES.LOGIN.PATH,
            state: { from: window.location.pathname },
          })
        })
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
            <Route
              exact path={[
              PAGES.LOGIN.PATH,
            ]}
              component={AuthModule}
            />
            <ProtectedRoute
              exact
              path={[
                PAGES.HOME.PATH,
                PAGES.BUSINESS_PROFILE_MANAGER.PATH,
                PAGES.BUSINESS_USER_MANAGER.PATH,
                PAGES.BUSINESS_DEPARTMENT_MANAGER.PATH,
                PAGES.BUSINESS_APPROVE_MANAGER.PATH,
              ]}
              component={ProtectedModule}
            />

            <Route exact path={PAGES.TEST.PATH} component={TestPage} />
            <Route exact path={PAGES.NOT_PERMISSION.PATH} component={NotPermissionPage} /> {/*Không có quyền truy cập*/}
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
