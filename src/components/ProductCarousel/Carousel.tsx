"use client";

import React from 'react'
import Carousel from 'react-multi-carousel';
import WithStyles from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Product from './Product';
// import item from '../../app/product/test';

const CarouselElement = () => {
  return (
    <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
<Product image='/ProductCarousel/1.png' name='DANGARDEN' description='UMAMI+KAMADO BONO LIMITED,svart' price='19 955' />
<Product image='/ProductCarousel/2.png' name='VENTURE HOME' description='DAVAO soffgrupp med soffbord' price='7 995' />
<Product image='/ProductCarousel/3.png' name='VENTURE HOME' description='ROSARIO matbord + 6st WEMBLEY matstol' price='17 995' />
<Product image='/ProductCarousel/4.png' name='DANGARDEN' description='ONE DEAL' price='13 495' />
<Product image='/ProductCarousel/5.png' name='DANGARDEN' description='Specialpris UMAMI utekok modul 1 + 2' price='12 285' />
<Product image='/ProductCarousel/6.png' name='NAPOLEON' description='Napoleon Rogue 425-1SE Phantom' price={'17 995'} />

</Carousel>

  )
}

export default CarouselElement