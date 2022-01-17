import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { AuthFooterLeft, AuthFooterRight, AuthFooterRightCompany, AuthFooterWrapper } from './AuthFooterStyled'
import IMAGES from '../../images'
import CONSTANT from '../../constant'

const AuthFooter = props => {
  const { commonStore } = props
  return (
    <AuthFooterWrapper>
      <AuthFooterLeft color={commonStore.appTheme.solidColor}>
        <span>CMS Ví doanh nghiệp</span>
      </AuthFooterLeft>
      <AuthFooterRight color={commonStore.appTheme.solidColor}>
        <AuthFooterRightCompany color={commonStore.appTheme.solidColor}>
          {CONSTANT.COMPANY_NAME}
        </AuthFooterRightCompany>
        <a href={'#'}>{CONSTANT.COMPANY_ADDRESS}</a>
        <br />
        <a href={'tel:842437831800'}>{CONSTANT.PHONE1}</a>
        <br />
        <a href={'tel:842437831734'}>{CONSTANT.PHONE2}</a>
      </AuthFooterRight>
    </AuthFooterWrapper>
  )
}

AuthFooter.propTypes = {}

export default inject('commonStore')(observer(AuthFooter))