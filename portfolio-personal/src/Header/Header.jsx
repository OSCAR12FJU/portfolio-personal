// import React from "react";

const Header = () =>{
    return(
        <header className="flex justify-center items-center py-5 w-full xl:w-[1120px] mx-auto">
            {/* <img 
            className="rounded-full w-12 h-12" 
            src="https://avatars.githubusercontent.com/u/1561955?v=4" 
            alt="" />  */}
            <nav className="flex flex-row gap-x-10 opacity-80"> 
                <a href="#">Inicio</a >
                <a href="#experiencie">Sobre mí</a>
                <a href="#project">Proyectos</a>
                <a href="#">Contacto</a>
            </nav>
        </header>
        
    )
}
export default Header;
