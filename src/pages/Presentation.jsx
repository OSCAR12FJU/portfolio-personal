import Github from "../icons/GitHub";
import LinkedIn from "../icons/LinkedIn";
import Badge from "../utils/Badge";
import OscarLogo2 from "../files/OscarLogo2.png"
import OscarFloreCV from "../files/OscarFloresCV.pdf"
import { Download } from "../icons/Download";


const Presentation = () =>{
    return(
      <>
      <div className="flex gap-4 mb-4">
      <img 
      className="rounded-full size-16 shadow-lg shadow-white" 
      src={OscarLogo2}
      alt="Oscar Flores" /> 
      <a href="https://www.linkedin.com/in/oscar-flores-6ba815260/"
      target="_blank"
      rel="noopener"
      className="flex md:justify-center items-center md:hover:scale-105">
        <div className="flex items-center">
        <Badge text="Disponible para trabajar"/>
        </div>
        </a>

      </div>
      <div className="flex flex-col mb-4">
      <h1 className="text-white text-4xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">¡Hola! Soy Oscar👋 
      </h1>
      
      <h2 className="text-lg text-wrap text-white text-left md:max-w-[700px]">Soy Oscar Flores de Buenos Aires 🇦🇷. Lo que más puedo remarcar en mi experiencia en el mundo IT es mi compromiso con la investigación 🔍 y el desarrollo de soluciones eficientes 💡. Busco siempre un alto nivel de precisión y calidad en cada proyecto, explorando distintas metodologías y tecnologías emergentes 🚀 para lograr resultados innovadores y efectivos. Tengo un enfoque orientado a la mejora continua 🔄.</h2>
      </div>

      <nav className="flex gap-4 mt-8 flex-wrap">
          <a className="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-3 px-3 md:py-2 md:px-4 text-xs lg:text-base bg-white/5 hover:scale-110 hover:bg-white/10 transition " href="">
            <LinkedIn className="size-4 md:size-6 w-6 h-6" />
            LinkedIn
           </a>
          <a className="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-3 px-3 md:py-2 md:px-4 text-xs lg:text-base bg-white/5 hover:scale-110 hover:bg-white/10 transition" href="">
            <Github className="size-4 md:size-6 w-6 h-6" />
            GitHub
           </a>
           <a type="button" className="inline-flex items-center gap-x-2 py-3 px-3 md:py-2 md:px-4 bg-transparent rounded-full border border-white/10 text-xs lg:text-base bg-white/5 hover:scale-110 hover:bg-white/10 transition" href={OscarFloreCV} download="Oscar Flores CV">
           <Download className="size-4 md:size-6 w-6 h-6"/>
            Descargar CV
            </a>
      </nav>
      </>
    ) 

}
export default Presentation;

