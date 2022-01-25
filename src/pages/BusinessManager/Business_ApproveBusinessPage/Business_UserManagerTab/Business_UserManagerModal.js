import React from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Descriptions, Divider, Form, Input, Modal, Row, Tabs } from 'antd'
import { RowCenterDiv } from '../../../../components/CommonStyled/CommonStyled'
import { CheckSquareOutlined, StopOutlined } from '@ant-design/icons'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BusinessUserManagerModalWrapper } from '../Business_ApproveBusinessPageStyled'

const { TabPane } = Tabs


const BusinessUserManagerModal = props => {
  const { visible, onClose } = props

  return (
    <BusinessUserManagerModalWrapper>
      <Modal
        width={'90%'}
        style={{ top: '50px' }}
        maskClosable={false}
        onCancel={() => onClose()}
        footer={null}
        title='Duyệt User doanh nghiệp'
        visible={visible}>

        <Divider>Thông tin doanh nghiệp</Divider>
        <Descriptions
          column={{ xxl: 8, xl: 8, lg: 8, md: 8, sm: 8, xs: 8 }}
          className={'mt-16 mb-16'}
          layout={'vertical'}
          bordered
          size={'small'}>
          <Descriptions.Item label={'Tên khách hàng'}>Công ty TNHH Đống Đa</Descriptions.Item>
          <Descriptions.Item label={'Loại khách hàng'}>Doanh nghiệp</Descriptions.Item>
          <Descriptions.Item label={'Nhóm KH'}>Nội bộ</Descriptions.Item>
          <Descriptions.Item label={'Số ĐKKD'}>0987654321</Descriptions.Item>
          <Descriptions.Item label={'Mã số thuế'}>0987654321</Descriptions.Item>
          <Descriptions.Item label={'Số điện thoại'}>0987654321</Descriptions.Item>
          <Descriptions.Item label={'Thời gian đăng ký'}>20/08/2021 13:00</Descriptions.Item>
          <Descriptions.Item label={'Trạng thái'}>Hoạt động</Descriptions.Item>
        </Descriptions>

        <Divider>Thông tin user</Divider>
        <Descriptions
          column={2}
          className={'mt-16 mb-16'}
          bordered
          size={'small'}>
          <Descriptions.Item label={'Họ tên User'}>Nguyễn Văn A</Descriptions.Item>
          <Descriptions.Item label={'Phòng ban'}>Kế toán</Descriptions.Item>
          <Descriptions.Item label={'Tên đăng nhập'}>ANv</Descriptions.Item>
          <Descriptions.Item label={'Vai trò'}>Tạo lập</Descriptions.Item>
          <Descriptions.Item label={'Di động'}>0987654321</Descriptions.Item>
          <Descriptions.Item label={'Email'}>anv@gmail.com</Descriptions.Item>
          <Descriptions.Item label={'Hình thức bảo mật'}>SMS</Descriptions.Item>
          <Descriptions.Item label={'Chức vụ'}>Kế toán viên</Descriptions.Item>
          <Descriptions.Item label={'Ngày sinh'}>29/04/1989</Descriptions.Item>
          <Descriptions.Item label={'Giới tính'}>Nam</Descriptions.Item>
          <Descriptions.Item label={'Tài khoản sử dụng'}>Tài khoản 1, Tài khoản 2</Descriptions.Item>
          <Descriptions.Item label={'Chức năng sử dụng'}>Tất cả</Descriptions.Item>
          <Descriptions.Item label={'Trạng thái'}>Hoạt động</Descriptions.Item>
          <Descriptions.Item label={'Nội dung'}>Thay đổi</Descriptions.Item>
          <Descriptions.Item label={'Nội dung thay đổi'} span={2}>
            Họ tên, phòng ban, Số điện thoại, Chức năng sử dụng
          </Descriptions.Item>
          <Descriptions.Item label={'Người tạo'}>Nguyễn Văn B</Descriptions.Item>
          <Descriptions.Item label={'Ngày tạo'}>20/01/2022</Descriptions.Item>
        </Descriptions>

        <Divider>Thông tin phê duyệt</Divider>

        <Form
          colon={false}>
          <Row justify={'center'}>
            <Col span={18}>
              <Form.Item label={''}>
                <Input.TextArea placeholder={'Lý do'} rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <RowCenterDiv>
            <Button className={'mr-16'}><StopOutlined /> Từ chối</Button>
            <Button type={'primary'}><CheckSquareOutlined /> Phê duyệt</Button>
          </RowCenterDiv>
        </Form>


      </Modal>
    </BusinessUserManagerModalWrapper>
  )
}

BusinessUserManagerModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default BusinessUserManagerModal