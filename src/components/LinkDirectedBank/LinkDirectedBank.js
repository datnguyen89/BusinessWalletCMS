import React, { useEffect, useState } from 'react'
import {
  AccountBalance,
  AreaBoundDirectBank, CardNumberWallet, ContentInfoDigitalWallet,
  ImgBank,
  LinkDirectedBankTitle,
  LinkDirectedBankWrapper,
  WrapperDirectedBank,
} from './LinkDirectedBankStyled'
import { Col } from 'antd'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

const LinkDirectedBank = props => {
  const { commonStore , selectedItem, setClickFunds, accountWalletStore } = props;

  useEffect(() => {
    accountWalletStore.getListBankDirected();
  }, []);

  const handleClickFunds = (value) => {
    setClickFunds(value);
  }

  return (
    <LinkDirectedBankWrapper>
      <LinkDirectedBankTitle>Ngân hàng liên kết trực tiếp</LinkDirectedBankTitle>
      <AreaBoundDirectBank>
        {
          accountWalletStore.listBankDirected.map(item => (
            <Col key={item.id} span={24}>
              <WrapperDirectedBank onClick={() => handleClickFunds(item)} borderColor={selectedItem?.id === item.id ? '#0465B0' : '#E0E0E0'}>
                <ImgBank src={item.imageUrl} alt={item.imageUrl} color={commonStore.appTheme.solidColor} active={selectedItem?.id === item.id}/>
                <ContentInfoDigitalWallet colorText={selectedItem?.id === item.id ? '#0465B0' : '#333333'}>
                  <CardNumberWallet>Vietcombank</CardNumberWallet>
                  <AccountBalance>0071******* 1234</AccountBalance>
                </ContentInfoDigitalWallet>
              </WrapperDirectedBank>
            </Col>
          ))
        }
      </AreaBoundDirectBank>

    </LinkDirectedBankWrapper>
  )
}

LinkDirectedBank.propTypes = {
  selectedItem: PropTypes.object,
  callbackHitBank: PropTypes.func
}


export default inject('commonStore', 'accountWalletStore')(observer(LinkDirectedBank))