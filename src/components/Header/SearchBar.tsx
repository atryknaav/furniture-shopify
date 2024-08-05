import Link from 'next/link';
import React, { useState } from 'react'

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
    <div className=' group w-full px-3 items-center flex flex-col'>
        <input type="text" placeholder='What are you looking for?' value={inputValue} className=' outline-none w-full border-b-2 border-black px-3' onChange={(e) => {
            setInputValue(e.target.value);
            searchProducts(e.target.value);
            console.log('requested')
            if(e.target.value.length === 0)setProductList([]);
        
    
        }}/>
        <div className=' absolute bg-white group-focus-within:flex hidden flex-col top-12 gap-3 max-w-[50%]'>
            {(inputValue.length !== 0)?
            productList.map((product) => (
                <Link href={'/product?id=' + product._id}>
                <div className=' hover:cursor-pointer hover:bg-zinc-300'>
                    {product.name}
                </div>
                </Link>
            ))
        : ''}
        </div>
    </div>
  )
}

export default SearchBar