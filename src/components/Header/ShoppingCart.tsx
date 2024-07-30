'use client'
import { toggle } from '@/redux/slices/showCartSlice';
import { RootState } from '@/redux/store';
import { Cross1Icon } from '@radix-ui/react-icons';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartProducts from '../CartProduct/CartProducts';


const ShoppingCart = () => {


    const shpCart = useSelector((state: RootState) => state.shoppingCart);
    const cartOn = useSelector((state: RootState) => state.cartOn);
    const dispatch = useDispatch(); 

    const hide = cartOn? ' block' : ' hidden';

     return (
    <div className={' flex ' + hide}>
        
    <div className={' w-[70%] bg-[#1f1f1f3b] h-screen fixed top-0 left-0 z-10'} onClick={() => {dispatch(toggle())}}>
    </div>
    <div className={ `w-[30%] h-screen fixed right-0 top-0 bg-white flex flex-col border-l-[1px] border-zinc-300 `}>
        <div className=' flex items-end py-5 px-5 justify-between shadow-md'>
            <div className=' flex justify-center w-full'>
                <div>
                    SHOPPING CART
                </div>
            </div>
            <div className=' p-2 bg-zinc-200  rounded-full hover:bg-zinc-300 cursor-pointer' onClick={() => {dispatch(toggle())}}>
                <Cross1Icon/>
            </div>
        </div>
        <div className=' p-3'>
             <CartProducts />            
        </div>
        TOTAL:${shpCart.total}
    </div>
    </div>
  )
}

export default ShoppingCart