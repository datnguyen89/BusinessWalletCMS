import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  ButtonConfirm,
  FilterByMethod,
  FilterByTime,
  FilterTransferMethodWrapper,
  LabelFilter,
} from './FilterTransferMethodStyled'
import { Button, Select } from 'antd'
import { Option } from 'antd/lib/mentions'

const FilterTransferMethod = props => {

  const children = []
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
  }

  const size = 20
  const handleChange = () => {
  }

  return (
    <FilterTransferMethodWrapper>
      <FilterByTime>
        <LabelFilter>Tháng chi</LabelFilter>
        <Select size={size} defaultValue='a1' onChange={handleChange} style={{ width: 200 }}>
          <Select.Option value={{children}}/>
        </Select>
      </FilterByTime>
      <FilterByMethod>
        <LabelFilter>Hình thức</LabelFilter>
        <Select size={size} defaultValue='a1' onChange={handleChange} style={{ width: 200 }}>
          <Select.Option value={{children}}/>
        </Select>
      </FilterByMethod>
      <ButtonConfirm type='primary'>Xác nhận</ButtonConfirm>
    </FilterTransferMethodWrapper>
  )
}

FilterTransferMethod.propTypes = {}

export default FilterTransferMethod