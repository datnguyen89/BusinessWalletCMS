import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import DefaultLayout from '../../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { HomePageWrapper } from './HomePageStyled'

const HomePage = props => {
  const { commonStore } = props

  return (
    <DefaultLayout>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>
      <HomePageWrapper>
        Home
      </HomePageWrapper>
    </DefaultLayout>
  )
}

HomePage.propTypes = {}

export default inject('commonStore')(observer(HomePage))