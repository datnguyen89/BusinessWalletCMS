import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'

const CustomerProfilePage = props => {
  const { commonStore } = props

  return (
    <DefaultLayout>
      <Helmet>
        <title>Hồ sơ khách hàng</title>
      </Helmet>
      CustomerProfilePage
    </DefaultLayout>
  )
}

CustomerProfilePage.propTypes = {}

export default inject('commonStore')(observer(CustomerProfilePage))