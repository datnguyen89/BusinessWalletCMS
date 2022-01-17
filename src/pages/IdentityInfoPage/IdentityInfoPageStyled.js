import styled from 'styled-components'
import { Button } from 'antd'

export const IdentityInfoPageWrapper = styled.div`
  .ant-descriptions-view {
    border-radius: 8px;
    border: none;
  }
`
export const UserInfoBox = styled.div`
`
export const UserInfoBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: linear-gradient(270deg, #6634E0 -8.83%, #0465B0 74.3%);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`
export const NotLinkedCardBox = styled.div`
  text-align: center;
`
export const LinkNewCardButton = styled(Button)`
  margin-top: 16px;
`
