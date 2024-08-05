'use client';

import React, { useEffect, useState } from 'react'
import Product from './Product';

interface productType {
    _id: string,
    name: string,
    description: string,
    price: number,
    image: string
}

const AllProducts = () => {
    const [productList, setProductList] = useState<productType[]>([]);

    const getAllProducts = async () => {
        try{
        const res = await fetch(`/api/getAllProducts`, {
            method: 'GET',
            headers: {
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


    useEffect(() => {
        getAllProducts();
    }, [])

  return (
    
    <div className=' mt-20 flex flex-col'>
        <div className=' flex '>
            <div>

            </div>

            <div>

            </div>
        </div>

        <div className=' grid-cols-5 grid w-[60%] mx-auto gap-y-10'>
            {productList.map((product) => (
                <div>
                    <Product image={'/' + product.image} name={product.name} description={product.description} price={product.price} id={product._id}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AllProducts