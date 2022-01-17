import React, { useEffect, useState } from 'react'
import {
  AreaCreateCommand, CreateCommandButton, InputEnterTax,
  PostpaidPageWrapper, ResultSearchForm,
  TitleFunds,
  TitleInfoService,
  WhiteRoundedInfoService,
} from './PostpaidPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { Col, Descriptions, Row } from 'antd'
import DigitalWallet from '../../components/DigitalWallet'
import LinkDirectedBank from '../../components/LinkDirectedBank/LinkDirectedBank'
import LinkInternalBank from '../../components/LinkInternalBank/LinkInternalBank'
import ModalCustomCommandForm from '../../components/ModalCustomCommandForm/ModalCustomCommandForm'
import { inject, observer } from 'mobx-react'
import SearchMobileNetworkOperatorPostPaid from '../../components/SearchMobileNetworkOperatorPostPaid'
import { toJS } from 'mobx'
import numberUtils from '../../utils/numberUtils'
import DescriptionsCustom from '../../components/DescriptionsCustom'

const PostpaidPage = props => {

  const { providerStore } = props

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedProvider, setSelectedProvider] = useState(null)
  const [disabledConfirmDeal, setDisabledConfirmDeal] = useState(true)
  const [customer, setCustomer] = useState(null)
  const [tax, setTax] = useState('')


  const [fieldsModal, setFieldsModal] = useState(null)
  const [fieldsDescription, setFieldsDescription] = useState(null)

  const handleSetPhoneNumber = (value) => {
    setPhoneNumber(value)
  }

  const handleSetCustomer = (value) => {
    setCustomer(value)
  }

  const handleClickFunds = (value) => {
    setSelectedItem(value)
  }

  const handleCallbackHitBank = (value) => {
    setSelectedItem(value)
  }

  const handleSelectedProvider = (value) => {
    setSelectedProvider(value)
  }

  const handleEnterTax = (value) => {
    setTax(value.target.value)
  }

  const setDescriptions = () => {
    let arrField = {
      'Nhà cung cấp': selectedProvider?.name,
      'Tên khách hàng': customer?.customerName,
      'Kỳ thanh toán': customer?.payTerms,
      'Số dư nợ cước': customer?.debitBalance && `${numberUtils.thousandSeparator(customer?.debitBalance)} đ`,
    }
    setFieldsDescription(arrField)
  }

  const showModalConfirmDeal = () => {
    let arrField = {
      'Nguồn tiền': selectedItem?.accountNumber,
      'Nhà cung cấp': selectedProvider?.name,
      'Mã khách hàng': customer?.customerCode,
      'Tên khách hàng': customer?.customerName,
      'Kỳ thanh toán': customer?.payTerms,
      'Dư nợ cước': numberUtils.thousandSeparator(customer?.debitBalance) + 'đ',
      'Số tiền': numberUtils.thousandSeparator(tax) + 'đ',
      'Phí giao dịch': '0đ',
      'Tổng tiền': numberUtils.thousandSeparator(tax) + 'đ',
    }
    setFieldsModal(arrField)
    setIsModalVisible(true)
  }

  const handleSetIsModalVisible = (value) => {
    setIsModalVisible(value)
  }

  useEffect(() => {
    setDescriptions()
  }, [customer, selectedProvider])

  useEffect(() => {
    providerStore.getProviderDetail(selectedProvider?.id)
      .then(res => {
      })
  }, [selectedProvider])

  useEffect(() => {
    if (selectedProvider && selectedItem && tax !== '' && !isNaN(+tax))
      setDisabledConfirmDeal(false)
    else
      setDisabledConfirmDeal(true)

  }, [selectedItem, selectedProvider, tax])

  return (
    <DefaultLayout>
      <Helmet>
        <title>Nạp trả sau</title>
      </Helmet>
      <PostpaidPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.POSTPAID} />
        <WhiteRoundedBox margin={'0 16px 16px 16px'}>
          <Row>
            <Col span={24}>
              <TitleInfoService>Thông tin dịch vụ</TitleInfoService>
            </Col>
          </Row>
          <Row>
            <Col span={6} />
            <Col span={12}>
              <WhiteRoundedInfoService margin={'0 0 16px 0'}>
                <SearchMobileNetworkOperatorPostPaid
                  phoneNumber={phoneNumber}
                  setPhoneNumber={handleSetPhoneNumber}
                  setCustomer={handleSetCustomer}
                  selectedProvider={selectedProvider}
                  handleSelectedProvider={handleSelectedProvider} />
              </WhiteRoundedInfoService>
              <WhiteRoundedInfoService margin={'0 0 16px 0'} padding={'16px'}>
                <ResultSearchForm>
                  <DescriptionsCustom
                    fields={fieldsDescription} />
                </ResultSearchForm>
                <InputEnterTax placeholder={'Nhập số tiền'} onChange={handleEnterTax} />
              </WhiteRoundedInfoService>
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
      </PostpaidPageWrapper>
      <ModalCustomCommandForm
        title={'Xác nhận giao dịch'}
        fields={fieldsModal}
        visible={isModalVisible}
        setIsModalVisible={handleSetIsModalVisible} />
    </DefaultLayout>

  )
}

PostpaidPage.propTypes = {}

export default inject('providerStore')(observer(PostpaidPage))