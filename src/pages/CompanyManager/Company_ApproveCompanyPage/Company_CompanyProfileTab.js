import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { CompanyProfileTabWrapper } from './Company_ApproveCompanyPageStyled'

const Company_CompanyProfileTab = props => {
  const { commonStore } = props
  const { appTheme } = commonStore
  return (
    <CompanyProfileTabWrapper>
      1
    </CompanyProfileTabWrapper>
  )
}

Company_CompanyProfileTab.propTypes = {}

export default inject('commonStore')(observer(Company_CompanyProfileTab))