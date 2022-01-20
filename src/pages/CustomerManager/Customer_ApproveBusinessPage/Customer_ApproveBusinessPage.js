import React from 'react'
import PropTypes from 'prop-types'
import { ApproveBusinessInfoPageWrapper } from './Customer_ApproveBusinessPageStyled'
import { Helmet } from 'react-helmet/es/Helmet'
import DefaultLayout from '../../../layouts/DefaultLayout/DefaultLayout'

const Customer_ApproveBusinessPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Duyệt thông tin doanh nghiệp</title>
      </Helmet>
      <ApproveBusinessInfoPageWrapper>
        Duyệt thông tin doanh nghiệp
      </ApproveBusinessInfoPageWrapper>
    </DefaultLayout>

  )
}

Customer_ApproveBusinessPage.propTypes = {

}

export default Customer_ApproveBusinessPage