import React from 'react'
import { ApproveBusinessInfoPageWrapper } from './ApproveBusinessInfoPageStyled'
import { Helmet } from 'react-helmet/es/Helmet'
import { Tabs } from 'antd'
import ApproveBusinessCustomerTab from './ApproveBusinessCustomerTab/ApproveBusinessCustomerTab'
import CustomerApproveBusinessUserTab from './ApproveBusinessUserTab/ApproveBusinessUserTab'

const { TabPane } = Tabs;

const ApproveBusinessInfoPage = props => {
  return (
    <>
      <Helmet>
        <title>Duyệt thông tin doanh nghiệp</title>
      </Helmet>
      <ApproveBusinessInfoPageWrapper>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Khách hàng doanh nghiệp" key="1">
            <ApproveBusinessCustomerTab />
          </TabPane>
          <TabPane tab="User doanh nghiệp" key="2">
            <CustomerApproveBusinessUserTab />
          </TabPane>
        </Tabs>
      </ApproveBusinessInfoPageWrapper>
    </>

  )
}

ApproveBusinessInfoPage.propTypes = {

}

export default ApproveBusinessInfoPage