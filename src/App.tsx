
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ProgramsPage from './pages/Programs'
import BlogPage from './pages/Blog'
import BlogPost from './pages/BlogPost'
import ResourcesPage from './pages/Resources'
import ContactPage from './pages/Contact'
import ResourceView from './pages/ResourceView'
import UEFProgram from './pages/programs/UEFProgram'
import JeunesVolontairesProgram from './pages/programs/JeunesVolontairesProgram'
import LiggeeyalElegProgram from './pages/programs/LiggeeyalElegProgram'
import PasAPasProgram from './pages/programs/PasAPasProgram'
import ProscidesProgram from './pages/programs/ProscidesProgram'
import EllesAussiProgram from './pages/programs/EllesAussiProgram'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/nos-programmes" element={<ProgramsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/ressources" element={<ResourcesPage />} />
        <Route path="/ressources/:slug" element={<ResourceView />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Programmes (statiques) */}
        <Route path="/programme/universite-ete-feministe" element={<UEFProgram />} />
        <Route path="/programme/jeunes-volontaires" element={<JeunesVolontairesProgram />} />
        <Route path="/programme/liggeeyal-eleg" element={<LiggeeyalElegProgram />} />
        <Route path="/programme/pas-a-pas" element={<PasAPasProgram />} />
        <Route path="/programme/proscides" element={<ProscidesProgram />} />
        <Route path="/programme/elles-aussi" element={<EllesAussiProgram />} />
      </Routes>
    </HashRouter>
  )
}
