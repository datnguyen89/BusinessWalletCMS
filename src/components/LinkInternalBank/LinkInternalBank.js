import React, { useEffect } from 'react'
import {
  AreaBoundInternalBank,
  ImgBank,
  LinkInternalBankTitle,
  LinkInternalBankWrapper, WrapperImage,
} from './LinkInternalBankStyled'
import { Col } from 'antd'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

const LinkInternalBank = props => {

  const { commonStore , selectedItem, callbackHitBank, accountWalletStore } = props;

  useEffect(() => {
    accountWalletStore.getListBankInternal();
  }, []);

  const handleCallbackHitBank = (value) => {
    callbackHitBank(value);
  }

  return (
    <LinkInternalBankWrapper>
      <LinkInternalBankTitle>Ngân hàng nội địa</LinkInternalBankTitle>
      <AreaBoundInternalBank>
        {
          accountWalletStore.listBankInternal.map(item => (
            <Col key={item.id} span={3}>
              <WrapperImage>
                <ImgBank src={item.imageUrl} alt={item.imageUrl} color={commonStore.appTheme.solidColor} active={selectedItem?.id === item.id}  onClick={() => handleCallbackHitBank(item)}/>
              </WrapperImage>
            </Col>
          ))
        }
      </AreaBoundInternalBank>
    </LinkInternalBankWrapper>
  )
}

LinkInternalBank.propTypes = {
  selectedItem: PropTypes.object,
  callbackHitBank: PropTypes.func
}

export default inject('commonStore', 'accountWalletStore')(observer(LinkInternalBank))