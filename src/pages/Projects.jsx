import Git from "../icons/Git";
import { GoIcon } from "../icons/GoIcon";
import Link from "../icons/Link";
import { NextIcon } from "../icons/NextIcon";
import { ReactIcon } from "../icons/ReactIcon";
import { TailwindIcon } from "../icons/TailwinIcon";
import InventoryBook from "../files/InventoryBook.png";
import ServantTienda from "../files/ServantTienda.png"

import { TsIcon } from "../icons/TsIcon";

const TAGS = {
  NEXT: {
    name: 'Next.js',
    className: 'bg-black text-white ',
    icon:(
      <NextIcon />
    ),
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    className: 'bg-[#003159] text-white ',
    icon:(
      <TsIcon />
    ),
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    className: 'bg-[#003159] text-white ',
    icon: (
      <TailwindIcon />

    )
  },
  GOLANG: {
    name: 'Golang',
    className: 'bg-[#003159] text-white ',
    icon: (
      <GoIcon />

    )
  },
  REACT: {
    name: 'React Js',
    className: 'bg-[#003159] text-white',
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
];


const Projects = () =>{

    return(
     <>
     {PROJECTS.map(({ title, description, tags, link, github, image}) => (
        <article key={title} className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0 mb-10">
         <div className="w-full md:w-1/2">
          <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
          <img
            className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
            src={image}
            alt={`Captura de pantalla del proyecto ${title}`}
          />
         </div>
        </div>

        <div className="w-full md:w-1/2 md:max-w-lg text-left">
          <h3 className="text-2xl font-bold text-gray-100">{title}</h3>
          
        <div className="flex flex-wrap mt-2">
          <ul className="flex gap-x-2 flex-row mb-2">
            {tags.map((tag, index) => (
              <li key={index}>
              <span className={`flex gap-x-2 rounded-full text-xs ${tag.className} px-2 py-1`}>
              {tag.icon}
              {tag.name}</span>
              </li>
            ))}
          </ul>
        <div className="mt-2 text-gray-400">
        {description}
        </div>
        <div className="flex items-end justify-start mt-4 gap-x-4">
          <a
           className="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:scale-110 hover:bg-white/10 transition"
           href={github}
           target="_blanck"
           rel="noopener noreferrer">
            <Git className="size-4 md:size-6 w-6 h-6" />
            GitHub
           </a>
          <a 
          className="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:scale-110 hover:bg-white/10 transition"
          href={link}
          target="_blanck"
          rel="noopener noreferrer">
            <Link className="size-4 md:size-6 w-6 h-6" />
            Preview
           </a>

          </div>

         </div> 
        </div>
        </article>
      ))}
     </>

    )
}
export default Projects;