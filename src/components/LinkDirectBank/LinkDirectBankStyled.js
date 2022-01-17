import styled from 'styled-components'
import { Row } from 'antd'

export const LinkDirectBankWrapper = styled.span`

`
export const IconStatusLabelText = styled.span`
  font-size: ${props => props.fontSize};     
  margin-left: 4px;
`
export const AreaBoundDirectBank = styled(Row)`
  img {
    width: 100%;
  }
  img:hover {
    cursor: pointer;
  }
`

export const ImgBank = styled.img`
  border: ${props => props.active ? `1px solid ${props.color}` : "1px solid #E0E0E0"};
  border-radius: 8px;
`

export const WrapperImage = styled.div`
  padding: 8px 8px 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LinkDirectBankTitle = styled.div`
  color: #979797;
  font-weight: 400;
  margin: 0 16px 5px 0;
  text-align: left; 
`