import React from 'react'
import PropTypes from 'prop-types'
import { ReceiveFromMmPageWrapper } from './ReceiveFromMmPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'

const ReceiveFromMmPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Nhận chuyển tiền từ Mobifone Money</title>
      </Helmet>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.RECEIVE_FROM_MM} />
      <ReceiveFromMmPageWrapper>
        ReceiveFromMmPage
      </ReceiveFromMmPageWrapper>
    </DefaultLayout>

  )
}

ReceiveFromMmPage.propTypes = {

}

export default ReceiveFromMmPage