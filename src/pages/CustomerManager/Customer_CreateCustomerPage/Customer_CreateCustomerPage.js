import React from 'react'
import PropTypes from 'prop-types'
import { CreateCustomerPageWrapper } from './Customer_CreateCustomerPageStyled'
import { Helmet } from 'react-helmet/es/Helmet'
import DefaultLayout from '../../../layouts/DefaultLayout/DefaultLayout'
import { Tabs } from 'antd'
import Customer_RegisterBusinessTab from './Customer_RegisterBusinessTab'
import Customer_RegisterBusinessListTab from './Customer_RegisterBusinessListTab'
const { TabPane } = Tabs;

const Customer_CreateCustomerPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Tạo khách hàng doanh nghiệp</title>
      </Helmet>
      <CreateCustomerPageWrapper>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Đăng ký doanh nghiệp" key="1">
            <Customer_RegisterBusinessTab />
          </TabPane>
          <TabPane tab="Danh sách đăng ký" key="2">
            <Customer_RegisterBusinessListTab />
          </TabPane>
        </Tabs>
      </CreateCustomerPageWrapper>
    </DefaultLayout>

  )
}

Customer_CreateCustomerPage.propTypes = {

}

export default Customer_CreateCustomerPage