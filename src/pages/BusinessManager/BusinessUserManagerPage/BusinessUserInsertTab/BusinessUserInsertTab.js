import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import { UserInsertTabWrapper } from '../BusinessUserManagerPageStyled'
import {
  Button,
  Col,
  DatePicker,
  Descriptions,
  Divider,
  Empty,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
  TreeSelect,
} from 'antd'
import { HeaderBackground, RowCenterDiv } from '../../../../components/CommonStyled/CommonStyled'
import { EditOutlined, RetweetOutlined, SaveOutlined, SearchOutlined, UpCircleFilled } from '@ant-design/icons'
import moment from 'moment'
import { DEVICE } from '../../../../utils/constant'
import ConditionDisplay from '../../../../components/ConditionDisplay'

const { Search } = Input
const { Option } = Select

const { SHOW_CHILD } = TreeSelect

const treeData = [
  {
    title: 'Tạo lập',
    value: '1',
    children: [
      {
        title: 'Khởi tạo giao dịch',
        value: '2',
        children: [
          {
            title: 'Trạng thái chờ duyệt',
            value: '3',
          },
        ],
      },
      {
        title: 'Quản lý giao dịch tạo lập',
        value: '4',
        children: [
          {
            title: 'Sửa',
            value: '5',
          },
          {
            title: 'Xóa',
            value: '6',
          },
        ],
      },
    ],
  },
  {
    title: 'Phê duyệt',
    value: '11',
    children: [
      {
        title: 'Quản lý giao dịch',
        value: '22',
        children: [
          {
            title: 'Phê duyệt',
            value: '33',
          },
        ],
      },
    ],
  },
]
const mockupData = [
  {
    id: 1,
    hoVaTen: ' test1',
    phongBan: 'Kỹ thuật 1',
    userName: 'userName1',
    userRole: 'Tạo lập',
    userRoleId: '1',
    diDong: '0987654322',
    email: 'user@gmail.com',
    baoMat: '1',
    chucVu: 'Nhân viên',
    ngaySinh: '30/04/1991',
    gioiTinh: '1',
    taiKhoanSuDung: ['1', '2'],
    chucNangSuDung: ['5'],
    status: 'Hoạt động',
  },
  {
    id: 2,
    hoVaTen: ' test2',
    phongBan: 'Kỹ thuật 2',
    userName: 'userName2',
    userRole: 'Phê duyệt',
    userRoleId: '2',
    diDong: '0987654322',
    email: 'user@gmail.com',
    baoMat: '2',
    chucVu: 'Trưởng phòng',
    ngaySinh: '30/04/1992',
    gioiTinh: '0',
    taiKhoanSuDung: undefined,
    chucNangSuDung: ['5','6'],
    status: 'Hoạt động',
  },
]

