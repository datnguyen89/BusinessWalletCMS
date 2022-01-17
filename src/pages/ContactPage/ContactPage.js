import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageWrapper } from './ContactPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'

const ContactPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Liên hệ</title>
      </Helmet>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.CONTACT} />
      <ContactPageWrapper>
        ContactPage
      </ContactPageWrapper>
    </DefaultLayout>

  )
}

ContactPage.propTypes = {

}

export default ContactPage