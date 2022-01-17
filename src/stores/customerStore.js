import { action, observable } from 'mobx'

class CustomerStore {

  @observable customer = null;

  constructor() {
  }

  @action getCustomerByCode = (id) => {
    return new Promise((resolve, reject) => {
      let data =  {
        id: 1,
        customerCode: '00000123456',
        customerName: 'Nguyen Van A',
        customerAddress: '123 Liễu Giai, Ba Đình, Hà Nội',
        customerNetworkMobileId: 1,
        payTerms: 'Cước trả sau tháng 9',
        tax: '300000',
      };

      this.customer = data
      resolve(data)
    })
  }

  @action getCustomerByPhoneNumber = (phone) => {
    return new Promise((resolve, reject) => {
      let data =  {
        id: 1,
        customerCode: '00000123456',
        customerName: 'Nguyen Van A',
        payTerms: 'Cước trả sau tháng 9',
        debitBalance: '300000',
        customerNetworkMobileId: 1
      };

      this.customer = data
      resolve(data)
    })
  }

  @action getCustomerByCodeOrContract = (id) => {
    return new Promise((resolve, reject) => {
      let data =  {
        id: 1,
        customerCode: '00000123456',
        customerName: 'Nguyen Van A',
        providerBy: 'VETC',
        payTerms: 'Cước trả sau tháng 9',
        tax: '300000',
      };

      this.customer = data
      resolve(data)
    })
  }

  @action getCustomerByCodeForTelevisions = (id) => {
    return new Promise((resolve, reject) => {
      let data =  {
        id: 1,
        customerCode: '00000123456',
        customerName: 'Nguyen Van A',
        providerBy: 'VETC',
        payTerms: 'Cước trả sau tháng 9',
        debitBalance: '300000',
      };

      this.customer = data
      resolve(data)
    })
  }

  @action getCustomerByCodeForInternetTax = (id) => {
    return new Promise((resolve, reject) => {
      let data =  {
        id: 1,
        customerName: 'Nguyen Van A',
        customerAddress: '123 Liễu Giai, Ba Đình, Hà Nội',
        customerCode: '00000123456',
        payTerms: 'Cước trả sau tháng 9',
        packageName: '3 Tháng Internet',
        tax: '300000',
      };

      this.customer = data
      resolve(data)
    })
  }

  @action getCustomerByCodeForElectricTax = (id) => {
    return new Promise((resolve, reject) => {
      let data =  {
        id: 1,
        customerName: 'Nguyen Van A',
        providerBy: 'VETC',
        customerCode: '00000123456',
        customerAddress: '123 Liễu Giai, Ba Đình, Hà Nội',
        payTerms: 'Cước trả sau tháng 9',
        packageName: '3 Tháng Internet',
        tax: '300000',
      };

      this.customer = data
      resolve(data)
    })
  }

  @action getCustomerByCodeForEducationFee = (id) => {
    return new Promise((resolve, reject) => {
      let data =  {
        id: 1,
        customerName: 'Nguyen Van A',
        customerCode: '00000123456',
        customerAddress: '123 Liễu Giai, Ba Đình, Hà Nội',
        payTerms: 'Học Phí Kỳ 1',
        packageName: '3 Tháng Internet',
        tax: '300000',
      };

      this.customer = data
      resolve(data)
    })
  }

  @action getCustomerByCodeForAppartmentFee = (id) => {
    return new Promise((resolve, reject) => {
      let data =  {
        id: 1,
        customerName: 'Nguyen Van A',
        customerCode: '00000123456',
        customerAddress: '123 Liễu Giai, Ba Đình, Hà Nội',
        payTerms: 'Phí chung cư tháng 12',
        tax: '300000',
      };

      this.customer = data
      resolve(data)
    })
  }

  @action setCustomerByCode = (customer) => {
    this.customer = customer;
  }
}
export default new CustomerStore()