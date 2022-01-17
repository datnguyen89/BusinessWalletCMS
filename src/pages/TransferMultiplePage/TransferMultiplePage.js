import React from 'react'
import PropTypes from 'prop-types'
import { TransferMultiplePageWrapper } from './TransferMultiplePageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { BREADCRUMB_DATA } from '../../utils/constant'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import TransferMethod from '../../components/TransferMethod'
import FilterTransferMethod from '../../components/FilterTransferMethod'
import StateTransferMethod from '../../components/StateTransferMethod'

const TransferMultiplePage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Chuyển tiền theo Lô</title>
      </Helmet>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.TRANSFER_MULTIPLE} />
      <TransferMultiplePageWrapper>
        <TransferMethod></TransferMethod>
        <FilterTransferMethod></FilterTransferMethod>
        <StateTransferMethod></StateTransferMethod>
      </TransferMultiplePageWrapper>
    </DefaultLayout>
  )
}

TransferMultiplePage.propTypes = {

}

export default TransferMultiplePage