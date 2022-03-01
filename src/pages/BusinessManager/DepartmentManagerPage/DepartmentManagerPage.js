import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import { CustomerDepartmentManagerPageWrapper } from './DepartmentManagerPageStyled'
import { Helmet } from 'react-helmet/es/Helmet'
import { Button, Col, Divider, Form, Input, Modal, Pagination, Row, Table } from 'antd'
import {
  ColorTitle,
  PaginationLabel,
  RowFlexEndDiv,
  RowSpaceBetweenDiv,
} from '../../../components/CommonStyled/CommonStyled'
import { CloudDownloadOutlined, DeleteOutlined } from '@ant-design/icons'
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
  const { commonStore } = props
  const { device } = commonStore

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
    <>
      <Helmet>
        <title>Phòng ban doanh nghiệp</title>
      </Helmet>
      <CustomerDepartmentManagerPageWrapper>
        <ColorTitle margin={'0 0 32px 0'}>Quản lý phòng ban doanh nghiệp</ColorTitle>
        <Form
          onFinish={onFinish}
          form={formFilterDepartment}
          colon={false}>
          <Row gutter={[16, 16]} justify={'center'}>
            <Col xxl={8} xl={8} lg={12} md={12} sm={24} xs={24}>
              <Form.Item name={'dkkdMST'} label={''}>
                <Input showCount={true} maxLength={20} placeholder={'Số ĐKKD/MST Doanh nghiệp'} />
              </Form.Item>
            </Col>
            <Col xxl={2} xl={4} lg={4} md={6} sm={24} xs={24}>
              <Form.Item>
                <Button block type={'default'}>
                  Tra cứu
                </Button>
              </Form.Item>
            </Col>
            <Col xxl={2} xl={4} lg={4} md={6} sm={24} xs={24}>
              <Form.Item>
                <Button
                  block
                  type={'primary'}
                  onClick={() => setVisibleDepartmentDetailModal(true)}>
                  Thêm mới
                </Button>
              </Form.Item>
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
        {contextHolder}
        <CreateDepartmentModal visible={visibleDepartmentDetailModal}
                               onClose={() => setVisibleDepartmentDetailModal(false)} />
      </CustomerDepartmentManagerPageWrapper>
    </>

  )
}

CustomerDepartmentManagerPage.propTypes = {}

export default inject('commonStore')(observer(CustomerDepartmentManagerPage))