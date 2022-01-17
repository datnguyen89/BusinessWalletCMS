import React from 'react'
import PropTypes from 'prop-types'
import { SupportPageWrapper } from './SupportPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { BREADCRUMB_DATA } from '../../utils/constant'
import MainBreadCrumb from '../../components/MainBreadCrumb'

const SupportPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Trợ giúp</title>
      </Helmet>
      <SupportPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.SUPPORT} />
        SupportPage
      </SupportPageWrapper>
    </DefaultLayout>

  )
}

SupportPage.propTypes = {

}

export default SupportPage