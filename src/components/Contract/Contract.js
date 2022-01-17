import React, { useState } from 'react'
import { AreaContractData, ContractWrapper, SpanCancelButton } from './ContractStyled'
import { Pagination, Space, Table } from 'antd'
import ConfirmModal from '../ConfirmModal'
import OtpModal from '../OtpModal'
import SuccessModal from '../SuccessModal'
import { PaginationLabel, RowSpaceBetweenDiv } from '../CommonStyled/CommonStyled'
import IMAGES from '../../images'

const { Column } = Table

const Contract = props => {

  const dataContract = [
    {
      id: '1', name: 'Sacombank-STB', numbercard: '123456*****12334', typecontract: 'thẻ',
    },
    {
      id: '2', name: 'Sacombank-STB', numbercard: '123456*****12334', typecontract: 'thẻ',
    },
    {
      id: '3', name: 'Sacombank-STB', numbercard: '123456*****12334', typecontract: 'thẻ',
    },
    {
      id: '4', name: 'Sacombank-STB', numbercard: '123456*****12334', typecontract: 'thẻ',
    },
    {
      id: '5', name: 'Sacombank-STB', numbercard: '123456*****12334', typecontract: 'thẻ',
    },
  ]
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',

    },
    {
      title: 'SỐ TÀI KHOẢN/ SỐ THẺ',
      dataIndex: 'numbercard',
      key: 'numbercard',
    },
    {
      title: 'LOẠI LIÊN KẾT',
      dataIndex: 'typecontract',
      key: 'typecontract',
    },
    {
      title: 'HÀNH ĐỘNG',
      key: 'action',
      render: (item, row, index) => (
        <Space size='middle'>
          <SpanCancelButton onClick={cancelContract}>
            {/*<img src={`${process.env.PUBLIC_URL}/assets/images/cancel.png`} style={{ marginRight: 8 }} />*/}
            <img src={IMAGES.CANCEL} style={{ marginRight: 8 }} />
            Hủy liên kết
          </SpanCancelButton>
        </Space>
      ),
    },
  ]

  const [visibleConfirm, setVisibleConfirm] = useState(false)
  const [visibleOTP, setVisibleOTP] = useState(false)
  const [visibleSuccess, setVisibleSuccess] = useState(false)
  const handleCancel = () => {
    setVisibleConfirm(false)
  }
  const handleCancelTrue = () => {
    console.log('bỏ liên kết thành công')
    setVisibleConfirm(false)
    setVisibleOTP(true)
  }
  const cancelContract = () => {
    setVisibleConfirm(true)
  }
  const handleCallbackOTP = (otp) => {
    console.log(otp)
    setVisibleOTP(false)
    setVisibleSuccess(true)
  }


  return (
    <ContractWrapper>
      <AreaContractData>
        <Table
          dataSource={dataContract}
          columns={columns}
          pagination={false}
          bordered={false}
          rowKey={record => record.id} />
        <RowSpaceBetweenDiv margin={'16px 0'}>
          <PaginationLabel>
            Hiển thị 5 trên tổng số 50 bản ghi
          </PaginationLabel>
          <Pagination total={50} />
        </RowSpaceBetweenDiv>
      </AreaContractData>
      <ConfirmModal
        visible={visibleConfirm}
        onCancel={handleCancel}
        callbackConfirm={handleCancelTrue}
        description={'Quý khách có chắc chắn muốn hủy liên kết ngân hàng'} />
      <OtpModal
        visible={visibleOTP}
        callbackOtp={handleCallbackOTP}
        onCancel={() => setVisibleOTP((false))}
        phoneNumber={'123456789'} />
      <SuccessModal
        visible={visibleSuccess}
        callbackSuccess={() => setVisibleSuccess(false)}
        description={'Hủy liên kết thẻ ngân hàng thành công'} />
    </ContractWrapper>
  )
}

Contract.propTypes = {}

export default Contract