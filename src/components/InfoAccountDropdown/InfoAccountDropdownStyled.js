import styled from 'styled-components'
import { Dropdown } from 'antd'

export const InfoAccountDropdownWrapper = styled.div`
  border: ${props => props.border == true ? `1px solid ${props.borderColor}` : 'none'};
  border-radius: 4px;
  //margin: 5px;
  padding: 10px;
  
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

export const InfoAccountDropdownTitle = styled.p `
  color: #979797;
  font-size: 1.3rem;
  margin-bottom: 2px;
`

export const InfoAccountDropdownContent = styled.h4 `
  color: #333333;
  font-size: 1.5rem;
  margin-bottom: 2px;
`

export const InfoAccountDropdownPhone = styled.p `
  color: #333333;
  font-size: 1.2rem;
  margin-bottom: 2px;
`

export const InfoAccountDropdownMoney = styled.h3 `
  color: #333333;
  font-size: 1.6rem;
  margin-bottom: 0;
`

export const DropdownCustom = styled(Dropdown) `
  display: flex;
  justify-content: right;
  span {
    margin: 5px 10px;
  }
`