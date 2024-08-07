'use client';

import React, { useEffect, useState } from 'react'
import Product from './Product';
import { VscLoading } from 'react-icons/vsc';
import SortAllProducts from './SortAllProducts';
import SortBy from './SortBy';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import NothingFound from './NothingFound';

interface productType {
    _id: string,
    name: string,
    description: string,
    price: number,
    image: string
}

const AllProducts = () => {
    const sortByName = useSelector((state: RootState) => state.sortBy.name);
    const sortBy = useSelector((state: RootState) => state.sortBy);
    const [productList, setProductList] = useState<productType[]>([]);
    const [loaded, setLoaded] = useState(false);

    const getAllProducts = async () => {
        try{
        const res = await fetch(`/api/getAllProducts`, {
            method: 'GET',
            headers: {
                'name': sortBy.name,
              'sortBy': sortBy.option,
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
          setLoaded(true);
        }
        catch(err){
            console.error('Error fetching products:', err);
        }
    }

    const [hideLoading, setHideLoading] = useState(' ');

    useEffect(() => {
        getAllProducts();
        if(loaded)
        setHideLoading(' hidden');
        else
        setHideLoading(' ');
    }, [loaded, sortBy])

  return (
    
    <div className=' mt-20 flex flex-col'>
        <div className=' flex w-full justify-between px-3 py-6 shadow-md'>
            <div className=' w-[50%]'>
                <SortAllProducts />
            </div>

            <div>
                <SortBy />
            </div>
        </div>
        {(productList.length != 0 && loaded)?
        <div className=' grid-cols-2 tb:grid-cols-6 grid w-[100%] mx-auto gap-y-2 mb-10 p-2'>
            {productList.map((product) => (
                <div>
                    <Product image={'/' + product.image} name={product.name} description={product.description} price={product.price} id={product._id}/>
                </div>
            ))}
        </div>
        :
            sortByName.length != 0?  <NothingFound /> : ''
        }
        <div className={" w-screen h-screen flex items-center " + hideLoading}>
            <VscLoading  className={" text-6xl animate-spin text-gray-400 m-auto"}/>
        </div>
    </div>
  )
}

export default AllProducts