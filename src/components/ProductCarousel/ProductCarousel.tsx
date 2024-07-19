import React from 'react'
import CarouselElement from './Carousel'
import { GoChevronRight } from 'react-icons/go'

const ProductCarousel = () => {
  return (
    <div className=' mb-10'>
      <div className=' flex justify-between'>

        <div className=' font-normal text-6xl p-12'>
        SIX POPULAR OFFERS
        </div>

        <div className=' font-normal text-xl p-12 flex gap-2 items-center align-middle hover:underline underline-offset-4 h-fit w-fit'>
        TO CAMPAIGNS <GoChevronRight />
        </div>

      </div>
        <CarouselElement />
    </div>
  )
}

export default ProductCarousel