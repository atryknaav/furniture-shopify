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
import Footer from "@/components/Footer/Footer";
import { toggle } from "@/redux/slices/showCartSlice";
import { VscLoading } from "react-icons/vsc";

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

const [hide, setHide] = useState(' hidden');
const [hideLoading, setHideLoading] = useState(' ');

useEffect(() => {
  if (imgLoaded){
    setHide(' ');
    setHideLoading(' hidden');
  }
}, [imgLoaded])



  return (
  
      <div className=" flex flex-col">
  <Header />

  <div className={" mt-20 flex-col tb:flex-row flex tb:p-3" + hide}>

    <div className=" flex flex-col w-full text-2xl">
      <div className=" mx-auto">
        {name}
      </div>
      <div className=" w-full my-6 border-y-[1px] ">
        {<Image src={source} alt="" width={700} height={500} placeholder = 'blur' blurDataURL="/ProductCarousel/1.png" priority
        className={(imgLoaded?` `:` hidden`) + ' tb:w-[90%] w-20% m-auto p-6 tb:p-0'}/>}
      </div>
    </div>

    <div className=" flex flex-col items-center m-auto text-lg  p-3 tb:p-40 tb:border-l-[1px] h-full tb:text-xl w-[90%] tb:w-max-[30%] tb:w-fit">
      <div>
        {desc}
      </div>

      <div className=" p-3 font-semibold text-2xl text-zinc-500 flex items-start w-full mt-10">
        {imgLoaded? '$' : ''}{price}
      </div>
      <div className={" mt-20 " + hide} onClick={() => {dispatch(add([name, id, price, source])); dispatch(toggle())}}>
        <BuyButton />
      </div>

    </div>


  </div>
    <div className={" w-screen h-screen flex items-center" + hideLoading}>
      <VscLoading  className={" text-6xl animate-spin text-gray-400 m-auto"}/>
    </div>
    <Footer />
</div>
  );
}

