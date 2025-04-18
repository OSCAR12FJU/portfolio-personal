// import React from "react";

import { useState } from "react";
import NavItem from "../components/NavItem";
import { useEffect } from "react";
import { useTheme } from "../utils/ThemeContext";

const Header = () =>{
    const [isScrolled, setIsScrolled] = useState(false);
    const {theme, toggleTheme} = useTheme();

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
            <nav className={`flex  justify-center items-center px-3 text-sm font-medium rounded-full ${isScrolled ? 'bg-card shadow-lg' : 'bg-transparent'}`}> 
              <NavItem link="#whatMe" text="¿Quien Soy"/>
              <NavItem link="#Experiencie" text="Experiencia"/>
              <NavItem link="#Project" text="Proyectos"/>
              <NavItem link="#About" text="Sobre mí"/>
              {/* <NavItem link="#Contact" text="Contacto"/> */}
              <a
               className="pl-1 hover:text-primary cursor-pointer"
               onClick={toggleTheme}>
             {theme === 'dark' ? (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                class="lucide lucide-moon h-5 w-5"
                >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>) :
              (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  class="lucide lucide-sun h-5 w-5"
                  >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg> 
                )
            }
              </a>
            </nav>
        </header>
        
    )
}
export default Header;
