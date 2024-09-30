import Github from "../icons/GitHub";
import LinkedIn from "../icons/LinkedIn";
import Mail from "../icons/Mail";
import Badge from "../utils/Badge";
import OscarLogo from "../files/OscarLogo.png"

const Presentation = () =>{
    return(
      <>
      <img 
      className="rounded-full size-12 mb-4" 
      src={OscarLogo}
      alt="Oscar Flores" /> 
      <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">¡Hola! Soy Oscar👋 <a href="https://www.linkedin.com/in/oscar-flores-6ba815260/"
      target="_blank"
      rel="noopener"
      className="flex justify-center items-center"><Badge text="Disponible para trabajar"/>
        </a>
      </h1>
      <h2 className="text-xl lg:text-2xl text-wrap text-white text-left max-w-[700px]">Un desarrollador Fullstack apasionado por crear soluciones robustas. Especializado en Golang 💪, gestiono bases de datos y diseño interfaces frontend.🚀 </h2>

      <nav className="flex gap-4 mt-8 flex-wrap">
          <a className="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs lg:text-base bg-white/5 hover:scale-110 hover:bg-white/10 transition" href="">
            <LinkedIn className="size-4 md:size-6 w-6 h-6" />
            LinkedIn
           </a>
          <a className="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:scale-110 hover:bg-white/10 transition" href="">
            <Github className="size-4 md:size-6 w-6 h-6" />
            GitHub
           </a>
          <a className="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:scale-110 hover:bg-white/10 transition" href="">
            <Mail className="size-4 md:size-6 w-6 h-6" />
            Mail
           </a>
      </nav>
      </>
    ) 

}
export default Presentation;

