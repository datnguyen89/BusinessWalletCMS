import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  InfoAccountContent,
  InfoAccountMoney,
  InfoAccountPhone,
  InfoAccountTitle,
  InfoAccountWrapper,
} from './InfoAccountStyled'
import { toJS } from 'mobx'

const InfoAccount = props => {
  const { data, enableBorder } = props
  return (

      data ? <InfoAccountWrapper border={enableBorder} borderColor={(data.default) ? 'blue' : '#E0E0E0'}>
      <InfoAccountTitle>Tài khoản ví</InfoAccountTitle>
      <InfoAccountContent>{data.bankname}</InfoAccountContent>
      <InfoAccountPhone>{data.phoneNumber}</InfoAccountPhone>
      <InfoAccountMoney>{data.accountBalance}<span>đ</span></InfoAccountMoney>
    </InfoAccountWrapper> : <div></div>


  )
}

InfoAccount.propTypes = {
  callbackBankAccount: PropTypes.func,
  enableBorder: PropTypes.bool.isRequired
}

export default InfoAccount