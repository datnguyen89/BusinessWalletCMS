import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CustomerRegisterBusinessTabWrapper } from '../BusinessProfileManagerPageStyled'
import ConditionDisplay from '../../../../components/ConditionDisplay'
import Customer_BusinessInfoStepOne from './BusinessInfoStepOne'
import Customer_RepresentationStepTwo from './RepresentationStepTwo'
import Customer_AccountingStepThree from './AccountingStepThree'

const CustomerRegisterBusinessTab = props => {
  const [processStep, setProcessStep] = useState(0)

  return (
    <CustomerRegisterBusinessTabWrapper>
      <ConditionDisplay visible={processStep === 0}>
        <Customer_BusinessInfoStepOne nextStep={() => setProcessStep(1)} />
      </ConditionDisplay>
      <ConditionDisplay visible={processStep === 1}>
        <Customer_RepresentationStepTwo prevStep={() => setProcessStep(0)} nextStep={() => setProcessStep(2)} />
      </ConditionDisplay>
      <ConditionDisplay visible={processStep === 2}>
        <Customer_AccountingStepThree prevStep={() => setProcessStep(1)} />
      </ConditionDisplay>
    </CustomerRegisterBusinessTabWrapper>
  )
}

CustomerRegisterBusinessTab.propTypes = {}

export default CustomerRegisterBusinessTab