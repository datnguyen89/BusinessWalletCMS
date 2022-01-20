import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import DefaultLayout from '../../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { UserManagerPageWrapper } from './Company_UserManagerPageStyled'
import { Tabs } from 'antd'
import UserInsertTab from './Company_UserInsertTab'
import Company_UserListRequestTab from './Company_UserListRequestTab'
const { TabPane } = Tabs;

const Company_UserManagerPage = props => {
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
            <Company_UserListRequestTab />
          </TabPane>
        </Tabs>
      </UserManagerPageWrapper>
    </DefaultLayout>
  )
}

Company_UserManagerPage.propTypes = {}

export default inject('commonStore')(observer(Company_UserManagerPage))