import React from 'react'
import PropTypes from 'prop-types'
import { PolicyPageWrapper } from './PolicyPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { BREADCRUMB_DATA } from '../../utils/constant'
import MainBreadCrumb from '../../components/MainBreadCrumb'

const PolicyPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Chính sách</title>
      </Helmet>
      <PolicyPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.POLICY} />
        PolicyPage
      </PolicyPageWrapper>
    </DefaultLayout>
  )
}

PolicyPage.propTypes = {

}

export default PolicyPage