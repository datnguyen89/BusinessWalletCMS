import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import DefaultLayout from '../../layouts/DefaultLayout'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import { Helmet } from 'react-helmet/es/Helmet'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { Col, Row } from 'antd'
import MobileNetworkOperator from '../../components/MobileNetworkOperator/MobileNetworkOperator'
import ServicePlanMobile from '../../components/ServicePlanMobile/ServicePlanMobile'
import DigitalWallet from '../../components/DigitalWallet'
import LinkDirectedBank from '../../components/LinkDirectedBank/LinkDirectedBank'
import LinkInternalBank from '../../components/LinkInternalBank/LinkInternalBank'
import ModalCustomCommandForm from '../../components/ModalCustomCommandForm/ModalCustomCommandForm'
import { inject, observer } from 'mobx-react'

import {
  AreaCreateCommand, CreateCommandButton,
  InputCount,
  PhoneCardPageWrapper,
  TitleFunds, TitleInfoService,
  WhiteRoundedInfoService,
} from './PhoneCardPageStyled'
import numberUtils from '../../utils/numberUtils'

const PhoneCardPage = props => {
  const { providerStore } = props

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedProvider, setSelectedProvider] = useState(null)
  const [selectedTopUpVoucher, setSelectedTopUpVoucher] = useState(null)
  const [countTopUpVoucher, setCountTopUpVoucher] = useState(0)
  const [disabledConfirmDeal, setDisabledConfirmDeal] = useState(true)

  const [fields, setFields] = useState(null)

  const handleClickFunds = (value) => {
    setSelectedItem(value)
  }

  const handleCallbackHitBank = (value) => {
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
      'Sản phẩm': selectedTopUpVoucher?.name,
      'Mệnh giá': numberUtils.thousandSeparator(selectedTopUpVoucher?.denominations) + 'đ',
      'Giá bán': numberUtils.thousandSeparator(selectedTopUpVoucher?.discount) + 'đ',
      'Số lượng': countTopUpVoucher,
      'Tổng tiền': numberUtils.thousandSeparator(countTopUpVoucher * selectedTopUpVoucher?.discount) + 'đ',
      'Phí giao dịch': '0đ',
      'Thành tiền': numberUtils.thousandSeparator(countTopUpVoucher * selectedTopUpVoucher?.discount) + 'đ',
    }
    setFields(arrField)
    setIsModalVisible(true)
  }

  const onChangeCountTopUpVouchers = (value) => {
    setCountTopUpVoucher(value)
  }

  const handleSetIsModalVisible = (value) => {
    setIsModalVisible(value)
  }

  useEffect(() => {
    providerStore.getProviderDetail(selectedProvider?.id)
      .then(res => {
      })
  }, [selectedProvider])

  useEffect(() => {
    if (selectedProvider && selectedItem && selectedTopUpVoucher && countTopUpVoucher > 0 && !isNaN(countTopUpVoucher))
      setDisabledConfirmDeal(false)
    else
      setDisabledConfirmDeal(true)

  }, [selectedItem, selectedProvider, selectedTopUpVoucher, countTopUpVoucher])

  return (
    <DefaultLayout>
      <Helmet>
        <title>Mua mã thẻ điện thoại</title>
      </Helmet>
      <PhoneCardPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.PHONE_CARD} />
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
                <MobileNetworkOperator selectedProvider={selectedProvider}
                                       handleSelectedProvider={handleSelectedProvider} />
              </WhiteRoundedInfoService>
              <WhiteRoundedInfoService margin={'0 0 16px 0'}>
                <ServicePlanMobile title={'Chọn gói/mệnh giá'} selectedTopUpVoucher={selectedTopUpVoucher}
                                   handleSelectedTopUpVoucher={handleSelectedTopUpVoucher} />
              </WhiteRoundedInfoService>

              <InputCount
                min={1}
                placeholder={'Nhập số lượng'}
                onChange={onChangeCountTopUpVouchers} />
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
      </PhoneCardPageWrapper>
      <ModalCustomCommandForm
        title={'Xác nhận giao dịch'}
        fields={fields}
        visible={isModalVisible}
        setIsModalVisible={handleSetIsModalVisible} />
    </DefaultLayout>

  )
}

PhoneCardPage.propTypes = {}

export default inject('providerStore')(observer(PhoneCardPage))