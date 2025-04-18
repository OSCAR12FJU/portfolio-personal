import Github from "../icons/GitHub";
import LinkedIn from "../icons/LinkedIn";
import Badge from "../utils/Badge";
import OscarLogo2 from "../files/OscarLogo2.png"
import OscarFloreCV from "../files/OscarFloresCV.pdf"
import { Download } from "../icons/Download";


const Presentation = ({id}) =>{
    return(
  
      <section id="whatMe" className="relative min-h-[90vh] flex items-center pt-16 pb-10 ">

      {/* //Lo vamos a probar despues */}
      {/* <div class="absolute inset-0 z-0 bg-gradient-to-br from-background to-muted" aria-hidden="true"></div> */}
      <div className="container relative z-2">
        <div className="flex gap-4 mb-4">
        <img 
        className="rounded-full size-16 border-1.5 border-border" 
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
        <h2 className="text-xl sm:text-2xl font-medium flex items-center">
        {/* <span class="inline-block w-8 sm:w-10 h-1 bg-white mr-3 sm:mr-4"></span> */}
         ¡Hola!👋
        </h2>
        <h1 className="font-bold mb-2">Soy Oscar Flores</h1>
        <p className="text-sm sm:text-base md:text-lg text-secondary max-w-xl">
        De Buenos Aires 🇦🇷. Lo que más puedo remarcar en mi experiencia en el mundo IT es mi compromiso con la investigación 🔍 y el desarrollo de soluciones eficientes 💡. Busco siempre un alto nivel de precisión y calidad en cada proyecto, explorando distintas metodologías y tecnologías emergentes 🚀 para lograr resultados innovadores y efectivos. Tengo un enfoque orientado a la mejora continua 🔄.</p>
        </div>
         <nav className="flex  gap-4 mt-8 flex-wrap" id={id}>
          <a className="rounded-xl bg-card text-foreground border-1.5 border-border flex justify-center items-center gap-x-2 py-3 px-3 md:py-2 md:px-4 text-sm md:text-base hover:bg-primary hover:text-white/90 hover:scale-110 transition " href="">
            <LinkedIn className="size-4 md:size-6 w-6 h-6" />
            LinkedIn
           </a>
          <a className="rounded-xl bg-card text-foreground border-1.5 border-border flex justify-center items-center gap-x-2 py-3 px-3 md:py-2 md:px-4 text-sm md:text-base hover:bg-primary hover:text-white/90 hover:scale-110 transition" href="">
            <Github className="size-4 md:size-6 w-6 h-6" />
            GitHub
           </a>
           <a type="button" className="inline-flex items-center gap-x-2 py-3 px-3 md:py-2 md:px-4 bg-card text-foreground border-1.5 border-border rounded-xl text-sm md:text-base hover:bg-primary hover:text-white/90 hover:scale-110  transition" href={OscarFloreCV} download="Oscar Flores CV">
           <Download className="size-4 md:size-6 w-6 h-6"/>
            Descargar CV
            </a>
          </nav>
        

  
      {/* <div className="flex flex-col justify-center items-center mb-4">
      
      </div>



        
        {/* <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-3 space-y-6 md:space-y-8 ">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium flex items-center">
              <span class="inline-block w-8 sm:w-10 h-1 bg-white mr-3 sm:mr-4"></span>
              ¡Hola!👋
              </h2>
              <h1 className="font-bold">Soy Oscar Flores</h1>
            </div>

              <p className="text-sm sm:text-base md:text-lg max-w-xl">
                Soy Oscar Flores de Buenos Aires 🇦🇷. Lo que más puedo remarcar en mi experiencia en el mundo IT es mi compromiso con la investigación 🔍 y el desarrollo de soluciones eficientes 💡. Busco siempre un alto nivel de precisión y calidad en cada proyecto, explorando distintas metodologías y tecnologías emergentes 🚀 para lograr resultados innovadores y efectivos. Tengo un enfoque orientado a la mejora continua 🔄.</p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#1E2736] text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full sm:w-auto" href="">Contactame</a>
              
              <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-white text-black shadow-sm hover:bg-accent h-9 px-4 py-2 w-full sm:w-auto" href="">Mira Mi Trabajo</a>
            </div>

            <div className="flex items-center space-x-4 sm:space-x-5 pt-3 sm:pt-4">
            <a target="_blank" rel="noopener noreferrer" className="transition-colors" aria-label="GitHub" href="https://github.com/guilhermemarch"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="h-5 w-5 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a>

            <a target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn" href="https://linkedin.com/in/guilhermemarschall"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="h-5 w-5 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a>

            <a class="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email" href="mailto:guilherme@guilhermemarschall.com.br"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="h-5 w-5 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg></a>
            </div>
          </div>
          <div className="lg:col-span-2 flex justify-center lg:justify-end  pt-4 lg:pt-0 "> 
          <div class="lg:col-span-2 flex justify-center lg:justify-end pt-0 lg:pt-0">
            <div class="relative w-full max-w-[280px] sm:max-w-sm  rounded-full shadow-md shadow-white">
              <img src={OscarLogo2} className="rounded-full"/>
            </div>
          </div>
          
          </div> */}

        {/* </div> */}

      </div>
      {/* <div className="flex flex-col justify-center gap-4 mb-4" id={id}>
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

      </div> */}
      {/* <div className="flex flex-col justify-center items-center mb-4">
      <h1 className="text-white text-4xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">¡Hola! Soy Oscar👋 
      </h1>
      
      <h2 className="text-lg text-wrap text-white text-left md:max-w-[700px]">Soy Oscar Flores de Buenos Aires 🇦🇷. Lo que más puedo remarcar en mi experiencia en el mundo IT es mi compromiso con la investigación 🔍 y el desarrollo de soluciones eficientes 💡. Busco siempre un alto nivel de precisión y calidad en cada proyecto, explorando distintas metodologías y tecnologías emergentes 🚀 para lograr resultados innovadores y efectivos. Tengo un enfoque orientado a la mejora continua 🔄.</h2>
      </div> */}

     
      </section>
    ) 

}
export default Presentation;

