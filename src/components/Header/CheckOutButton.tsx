import React from 'react'
import { GoArrowDownRight } from 'react-icons/go'

const CheckOutButton = () => {
  return (
    <button className={`group flex items-center gap-4 select-none w-fit h-fit p-4 font-semibold text-2xl text-white border-[#1c1c1c] border-[1px] bg-[#1c1c1c] hover:cursor-pointer hover:bg-[#fff] hover:text-black transition-all duration-500`
      }>
                CHECK OUT <GoArrowDownRight className=' text-3xl'/>
              </button>
  )
}

export default CheckOutButton