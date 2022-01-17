import React from 'react'
import PropTypes from 'prop-types'
import { TransferWalletPageWrapper } from './TransferWalletPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'

const TransferWalletPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Chuyển tiền ví</title>
      </Helmet>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.TRANSFER_WALLET} />
      <TransferWalletPageWrapper>
        TransferWalletPage
      </TransferWalletPageWrapper>
    </DefaultLayout>

  )
}

TransferWalletPage.propTypes = {

}

export default TransferWalletPage