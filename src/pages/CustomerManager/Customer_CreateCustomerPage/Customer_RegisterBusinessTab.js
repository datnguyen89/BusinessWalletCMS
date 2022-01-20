import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CustomerRegisterBusinessTabWrapper } from './Customer_CreateCustomerPageStyled'
import ConditionDisplay from '../../../components/ConditionDisplay'
import Customer_BusinessInfoStepOne from './Customer_RegisterBusinessTabComponent/Customer_BusinessInfoStepOne'
import Customer_RepresentationStepTwo from './Customer_RegisterBusinessTabComponent/Customer_RepresentationStepTwo'
import Customer_AccountingStepThree from './Customer_RegisterBusinessTabComponent/Customer_AccountingStepThree'

const CustomerRegisterBusinessTab = props => {
  const [processStep, setProcessStep] = useState(1)

  return (
    <CustomerRegisterBusinessTabWrapper>
      <ConditionDisplay visible={processStep === 1}>
        <Customer_BusinessInfoStepOne nextStep={() => setProcessStep(2)} />
      </ConditionDisplay>
      <ConditionDisplay visible={processStep === 2}>
        <Customer_RepresentationStepTwo prevStep={() => setProcessStep(1)} nextStep={() => setProcessStep(3)} />
      </ConditionDisplay>
      <ConditionDisplay visible={processStep === 3}>
        <Customer_AccountingStepThree prevStep={() => setProcessStep(2)} />
      </ConditionDisplay>
    </CustomerRegisterBusinessTabWrapper>
  )
}

CustomerRegisterBusinessTab.propTypes = {}

export default CustomerRegisterBusinessTab