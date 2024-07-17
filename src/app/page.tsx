import Image from "next/image";
import { Inter, Oswald } from "next/font/google";
import Header from "@/components/Header/Header";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className=" ">
      <Header />
    
    </div>
  );
}