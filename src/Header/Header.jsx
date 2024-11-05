// import React from "react";

import { useState } from "react";
import NavItem from "../components/NavItem";
import { useEffect } from "react";

const Header = () =>{
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return(
        
        <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
            <nav className={`flex  justify-center items-center px-3 text-sm font-medium rounded-full text-gray-200 ${isScrolled ? 'bg-[#1E2736] shadow-lg' : 'bg-transparent'}`}> 
              <NavItem link="#Experiencie" text="Experiencia"/>
              <NavItem link="#Project" text="Proyectos"/>
              <NavItem link="#About" text="Sobre mí"/>
              <NavItem link="#Contact" text="Contacto"/>
            </nav>
        </header>
        
    )
}
export default Header;
