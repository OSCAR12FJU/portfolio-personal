import './App.css'
import Header from './Header/Header'
import Presentation from './pages/Presentation'
import SectionContainer from './components/SectionContainer'
import BriefCase from './icons/BriefCase'
import Footer from './Footer/Footer'
import Projects from './pages/Projects'
import Code from './icons/Code'
import Experience from './pages/Experience'

function App() {
  return (
    <>
    <Header />
    <main className='px-4'>
     <SectionContainer className='py-44 pb-24'>
      <Presentation /> 
     </SectionContainer>
     <SectionContainer id="experiencie">
      <h2 className='text-3xl font-semibold mb-10 flex gap-x-3  items-center text-white'>
      <BriefCase className="size-7"/>
      Experiencia laboral
      </h2>
      <Experience />
     </SectionContainer>
  
     <SectionContainer id="project" title="Proyectos">
     <h2 className='text-3xl font-semibold mb-10 flex gap-x-3  items-center text-white'>
     <Code className="size-8"/>
      Proyectos
    </h2>
      <Projects />
     </SectionContainer>
    </main>
    <Footer />
    
    </>
  )
}

export default App
