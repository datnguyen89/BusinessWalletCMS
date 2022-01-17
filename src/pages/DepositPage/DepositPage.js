import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import { Helmet } from 'react-helmet/es/Helmet'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { Col, Row } from 'antd'
import SuggestPriceList from '../../components/SuggestAmountMoney'
import LinkDirectedBank from '../../components/LinkDirectedBank/LinkDirectedBank'
import LinkInternalBank from '../../components/LinkInternalBank/LinkInternalBank'
import ModalCustomCommandForm from '../../components/ModalCustomCommandForm/ModalCustomCommandForm'
import { inject, observer } from 'mobx-react'
import InfoAccountArea from '../../components/InfoAccountArea'

import {
  AreaCreateCommand, CreateCommandButton,
  InputCount,
  DepositPageWrapper,
  TitleFunds, TitleInfoService,
  WhiteRoundedInfoLink,
} from './DepositPageStyled'
import numberUtils from '../../utils/numberUtils'

const DepositPage = props => {
  const { accountWalletStore } = props

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedFund, setSelectedFund] = useState(null)
  const [selectedBankAccount, setSelectedBankAccount] = useState(null)
  const [depositAmount, setDepositAmount] = useState(0)
  const [disabledConfirmDeal, setDisabledConfirmDeal] = useState(true)

  const [fields, setFields] = useState(null)

  const handleClickFunds = (value) => {
    setSelectedFund(value)
  }

  const handleCallbackHitBank = (value) => {
    setSelectedFund(value)
  }

  const handleSelectedBankAccount = (value) => {
    console.log('handleSelectedWalletAccount', value)
    setSelectedBankAccount(value)
  }

  const handleSelectedSuggestAmountMoney = (value) => {
    setDepositAmount(value)
  }

  const showModalConfirmDeal = () => {
    let arrField = {
      'Nguồn tiền': selectedFund?.accountNumber,
      'Tài khoản ví nạp': '12345678',
      'Số tiền': '100.000đ',
      'Phí giao dịch': '0đ',
      'Tổng tiền': numberUtils.thousandSeparator(depositAmount) + 'đ',
    }
    setFields(arrField)
    setIsModalVisible(true)
  }

  const hanledDepositValueChanged = (value) => {
    console.log('hanledDepositValueChanged', value)
    setDepositAmount(value)
  }

  const handleSetIsModalVisible = (value) => {
    setIsModalVisible(value)
  }

  useEffect(() => {
    if (depositAmount > 0 && selectedFund && selectedBankAccount)
      setDisabledConfirmDeal(false)
    else
      setDisabledConfirmDeal(true)

  }, [selectedFund, depositAmount, selectedBankAccount])

  useEffect(() => {
    accountWalletStore.getAccountWallets();
  }, []);

  return (
    <DefaultLayout>
      <Helmet>
        <title>Nạp tiền</title>
      </Helmet>
      <DepositPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.DEPOSIT} />
        <WhiteRoundedBox margin={'0 16px 16px 16px'}>
          <Row>
            <Col span={24}>
              <TitleInfoService>Thông tin dịch vụ</TitleInfoService>
            </Col>
          </Row>
          <Row>
            <Col span={6} />
            <Col span={12}>
              <WhiteRoundedInfoLink margin={'0 0 16px 0'}>
                <InfoAccountArea
                  callbackBankAccount={handleSelectedBankAccount}
                  data={[]}
                  selectedAccount={selectedBankAccount}
                />
              </WhiteRoundedInfoLink>

              <InputCount
                min={1}
                placeholder={'Nhập số tiền'}
                onChange={hanledDepositValueChanged}
                value={depositAmount} />

              <SuggestPriceList amountMoney={depositAmount} selectedSuggestAmountMoneyCallback={handleSelectedSuggestAmountMoney} />
            </Col>
            <Col span={6} />
          </Row>
          <Row>
            <Col span={24}>
              <TitleFunds>Nguồn tiền</TitleFunds>
            </Col>
            <Col span={6}>
              <WhiteRoundedBox margin={'0 16px 0 0'}>
                <LinkDirectedBank selectedItem={selectedFund} setClickFunds={handleClickFunds} />
              </WhiteRoundedBox>
            </Col>
            <Col span={18}>
              <WhiteRoundedBox padding={'16px 0'}>
                <LinkInternalBank selectedItem={selectedFund} setClickFunds={handleClickFunds}
                  callbackHitBank={handleCallbackHitBank} />
              </WhiteRoundedBox>
            </Col>
          </Row>
          <AreaCreateCommand>
            <CreateCommandButton type={disabledConfirmDeal ? 'default' : 'primary'} onClick={showModalConfirmDeal}
              disabled={disabledConfirmDeal}>Tạo lệnh</CreateCommandButton>
          </AreaCreateCommand>
        </WhiteRoundedBox>
      </DepositPageWrapper>
      <ModalCustomCommandForm
        title={'Xác nhận nạp tiền ví'}
        fields={fields}
        visible={isModalVisible}
        setIsModalVisible={handleSetIsModalVisible} />
    </DefaultLayout>
  )
}

DepositPage.propTypes = {}

export default inject('providerStore', 'accountWalletStore')(observer(DepositPage))