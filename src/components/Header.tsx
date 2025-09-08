
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, Search, Facebook, Instagram, Linkedin } from 'lucide-react'
import jgenLogo from '@/assets/images/logos/logo-jgen.png'

/**
 * Composant Header - Barre de navigation principale du site
 * Affiche le logo de J-GEN et les liens de navigation
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProgramsOpen, setIsProgramsOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const togglePrograms = () => {
    setIsProgramsOpen(!isProgramsOpen)
  }

  const scrollToNewsletter = () => {
    const el = document.getElementById('newsletter')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const doSearch = (target: 'blog' | 'ressources' = 'blog') => {
    const q = encodeURIComponent(searchText.trim())
    if (!q) return
    setShowSearch(false)
    navigate(`/${target}?q=${q}`)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            
            <img src={jgenLogo} alt="J-GEN Sénégal" className="h-8 w-auto" />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors">
              Accueil
            </Link>
            <Link to="/a-propos" className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors">
              À propos
            </Link>
            
            {/* Menu déroulant Programmes */}
            <div className="relative">
              <button 
                onClick={togglePrograms}
                className="flex items-center text-gray-700 hover:text-[#E81F74] font-medium transition-colors"
              >
                Nos programmes
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isProgramsOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-10">
                  <Link 
                    to="/programme/universite-ete-feministe" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FDE8F0] hover:text-[#E81F74]"
                    onClick={() => setIsProgramsOpen(false)}
                  >
                    Université d'Été Féministe
                  </Link>
                  <Link 
                    to="/programme/pas-a-pas" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FDE8F0] hover:text-[#E81F74]"
                    onClick={() => setIsProgramsOpen(false)}
                  >
                    PAS À PAS
                  </Link>
                  <Link 
                    to="/programme/elles-aussi" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FDE8F0] hover:text-[#E81F74]"
                    onClick={() => setIsProgramsOpen(false)}
                  >
                    ELLES AUSSI
                  </Link>
                  <Link 
                    to="/programme/proscides" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FDE8F0] hover:text-[#E81F74]"
                    onClick={() => setIsProgramsOpen(false)}
                  >
                    PROSCIDES
                  </Link>
                  <Link 
                    to="/programme/liggeeyal-eleg" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FDE8F0] hover:text-[#E81F74]"
                    onClick={() => setIsProgramsOpen(false)}
                  >
                    LIGGEEYAL ËLËG
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/blog" className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors">
              Blog
            </Link>
            <Link to="/ressources" className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors">
              Ressources
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Bouton CTA + Icons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={scrollToNewsletter}
              className="bg-[#E81F74] text-white px-6 py-2 rounded-full font-medium hover:bg-[#E81F74]/90 transition-opacity"
            >
              Newsletter
            </button>
            <button className="text-gray-600 hover:text-[#E81F74]" aria-label="Recherche" onClick={() => setShowSearch((v) => !v)}>
              <Search className="h-5 w-5" />
            </button>
            <a href="#" className="text-gray-600 hover:text-[#E81F74]" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#E81F74]" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#E81F74]" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {/* Bouton menu mobile */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Search dropdown (desktop) */}
        {showSearch && (
          <div className="hidden md:block absolute right-4 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-full max-w-md">
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-gray-500" />
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') doSearch('blog') }}
                placeholder="Rechercher..."
                className="flex-1 outline-none text-sm"
                autoFocus
              />
            </div>
            <div className="flex justify-end gap-2 mt-3">
              <button onClick={() => doSearch('blog')} className="text-sm px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">Articles</button>
              <button onClick={() => doSearch('ressources')} className="text-sm px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">Ressources</button>
            </div>
          </div>
        )}

        {/* Navigation Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2">
                <Search className="h-4 w-4 text-gray-500" />
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') { doSearch('blog'); toggleMenu() } }}
                  placeholder="Rechercher..."
                  className="flex-1 outline-none text-sm"
                />
                <button onClick={() => { doSearch('blog'); toggleMenu() }} className="text-xs text-[#E81F74]">OK</button>
              </div>

              <Link 
                to="/" 
                className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors"
                onClick={toggleMenu}
              >
                Accueil
              </Link>
              <Link 
                to="/a-propos" 
                className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors"
                onClick={toggleMenu}
              >
                À propos
              </Link>
              <Link 
                to="/nos-programmes" 
                className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors"
                onClick={toggleMenu}
              >
                Nos programmes
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link 
                to="/ressources" 
                className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors"
                onClick={toggleMenu}
              >
                Ressources
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <button 
                onClick={() => { scrollToNewsletter(); toggleMenu(); }}
                className="bg-[#E81F74] text-white px-6 py-2 rounded-full font-medium hover:bg-[#E81F74]/90 transition-opacity text-center"
              >
                Newsletter
              </button>

              {/* Socials (mobile) */}
              <div className="flex items-center space-x-4 pt-2">
                <a href="#" className="text-gray-600 hover:text-[#E81F74]" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#E81F74]" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#E81F74]" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
