import React from 'react'
import { inject, observer } from 'mobx-react'
import { GroupMenuTitle, MainSideBarWrapper, MenuSidebarArea, MenuSidebarItem } from './MainSideBarStyled'
import { DEVICE, PAGES, SIDEBAR_WIDTH_COLLAPSE, SIDEBAR_WIDTH_EXPAND } from '../../utils/constant'
import {
  ApartmentOutlined,
  AuditOutlined,
  BankOutlined,
  BookOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faUserCog, faStamp, faBuilding } from '@fortawesome/free-solid-svg-icons'

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
        <GroupMenuTitle textAlign={commonStore.isCollapse ? 'center' : 'left'}>
          {commonStore.isCollapse
            ? <FontAwesomeIcon size={'lg'} color={'#6634E0'} icon={faBuilding} />
            : 'Quản lý doanh nghiệp'}
        </GroupMenuTitle>
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.BUSINESS_PROFILE_MANAGER.PATH)}
          className={pageName === PAGES.BUSINESS_PROFILE_MANAGER.NAME ? 'active' : ''}
          color={appTheme.solidColor}>
          <FontAwesomeIcon icon={faUserTie} />
          <span className={'menu-sidebar-label'}
                style={{ display: isCollapse ? 'none' : 'block' }}>Hồ sơ doanh nghiệp</span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.BUSINESS_USER_MANAGER.PATH)}
          className={pageName === PAGES.BUSINESS_USER_MANAGER.NAME ? 'active' : ''}
          color={appTheme.solidColor}>
          <UsergroupAddOutlined />
          <span className={'menu-sidebar-label'}
                style={{ display: isCollapse ? 'none' : 'block' }}>User doanh nghiệp</span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.BUSINESS_DEPARTMENT_MANAGER.PATH)}
          className={pageName === PAGES.BUSINESS_DEPARTMENT_MANAGER.NAME ? 'active' : ''}
          color={appTheme.solidColor}>
          <BankOutlined />
          <span className={'menu-sidebar-label'}
                style={{ display: isCollapse ? 'none' : 'block' }}>Phòng ban DN</span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.BUSINESS_APPROVE_MANAGER.PATH)}
          className={pageName === PAGES.BUSINESS_APPROVE_MANAGER.NAME ? 'active' : ''}
          color={appTheme.solidColor}>
          <FontAwesomeIcon icon={faStamp} />
          <span className={'menu-sidebar-label'}
                style={{ display: isCollapse ? 'none' : 'block' }}>Duyệt thông tin DN</span>
        </MenuSidebarItem>

      </MenuSidebarArea>
    </MainSideBarWrapper>
  )
}

MainSideBar.propTypes = {}

export default inject('commonStore')(observer(MainSideBar))