import React from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import {
  IdentityInfoPageWrapper,
  NotLinkedCardBox,
  UserInfoBox,
  UserInfoBoxHeader,
} from './IdentityInfoPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA, mockupLinkedCard, PAGES } from '../../utils/constant'
import { Avatar, Button, Carousel, Col, Descriptions, Row } from 'antd'
import { ColorText, ColorTitle, WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { LeftOutlined, RightOutlined, UserOutlined } from '@ant-design/icons'
import IMAGES from '../../images'
import LinkedCardCarousel from '../../components/LinkedCardCarousel'
import { useHistory } from 'react-router-dom'



const IdentityInfoPage = props => {
  const { commonStore } = props
  const history = useHistory()

  const handleClickAddLink = (path) => {
    history.push(path)
  }

  return (
    <DefaultLayout>
      <Helmet>
        <title>Thông tin định danh</title>
      </Helmet>
      <IdentityInfoPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.IDENTITY} />
        <Row align={'stretch'}>
          <Col span={17}>
            <WhiteRoundedBox margin={'0 16px 16px 16px'}>
              <ColorTitle>
                Thông tin doanh nghiệp
              </ColorTitle>
              <Descriptions
                bordered
                column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}
                size={'small'}>
                <Descriptions.Item label={'Tên tổ chức'}>Công Ty Cổ phần thương mại Sài gòn</Descriptions.Item>
                <Descriptions.Item label={'Số ĐKKD/ GPTL'}>9876543210000</Descriptions.Item>
                <Descriptions.Item label={'Tên viết tắt'}>Solution Technologi Componel</Descriptions.Item>
                <Descriptions.Item label={'Ngày cấp'}>15/03/2020</Descriptions.Item>
                <Descriptions.Item label={'Địa chỉ ĐKKD'}>Số 123 , Đường Yên Hòa, Cầu Giấy, Hà Nội</Descriptions.Item>
                <Descriptions.Item label={'Nơi cấp'}>Sở Thương mại TP Hà Nội</Descriptions.Item>
                <Descriptions.Item label={'Địa chỉ giao dịch'}>Số 8 , Trần Duy Hưng, Cầu Giấy, Hà
                  Nội</Descriptions.Item>
                <Descriptions.Item label={'Số điện thoại'}>+84345678910</Descriptions.Item>
                <Descriptions.Item label={'Mã số thuế'}>123456789</Descriptions.Item>
                <Descriptions.Item label={'Email doanh nghiệp'}>stcorp@gmail.com</Descriptions.Item>
              </Descriptions>
              <ColorTitle marginTop={'16px'}>
                Thông tin tài khoản
              </ColorTitle>
              <Descriptions
                bordered
                column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}
                size={'small'}>
                <Descriptions.Item label={'Tên tổ chức'}>Công Ty Cổ phần thương mại Sài gòn</Descriptions.Item>
                <Descriptions.Item label={'Số ĐKKD/ GPTL'}>9876543210000</Descriptions.Item>
                <Descriptions.Item label={'Tên viết tắt'}>Solution Technologi Componel</Descriptions.Item>
                <Descriptions.Item label={'Ngày cấp'}>15/03/2020</Descriptions.Item>
                <Descriptions.Item label={'Địa chỉ ĐKKD'}>Số 123 , Đường Yên Hòa, Cầu Giấy, Hà Nội</Descriptions.Item>
                <Descriptions.Item label={'Nơi cấp'}>Sở Thương mại TP Hà Nội</Descriptions.Item>
                <Descriptions.Item label={'Địa chỉ giao dịch'}>Số 8 , Trần Duy Hưng, Cầu Giấy, Hà
                  Nội</Descriptions.Item>
                <Descriptions.Item label={'Số điện thoại'}>+84345678910</Descriptions.Item>
                <Descriptions.Item label={'Mã số thuế'}>123456789</Descriptions.Item>
                <Descriptions.Item label={'Email doanh nghiệp'}>stcorp@gmail.com</Descriptions.Item>
              </Descriptions>
            </WhiteRoundedBox>
          </Col>
          <Col span={7}>
            <WhiteRoundedBox margin={'0 16px 16px 0'} padding={'0'}>
              <UserInfoBox>
                <UserInfoBoxHeader>
                  <Avatar size={64} icon={<UserOutlined />} />
                  <ColorText color={'#fff'} fontWeight={600}>Administrator</ColorText>
                </UserInfoBoxHeader>
                <Descriptions
                  labelStyle={{ width: '50%' }}
                  bordered
                  column={1}
                  size={'small'}>
                  <Descriptions.Item label={'Tên đăng nhập'}>Adminstrator</Descriptions.Item>
                  <Descriptions.Item label={'Họ và tên'}>Nguyễn Văn A</Descriptions.Item>
                  <Descriptions.Item label={'Số điện thoại'}>0912345678</Descriptions.Item>
                  <Descriptions.Item label={'Email'}>nguyenvana@gmail.com</Descriptions.Item>
                  <Descriptions.Item label={'Số giấy tờ tùy thân'}>123456789</Descriptions.Item>
                  <Descriptions.Item label={'Ngày cấp'}>15/03/2017</Descriptions.Item>
                  <Descriptions.Item label={'Nơi cấp'}>Cục quản lý xuất nhập cảnh</Descriptions.Item>
                  <Descriptions.Item label={'Vai trò'}>Tạo lệnh</Descriptions.Item>
                </Descriptions>
              </UserInfoBox>
            </WhiteRoundedBox>
            <WhiteRoundedBox margin={'0 16px 16px 0'}>
              <NotLinkedCardBox>
                <ColorTitle>Liên kết thẻ</ColorTitle>
                <img src={IMAGES.ICON_ADD_CARD} alt={''} />
                <div style={{ marginBottom: 16 }}>
                  <ColorText color={'#B4B4B4'}>
                    Bạn chưa có thẻ ngân hàng lưu sẵn tại đây. Thanh toán nhanh hơn bằng cách liên kết thẻ ngân hàng vào
                    Ví PayMobi
                  </ColorText>
                </div>
                <Button type={'primary'}
                        onClick={() => handleClickAddLink(PAGES.ADD_LINK.PATH)}
                >Liên kết thẻ mới</Button>
              </NotLinkedCardBox>
            </WhiteRoundedBox>
            <WhiteRoundedBox margin={'0 16px 16px 0'}>
              <ColorTitle>Thông tin tài khoản</ColorTitle>
              <LinkedCardCarousel listLinkedCard={mockupLinkedCard} />
            </WhiteRoundedBox>
          </Col>
        </Row>
      </IdentityInfoPageWrapper>
    </DefaultLayout>
  )
}

IdentityInfoPage.propTypes = {}

export default inject('commonStore')(observer(IdentityInfoPage))