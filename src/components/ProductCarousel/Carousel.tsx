"use client";

import React from 'react'
import Carousel from 'react-multi-carousel';
import WithStyles from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Product from './Product';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const CarouselElement = () => {
  const cartOn = useSelector((state: RootState) => state.cartOn);
  const menuOn = useSelector((state: RootState) => state.menuOn);
  return (
    <Carousel
  additionalTransfrom={0}
  arrows = {!cartOn && !menuOn}
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
      items: 4,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 2,
      partialVisibilityGutter: 0
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 3,
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
<Product image='/Products/1.png' name='MARREJ' description='UMAMI+KAMADO BONO LIMITED,black' price='955' id='66a711f7433cdf5e57abb9de'/>
<Product image='/Products/11.png' name='VENTURE HOME' description='DAVAO sofa group with table' price='569' id='66b13d8ba4d68e89a3f03c5c' />
<Product image='/Products/3.png' name='VENTURE HOME' description='ROSARIO dining table + 6th WEMBLEY chairs' price='340'  id='66a71333433cdf5e57abb9e5'/>
<Product image='/Products/4.png' name='MARREJ' description='ONE DEAL' price='749' id='66a7142c433cdf5e57abb9eb'/>
<Product image='/Products/5.png' name='MARREJ' description='Special price UMAMI outdoor kitchen parts 1 + 2' price='199' id='66a714e2433cdf5e57abb9f0'/>
<Product image='/Products/6.png' name='NAPOLEON' description='Napoleon Rogue 425-1SE Phantom' price='569' id='66a7155d433cdf5e57abb9f3'/>

</Carousel>

  )
}

export default CarouselElement