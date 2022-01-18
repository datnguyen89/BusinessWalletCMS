import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'

const ApproveCompanyPage = props => {
  const { commonStore } = props

  return (
    <DefaultLayout>
      <Helmet>
        <title>Duyệt thông tin DN</title>
      </Helmet>
      Duyệt thông tin DN
    </DefaultLayout>
  )
}

ApproveCompanyPage.propTypes = {}

export default inject('commonStore')(observer(ApproveCompanyPage))