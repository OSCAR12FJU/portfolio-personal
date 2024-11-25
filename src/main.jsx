import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "@fontsource-variable/onest"; 
import { Skills } from './pages/Skills.jsx';
import SectionContainer from './components/SectionContainer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <SectionContainer>

    <Skills />
    </SectionContainer> */}
  </StrictMode>,
)
