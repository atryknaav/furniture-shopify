'use client';

import Header from "@/components/Header/Header";
import { Inter, Oswald } from "next/font/google";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import fs from 'fs';
import Image from "next/image";
import BuyButton from "@/components/BuyButton/BuyButton";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });

export default function Home() {
  const searchParams = useSearchParams(); // Using useSearchParams hook correctly at the top level

  // State variables to store product details
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imageStr, setImageStr] = useState('');

  const imgW = screen.width/3;

  useEffect(() => {
    // Fetch product data when the component mounts or when searchParams change
    const fetchProducts = async () => {
      const id = searchParams.get('id'); // Get the 'id' from URL search parameters
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

        // Update state with product details
        setName(products.name);
        setDesc(products.description);
        setPrice(products.price);
        setImageStr(products.image);
        setImgLoaded(true);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts(); // Call fetchProducts function

  }, [searchParams]); // Dependencies array includes searchParams to re-run effect if they change

  const source = '/' + imageStr;
  return (
    <div>
      <Header />

      <div className=" mt-20 flex p-3">
        {/* HI THIS IS A PAGE FOR {name} {price} {<Image src={source} alt="" width={500} height={500} placeholder = 'blur' blurDataURL="/ProductCarousel/1.png" priority
        className={imgLoaded?` block`:` hidden`}/>}
        <div>{desc}</div> */}

        <div className=" flex flex-col w-full text-2xl">
          <div>
            {name}
          </div>
          <div className=" w-full my-6 border-y-[1px]">
            {<Image src={source} alt="" width={700} height={500} placeholder = 'blur' blurDataURL="/ProductCarousel/1.png" priority
            className={(imgLoaded?` `:` hidden`) + ' w-full] '}/>}
          </div>
          <div className=" p-3 font-bold text-2xl text-zinc-700">
            {price}
          </div>
        </div>

        <div className=" flex flex-col items-center m-auto p-40 border-l-[1px] h-full text-xl w-max-[30%] w-fit">
          <div>
            {desc}
          </div>

          <div className=" mt-20 ">
            <BuyButton />
          </div>

        </div>

      </div>
    </div>
  );
}
