import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown } from 'antd'
import {
  InfoAccountOverLayItem,
  InfoAccountOverLayWrapper,
  InfoAccountWrapper,
} from './InfoAccountAreaStyled'
import InfoAccount from '../InfoAccount'
import InfoAccountDropdown from '../InfoAccountDropdown'
import { RowFlexEndDiv } from '../CommonStyled/CommonStyled'
import { inject, observer } from 'mobx-react'

const InfoAccountArea = props => {
  const { callbackBankAccount, selectedAccount, accountWalletStore } = props

  const handleSelectedBankAccount = (item) => {
    if (callbackBankAccount)
      callbackBankAccount(item)
  }

  const menu = (
    <InfoAccountOverLayWrapper>
      {
        accountWalletStore.accountWallets.map(item => (
          <InfoAccountOverLayItem key={item.id} onClick={() => handleSelectedBankAccount(item)}>
            <InfoAccountDropdown selectedItem={selectedAccount} data={item} enableBorder={true} />
          </InfoAccountOverLayItem>

        ))
      }
    </InfoAccountOverLayWrapper>
  )

  return (
    <InfoAccountWrapper>
      <InfoAccount data={selectedAccount ? selectedAccount : accountWalletStore.accountWallets.find(item => item.default)} enableBorder={false}></InfoAccount>
      <RowFlexEndDiv>
        <Dropdown
          overlay={menu}
          trigger={['click']}
          placement='bottomRight'
          overlayClassName={'dropdown-style-info-acount-class'}
        >
          <a className='ant-dropdown-link' onClick={e => e.preventDefault()}>
            Đổi tài khoản <DownOutlined />
          </a>
        </Dropdown>
      </RowFlexEndDiv>
    </InfoAccountWrapper>
  )
}

InfoAccountArea.propTypes = {
  listLinkedCard: PropTypes.array,
  callbackBankAccount: PropTypes.func,
  selectedAccount: PropTypes.any,
}

export default inject('accountWalletStore')(observer(InfoAccountArea))