import React, { useEffect, useState } from 'react'
import {
  AreaCreateCommand, CreateCommandButton, FormSearch, ResultSearchForm, SearchImg, SearchInputPhoneNumber,
  TitleFunds,
  TitleInfoPayment,
  WaterBillPageWrapper,
  WhiteRoundedInfoPayment, WhiteRoundedInfoSearchCustomer,
} from './WaterBillPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { Col, Row } from 'antd'
import Providers from '../../components/Providers'
import DigitalWallet from '../../components/DigitalWallet'
import LinkDirectedBank from '../../components/LinkDirectedBank'
import LinkInternalBank from '../../components/LinkInternalBank'
import { inject, observer } from 'mobx-react'
import ModalCustomCommandForm from '../../components/ModalCustomCommandForm/ModalCustomCommandForm'
import { InfoCircleOutlined } from '@ant-design/icons'
import DescriptionsCustom from '../../components/DescriptionsCustom'
import numberUtils from '../../utils/numberUtils'

const WaterBillPage = props => {

  const { customerStore } = props

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedProvider, setSelectedProvider] = useState(null)
  const [customerBySearch, setCustomerBySearch] = useState(null)
  const [disabledConfirmDeal, setDisabledConfirmDeal] = useState(true)
  const [customer, setCustomer] = useState(null)

  const [fieldsModal, setFieldsModal] = useState(null)
  const [fieldsDescription, setFieldsDescription] = useState(null)

  const handleClickFunds = (value) => {
    setSelectedItem(value)
  }

  const handleCallbackHitBank = (value) => {
    setSelectedItem(value)
  }

  const handleSelectedProvider = (value) => {
    setSelectedProvider(value)
  }

  const showModalConfirmDeal = () => {
    let arrField = {
      'Nguồn tiền': selectedItem?.accountNumber,
      'Nhà cung cấp': selectedProvider?.name,
      'Mã khách hàng': customer?.customerCode,
      'Tên khách hàng': customer?.customerName,
      'Địa chỉ': customer?.customerAddress,
      'Số tiền': numberUtils.thousandSeparator(customer.tax) + 'đ',
      'Giá bán': numberUtils.thousandSeparator(customer.tax) + 'đ',
      'Phí giao dịch': '0đ',
      'Thành tiền': numberUtils.thousandSeparator(customer.tax) + 'đ',
    }
    setFieldsModal(arrField)
    setIsModalVisible(true)
  }

  const setDescriptions = () => {
    let arrField = {
      'Nhà cung cấp': selectedProvider?.name,
      'Mã khách hàng': customer?.customerCode,
      'Tên khách hàng': customer?.customerName,
      'Địa chỉ': customer?.customerAddress,
      'Kỳ thanh toán': customer?.payTerms,
      'Số tiền': customer?.tax && `${numberUtils.thousandSeparator(customer?.tax) + 'đ'}`,
    }
    setFieldsDescription(arrField)
  }

  const handleSearchCustomer = () => {
    if (customerBySearch === '') {
      setCustomer(null)
      return
    }
    customerStore.getCustomerByCodeForElectricTax(customerBySearch)
      .then(res => {
        setCustomer(res)
      })
  }

  const handleSetIsModalVisible = (value) => {
    setIsModalVisible(value)
  }

  const handleOnChange = (value) => {
    setCustomerBySearch(value)
  }
  useEffect(() => {
    setCustomer(null)
  }, [selectedProvider])

  useEffect(() => {
    setDescriptions()
  }, [selectedProvider, customer])

  useEffect(() => {
    if (selectedProvider && selectedItem && customer)
      setDisabledConfirmDeal(false)
    else
      setDisabledConfirmDeal(true)

  }, [selectedItem, selectedProvider, customer])

  return (
    <DefaultLayout>
      <Helmet>
        <title>Hóa đơn tiền nước</title>
      </Helmet>
      <WaterBillPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.WATER_BILL} />
        <WhiteRoundedBox margin={'0 16px 16px 16px'}>
          <Row>
            <Col span={24}>
              <TitleInfoPayment>Thông tin thanh toán</TitleInfoPayment>
            </Col>
          </Row>
          <Row>
            <Col span={6} />
            <Col span={12}>
              <WhiteRoundedInfoPayment margin={'0 0 16px 0'}>
                <Providers placeholder={'Tìm kiếm nhà cung cấp'} selectedProvider={selectedProvider}
                           handleSelectedProvider={handleSelectedProvider} />
              </WhiteRoundedInfoPayment>
            </Col>
            <Col span={6} />
          </Row>
          <Row>
            <Col span={6} />
            <Col span={12}>
              <FormSearch>
                <SearchInputPhoneNumber placeholder={'Nhập mã khách hàng'}
                                        onChange={(value) => handleOnChange(value)}
                                        suffix={<InfoCircleOutlined />} />
                <SearchImg src={require('../../media/icons/search_cus.png')} alt={'search_cus'}
                           onClick={handleSearchCustomer} />
              </FormSearch>
              <WhiteRoundedInfoSearchCustomer margin={'20px 0 16px 0'}>
                <ResultSearchForm>
                  <DescriptionsCustom
                    fields={fieldsDescription} />
                </ResultSearchForm>
              </WhiteRoundedInfoSearchCustomer>
            </Col>
            <Col span={6} />
          </Row>
          <Row>
            <Col span={24}>
              <TitleFunds>Nguồn tiền</TitleFunds>
            </Col>
            <Col span={6}>
              <Row>
                <Col span={24}>
                  <WhiteRoundedBox margin={'0 16px 0 0'}>
                    <DigitalWallet selectedItem={selectedItem} setClickFunds={handleClickFunds} />
                  </WhiteRoundedBox>
                </Col>
                <Col span={24}>
                  <WhiteRoundedBox margin={'16px 16px 0 0'}>
                    <LinkDirectedBank selectedItem={selectedItem} setClickFunds={handleClickFunds} />
                  </WhiteRoundedBox>
                </Col>
              </Row>
            </Col>
            <Col span={18}>
              <WhiteRoundedBox padding={'16px 0'}>
                <LinkInternalBank selectedItem={selectedItem} setClickFunds={handleClickFunds}
                                  callbackHitBank={handleCallbackHitBank} />
              </WhiteRoundedBox>
            </Col>
          </Row>
          <AreaCreateCommand>
            <CreateCommandButton type={disabledConfirmDeal ? 'default' : 'primary'} onClick={showModalConfirmDeal}
                                 disabled={disabledConfirmDeal}>Tạo lệnh</CreateCommandButton>
          </AreaCreateCommand>
        </WhiteRoundedBox>
      </WaterBillPageWrapper>
      <ModalCustomCommandForm
        title={'Xác nhận giao dịch'}
        fields={fieldsModal}
        visible={isModalVisible}
        setIsModalVisible={handleSetIsModalVisible} />
    </DefaultLayout>
  )
}

WaterBillPage.propTypes = {}

export default inject('customerStore')(observer(WaterBillPage))