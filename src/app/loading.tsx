import Header from "@/components/Header/Header";
import { VscLoading } from "react-icons/vsc";

export default function Loading(){

    return <div>
        
        <Header />

        <div className=" h-screen w-screen flex items-center">
            <VscLoading className=" text-6xl m-auto animate-spin" />
        </div>
    </div>
}