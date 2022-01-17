import styled from 'styled-components'
import InfoAccountArea from './InfoAccount'
import { Dropdown } from 'antd'

export const InfoAccountWrapper = styled.div`
  border: ${props => props.border == true ? `1px solid ${props.borderColor}` : 'none'};
  border-radius: 4px;
  .slick-arrow.slick-prev {
    &:before {
      color: #ccc;
    }
  }

  .slick-arrow.slick-next {
    &:before {
      color: #ccc;
    }
  }
`

export const InfoAccountTitle = styled.p `
  color: #979797;
  font-size: 1.6rem;
`

export const InfoAccountContent = styled.h4 `
  color: #333333;
  font-size: 1.8rem;
`

export const InfoAccountPhone = styled.p `
  color: #333333;
  font-size: 1.4rem;
`

export const InfoAccountMoney = styled.h3 `
  color: #333333;
  font-size: 3.6rem;
  margin-bottom: 0;
`

export const DropdownCustom = styled(Dropdown) `
  display: flex;
  justify-content: right;
  span {
    margin: 5px 10px;
  }
`