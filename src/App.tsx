
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ProgramsPage from './pages/Programs'
import BlogPage from './pages/Blog'
import BlogPost from './pages/BlogPost'
import ResourcesPage from './pages/Resources'
import ContactPage from './pages/Contact'
import ResourceView from './pages/ResourceView'
import ProgramDynamic from './pages/programs/ProgramDynamic'

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
        <Route path="/programme/:slug" element={<ProgramDynamic />} />
      </Routes>
    </HashRouter>
  )
}
