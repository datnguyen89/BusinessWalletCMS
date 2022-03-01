import React from 'react'
import { CreateCustomerPageWrapper } from './BusinessProfileManagerPageStyled'
import { Helmet } from 'react-helmet/es/Helmet'
import { Tabs } from 'antd'
import BusinessProfileRegisterFormTab from './BusinessProfileRegisterFormTab/BusinessProfileRegisterFormTab'
import BusinessProfileRegisterListTab from './BusinessProfileRegisterListTab/BusinessProfileRegisterListTab'

const { TabPane } = Tabs;

const BusinessProfileManagerPage = props => {
  return (
    <>
      <Helmet>
        <title>Hồ sơ doanh nghiệp</title>
      </Helmet>
      <CreateCustomerPageWrapper>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Đăng ký doanh nghiệp" key="1">
            <BusinessProfileRegisterFormTab />
          </TabPane>
          <TabPane tab="Danh sách đăng ký" key="2">
            <BusinessProfileRegisterListTab />
          </TabPane>
        </Tabs>
      </CreateCustomerPageWrapper>
    </>

  )
}

BusinessProfileManagerPage.propTypes = {

}

export default BusinessProfileManagerPage