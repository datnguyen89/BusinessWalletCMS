import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { UserInsertTabWrapper } from './UserManagerPageStyled'
import { Col, Descriptions, Divider, Input, Row, Space, Table } from 'antd'
import { HeaderBackground } from '../../components/CommonStyled/CommonStyled'
import { EditOutlined, SearchOutlined, UpCircleFilled, UpCircleOutlined } from '@ant-design/icons'
import ConditionRender from '../../components/ConditionRender'

const { Search } = Input

const UserInsertTab = props => {
  const { commonStore } = props
  const { appTheme } = commonStore
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
      fullName: ' test1',
      department: 'Kỹ thuật 1',
      phone: '987654321',
      email: 'user@gmail.com',
      username: 'Tên đăng nhập',
      userRole: 'Tạo lập',
      status: 'Hoạt động',
    },
    {
      fullName: ' test 2',
      department: 'Kỹ thuật 2',
      phone: '987654322',
      email: 'user2@gmail.com',
      username: 'Tên đăng nhập2',
      userRole: 'Phê duyệt',
      status: 'Tạm dừng',
    },
    {
      fullName: ' test 2',
      department: 'Kỹ thuật 2',
      phone: '987654322',
      email: 'user2@gmail.com',
      username: 'Tên đăng nhập2',
      userRole: 'Phê duyệt',
      status: 'Tạm dừng',
    },
    {
      fullName: ' test 2',
      department: 'Kỹ thuật 2',
      phone: '987654322',
      email: 'user2@gmail.com',
      username: 'Tên đăng nhập2',
      userRole: 'Phê duyệt',
      status: 'Tạm dừng',
    },
    {
      fullName: ' test 2',
      department: 'Kỹ thuật 2',
      phone: '987654322',
      email: 'user2@gmail.com',
      username: 'Tên đăng nhập2',
      userRole: 'Phê duyệt',
      status: 'Tạm dừng',
    },
    {
      fullName: ' test 2',
      department: 'Kỹ thuật 2',
      phone: '987654322',
      email: 'user2@gmail.com',
      username: 'Tên đăng nhập2',
      userRole: 'Phê duyệt',
      status: 'Tạm dừng',
    },
    {
      fullName: ' test 2',
      department: 'Kỹ thuật 2',
      phone: '987654322',
      email: 'user2@gmail.com',
      username: 'Tên đăng nhập2',
      userRole: 'Phê duyệt',
      status: 'Tạm dừng',
    },
    {
      fullName: ' test 2',
      department: 'Kỹ thuật 2',
      phone: '987654322',
      email: 'user2@gmail.com',
      username: 'Tên đăng nhập2',
      userRole: 'Phê duyệt',
      status: 'Tạm dừng',
    },
    {
      fullName: ' test 2',
      department: 'Kỹ thuật 2',
      phone: '987654322',
      email: 'user2@gmail.com',
      username: 'Tên đăng nhập2',
      userRole: 'Phê duyệt',
      status: 'Tạm dừng',
    },
    {
      fullName: ' test 2',
      department: 'Kỹ thuật 2',
      phone: '987654322',
      email: 'user2@gmail.com',
      username: 'Tên đăng nhập2',
      userRole: 'Phê duyệt',
      status: 'Tạm dừng',
    },
    {
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
      title: 'Thao tác',
      align: 'center',
      render: record => (
        <Space>
          <EditOutlined />
        </Space>
      ),
    },
  ]
  return (
    <UserInsertTabWrapper>
      <HeaderBackground backgroundColor={appTheme.solidLightColor}>
        <UpCircleFilled fill={appTheme.solidColor} />
        Thông tin doanh nghiệp
      </HeaderBackground>
      <Row justify={'center'} style={{ marginTop: 16 }}>
        <Col span={12}>
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
          <Descriptions.Item label={'Công ty'}>Công ty MBF</Descriptions.Item>
          <Descriptions.Item label={'Mã số thuế'}>12343212312313</Descriptions.Item>
          <Descriptions.Item span={2} label={'Địa chỉ'}>27 Thái Thịnh, Đống Đa, Hà Nội27 Thái Thịnh, Đống Đa, Hà Nội27 Thái Thịnh, Đống Đa, Hà Nội27 Thái Thịnh, Đống Đa, Hà Nội27 Thái Thịnh, Đống Đa, Hà Nội27 Thái Thịnh, Đống Đa, Hà Nội</Descriptions.Item>
        </Descriptions>
        <Table
          style={{ marginTop: 16 }}
          bordered={true}
          dataSource={mockupData}
          columns={columns}
          rowKey={record => record.id}
          scroll={{ y: 224 }}
          pagination={false} />
      </ConditionRender>
    </UserInsertTabWrapper>
  )
}

UserInsertTab.propTypes = {}

export default inject('commonStore')(observer(UserInsertTab))