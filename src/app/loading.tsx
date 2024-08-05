import { VscLoading } from "react-icons/vsc";

export default function Loading(){
    return(
        <div className={" w-screen h-screen flex items-center"}>
            <VscLoading  className={" text-6xl animate-spin text-gray-400 m-auto"}/>
        </div>
    )
}