import imgDinove from "@/img/banner_dinove.jpg";
import Image from "next/image";


export const dinoveImg = () =>{
    return(
        <div>
            <Image src={imgDinove} alt="home" width={50} height={10}/> 
            
        </div>
    );
};



