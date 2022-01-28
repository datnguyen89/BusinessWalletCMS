import React, { useState } from 'react'
import { CustomerApproveBusinessUserTabWrapper } from '../ApproveBusinessInfoPageStyled'
import { Button, Col, DatePicker, Divider, Form, Input, Pagination, Row, Select, Table } from 'antd'
import { CloudDownloadOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons'
import { PaginationLabel, RowFlexEndDiv, RowSpaceBetweenDiv } from '../../../../components/CommonStyled/CommonStyled'
import Customer_ApproveBusinessUserModal from './ApproveBusinessUserModal'

const { RangePicker } = DatePicker

const testData = [
  {
    id: 1,
    hoVaTen: 'Nguyễn Văn A',
    tenDoanhNghiep: 'TNHH Đống Đa',
    phongBan: 'Kinh doanh',
    UserName: 'username1',
    vaiTro: 'Tạo lập',
    noiDung: 'Thêm mới',
    ngayTao: '20/01/2022',
    nguoiTao: 'hant',
    trangThai: 'Chờ duyệt',
  },
  {
    id: 2,
    hoVaTen: 'Nguyễn Văn B',
    tenDoanhNghiep: 'TNHH Đống Đa',
    phongBan: 'Kinh doanh',
    UserName: 'username1',
    vaiTro: 'Tạo lập',
    noiDung: 'Thêm mới',
    ngayTao: '20/01/2022',
    nguoiTao: 'hant',
    trangThai: 'Chờ duyệt',
  },
  {
    id: 3,
    hoVaTen: 'Nguyễn Văn C',
    tenDoanhNghiep: 'TNHH Đống Đa',
    phongBan: 'Kinh doanh',
    UserName: 'username1',
    vaiTro: 'Tạo lập',
    noiDung: 'Thêm mới',
    ngayTao: '20/01/2022',
    nguoiTao: 'hant',
    trangThai: 'Chờ duyệt',
  },
  {
    id: 4,
    hoVaTen: 'Nguyễn Văn D',
    tenDoanhNghiep: 'TNHH Đống Đa',
    phongBan: 'Kinh doanh',
    UserName: 'username1',
    vaiTro: 'Tạo lập',
    noiDung: 'Thêm mới',
    ngayTao: '20/01/2022',
    nguoiTao: 'hant',
    trangThai: 'Chờ duyệt',
  },
]
const CustomerApproveBusinessUserTab = props => {
  const [formApproveBusinessUser] = Form.useForm()
  const [visibleApproveBusinessUserModal, setVisibleApproveBusinessUserModal] = useState(false)

  const columns = [
    {
      title: 'STT',
      width: 60,
      align: 'center',
      render: (item, row, index) => index + 1,
    },
    {
      title: 'Họ và tên',
      render: (item, row, index) => item.hoVaTen,
    },
    {
      title: 'Tên doanh nghiệp',
      render: (item, row, index) => item.tenDoanhNghiep,
    },
    {
      title: 'Phòng ban',
      render: (item, row, index) => item.phongBan,
    },
    {
      title: 'Username',
      render: (item, row, index) => item.UserName,
    },
    {
      title: 'Vai trò',
      render: (item, row, index) => item.vaiTro,
    },
    {
      title: 'Nội dung',
      render: (item, row, index) => item.noiDung,
    },
    {
      title: 'Trạng thái',
      render: (item, row, index) => item.trangThai,
    },
    {
      title: 'Người tạo',
      render: (item, row, index) => item.nguoiTao,
    },
    {
      title: 'Thời gian tạo',
      render: (item, row, index) => item.ngayTao,
    },

    {
      title: 'Thao tác',
      align: 'center',
      render: (item, row, index) =>
        <SettingOutlined
          style={{ cursor: 'pointer' }}
          onClick={() => handleClickShowDetailRequest(item.id)} />,
    },
  ]

  const handleClickShowDetailRequest = (id) => {
    setVisibleApproveBusinessUserModal(true)
  }

  const handleChangePagination = (pageIndex, pageSize) => {
    console.log(pageIndex, pageSize)
  }
  return (
    <CustomerApproveBusinessUserTabWrapper>
      <Form
        labelAlign={'left'}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        form={formApproveBusinessUser}
        colon={false}>
        <Row gutter={[32, 32]} justify={'space-between'}>
          <Col xxl={8} xl={12} lg={12} md={24} sm={24} xs={24}>
            <Form.Item label={'Ngày tạo'} name={'rangerFilterDate'}>
              <RangePicker
                style={{ width: '100%' }}
                format='DD/MM/YYYY'
              />
            </Form.Item>
          </Col>
          <Col xxl={8} xl={12} lg={12} md={24} sm={24} xs={24}>
            <Form.Item
              label={'Số giấy tờ'}
              name={'hoVaTen'}>
              <Input placeholder={'Nhập nội dung'} maxLength={20} showCount={true} />
            </Form.Item>
          </Col>
          <Col xxl={8} xl={12} lg={12} md={24} sm={24} xs={24}>
            <Form.Item
              label={'Họ tên KH'}
              name={'hoTenKh'}>
              <Input placeholder={'Nhập nội dung'} maxLength={100} showCount={true} />
            </Form.Item>
          </Col>
          <Col xxl={8} xl={12} lg={12} md={24} sm={24} xs={24}>
            <Form.Item
              label={'Người tạo'}
              name={'nguoiTao'}>
              <Input placeholder={'Nhập nội dung'} maxLength={100} showCount={true} />
            </Form.Item>
          </Col>
          <Col xxl={8} xl={12} lg={12} md={24} sm={24} xs={24}>
            <Form.Item
              label={'Trạng thái'}
              name={'hoTenKh'}>
              <Select placeholder={'Trạng thái'}>
                <Select.Option value={'1'}>Hoạt động</Select.Option>
                <Select.Option value={'2'}>Ngừng hoạt động</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xxl={8} xl={12} lg={12} md={24} sm={24} xs={24}>
            <RowFlexEndDiv>
              <Button type={'primary'}><SearchOutlined /> Tra cứu</Button>
            </RowFlexEndDiv>
          </Col>
        </Row>
      </Form>
      <Divider />
      <RowFlexEndDiv margin={'0 0 24px 0'}>
        <Button><CloudDownloadOutlined /> Xuất dữ liệu</Button>
      </RowFlexEndDiv>
      <Table
        scroll={{ x: 1400 }}
        bordered={true}
        dataSource={testData}
        columns={columns}
        rowKey={record => record.id}
        pagination={false} />
      <RowSpaceBetweenDiv margin={'16px 0'}>
        <PaginationLabel>
          Hiển thị từ 1 đến 10 trên tổng số 200 bản ghi
        </PaginationLabel>
        <Pagination defaultCurrent={1} total={500} onChange={handleChangePagination} />
      </RowSpaceBetweenDiv>
      <Customer_ApproveBusinessUserModal
        visible={visibleApproveBusinessUserModal}
        onClose={() => setVisibleApproveBusinessUserModal(false)} />
    </CustomerApproveBusinessUserTabWrapper>
  )
}

CustomerApproveBusinessUserTab.propTypes = {}

export default CustomerApproveBusinessUserTab