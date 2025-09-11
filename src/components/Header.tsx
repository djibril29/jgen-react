
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, Search, Facebook, Instagram, Linkedin } from 'lucide-react'
import jgenLogo from '@/assets/images/logos/logo-jgen.png'
import i18n from '@/i18n'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { sanityClient } from '@/lib/sanity'
import { programsList } from '@/lib/queries'

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
  const { t } = useTranslation()
  const [programLinks, setProgramLinks] = useState<{ slug: string; title: string }[]>([])

  useEffect(() => {
    sanityClient.fetch(programsList)
      .then((res: any[]) => {
        const items = (res || []).map((p: any) => ({ slug: p.slug, title: p.title }))
        setProgramLinks(items)
      })
      .catch((err) => {
        console.error('Failed to load programs for header', err)
        setProgramLinks([])
      })
  }, [])

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

  const changeLang = (lng: 'fr' | 'en') => {
    i18n.changeLanguage(lng)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex justify-between items-center relative">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            
            <img src={jgenLogo} alt="J-GEN Sénégal" className="h-8 w-auto" />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 absolute left-1/2 -translate-x-1/2">
            <Link to="/" className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/a-propos" className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors">
              {t('nav.about')}
            </Link>
            
            {/* Menu déroulant Programmes */}
            <div className="relative">
              <button 
                onClick={togglePrograms}
                className="flex items-center text-gray-700 hover:text-[#E81F74] font-medium transition-colors"
              >
                {t('nav.programs')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isProgramsOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg py-2 z-10">
                  {programLinks.length === 0 && (
                    <Link 
                      to="/nos-programmes" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FDE8F0] hover:text-[#E81F74]"
                      onClick={() => setIsProgramsOpen(false)}
                    >
                      {t('nav.programs')}
                    </Link>
                  )}
                  {programLinks.map((p) => (
                    <Link 
                      key={p.slug}
                      to={`/programme/${p.slug}`} 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FDE8F0] hover:text-[#E81F74]"
                      onClick={() => setIsProgramsOpen(false)}
                    >
                      {p.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/blog" className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors">
              {t('nav.blog')}
            </Link>
            <Link to="/ressources" className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors">
              {t('nav.resources')}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors">
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Bouton CTA + Icons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <div className="hidden md:flex items-center space-x-2 mr-1 lg:mr-2">
              <button onClick={() => changeLang('fr')} className="text-sm text-gray-600 hover:text-[#E81F74]">FR</button>
              <span className="text-gray-300">|</span>
              <button onClick={() => changeLang('en')} className="text-sm text-gray-600 hover:text-[#E81F74]">EN</button>
            </div>
            <button 
              onClick={scrollToNewsletter}
              className="bg-[#E81F74] text-white px-4 md:px-5 lg:px-6 py-2 rounded-full font-medium hover:bg-[#E81F74]/90 transition-opacity text-sm md:text-sm lg:text-base"
            >
              {t('nav.newsletter')}
            </button>
            <button className="text-gray-600 hover:text-[#E81F74]" aria-label="Recherche" onClick={() => setShowSearch((v) => !v)}>
              <Search className="h-5 w-5" />
            </button>
            <div className="hidden lg:flex items-center space-x-4">
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

              <div className="flex items-center gap-3 pt-1">
                <button onClick={() => changeLang('fr')} className="text-xs text-gray-700">FR</button>
                <span className="text-gray-300">|</span>
                <button onClick={() => changeLang('en')} className="text-xs text-gray-700">EN</button>
              </div>

              <Link 
                to="/" 
                className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors"
                onClick={toggleMenu}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/a-propos" 
                className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors"
                onClick={toggleMenu}
              >
                {t('nav.about')}
              </Link>
              <Link 
                to="/nos-programmes" 
                className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors"
                onClick={toggleMenu}
              >
                {t('nav.programs')}
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors"
                onClick={toggleMenu}
              >
                {t('nav.blog')}
              </Link>
              <Link 
                to="/ressources" 
                className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors"
                onClick={toggleMenu}
              >
                {t('nav.resources')}
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-[#E81F74] font-medium transition-colors"
                onClick={toggleMenu}
              >
                {t('nav.contact')}
              </Link>
              <button 
                onClick={() => { scrollToNewsletter(); toggleMenu(); }}
                className="bg-[#E81F74] text-white px-6 py-2 rounded-full font-medium hover:bg-[#E81F74]/90 transition-opacity text-center"
              >
                {t('nav.newsletter')}
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
