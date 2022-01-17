import React from 'react'
import { inject, observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
  BankAvatarWrapper,
  BankInfoArea,
  MainSideBarWrapper,
  MenuSidebarArea,
  MenuSidebarItem,
  SocialIconWrapper,
} from './MainSideBarStyled'
import { DEVICE, PAGES, SIDEBAR_WIDTH_COLLAPSE, SIDEBAR_WIDTH_EXPAND } from '../../utils/constant'
import IMAGES from '../../images'
import { CaretLeftOutlined } from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
import ICONS from '../../icons'

const MainSideBar = props => {
  const { commonStore } = props
  const { isCollapse, device, pageName } = commonStore

  const history = useHistory()

  const handleToggleSideBar = (collapse) => {
    commonStore.setIsCollapse(collapse)
  }

  const handleClickMenu = (path) => {
    history.push(path)
  }

  return (
    <MainSideBarWrapper
      display={device === DEVICE.MOBILE ? 'none' : 'flex'}
      width={isCollapse ? SIDEBAR_WIDTH_COLLAPSE : SIDEBAR_WIDTH_EXPAND}>
      <BankInfoArea display={isCollapse ? 'none' : 'flex'} color={commonStore.appTheme.solidColor}>
        <BankAvatarWrapper>
          <img src={IMAGES.SACOMBANK} alt={''} height={60} />
        </BankAvatarWrapper>
        <span className={'bank-name-sidebar'}>Ngân hàng cổ phần thương mại Sài Gòn</span>
        <CaretLeftOutlined
          onClick={() => handleToggleSideBar(true)}
          className={'collapse-sidebar-icon'}
          style={{ display: (device === DEVICE.MOBILE || device === DEVICE.TABLET) ? 'none' : 'block' }} />
      </BankInfoArea>
      <FontAwesomeIcon
        onClick={() => handleToggleSideBar(false)}
        className={'expand-sidebar-icon'}
        style={{ display: !isCollapse ? 'none' : 'inline-block' }}
        icon={faBars} />
      <MenuSidebarArea>
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.IDENTITY.PATH)}
          className={pageName === PAGES.IDENTITY.NAME ? 'active' : ''}
          color={commonStore.appTheme.solidColor}>
          {ICONS.IDENTITY_ICON}
          <span className={'menu-sidebar-label'}
                style={{ display: isCollapse ? 'none' : 'block' }}>Thông tin định danh</span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.TRANSACTION_MANAGE.PATH)}
          className={pageName === PAGES.TRANSACTION_MANAGE.NAME ? 'active' : ''}
          color={commonStore.appTheme.solidColor}>
          {ICONS.TRANSACTION_ICON}
          <span className={'menu-sidebar-label'}
                style={{ display: isCollapse ? 'none' : 'block' }}>Quản lý giao dịch</span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.TRANSACTION_HISTORY.PATH)}
          className={pageName === PAGES.TRANSACTION_HISTORY.NAME ? 'active' : ''}
          color={commonStore.appTheme.solidColor}>
          {ICONS.HISTORY_ICON}
          <span className={'menu-sidebar-label'}
                style={{ display: isCollapse ? 'none' : 'block' }}>Lịch sử giao dịch</span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.TERM_OF_USE.PATH)}
          className={pageName === PAGES.TERM_OF_USE.NAME ? 'active' : ''}
          color={commonStore.appTheme.solidColor}>
          {ICONS.POLICY_ICON}
          <span className={'menu-sidebar-label'}
                style={{ display: isCollapse ? 'none' : 'block' }}>Điều khoản sử dụng</span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.SUPPORT.PATH)}
          className={pageName === PAGES.SUPPORT.NAME ? 'active' : ''}
          color={commonStore.appTheme.solidColor}>
          {ICONS.SUPPORT_ICON}
          <span className={'menu-sidebar-label'} style={{ display: isCollapse ? 'none' : 'block' }}>Trợ giúp</span>
        </MenuSidebarItem>
      </MenuSidebarArea>
      <SocialIconWrapper flexDirection={isCollapse ? 'column' : 'row'}>
        <Link to={'#'}>
          <img src={ICONS.FACEBOOK} alt={''} />
        </Link>
        <Link to={'#'}>
          <img src={ICONS.INSTAGRAM} alt={''} />
        </Link>
        <Link to={'#'}>
          <img src={ICONS.YOUTUBE} alt={''} />
        </Link>
      </SocialIconWrapper>

    </MainSideBarWrapper>
  )
}

MainSideBar.propTypes = {}

export default inject('commonStore')(observer(MainSideBar))