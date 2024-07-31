import Image from 'next/image'
import React from 'react'

const Hero1 = () => {
  return (
    <div className=' mt-20 flex '>
        <div className=' w-[50%] p-20 m-auto'>
            <p className=' my-6 text-3xl font-semibold'>OUR THINKING</p>
            <p className=' my-6 text-xl'>For us, it is important that the product you buy is good and meets your expectations.</p>
            <p className=' my-6 text-xl'>We do NOT tinker with the material to reach a better price, but the price comes after we have created the product the way we want it. This means that many of our products are made of strong and well-sized materials.</p>
            <p className=' my-6 text-xl'>A good example of this is our outdoor kitchen series UMAMI, where all modules in this series can withstand heavy loads of whatever you might need in your outdoor kitchen.</p>
        </div>


        <div className=''>
            <Image src={'/Material/1.png'} width={1000} height={1000} alt='' />
        </div>
    </div>
  )
}

export default Hero1