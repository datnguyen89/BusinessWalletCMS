import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {inject, observer} from 'mobx-react'
import { toJS } from 'mobx'
import {
  InfoAccountDropdownContent, InfoAccountDropdownMoney, InfoAccountDropdownPhone,
  InfoAccountDropdownTitle,
  InfoAccountDropdownWrapper,
} from './InfoAccountDropdownStyled'

const InfoAccountDropdown = props => {
  const { data, enableBorder, commonStore, selectedItem } = props
  return (
      data ? <InfoAccountDropdownWrapper border={enableBorder} borderColor={(data.id === selectedItem?.id) ? commonStore.appTheme.solidColor : '#E0E0E0'}>
      <InfoAccountDropdownTitle>Tài khoản ví</InfoAccountDropdownTitle>
      <InfoAccountDropdownContent>{data.bankname}</InfoAccountDropdownContent>
      <InfoAccountDropdownPhone>{data.phoneNumber}</InfoAccountDropdownPhone>
      <InfoAccountDropdownMoney>{data.accountBalance}<span>đ</span></InfoAccountDropdownMoney>
    </InfoAccountDropdownWrapper> : <></>
  )
}

InfoAccountDropdown.propTypes = {
  callbackBankAccount: PropTypes.func,
  enableBorder: PropTypes.bool.isRequired
}

export default inject('commonStore')(observer(InfoAccountDropdown))