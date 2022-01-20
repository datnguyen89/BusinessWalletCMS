import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { CustomerAccountingStepThreeWrapper } from '../Customer_CreateCustomerPageStyled'

const CustomerAccountingStepThree = props => {
  const { prevStep } = props
  return (
    <CustomerAccountingStepThreeWrapper>
      3
      <Button type={'default'} onClick={() => prevStep()}>Quay lại</Button>
    </CustomerAccountingStepThreeWrapper>
  )
}

CustomerAccountingStepThree.propTypes = {
  prevStep: PropTypes.func
}

export default CustomerAccountingStepThree