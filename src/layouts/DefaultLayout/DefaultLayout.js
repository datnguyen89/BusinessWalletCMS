import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { DefaultLayoutWrapper } from './DefaultLayoutStyled'
import MainSideBar from '../../components/MainSideBar'
import MainContent from '../../components/MainContent/MainContent'
import MainHeader from '../../components/MainHeader'
import MainBody from '../../components/MainBody'
import MainFooter from '../../components/MainFooter'
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
      <MainHeader />
      <MainContent>
        <MainSideBar />
        <MainBody>
          {children}
        </MainBody>
      </MainContent>
      <MainFooter />
    </DefaultLayoutWrapper>
  )
}

DefaultLayout.propTypes = {}

export default inject('commonStore')(observer(DefaultLayout))