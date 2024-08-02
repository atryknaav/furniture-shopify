import React from 'react'
import { GoArrowDownRight } from 'react-icons/go'

const GetItButton = ({isBlack}: {isBlack: boolean}) => {
  return (
    <a href="#products">
    <button className={isBlack?` m-auto group flex items-center gap-4 mt-10 mb-10 sm:mx-0 select-none w-fit h-fit p-4 font-semibold text-2xl bg-[#1c1c1c] hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-500`
      :` m-auto group flex items-center gap-4 mt-10 mb-10 sm:mx-0 select-none w-fit h-fit p-4 font-semibold text-2xl text-white border-[#1c1c1c] border-[1px] bg-[#1c1c1c] hover:cursor-pointer hover:bg-[#fff] hover:text-black transition-all duration-500`
    }>
              GET IT NOW! <GoArrowDownRight className=' text-3xl'/>
            </button>
    </a>
  )
}

export default GetItButton