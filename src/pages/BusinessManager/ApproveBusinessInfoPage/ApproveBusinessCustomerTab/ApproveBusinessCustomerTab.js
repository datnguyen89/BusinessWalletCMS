import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  CustomerApproveBusinessCustomerTabWrapper,
} from '../ApproveBusinessInfoPageStyled'
import CustomerApproveBusinessCustomerModal from './ApproveBusinessCustomerModal'
import { Button, Col, Row, DatePicker, Form, Input, Select, Divider, Table, Pagination } from 'antd'
import { CloudDownloadOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons'
import { PaginationLabel, RowFlexEndDiv, RowSpaceBetweenDiv } from '../../../../components/CommonStyled/CommonStyled'

const { RangePicker } = DatePicker

const testData = [
  {
    id: 1,
    soGiayTo: 'SGT112323232333',
    tenKhachHang: 'TNHH Đống Đa',
    loaiKhachHang: 'Doanh nghiệp',
    nhomKhachHang: 'Nội bộ',
    maSoThue: 'MST1231123123',
    soDienThoai: '0987654321',
    thoiGianTao: '20/01/2022',
    nguoiTao: 'hant',
    trangThai: 'Chờ duyệt',
  },
  {
    id: 2,
    soGiayTo: 'SGT112323232333',
    tenKhachHang: 'TNHH Đống Đa',
    loaiKhachHang: 'Doanh nghiệp',
    nhomKhachHang: 'Nội bộ',
    maSoThue: 'MST1231123123',
    soDienThoai: '0987654321',
    thoiGianTao: '20/01/2022',
    nguoiTao: 'hant',
    trangThai: 'Chờ duyệt',
  },
  {
    id: 3,
    soGiayTo: 'SGT112323232333',
    tenKhachHang: 'TNHH Đống Đa',
    loaiKhachHang: 'Doanh nghiệp',
    nhomKhachHang: 'Nội bộ',
    maSoThue: 'MST1231123123',
    soDienThoai: '0987654321',
    thoiGianTao: '20/01/2022',
    nguoiTao: 'hant',
    trangThai: 'Chờ duyệt',
  },
  {
    id: 4,
    soGiayTo: 'SGT112323232333',
    tenKhachHang: 'TNHH Đống Đa',
    loaiKhachHang: 'Doanh nghiệp',
    nhomKhachHang: 'Nội bộ',
    maSoThue: 'MST1231123123',
    soDienThoai: '0987654321',
    thoiGianTao: '20/01/2022',
    nguoiTao: 'hant',
    trangThai: 'Chờ duyệt',
  },
]

const CustomerApproveBusinessCustomerTab = props => {
  const [formApproveBusinessCustomer] = Form.useForm()
  const [visibleApproveBusinessCustomerModal, setVisibleApproveBusinessCustomerModal] = useState(false)

  const columns = [
    {
      title: 'STT',
      width: 60,
      align: 'center',
      render: (item, row, index) => index + 1,
    },
    {
      title: 'Số giấy tờ',
      render: (item, row, index) => item.soGiayTo,
    },
    {
      title: 'Tên khách hàng',
      render: (item, row, index) => item.tenKhachHang,
    },
    {
      title: 'Loại khách hàng',
      render: (item, row, index) => item.loaiKhachHang,
    },
    {
      title: 'Nhóm khách hàng',
      render: (item, row, index) => item.nhomKhachHang,
    },
    {
      title: 'Mã số thuế',
      render: (item, row, index) => item.maSoThue,
    },
    {
      title: 'Số điện thoại',
      render: (item, row, index) => item.soDienThoai,
    },
    {
      title: 'Thời gian tạo',
      render: (item, row, index) => item.thoiGianTao,
    },
    {
      title: 'Người tạo',
      render: (item, row, index) => item.nguoiTao,
    },
    {
      title: 'Trạng thái',
      render: (item, row, index) => item.trangThai,
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
    setVisibleApproveBusinessCustomerModal(true)
  }

  const handleChangePagination = (pageIndex, pageSize) => {
    console.log(pageIndex, pageSize)
  }

  return (
    <CustomerApproveBusinessCustomerTabWrapper>
      <Form
        labelAlign={'left'}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        form={formApproveBusinessCustomer}
        colon={false}>
        <Row gutter={[32, 32]} justify={'space-between'}>
          <Col span={8}>
            <Form.Item label={'Ngày tạo'} name={'rangerFilterDate'}>
              <RangePicker
                style={{ width: '100%' }}
                format='DD/MM/YYYY'
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label={'Số giấy tờ'}
              name={'soGiayTo'}>
              <Input placeholder={'Nhập nội dung'} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label={'Họ tên KH'}
              name={'hoTenKh'}>
              <Input placeholder={'Nhập nội dung'} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label={'Người tạo'}
              name={'nguoiTao'}>
              <Input placeholder={'Nhập nội dung'} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label={'Trạng thái'}
              name={'trangThai'}>
              <Select placeholder={'Trạng thái'}>
                <Select.Option value={'1'}>Hoạt động</Select.Option>
                <Select.Option value={'2'}>Ngừng hoạt động</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
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
      <CustomerApproveBusinessCustomerModal
        visible={visibleApproveBusinessCustomerModal}
        onClose={() => setVisibleApproveBusinessCustomerModal(false)} />
    </CustomerApproveBusinessCustomerTabWrapper>
  )
}

CustomerApproveBusinessCustomerTab.propTypes = {}

export default CustomerApproveBusinessCustomerTab