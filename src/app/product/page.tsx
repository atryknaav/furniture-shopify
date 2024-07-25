'use client';

import Header from "@/components/Header/Header";
import { Inter, Oswald } from "next/font/google";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import fs from 'fs';
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });

export default function Home() {
  const searchParams = useSearchParams(); // Using useSearchParams hook correctly at the top level

  // State variables to store product details
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [imageStr, setImageStr] = useState('');

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
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts(); // Call fetchProducts function

  }, [searchParams]); // Dependencies array includes searchParams to re-run effect if they change

  return (
    <div>
      <Header />

      <div className="mt-20">
        HI THIS IS A PAGE FOR {name} {desc} {price} {<Image src={'/' + imageStr} alt="" width={500} height={500} placeholder = 'blur' blurDataURL="https://dangarden.se/cdn/shop/files/1__5.jpg?v=1713525158&width=832"/>}
      </div>
    </div>
  );
}
