
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Composant Footer - Pied de page du site
 * Affiche les informations de contact, liens rapides et réseaux sociaux
 */
export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Newsletter */}
        <div id="newsletter" className="mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">{t('footer.newsletterTitle')}</h3>
            <p className="text-gray-300 mb-6">{t('footer.newsletterText')}</p>
            <form
              className="flex flex-col sm:flex-row gap-3 justify-center"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget as HTMLFormElement
                const data = new FormData(form)
                const email = (data.get('email') as string)?.trim()
                if (!email) return
                alert('Merci pour votre inscription !')
                form.reset()
              }}
            >
              <input
                type="email"
                name="email"
                required
                placeholder={t('footer.emailPlaceholder')}
                className="w-full sm:w-96 px-4 py-3 rounded-md text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-md bg-[#E81F74] hover:bg-[#E81F74]/90 font-medium"
              >
                {t('footer.subscribe')}
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Colonne 1 - Logo et description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#E81F74] flex items-center justify-center">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <span className="text-xl font-bold">J-GEN Sénégal</span>
            </div>
            <p className="text-gray-300 mb-4">
              Agir pour les femmes et les filles à travers l'autonomisation, l'éducation et la défense des droits fondamentaux.
              Rejoignez notre mouvement pour l'égalité des genres.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#E81F74] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#E81F74] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#E81F74] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-pink-400">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/nos-programmes" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.programs')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.blog')}
                </Link>
              </li>
              <li>
                <Link to="/ressources" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.resources')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - Programmes */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-pink-400">{t('footer.programs')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programme/universite-ete-feministe" className="text-gray-300 hover:text-white transition-colors">
                  Université d'Été Féministe
                </Link>
              </li>
              <li>
                <Link to="/programme/pas-a-pas" className="text-gray-300 hover:text-white transition-colors">
                  PAS À PAS
                </Link>
              </li>
              <li>
                <Link to="/programme/elles-aussi" className="text-gray-300 hover:text-white transition-colors">
                  ELLES AUSSI
                </Link>
              </li>
              <li>
                <Link to="/programme/proscides" className="text-gray-300 hover:text-white transition-colors">
                  PROSCIDES
                </Link>
              </li>
              <li>
                <Link to="/programme/liggeeyal-eleg" className="text-gray-300 hover:text-white transition-colors">
                  LIGGEEYAL ËLËG
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 - Contact */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-pink-400">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[#E81F74] mt-0.5" />
                <span className="text-gray-300">
                  6781 Sicap Liberté 6, 2é étage Gauche, Dakar, Sénégal
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#E81F74]" />
                <span className="text-gray-300">(221) 33 805 91 39</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#E81F74]" />
                <span className="text-gray-300">jgensenegal@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} J-GEN Sénégal. {t('footer.rights')}
            </p>
            <div className="mt-4 md:mt-0">
              <Link to="/mentions-legales" className="text-gray-400 hover:text-white text-sm mx-2 transition-colors">
                {t('footer.legal')}
              </Link>
              <Link to="/politique-confidentialite" className="text-gray-400 hover:text-white text-sm mx-2 transition-colors">
                {t('footer.privacy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
