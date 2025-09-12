import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, Search, Mail, Facebook, Instagram, Linkedin } from 'lucide-react'
import jgenLogo from '@/assets/images/logos/logo-jgen.png'
import i18n from '@/i18n'
import { useTranslation } from 'react-i18next'

import { PROGRAMS } from '@/data/programs'

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
  const programLinks = PROGRAMS.map((p) => ({ slug: p.slug, title: p.title }))

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
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={jgenLogo} alt="J-GEN Sénégal" className="h-10 w-auto" />
          </Link>

          {/* Navigation Desktop - Style NOW */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-gray-800 hover:text-rose-500 font-medium transition-colors text-lg">
              {t('nav.home')}
            </Link>
            <Link to="/a-propos" className="text-gray-800 hover:text-rose-500 font-medium transition-colors text-lg">
              {t('nav.about')}
            </Link>
            
            {/* Menu déroulant Programmes */}
            <div className="relative">
              <button 
                onClick={togglePrograms}
                className="flex items-center text-gray-800 hover:text-rose-500 font-medium transition-colors text-lg"
              >
                {t('nav.programs')}
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              
              {isProgramsOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-10">
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
            
            <Link to="/blog" className="text-gray-800 hover:text-rose-500 font-medium transition-colors text-lg">
              {t('nav.blog')}
            </Link>
            <Link to="/ressources" className="text-gray-800 hover:text-rose-500 font-medium transition-colors text-lg">
              {t('nav.resources')}
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-rose-500 font-medium transition-colors text-lg">
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Icons + CTA (Desktop) - Style NOW */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language switcher */}
            <div className="flex items-center space-x-1 mr-2">
              <button onClick={() => changeLang('fr')} className="text-gray-800 hover:text-rose-500 font-medium transition-colors text-lg">FR</button>
              <span className="text-gray-800 hover:text-rose-500 font-medium transition-colors text-lg">|</span>
              <button onClick={() => changeLang('en')} className="text-gray-800 hover:text-rose-500 font-medium transition-colors text-lg">EN</button>
            </div>
            
            {/* Search icon */}
            <button 
              className="text-gray-800 hover:text-rose-500 font-medium transition-colors text-lg" 
              aria-label="Recherche" 
              onClick={() => setShowSearch((v) => !v)}
            >
              <Search className="h-5 w-5" />
            </button>
            
            {/* Contact icon */}
            <button 
              className="text-gray-800 hover:text-rose-500 font-medium transition-colors text-lg" 
              aria-label="Contact"
              onClick={scrollToNewsletter}
            >
              <Mail className="h-5 w-5" />
            </button>
            
            {/* Social icons */}
            <div className="flex items-center space-x-3 ml-2">
              <a href="#" className="text-gray-800 hover:text-rose-500 font-medium transition-colors text-lg" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-800 hover:text-rose-500 font-medium transition-colors text-lg" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-800 hover:text-rose-500 font-medium transition-colors text-lg" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-rose-500 focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Search dropdown (desktop) */}
        {showSearch && (
          <div className="hidden lg:block absolute right-4 top-full mt-2 bg-gray-200 border border-gray-200 rounded-lg shadow-lg p-3 w-full max-w-md">
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
          <nav className="lg:hidden mt-4 pb-4 bg-[#A42C64] backdrop-blur-sm rounded-lgmx-2">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-2 rounded-md border border-white/20 px-3 py-2">
                <Search className="h-4 w-4 text-white/80" />
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') { doSearch('blog'); toggleMenu() } }}
                  placeholder="Rechercher..."
                  className="flex-1 outline-none text-sm bg-transparent text-white placeholder-white/60"
                />
                <button onClick={() => { doSearch('blog'); toggleMenu() }} className="text-xs text-white">OK</button>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <button onClick={() => changeLang('fr')} className="text-xs text-white/80">FR</button>
                <span className="text-white/60">|</span>
                <button onClick={() => changeLang('en')} className="text-xs text-white/80">EN</button>
              </div>

              <Link 
                to="/" 
                className="text-white hover:text-gray-200 font-medium transition-colors"
                onClick={toggleMenu}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/a-propos" 
                className="text-white hover:text-gray-200 font-medium transition-colors"
                onClick={toggleMenu}
              >
                {t('nav.about')}
              </Link>
              <Link 
                to="/nos-programmes" 
                className="text-white hover:text-gray-200 font-medium transition-colors"
                onClick={toggleMenu}
              >
                {t('nav.programs')}
              </Link>
              <Link 
                to="/blog" 
                className="text-white hover:text-gray-200 font-medium transition-colors"
                onClick={toggleMenu}
              >
                {t('nav.blog')}
              </Link>
              <Link 
                to="/ressources" 
                className="text-white hover:text-gray-200 font-medium transition-colors"
                onClick={toggleMenu}
              >
                {t('nav.resources')}
              </Link>
              <Link 
                to="/contact" 
                className="text-white hover:text-gray-200 font-medium transition-colors"
                onClick={toggleMenu}
              >
                {t('nav.contact')}
              </Link>

              {/* Socials (mobile) */}
              <div className="flex items-center space-x-4 pt-2">
                <a href="#" className="text-white/80 hover:text-white" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-white" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-white" aria-label="LinkedIn">
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
