import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import DefaultLayout from '../../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { ApproveBusinessPageWrapper } from './Business_ApproveBusinessPageStyled'
import { Tabs } from 'antd'
import BusinessProfileTab from './Business_BusinessProfileTab'
import BusinessUserManagerTab from './Business_UserManagerTab'
const { TabPane } = Tabs;

const Business_ApproveBusinessPage = props => {
  const { commonStore } = props

  return (
    <DefaultLayout>
      <Helmet>
        <title>Duyệt thông tin DN</title>
      </Helmet>
      <ApproveBusinessPageWrapper>
        <Tabs defaultActiveKey="2">
          <TabPane tab="Hồ sơ doanh nghiệp" key="1">
            <BusinessProfileTab />
          </TabPane>
          <TabPane tab="User doanh nghiệp" key="2">
            <BusinessUserManagerTab />
          </TabPane>
        </Tabs>
      </ApproveBusinessPageWrapper>
    </DefaultLayout>
  )
}

Business_ApproveBusinessPage.propTypes = {}

export default inject('commonStore')(observer(Business_ApproveBusinessPage))