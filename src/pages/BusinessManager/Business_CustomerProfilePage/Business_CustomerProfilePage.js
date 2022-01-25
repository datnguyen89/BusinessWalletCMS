import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import DefaultLayout from '../../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { BusinessCustomerProfilePageWrapper } from './Business_CustomerProfilePageStyled'

const Business_CustomerProfilePage = props => {
  const { commonStore } = props

  return (
    <DefaultLayout>
      <Helmet>
        <title>Hồ sơ khách hàng</title>
      </Helmet>
      <BusinessCustomerProfilePageWrapper>
        CustomerProfilePage
      </BusinessCustomerProfilePageWrapper>
    </DefaultLayout>
  )
}

Business_CustomerProfilePage.propTypes = {}

export default inject('commonStore')(observer(Business_CustomerProfilePage))