import React from 'react'
import { inject, observer } from 'mobx-react'
import { Helmet } from 'react-helmet/es/Helmet'
import { UserManagerPageWrapper } from './BusinessUserManagerPageStyled'
import { Tabs } from 'antd'
import UserInsertTab from './BusinessUserInsertTab/BusinessUserInsertTab'
import BusinessUserListRequestTab from './BusinessUserListRequestTab/BusinessUserListRequestTab'

const { TabPane } = Tabs;

const BusinessUserManagerPage = props => {
  const { commonStore } = props

  return (
    <>
      <Helmet>
        <title>User Doanh nghiệp</title>
      </Helmet>
      <UserManagerPageWrapper>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Thêm mới User" key="1">
            <UserInsertTab />
          </TabPane>
          <TabPane tab="Danh sách lập lệnh" key="2">
            <BusinessUserListRequestTab />
          </TabPane>
        </Tabs>
      </UserManagerPageWrapper>
    </>
  )
}

BusinessUserManagerPage.propTypes = {}

export default inject('commonStore')(observer(BusinessUserManagerPage))