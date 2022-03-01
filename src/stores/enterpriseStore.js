import { action, autorun, observable } from 'mobx'
import { EnterpriseRequest } from '../requests/enterpriseRequest'

class EnterpriseStore {
  @observable formDataStep1 = null
  @observable formDataStep2 = null
  @action setFormDataStep1 = data => {
    this.formDataStep1 = data
  }
  @action setFormDataStep2 = data => {
    this.formDataStep2 = data
  }

  @action createEnterprise = (payload) => {
    return new Promise((resolve, reject) => {
      EnterpriseRequest.createEnterprise(payload)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => reject(error))
    })
  }
}

export default new EnterpriseStore()
