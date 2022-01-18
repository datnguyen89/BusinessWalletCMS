import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { AuthFooterLeft, AuthFooterRight, AuthFooterRightCompany, AuthFooterWrapper } from './AuthFooterStyled'
import IMAGES from '../../images'
import Common from '../../common'

const AuthFooter = props => {
  const { commonStore } = props
  return (
    <AuthFooterWrapper>
      <AuthFooterLeft color={commonStore.appTheme.solidColor}>
        <span>CMS Ví doanh nghiệp</span>
      </AuthFooterLeft>
      <AuthFooterRight color={commonStore.appTheme.solidColor}>
        <AuthFooterRightCompany color={commonStore.appTheme.solidColor}>
          {Common.COMPANY_NAME}
        </AuthFooterRightCompany>
        <a href={'#'}>{Common.COMPANY_ADDRESS}</a>
        <br />
        <a href={'tel:842437831800'}>{Common.PHONE1}</a>
        <br />
        <a href={'tel:842437831734'}>{Common.PHONE2}</a>
      </AuthFooterRight>
    </AuthFooterWrapper>
  )
}

AuthFooter.propTypes = {}

export default inject('commonStore')(observer(AuthFooter))