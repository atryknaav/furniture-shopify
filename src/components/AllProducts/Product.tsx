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
    <Link className=' w-[200px] flex'
    href={'/product?id=' + id}
    >
    <div className=' flex flex-col gap-2 group hover:cursor-pointer ml-12 h-full w-[150px]'>

        <div>
            <img src={image} alt=""  className=' tb:w-[150px] tb:h-[150px] h-[150px] w-[150px] group-hover:scale-95 transition-all duration-200'/>
        </div>

        <div className=' font-semibold mx-3 text-md tb:text-sm hover:underline transition-all duration-400 w-fit h-fit'>
            {name.slice(0, 25) + '...'}
        </div>

        {/* <div className=' px-3 text-sm tb:text-sm font-normal text-[#1c1c1c]'>
            {description.slice(0, 50) + '...'}
        </div> */}

        <div className=' px-3 text-sm tb:text-sm font-bold text-[#913737]'>
            {`$${price}`}
        </div>
    </div>
    </Link>
  )
}

export default Product