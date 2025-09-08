
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ProgramsPage from './pages/Programs'
import BlogPage from './pages/Blog'
import BlogPost from './pages/BlogPost'
import ResourcesPage from './pages/Resources'
import ContactPage from './pages/Contact'
import UEFProgram from './pages/programs/UEFProgram'
import PasAPasProgram from './pages/programs/PasAPasProgram'
import EllesAussiProgram from './pages/programs/EllesAussiProgram'
import ProscidesProgram from './pages/programs/ProscidesProgram'
import JeunesVolontairesProgram from './pages/programs/JeunesVolontairesProgram'
import LiggeeyalElegProgram from './pages/programs/LiggeeyalElegProgram'
import ResourceView from './pages/ResourceView'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/nos-programmes" element={<ProgramsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/ressources" element={<ResourcesPage />} />
        <Route path="/ressources/:id" element={<ResourceView />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/programme/universite-ete-feministe" element={<UEFProgram />} />
        <Route path="/programme/pas-a-pas" element={<PasAPasProgram />} />
        <Route path="/programme/elles-aussi" element={<EllesAussiProgram />} />
        <Route path="/programme/proscides" element={<ProscidesProgram />} />
        <Route path="/programme/jeunes-volontaires" element={<JeunesVolontairesProgram />} />
        <Route path="/programme/liggeeyal-eleg" element={<LiggeeyalElegProgram />} />
      </Routes>
    </HashRouter>
  )
}
