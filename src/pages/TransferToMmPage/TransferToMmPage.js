import React from 'react'
import PropTypes from 'prop-types'
import { TransferToMmPageWrapper } from './TransferToMmPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'

const TransferToMmPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Chuyển tiền tới Mobifone Money</title>
      </Helmet>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.TRANSFER_TO_MM} />
      <TransferToMmPageWrapper>
        TransferToMmPage
      </TransferToMmPageWrapper>
    </DefaultLayout>

  )
}

TransferToMmPage.propTypes = {}

export default TransferToMmPage