import styled from 'styled-components'

export const LinkedCardCarouselWrapper = styled.div`
  text-align: center;
  margin: 0 36px;

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
export const LinkedCardWrapper = styled.div`
  background: ${props => props.background};
  padding: 16px;
  border-radius: 4px;
  height: 180px;
`
export const LinkedCardNumber = styled.div`
  color: #fff;
  text-align: left;
`
export const LinkedCardDate = styled.div`
  color: #fff;
  text-align: right;
`