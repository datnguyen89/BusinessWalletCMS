import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { UserInsertTabWrapper } from './UserManagerPageStyled'
import { Button, Col, DatePicker, Descriptions, Divider, Form, Input, Row, Select, Space, Table } from 'antd'
import { HeaderBackground, RowCenterDiv } from '../../components/CommonStyled/CommonStyled'
import { EditOutlined, SaveOutlined, SearchOutlined, UpCircleFilled, UpCircleOutlined } from '@ant-design/icons'
import ConditionRender from '../../components/ConditionRender'

const { Search } = Input
const { Option } = Select;

const UserInsertTab = props => {
  const { commonStore } = props
  const { appTheme } = commonStore
  const [formInsertUser] = Form.useForm()
  const [visible, setVisible] = useState(false)

  const onSearch = value => {
    if (value) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }
  const mockupData = [
    {
      id: 1,
      fullName: ' test1',
      department: 'Kỹ thuật 1',
      phone: '987654321',
      email: 'user@gmail.com',
      username: 'Tên đăng nhập',
      userRole: 'Tạo lập',
      status: 'Hoạt động',
    },
    {
      id: 2,
      fullName: ' test 2',
      department: 'Kỹ thuật 2',
      phone: '987654322',
      email: 'user2@gmail.com',
      username: 'Tên đăng nhập2',
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
      render: record => record.username,
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
          <EditOutlined />
        </Space>
      ),
    },
  ]

  const onFinish = (formCollection) => {
    console.log(formCollection)
  }

  return (
    <UserInsertTabWrapper>
      <HeaderBackground backgroundColor={appTheme.solidLightColor}>
        <UpCircleFilled fill={appTheme.solidColor} />
        Thông tin doanh nghiệp
      </HeaderBackground>
      <Row justify={'center'} style={{ marginTop: 16 }}>
        <Col span={9}>
          <Search
            placeholder='input search text'
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

      <ConditionRender visible={true}>
        <Divider />
        <Descriptions
          labelStyle={{ width: '15%' }}
          bordered
          column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 2 }}
          size={'small'}>
          <Descriptions.Item span={1} label={'Công ty'}>Công ty MBF</Descriptions.Item>
          <Descriptions.Item span={1} label={'Mã số thuế'}>12343212312313</Descriptions.Item>
          <Descriptions.Item span={2} label={'Địa chỉ'}>27 Thái Thịnh, Đống Đa, Hà Nội27 Thái Thịnh, Đống Đa, Hà Nội27
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
          onFinish={onFinish}
          style={{ marginTop: 24 }}
          labelAlign={'left'}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          colon={false}
          form={formInsertUser}>
          <Row justify={'center'} gutter={[64, 16]}>
            <Col span={9}>
              <Form.Item
                label={'Họ tên User *'}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                label={'Phòng ban *'}
              >
                <Select defaultValue="Chọn phòng ban">
                  <Option value="1">Kỹ thuật</Option>
                  <Option value="2">Kinh doanh</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                label={'Tên đăng nhập *'}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                label={'Vai trò'}
              >
                <Select defaultValue="Chọn vai trò">
                  <Option value="1">Tạo lập</Option>
                  <Option value="2">Kiểm soát</Option>
                  <Option value="3">Phê duyệt</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                label={'Di động *'}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                label={'Email *'}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                label={'Hình thức bảo mật *'}
              >
                <Select defaultValue="1">
                  <Option value="1">SMS</Option>
                  <Option value="2">EMAIL</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                label={'Chức vụ'}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                label={'Ngày sinh'}
              >
                <DatePicker style={{width: '100%'}} format={'DD/MM/YYYY'} />
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                label={'Giới tính'}
              >
                <Select defaultValue="Vui lòng chọn">
                  <Option value="1">Nam</Option>
                  <Option value="0">Nữ</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                label={'Tài khoản sử dụng *'}
              >
                <Select placeholder={'Tất cả'} mode="multiple" optionLabelProp="label">
                  <Option value="1" label={'Tài khoản 1'}>Tài khoản 11</Option>
                  <Option value="2" label={'Tài khoản 2'}>Tài khoản 22</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                label={'Chức năng sử dụng'}
              >
                <Select placeholder={'Tất cả'} mode="multiple" optionLabelProp="label">
                  <Option value="1" label={'Chức năng 1'}>Chức năng 11</Option>
                  <Option value="2" label={'Chức năng 2'}>Chức năng 22</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <RowCenterDiv>
            <Button size={'large'} type={'primary'} htmlType={'submit'}><SaveOutlined /> Lưu thông tin</Button>
          </RowCenterDiv>
        </Form>
      </ConditionRender>
    </UserInsertTabWrapper>
  )
}

UserInsertTab.propTypes = {}

export default inject('commonStore')(observer(UserInsertTab))