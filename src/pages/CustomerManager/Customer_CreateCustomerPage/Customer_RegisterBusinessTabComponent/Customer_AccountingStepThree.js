import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { Button, Col, DatePicker, Divider, Form, Input, Row, Select } from 'antd'
import { CustomerAccountingStepThreeWrapper } from '../Customer_CreateCustomerPageStyled'
import moment from 'moment'
import UploadModule from '../../../../components/UploadModule'
import { CheckOutlined, CloudUploadOutlined, DoubleLeftOutlined, RetweetOutlined } from '@ant-design/icons'
import { RowCenterDiv, RowFlexEndDiv } from '../../../../components/CommonStyled/CommonStyled'

const CustomerAccountingStepThree = props => {
  const { commonStore, prevStep } = props
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
      accounting_dkkd: '',
      accounting_maSoThue: '',
      accounting_tenDoanhNghiep: '',
      accounting_tenVietTat: '',
      accounting_ngayThanhLap: undefined,
      accounting_quocGia: '1',
      accounting_loaiGiayTo: '1',
      accounting_ngayCap: undefined,
      accounting_noiCap: '',
      accounting_ngayHetHan: undefined,
      accounting_diDong: '',
      accounting_email: '',
      accounting_dtCoDinh: '',
      accounting_fax: '',
      accounting_loaiHinhDoanhNghiep: undefined,
      accounting_linhVucKinhDoanh: undefined,
      accounting_nhomKhachHang: undefined,
      accounting_chiNhanhMoHD: '0',
      accounting_diaChiDKKD: '',
      accounting_cityDKKD: undefined,
      accounting_districtDKKD: undefined,
      accounting_wardsDKKD: undefined,
      accounting_diaChiGiaoDich: '',
      accounting_cityGiaoDich: undefined,
      accounting_districtGiaoDich: undefined,
      accounting_wardsGiaoDich: undefined,
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
    <CustomerAccountingStepThreeWrapper>
      <Divider style={{ color: appTheme.solidColor }}>Thông tin người phụ trách kế toán</Divider>

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
              label={'Số ĐKKD'} name={'accounting_dkkd'}>
              <Input.Search maxLength={20} placeholder={'Nhập nội dung'} suffix={`${dkkdLength}/20`} enterButton
                            onSearch={handleSearchDKKD}
                            onChange={e => setDkkdLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập mã số thuế' }]}
              label={'Mã số thuế'} name={'accounting_maSoThue'}>
              <Input maxLength={20} placeholder={'Nhập nội dung'} suffix={`${maSoThueLength}/20`}
                     onChange={e => setMaSoThueLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập tên doanh nghiệp' }]}
              label={'Tên doanh nghiệp'} name={'accounting_tenDoanhNghiep'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} suffix={`${tenDoanhNghiepLength}/100`}
                     onChange={e => setTenDoanhNghiepLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập tên viết tắt' }]}
              label={'Tên viết tắt'} name={'accounting_tenVietTat'}>
              <Input maxLength={20} placeholder={'Nhập nội dung'} suffix={`${tenVietTatLength}/20`}
                     onChange={e => setTenVietTatLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn ' }]}
              label={'Ngày thành lập'} name={'accounting_ngayThanhLap'}>
              <DatePicker disabledDate={disabledDateFuture} style={{ width: '100%' }} format={'DD/MM/YYYY'} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Quốc gia'} name={'accounting_quocGia'}>
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
              label={'Loại giấy tờ'} name={'accounting_loaiGiayTo'}>
              <Select placeholder={'Chọn loại giấy tờ'}>
                <Select.Option value={'1'}>ĐKKD</Select.Option>
                <Select.Option value={'2'}>GPTL</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn ' }]}
              label={'Ngày cấp'} name={'accounting_ngayCap'}>
              <DatePicker disabledDate={disabledDateFuture} style={{ width: '100%' }} format={'DD/MM/YYYY'} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Nơi cấp'} name={'accounting_noiCap'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} suffix={`${noiCapLength}/100`}
                     onChange={e => setNoiCapLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label={'Ngày hết hạn'} name={'accounting_ngayHetHan'}>
              <DatePicker format={'DD/MM/YYYY'} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={'Di động'} name={'accounting_diDong'}>
              <Input maxLength={20} placeholder={'Nhập nội dung'} suffix={`${diDongLength}/20`}
                     onChange={e => setDiDongLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label={'Email'} name={'accounting_email'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} suffix={`${emailLength}/100`}
                     onChange={e => setEmailLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              label={'ĐT cố định'} name={'accounting_dtCoDinh'}>
              <Input maxLength={20} placeholder={'Nhập nội dung'} suffix={`${dtCoDinhLength}/20`}
                     onChange={e => setDtCoDinhLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label={'Fax'} name={'accounting_fax'}>
              <Input maxLength={20} placeholder={'Nhập nội dung'} suffix={`${faxLength}/20`}
                     onChange={e => setFaxLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn loại hình doanh nghiệp' }]}
              label={'Loại hình doanh nghiệp'} name={'accounting_loaiHinhDoanhNghiep'}>
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
              label={'Lĩnh vực kinh doanh'} name={'accounting_linhVucKinhDoanh'}>
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
              label={'Nhóm khách hàng'} name={'accounting_nhomKhachHang'}>
              <Select placeholder={'Vui lòng chọn'}>
                <Select.Option value={'1'}>Nội bộ</Select.Option>
                <Select.Option value={'2'}>Khách hàng ngoài</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label={'Chi nhánh mở HĐ'} name={'accounting_chiNhanhMoHD'}>
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
              label={'Địa chỉ ĐKKD'} name={'accounting_diaChiDKKD'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} suffix={`${diaChiDKKDLength}/100`}
                     onChange={e => setDiaChiDKKDLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={''} name={'accounting_cityDKKD'}>
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
              label={''} name={'accounting_districtDKKD'}>
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
              label={''} name={'accounting_wardsDKKD'}>
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
              label={'Địa chỉ giao dịch'} name={'accounting_diaChiGiaoDich'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} suffix={`${diaChiGiaoDichLength}/100`}
                     onChange={e => setDiaChiGiaoDichLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={''} name={'accounting_cityGiaoDich'}>
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
              label={''} name={'accounting_districtGiaoDich'}>
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
              label={''} name={'accounting_wardsGiaoDich'}>
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
            <Button type={'default'} onClick={() => prevStep()}><DoubleLeftOutlined /> Quay lại</Button>
          </Col>
          <Col span={8}>
            <RowCenterDiv>
              <Button type={'default'} onClick={() => resetFormBusinessInfo()}><RetweetOutlined /> Làm rỗng</Button>
            </RowCenterDiv>
          </Col>
          <Col span={8}>
            <RowFlexEndDiv>
              {/*<Button type={'primary'} htmlType={'submit'}>Tiếp tục</Button>*/}
              <Button type={'primary'}><CheckOutlined /> Hoàn thành</Button>
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