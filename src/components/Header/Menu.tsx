'use client';

import { RootState } from '@/redux/store';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Option from './Option';
import { toggleMenu } from '@/redux/slices/menuShowSlice';
import SearchBar from './SearchBar';


const Menu = () => {
  const menuOn = useSelector((state: RootState) => state.menuOn);

    const [siteLoaded, setSiteLoaded] = useState(false);

    useEffect(() => {
      if(menuOn)
      setSiteLoaded(true);
    }, [menuOn])

    const dispatch = useDispatch();
    const hide = menuOn? ' flex animate-drop ' : siteLoaded? ' animate-rise' : ' hidden';


  return (
    <div className={` tb:hidden flex w-full fixed h-screen bg-[#f8f8f8] z-10 }` + hide}>
        <div className=' select-none absolute top-20 flex flex-col w-full justify-center items-center text-4xl font-thin  ' onClick={() => dispatch(toggleMenu())}>
                <Option name={'Products'} link='/all-products'/>
                <Option name={'Outdoor Furniture'} link='/outdoor' />
                <Option name={'Our Material'} link='/material' />
                <Option name={'About Us'} link='/about' />
        </div>
                <SearchBar />

               
    </div>
  )
}

export default Menu