import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { Button, Col, DatePicker, Divider, Form, Input, Radio, Row, Select } from 'antd'
import { CustomerRepresentationStepTwoWrapper } from '../Customer_CreateCustomerPageStyled'
import moment from 'moment'
import UploadModule from '../../../../components/UploadModule'
import { CloudUploadOutlined, DoubleRightOutlined, LeftOutlined, RetweetOutlined } from '@ant-design/icons'
import { RowCenterDiv, RowFlexEndDiv } from '../../../../components/CommonStyled/CommonStyled'

const CustomerRepresentationStepTwo = props => {
  const { commonStore, nextStep, prevStep } = props
  const { appTheme } = commonStore
  const [formRepresentationInfo] = Form.useForm()

  const [fileToUpload1, setFileToUpload1] = useState(null)
  const [fileToPreview1, setFileToPreview1] = useState(null)
  const [fileToUpload2, setFileToUpload2] = useState(null)
  const [fileToPreview2, setFileToPreview2] = useState(null)
  const [fileToUpload3, setFileToUpload3] = useState(null)
  const [fileToPreview3, setFileToPreview3] = useState(null)

  const [soGiayToLength, setSoGiayToLength] = useState(0)
  const [hoVaTenLength, setHoVaTenLength] = useState(0)
  const [noiCapLength, setNoiCapLength] = useState(0)
  const [diDongLength, setDiDongLength] = useState(0)
  const [emailLength, setEmailLength] = useState(0)
  const [dtCoDinhLength, setDtCoDinhLength] = useState(0)
  const [chucVuLength, setChucVuLength] = useState(0)
  const [diaChiThuongTruLength, setDiaChiThuongTruLength] = useState(0)
  const [diaChiHienTaiLength, setDiaChiHienTaiLength] = useState(0)
  const [ngheNgiepLength, setNgheNgiepLength] = useState(0)
  const [danTocLength, setDanTocLength] = useState(0)

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

  const resetFormRepresentationInfo = () => {
    formRepresentationInfo.setFieldsValue({
      representation_soGiayTo: undefined,
      representation_hinhThucDaiDien: undefined,
      representation_hoVaTen: undefined,
      representation_gioiTinh: undefined,
      representation_ngaySinh: undefined,
      representation_quocTich: '1',
      representation_loaiGiayTo: '1',
      representation_ngayCap: undefined,
      representation_noiCap: undefined,
      representation_ngayHetHan: undefined,
      representation_diDong: undefined,
      representation_email: undefined,
      representation_dtCoDinh: undefined,
      representation_chucVu: undefined,
      representation_ngheNghiep: undefined,
      representation_danToc: undefined,
      representation_diaChiThuongTru: undefined,
      representation_cityThuongTru: undefined,
      representation_districtThuongTru: undefined,
      representation_wardsThuongTru: undefined,
      representation_diaChiHienTai: undefined,
      representation_cityHienTai: undefined,
      representation_districtHienTai: undefined,
      representation_wardsHienTai: undefined,
    })
    setFileToUpload1(null)
    setFileToPreview1(null)
    setFileToUpload2(null)
    setFileToPreview2(null)
    setFileToUpload3(null)
    setFileToPreview3(null)
  }

  useEffect(() => {
    resetFormRepresentationInfo()
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
        form={formRepresentationInfo}>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập số giấy tờ' }]}
              label={'Số giấy tờ'} name={'representation_soGiayTo'}>
              <Input.Search maxLength={20} placeholder={'Nhập nội dung'} suffix={`${soGiayToLength}/20`} enterButton
                            onSearch={handleSearchDKKD}
                            onChange={e => setSoGiayToLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn hình thức đại diện' }]}
              label={'Đại diện'} name={'representation_hinhThucDaiDien'}>
              <Radio.Group style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                <Radio value={'1'}>Đại diện theo pháp luật</Radio>
                <Radio value={'2'}>Đại diện ủy quyền</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
              label={'Họ và tên'} name={'representation_hoVaTen'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} suffix={`${hoVaTenLength}/100`}
                     onChange={e => setHoVaTenLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>

          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn giới tính' }]}
              label={'Giới tính'} name={'representation_gioiTinh'}>
              <Select placeholder={'Vui lòng chọn'}>
                <Select.Option value={'1'}>Nam</Select.Option>
                <Select.Option value={'0'}>Nữ</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn ngày sinh' }]}
              label={'Ngày sinh'} name={'representation_ngaySinh'}>
              <DatePicker disabledDate={disabledDateFuture} style={{ width: '100%' }} format={'DD/MM/YYYY'} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn quốc tịch' }]}
              label={'Quốc tịch'} name={'representation_quocTich'}>
              <Select placeholder={'Chọn quốc tịch'}>
                <Select.Option value={'1'}>Việt Nam</Select.Option>
                <Select.Option value={'2'}>Lào</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn' }]}
              label={'Loại giấy tờ'} name={'representation_loaiGiayTo'}>
              <Select placeholder={'Chọn loại giấy tờ'}>
                <Select.Option value={'1'}>Căn cước công dân</Select.Option>
                <Select.Option value={'2'}>Chứng minh nhân dân</Select.Option>
                <Select.Option value={'3'}>Hộ chiếu</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng chọn ngày cấp' }]}
              label={'Ngày cấp'} name={'representation_ngayCap'}>
              <DatePicker disabledDate={disabledDateFuture} style={{ width: '100%' }} format={'DD/MM/YYYY'} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập nơi cấp' }]}
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
              rules={[{ required: true, message: 'Vui lòng nhập số di động' }]}
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
              label={'Chức vụ'} name={'representation_chucVu'}>
              <Input maxLength={20} placeholder={'Nhập nội dung'} suffix={`${chucVuLength}/20`}
                     onChange={e => setChucVuLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập nghề nghiệp' }]}
              label={'Nghề nghiệp'} name={'representation_ngheNghiep'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} suffix={`${ngheNgiepLength}/100`}
                     onChange={e => setNgheNgiepLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              rules={[{ required: true, message: 'Vui lòng nhập dân tộc' }]}
              label={'Dân tộc'} name={'representation_danToc'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} suffix={`${danTocLength}/100`}
                     onChange={e => setDanTocLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
        </Row>        
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col span={10}>
            <Form.Item
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              rules={[{ required: true, message: 'Vui lòng nhập địa chỉ thường trú' }]}
              label={'Địa chỉ thường trú'} name={'representation_diaChiThuongTru'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} suffix={`${diaChiThuongTruLength}/100`}
                     onChange={e => setDiaChiThuongTruLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng chọn ' }]}
              label={''} name={'representation_cityThuongTru'}>
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
              label={''} name={'representation_districtThuongTru'}>
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
              label={''} name={'representation_wardsThuongTru'}>
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
              rules={[{ required: true, message: 'Vui lòng nhập địa chỉ hiện tại' }]}
              label={'Địa chỉ hiện tại'} name={'representation_diaChiHienTai'}>
              <Input maxLength={100} placeholder={'Nhập nội dung'} suffix={`${diaChiHienTaiLength}/100`}
                     onChange={e => setDiaChiHienTaiLength(e.currentTarget.value.length)} />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: 'Vui lòng nhập ' }]}
              label={''} name={'representation_cityHienTai'}>
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
              label={''} name={'representation_districtHienTai'}>
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
              label={''} name={'representation_wardsHienTai'}>
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
                       label={<span className={'custom-required'}>Văn bản ủy quyền</span>}>
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
        <Row className={'mt-32'}>
          <Col span={8}>
            <Button type={'default'} onClick={() => prevStep()}><LeftOutlined /> Quay lại</Button>
          </Col>
          <Col span={8}>
            <RowCenterDiv>
              <Button type={'default'} onClick={() => resetFormRepresentationInfo()}><RetweetOutlined /> Làm rỗng</Button>
            </RowCenterDiv>
          </Col>
          <Col span={8}>
            <RowFlexEndDiv>
              <Button type={'primary'} htmlType={'submit'}><DoubleRightOutlined /> Tiếp tục</Button>
              {/*<Button type={'primary'} onClick={() => nextStep()}><DoubleRightOutlined /> Tiếp tục1</Button>*/}
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