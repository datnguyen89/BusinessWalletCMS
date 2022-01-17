import React, { useEffect } from 'react'
import { TransactionManagePageWrapper, TransactionManagerBody } from './TransactionManagePageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { BREADCRUMB_DATA, TRANSACTION_STATUS } from '../../utils/constant'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { Button, Col, Collapse, DatePicker, Form, Input, Row, Select } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import CollapsePanelLinkBank from '../../components/CollapsePanelLinkBank'
import CollapsePanelTopup from '../../components/CollapsePanelTopup'
import CollapsePanelWithdraw from '../../components/CollapsePanelWithdraw'
import CollapsePanelTransferSingle from '../../components/CollapsePanelTransferSingle'
import CollapsePanelTransferMultiple from '../../components/CollapsePanelTransferMultiple'
import CollapsePanelMobileMoney from '../../components/CollapsePanelMobileMoney'

const { RangePicker } = DatePicker
const { Panel } = Collapse

const TransactionManagePage = props => {
  const [formFilter] = Form.useForm()

  useEffect(() => {
    formFilter.setFieldsValue({
      transactionStatus: TRANSACTION_STATUS.ALL,
    })
  }, [])

  return (
    <DefaultLayout>
      <Helmet>
        <title>Quản lý giao dịch</title>
      </Helmet>
      <TransactionManagePageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.TRANSACTION_MANAGE} />
        <TransactionManagerBody>
          <Form
            layout='inline'
            form={formFilter}
            colon={false}>
            <Row align={'middle'} style={{ width: '100%' }}>
              <Col xxl={6} xl={5} lg={5} md={12} sm={12} xs={24}>
                <Form.Item name={'transactionStatus'} label={'Trạng thái'}>
                  <Select>
                    <Select.Option value={TRANSACTION_STATUS.ALL}>Tất cả</Select.Option>
                    <Select.Option value={TRANSACTION_STATUS.WAITING}>Chờ duyệt</Select.Option>
                    <Select.Option value={TRANSACTION_STATUS.APPROVED}>Đã phê duyệt</Select.Option>
                    <Select.Option value={TRANSACTION_STATUS.REJECTED}>Từ chối</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xxl={8} xl={12} lg={12} md={12} sm={12} xs={24}>
                <Form.Item name={'dateRange'} label={'Thời gian'}>
                  <RangePicker format={'DD-MM-YYYY'} inputReadOnly style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col xxl={8} xl={6} lg={6} md={6} sm={6} xs={6}>
                <Form.Item name={'keyword'} label={'Từ khóa'}>
                  <Input placeholder={'Từ khóa tìm kiếm'} />
                </Form.Item>
              </Col>
              <Col xxl={2} xl={3} lg={4} md={24} sm={24} xs={24}>
                <Button block type={'primary'}>Tìm kiếm</Button>
              </Col>
            </Row>
          </Form>
          <Collapse
            bordered={false}
            defaultActiveKey={['0']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            className='site-collapse-custom-collapse'
          >
            <Panel header='Liên kết/Hủy liên kết' key='1' className='site-collapse-custom-panel'>
              <CollapsePanelLinkBank />
            </Panel>
            <Panel header='Nạp tiền' key='2' className='site-collapse-custom-panel'>
              <CollapsePanelTopup />
            </Panel>
            <Panel header='Rút tiền' key='3' className='site-collapse-custom-panel'>
              <CollapsePanelWithdraw />
            </Panel>
            <Panel header='Chuyển tiền' key='4' className='site-collapse-custom-panel'>
              <CollapsePanelTransferSingle />
            </Panel>
            <Panel header='Chuyển tiền theo lô' key='5' className='site-collapse-custom-panel'>
              <CollapsePanelTransferMultiple />
            </Panel>
            <Panel header='Nạp/rút Mobifone Money' key='6' className='site-collapse-custom-panel'>
              <CollapsePanelMobileMoney />
            </Panel>
          </Collapse>
        </TransactionManagerBody>
      </TransactionManagePageWrapper>
    </DefaultLayout>
  )
}

TransactionManagePage.propTypes = {}

export default TransactionManagePage