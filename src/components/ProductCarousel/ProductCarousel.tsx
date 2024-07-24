import React from 'react'
import CarouselElement from './Carousel'
import { ChevronRightIcon } from '@radix-ui/react-icons'

const ProductCarousel = () => {
  return (
    <div className=' mb-10'>
      <div className=' flex justify-between'>

        <div className=' font-normal text-6xl p-12'>
        SIX POPULAR OFFERS
        </div>

        <div className=' font-normal text-xl p-12 flex gap-2 items-center align-middle hover:underline underline-offset-4 h-fit w-fit'>
        TO CAMPAIGNS <ChevronRightIcon />
        </div>

      </div>
        <CarouselElement />
    </div>
  )
}

export default ProductCarousel