import Link from 'next/link'
import React from 'react'

interface ProductProps {
    image: string
    name: string
    description: string
    price: string
    id: string
}

const Product = (props: ProductProps) => {
    const { image, description, price, name, id} = props;
  return (
    <Link
    href={'/product?id=' + id}
    >
    <div className=' flex flex-col gap-2 group hover:cursor-pointer ml-12'>

        <div>
            <img src={image} alt=""  className=' sm:w-[450px] sm:h-[450px] h-[150px] w-[150px] group-hover:scale-95 transition-all duration-200'/>
        </div>

        <div className=' font-semibold mx-3 text-md sm:text-xl hover:underline transition-all duration-400 w-fit h-fit'>
            {name}
        </div>

        <div className=' px-3 text-sm sm:text-xl font-normal text-[#1c1c1c]'>
            {description}
        </div>

        <div className=' px-3 text-sm sm:text-xl font-bold text-[#913737]'>
            {`$${price}`}
        </div>
    </div>
    </Link>
  )
}

export default Product