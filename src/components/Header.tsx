
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import jgenLogo from '@/assets/images/logos/jgen-logo.svg'

/**
 * Composant Header - Barre de navigation principale du site
 * Affiche le logo de J-GEN et les liens de navigation
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProgramsOpen, setIsProgramsOpen] = useState(false)

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

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            
            <img src={jgenLogo} alt="J-GEN Sénégal" className="h-8 w-auto" />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
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

          {/* Bouton CTA */}
          <div className="hidden md:block">
            <button 
              onClick={scrollToNewsletter}
              className="bg-[#E81F74] text-white px-6 py-2 rounded-full font-medium hover:bg-[#E81F74]/90 transition-opacity"
            >
              Newsletter
            </button>
          </div>

          {/* Bouton menu mobile */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Navigation Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
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
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
