import React from 'react'
import { GoArrowDownRight } from 'react-icons/go'
import GetItButton from './GetItButton'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className=' flex flex-col gap-40 tb:gap-0 z-0'>
        <div className=' relative w-full h-fit '>
          
          <div className=' h-[1000px] w-auto tb:relative'>
            <Image src='/hero1.png' alt='' loading='eager' fill objectFit='cover'/>
          </div>

          <div className=' absolute bottom-0 mb-60 tb:mb-0 left-0 pb-[10vw] pl-[5vw] pr-[10vw] text-white text-6xl font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] '>
            <div className=' text-lg tb:text-lg font-medium'>
              MARREJ
            </div>

            <div className=' text-4xl mt-8'>
              MODERN DESIGN FOR YOUR COMFORTABLE LIVING
            </div>
            <div className=' text-lg font-light mt-4 w-80'>
            Sustainable products for the garden and patio directly from our own factory at an affordable premium.
            </div>

            <GetItButton isBlack={true}/>
          </div>

        </div>

        <div className='flex h-fit max-h-[1000px] tb:flex-row flex-col-reverse'>
            <div className='w-auto bg-slate-700 max-h-[800px] tb:max-h-[1000px] flex  '>
              <Image src='/hero2.png' alt='' loading='eager' height={1000} width={1000} objectFit='cover'/>
            </div>

            <div className=' relative tb:static flex gap-2 flex-col justify-center p-2 tb:p-[7rem] tb:w-[50%] w-[100%] bg-[#E0E0E0] font-light tb:h-[1000px] '> 
              <div>
                MARREJ 
              </div>

              <div className=' text-xl tb:text-5xl font-semibold'>
              OWN DESIGN AND MANUFACTURE
              </div>

              <div className=' text-tb tb:text-xl my-2'>
              <span className=' font-semibold'>Directly from our own factory,</span> we deliver products to our brand at an affordable premium.
              </div>

              <div className=' text-tb tb:text-xl my-2'>
              <span className=' font-semibold'>We have been producing</span> all winter and the warehouse is now well stocked with our products..
              </div>

              <div className=' text-tb tb:text-xl my-2'>
              <span className=' font-semibold'>Last year, all our outdoor kitchens</span>  ran out already in May for direct delivery, so don't wait too long to place an order for your dream kitchen for the really lazy days of summer.
              </div>

              <div className=' text-tb tb:text-xl my-2'>
              <span className=' font-semibold'>Here in our shop</span> you will also find other complementary brands with things we like and which complement our own products.
              </div>

              <div className=' text-tb tb:text-xl my-2'>
              <span className=' font-semibold'>We are extra happy</span>  that you have visited us here and if you have any questions, don't hesitate to write to us directly in the chat!
              </div>

              <ul className=' flex flex-col gap-5 list-disc ml-10 text-tb tb:text-xl'>
                <li>
                Certified E-commerce with purchase protection
                </li>
                <li>
                Buy now. Pay later with KLARNA
                </li>
                <li>
                Stock items delivery 2-5 working days
                </li>
              </ul>

              <GetItButton isBlack={false} />

            </div>
        </div>
    </div>
  )
}

export default Hero