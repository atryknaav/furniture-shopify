'use client'
import { toggle } from '@/redux/slices/showCartSlice';
import { RootState } from '@/redux/store';
import { Cross1Icon } from '@radix-ui/react-icons';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


const ShoppingCart = () => {


    const shpCart = useSelector((state: RootState) => state.shoppingCart.products);
    const cartOn = useSelector((state: RootState) => state.cartOn);
    const dispatch = useDispatch(); 

    const hide = cartOn? ' block' : ' hidden';

     return (
    <div className={' w-screen bg-[#1f1f1f3b] h-screen fixed top-0 left-0 z-10' + hide} onClick={() => {dispatch(toggle())}}>
    <div className={ `w-[30%] h-screen fixed right-0 top-0 bg-white flex flex-col border-l-[1px] border-zinc-300 `}>
        <div className=' flex items-end justify-end py-5 px-5'>
            <Cross1Icon onClick={() => {dispatch(toggle())}}/>
        </div>
        <div className=' p-3'>
        {shpCart.map((e) => <div className=' flex justify-between'>
                                {e.name} ${e.price}
                            </div>)}
        </div>
    </div>
    </div>
  )
}

export default ShoppingCart