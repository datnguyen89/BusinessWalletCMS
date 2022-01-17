import React, { useEffect, useState } from 'react'
import { AreaBoundDirectBank, ImgBank, LinkDirectBankTitle, LinkDirectBankWrapper } from './LinkDirectBankStyled'
import { Col } from 'antd'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { WrapperImage } from '../LinkInternalBank/LinkInternalBankStyled'

const LinkDirectBank = props => {
  const { commonStore , selectedItem, callbackHitBank, accountWalletStore } = props;

  useEffect(() => {
    accountWalletStore.getListBankDirect();
  }, []);

  return (
    <LinkDirectBankWrapper>
      <LinkDirectBankTitle>Ngân hàng liên kết trực tiếp</LinkDirectBankTitle>
      <AreaBoundDirectBank>
        {
          accountWalletStore.listBankDirect.map(item => (
            <Col key={item.id} span={8}>
              <WrapperImage>
                <ImgBank src={item.imageUrl} alt={item.imageUrl} color={commonStore.appTheme.solidColor} active={selectedItem?.id === item.id}  onClick={() => callbackHitBank(item)}/>
              </WrapperImage>
            </Col>
          ))
        }
      </AreaBoundDirectBank>

    </LinkDirectBankWrapper>
  )
}

LinkDirectBank.propTypes = {
  selectedItem: PropTypes.object,
  callbackHitBank: PropTypes.func
}


export default inject('commonStore', 'accountWalletStore')(observer(LinkDirectBank))