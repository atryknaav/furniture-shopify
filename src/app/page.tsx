// import Image from "next/image";
import { Inter, Oswald } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className=" flex flex-col relative">
      <Header />
      <Hero />
      <ProductCarousel />
      <Footer />
    </div>
  );
}