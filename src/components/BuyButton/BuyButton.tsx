import React from 'react'
import { GoArrowDownRight } from 'react-icons/go'

const BuyButton = () => {
  return (
    <button className={`group flex items-center gap-4 select-none w-fit h-fit py-2 tb:py-4 px-6 tb:px-10 font-semibold text-lg tb:text-2xl text-white border-[#1c1c1c] border-[1px] bg-[#1c1c1c] hover:cursor-pointer hover:bg-[#fff] hover:text-black transition-all duration-500`
    }>
              ADD TO CART <GoArrowDownRight className=' text-3xl'/>
            </button>
  )
}

export default BuyButton