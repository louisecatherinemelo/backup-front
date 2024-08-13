import Image from "next/image";
import inicio from "./casa.png";
import procurar from "./procurar(1).png";
import novo from "./adicionar-documento.png"



export const InicioImg = () =>{
    return(
        <div>
            <Image src={inicio} alt="home" width={50} height={10}/> 
            
        </div>
    );
};

export const CadastroImg = () =>{
    return(
        <div>
            <Image src={novo} alt="cadastro" width={50} height={100}/>
            
        </div>
    );
};

export const PesquisaImg = () =>{
    return(
        <div>
            <Image src={procurar} alt="pesquisa" width={50} height={100}/> 
            
        </div>
    );
};

