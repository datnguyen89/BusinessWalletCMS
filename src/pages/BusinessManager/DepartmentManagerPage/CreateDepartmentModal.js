import React from 'react'
import PropTypes from 'prop-types'
import { CreateDepartmentModalWrapper } from './DepartmentManagerPageStyled'

const CreateDepartmentModal = props => {
  const { visible } = props

  return (
    <CreateDepartmentModalWrapper>

    </CreateDepartmentModalWrapper>
  )
}

CreateDepartmentModal.propTypes = {
  visible: PropTypes.bool.isRequired,
}

export default CreateDepartmentModal