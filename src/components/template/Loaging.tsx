import loading from "../../../public/images/loading.gif"
import Image from "next/image";

export default function Loaging(){
    return (
        <div style={{zIndex: 999}} className="flex items-center justify-center h-screen">
            <Image src={loading} alt="gif carregando"/>
        </div>
    )    
}