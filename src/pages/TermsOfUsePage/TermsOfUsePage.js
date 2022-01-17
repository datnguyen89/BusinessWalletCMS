import React from 'react'
import PropTypes from 'prop-types'
import { TermsOfUsePageWrapper } from './TermsOfUsePageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'

const TermsOfUsePage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Điều khoản sử dụng</title>
      </Helmet>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.TERM_OF_USE} />
      <TermsOfUsePageWrapper>
        TermsOfUsePage
      </TermsOfUsePageWrapper>
    </DefaultLayout>

  )
}

TermsOfUsePage.propTypes = {}

export default TermsOfUsePage