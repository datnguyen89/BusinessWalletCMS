import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import DefaultLayout from '../../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'

const Business_DepartmentManagerPage = props => {
  const { commonStore } = props

  return (
    <DefaultLayout>
      <Helmet>
        <title>Quản lý phòng ban</title>
      </Helmet>
      Quản lý phòng ban
    </DefaultLayout>
  )
}

Business_DepartmentManagerPage.propTypes = {}

export default inject('commonStore')(observer(Business_DepartmentManagerPage))