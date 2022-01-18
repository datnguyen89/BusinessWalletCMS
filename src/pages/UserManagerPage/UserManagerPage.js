import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { UserManagerPageWrapper } from './UserManagerPageStyled'
import { Tabs } from 'antd'
import UserInsertTab from './UserInsertTab'
import UserListRequestTab from './UserListRequestTab'
const { TabPane } = Tabs;

const UserManagerPage = props => {
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
            <UserListRequestTab />
          </TabPane>
        </Tabs>
      </UserManagerPageWrapper>
    </DefaultLayout>
  )
}

UserManagerPage.propTypes = {}

export default inject('commonStore')(observer(UserManagerPage))