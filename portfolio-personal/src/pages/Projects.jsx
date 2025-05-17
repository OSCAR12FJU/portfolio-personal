import Git from "../icons/Git";
import { GoIcon } from "../icons/GoIcon";
import Link from "../icons/Link";
import { NextIcon } from "../icons/NextIcon";
import { ReactIcon } from "../icons/ReactIcon";
import { TailwindIcon } from "../icons/TailwinIcon";
import InventoryBook from "../files/InventoryBook.png";
import ServantTienda from "../files/ServantTienda.png"
import OnlineInacart from "../files/OnlineInacart.png"

import { TsIcon } from "../icons/TsIcon";
import Code from "../icons/Code";
import Github from "../icons/GitHub";

const TAGS = {
  NEXT: {
    name: 'Next.js',
    className: 'bg-naranjaTransparente text-naranja ',
    icon:(
      <NextIcon />
    ),
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    className: 'bg-verdeTransparente text-verde ',
    icon:(
      <TsIcon />
    ),
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    className: 'bg-violetaTransparente text-violeta',
    icon: (
      <TailwindIcon />

    )
  },
  GOLANG: {
    name: 'Golang',
    className: 'bg-celesteTransparente text-celeste ',
    icon: (
      <GoIcon />

    )
  },
  REACT: {
    name: 'React Js',
    className: 'bg-naranjaTransparente text-naranja',
    icon: (
      <ReactIcon />

    )
  },
};

const PROJECTS = [
  {
    title: 'E-ccommerce de Servant Argentina',
    description: 'Este proyecto es una aplicación e-commerce desarrollada en React y TypeScript con backend en Go y estilización en Tailwind CSS. Ofrece visualización detallada de productos, un carrito de compras dinámico para seleccionar y ajustar cantidades, y enrutamiento estructurado en React. Sin dependencias externas.',
    link: 'https://inventory-book-ten.vercel.app/',
    github: 'https://github.com/OSCAR12FJU/inventory_book',
    image: ServantTienda,
    tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.GOLANG],
  },
  {
    title: 'Inventario de Biblioteca',
    description: 'Esta es la estructura del front-end de una página del sistema de bibliotecas creada con React.js. Utiliza una API desarrollada en Go (Golang) que está conectada a una base de datos PostgreSQL.',
    link: 'https://e-ccommerce-servant.vercel.app/',
    github: 'https://github.com/OSCAR12FJU/e-ccommerce-servant',
    image: InventoryBook,
    tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.GOLANG],
  },
  {
    title: 'E-ccomerce Inacart',
    description: 'Tienda online organizada por categorías, con funcionalidades completas y diseño responsivo que garantiza buena experiencia en todos los dispositivos. Página de producto con lógica clara y fácil navegación.',
    link: 'https://front-eccomerce-rose.vercel.app/',
    github: 'https://github.com/OSCAR12FJU/front-eccomerce',
    image: OnlineInacart,
    tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.GOLANG],
  },
];


const Projects = () =>{

    return(

    <section id="Prokect" className="relative min-h-[90vh] flex items-center pt-16 pb-10">
      <div className="container relative z-2">
      <h2 className='text-3xl font-semibold mb-10 flex gap-x-3  items-center' id="Project" >
        <Code className="size-8"/>
        Proyectos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 relative">

      {PROJECTS.map(({ title, description, tags, link, github, image}) => ( 
        //////////////////////////////////////////////7
        <div key={title} style={{opacity: 1, transform: "none"}}>
          <div className="rounded-xl overflow-hidden hover-glow h-full flex flex-col group border border-border bg-card">

            <div className="overflow-hidden">
              <img 
              src={image}
              alt={`Portada del proyecto ${title}`} 
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              crossOrigin="anonymous"/>
            </div>
              <div className="flex flex-col space-y-1.5 p-6">
                <h4 className="font-semibold leading-none tracking-tight group-hover:text-gradient transition-all duration-300 line-clamp-2">{title}</h4>
                <p className="text-sm text-secondary line-clamp-3">{description}</p>
              </div>

            {/* //Aca vamos a poner los items-stack */}
            <div className="flex flex-wrap gap-2 pt-0 p-6">
            {tags.map((tag, index) => (
              // <li key={index}>
               <span 
               key={index} 
               className={`flex gap-x-2 rounded-full text-xs ${tag.className} px-2 py-1`}>
               {/* {tag.icon} */}
               {tag.name}</span>
              //  <span 
              //  key={index} 
              //  className={`bg-background border-1.5 border-border  text-zinc-300 px-2 py-1 text-xs rounded-full backdrop-blur-sm`}>
              //  {tag.name}</span>
              //  </li>
             ))}

            </div>
            <div className="flex items-center justify-between pt-0 p-6">
            <a className="rounded-xl border-1.5 border-border bg-background  flex justify-center items-center gap-x-2 py-3 px-3 md:py-2 md:px-4 text-sm md:text-base hover:bg-primary hover:scale-110 transition" href="">
            <Github className="size-4 md:size-6 w-6 h-6" />
            GitHub
           </a>

            <a target="_blank" className="rounded-xl bg-primary flex justify-center items-center gap-x-2 py-3 px-3 md:py-2 md:px-4 text-sm md:text-base hover:scale-110  font-medium transition text-white/90" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-link h-5 w-5 "><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            Demo
            </a>
            </div>
          </div>

        </div>
        
       ))}
      </div>


      </div>
    </section>

    )
}
export default Projects;