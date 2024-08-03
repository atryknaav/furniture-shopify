'use client';

import React from 'react'
import Option from './Option'
// import { HeartIcon } from '@radix-ui/react-icons'
import { BiHeart } from 'react-icons/bi'
import Link from 'next/link'
import ShoppingCart from './ShoppingCart'
import StoreProvider from '@/redux/StoreProvider'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { toggle } from '@/redux/slices/showCartSlice'
import { FiShoppingBag } from 'react-icons/fi';
import { VscThreeBars } from 'react-icons/vsc';
import { toggleMenu } from '@/redux/slices/menuShowSlice';
import Menu from './Menu';

const Header = () => {
    const menuOn = useSelector((state: RootState) => state.menuOn);
    const dispatch = useDispatch();

    const hide = menuOn? ' flex' : ' hidden';
  return (
    <StoreProvider>
    <div className=' flex-col flex select-none'>
        <div className=' flex justify-between text-lg gap-30 py-4 px-14 fixed  w-screen shadow-md top-0 left-0 z-20 bg-white'>
            <div className=' tb:flex justify-between w-[35%] hidden'>
                <Option name={'Products'} link='/'/>
                <Option name={'Outdoor Furniture'} link='/outdoor' />
                <Option name={'Our Material'} link='/material' />
                <Option name={'About Us'} link='/about' />
            </div>

            <div className=' flex justify-center tb:w-[30%] w-full text-3xl '>
                <Link href={'/'}>
                MARREJ
                </Link>
            </div>

            <div className=' tb:flex justify-between gap-8 w-[35%] hidden'>

                <input type="text" placeholder='What are you looking for?' className=' outline-none w-full border-b-2 border-black px-3'/>

                <select name="currency" id="currency-select" className=' font-bold'>
                    <option value="usd">USD$</option>
                    <option value="eur">EUR&#8364;</option>
                    <option value="uah">UAH&#8372;</option>
                </select>

                <div className=' flex gap-6 items-center'>
                    <BiHeart className=' text-3xl'/>
                    <FiShoppingBag className=' text-3xl hover:cursor-pointer' onClick={() => {dispatch(toggle())}}/>
                </div>
            </div>

            <div className=' peer tb:hidden flex justify-end text-3xl items-center -mr-10'>
                <VscThreeBars  onClick={() => dispatch(toggleMenu())}/>

            </div>

            <ShoppingCart />

        </div>
            <Menu />
    </div>
    </StoreProvider>
  )
}

export default Header