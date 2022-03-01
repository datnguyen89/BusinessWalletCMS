import { action, autorun, observable } from 'mobx'
import { AuthenticationRequest } from '../requests/authenticationRequest'

class AuthenticationStore {
  constructor() {
    autorun(() => {
      this.jwtDecode = this.accessToken ? JSON.parse(atob(this.accessToken?.split('.')[1])) : {}
    })
  }
  @observable jwtDecode = null
  @observable accessToken = localStorage.getItem('jwt') || undefined
  @observable coreSysToken = localStorage.getItem('coreSysToken') || undefined

  @action userLogin = (payload) => {
    return new Promise((resolve, reject) => {
      AuthenticationRequest.userLogin(payload)
        .then(response => {
          switch (response.data?.responseCode) {
            case 0:
              let param = response.data?.param
              const tokenData = param?.token
              const coreSysTokenData = param?.coreSysToken
              localStorage.setItem('jwt', tokenData)
              localStorage.setItem('coreSysToken', coreSysTokenData)
              this.accessToken = tokenData
              this.coreSysToken = coreSysTokenData
              break
            default:
              break
          }
          resolve(response.data)
        })
        .catch(error => reject(error))
    })
  }
  @action activeDevice = (payload) => {
    return new Promise((resolve, reject) => {
      AuthenticationRequest.activeDevice(payload)
        .then(response => {
          switch (response.data?.responseCode) {
            case 0:
              let param = response.data?.param
              const tokenData = param?.token
              const coreSysTokenData = param?.coreSysToken
              localStorage.setItem('jwt', tokenData)
              localStorage.setItem('coreSysToken', coreSysTokenData)
              this.accessToken = tokenData
              this.coreSysToken = coreSysTokenData
              break
            default:
              break
          }
          resolve(response.data)
        })
        .catch(error => reject(error))
    })
  }
  @action logout = () => {
    return new Promise((resolve, reject) => {
      AuthenticationRequest.logout()
        .then(response => {
          resolve(response.data)
        })
        .catch(error => reject(error))
        .finally(() => {
          this.accessToken = undefined
          this.coreSysToken = undefined
          localStorage.removeItem('jwt')
          localStorage.removeItem('coreSysToken')
        })
    })
  }
}

export default new AuthenticationStore()
