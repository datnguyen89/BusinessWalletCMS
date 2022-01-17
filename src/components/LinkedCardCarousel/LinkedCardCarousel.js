import React from 'react'
import PropTypes from 'prop-types'
import {
  LinkedCardCarouselWrapper,
  LinkedCardDate,
  LinkedCardNumber,
  LinkedCardWrapper,
} from './LinkedCardCarouselStyled'
import { ColorTitle, RowFlexEndDiv } from '../CommonStyled/CommonStyled'
import { LinkNewCardButton, NotLinkedCardBox } from '../../pages/IdentityInfoPage/IdentityInfoPageStyled'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ICONS from '../../icons'

const PreviousButton = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  )
}
const NextButton = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      style={{ ...style }}
      className={className}
      onClick={onClick}
    />
  )
}
const LinkedCardCarousel = props => {
  const { listLinkedCard } = props
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2000,
    prevArrow: <PreviousButton />,
    nextArrow: <NextButton />,
  }
  return (
    <LinkedCardCarouselWrapper>
      <Slider {...settings}>
        {
          listLinkedCard && listLinkedCard.map((item, index) =>
            <LinkedCardWrapper background={item.background} key={index}>
              <RowFlexEndDiv>
                <img src={ICONS.ICON_CARD} />
              </RowFlexEndDiv>
              <LinkedCardNumber>
                {item.cardNumber}
              </LinkedCardNumber>
              <LinkedCardDate>
                {item.expiredDate}
              </LinkedCardDate>
            </LinkedCardWrapper>,
          )
        }
      </Slider>
      <LinkNewCardButton type={'default'}>Liên kết thẻ mới</LinkNewCardButton>
    </LinkedCardCarouselWrapper>
  )
}

LinkedCardCarousel.propTypes = {
  listLinkedCard: PropTypes.array,
}

export default LinkedCardCarousel