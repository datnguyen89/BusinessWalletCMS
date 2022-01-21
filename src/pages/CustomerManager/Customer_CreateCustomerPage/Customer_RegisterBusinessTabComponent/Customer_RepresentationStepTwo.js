import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { Button, Col, DatePicker, Divider, Form, Input, Row, Select } from 'antd'
import { CustomerRepresentationStepTwoWrapper } from '../Customer_CreateCustomerPageStyled'
import moment from 'moment'
import UploadModule from '../../../../components/UploadModule'
import { CloudUploadOutlined, DoubleRightOutlined, LeftOutlined, RetweetOutlined } from '@ant-design/icons'
import { RowCenterDiv, RowFlexEndDiv } from '../../../../components/CommonStyled/CommonStyled'

const CustomerRepresentationStepTwo = props => {
  const { commonStore, nextStep, prevStep } = props
  const { appTheme } = commonStore
  const [formBusinessInfo] = Form.useForm()

  const [fileToUpload1, setFileToUpload1] = useState(null)
  const [fileToPreview1, setFileToPreview1] = useState(null)
  const [fileToUpload2, setFileToUpload2] = useState(null)
  const [fileToPreview2, setFileToPreview2] = useState(null)

  const [dkkdLength, setDkkdLength] = useState(0)
  const [maSoThueLength, setMaSoThueLength] = useState(0)
  const [tenDoanhNghiepLength, setTenDoanhNghiepLength] = useState(0)
  const [tenVietTatLength, setTenVietTatLength] = useState(0)
  const [noiCapLength, setNoiCapLength] = useState(0)
  const [diDongLength, setDiDongLength] = useState(0)
  const [emailLength, setEmailLength] = useState(0)
  const [dtCoDinhLength, setDtCoDinhLength] = useState(0)
  const [faxLength, setFaxLength] = useState(0)
  const [diaChiDKKDLength, setDiaChiDKKDLength] = useState(0)
  const [diaChiGiaoDichLength, setDiaChiGiaoDichLength] = useState(0)

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
      representation_dkkd: '',
      representation_maSoThue: '',
      representation_tenDoanhNghiep: '',
      representation_tenVietTat: '',
      representation_ngayThanhLap: undefined,
      representation_quocGia: '1',
      representation_loaiGiayTo: '1',
      representation_ngayCap: undefined,
      representation_noiCap: '',
      representation_ngayHetHan: undefined,
      representation_diDong: '',
      representation_email: '',
      representation_dtCoDinh: '',
      representation_fax: '',
      representation_loaiHinhDoanhNghiep: undefined,
      representation_linhVucKinhDoanh: undefined,
      representation_nhomKhachHang: undefined,
      representation_chiNhanhMoHD: '0',
      representation_diaChiDKKD: '',
      representation_cityDKKD: undefined,
      representation_districtDKKD: undefined,
      representation_wardsDKKD: undefined,
      representation_diaChiGiaoDich: '',
      representation_cityGiaoDich: undefined,
      representation_districtGiaoDich: undefined,
      representation_wardsGiaoDich: undefined,
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
    <CustomerRepresentationStepTwoWrapper>
      <Divider style={{ color: appTheme.solidColor }}>Thông tin người đại diện</Divider>

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
              label={'Số ĐKKD'} name={'representation_dkkd'}>
              <Input.Search maxLength={20} placeholder={'Nhập nội dung'} suffix={`${dkkdLength}/20`} enterButton
                            onSearch={handleSearchDKKD}
                            onChange={e => setDkkdLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập mã số thuế' }]}
              label={'Mã số thuế'} name={'representation_maSoThue'}>
              <Input maxLength={20} placeholder={'Nhập nội dung'} suffix={`${maSoThueLength}/20`}
                     onChange={e => setMaSoThueLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập tên doanh nghiệp' }]}
              label={'Tên doanh nghiệp'} name={'representation_tenDoanhNghiep'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} suffix={`${tenDoanhNghiepLength}/100`}
                     onChange={e => setTenDoanhNghiepLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập tên viết tắt' }]}
              label={'Tên viết tắt'} name={'representation_tenVietTat'}>
              <Input maxLength={20} placeholder={'Nhập nội dung'} suffix={`${tenVietTatLength}/20`}
                     onChange={e => setTenVietTatLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn ' }]}
              label={'Ngày thành lập'} name={'representation_ngayThanhLap'}>
              <DatePicker disabledDate={disabledDateFuture} style={{ width: '100%' }} format={'DD/MM/YYYY'} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Quốc gia'} name={'representation_quocGia'}>
              <Select placeholder={'Chọn quốc gia'}>
                <Select.Option value={'1'}>Việt Nam</Select.Option>
                <Select.Option value={'2'}>Lào</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Loại giấy tờ'} name={'representation_loaiGiayTo'}>
              <Select placeholder={'Chọn loại giấy tờ'}>
                <Select.Option value={'1'}>ĐKKD</Select.Option>
                <Select.Option value={'2'}>GPTL</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn ' }]}
              label={'Ngày cấp'} name={'representation_ngayCap'}>
              <DatePicker disabledDate={disabledDateFuture} style={{ width: '100%' }} format={'DD/MM/YYYY'} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Nơi cấp'} name={'representation_noiCap'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} suffix={`${noiCapLength}/100`}
                     onChange={e => setNoiCapLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label={'Ngày hết hạn'} name={'representation_ngayHetHan'}>
              <DatePicker format={'DD/MM/YYYY'} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Di động'} name={'representation_diDong'}>
              <Input maxLength={20} placeholder={'Nhập nội dung'} suffix={`${diDongLength}/20`}
                     onChange={e => setDiDongLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label={'Email'} name={'representation_email'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} suffix={`${emailLength}/100`}
                     onChange={e => setEmailLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              label={'ĐT cố định'} name={'representation_dtCoDinh'}>
              <Input maxLength={20} placeholder={'Nhập nội dung'} suffix={`${dtCoDinhLength}/20`}
                     onChange={e => setDtCoDinhLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label={'Fax'} name={'representation_fax'}>
              <Input maxLength={20} placeholder={'Nhập nội dung'} suffix={`${faxLength}/20`}
                     onChange={e => setFaxLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn loại hình doanh nghiệp' }]}
              label={'Loại hình doanh nghiệp'} name={'representation_loaiHinhDoanhNghiep'}>
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
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Lĩnh vực kinh doanh'} name={'representation_linhVucKinhDoanh'}>
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
              label={'Nhóm khách hàng'} name={'representation_nhomKhachHang'}>
              <Select placeholder={'Vui lòng chọn'}>
                <Select.Option value={'1'}>Nội bộ</Select.Option>
                <Select.Option value={'2'}>Khách hàng ngoài</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label={'Chi nhánh mở HĐ'} name={'representation_chiNhanhMoHD'}>
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
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Địa chỉ ĐKKD'} name={'representation_diaChiDKKD'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} suffix={`${diaChiDKKDLength}/100`}
                     onChange={e => setDiaChiDKKDLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={''} name={'representation_cityDKKD'}>
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
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={''} name={'representation_districtDKKD'}>
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
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={''} name={'representation_wardsDKKD'}>
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
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Địa chỉ giao dịch'} name={'representation_diaChiGiaoDich'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} suffix={`${diaChiGiaoDichLength}/100`}
                     onChange={e => setDiaChiGiaoDichLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={''} name={'representation_cityGiaoDich'}>
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
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={''} name={'representation_districtGiaoDich'}>
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
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={''} name={'representation_wardsGiaoDich'}>
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
            <Button type={'default'} onClick={() => prevStep()}><LeftOutlined /> Quay lại</Button>
          </Col>
          <Col span={8}>
            <RowCenterDiv>
              <Button type={'default'} onClick={() => resetFormBusinessInfo()}><RetweetOutlined /> Làm rỗng</Button>
            </RowCenterDiv>
          </Col>
          <Col span={8}>
            <RowFlexEndDiv>
              {/*<Button type={'primary'} htmlType={'submit'}>Tiếp tục</Button>*/}
              <Button type={'primary'} onClick={() => nextStep()}><DoubleRightOutlined /> Tiếp tục</Button>
            </RowFlexEndDiv>
          </Col>
        </Row>
      </Form>

    </CustomerRepresentationStepTwoWrapper>
  )
}

CustomerRepresentationStepTwo.propTypes = {
  nextStep: PropTypes.func,
  prevStep: PropTypes.func,
}

export default inject('commonStore')(observer(CustomerRepresentationStepTwo))