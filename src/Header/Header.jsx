// import React from "react";

import NavItem from "../components/NavItem";

const Header = () =>{
    return(
        
        <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
            <nav className="flex  justify-center items-center px-3 text-sm font-medium rounded-full text-gray-200"> 
              <NavItem href="#experiencie" text="Experiencia"/>
              <NavItem href="#proyect" text="Proyectos"/>
              <NavItem href="#about" text="Sobre mí"/>
              <NavItem href="#contact" text="Contacto"/>
            </nav>
        </header>
        
    )
}
export default Header;
