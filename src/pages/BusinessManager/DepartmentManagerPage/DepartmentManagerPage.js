import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CustomerDepartmentManagerPageWrapper } from './DepartmentManagerPageStyled'
import { Helmet } from 'react-helmet/es/Helmet'
import DefaultLayout from '../../../layouts/DefaultLayout/DefaultLayout'
import { Button, Divider, Form, Input, Modal, Pagination, Table } from 'antd'
import {
  ColorTitle, PaginationLabel,
  RowCenterDiv,
  RowFlexEndDiv,
  RowSpaceBetweenDiv,
} from '../../../components/CommonStyled/CommonStyled'
import { CloudDownloadOutlined, DeleteOutlined, SettingOutlined } from '@ant-design/icons'
import CreateDepartmentModal from './CreateDepartmentModal'

const testData = [
  {
    id: 1,
    ngayTao: '20/01/2022',
    doanhNghiep: 'Công ty TNHH A',
    tenPhongBan: 'Kế toán',
    tenVietTat: 'KT',
    taiKhoan: '',
  },
  {
    id: 2,
    ngayTao: '20/01/2022',
    doanhNghiep: 'Công ty TNHH A',
    tenPhongBan: 'Kế toán',
    tenVietTat: 'KT',
    taiKhoan: '',
  },
  {
    id: 3,
    ngayTao: '20/01/2022',
    doanhNghiep: 'Công ty TNHH A',
    tenPhongBan: 'Kế toán',
    tenVietTat: 'KT',
    taiKhoan: '',
  },
  {
    id: 4,
    ngayTao: '20/01/2022',
    doanhNghiep: 'Công ty TNHH A',
    tenPhongBan: 'Kế toán',
    tenVietTat: 'KT',
    taiKhoan: '',
  },
]


const CustomerDepartmentManagerPage = props => {

  const [formFilterDepartment] = Form.useForm()
  const [modal, contextHolder] = Modal.useModal()
  const [visibleDepartmentDetailModal, setVisibleDepartmentDetailModal] = useState(false)

  const onFinish = (formCollection) => {
    console.log(formCollection)
  }
  const handleClickDeleteDept = (id) => {
    console.log(id)
    modal.confirm({
      title: 'Cảnh báo',
      content: (
        <>
          Bạn có chắc chắn xóa phòng ban?
        </>
      ),
      okText: 'Xác nhận',
      cancelText: 'Hủy',
      onOk() {
        console.log('OK')
      },
      onCancel() {
        console.log('Cancel')
      },

    })
  }

  const columns = [
    {
      title: 'STT',
      width: 60,
      align: 'center',
      render: (item, row, index) => index + 1,
    },
    {
      title: 'Ngày tạo',
      render: (item, row, index) => item.ngayTao,
    },
    {
      title: 'Doanh nghiệp',
      render: (item, row, index) => item.doanhNghiep,
    },
    {
      title: 'Tên phòng ban',
      render: (item, row, index) => item.tenPhongBan,
    },
    {
      title: 'Tên viết tắt',
      render: (item, row, index) => item.tenVietTat,
    },
    {
      title: 'Tài khoản',
      render: (item, row, index) => item.taiKhoan,
    },
    {
      title: 'Thao tác',
      align: 'center',
      render: (item, row, index) =>
        <DeleteOutlined
          onClick={handleClickDeleteDept}
          style={{ cursor: 'pointer', color: 'red' }} />,
    },
  ]


  const handleChangePagination = (pageIndex, pageSize) => {
    console.log(pageIndex, pageSize)
  }

  return (
    <DefaultLayout>
      <Helmet>
        <title>Phòng ban doanh nghiệp</title>
      </Helmet>
      <CustomerDepartmentManagerPageWrapper>
        <ColorTitle>Quản lý phòng ban doanh nghiệp</ColorTitle>
        <RowCenterDiv>
          <Form
            layout={'inline'}
            onFinish={onFinish}
            form={formFilterDepartment}
            colon={false}>
            <Form.Item name={'dkkdMST'} label={''}>
              <Input style={{ width: 300 }} showCount maxLength={20} placeholder={'Số ĐKKD/MST Doanh nghiệp'} />
            </Form.Item>
            <Form.Item>
              <Button type={'default'}>Tra cứu</Button>
            </Form.Item>
            <Form.Item>
              <Button type={'primary'} onClick={() => setVisibleDepartmentDetailModal(true)}>Thêm mới</Button>
            </Form.Item>
          </Form>
        </RowCenterDiv>
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
        {contextHolder}
        <CreateDepartmentModal visible={visibleDepartmentDetailModal}
                               onClose={() => setVisibleDepartmentDetailModal(false)} />
      </CustomerDepartmentManagerPageWrapper>
    </DefaultLayout>

  )
}

CustomerDepartmentManagerPage.propTypes = {}

export default CustomerDepartmentManagerPage