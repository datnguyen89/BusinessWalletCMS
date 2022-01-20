import React from 'react'
import PropTypes from 'prop-types'
import { CreateCustomerPageWrapper } from './Customer_CreateCustomerPageStyled'
import { Helmet } from 'react-helmet/es/Helmet'
import DefaultLayout from '../../../layouts/DefaultLayout/DefaultLayout'

const Customer_CreateCustomerPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Tạo khách hàng doanh nghiệp</title>
      </Helmet>
      <CreateCustomerPageWrapper>

      </CreateCustomerPageWrapper>
    </DefaultLayout>

  )
}

Customer_CreateCustomerPage.propTypes = {

}

export default Customer_CreateCustomerPage