import React from 'react'
import { inject, observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
  GroupMenuTitle,

  MainSideBarWrapper,
  MenuSidebarArea,
  MenuSidebarItem,
} from './MainSideBarStyled'
import { DEVICE, PAGES, SIDEBAR_WIDTH_COLLAPSE, SIDEBAR_WIDTH_EXPAND } from '../../utils/constant'
import IMAGES from '../../images'
import {
  ApartmentOutlined,
  AuditOutlined,
  BookOutlined,
  CaretLeftOutlined,
  IdcardOutlined,
  UnlockOutlined,
  UsergroupAddOutlined, UserOutlined,
} from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
import ICONS from '../../icons'

const MainSideBar = props => {
  const { commonStore } = props
  const { appTheme } = commonStore
  const { isCollapse, device, pageName } = commonStore

  const history = useHistory()


  const handleClickMenu = (path) => {
    history.push(path)
  }

  return (
    <MainSideBarWrapper
      display={device === DEVICE.MOBILE ? 'none' : 'flex'}
      width={isCollapse ? SIDEBAR_WIDTH_COLLAPSE : SIDEBAR_WIDTH_EXPAND}>
      <MenuSidebarArea>
        <GroupMenuTitle color={appTheme.solidColor}>{commonStore.isCollapse ? '' : 'Quản lý doanh nghiệp'}</GroupMenuTitle>
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.CUSTOMER_PROFILE.PATH)}
          className={pageName === PAGES.CUSTOMER_PROFILE.NAME ? 'active' : ''}
          color={appTheme.solidColor}>
          <BookOutlined />
          <span className={'menu-sidebar-label'}
                style={{ display: isCollapse ? 'none' : 'block' }}>Hồ sơ khách hàng</span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.USER_MANAGER.PATH)}
          className={pageName === PAGES.USER_MANAGER.NAME ? 'active' : ''}
          color={appTheme.solidColor}>
          <UserOutlined />
          <span className={'menu-sidebar-label'}
                style={{ display: isCollapse ? 'none' : 'block' }}>Người dùng</span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.DEPARTMENT.PATH)}
          className={pageName === PAGES.DEPARTMENT.NAME ? 'active' : ''}
          color={appTheme.solidColor}>
          <ApartmentOutlined />
          <span className={'menu-sidebar-label'}
                style={{ display: isCollapse ? 'none' : 'block' }}>Phòng ban</span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.APPROVE_COMPANY.PATH)}
          className={pageName === PAGES.APPROVE_COMPANY.NAME ? 'active' : ''}
          color={appTheme.solidColor}>
          <AuditOutlined />
          <span className={'menu-sidebar-label'}
                style={{ display: isCollapse ? 'none' : 'block' }}>Duyệt thông tin DN</span>
        </MenuSidebarItem>
      </MenuSidebarArea>

    </MainSideBarWrapper>
  )
}

MainSideBar.propTypes = {}

export default inject('commonStore')(observer(MainSideBar))