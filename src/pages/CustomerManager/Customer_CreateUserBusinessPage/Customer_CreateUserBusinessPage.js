import React from 'react'
import PropTypes from 'prop-types'
import { CreateUserBusinessPageWrapper } from './Customer_CreateUserBusinessPageStyled'
import { Helmet } from 'react-helmet/es/Helmet'
import DefaultLayout from '../../../layouts/DefaultLayout/DefaultLayout'

const Customer_CreateUserBusinessPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>User doanh nghiệp</title>
      </Helmet>
      <CreateUserBusinessPageWrapper>
        User doanh nghiệp
      </CreateUserBusinessPageWrapper>
    </DefaultLayout>

  )
}

Customer_CreateUserBusinessPage.propTypes = {

}

export default Customer_CreateUserBusinessPage