import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        programs: 'Nos programmes',
        blog: 'Blog',
        resources: 'Ressources',
        contact: 'Contact',
        newsletter: 'Newsletter'
      },
      cta: {
        join: 'Rejoignez notre mouvement',
        volunteer: 'Devenir bénévole',
        followNews: 'Suivre nos actualités'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        programs: 'Programs',
        blog: 'Blog',
        resources: 'Resources',
        contact: 'Contact',
        newsletter: 'Newsletter'
      },
      cta: {
        join: 'Join our movement',
        volunteer: 'Become a volunteer',
        followNews: 'Follow our news'
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Acerca de',
        programs: 'Programas',
        blog: 'Blog',
        resources: 'Recursos',
        contact: 'Contacto',
        newsletter: 'Boletín'
      },
      cta: {
        join: 'Únete a nuestro movimiento',
        volunteer: 'Hazte voluntario',
        followNews: 'Sigue nuestras noticias'
      }
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'en', 'es'],
    interpolation: { escapeValue: false }
  })

export default i18n 