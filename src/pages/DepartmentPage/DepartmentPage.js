import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'

const DepartmentPage = props => {
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

DepartmentPage.propTypes = {}

export default inject('commonStore')(observer(DepartmentPage))