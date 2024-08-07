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
import SearchBar from './SearchBar';

const Header = () => {
    const menuOn = useSelector((state: RootState) => state.menuOn);
    const dispatch = useDispatch();

    const hide = menuOn? ' flex' : ' hidden';
  return (
    <StoreProvider>
    <div className=' flex-col flex select-none'>
        <div className=' flex justify-between text-lg gap-30 py-4 px-14 fixed  w-screen shadow-md top-0 left-0 z-20 bg-white'>
            <div className=' tb:flex justify-start gap-20 w-[35%] hidden'>
                <Option name={'Products'} link='/all-products'/>
                <Option name={'Our Material'} link='/material' />
          
            </div>

            <div className=' flex tb:static absolute left-0 right-0 mx-auto justify-center tb:w-[30%] w-fit text-3xl active:cursor-wait'>
                <Link href={'/'}>
                MARREJ
                </Link>
            </div>

            <div className=' tb:flex justify-between gap-8 w-[35%] hidden'>

                <SearchBar />

               

                <div className=' flex gap-6 items-center'>
                   
                    <FiShoppingBag className=' text-3xl hover:cursor-pointer' onClick={() => {dispatch(toggle())}}/>
                </div>
            </div>

            <div className=' peer tb:hidden flex justify-end text-3xl items-center w-screen -mr-10 gap-6'>
                <FiShoppingBag className=' text-3xl hover:cursor-pointer' onClick={() => {dispatch(toggle())}}/>
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