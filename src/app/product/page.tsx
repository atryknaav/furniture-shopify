'use client';

import Header from "@/components/Header/Header";
import { Inter, Oswald } from "next/font/google";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import BuyButton from "@/components/BuyButton/BuyButton";
import { Provider, useDispatch, useSelector } from "react-redux";

import {add, remove} from '@/redux/slices/cartSlice'
import { RootState } from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });

export default function Home() {
  const searchParams = useSearchParams(); 
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imageStr, setImageStr] = useState('');
  

  useEffect(() => {
  
    const fetchProducts = async () => {
      const id = searchParams.get('id'); 
      console.log("URL ID: " + id);

      try {
        const res = await fetch(`/api/getProduct?id=${id}`, {
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

        setName(products.name);
        setDesc(products.description);
        setPrice(products.price);
        setImageStr(products.image);
        setImgLoaded(true);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts(); 

  }, [searchParams]); 

  const source = '/' + imageStr;
  const id = searchParams.get('id')


  
const shpCart = useSelector((state: RootState) => state.shoppingCart.products);
const dispatch = useDispatch();




  return (
  
      <div>
  <Header />

  <div className=" mt-20 flex p-3">

    <div className=" flex flex-col w-full text-2xl">
      <div>
        {name}
      </div>
      <div className=" w-full my-6 border-y-[1px]">
        {<Image src={source} alt="" width={700} height={500} placeholder = 'blur' blurDataURL="/ProductCarousel/1.png" priority
        className={(imgLoaded?` `:` hidden`) + ' w-full] '}/>}
      </div>
      <div className=" p-3 font-bold text-2xl text-zinc-700">
        ${price}
      </div>
    </div>

    <div className=" flex flex-col items-center m-auto p-40 border-l-[1px] h-full text-xl w-max-[30%] w-fit">
      <div>
        {desc}
      </div>

      <div className=" mt-20 " onClick={() => {dispatch(add([name, id, price]))}}>
        <BuyButton />
        {/* {shpCart.map((e) => e.name)} */}
      </div>
        <div onClick={() => {dispatch(remove(id))}} className=" bg-slate-500 select-none mt-10">remove</div>

    </div>

  </div>
</div>
  );
}

