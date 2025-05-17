import Header from './Header/Header'
import Presentation from './pages/Presentation'
import SectionContainer from './components/SectionContainer'
import Footer from './Footer/Footer'
import Projects from './pages/Projects'
import Code from './icons/Code'
import Experience from './pages/Experience'
import About from './pages/About'
import { BrainIcon } from './icons/BrainIcon'
import { Skills } from './pages/Skills'
import { AboutIcon } from './icons/AboutIcon'
import './index.css'

function App() {


  return (
    <>
    <Header />
    <main className='px-4'>
      <Presentation  /> 
      <Experience />      
      <Skills />    
      <Projects />
      <About />
    </main>
    <Footer />
    
    </>
  )
}

export default App
