import React from 'react'
import PropTypes from 'prop-types'
import { TransactionHistoryPageWrapper } from './TransactionHistoryPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { BREADCRUMB_DATA } from '../../utils/constant'
import MainBreadCrumb from '../../components/MainBreadCrumb'

const TransactionHistoryPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Lịch sử giao dịch</title>
      </Helmet>
      <TransactionHistoryPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.TRANSACTION_HISTORY} />
        TransactionHistoryPage
      </TransactionHistoryPageWrapper>
    </DefaultLayout>
  )
}

TransactionHistoryPage.propTypes = {

}

export default TransactionHistoryPage