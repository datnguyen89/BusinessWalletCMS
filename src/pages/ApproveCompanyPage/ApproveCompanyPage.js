import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { ApproveCompanyPageWrapper } from './ApproveCompanyPageStyled'
import { Tabs } from 'antd'
import CompanyProfileTab from './CompanyProfileTab'
import CompanyUserManagerTab from './CompanyUserManagerTab'
const { TabPane } = Tabs;

const ApproveCompanyPage = props => {
  const { commonStore } = props

  return (
    <DefaultLayout>
      <Helmet>
        <title>Duyệt thông tin DN</title>
      </Helmet>
      <ApproveCompanyPageWrapper>
        <Tabs defaultActiveKey="2">
          <TabPane tab="Hồ sơ doanh nghiệp" key="1">
            <CompanyProfileTab />
          </TabPane>
          <TabPane tab="User doanh nghiệp" key="2">
            <CompanyUserManagerTab />
          </TabPane>
        </Tabs>
      </ApproveCompanyPageWrapper>
    </DefaultLayout>
  )
}

ApproveCompanyPage.propTypes = {}

export default inject('commonStore')(observer(ApproveCompanyPage))