import { action, observable } from 'mobx'
import { infoAccountRequest } from '../requests/infoAccountRequest'

class AccountWalletStore {

  @observable accountWallets = [];
  @observable listBankInternal = [];
  @observable listBankDirect = [];
  @observable listBankDirected = [];

  constructor(  ) {
  }
  @action getAccountWallets = () => {
    return new Promise((resolve, reject) => {
      let data =  [
        {id: 1, bankname: 'Công ty cổ phần thương mại Sài gon - Sacombank 1', phoneNumber: '09876543210', accountBalance: '123000000', default: false, enterpriseIdNumber: 'KD987654321' },
        {id: 2, bankname: 'Công ty cổ phần thương mại Sài gon - Sacombank 2', phoneNumber: '09876543210', accountBalance: '123000000', default: true, enterpriseIdNumber: 'KD987654321' },
        {id: 3, bankname: 'Công ty cổ phần thương mại Sài gon - Sacombank 3', phoneNumber: '09876543210', accountBalance: '123000000', default: false, enterpriseIdNumber: 'KD987654321' },
        {id: 4, bankname: 'Công ty cổ phần thương mại Sài gon - Sacombank 4', phoneNumber: '09876543210', accountBalance: '123000000', default: false, enterpriseIdNumber: 'KD987654321' }
      ]
      this.accountWallets = data
      resolve(data)
    })
  }

  @action setAccountWallets = (arr) => {
    this.accountWallets = arr;
  }

  @action getListBankInternal = () => {
    return new Promise((resolve, reject) => {
      let data =  [
        {id: 1, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 2, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 3, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 4, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 5, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 6, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 7, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 8, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 9, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 10, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 11, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 12, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 13, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 14, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 15, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 16, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 17, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 18, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 19, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 20, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 21, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 22, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 23, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 24, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 25, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 26, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 27, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 28, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 29, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
        {id: 30, imageUrl: require('../media/images/HD_Bank.png'), accountNumber: '123456789', name: 'HD Bank'},
      ]

      this.listBankInternal = data
      resolve(data)
    })
  }

  @action getListBankDirect = () => {
    return new Promise((resolve, reject) => {
      this.listBankDirect = [
        { id: 31, imageUrl: require('../media/images/HD_Bank.png'), name: 'HD Bank' },
        { id: 32, imageUrl: require('../media/images/HD_Bank.png'), name: 'HD Bank' },
        { id: 33, imageUrl: require('../media/images/HD_Bank.png'), name: 'HD Bank' },
      ];
    })
  }

  @action getListBankDirected = () => {
    return new Promise((resolve, reject) => {
      this.listBankDirected = [
        { id: 34, imageUrl: require('../media/images/vcbank.png'), name: 'HD Bank', accountNumber: '09123456789' },
        { id: 35, imageUrl: require('../media/images/vcbank.png'), name: 'HD Bank', accountNumber: '09123456789' },
        { id: 36, imageUrl: require('../media/images/vcbank.png'), name: 'HD Bank', accountNumber: '09123456789' },
      ];
    })
  }
}

export default new AccountWalletStore()