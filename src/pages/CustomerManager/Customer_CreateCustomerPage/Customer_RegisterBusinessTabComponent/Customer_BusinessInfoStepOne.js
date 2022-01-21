import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { message, Button, Col, DatePicker, Divider, Form, Input, Row, Select, Upload, Skeleton } from 'antd'
import { CustomerBusinessInfoStepOneWrapper } from '../Customer_CreateCustomerPageStyled'
import ImgCrop from 'antd-img-crop'
import { CloudUploadOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import UploadCropModule from '../../../../components/UploadCropModule'
import UploadModule from '../../../../components/UploadModule'

const CustomerBusinessInfoStepOne = props => {
  const { commonStore, nextStep } = props
  const { appTheme } = commonStore
  const [formBusinessInfo] = Form.useForm()

  const [fileToUpload1, setFileToUpload1] = useState(null)
  const [fileToPreview1, setFileToPreview1] = useState(null)
  const [fileToUpload2, setFileToUpload2] = useState(null)
  const [fileToPreview2, setFileToPreview2] = useState(null)

  return (
    <CustomerBusinessInfoStepOneWrapper>
      <Divider style={{ color: appTheme.solidColor }}>Thông tin doanh nghiệp</Divider>

      <Form
        style={{ marginTop: 32 }}
        labelAlign={'left'}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        colon={false}
        form={formBusinessInfo}>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={8}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Số ĐKKD'} name={'dkkd'}>
              <Input placeholder={'Nhập nội dung'} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Mã số thuế'} name={'maSoThue'}>
              <Input placeholder={'Nhập nội dung'} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={8}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Tên doanh nghiệp'} name={'tenDoanhNghiep'}>
              <Input placeholder={'Nhập nội dung'} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Tên viết tắt'} name={'tenVietTat'}>
              <Input placeholder={'Nhập nội dung'} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={8}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn ' }]}
              label={'Ngày thành lập'} name={'ngayThanhLap'}>
              <DatePicker format={'DD/MM/YYYY'} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Quốc gia'} name={'quocGia'}>
              <Select placeholder={'Chọn quốc gia'}>
                <Select.Option value={'1'}>Việt Nam</Select.Option>
                <Select.Option value={'2'}>Lào</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={8}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Loại giấy tờ'} name={'loaiGiayTo'}>
              <Select placeholder={'Chọn loại giấy tờ'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn ' }]}
              label={'Ngày cấp'} name={'ngayCap'}>
              <DatePicker format={'DD/MM/YYYY'} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={8}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Nơi cấp'} name={'noiCap'}>
              <Input placeholder={'Nhập nội dung'} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn ' }]}
              label={'Ngày hết hạn'} name={'ngayHetHan'}>
              <DatePicker format={'DD/MM/YYYY'} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={8}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Di động'} name={'diDong'}>
              <Input placeholder={'Nhập nội dung'} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Email'} name={'email'}>
              <Input placeholder={'Nhập nội dung'} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={8}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'ĐT cố định'} name={'dtCoDinh'}>
              <Input placeholder={'Nhập nội dung'} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Fax'} name={'fax'}>
              <Input placeholder={'Nhập nội dung'} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={8}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Loại hình doanh nghiệp'} name={'loaiHinhDoanhNghiep'}>
              <Select placeholder={'Chọn loại hình doanh nghiệp'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Lĩnh vực kinh doanh'} name={'linhVucKinhDoanh'}>
              <Select placeholder={'Chọn lĩnh vực kinh doanh'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={8}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Nhóm khách hàng'} name={'nhomKhachHang'}>
              <Select placeholder={'Chọn nhóm khách hàng'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Chi nhánh mở HĐ'} name={'chiNhanhMoHD'}>
              <Select placeholder={'Chọn chi nhánh mở HĐ'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={8}>
            <Form.Item
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Địa chỉ ĐKKD'} name={'diaChiDKKD'}>
              <Input placeholder={'Nhập nội dung'} />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={''} name={'cityDKKD'}>
              <Select placeholder={'Tỉnh/Thành phố'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={''} name={'districtDKKD'}>
              <Select placeholder={'Quận/Huyện'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={''} name={'wardsDKKD'}>
              <Select placeholder={'Phường/Xã'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={8}>
            <Form.Item
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Địa chỉ giao dịch'} name={'diaChiGiaoDich'}>
              <Input placeholder={'Nhập nội dung'} />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={''} name={'cityGiaoDich'}>
              <Select placeholder={'Tỉnh/Thành phố'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={''} name={'districtGiaoDich'}>
              <Select placeholder={'Quận/Huyện'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={''} name={'wardsGiaoDich'}>
              <Select placeholder={'Phường/Xã'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={12}>
            <Form.Item labelCol={{ span: 5 }} wrapperCol={{ span: 19 }} label={'Ảnh ĐKKD/GPTL'}>
              <UploadCropModule
                uploadButton={<Button type={'link'} className={'mb-16'}><CloudUploadOutlined /> Vui lòng chọn
                  tệp</Button>}
                callbackFileCropped={e => setFileToUpload1(e)}
                callbackFileSrcPreview={e => setFileToPreview1(e)}
                grid={true} rotate={true} />
              {
                fileToPreview1
                && <img src={fileToPreview1} alt={''} height={320} />

              }
            </Form.Item>

          </Col>
          <Col span={12}>
            <Form.Item labelCol={{ span: 5 }} wrapperCol={{ span: 19 }} label={'Bản scan hợp đồng'}>
              <UploadCropModule
                uploadButton={<Button type={'link'} className={'mb-16'}><CloudUploadOutlined /> Vui lòng chọn
                  tệp</Button>}
                callbackFileCropped={e => setFileToUpload2(e)}
                callbackFileSrcPreview={e => setFileToPreview2(e)}
                grid={true} rotate={true} />
              {
                fileToPreview2
                && <img src={fileToPreview2} alt={''} height={320} />

              }
            </Form.Item>
          </Col>
        </Row>
      </Form>
      {/*<Button type={'primary'} onClick={() => nextStep()}>Tiếp tục</Button>*/}
    </CustomerBusinessInfoStepOneWrapper>
  )
}

CustomerBusinessInfoStepOne.propTypes = {
  nextStep: PropTypes.func,
}

export default inject('commonStore')(observer(CustomerBusinessInfoStepOne))