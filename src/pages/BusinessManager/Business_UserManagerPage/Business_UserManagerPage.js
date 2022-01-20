import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import DefaultLayout from '../../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { UserManagerPageWrapper } from './Business_UserManagerPageStyled'
import { Tabs } from 'antd'
import UserInsertTab from './Business_UserInsertTab'
import Business_UserListRequestTab from './Business_UserListRequestTab'
const { TabPane } = Tabs;

const Business_UserManagerPage = props => {
  const { commonStore } = props

  return (
    <DefaultLayout>
      <Helmet>
        <title>Quản lý người dùng</title>
      </Helmet>
      <UserManagerPageWrapper>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Thêm mới User" key="1">
            <UserInsertTab />
          </TabPane>
          <TabPane tab="Danh sách lập lệnh" key="2">
            <Business_UserListRequestTab />
          </TabPane>
        </Tabs>
      </UserManagerPageWrapper>
    </DefaultLayout>
  )
}

Business_UserManagerPage.propTypes = {}

export default inject('commonStore')(observer(Business_UserManagerPage))