import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import DefaultLayout from '../../layouts/DefaultLayout'
import { BREADCRUMB_DATA } from '../../utils/constant'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import Contract from '../../components/Contract'
import { Helmet } from 'react-helmet/es/Helmet'

const LinkBankPage = props => {
  const { commonStore } = props

  return (
    <DefaultLayout>
      <Helmet>
        <title>Liên kết</title>
      </Helmet>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.LINK_BANK} />
      <Contract/>
    </DefaultLayout>
  )
}

LinkBankPage.propTypes = {}

export default inject('commonStore')(observer(LinkBankPage))