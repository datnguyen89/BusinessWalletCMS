import React from 'react'
import PropTypes from 'prop-types'
import {
  ApproveBusinessInfoPageWrapper,
} from './Customer_ApproveBusinessPageStyled'
import { Helmet } from 'react-helmet/es/Helmet'
import DefaultLayout from '../../../layouts/DefaultLayout/DefaultLayout'
import { Tabs } from 'antd'
import Customer_ApproveBusinessCustomerTab from './Customer_ApproveBusinessCustomerTab/Customer_ApproveBusinessCustomerTab'
import CustomerApproveBusinessUserTab from './Customer_ApproveBusinessUserTab/Customer_ApproveBusinessUserTab'
const { TabPane } = Tabs;

const Customer_ApproveBusinessPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Duyệt thông tin doanh nghiệp</title>
      </Helmet>
      <ApproveBusinessInfoPageWrapper>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Khách hàng doanh nghiệp" key="1">
            <Customer_ApproveBusinessCustomerTab />
          </TabPane>
          <TabPane tab="User doanh nghiệp" key="2">
            <CustomerApproveBusinessUserTab />
          </TabPane>
        </Tabs>
      </ApproveBusinessInfoPageWrapper>
    </DefaultLayout>

  )
}

Customer_ApproveBusinessPage.propTypes = {

}

export default Customer_ApproveBusinessPage