"use client";

// import Image from "next/image";
import { Inter, Oswald } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";
import { useSearchParams } from "next/navigation";
import { TfiFaceSmile } from "react-icons/tfi";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] })

export default function Home() {
  const price = useSearchParams().get('amount');
  return (
    <div className=" flex flex-col relative overflow-x-hidden">
      <Header />
      <div className=" w-screen h-screen flex items-center text-center flex-col m-auto justify-center gap-6">
        <h1 className=" text-4xl text-gray-400">Thank you for shopping with us!</h1>
        <h1><TfiFaceSmile className=" text-6xl text-gray-400"/></h1>
        <h2 className=" text-4xl text-gray-400">Your total is: ${price}!</h2>

      </div>
      <Footer />
    </div>
  );
}