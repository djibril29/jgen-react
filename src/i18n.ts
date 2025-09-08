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
      common: {
        viewAll: 'Voir toutes',
        readMore: 'Lire la suite',
        seeAllPrograms: 'Voir tous nos programmes',
        learnMore: 'En savoir plus',
        resetFilters: 'Réinitialiser les filtres',
        previous: 'Précédent',
        next: 'Suivant'
      },
      cta: {
        join: 'Rejoignez notre mouvement',
        volunteer: 'Devenir bénévole',
        followNews: 'Suivre nos actualités'
      },
      home: {
        news: 'Actualités',
        mission: 'Notre mission',
        programsHeadline: 'Nos programmes phares',
        programsSub: 'Découvrez nos initiatives clés qui transforment la vie des femmes et des filles au Sénégal.',
        newsGridTitle: 'Actualités',
        newsGridSub: 'Restez informé de nos dernières actions et événements.'
      },
      blog: {
        title: 'Blog & Actualités',
        description: 'Restez informé de nos actions, événements et prises de position pour les droits des femmes et des filles.',
        searchPlaceholder: 'Rechercher des articles...',
        categories: {
          all: 'Tous les articles',
          actualites: 'Actualités',
          evenements: 'Événements',
          plaidoyer: 'Plaidoyer',
          temoignages: 'Témoignages'
        },
        noneFound: 'Aucun article trouvé pour votre recherche.'
      },
      resourcesPage: {
        title: 'Ressources',
        description: 'Accédez à nos rapports, guides, outils et autres ressources pour en savoir plus sur nos actions.',
        searchPlaceholder: 'Rechercher une ressource...',
        filterTypeAll: 'Tous les types',
        yearsAll: 'Toutes les années',
        browseByCategory: 'Parcourir par catégorie',
        results: '{{count}} ressource trouvée',
        results_plural: '{{count}} ressources trouvées',
        newest: 'Plus récentes',
        mostDownloaded: 'Plus téléchargées',
        view: 'Consulter',
        download: 'Télécharger',
        noneFound: 'Aucune ressource trouvée pour votre recherche.',
        helpTitle: 'Vous ne trouvez pas ce que vous cherchez ?',
        helpText: "Nous pouvons vous aider à trouver l'information dont vous avez besoin ou vous mettre en contact avec nos experts.",
        contactTeam: 'Contacter notre équipe',
        sendEmail: 'Envoyer un email'
      },
      about: {
        title: 'À propos de J-GEN Sénégal'
      },
      footer: {
        newsletterTitle: 'Inscrivez-vous à notre newsletter',
        newsletterText: 'Recevez nos actualités et programmes directement dans votre boîte mail.',
        emailPlaceholder: 'Votre adresse email',
        subscribe: "S'inscrire",
        quickLinks: 'Liens rapides',
        programs: 'Nos programmes',
        contact: 'Contact',
        legal: 'Mentions légales',
        privacy: 'Politique de confidentialité',
        rights: 'Tous droits réservés.'
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
      common: {
        viewAll: 'View all',
        readMore: 'Read more',
        seeAllPrograms: 'See all programs',
        learnMore: 'Learn more',
        resetFilters: 'Reset filters',
        previous: 'Previous',
        next: 'Next'
      },
      cta: {
        join: 'Join our movement',
        volunteer: 'Become a volunteer',
        followNews: 'Follow our news'
      },
      home: {
        news: 'News',
        mission: 'Our mission',
        programsHeadline: 'Flagship programs',
        programsSub: 'Discover our key initiatives transforming the lives of women and girls in Senegal.',
        newsGridTitle: 'News',
        newsGridSub: 'Stay informed about our latest actions and events.'
      },
      blog: {
        title: 'Blog & News',
        description: 'Stay informed about our actions, events and positions for women’s and girls’ rights.',
        searchPlaceholder: 'Search articles...',
        categories: {
          all: 'All articles',
          actualites: 'News',
          evenements: 'Events',
          plaidoyer: 'Advocacy',
          temoignages: 'Testimonies'
        },
        noneFound: 'No articles found for your search.'
      },
      resourcesPage: {
        title: 'Resources',
        description: 'Access our reports, guides, tools and other resources to learn more about our actions.',
        searchPlaceholder: 'Search a resource...',
        filterTypeAll: 'All types',
        yearsAll: 'All years',
        browseByCategory: 'Browse by category',
        results: '{{count}} resource found',
        results_plural: '{{count}} resources found',
        newest: 'Newest',
        mostDownloaded: 'Most downloaded',
        view: 'View',
        download: 'Download',
        noneFound: 'No resources found for your search.',
        helpTitle: "Can't find what you're looking for?",
        helpText: 'We can help you find the information you need or connect you with our experts.',
        contactTeam: 'Contact our team',
        sendEmail: 'Send an email'
      },
      about: {
        title: 'About J-GEN Senegal'
      },
      footer: {
        newsletterTitle: 'Subscribe to our newsletter',
        newsletterText: 'Receive our news and programs directly in your inbox.',
        emailPlaceholder: 'Your email address',
        subscribe: 'Subscribe',
        quickLinks: 'Quick links',
        programs: 'Our programs',
        contact: 'Contact',
        legal: 'Legal notice',
        privacy: 'Privacy policy',
        rights: 'All rights reserved.'
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
      common: {
        viewAll: 'Ver todo',
        readMore: 'Leer más',
        seeAllPrograms: 'Ver todos los programas',
        learnMore: 'Saber más',
        resetFilters: 'Restablecer filtros',
        previous: 'Anterior',
        next: 'Siguiente'
      },
      cta: {
        join: 'Únete a nuestro movimiento',
        volunteer: 'Hazte voluntario',
        followNews: 'Sigue nuestras noticias'
      },
      home: {
        news: 'Noticias',
        mission: 'Nuestra misión',
        programsHeadline: 'Programas emblemáticos',
        programsSub: 'Descubre nuestras iniciativas clave que transforman la vida de las mujeres y niñas en Senegal.',
        newsGridTitle: 'Noticias',
        newsGridSub: 'Mantente al día de nuestras últimas acciones y eventos.'
      },
      blog: {
        title: 'Blog y Noticias',
        description: 'Mantente informado sobre nuestras acciones, eventos y posiciones por los derechos de las mujeres y niñas.',
        searchPlaceholder: 'Buscar artículos...',
        categories: {
          all: 'Todos los artículos',
          actualites: 'Noticias',
          evenements: 'Eventos',
          plaidoyer: 'Incidencia',
          temoignages: 'Testimonios'
        },
        noneFound: 'No se encontraron artículos para tu búsqueda.'
      },
      resourcesPage: {
        title: 'Recursos',
        description: 'Accede a nuestros informes, guías, herramientas y otros recursos para saber más sobre nuestras acciones.',
        searchPlaceholder: 'Buscar un recurso...',
        filterTypeAll: 'Todos los tipos',
        yearsAll: 'Todos los años',
        browseByCategory: 'Explorar por categoría',
        results: '{{count}} recurso encontrado',
        results_plural: '{{count}} recursos encontrados',
        newest: 'Más recientes',
        mostDownloaded: 'Más descargados',
        view: 'Ver',
        download: 'Descargar',
        noneFound: 'No se encontraron recursos para tu búsqueda.',
        helpTitle: '¿No encuentras lo que buscas?',
        helpText: 'Podemos ayudarte a encontrar la información que necesitas o ponerte en contacto con nuestros expertos.',
        contactTeam: 'Contactar a nuestro equipo',
        sendEmail: 'Enviar un correo'
      },
      about: {
        title: 'Acerca de J-GEN Senegal'
      },
      footer: {
        newsletterTitle: 'Suscríbete a nuestro boletín',
        newsletterText: 'Recibe nuestras noticias y programas directamente en tu correo.',
        emailPlaceholder: 'Tu correo electrónico',
        subscribe: 'Suscribirse',
        quickLinks: 'Enlaces rápidos',
        programs: 'Nuestros programas',
        contact: 'Contacto',
        legal: 'Aviso legal',
        privacy: 'Política de privacidad',
        rights: 'Todos los derechos reservados.'
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
    interpolation: { escapeValue: false },
    returnObjects: true
  })

export default i18n 