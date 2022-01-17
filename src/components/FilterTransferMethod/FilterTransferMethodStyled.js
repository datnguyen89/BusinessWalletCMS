import styled from 'styled-components'
import { Button } from 'antd'

export const FilterTransferMethodWrapper = styled.div`
  margin: 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #ffffff;
  color: black;
  padding: 20px;
  display: flex;
  .ant-select {
    width: 400px !important;
  }
`

export const LabelFilter = styled.label`
  margin-right: 40px;
`

export const FilterByTime = styled.div``

export const FilterByMethod = styled.div`
  margin-left: 100px;
`

export const ButtonConfirm = styled(Button)`
  background: #507CEF !important;
  color: white;
  margin-left: 100px;
  padding: 0 40px;
`