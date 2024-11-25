import './App.css'
import Header from './Header/Header'
import Presentation from './pages/Presentation'
import SectionContainer from './components/SectionContainer'
import BriefCase from './icons/BriefCase'
import Footer from './Footer/Footer'
import Projects from './pages/Projects'
import Code from './icons/Code'
import Experience from './pages/Experience'
import About from './pages/About'
import { BrainIcon } from './icons/BrainIcon'
import { Skills } from './pages/Skills'
import { AboutIcon } from './icons/AboutIcon'

function App() {
  return (
    <>
    <Header />
    <main className='px-4'>
     <SectionContainer className='py-16 md:py-36 scroll-m-20 pb-24'>
      <Presentation id="Contact" /> 
     </SectionContainer>
     <SectionContainer >
      <h2 className='text-3xl font-semibold mb-10 flex gap-x-3  items-center text-white' id="Experiencie">
      <BriefCase className="size-7"/>
      Experiencia laboral
      </h2>
      <Experience />
     </SectionContainer>

     <SectionContainer >
      <h2 className='text-3xl font-semibold mb-10 flex gap-x-3  items-center text-white' id="Experiencie">
      <BrainIcon className="size-9"/>
       Tecnologias
      </h2>
      <Skills />
     </SectionContainer>
  
     <SectionContainer title="Proyects">
     <h2 className='text-3xl font-semibold mb-10 flex gap-x-3  items-center text-white' id="Project" >
     <Code className="size-8"/>
      Proyectos
    </h2>
      <Projects />
     </SectionContainer>
     <SectionContainer title="Proyectos">
     <h2 className='text-3xl font-semibold mb-10 flex gap-x-3  items-center text-white' id="About">
     <AboutIcon className="size-8"/>
      Sobre mí
    </h2>
      <About />
     </SectionContainer>
    </main>
    <Footer />
    
    </>
  )
}

export default App
