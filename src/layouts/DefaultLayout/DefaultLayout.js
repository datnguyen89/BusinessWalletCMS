import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { DefaultLayoutWrapper } from './DefaultLayoutStyled'
import { useLocation } from 'react-router-dom'
import { PAGES } from '../../utils/constant'

const DefaultLayout = props => {
  const { children, commonStore } = props
  const location = useLocation()

  useEffect(() => {
    console.log('location.pathname',location.pathname)
    const segment = location.pathname.split(PAGES.HOME.PATH).filter(item => item !== '')
    if (segment.length === 0) {
      commonStore.setPageName('home')
    } else {
      commonStore.setPageName(segment[0])
    }
  }, [location.pathname])

  return (
    <DefaultLayoutWrapper color={commonStore.appTheme.solidColor}>
      {children}
    </DefaultLayoutWrapper>
  )
}

DefaultLayout.propTypes = {}

export default inject('commonStore')(observer(DefaultLayout))