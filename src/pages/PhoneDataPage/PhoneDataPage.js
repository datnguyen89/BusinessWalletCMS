import React, { useEffect, useState } from 'react'
import {
  AreaCreateCommand,
  CreateCommandButton,
  PhoneDataPageWrapper, TitleFunds, TitleInfoService,
  WhiteRoundedInfoService,
} from './PhoneDataPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { Col, Row } from 'antd'
import DigitalWallet from '../../components/DigitalWallet'
import LinkDirectedBank from '../../components/LinkDirectedBank/LinkDirectedBank'
import LinkInternalBank from '../../components/LinkInternalBank/LinkInternalBank'
import { inject, observer } from 'mobx-react'
import SearchMobileNetworkOperator from '../../components/SearchMobileNetworkOperator'
import ServicePlanMobileData from '../../components/ServicePlanMobileData'
import { toJS } from 'mobx'
import ModalCustomCommandForm from '../../components/ModalCustomCommandForm'
import numberUtils from '../../utils/numberUtils'

const PhoneDataPage = props => {

  const { providerStore } = props

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState(0)
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedProvider, setSelectedProvider] = useState(null)
  const [selectedTopUpVoucher, setSelectedTopUpVoucher] = useState(null)
  const [disabledConfirmDeal, setDisabledConfirmDeal] = useState(true)

  const [fields, setFields] = useState(null)

  const handleClickFunds = (value) => {
    setSelectedItem(value)
  }

  const handleCallbackHitBank = (value) => {
    console.log(toJS(value))
    setSelectedItem(value)
  }

  const handleSelectedProvider = (value) => {
    setSelectedProvider(value)
    setSelectedTopUpVoucher(null)
  }

  const handleSelectedTopUpVoucher = (value) => {
    setSelectedTopUpVoucher(value)
  }

  const showModalConfirmDeal = () => {
    let arrField = {
      'Nguồn tiền': selectedItem?.accountNumber,
      'Nhà cung cấp': selectedProvider?.name,
      'Dịch vụ': selectedProvider?.name,
      'Sản phẩm': selectedTopUpVoucher?.name,
      'Mệnh giá': numberUtils.thousandSeparator(selectedTopUpVoucher?.denominations) + 'đ',
      'Giá bán': numberUtils.thousandSeparator(selectedTopUpVoucher?.discount) + 'đ',
      'Số điện thoại': phoneNumber,
      'Tổng tiền': numberUtils.thousandSeparator(selectedTopUpVoucher?.discount) + 'đ',
      'Phí giao dịch': '0đ',
      'Thành tiền': numberUtils.thousandSeparator(selectedTopUpVoucher?.discount) + 'đ',
    }
    setFields(arrField)
    setIsModalVisible(true)
  }

  const handleSetPhoneNumber = (value) => {
    setPhoneNumber(value)
  }

  useEffect(() => {
    providerStore.getProviderDetail(selectedProvider?.id)
      .then(res => {
      })
  }, [selectedProvider])

  useEffect(() => {
    if (selectedProvider && selectedItem && selectedTopUpVoucher && !isNaN(phoneNumber))
      setDisabledConfirmDeal(false)
    else
      setDisabledConfirmDeal(true)

  }, [selectedItem, selectedProvider, selectedTopUpVoucher, phoneNumber])

  const handleSetIsModalVisible = (value) => {
    setIsModalVisible(value)
  }

  return (
    <DefaultLayout>
      <Helmet>
        <title>Nạp data điện thoại</title>
      </Helmet>
      <PhoneDataPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.PHONE_DATA} />
        <WhiteRoundedBox margin={'0 16px 16px 16px'}>
          <Row>
            <Col span={24}>
              <TitleInfoService>Chọn nhà cung cấp</TitleInfoService>
            </Col>
          </Row>
          <Row>
            <Col span={6} />
            <Col span={12}>
              <WhiteRoundedInfoService margin={'0 0 16px 0'}>
                <SearchMobileNetworkOperator phoneNumber={phoneNumber} setPhoneNumber={handleSetPhoneNumber}
                                             selectedProvider={selectedProvider}
                                             handleSelectedProvider={handleSelectedProvider} />
              </WhiteRoundedInfoService>
              <WhiteRoundedInfoService margin={'0 0 16px 0'}>
                <ServicePlanMobileData selectedTopUpVoucher={selectedTopUpVoucher}
                                       handleSelectedTopUpVoucher={handleSelectedTopUpVoucher} />
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
      </PhoneDataPageWrapper>
      <ModalCustomCommandForm
        title={'Xác nhận giao dịch'}
        fields={fields}
        visible={isModalVisible}
        setIsModalVisible={handleSetIsModalVisible} />
    </DefaultLayout>

  )
}

PhoneDataPage.propTypes = {}

export default inject('providerStore')(observer(PhoneDataPage))