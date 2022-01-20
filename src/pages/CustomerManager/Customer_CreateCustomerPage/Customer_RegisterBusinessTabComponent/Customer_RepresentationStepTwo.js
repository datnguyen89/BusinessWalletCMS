import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { CustomerRepresentationStepTwoWrapper } from '../Customer_CreateCustomerPageStyled'

const CustomerRepresentationStepTwo = props => {
  const { nextStep, prevStep } = props
  return (
    <CustomerRepresentationStepTwoWrapper>
      2
      <Button type={'default'} onClick={() => prevStep()}>Quay lại</Button>
      <Button type={'primary'} onClick={() => nextStep()}>Tiếp tục</Button>
    </CustomerRepresentationStepTwoWrapper>
  )
}

CustomerRepresentationStepTwo.propTypes = {
  nextStep: PropTypes.func,
  prevStep: PropTypes.func,
}

export default CustomerRepresentationStepTwo