import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { Button, Col, DatePicker, Divider, Form, Input, Radio, Row, Select } from 'antd'
import { CustomerAccountingStepThreeWrapper } from '../BusinessProfileManagerPageStyled'
import moment from 'moment'
import UploadModule from '../../../../components/UploadModule'
import {
  CheckOutlined,
  CloudUploadOutlined,
  DoubleLeftOutlined, DoubleRightOutlined,
  LeftOutlined,
  RetweetOutlined,
} from '@ant-design/icons'
import { RowCenterDiv, RowFlexEndDiv } from '../../../../components/CommonStyled/CommonStyled'
import { DEVICE } from '../../../../utils/constant'

const CustomerAccountingStepThree = props => {
  const { commonStore, nextStep, prevStep } = props
  const { appTheme, device } = commonStore
  const [formAccountingInfo] = Form.useForm()

  const [fileToUpload1, setFileToUpload1] = useState(null)
  const [fileToPreview1, setFileToPreview1] = useState(null)
  const [fileToUpload2, setFileToUpload2] = useState(null)
  const [fileToPreview2, setFileToPreview2] = useState(null)
  const [fileToUpload3, setFileToUpload3] = useState(null)
  const [fileToPreview3, setFileToPreview3] = useState(null)

  const onFinish = (formCollection) => {
    console.log(formCollection)
    console.log('done')
  }

  const disabledDateFuture = (current) => {
    // Không được chọn ngày sinh ở tương lai
    return current && current > moment().startOf('day').add(1, 'days')
  }
  const handleSearchDKKD = (value, e) => {
    e.preventDefault()
    console.log(value)
  }

  const resetFormAccountingInfo = () => {
    formAccountingInfo.setFieldsValue({
      accounting_soGiayTo: undefined,
      accounting_loaiKeToan: undefined,
      accounting_hoVaTen: undefined,
      accounting_gioiTinh: undefined,
      accounting_ngaySinh: undefined,
      accounting_quocTich: '1',
      accounting_loaiGiayTo: '1',
      accounting_ngayCap: undefined,
      accounting_noiCap: undefined,
      accounting_ngayHetHan: undefined,
      accounting_diDong: undefined,
      accounting_email: undefined,
      accounting_dtCoDinh: undefined,
      accounting_chucVu: undefined,
      accounting_ngheNghiep: undefined,
      accounting_danToc: undefined,
      accounting_diaChiThuongTru: undefined,
      accounting_cityThuongTru: undefined,
      accounting_districtThuongTru: undefined,
      accounting_wardsThuongTru: undefined,
      accounting_diaChiHienTai: undefined,
      accounting_cityHienTai: undefined,
      accounting_districtHienTai: undefined,
      accounting_wardsHienTai: undefined,
    })
    setFileToUpload1(null)
    setFileToPreview1(null)
    setFileToUpload2(null)
    setFileToPreview2(null)
    setFileToUpload3(null)
    setFileToPreview3(null)
  }

  useEffect(() => {
    resetFormAccountingInfo()
  }, [])
  return (
    <CustomerAccountingStepThreeWrapper>
      <Divider style={{ color: appTheme.solidColor }}>Thông tin người phụ trách kế toán</Divider>

      <Form
        validateTrigger={false}
        onFinish={onFinish}
        style={{ marginTop: 32 }}
        labelAlign={'left'}
        labelCol={{ xxl: 8, xl: 8, lg: 24, md: 24, sm: 24, xs: 24 }}
        wrapperCol={{ xxl: 16, xl: 16, lg: 24, md: 24, sm: 24, xs: 24 }}
        colon={false}
        form={formAccountingInfo}>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col xxl={10} xl={12} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập số giấy tờ' }]}
              label={'Số giấy tờ'} name={'accounting_soGiayTo'}>
              <Input.Search maxLength={20} placeholder={'Nhập nội dung'}
                            enterButton showCount={true}
                            onSearch={handleSearchDKKD} />
            </Form.Item>
          </Col>
          <Col xxl={10} xl={12} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn loại kế toán' }]}
              labelCol={{ span: 0 }} wrapperCol={{ span: 24 }}
              label={''} name={'accounting_loaiKeToan'}>
              <Radio.Group style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                <Radio value={'1'}>Kế toán trưởng</Radio>
                <Radio value={'2'}>Người phụ trách kế toán</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col xxl={10} xl={12} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
              label={'Họ và tên'} name={'accounting_hoVaTen'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} showCount={true} />
            </Form.Item>
          </Col>

          <Col xxl={10} xl={12} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Giới tính'} name={'accounting_gioiTinh'}>
              <Select placeholder={'Vui lòng chọn'}>
                <Select.Option value={'1'}>Nam</Select.Option>
                <Select.Option value={'0'}>Nữ</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col xxl={10} xl={12} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn ' }]}
              label={'Ngày sinh'} name={'accounting_ngaySinh'}>
              <DatePicker disabledDate={disabledDateFuture} style={{ width: '100%' }} format={'DD/MM/YYYY'} />
            </Form.Item>
          </Col>
          <Col xxl={10} xl={12} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn ' }]}
              label={'Quốc tịch'} name={'accounting_quocTich'}>
              <Select placeholder={'Chọn quốc tịch'}>
                <Select.Option value={'1'}>Việt Nam</Select.Option>
                <Select.Option value={'2'}>Lào</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col xxl={10} xl={12} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Loại giấy tờ'} name={'accounting_loaiGiayTo'}>
              <Select placeholder={'Chọn loại giấy tờ'}>
                <Select.Option value={'1'}>Căn cước công dân</Select.Option>
                <Select.Option value={'2'}>Chứng minh nhân dân</Select.Option>
                <Select.Option value={'3'}>Hộ chiếu</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xxl={10} xl={12} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn ' }]}
              label={'Ngày cấp'} name={'accounting_ngayCap'}>
              <DatePicker disabledDate={disabledDateFuture} style={{ width: '100%' }} format={'DD/MM/YYYY'} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col xxl={10} xl={12} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Nơi cấp'} name={'accounting_noiCap'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} showCount={true} />
            </Form.Item>
          </Col>
          <Col xxl={10} xl={12} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              label={'Ngày hết hạn'} name={'accounting_ngayHetHan'}>
              <DatePicker format={'DD/MM/YYYY'} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col xxl={10} xl={12} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Di động'} name={'accounting_diDong'}>
              <Input maxLength={20} placeholder={'Nhập nội dung'} showCount={true} />
            </Form.Item>
          </Col>
          <Col xxl={10} xl={12} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              label={'Email'} name={'accounting_email'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} showCount={true} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col xxl={10} xl={12} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              label={'ĐT cố định'} name={'accounting_dtCoDinh'}>
              <Input maxLength={20} placeholder={'Nhập nội dung'} showCount={true} />
            </Form.Item>
          </Col>
          <Col xxl={10} xl={12} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              label={'Chức vụ'} name={'accounting_chucVu'}>
              <Input maxLength={20} placeholder={'Nhập nội dung'} showCount={true} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col xxl={10} xl={12} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập nghề nghiệp' }]}
              label={'Nghề nghiệp'} name={'accounting_ngheNghiep'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} showCount={true} />
            </Form.Item>
          </Col>
          <Col xxl={10} xl={12} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Dân tộc'} name={'accounting_danToc'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} showCount={true} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col xxl={10} xl={12} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Địa chỉ thường trú'} name={'accounting_diaChiThuongTru'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} showCount={true} />
            </Form.Item>
          </Col>
          <Col xxl={4} xl={4} lg={8} md={8} sm={8} xs={24}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng chọn ' }]}
              label={''} name={'accounting_cityThuongTru'}>
              <Select placeholder={'Tỉnh/Thành phố'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xxl={4} xl={4} lg={8} md={8} sm={8} xs={24}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={''} name={'accounting_districtThuongTru'}>
              <Select placeholder={'Quận/Huyện'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xxl={4} xl={4} lg={8} md={8} sm={8} xs={24}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={''} name={'accounting_wardsThuongTru'}>
              <Select placeholder={'Phường/Xã'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col xxl={10} xl={12} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Địa chỉ hiện tại'} name={'accounting_diaChiHienTai'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} showCount={true} />
            </Form.Item>
          </Col>
          <Col xxl={4} xl={4} lg={8} md={8} sm={8} xs={24}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={''} name={'accounting_cityHienTai'}>
              <Select placeholder={'Tỉnh/Thành phố'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xxl={4} xl={4} lg={8} md={8} sm={8} xs={24}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={''} name={'accounting_districtHienTai'}>
              <Select placeholder={'Quận/Huyện'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xxl={4} xl={4} lg={8} md={8} sm={8} xs={24}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={''} name={'accounting_wardsHienTai'}>
              <Select placeholder={'Phường/Xã'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={24}>
            <Form.Item labelCol={{ span: 3 }} wrapperCol={{ span: 21 }}
                       label={<span className={'custom-required'}>Ảnh giấy tờ mặt trước</span>}>
              <UploadModule
                uploadButton={
                  <Button type={'link'} className={'mb-16'}><CloudUploadOutlined />
                    Vui lòng chọn tệp
                  </Button>}
                callbackFileCropped={e => setFileToUpload1(e)}
                callbackFileSrcPreview={e => setFileToPreview1(e)}
              />
            </Form.Item>
            {
              fileToUpload1?.type === 'application/pdf'
                ?
                <embed
                  src={fileToPreview1}
                  type='application/pdf'
                  frameBorder='0'
                  scrolling='auto'
                  height='900px'
                  width='100%'
                />
                :
                fileToPreview1
                && <img className={'previewImg'} src={fileToPreview1} alt={''} />
            }
          </Col>
          <Col span={24}>
            <Form.Item labelCol={{ span: 3 }} wrapperCol={{ span: 21 }}
                       label={<span className={'custom-required'}>Ảnh giấy tờ mặt sau</span>}>
              <UploadModule
                uploadButton={
                  <Button type={'link'} className={'mb-16'}><CloudUploadOutlined />
                    Vui lòng chọn tệp
                  </Button>}
                callbackFileCropped={e => setFileToUpload2(e)}
                callbackFileSrcPreview={e => setFileToPreview2(e)} />

            </Form.Item>
            {
              fileToUpload2?.type === 'application/pdf'
                ?
                <embed
                  src={fileToPreview2}
                  type='application/pdf'
                  frameBorder='0'
                  scrolling='auto'
                  height='900px'
                  width='100%'
                />
                :
                fileToPreview2
                && <img className={'previewImg'} src={fileToPreview2} alt={''} />
            }
          </Col>
          <Col span={24}>
            <Form.Item labelCol={{ span: 3 }} wrapperCol={{ span: 21 }}
                       label={<span className={'custom-required'}>Quyết định bổ nhiệm</span>}>
              <UploadModule
                uploadButton={
                  <Button type={'link'} className={'mb-16'}><CloudUploadOutlined />
                    Vui lòng chọn tệp
                  </Button>}
                callbackFileCropped={e => setFileToUpload3(e)}
                callbackFileSrcPreview={e => setFileToPreview3(e)} />

            </Form.Item>
            {
              fileToUpload3?.type === 'application/pdf'
                ?
                <embed
                  src={fileToPreview3}
                  type='application/pdf'
                  frameBorder='0'
                  scrolling='auto'
                  height='900px'
                  width='100%'
                />
                :
                fileToPreview3
                && <img className={'previewImg'} src={fileToPreview3} alt={''} />
            }
          </Col>
        </Row>
        <Row className={'mt-32'} gutter={[16, 16]}>
          <Col xxl={8} xl={8} lg={8} md={8} sm={8} xs={24}>
            <Button block={device === DEVICE.MOBILE} type={'default'} onClick={() => prevStep()}>
              <LeftOutlined /> Quay lại
            </Button>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={8} sm={8} xs={24}>
            <RowCenterDiv>
              <Button block={device === DEVICE.MOBILE} type={'default'} onClick={() => resetFormAccountingInfo()}>
                <RetweetOutlined /> Làm rỗng
              </Button>
            </RowCenterDiv>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={8} sm={8} xs={24}>
            <RowFlexEndDiv>
              <Button block={device === DEVICE.MOBILE} type={'primary'} htmlType={'submit'}>
                <DoubleRightOutlined /> Tiếp tục
              </Button>
              {/*<Button type={'primary'} onClick={() => nextStep()}><DoubleRightOutlined /> Tiếp tục1</Button>*/}
            </RowFlexEndDiv>
          </Col>
        </Row>
      </Form>

    </CustomerAccountingStepThreeWrapper>
  )
}

CustomerAccountingStepThree.propTypes = {
  prevStep: PropTypes.func,
}

export default inject('commonStore')(observer(CustomerAccountingStepThree))