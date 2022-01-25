import React from 'react'
import PropTypes from 'prop-types'
import { CustomerDepartmentManagerPageWrapper } from './Customer_DepartmentManagerPageStyled'
import { Helmet } from 'react-helmet/es/Helmet'
import DefaultLayout from '../../../layouts/DefaultLayout/DefaultLayout'

const CustomerDepartmentManagerPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Phòng ban doanh nghiệp</title>
      </Helmet>
      <CustomerDepartmentManagerPageWrapper>
        Quản lý phòng ban doanh nghiệp
      </CustomerDepartmentManagerPageWrapper>
    </DefaultLayout>

  )
}

CustomerDepartmentManagerPage.propTypes = {

}

export default CustomerDepartmentManagerPage