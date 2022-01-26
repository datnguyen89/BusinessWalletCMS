import React from 'react'
import { inject, observer } from 'mobx-react'
import { DEVICE, PAGES, SIDEBAR_WIDTH_COLLAPSE, SIDEBAR_WIDTH_EXPAND } from '../../utils/constant'
import { BankOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faStamp, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { MainSideBarWrapper } from './MainSideBarStyled'
import { GroupMenuTitle, MenuSidebarArea, MenuSidebarItem, MenuSideBarTitle } from '../CommonStyled/CommonStyled'

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
          <MenuSideBarTitle isCollapse={commonStore.isCollapse}>Hồ sơ doanh nghiệp</MenuSideBarTitle>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.BUSINESS_USER_MANAGER.PATH)}
          className={pageName === PAGES.BUSINESS_USER_MANAGER.NAME ? 'active' : ''}
          color={appTheme.solidColor}>
          <UsergroupAddOutlined />
          <MenuSideBarTitle isCollapse={commonStore.isCollapse}>User doanh nghiệp</MenuSideBarTitle>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.BUSINESS_DEPARTMENT_MANAGER.PATH)}
          className={pageName === PAGES.BUSINESS_DEPARTMENT_MANAGER.NAME ? 'active' : ''}
          color={appTheme.solidColor}>
          <BankOutlined />
          <MenuSideBarTitle isCollapse={commonStore.isCollapse}>Phòng ban DN</MenuSideBarTitle>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu(PAGES.BUSINESS_APPROVE_MANAGER.PATH)}
          className={pageName === PAGES.BUSINESS_APPROVE_MANAGER.NAME ? 'active' : ''}
          color={appTheme.solidColor}>
          <FontAwesomeIcon icon={faStamp} />
          <MenuSideBarTitle isCollapse={commonStore.isCollapse}>Duyệt thông tin DN</MenuSideBarTitle>
        </MenuSidebarItem>
      </MenuSidebarArea>
    </MainSideBarWrapper>
  )
}

MainSideBar.propTypes = {}

export default inject('commonStore')(observer(MainSideBar))