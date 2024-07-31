import Image from 'next/image'
import React from 'react'

const Hero2 = () => {
  return (
    <div className=' mt-1 flex '>
    <div className=''>
        <Image src={'/Material/2.png'} width={1000} height={1000} alt='' />
    </div>


    <div className=' w-[50%] p-20 m-auto'>
        <p className=' my-6 text-3xl font-semibold'>ABOUT THE COURT</p>
        <p className=' my-6 text-xl'>Corten is a metal that is designed to resist rusting and will develop a more and more beautiful rusty finish over time.</p>
        <p className=' my-6 text-xl font-extralight'>Our corten has a thickness of 2mm.</p>
        <p className=' my-6 text-xl'>On each article in the corten, it says whether it is delivered with a pre-roasted finish or unroasted.</p>
        <p className=' my-6 text-xl'>If it is delivered unroasted, this means that no rust is visible during assembly, but the rusting process starts when the product is placed outside and the product meets the elements.</p>
        <p className=' my-6 text-xl'>If you are impatient, the roasting process can be sped up by watering the product regularly with the water hose for the first few weeks. It is also possible to further speed up the process with a water and salt mixture. Call us and we'll tell you more.</p>
        <p className=' my-6 text-xl font-extralight'>Maintenance:</p>
        <p className=' my-6 text-xl'>Corten has no maintenance and should not be treated in any special way.</p>
    </div>
</div>
  )
}

export default Hero2