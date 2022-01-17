import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  AreaCreateCommand,
  CreateCommandButton, DescriptionsCustomForKPlus, FormSearch,
  ResultSearchForm, SearchImg, SearchInputPhoneNumber,
  TelevisionBillPageWrapper, TitleFunds, TitleInfoService, WhiteRoundedInfoSearchCustomer,
  WhiteRoundedInfoService,
} from './TelevisionBillPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import { toJS } from 'mobx'
import { WhiteRoundedBox } from '../../components/CommonStyled/CommonStyled'
import { Col, Descriptions, Radio, Row } from 'antd'
import DigitalWallet from '../../components/DigitalWallet'
import LinkDirectedBank from '../../components/LinkDirectedBank/LinkDirectedBank'
import LinkInternalBank from '../../components/LinkInternalBank/LinkInternalBank'
import ModalCustomCommandForm from '../../components/ModalCustomCommandForm/ModalCustomCommandForm'
import { inject, observer } from 'mobx-react'
import TaxProviders from '../../components/TaxProviders'
import { InfoCircleOutlined } from '@ant-design/icons'
import numberUtils from '../../utils/numberUtils'
import DescriptionsCustom from '../../components/DescriptionsCustom'

const TelevisionBillPage = props => {
  const { providerStore, customerStore } = props

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedProvider, setSelectedProvider] = useState(null)
  const [disabledConfirmDeal, setDisabledConfirmDeal] = useState(true)
  const [customer, setCustomer] = useState(null)
  const [listData, setListData] = useState(null)
  const [tax, setTax] = useState('')
  const [valueSearch, setValueSearch] = useState('')
  const [typeKPlusTelevision, setTypeKPlusTelevision] = useState(false)
  const [typeNotKPlusTelevision, setTypeNotKPlusTelevision] = useState(false)
  const [packages, setPackages] = useState(null)
  const [stateRadio, setStateRadio] = useState(1)

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
      'Tên gói cước': stateRadio.packageName ?? selectedProvider.name,
      'Số tiền': numberUtils.thousandSeparator(tax) + 'đ',
      'Giá bán': numberUtils.thousandSeparator(tax) + 'đ',
      'Phí giao dịch': '0đ',
      'Tổng tiền': numberUtils.thousandSeparator(tax) + 'đ',
    }
    setFieldsModal(arrField)
    setIsModalVisible(true)
  }

  const handleSetIsModalVisible = (value) => {
    setIsModalVisible(value)
  }

  const handleOnChange = (value) => {
    setValueSearch(value.target.value)
  }

  const handleSearchCustomer = () => {
    customerStore.getCustomerByCodeForTelevisions(valueSearch)
      .then(res => {
        setCustomer(res)
        if (selectedProvider?.name !== 'K+') {
          setTax(res.debitBalance)
        }
      })
  }

  const handleSearchProvider = (value) => {
    if (value !== '') {
      providerStore.getTelevisionByName()
        .then(res => {
          setSelectedProvider(res)
        })
    } else {
      setSelectedProvider(null)
    }
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

  const handleOnChangeChoosePackage = (value) => {
    setStateRadio(value.target.value)
    setTax(value.target.value.packagePrice)
  }

  useEffect(() => {
    providerStore.getTelevisions()
      .then(res => {
        console.log(res)
        setListData(res)
      })
  }, [])

  useEffect(() => {
    providerStore.getPackagesByCustomerCodeOrContract(valueSearch)
      .then(res => {
        setPackages(res)
      })
  }, [typeKPlusTelevision])

  useEffect(() => {
    if (selectedProvider == null) {
      setTypeKPlusTelevision(false)
      setTypeNotKPlusTelevision(false)
    } else if (selectedProvider?.name === 'K+') {
      setTypeKPlusTelevision(true)
      setTypeNotKPlusTelevision(false)
    } else if (selectedProvider?.name !== 'K+') {
      setCustomer(null)
      setTax('')
      setTypeNotKPlusTelevision(true)
      setTypeKPlusTelevision(false)
      setDescriptions()
    }
    setCustomer(null)
    setTax('')
  }, [selectedProvider])

  useEffect(() => {
    debugger;
    if (customer && selectedProvider?.name === 'K+') {
      return
    } else if (selectedProvider?.name !== 'K+')
      setDescriptions()
  }, [customer])
  useEffect(() => {
    if (selectedProvider && selectedItem && tax !== '' && customer)
      setDisabledConfirmDeal(false)
    else
      setDisabledConfirmDeal(true)

  }, [selectedItem, selectedProvider, tax, customer])

  return (
    <DefaultLayout>
      <Helmet>
        <title>Hóa đơn truyền hình</title>
      </Helmet>
      <TelevisionBillPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.TELEVISION_BILL} />
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
                <TaxProviders selectedProvider={selectedProvider}
                              handleSelectedProvider={handleSelectedProvider}
                              placeholder={'Tìm kiếm nhà cung cấp'}
                              data={listData}
                              handleSearchProvider={handleSearchProvider} />
              </WhiteRoundedInfoService>
              <FormSearch>
                <SearchInputPhoneNumber placeholder={'Nhập mã khách hàng/hợp đồng'}
                                        onChange={(value) => handleOnChange(value)}
                                        suffix={<InfoCircleOutlined />} />
                <SearchImg src={require('../../media/icons/search_cus.png')} alt={'search_cus'}
                           onClick={handleSearchCustomer} />
              </FormSearch>

              <WhiteRoundedInfoSearchCustomer margin={'20px 0 16px 0'}
                                              display={typeNotKPlusTelevision ? 'visible' : 'none'}>
                <ResultSearchForm>
                  <DescriptionsCustom
                    fields={fieldsDescription} />
                </ResultSearchForm>
              </WhiteRoundedInfoSearchCustomer>
              <WhiteRoundedInfoSearchCustomer margin={'20px 0 16px 0'}
                                              display={typeKPlusTelevision ? 'visible' : 'none'}>
                <ResultSearchForm>
                  <Radio.Group onChange={handleOnChangeChoosePackage} value={stateRadio}>
                    <DescriptionsCustomForKPlus bordered column={1}>
                      {
                        packages?.map((item, index) => (
                          <Descriptions.Item
                            key={index}
                            label={<Radio value={item}>{item.packageName}</Radio>}
                            contentStyle={{ 'display': 'flex', 'justifyContent': 'flex-end' }}>
                            {item.packagePrice && `${numberUtils.thousandSeparator(item.packagePrice)}đ`}</Descriptions.Item>
                        ))
                      }
                      <Descriptions.Item label='Số tiền'
                                         labelStyle={{ 'fontWeight': 'bold', width: '40%' }}
                                         contentStyle={{
                                           'display': 'flex',
                                           'justifyContent': 'flex-end',
                                           'fontWeight': 'bold',
                                         }}>
                        {tax && `${numberUtils.thousandSeparator(tax)}đ`}</Descriptions.Item>
                    </DescriptionsCustomForKPlus>
                  </Radio.Group>
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
      </TelevisionBillPageWrapper>
      <ModalCustomCommandForm
        title={'Xác nhận giao dịch'}
        fields={fieldsModal}
        visible={isModalVisible}
        setIsModalVisible={handleSetIsModalVisible} />
    </DefaultLayout>
  )
}

TelevisionBillPage.propTypes = {}

export default inject('customerStore', 'providerStore')(observer(TelevisionBillPage))