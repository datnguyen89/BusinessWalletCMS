import React from 'react'
import PropTypes from 'prop-types'
import { CustomerApproveBusinessCustomerModalWrapper, ImgWrapper } from '../Customer_ApproveBusinessPageStyled'
import { Button, Col, Descriptions, Divider, Form, Input, Modal, Row, Tabs } from 'antd'
import { ColorText, RowCenterDiv, RowSpaceBetweenDiv } from '../../../../components/CommonStyled/CommonStyled'
import { CheckSquareOutlined, StopOutlined } from '@ant-design/icons'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SlickSlider from '../../../../components/SlickSlider'
import IMAGES from '../../../../images'

const { TabPane } = Tabs


const CustomerApproveBusinessCustomerModal = props => {
  const { visible, onClose } = props

  return (
    <CustomerApproveBusinessCustomerModalWrapper>
      <Modal
        width={'90%'}
        maskClosable={false}
        onCancel={() => onClose()}
        footer={null}
        title='Duyệt khách hàng doanh nghiệp'
        visible={visible}>
        <Tabs defaultActiveKey='1'>
          <TabPane tab='Thông tin doanh nghiệp' key='1'>
            <Descriptions
              className={'mt-16 mb-16'}
              labelStyle={{ width: '15%' }}
              bordered
              column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 2 }}
              size={'small'}>
              <Descriptions.Item label={'Số ĐKKD'}>0123456789</Descriptions.Item>
              <Descriptions.Item label={'Mã số thuế'}>9876543210</Descriptions.Item>
              <Descriptions.Item label={'Tên doang nghiệp'}>Công ty TNHH X</Descriptions.Item>
              <Descriptions.Item label={'Tên viết tắt'}>Công ty X</Descriptions.Item>
              <Descriptions.Item label={'Ngày thành lập'}>20/01/2021</Descriptions.Item>
              <Descriptions.Item label={'Quốc gia'}>Việt Nam</Descriptions.Item>
              <Descriptions.Item label={'Loại giấy tờ'}>GPKD</Descriptions.Item>
              <Descriptions.Item label={'Ngày cấp'}>20/01/2021</Descriptions.Item>
              <Descriptions.Item label={'Nơi cấp'}>Sở tài nguyên và môi trường</Descriptions.Item>
              <Descriptions.Item label={'Ngày hết hạn'}>
                <ColorText color={'#ccc'}>Chưa có thông tin</ColorText>
              </Descriptions.Item>
              <Descriptions.Item label={'Di động'}>0987654321</Descriptions.Item>
              <Descriptions.Item label={'Email'}>x@gmail.com</Descriptions.Item>
              <Descriptions.Item label={'ĐT cố định'}>
                <ColorText color={'#ccc'}>Chưa có thông tin</ColorText>
              </Descriptions.Item>
              <Descriptions.Item label={'Fax'}>
                <ColorText color={'#ccc'}>Chưa có thông tin</ColorText>
              </Descriptions.Item>
              <Descriptions.Item label={'Loại hình doanh nghiệp'}>Công ty cổ phần</Descriptions.Item>
              <Descriptions.Item label={'Lĩnh vực kinh doanh'}>Thương mại dịch vụ</Descriptions.Item>
              <Descriptions.Item label={'Nhóm khách hàng'}>Nội bộ</Descriptions.Item>
              <Descriptions.Item label={'Chi nhánh mở HĐ'}>Hà Nội 1</Descriptions.Item>
              <Descriptions.Item span={2} label={'Địa chỉ ĐKKD'}>
                27 Thái Thịnh, P.Ngã Tư Sở, Q.Đống Đa, TP.Hà Nội
              </Descriptions.Item>
              <Descriptions.Item span={2} label={'Địa chỉ giao dịch'}>
                27 Thái Thịnh, P.Ngã Tư Sở, Q.Đống Đa, TP.Hà Nội
              </Descriptions.Item>
            </Descriptions>
            <SlickSlider>
              <ImgWrapper>
                <img src={IMAGES.DUMB_IMG1} />
              </ImgWrapper>
              <ImgWrapper>
                <img src={IMAGES.DUMB_IMG2} />
              </ImgWrapper>
              <ImgWrapper>
                <img src={IMAGES.DUMB_IMG3} />
              </ImgWrapper>
            </SlickSlider>
          </TabPane>
          <TabPane tab='Thông tin người đại diện' key='2'>
            <Descriptions
              className={'mt-16 mb-16'}
              labelStyle={{ width: '15%' }}
              bordered
              column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 2 }}
              size={'small'}>
              <Descriptions.Item label={'Số giấy tờ'}>0123456789</Descriptions.Item>
              <Descriptions.Item label={'Đại diện'}>Đại diện theo pháp luật</Descriptions.Item>
              <Descriptions.Item label={'Họ và tên'}>Nguyễn Văn A</Descriptions.Item>
              <Descriptions.Item label={'Giới tính'}>Nam</Descriptions.Item>
              <Descriptions.Item label={'Ngày sinh'}>20/01/2021</Descriptions.Item>
              <Descriptions.Item label={'Quốc tịch'}>Việt Nam</Descriptions.Item>
              <Descriptions.Item label={'Loại giấy tờ'}>CCCD</Descriptions.Item>
              <Descriptions.Item label={'Ngày cấp'}>20/01/2021</Descriptions.Item>
              <Descriptions.Item label={'Nơi cấp'}>Sở tài nguyên và môi trường</Descriptions.Item>
              <Descriptions.Item label={'Ngày hết hạn'}>
                <ColorText color={'#ccc'}>Chưa có thông tin</ColorText>
              </Descriptions.Item>
              <Descriptions.Item label={'Di động'}>0987654321</Descriptions.Item>
              <Descriptions.Item label={'Email'}>x@gmail.com</Descriptions.Item>
              <Descriptions.Item label={'ĐT cố định'}>
                <ColorText color={'#ccc'}>Chưa có thông tin</ColorText>
              </Descriptions.Item>
              <Descriptions.Item label={'Chức vụ'}>
                <ColorText color={'#ccc'}>Chưa có thông tin</ColorText>
              </Descriptions.Item>
              <Descriptions.Item label={'Nghề nghiệp'}>Kinh doanh</Descriptions.Item>
              <Descriptions.Item label={'Dân tộc'}>Kinh</Descriptions.Item>
              <Descriptions.Item span={2} label={'Địa chỉ thường trú'}>
                27 Thái Thịnh, P.Ngã Tư Sở, Q.Đống Đa, TP.Hà Nội
              </Descriptions.Item>
              <Descriptions.Item span={2} label={'Địa chỉ hiện tại'}>
                27 Thái Thịnh, P.Ngã Tư Sở, Q.Đống Đa, TP.Hà Nội
              </Descriptions.Item>
            </Descriptions>
            <SlickSlider>
              <ImgWrapper>
                <img src={IMAGES.DUMB_IMG1} />
              </ImgWrapper>
              <ImgWrapper>
                <img src={IMAGES.DUMB_IMG2} />
              </ImgWrapper>
              <ImgWrapper>
                <img src={IMAGES.DUMB_IMG3} />
              </ImgWrapper>
            </SlickSlider>
          </TabPane>
          <TabPane tab='Thông tin kế toán trưởng' key='3'>
            <Descriptions
              className={'mt-16 mb-16'}
              labelStyle={{ width: '15%' }}
              bordered
              column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 2 }}
              size={'small'}>
              <Descriptions.Item label={'Số giấy tờ'}>0123456789</Descriptions.Item>
              <Descriptions.Item label={'Vai trò'}>Kế toán trưởng</Descriptions.Item>
              <Descriptions.Item label={'Họ và tên'}>Nguyễn Thị A</Descriptions.Item>
              <Descriptions.Item label={'Giới tính'}>Nữ</Descriptions.Item>
              <Descriptions.Item label={'Ngày sinh'}>20/01/2021</Descriptions.Item>
              <Descriptions.Item label={'Quốc tịch'}>Việt Nam</Descriptions.Item>
              <Descriptions.Item label={'Loại giấy tờ'}>CMND</Descriptions.Item>
              <Descriptions.Item label={'Ngày cấp'}>20/01/2021</Descriptions.Item>
              <Descriptions.Item label={'Nơi cấp'}>Sở tài nguyên và môi trường</Descriptions.Item>
              <Descriptions.Item label={'Ngày hết hạn'}>
                <ColorText color={'#ccc'}>Chưa có thông tin</ColorText>
              </Descriptions.Item>
              <Descriptions.Item label={'Di động'}>0987654321</Descriptions.Item>
              <Descriptions.Item label={'Email'}>x@gmail.com</Descriptions.Item>
              <Descriptions.Item label={'ĐT cố định'}>
                <ColorText color={'#ccc'}>Chưa có thông tin</ColorText>
              </Descriptions.Item>
              <Descriptions.Item label={'Chức vụ'}>
                <ColorText color={'#ccc'}>Kế toán trưởng</ColorText>
              </Descriptions.Item>
              <Descriptions.Item label={'Nghề nghiệp'}>Kế toán</Descriptions.Item>
              <Descriptions.Item label={'Dân tộc'}>Kinh</Descriptions.Item>
              <Descriptions.Item span={2} label={'Địa chỉ thường trú'}>
                27 Thái Thịnh, P.Ngã Tư Sở, Q.Đống Đa, TP.Hà Nội
              </Descriptions.Item>
              <Descriptions.Item span={2} label={'Địa chỉ hiện tại'}>
                27 Thái Thịnh, P.Ngã Tư Sở, Q.Đống Đa, TP.Hà Nội
              </Descriptions.Item>
            </Descriptions>
            <SlickSlider>
              <ImgWrapper>
                <img src={IMAGES.DUMB_IMG1} />
              </ImgWrapper>
              <ImgWrapper>
                <img src={IMAGES.DUMB_IMG2} />
              </ImgWrapper>
              <ImgWrapper>
                <embed
                  src={IMAGES.DUMB_PDF1}
                  type='application/pdf'
                  frameBorder='0'
                  scrolling='auto'
                  height='800px'
                  width='100%'
                />
              </ImgWrapper>
            </SlickSlider>
          </TabPane>
        </Tabs>

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
    </CustomerApproveBusinessCustomerModalWrapper>
  )
}

CustomerApproveBusinessCustomerModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default CustomerApproveBusinessCustomerModal