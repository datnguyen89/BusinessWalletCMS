import { action, observable } from 'mobx'
import { infoAccountRequest } from '../requests/infoAccountRequest'

class InfoAccountStore {

  @observable infoAccount = [];

  constructor() {
  }
  @action getInfoAccount = () => {
    return new Promise((resolve, reject) => {
      infoAccountRequest.getInfoAccount()
        .then(response => {
          this.infoAccount = [...response.data];
          resolve(response);
        })
        .catch(error => reject(error))
    })
  }
}

export default new InfoAccountStore()