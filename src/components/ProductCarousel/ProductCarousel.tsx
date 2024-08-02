import React from 'react'
import CarouselElement from './Carousel'
import { ChevronRightIcon } from '@radix-ui/react-icons'

const ProductCarousel = () => {
  return (
    <div id='products' className=' mb-10'>
      <div className=' flex justify-between'>

        <div className=' font-normal text-xl sm:text-6xl p-12'>
        SIX POPULAR OFFERS
        </div>

        

      </div>
        <CarouselElement />
    </div>
  )
}

export default ProductCarousel