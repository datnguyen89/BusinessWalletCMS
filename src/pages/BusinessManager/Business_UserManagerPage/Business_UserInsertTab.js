import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { UserInsertTabWrapper } from './Business_UserManagerPageStyled'
import {
  Button, Checkbox,
  Col,
  DatePicker,
  Descriptions,
  Divider,
  Empty,
  Form,
  Input,
  message,
  Row,
  Select,
  Space,
  Table,
} from 'antd'
import { HeaderBackground, RowCenterDiv } from '../../../components/CommonStyled/CommonStyled'
import { EditOutlined, SaveOutlined, SearchOutlined, UpCircleFilled, UpCircleOutlined } from '@ant-design/icons'
import ConditionRender from '../../../components/ConditionRender'
import validator from '../../../validator'
import moment from 'moment'
import helper from '../../../utils/helper'
import { ACTION } from '../../../utils/constant'

const { Search } = Input
const { Option } = Select

const Business_UserInsertTab = props => {
  const { commonStore } = props
  const { appTheme } = commonStore
  const [formInsertUser] = Form.useForm()
  const [action, setAction] = useState(ACTION.INSERT)
  const [visible, setVisible] = useState(null)
  const [fullNameLength, setFullNameLength] = useState(0)
  const [userNameLength, setUserNameLength] = useState(0)
  const [emailLength, setEmailLength] = useState(0)
  const [positionLength, setPositionLength] = useState(0)

  const onSearch = value => {
    if (value) {
      setVisible(true)
      formInsertUser.resetFields()
      formInsertUser.setFieldsValue({
        secure: '1',
      })
    } else {
      setVisible(false)
      formInsertUser.resetFields()
    }
  }
  const mockupData = [
    {
      id: 1,
      fullName: ' test1',
      department: 'Kỹ thuật 1',
      phone: '987654321',
      email: 'user@gmail.com',
      userName: 'Tên đăng nhập',
      userRole: 'Tạo lập',
      status: 'Hoạt động',
    },
    {
      id: 2,
      fullName: ' test 2',
      department: 'Kỹ thuật 2',
      phone: '987654322',
      email: 'user2@gmail.com',
      userName: 'Tên đăng nhập2',
      userRole: 'Phê duyệt',
      status: 'Tạm dừng',
    },

  ]
  const columns = [
    {
      title: 'STT',
      width: 60,
      align: 'center',
      render: (item, row, index) => index + 1,
    },
    {
      title: 'Họ và tên',
      render: record => record.fullName,
    },
    {
      title: 'Phòng ban',
      responsive: ['xxl', 'xl'],
      render: record => record.department,
    },

    {
      title: 'Di động',
      responsive: ['xxl', 'xl', 'md'],
      render: record => record.phone,
    },
    {
      title: 'Email',
      responsive: ['xxl', 'xl'],
      render: record => record.email,
    },
    {
      title: 'Username',
      render: record => record.userName,
    },
    {
      title: 'Vai trò',
      render: record => record.userRole,
    },
    {
      title: 'Trạng thái',
      render: record => record.status,
    },
    {
      width: 100,
      title: 'Thao tác',
      align: 'center',
      render: record => (
        <Space>
          <EditOutlined style={{ cursor: 'pointer' }} onClick={() => handleClickEdit(record)} />
        </Space>
      ),
    },
  ]

  const onFinish = (formCollection) => {
    console.log(formCollection)
  }

  const handleClickEdit = (record) => {
    commonStore.setAppLoading(true)
    formInsertUser.setFieldsValue({
      fullName: record.fullName,
      department: record.department,
      userName: record.userName,
      role: record.userRole,

    })
  }

  const disabledDate = (current) => {
    // Không được chọn ngày sinh ở tương lai
    return current && current > moment().startOf('day').add(1, 'days')
  }

  const checkUserName = (rule, value, callback) => {
    const regex = /^[A-Za-z0-9]*$/
    if (value && !regex.test(value)) {
      callback('Tên đăng nhập không đúng định dạng!')
    } else if (value === 'dat') {
      callback('Tên đăng nhập đã được sử dụng')
    } else {
      callback()
    }
  }

  const checkPhoneNumber = (rule, value, callback) => {
    const regex = /(0[0-9])+([0-9]{8})\b/g
    if (value && (!regex.test(value) || value.length > 12)) {
      callback('Số điện thoại không đúng định dạng')
    } else if (value === '0987654321') {
      callback('Số điện thoại đã được sử dụng')
    } else {
      callback()
    }
  }

  const checkEmail = (rule, value, callback) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (value && !regex.test(value)) {
      callback('Email không đúng định dạng')
    } else if (value === 'dat@gmail.com') {
      callback('Email đã được sử dụng')
    } else {
      callback()
    }
  }

  // const options = [
  //   { label: 'Apple', value: '1' },
  //   { label: 'Pear', value: '2' },
  //   { label: 'Orange', value: '3' },
  // ];

  return (
    <UserInsertTabWrapper>
      <HeaderBackground backgroundColor={appTheme.solidLightColor}>
        <UpCircleFilled fill={appTheme.solidColor} />
        Thông tin doanh nghiệp
      </HeaderBackground>
      <Row justify={'center'} style={{ marginTop: 16 }}>
        <Col span={9}>
          <Search
            placeholder='Nhập số ĐKKD/Mã số thuế'
            enterButton={
              <>
                <SearchOutlined style={{ marginRight: 8 }} />
                Tra cứu
              </>
            }
            size='large'
            onSearch={onSearch}
          />
        </Col>
      </Row>

      <ConditionRender visible={visible}>
        <Divider />
        <Descriptions
          labelStyle={{ width: '15%' }}
          bordered
          column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 2 }}
          size={'small'}>
          <Descriptions.Item label={'Công ty'}>Công ty MBF</Descriptions.Item>
          <Descriptions.Item label={'Mã số thuế'}>12343212312313</Descriptions.Item>
          <Descriptions.Item label={'Địa chỉ'}>27 Thái Thịnh, Đống Đa, Hà Nội27 Thái Thịnh, Đống Đa, Hà Nội27
            Thái Thịnh, Đống Đa, Hà Nội27 Thái Thịnh, Đống Đa, Hà Nội27 Thái Thịnh, Đống Đa, Hà Nội27 Thái Thịnh, Đống
            Đa, Hà Nội</Descriptions.Item>
        </Descriptions>
        <Table
          style={{ marginTop: 16, marginBottom: 16 }}
          bordered={true}
          dataSource={mockupData}
          columns={columns}
          rowKey={record => record.id}
          scroll={{ y: 222 }}
          pagination={false} />
        <HeaderBackground backgroundColor={appTheme.solidLightColor}>
          <UpCircleFilled fill={appTheme.solidColor} />
          Thông tin User
        </HeaderBackground>

        <Form
          // validateTrigger={false}
          onFinish={onFinish}
          style={{ marginTop: 24 }}
          labelAlign={'left'}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          colon={false}
          requiredMark={true}
          form={formInsertUser}>
          <Row justify={'center'} gutter={[64, 16]}>
            {/*<Col span={9}>*/}
            {/*  <Form.Item*/}
            {/*    name={'checTest'}*/}
            {/*    rules={[{ required: true, message: 'Vui lòng chọn' }]}*/}
            {/*    label={'test'}*/}
            {/*  >*/}
            {/*    <Checkbox.Group options={options} defaultValue={['1']} />*/}
            {/*  </Form.Item>*/}
            {/*</Col>*/}
            <Col span={9}>
              <Form.Item
                name={'fullName'}
                rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
                label={'Họ tên User'}
              >
                <Input maxLength={100} placeholder={'Nhập nội dung'} suffix={`${fullNameLength}/100`}
                       onChange={e => setFullNameLength(e.currentTarget.value.length)} />
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                name={'department'}
                rules={[{ required: true, message: 'Vui lòng chọn phòng ban' }]}
                label={'Phòng ban'}
              >
                <Select placeholder='Chọn phòng ban'>
                  <Option value='1'>Kỹ thuật</Option>
                  <Option value='2'>Kinh doanh</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                name={'userName'}
                rules={[
                  { required: true, message: 'Vui lòng nhập tên đăng nhập' },
                  { validator: checkUserName },
                ]}
                label={'Tên đăng nhập'}
              >
                <Input maxLength={20} placeholder={'Nhập nội dung'} suffix={`${userNameLength}/20`}
                       onChange={e => setUserNameLength(e.currentTarget.value.length)} />
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                name={'role'}
                rules={[{ required: true, message: 'Vui lòng chọn vai trò' }]}
                label={'Vai trò'}
              >
                <Select placeholder={'Chọn vai trò'} mode={'multiple'}>
                  <Option value='1'>Tạo lập</Option>
                  <Option value='2'>Kiểm soát</Option>
                  <Option value='3'>Phê duyệt</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                name={'phoneNumber'}
                rules={[{
                  required: true,
                  message: 'Vui lòng nhập số điện thoại di động',
                }, { validator: checkPhoneNumber }]}
                label={'Di động'}
              >
                <Input placeholder={'Nhập nội dung'} />
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                name={'email'}
                rules={[{ validator: checkEmail }]}
                label={'Email'}
              >
                <Input maxLength={100} placeholder={'Nhập nội dung'} suffix={`${emailLength}/100`}
                       onChange={e => setEmailLength(e.currentTarget.value.length)} />
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                name={'secure'}
                rules={[{ required: true, message: 'Vui chọn hình thức bảo mật' }]}
                label={'Hình thức bảo mật'}
              >
                <Select placeholder='Vui lòng chọn'>
                  <Option value='1'>SMS</Option>
                  <Option value='2'>EMAIL</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                name={'position'}
                label={'Chức vụ'}
              >
                <Input maxLength={20} placeholder={'Nhập nội dung'} suffix={`${positionLength}/20`}
                       onChange={e => setPositionLength(e.currentTarget.value.length)} />
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                label={'Ngày sinh'}
              >
                <DatePicker disabledDate={disabledDate} style={{ width: '100%' }} format={'DD/MM/YYYY'} />
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                label={'Giới tính'}
              >
                <Select placeholder={'Vui lòng chọn'}>
                  <Option value='1'>Nam</Option>
                  <Option value='0'>Nữ</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                name={'account'}
                label={
                  <span className={'custom-required'}>Tài khoản sử dụng</span>
                }
              >
                <Select placeholder={'Tất cả'} mode='multiple' optionLabelProp='label'>
                  <Option value='1' label={'Tài khoản 1'}>Tài khoản 11</Option>
                  <Option value='2' label={'Tài khoản 2'}>Tài khoản 22</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                name={'module'}
                label={
                  <span className={'custom-required'}>chức năng sử dụng</span>
                }
              >
                <Select placeholder={'Tất cả'} mode='multiple' optionLabelProp='label'>
                  <Option value='1' label={'Chức năng 1'}>Chức năng 11</Option>
                  <Option value='2' label={'Chức năng 2'}>Chức năng 22</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <RowCenterDiv>
            <Button size={'large'} type={'primary'} htmlType={'submit'}><SaveOutlined /> Lưu thông tin</Button>
          </RowCenterDiv>
        </Form>
      </ConditionRender>
      {
        visible === false &&
        <>
          <Divider />
          <Empty description={'Khách hàng không tồn tại trong hệ thống'} />
        </>
      }
    </UserInsertTabWrapper>
  )
}

Business_UserInsertTab.propTypes = {}

export default inject('commonStore')(observer(Business_UserInsertTab))