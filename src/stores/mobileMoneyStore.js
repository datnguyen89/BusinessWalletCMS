import { action, observable } from 'mobx'
import { AuthenticationRequest } from '../requests/authenticationRequest'

class MobileMoneyStore {
  @observable MMUserInfo = null
  @action getMMUserInfo = (payload) => {
    return new Promise((resolve, reject) => {
      if (payload.mobileMoneyAccount === '1') {
        this.MMUserInfo = { Id: 1, name: 'Nguyễn Văn A', passport: '0123456789' }
      } else {
        this.MMUserInfo = null
      }
      resolve()
    })
  }
}

export default new MobileMoneyStore()