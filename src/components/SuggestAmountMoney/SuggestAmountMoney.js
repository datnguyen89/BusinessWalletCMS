import React from 'react'
import PropTypes from 'prop-types'
import {
  ProviderWrapper, SuggestAmountMoneyArea,
} from './SuggestAmountMoneyStyled'
import numberUtils from '../../utils/numberUtils'
import { Col } from 'antd'

const GenerateRandomSuggestPrice = (amount) => {
  if (!amount)
    return [
      '10.000',
      '20.000',
      '50.000',
      '100.000',
    ]

  amount = amount + ''

  return [
    amount[0] * 1000,
    amount[0] * 10000,
    amount[0] * 100000,
    amount[0] * 1000000,
  ]
}

const SuggestAmountMoney = props => {
  const { amountMoney, selectedSuggestAmountMoneyCallback } = props

  const handleSelectedSuggestAmountMoney = (value) => {
    if (selectedSuggestAmountMoneyCallback) {
      selectedSuggestAmountMoneyCallback(value)
    }
  }

  let lstSuggestPrices = GenerateRandomSuggestPrice(amountMoney)

  return (
    <ProviderWrapper gutter={16} >
      {
        lstSuggestPrices.map(item =>
          <Col className="gutter-row" span={6} key={item}>
            <SuggestAmountMoneyArea
              className="gutter-row"
              span={6}
              onClick={() => handleSelectedSuggestAmountMoney(item)}
            >
              {numberUtils.thousandSeparator(item)}<span>đ</span>
            </SuggestAmountMoneyArea>
          </Col>
        )
      }
    </ProviderWrapper>
  )
}

SuggestAmountMoney.propTypes = {
  selectedSuggestAmountMoneyCallback: PropTypes.func,
  amount: PropTypes.number
}

export default SuggestAmountMoney