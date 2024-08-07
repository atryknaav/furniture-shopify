import Link from 'next/link'
import React from 'react'

interface ProductProps {
    image: string
    name: string
    description: string
    price: number
    id: string
}

const Product = (props: ProductProps) => {
    const { image, description, price, name, id} = props;
  return (
    <Link className=' w-full flex h-fit'
    href={'/product?id=' + id}
    >
    <div className=' flex flex-col gap-2 hover:scale-95 hover:cursor-pointer h-fit w-[320px] shadow-md transition-all duration-200 active:cursor-wait'>

        <div className=' flex justify-center'>
            <img src={image} alt=""  className=' tb:w-[320px] tb:h-[320px] h-[150px] w-[150px] transition-all duration-200'/>
        </div>

        <div className=' font-semibold mx-3 text-md tb:text-sm hover:underline transition-all duration-400 w-fit h-[3rem] overflow-hidden'>
            {name.slice(0, 35) + '...'}
        </div>

        <div className=' px-3 text-sm tb:text-sm font-bold text-[#913737]'>
            {`$${price}`}
        </div>
    </div>
    </Link>
  )
}

export default Product