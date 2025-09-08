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
      programsPage: {
        title: 'Nos programmes',
        description: "Découvrez nos initiatives pour l'autonomisation des femmes et des filles au Sénégal.",
        filters: {
          all: 'Tous les programmes',
          education: 'Éducation',
          health: 'Santé',
          protection: 'Protection',
          childhood: 'Enfance',
          economic: 'Autonomisation économique'
        },
        keyPoints: 'Points clés',
        achievements: 'Réalisations',
        partners: 'Partenaires',
        sidebarTitle: 'En savoir plus',
        sidebarText: 'Vous souhaitez en savoir plus sur ce programme ou participer à nos actions ?',
        participate: 'Participer au programme',
        viewResources: 'Voir les ressources',
        impactTitle: 'Notre impact en 2024',
        impactDesc: 'Nos actions ont permis de toucher des milliers de personnes à travers le Sénégal',
        impacted: 'Personnes touchées',
        trained: 'Personnes formées',
        sensitized: 'Personnes sensibilisées',
        activeProjects: 'Projets actifs',
        joinActionsTitle: 'Rejoignez nos actions',
        joinActionsDesc: 'Votre engagement nous permet de continuer à lutter pour les droits des femmes et des filles au Sénégal.'
      },
      blogPost: {
        backToBlog: 'Retour au blog',
        notFound: 'Article non trouvé',
        read: 'de lecture',
        share: 'Partager cet article :',
        like: "J'aime",
        comment: 'Commenter',
        relatedTitle: 'Articles similaires',
        relatedDesc: 'Continuez votre lecture avec ces articles en lien avec le sujet'
      },
      resourceView: {
        backToResources: '← Retour aux ressources',
        about: 'À propos de cette ressource',
        publishedOn: 'Publiée le {{date}}',
        type: 'Type: {{type}}',
        download: 'Télécharger la ressource',
        downloadNA: 'Téléchargement indisponible'
      },
      contact: {
        title: 'Contactez-nous',
        description: "Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question ou suggestion.",
        howHelp: 'Comment pouvons-nous vous aider ?',
        chooseCategory: 'Choisissez la catégorie qui correspond le mieux à votre demande',
        options: {
          general: { title: 'Informations générales', desc: 'Pour toute question générale sur nos activités' },
          volunteer: { title: 'Bénévolat', desc: 'Pour devenir bénévole ou participer à nos actions' },
          information: { title: "Demande d'informations", desc: 'Pour obtenir plus d’informations sur nos activités' },
          partnership: { title: 'Partenariat', desc: 'Pour proposer un partenariat ou une collaboration' }
        },
        formTitle: 'Envoyez-nous un message',
        sentTitle: 'Message envoyé !',
        sentText: 'Merci pour votre message. Nous vous répondrons dans les plus brefs délais.',
        fullName: 'Nom complet *',
        email: 'Email *',
        subject: 'Sujet *',
        requestType: 'Type de demande',
        message: 'Message *',
        placeholderName: 'Votre nom',
        placeholderEmail: 'votre@email.com',
        placeholderSubject: 'Sujet de votre message',
        placeholderMessage: 'Votre message...',
        sending: 'Envoi en cours...',
        sendMessage: 'Envoyer le message',
        contactInfo: 'Informations de contact',
        mapTitle: 'Notre localisation',
        mapLabel: 'Carte interactive',
        viewOnMaps: 'Voir sur Google Maps',
        followUs: 'Suivez-nous',
        faqTitle: 'Questions fréquentes'
      },
      about: {
        title: 'À propos de J-GEN Sénégal',
        welcomeTitle: 'Mot de la Directrice Exécutive',
        welcomeQuote: "Chers ami.e.s, je vous souhaite une cordiale bienvenue sur le site de l’association JGEN SÉNÉGAL, Women Global Entrepreneurship. Créée en Octobre 2016, JGEN est une association féministe à but non lucratif qui travaille essentiellement à contribuer à l’élimination des violences basées sur le genre notamment les violences sexuelles et sexistes contre les femmes et les filles et la promotion de la santé sexuelle et reproductive des femmes. JGEN est également engagée à accompagner l’entrepreneuriat féminin des jeunes femmes et des jeunes filles sénégalaises, à promouvoir les droits des enfants, la justice climatique de genre et la justice économique.",
        welcomeName: 'Maimouna YADE',
        welcomeRole: 'Directrice Exécutive de J-GEN Sénégal'
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
        rights: 'Tous droits réservés.',
        subscribed: 'Merci pour votre inscription !'
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
      programsPage: {
        title: 'Our programs',
        description: 'Discover our initiatives for the empowerment of women and girls in Senegal.',
        filters: {
          all: 'All programs',
          education: 'Education',
          health: 'Health',
          protection: 'Protection',
          childhood: 'Childhood',
          economic: 'Economic empowerment'
        },
        keyPoints: 'Key points',
        achievements: 'Achievements',
        partners: 'Partners',
        sidebarTitle: 'Learn more',
        sidebarText: 'Want to know more about this program or join our actions?',
        participate: 'Join the program',
        viewResources: 'View resources',
        impactTitle: 'Our impact in 2024',
        impactDesc: 'Our actions have reached thousands of people across Senegal',
        impacted: 'People reached',
        trained: 'People trained',
        sensitized: 'People sensitized',
        activeProjects: 'Active projects',
        joinActionsTitle: 'Join our actions',
        joinActionsDesc: 'Your engagement helps us continue fighting for women and girls’ rights in Senegal.'
      },
      blogPost: {
        backToBlog: 'Back to blog',
        notFound: 'Article not found',
        read: 'read',
        share: 'Share this article:',
        like: 'Like',
        comment: 'Comment',
        relatedTitle: 'Related articles',
        relatedDesc: 'Continue reading with these related articles'
      },
      resourceView: {
        backToResources: '← Back to resources',
        about: 'About this resource',
        publishedOn: 'Published on {{date}}',
        type: 'Type: {{type}}',
        download: 'Download resource',
        downloadNA: 'Download unavailable'
      },
      contact: {
        title: 'Contact us',
        description: 'We are listening. Feel free to reach out for any question or suggestion.',
        howHelp: 'How can we help you?',
        chooseCategory: 'Choose the category that best matches your request',
        options: {
          general: { title: 'General information', desc: 'For any general question about our activities' },
          volunteer: { title: 'Volunteering', desc: 'To become a volunteer or join our actions' },
          information: { title: 'Information request', desc: 'To get more information about our activities' },
          partnership: { title: 'Partnership', desc: 'To propose a partnership or collaboration' }
        },
        formTitle: 'Send us a message',
        sentTitle: 'Message sent!',
        sentText: 'Thank you for your message. We will get back to you shortly.',
        fullName: 'Full name *',
        email: 'Email *',
        subject: 'Subject *',
        requestType: 'Request type',
        message: 'Message *',
        placeholderName: 'Your name',
        placeholderEmail: 'your@email.com',
        placeholderSubject: 'Subject of your message',
        placeholderMessage: 'Your message...',
        sending: 'Sending...',
        sendMessage: 'Send message',
        contactInfo: 'Contact information',
        mapTitle: 'Our location',
        mapLabel: 'Interactive map',
        viewOnMaps: 'View on Google Maps',
        followUs: 'Follow us',
        faqTitle: 'Frequently asked questions'
      },
      about: {
        title: 'About J-GEN Senegal',
        welcomeTitle: 'Message from the Executive Director',
        welcomeQuote: 'Welcome to J-GEN Senegal. Our fight for equality, social justice and the empowerment of girls and women is more necessary than ever. Together, we move the lines.',
        welcomeName: 'Maimouna YADE',
        welcomeRole: 'Executive Director of J-GEN Senegal'
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
        rights: 'All rights reserved.',
        subscribed: 'Thanks for subscribing!'
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
    supportedLngs: ['fr', 'en'],
    interpolation: { escapeValue: false },
    returnObjects: true
  })

export default i18n 