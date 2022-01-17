import styled from 'styled-components'
import { Row } from 'antd'

export const LinkInternalBankWrapper = styled.div`
  text-align: left;
  padding: 0 16px;
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

export const LinkedCardNumber = styled.div`
  color: #fff;
  text-align: left;
`

export const AreaBoundInternalBank = styled(Row)`
  img {
    width: 100%;
  }
  img:hover {
    cursor: pointer;
  }
`
export const ImgBank = styled.img`
  border: ${props => props.active ? `1px solid ${props.color}` : `1px solid #E0E0E0`};
  border-radius: 8px;
`

export const WrapperImage = styled.div`
  padding: 8px 8px 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LinkInternalBankTitle = styled.div`
  text-align: left;
  color: #979797;
  font-weight: 400;
  margin: 0 0 5px;
`