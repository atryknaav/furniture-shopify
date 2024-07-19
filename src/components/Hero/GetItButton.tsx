import React from 'react'
import { GoArrowDownRight } from 'react-icons/go'

const GetItButton = ({isBlack}: {isBlack: boolean}) => {
  return (
    <button className={isBlack?`group flex items-center gap-4 mt-10 select-none w-fit h-fit p-4 font-semibold text-2xl bg-[#1c1c1c] hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-500`
      :`group flex items-center gap-4 mt-10 select-none w-fit h-fit p-4 font-semibold text-2xl text-white border-[#1c1c1c] border-[1px] bg-[#1c1c1c] hover:cursor-pointer hover:bg-[#fff] hover:text-black transition-all duration-500`
    }>
              GET IT NOW! <GoArrowDownRight className=' text-3xl'/>
            </button>
  )
}

export default GetItButton