import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import DefaultLayout from '../../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { BusinessDepartmentManagerPageWrapper } from './Business_DepartmentManagerPageStyled'

const Business_DepartmentManagerPage = props => {
  const { commonStore } = props

  return (
    <DefaultLayout>
      <Helmet>
        <title>Quản lý phòng ban</title>
      </Helmet>
      <BusinessDepartmentManagerPageWrapper>
        Quản lý phòng ban
      </BusinessDepartmentManagerPageWrapper>
    </DefaultLayout>
  )
}

Business_DepartmentManagerPage.propTypes = {}

export default inject('commonStore')(observer(Business_DepartmentManagerPage))