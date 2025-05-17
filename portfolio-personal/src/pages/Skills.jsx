import { useState } from "react";
import { LENGUAJES, LIBRARY, DATABASE, NUBE } from "../utils/API";
import { BrainIcon } from "../icons/BrainIcon";


export const Skills = () =>{
    const [acordionOpen, setAcordionOpen] = useState(false);
    const [acordionOpenLi, setAcordionOpenLi] = useState(false);
    const [acordionOpenDa, setAcordionOpenDa] = useState(false);
    const [acordionOpenNu, setAcordionOpenNu] = useState(false);

    const handleOpenAcordion = () => setAcordionOpen((prevdata) => !prevdata)
    const handleOpenAcordionLi = () => setAcordionOpenLi((prevdata) => !prevdata)
    const handleOpenAcordionDa = () => setAcordionOpenDa((prevdata) => !prevdata)
    const handleOpenAcordionNu = () => setAcordionOpenNu((prevdata) => !prevdata)

    return(
    <section id="SoftSkills" className="relative min-h-[90vh] flex items-center pt-16 pb-12">

    <div className="container relative z-2">

    <h2 className='text-3xl font-semibold mb-10 flex gap-x-3  items-center' id="Experiencie">
      <BrainIcon className="size-9"/>
       Tecnologias
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
    {/* Lenguajes */}
    <div className="flex flex-col justify-start items-center 
    text-start px-3 py-4">
        <h3 className="font-semibold mb-4" >Lenguajes</h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {LENGUAJES.slice(0, acordionOpen ? LENGUAJES.length : 4).map((lenguaje, index) => (
        <div className="flex flex-col justify-center items-center transition-all duration-500" key={index}>
          {lenguaje.tec}
          <span className="mt-2 text-md text-secondary font-normal">{lenguaje.name}</span>
        </div>
      ))}
        
        </div>
        <button
        onClick={handleOpenAcordion}
        className={`mt-6 px-4 py-2 bg-card border-1.5 border-border rounded-xl hover:bg-primary hover:scale-110 transition ${LENGUAJES.length < 4 ? 'hidden' : 'flex'}`}>
            {acordionOpen ? "Ver menos" : "Ver más"}
        </button> 
    </div>
    {/* Librerias */}
    <div className="flex flex-col justify-start items-center 
    text-start  px-3 py-4">
        <h3 className="font-semibold mb-4" >Librerias y Frameworks</h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {LIBRARY.slice(0, acordionOpenLi ? LIBRARY.length : 4).map((lib, index) => (
        <div className="flex flex-col justify-center items-center transition-all duration-500" key={index}>
          {lib.tec}
          <span className="mt-2 text-center text-secondary text-md font-normal">{lib.name}</span>
        </div>
      ))}
        
        </div>
        <button
        onClick={handleOpenAcordionLi}
        className={`mt-6 px-4 py-2 bg-card border-1.5 border-border rounded-xl hover:bg-primary hover:scale-110 transition ${LIBRARY.length < 4 ? 'hidden' : 'flex'}`}>
            {acordionOpenLi ? "Ver menos" : "Ver más"}
        </button> 
    </div>
    {/* Base de Dato */}
    <div className="flex flex-col justify-start items-center 
    text-start  px-3 py-4">
        <h3 className="font-semibold mb-4" >Bases de Datos y Nube</h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {DATABASE.slice(0, acordionOpenDa ? DATABASE.length : 4).map((Da, index) => (
        <div className="flex flex-col justify-center items-center transition-all duration-500" key={index}>
          {Da.tec}
          <span className="mt-2 text-md text-secondary font-normal">{Da.name}</span>
        </div>
      ))}
        
        </div>
        <button
        onClick={handleOpenAcordionDa}
        className={`mt-6 px-4 py-2 bg-card border-1.5 border-border rounded-xl font-medium hover:bg-primary hover:scale-110 transition ${DATABASE.length < 4 ? 'hidden' : 'flex'}`}>
            {acordionOpenDa ? "Ver menos" : "Ver más"}
        </button> 
    </div>

   {/* Otras tecnologias */}
    <div className="flex flex-col justify-start items-center 
    text-start  px-3 py-4">
        <h3 className="font-semibold mb-4 " > Otras Tecnologias</h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {NUBE.slice(0, acordionOpenNu ? NUBE.length : 4).map((Nu, index) => (
        <div className="flex flex-col justify-center items-center transition-all duration-500" key={index}>
          {Nu.tec}
          <span className="mt-2 text-md text-secondary  font-normal">{Nu.name}</span>
        </div>
      ))}
        
        </div>
        <button
        onClick={handleOpenAcordionNu}
        className={`mt-6 px-4 py-2 bg-card border-1.5 border-border hover:bg-primary hover:scale-110 transition ${NUBE.length <= 4 ? 'hidden' : 'flex'}`}>
            {acordionOpenLi ? "Ver menos" : "Ver más"}
        </button> 
    </div>
   
   
  
    </div>

    </div>
    </section>

    )
}