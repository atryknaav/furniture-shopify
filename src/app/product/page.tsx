'use client';

import { Inter, Oswald } from "next/font/google";
import { useEffect, useState } from "react";



const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] })

export default function Home() {

  const fetchProducts = async () => {

    try {
      const res = await fetch("/api/getProduct");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      const products = await JSON.stringify(data);
      console.log("This is the name of product:" + products + ", with the type of " + typeof products)
      // const products = await res.json();
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((products) => {
      setProducts(products);
      console.log([products])
    })
  }, [])

  return (
    <div className=" ">
      HI THIS IS A PAGE FOR{null} {products}
    </div>
  );
}





