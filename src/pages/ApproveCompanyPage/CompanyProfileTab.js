import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { CompanyProfileTabWrapper } from './ApproveCompanyPageStyled'

const CompanyProfileTab = props => {
  const { commonStore } = props
  const { appTheme } = commonStore
  return (
    <CompanyProfileTabWrapper>
      1
    </CompanyProfileTabWrapper>
  )
}

CompanyProfileTab.propTypes = {}

export default inject('commonStore')(observer(CompanyProfileTab))