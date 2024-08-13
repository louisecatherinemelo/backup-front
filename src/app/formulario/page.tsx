import RegistrationForm from "@/components/Formulario";
import Header from "@/components/Header";
import Menu from "@/components/Menu"


export default function Page(){
    return(
        <>
            
            <Header/>
            <div className="flex">
            
                <Menu/>
                <div className="w-4/5 px-4 ">
                <RegistrationForm/>
                </div>
            </div>
            
        </>
    )
}