const BusinessUserInsertTab = props => {
  const { commonStore } = props
  const { appTheme, device } = commonStore
  const [formInsertUser] = Form.useForm()
  const [visible, setVisible] = useState(null)

  const [disabledChooseAccount, setDisabledChooseAccount] = useState(true)

  const onSearch = value => {
    resetFormInsertUser()
    if (value) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const columns = [
    {
      title: 'STT',
      width: 60,
      align: 'center',
      render: (item, row, index) => index + 1,
    },
    {
      title: 'Họ và tên',
      render: record => record.hoVaTen,
    },
    {
      title: 'Phòng ban',
      responsive: ['xxl', 'xl'],
      render: record => record.phongBan,
    },

    {
      title: 'Di động',
      responsive: ['xxl', 'xl', 'md'],
      render: record => record.diDong,
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
    if (formCollection.id > 0) {
      // Update

    } else {
      // Insert

    }
  }

  const handleClickEdit = (record) => {
    // commonStore.setAppLoading(true)

    formInsertUser.setFieldsValue({
      id: record.id,
      hoVaTen: record.hoVaTen,
      phongBan: record.phongBan,
      userName: record.userName,
      userRole: record.userRole,
      diDong: record.diDong,
      email: record.email,
      baoMat: record.baoMat,
      chucVu: record.chucVu,
      ngaySinh: moment(record.ngaySinh, 'DD/MM/YYYY'),
      gioiTinh: record.gioiTinh,
      taiKhoanSuDung: record.taiKhoanSuDung,
      chucNangSuDung: record.chucNangSuDung,
    })

    handleChangeRole(record.userRoleId)
  }
  const tProps = {
    treeData,
    allowClear: true,
    treeDefaultExpandAll: true,
    treeCheckable: true,
    showCheckedStrategy: SHOW_CHILD,
    placeholder: 'Tất cả',
    style: {
      width: '100%',
    },
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

  const handleChangeRole = (role) => {
    // Nếu role là tạo lập thì bỏ disable chọn tài
    console.log(role)
    if (role === '1') {
      setDisabledChooseAccount(false)
    } else {
      setDisabledChooseAccount(true)
      formInsertUser.setFieldsValue({
        account: undefined,
      })
    }
  }

  const resetFormInsertUser = () => {
    formInsertUser.setFieldsValue({
      id: 0,
      hoVaTen: undefined,
      phongBan: undefined,
      userName: undefined,
      userRole: undefined,
      userRoleId: undefined,
      diDong: undefined,
      email: undefined,
      baoMat: '1',
      chucVu: undefined,
      ngaySinh: undefined,
      gioiTinh: undefined,
      taiKhoanSuDung: undefined,
      chucNangSuDung: undefined,
      status: undefined,
    })

  }

  useEffect(() => {
    resetFormInsertUser()
  }, [])

  useEffect(() => {
    console.log(disabledChooseAccount)
  }, [disabledChooseAccount])

  return (
    <UserInsertTabWrapper>
      <HeaderBackground backgroundColor={appTheme.solidLightColor}>
        <UpCircleFilled fill={appTheme.solidColor} />
        Thông tin doanh nghiệp
      </HeaderBackground>
      <Row justify={'center'} style={{ marginTop: 16 }}>
        <Col xxl={9} xl={12} lg={16} md={24} sm={24} xs={24}>
          <Search
            maxLength={20}
            showCount={true}
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

      <ConditionDisplay visible={visible}>
        <Divider />
        <Descriptions
          labelStyle={{ width: '30%' }}
          bordered
          column={{ xxl: 2, xl: 2, lg: 1, md: 1, sm: 1, xs: 1 }}
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
          scroll={{ y: 222, x: 1400 }}
          pagination={false} />
        <HeaderBackground backgroundColor={appTheme.solidLightColor}>
          <UpCircleFilled fill={appTheme.solidColor} />
          Thông tin User
        </HeaderBackground>

        <Form
          validateTrigger={false}
          onFinish={onFinish}
          style={{ marginTop: 24 }}
          labelAlign={'left'}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          colon={false}
          form={formInsertUser}>
          <Form.Item className={'hidden'} name={'id'}>
            <Input />
          </Form.Item>
          <Row justify={'center'} gutter={[64, 16]}>
            <Col xxl={9} xl={12} lg={18} md={24} sm={24} xs={24}>
              <Form.Item
                name={'hoVaTen'}
                rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
                label={'Họ tên User'}
              >
                <Input maxLength={100} placeholder={'Nhập nội dung'} showCount={true} />
              </Form.Item>
            </Col>
            <Col xxl={9} xl={12} lg={18} md={24} sm={24} xs={24}>
              <Form.Item
                name={'phongBan'}
                rules={[{ required: true, message: 'Vui lòng chọn phòng ban' }]}
                label={'Phòng ban'}
              >
                <Select placeholder='Chọn phòng ban'>
                  <Option value='1'>Kỹ thuật</Option>
                  <Option value='2'>Kinh doanh</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xxl={9} xl={12} lg={18} md={24} sm={24} xs={24}>
              <Form.Item
                name={'userName'}
                rules={[
                  { required: true, message: 'Vui lòng nhập tên đăng nhập' },
                  { validator: checkUserName },
                ]}
                label={'Tên đăng nhập'}
              >
                <Input maxLength={20} placeholder={'Nhập nội dung'} showCount={true} />
              </Form.Item>
            </Col>
            <Col xxl={9} xl={12} lg={18} md={24} sm={24} xs={24}>
              <Form.Item
                name={'userRole'}
                rules={[{ required: true, message: 'Vui lòng chọn vai trò' }]}
                label={'Vai trò'}
              >
                <Select placeholder={'Chọn vai trò'} onChange={handleChangeRole}>
                  <Option value='1'>Tạo lập</Option>
                  <Option value='2'>Kiểm soát</Option>
                  <Option value='3'>Phê duyệt</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xxl={9} xl={12} lg={18} md={24} sm={24} xs={24}>
              <Form.Item
                name={'diDong'}
                rules={[{
                  required: true,
                  message: 'Vui lòng nhập số điện thoại di động',
                }, { validator: checkPhoneNumber }]}
                label={'Di động'}
              >
                <Input showCount={true} maxLength={20} placeholder={'Nhập nội dung'} />
              </Form.Item>
            </Col>
            <Col xxl={9} xl={12} lg={18} md={24} sm={24} xs={24}>
              <Form.Item
                name={'email'}
                rules={[{ validator: checkEmail }]}
                label={'Email'}
              >
                <Input maxLength={100} placeholder={'Nhập nội dung'} showCount={true} />
              </Form.Item>
            </Col>
            <Col xxl={9} xl={12} lg={18} md={24} sm={24} xs={24}>
              <Form.Item
                name={'baoMat'}
                rules={[{ required: true, message: 'Vui chọn hình thức bảo mật' }]}
                label={'Hình thức bảo mật'}
              >
                <Select placeholder='Vui lòng chọn'>
                  <Option value='1'>SMS</Option>
                  <Option value='2'>EMAIL</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xxl={9} xl={12} lg={18} md={24} sm={24} xs={24}>
              <Form.Item
                name={'chucVu'}
                label={'Chức vụ'}
              >
                <Input maxLength={20} placeholder={'Nhập nội dung'} showCount={true} />
              </Form.Item>
            </Col>
            <Col xxl={9} xl={12} lg={18} md={24} sm={24} xs={24}>
              <Form.Item
                name={'ngaySinh'}
                label={'Ngày sinh'}
              >
                <DatePicker disabledDate={disabledDate} style={{ width: '100%' }} format={'DD/MM/YYYY'} />
              </Form.Item>
            </Col>
            <Col xxl={9} xl={12} lg={18} md={24} sm={24} xs={24}>
              <Form.Item
                name={'gioiTinh'}
                label={'Giới tính'}
              >
                <Select placeholder={'Vui lòng chọn'}>
                  <Option value='1'>Nam</Option>
                  <Option value='0'>Nữ</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xxl={9} xl={12} lg={18} md={24} sm={24} xs={24}>
              <Form.Item
                name={'taiKhoanSuDung'}
                label={
                  <span className={'custom-required'}>Tài khoản sử dụng</span>
                }
              >
                <Select placeholder={disabledChooseAccount ? '' : 'Tất cả'} disabled={disabledChooseAccount}
                        mode='multiple' optionLabelProp='label'>
                  <Option value='1' label={'Tài khoản 1'}>Tài khoản 11</Option>
                  <Option value='2' label={'Tài khoản 2'}>Tài khoản 22</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xxl={9} xl={12} lg={18} md={24} sm={24} xs={24}>
              <Form.Item
                name={'chucNangSuDung'}
                label={
                  <span className={'custom-required'}>Chức năng sử dụng</span>
                }
              >
                <TreeSelect {...tProps} />
              </Form.Item>
            </Col>
          </Row>
          <RowCenterDiv>
            <Button size={device === DEVICE.MOBILE ? 'small' : 'large'} className={'mr-16'}
                    onClick={() => resetFormInsertUser()}>
              <RetweetOutlined /> Làm rỗng
            </Button>

            <Button size={device === DEVICE.MOBILE ? 'small' : 'large'} type={'primary'} htmlType={'submit'}>
              <SaveOutlined /> Lưu thông tin
            </Button>
          </RowCenterDiv>
        </Form>
      </ConditionDisplay>
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

BusinessUserInsertTab.propTypes = {}

export default inject('commonStore')(observer(BusinessUserInsertTab))