import React from 'react'
import Option from './Option'
import { BiHeart, BiShoppingBag } from 'react-icons/bi'

const Header = () => {
  return (
    <div className=' flex justify-between text-lg gap-30 py-4 px-14 fixed w-screen shadow-sm top-0 left-0 z-10 bg-white'>
        <div className=' flex justify-between w-[30%]'>
            <Option name={'Products'} />
            <Option name={'Outdoor Furniture'} />
            <Option name={'Our Material'} />
            <Option name={'About Us'} />
        </div>

        <div className=' flex justify-center w-[50%] text-2xl'>
            <p>DANGARDEN</p>
        </div>

        <div className=' flex justify-between gap-8 w-[35%]'>

            <input type="text" placeholder='What are you looking for?' className=' outline-none w-full border-b-2 border-black px-3'/>

            <select name="currency" id="currency-select" className=' font-bold'>
                <option value="usd">USD$</option>
                <option value="eur">EUR&#8364;</option>
                <option value="uah">UAH&#8372;</option>
            </select>

            <div className=' flex gap-6 items-center'>
                <BiHeart className=' text-3xl'/>
                <BiShoppingBag className=' text-3xl'/>
            </div>
        </div>

    </div>
  )
}

export default Header