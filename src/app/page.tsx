import Menu from "@/components/Menu";
import Header from "@/components/Header";
import { dinoveImg } from "@/components/img/img";
import Image from "next/image";



export default function Home() {
  const items = []

  return (
    <>
      <Header/>
      <div className="flex">
            
            <Menu/>
            <div className="w-4/5 px-4 ">
            <h1>img banner</h1>
                
                
     
            </div>
            </div>
      
      
      
    </>
  );
}
