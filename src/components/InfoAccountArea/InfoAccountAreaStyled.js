import styled from 'styled-components'

export const InfoAccountWrapper = styled.div`
  .slick-arrow.slick-prev {
    &:before {
      color: #ccc;
    }
  }
  .dropdown-style-info-acount-class {
    width: 500px !important;
  }
  .slick-arrow.slick-next {
    &:before {
      color: #ccc;
    }
  }
  .ant-dropdown {
    display: flex;
    justify-content: end;
  }
`

export const InfoAccountContent = styled.h4 `
  color: #333333;
  font-size: 1.8rem;
`

export const InfoAccountMoney = styled.h3 `
  color: #333333;
  font-size: 3.6rem;
`
export const InfoAccountOverLayWrapper = styled.div`
  background: #F8F8F8;
  padding: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  max-height: 280px;
  overflow-y: auto;
`
export const InfoAccountOverLayItem = styled.div`
  cursor: pointer;
  background: #fff;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`