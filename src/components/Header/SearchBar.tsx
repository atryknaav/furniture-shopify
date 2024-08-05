import { toggleMenu } from '@/redux/slices/menuShowSlice';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

interface productType {
    _id: string,
    name: string,
    description: string,
    price: number,
    image: string
}

const SearchBar = () => {
    const [productList, setProductList] = useState<productType[]>([]);
    const [productName, setProductName] = useState('');
    const [inputValue, setInputValue] = useState('');
    
    const dispatch = useDispatch();


    const searchProducts = async (name: string) => {
        try{
        const res = await fetch(`/api/searchProduct`, {
            method: 'GET',
            headers: {
                'name': name,
              'Content-Type': 'application/json',
            },
          });
        
  
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
  
          const data = await res.json();
          const products = data.products;
          console.log("This is the name of product: " + products + ", with the type of " + typeof products);
          setProductList(products);
        //   setProductName(products.)
        }
        catch(err){
            console.error('Error fetching products:', err);
        }
    }
  return (
    <div className=' group tb:w-full px-3 items-center flex flex-col tb:static absolute top-[20rem] w-[80%] right-0 left-0 mr-auto ml-auto'>
        <input type="text" placeholder='What are you looking for?' value={inputValue} className=' outline-none w-full border-b-2 border-black px-3 text-center tb:text-left' onChange={(e) => {
            setInputValue(e.target.value);
            searchProducts(e.target.value);
            console.log('requested')
            if(e.target.value.length === 0)setProductList([]);
        
    
        }}/>
        <div className=' absolute bg-white shadow-xl group-focus-within:flex hidden flex-col top-8 tb:top-12 max-w-[80%] max-h-[15rem] tb:max-w-[50%] overflow-y-scroll'>
            {(inputValue.length !== 0)?
            productList.map((product) => (
                <Link href={'/product?id=' + product._id}>
                <div className=' hover:cursor-pointer hover:bg-zinc-200 p-3 flex shadow-sm h-22 tb:h-20 gap-2 text-sm' onClick={() => {setInputValue(''); dispatch(toggleMenu())}}>
                    <div className=' flex flex-col'>
                        <Image src={'/'+product.image} alt='' width={50} height={50} />
                    </div>

                    <div>
                        {product.name}

                    </div>
                </div>
                </Link>
            ))
        : ''}
        </div>
    </div>
  )
}

export default SearchBar