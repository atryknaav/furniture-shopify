import { add, changeQnt, deleteItem, remove } from '@/redux/slices/cartSlice';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import React from 'react';
import { FaChevronLeft, FaChevronRight, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const CartProduct = () => {
  const shpCart = useSelector((state: RootState) => state.shoppingCart.products);
  const dispatch = useDispatch();
  return (
    <div className='w-full flex flex-col'>
      {shpCart.map((product) => (
        <div key={product.id} className='flex justify-between  items-center w-full border-y-[1px] mb-2'>
          <div className='flex flex-col w-fit mr-6'>
            <div className='w-full'>
              <Image src={product.img} alt={product.name} width={50} height={50} />
            </div>
            <div className=''>
              ${product.price}
            </div>
          </div>
          <div className='pl-4 flex m-auto text-left ml-0 w-max-fit '>
            <div>
            {product.name}
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div
              className='px-2 mx-2 text-2xl text-zinc-300 hover:cursor-pointer hover:text-zinc-400'
              onClick={() => dispatch(remove([product.id, product.price]))}
            >
              <FaChevronLeft />
            </div>
            <div className='w-[40px] text-center'>
              {product.qnt.toString()}
            </div>
            <div
              className='px-2 mx-2 text-2xl text-zinc-300 hover:cursor-pointer hover:text-zinc-400'
              onClick={() => dispatch(add([product.name, product.id, product.price, product.img]))}
            >
              <FaChevronRight />
            </div>
            <div
              className='text-red-500 flex hover:text-red-600 hover:cursor-pointer'
              onClick={() => dispatch(deleteItem([product.id]))}
            >
              <FaTrash />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProduct;
