import { RootState } from '@/redux/store';
import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';

const CartProduct = () => {
  const shpCart = useSelector((state: RootState) => state.shoppingCart.products);
  return (
    <div>
      {shpCart.map((product) =>
      <div className=' flex justify-between w-full'>
        <div className=' flex flex-col'>
          <div>
            <Image src={product.img} alt='' width={50} height={50} />
          </div>

          <div>
            ${product.price}
          </div>
        </div>


        <div>
          {product.name}
        </div>


        <div>
          {product.qnt.toString()}
        </div>
      </div>
      )}
    </div>
  )
}

export default CartProduct