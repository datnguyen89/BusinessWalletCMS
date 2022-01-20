import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { BusinessProfileTabWrapper } from './Business_ApproveBusinessPageStyled'

const Business_BusinessProfileTab = props => {
  const { commonStore } = props
  const { appTheme } = commonStore
  return (
    <BusinessProfileTabWrapper>
      1
    </BusinessProfileTabWrapper>
  )
}

Business_BusinessProfileTab.propTypes = {}

export default inject('commonStore')(observer(Business_BusinessProfileTab))