import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { Button, Col, DatePicker, Divider, Form, Input, Row, Select } from 'antd'
import { CustomerBusinessInfoStepOneWrapper } from '../BusinessProfileManagerPageStyled'
import { CloudUploadOutlined, RetweetOutlined, RightOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import { RowCenterDiv, RowFlexEndDiv } from '../../../../components/CommonStyled/CommonStyled'
import moment from 'moment'
import UploadModule from '../../../../components/UploadModule'

const CustomerBusinessInfoStepOne = props => {
  const { commonStore, nextStep } = props
  const { appTheme } = commonStore
  const [formBusinessInfo] = Form.useForm()

  const [fileToUpload1, setFileToUpload1] = useState(null)
  const [fileToPreview1, setFileToPreview1] = useState(null)
  const [fileToUpload2, setFileToUpload2] = useState(null)
  const [fileToPreview2, setFileToPreview2] = useState(null)

  const onFinish = (formCollection) => {
    console.log(formCollection)
    nextStep()
  }

  const disabledDateFuture = (current) => {
    // Không được chọn ngày sinh ở tương lai
    return current && current > moment().startOf('day').add(1, 'days')
  }
  const handleSearchDKKD = (value, e) => {
    e.preventDefault()
    console.log(value)
  }

  const resetFormBusinessInfo = () => {
    formBusinessInfo.setFieldsValue({
      business_dkkd: undefined,
      business_maSoThue: undefined,
      business_tenDoanhNghiep: undefined,
      business_tenVietTat: undefined,
      business_ngayThanhLap: undefined,
      business_quocGia: '1',
      business_loaiGiayTo: '1',
      business_ngayCap: undefined,
      business_noiCap: undefined,
      business_ngayHetHan: undefined,
      business_diDong: undefined,
      business_email: undefined,
      business_dtCoDinh: undefined,
      business_fax: undefined,
      business_loaiHinhDoanhNghiep: undefined,
      business_linhVucKinhDoanh: undefined,
      business_nhomKhachHang: undefined,
      business_chiNhanhMoHD: '0',
      business_diaChiDKKD: undefined,
      business_cityDKKD: undefined,
      business_districtDKKD: undefined,
      business_wardsDKKD: undefined,
      business_diaChiGiaoDich: undefined,
      business_cityGiaoDich: undefined,
      business_districtGiaoDich: undefined,
      business_wardsGiaoDich: undefined,
    })
    setFileToUpload1(null)
    setFileToPreview1(null)
    setFileToUpload2(null)
    setFileToPreview2(null)
  }

  useEffect(() => {
    resetFormBusinessInfo()
  }, [])

  return (
    <CustomerBusinessInfoStepOneWrapper>
      <Divider style={{ color: appTheme.solidColor }}>Thông tin doanh nghiệp</Divider>

      <Form
        validateTrigger={false}
        onFinish={onFinish}
        style={{ marginTop: 32 }}
        labelAlign={'left'}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        colon={false}
        form={formBusinessInfo}>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập số ĐKKD' }]}
              label={'Số ĐKKD'} name={'business_dkkd'}>
              <Input.Search maxLength={20}
                            placeholder={'Nhập nội dung'}
                            enterButton showCount={true}
                            onSearch={handleSearchDKKD} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập mã số thuế' }]}
              label={'Mã số thuế'} name={'business_maSoThue'}>
              <Input maxLength={20} placeholder={'Nhập nội dung'} showCount={true} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập tên doanh nghiệp' }]}
              label={'Tên doanh nghiệp'} name={'business_tenDoanhNghiep'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} showCount={true} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập tên viết tắt' }]}
              label={'Tên viết tắt'} name={'business_tenVietTat'}>
              <Input maxLength={20} placeholder={'Nhập nội dung'} showCount={true} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn ngày thành lập' }]}
              label={'Ngày thành lập'} name={'business_ngayThanhLap'}>
              <DatePicker disabledDate={disabledDateFuture} style={{ width: '100%' }} format={'DD/MM/YYYY'} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Quốc gia'} name={'business_quocGia'}>
              <Select placeholder={'Chọn quốc gia'}>
                <Select.Option value={'1'}>Việt Nam</Select.Option>
                <Select.Option value={'2'}>Khác</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Loại giấy tờ'} name={'business_loaiGiayTo'}>
              <Select placeholder={'Chọn loại giấy tờ'}>
                <Select.Option value={'1'}>ĐKKD</Select.Option>
                <Select.Option value={'2'}>GPTL</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn ngày cấp' }]}
              label={'Ngày cấp'} name={'business_ngayCap'}>
              <DatePicker disabledDate={disabledDateFuture} style={{ width: '100%' }} format={'DD/MM/YYYY'} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập nơi cấp' }]}
              label={'Nơi cấp'} name={'business_noiCap'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} showCount={true} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label={'Ngày hết hạn'} name={'business_ngayHetHan'}>
              <DatePicker format={'DD/MM/YYYY'} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập số di động' }]}
              label={'Di động'} name={'business_diDong'}>
              <Input maxLength={20} placeholder={'Nhập nội dung'} showCount={true} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label={'Email'} name={'business_email'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} showCount={true} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              label={'ĐT cố định'} name={'business_dtCoDinh'}>
              <Input maxLength={20} placeholder={'Nhập nội dung'} showCount={true} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label={'Fax'} name={'business_fax'}>
              <Input maxLength={20} placeholder={'Nhập nội dung'} showCount={true} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn loại hình doanh nghiệp' }]}
              label={'Loại hình doanh nghiệp'} name={'business_loaiHinhDoanhNghiep'}>
              <Select placeholder={'Vui lòng chọn'}>
                <Select.Option value={'1'}>Doanh nghiệp tư nhân</Select.Option>
                <Select.Option value={'2'}>Doanh nghiệp nhà nước</Select.Option>
                <Select.Option value={'3'}>Công ty TNHH</Select.Option>
                <Select.Option value={'4'}>Công ty cổ phần</Select.Option>
                <Select.Option value={'5'}>Công ty hợp danh</Select.Option>
                <Select.Option value={'6'}>Hợp tác xã</Select.Option>
                <Select.Option value={'7'}>Khác</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn lĩnh vực kinh doanh' }]}
              label={'Lĩnh vực kinh doanh'} name={'business_linhVucKinhDoanh'}>
              <Select placeholder={'Vui lòng chọn'}>
                <Select.Option value={'1'}>Kinh doanh tài chính</Select.Option>
                <Select.Option value={'2'}>Thông tin, tức tức, giải trí</Select.Option>
                <Select.Option value={'3'}>Nông nghiệp lâm nghiệp & khai thác mỏ</Select.Option>
                <Select.Option value={'4'}>Vận tải</Select.Option>
                <Select.Option value={'5'}>Bán lẻ & phân phối</Select.Option>
                <Select.Option value={'6'}>Bất động sản</Select.Option>
                <Select.Option value={'7'}>Kinh doanh dịch vụ</Select.Option>
                <Select.Option value={'8'}>Sản xuất</Select.Option>
                <Select.Option value={'9'}>Dịch vụ công cộng</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              label={'Nhóm khách hàng'} name={'business_nhomKhachHang'}>
              <Select placeholder={'Vui lòng chọn'}>
                <Select.Option value={'1'}>Nội bộ</Select.Option>
                <Select.Option value={'2'}>Khách hàng ngoài</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label={'Chi nhánh mở HĐ'} name={'business_chiNhanhMoHD'}>
              <Select placeholder={'Chọn chi nhánh mở HĐ'}>
                <Select.Option value={'0'}>Hội sở Mobifone</Select.Option>
                <Select.Option value={'1'}>Chi nhánh 1</Select.Option>
                <Select.Option value={'2'}>Chi nhánh 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              rules={[{ required: true, message: 'Vui lòng nhập địa chỉ ĐKKD' }]}
              label={'Địa chỉ ĐKKD'} name={'business_diaChiDKKD'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} showCount={true} />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng chọn ' }]}
              label={''} name={'business_cityDKKD'}>
              <Select placeholder={'Tỉnh/Thành phố'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng chọn ' }]}
              label={''} name={'business_districtDKKD'}>
              <Select placeholder={'Quận/Huyện'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng chọn ' }]}
              label={''} name={'business_wardsDKKD'}>
              <Select placeholder={'Phường/Xã'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              rules={[{ required: true, message: 'Vui lòng nhập địa chỉ giao dịch' }]}
              label={'Địa chỉ giao dịch'} name={'business_diaChiGiaoDich'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} showCount={true} />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng chọn ' }]}
              label={''} name={'business_cityGiaoDich'}>
              <Select placeholder={'Tỉnh/Thành phố'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng chọn ' }]}
              label={''} name={'business_districtGiaoDich'}>
              <Select placeholder={'Quận/Huyện'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng chọn ' }]}
              label={''} name={'business_wardsGiaoDich'}>
              <Select placeholder={'Phường/Xã'}>
                <Select.Option value={'1'}>Loại 1</Select.Option>
                <Select.Option value={'2'}>Loại 2</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={24}>
            <Form.Item labelCol={{ span: 3 }} wrapperCol={{ span: 21 }} label={'Ảnh ĐKKD/GPTL'}>
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
            <Form.Item labelCol={{ span: 3 }} wrapperCol={{ span: 21 }} label={'Bản scan hợp đồng'}>
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
        </Row>
        <Row className={'mt-32'}>
          <Col span={8}>

          </Col>
          <Col span={8}>
            <RowCenterDiv>
              <Button type={'default'} onClick={() => resetFormBusinessInfo()}><RetweetOutlined /> Làm rỗng</Button>
            </RowCenterDiv>
          </Col>
          <Col span={8}>
            <RowFlexEndDiv>
              <Button type={'primary'} htmlType={'submit'}><RightOutlined /> Tiếp tục</Button>
              {/*<Button type={'primary'} onClick={() => nextStep()}><RightOutlined /> Tiếp tục1</Button>*/}
            </RowFlexEndDiv>
          </Col>
        </Row>
      </Form>

    </CustomerBusinessInfoStepOneWrapper>
  )
}

CustomerBusinessInfoStepOne.propTypes = {
  nextStep: PropTypes.func,
}

export default inject('commonStore')(observer(CustomerBusinessInfoStepOne))