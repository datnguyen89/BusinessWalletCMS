import React from 'react'
import PropTypes from 'prop-types'
import { CreateUserCompanyPageWrapper } from './Customer_CreateUserCompanyPageStyled'
import { Helmet } from 'react-helmet/es/Helmet'
import DefaultLayout from '../../../layouts/DefaultLayout/DefaultLayout'

const Customer_CreateUserCompanyPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Tạo User doanh nghiệp</title>
      </Helmet>
      <CreateUserCompanyPageWrapper>

      </CreateUserCompanyPageWrapper>
    </DefaultLayout>

  )
}

Customer_CreateUserCompanyPage.propTypes = {

}

export default Customer_CreateUserCompanyPage