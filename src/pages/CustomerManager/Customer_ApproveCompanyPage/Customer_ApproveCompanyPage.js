import React from 'react'
import PropTypes from 'prop-types'
import { ApproveCompanyInfoPageWrapper } from './Customer_ApproveCompanyPageStyled'
import { Helmet } from 'react-helmet/es/Helmet'
import DefaultLayout from '../../../layouts/DefaultLayout/DefaultLayout'

const Customer_ApproveCompanyPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Duyệt thông tin doanh nghiệp</title>
      </Helmet>
      <ApproveCompanyInfoPageWrapper>
        Duyệt thông tin doanh nghiệp
      </ApproveCompanyInfoPageWrapper>
    </DefaultLayout>

  )
}

Customer_ApproveCompanyPage.propTypes = {

}

export default Customer_ApproveCompanyPage