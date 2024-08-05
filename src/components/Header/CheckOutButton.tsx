import Link from 'next/link'
import React from 'react'
import { GoArrowDownRight } from 'react-icons/go'

const CheckOutButton = () => {
  return (
    <Link href={'/'}>
    <button className={`group flex items-center tb:gap-4 select-none w-fit h-fit p-2 tb:p-4 font-semibold text-lg tb:text-2xl text-white border-[#1c1c1c] border-[1px] bg-[#1c1c1c] hover:cursor-pointer hover:bg-[#fff] hover:text-black transition-all duration-500`
      }>
                CHECK OUT <GoArrowDownRight className=' text-3xl'/>
              </button>
    </Link>
  )
}

export default CheckOutButton