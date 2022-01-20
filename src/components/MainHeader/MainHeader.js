import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faExchangeAlt,
  faFileInvoiceDollar,
  faHandHoldingUsd,
  faLink,
  faList,
} from '@fortawesome/free-solid-svg-icons'
import { HeaderLogoArea, MainHeaderRight, MainHeaderRightMobile, MainHeaderWrapper } from './MainHeaderStyled'
import IMAGES from '../../images'
import { Drawer, Menu } from 'antd'
import HeaderUserArea from '../HeaderUserArea'
import { useHistory } from 'react-router-dom'
import { DEVICE, PAGES, SIDEBAR_WIDTH_EXPAND } from '../../utils/constant'
import DrawerSideBar from '../DrawerSideBar'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

const MainHeader = props => {
  const { commonStore } = props
  const { pageName } = props.commonStore
  const [visibleMobileDrawerLeft, setVisibleMobileDrawerLeft] = useState(false)
  const [visibleMobileDrawerRight, setVisibleMobileDrawerRight] = useState(false)
  const { device } = commonStore
  const history = useHistory()

  const handleClickDrawerMenu = (e) => {
    console.log('handleClickDrawerMenu', e)
  }

  const handleToggleSideBar = () => {
    commonStore.setIsCollapse(!commonStore.isCollapse)
  }
  return (
    <MainHeaderWrapper>
      <HeaderLogoArea width={commonStore.isCollapse ? 'auto' : '220px'}>
        <img src={IMAGES.AUTH_LOGO} alt={''} style={{ cursor: 'pointer' }} height={48}
             onClick={() => history.push(PAGES.HOME.PATH)} />
        {
          commonStore.isCollapse
          ?
            <MenuUnfoldOutlined onClick={handleToggleSideBar} />
            :
            <MenuFoldOutlined onClick={handleToggleSideBar} />
        }
        <FontAwesomeIcon
          onClick={() => setVisibleMobileDrawerLeft(true)}
          icon={faList}
          size={'2x'}
          style={{
            display: device === DEVICE.MOBILE ? 'block' : 'none',
            cursor: 'pointer',
            color: '#fff',
            marginLeft: 8,
          }} />
        <Drawer
          title={null}
          placement='left'
          closable={false}
          width={SIDEBAR_WIDTH_EXPAND}
          style={{ padding: 0 }}
          onClose={() => setVisibleMobileDrawerLeft(false)}
          visible={visibleMobileDrawerLeft}>
          <DrawerSideBar />
        </Drawer>
      </HeaderLogoArea>
      <MainHeaderRight>
        {/*<HeaderNotifyArea>*/}
        {/*  <NotifyBell />*/}
        {/*</HeaderNotifyArea>*/}
        <HeaderUserArea />
      </MainHeaderRight>
      <MainHeaderRightMobile>
        <FontAwesomeIcon
          onClick={() => setVisibleMobileDrawerRight(true)}
          icon={faBars}
          size={'2x'}
          color={'#fff'}
          style={{ cursor: 'pointer' }} />
        <Drawer
          title={'Ví doanh nghiệp'}
          placement='right'
          style={{ padding: 0 }}
          onClose={() => setVisibleMobileDrawerRight(false)}
          visible={visibleMobileDrawerRight}>
          <Menu
            onClick={handleClickDrawerMenu}
            style={{ width: '100%' }}
            defaultSelectedKeys={['1']}
            mode='inline'
          >
            <Menu.Item key='1'>
              <FontAwesomeIcon style={{ marginRight: '16px' }} icon={faFileInvoiceDollar} />
              Nạp tiền
            </Menu.Item>
            <Menu.Item key='2'>
              <FontAwesomeIcon style={{ marginRight: '16px' }} icon={faExchangeAlt} />
              Chuyển tiền
            </Menu.Item>
            <Menu.Item key='3'>
              <FontAwesomeIcon style={{ marginRight: '16px' }} icon={faLink} />
              Liên kết
            </Menu.Item>
            <Menu.Item key='4'>
              <FontAwesomeIcon style={{ marginRight: '16px' }} icon={faHandHoldingUsd} />
              Rút tiền
            </Menu.Item>
          </Menu>
        </Drawer>
      </MainHeaderRightMobile>
    </MainHeaderWrapper>

  )
}

MainHeader.propTypes = {}

export default inject('commonStore')(observer(MainHeader))