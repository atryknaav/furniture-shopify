import { toggleMenu } from '@/redux/slices/menuShowSlice';
import { changeName } from '@/redux/slices/sortBySlice';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

interface productType {
    _id: string,
    name: string,
    description: string,
    price: number,
    image: string
}

const SortAllProducts = () => {
    const sortByName = useSelector((state: RootState) => state.sortBy.name);
    const [productList, setProductList] = useState<productType[]>([]);
    const [productName, setProductName] = useState('');
    const [inputValue, setInputValue] = useState('');
    
    const dispatch = useDispatch();


  return (
    <div className=' group tb:w-full px-3 items-center flex flex-col tb:static w-full'>
        <input type="text" placeholder='What are you looking for?' value={sortByName} className=' outline-none w-full border-b-2 border-black px-1 text-center tb:text-left tb:text-base text-sm' onChange={(e) => {
            dispatch(changeName([e.target.value]));   
        }}/>
        
        
    </div>
  )
}

export default SortAllProducts