import { PesquisaImg, CadastroImg, InicioImg } from "../../../img/data";
import React, { use } from "react";
import Link from "next/link";



const Menu: React.FC = () => {
  return (
    <div className=" w-1/5 ml-0 justify-center flex-wrap py-8 mx-auto items-stretch min-h-screen bg-slate-400 ">
        <div className="w-4/5 ml-20 justify-center flex-wrap py-10 mx-auto items-stretch min-h-screen ">
          <ul>
            <li>
              <Link href="/" className="text-lg font-bold text-gray-700 hover:no-underline">
                Início
              </Link>       
            </li>
          </ul> 
          <ul>    
            <li className="my-9">
                <Link href='/pesquisar' className="text-lg font-bold text-gray-700  hover:no-underline">Pesquisar</Link>
            </li>
          </ul>
          <ul>  
            <li className="my-9">
                <Link href="/formulario" className="text-lg font-bold text-gray-700 hover:no-underline">Novo</Link>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Menu;