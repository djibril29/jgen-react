
import { useState } from 'react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { Users, BookOpen, Heart, Target, Calendar, MapPin, Star, ArrowRight } from 'lucide-react'

/**
 * Page Nos programmes - Présentation détaillée de tous les programmes de J-GEN
 * Affiche les informations sur chaque programme avec leurs impacts et résultats
 */
export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState('all')

  // Données des programmes
  const programs = [
    {
      id: 'uef',
      title: 'Université d\'Été Féministe (UEF)',
      category: 'education',
      color: 'from-pink-500 to-purple-600',
      icon: <BookOpen className="h-8 w-8" />,
      description: 'Un espace stratégique de mobilisation, de formation et de réflexion féministe pour l\'Afrique de l\'Ouest et du Centre.',
      details: [
        '275 participantes engagées en 2024',
        '18 panels et ateliers pratiques',
        '10 militantes féministes honorées',
        '10 outils pratiques produits sur les DSSR et l\'avortement sécurisé'
      ],
      achievements: [
        'Lancement du Hub d\'excellence numérique de l\'UEF',
        'Production d\'outils pratiques sur les droits sexuels et reproductifs',
        'Renforcement de l\'infrastructure du mouvement féministe régional'
      ],
      partners: ['FJS', 'Fondation HEWLETT', 'CENTRE ODAS', 'AWDF', 'PPG GLOBAL']
    },
    {
      id: 'pas-a-pas',
      title: 'PAS À PAS',
      category: 'sante',
      color: 'from-orange-500 to-red-500',
      icon: <Heart className="h-8 w-8" />,
      description: 'Programme pionnier en soutien au plaidoyer pour l\'avortement sécurisé en cas de viol et d\'inceste.',
      details: [
        'Création de 4 réseaux stratégiques nationaux',
        'Forum national avec 150 participants',
        'Focus groupes communautaires avec 60 jeunes filles leaders',
        'Recommandations pour l\'évolution du cadre juridique'
      ],
      achievements: [
        'Dépénalisation de l\'avortement en cas de viol et d\'inceste',
        'Création de réseaux multi-acteurs pour la justice reproductive',
        'Formation des journalistes à la justice reproductive'
      ],
      partners: ['PP Global', 'FJS', 'Amplify Change', 'Marie Stopes International']
    },
    {
      id: 'elles-aussi',
      title: 'ELLES AUSSI',
      category: 'protection',
      color: 'from-green-500 to-teal-500',
      icon: <Users className="h-8 w-8" />,
      description: 'Projet d\'intervention communautaire contre les violences sexuelles à l\'égard des filles dans la région de Fatick.',
      details: [
        '60 jeunes filles survivantes accompagnées',
        '3 Comités de Veilles et d\'Alerte Communautaires créés',
        'Sensibilisation des communautés sur les VBG',
        'Formation à l\'alerte précoce'
      ],
      achievements: [
        'Accompagnement psychologique des survivantes',
        'Mise en place de mécanismes communautaires de protection',
        'Renforcement des liens avec les communautés locales'
      ],
      partners: ['African Women Development Fund (AWDF)', 'Initiative KASA']
    },
    {
      id: 'proscides',
      title: 'PROSCIDES',
      category: 'enfance',
      color: 'from-blue-500 to-indigo-600',
      icon: <Target className="h-8 w-8" />,
      description: 'Programme de renforcement des organisations de la société civile pour la promotion et la protection des droits de l\'enfant.',
      details: [
        '4 cadres d\'enfants créés à Pikine et Kaolack',
        '2 établissements scolaires partenaires',
        'Plus de 2000 personnes sensibilisées',
        'Partenariats avec autorités locales'
      ],
      achievements: [
        'Consolidation de la gouvernance organisationnelle',
        'Renforcement des capacités programmatiques',
        'Élargissement du réseau de partenaires'
      ],
      partners: ['Save the Children Suède']
    },
    {
      id: 'jeunes-volontaires',
      title: 'Jeunes Volontaires pour la Santé Sexuelle et Reproductive',
      category: 'sante',
      color: 'from-yellow-500 to-orange-500',
      icon: <Users className="h-8 w-8" />,
      description: 'Projet de renforcement des capacités des adolescentes et jeunes sur la santé sexuelle et reproductive.',
      details: [
        '84 adolescentes et jeunes formées',
        '3 cadres de discussion sur l\'hygiène menstruelle',
        '3 visites de plaidoyer auprès des autorités',
        'Engagement des autorités municipales'
      ],
      achievements: [
        'Amélioration de l\'accès à l\'information',
        'Mobilisation communautaire',
        'Engagement des autorités locales'
      ],
      partners: ['Voix Essentielles']
    },
    {
      id: 'liggeeyal-eleg',
      title: 'LIGGEEYAL ËLËG',
      category: 'economique',
      color: 'from-purple-500 to-pink-600',
      icon: <Star className="h-8 w-8" />,
      description: 'Projet d\'autonomisation économique des jeunes filles et femmes vulnérables dans les régions de Kaolack et Fatick.',
      details: [
        'Durée de 3 ans (novembre 2024 – octobre 2027)',
        'Ciblage des filles et femmes vulnérables',
        'Focus sur l\'autonomisation économique',
        'Partenariat avec l\'OIF'
      ],
      achievements: [
        'Missions d\'introduction dans les régions',
        'Rencontre avec les autorités locales',
        'Préparation de la mise en œuvre'
      ],
      partners: ['Organisation Internationale de la Francophonie (OIF)']
    }
  ]

  // Filtrer les programmes par catégorie
  const filteredPrograms = activeTab === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeTab)

  // Catégories de programmes
  const categories = [
    { id: 'all', name: 'Tous les programmes', color: 'from-gray-500 to-gray-600' },
    { id: 'education', name: 'Éducation', color: 'from-pink-500 to-purple-600' },
    { id: 'sante', name: 'Santé', color: 'from-orange-500 to-red-500' },
    { id: 'protection', name: 'Protection', color: 'from-green-500 to-teal-500' },
    { id: 'enfance', name: 'Enfance', color: 'from-blue-500 to-indigo-600' },
    { id: 'economique', name: 'Autonomisation économique', color: 'from-purple-500 to-pink-600' }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          title="Nos programmes"
          description="Découvrez nos initiatives pour l'autonomisation des femmes et des filles au Sénégal."
          backgroundImage="https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/b5e5e874-39b8-4d07-9b45-306844d95814.jpg"
        />

        {/* Filtres par catégorie */}
        <section className="py-8 bg-white sticky top-16 z-40 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-md`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Liste des programmes */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12">
              {filteredPrograms.map((program) => (
                <div key={program.id} id={program.id} className="scroll-mt-24">
                  <Card className="overflow-hidden border-0 shadow-lg">
                    <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                    
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-2/3">
                          <div className="flex items-start space-x-4 mb-4">
                            <div className={`p-3 rounded-lg bg-gradient-to-r ${program.color} text-white`}>
                              {program.icon}
                            </div>
                            <div>
                              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                {program.title}
                              </h2>
                              <p className="text-lg text-gray-600">
                                {program.description}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                                <Target className="h-5 w-5 mr-2 text-pink-500" />
                                Points clés
                              </h3>
                              <ul className="space-y-2">
                                {program.details.map((detail, index) => (
                                  <li key={index} className="flex items-start space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-pink-500 mt-2"></div>
                                    <span className="text-gray-700">{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                                <Star className="h-5 w-5 mr-2 text-orange-500" />
                                Réalisations
                              </h3>
                              <ul className="space-y-2">
                                {program.achievements.map((achievement, index) => (
                                  <li key={index} className="flex items-start space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                                    <span className="text-gray-700">{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                                <Users className="h-5 w-5 mr-2 text-green-500" />
                                Partenaires
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {program.partners.map((partner, index) => (
                                  <span 
                                    key={index} 
                                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                                  >
                                    {partner}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="md:w-1/3">
                          <div className="bg-gray-50 rounded-lg p-6 h-full">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">En savoir plus</h3>
                            <p className="text-gray-600 mb-6">
                              Vous souhaitez en savoir plus sur ce programme ou participer à nos actions ?
                            </p>
                            <div className="space-y-3">
                              <Button asChild className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90">
                                <Link to="/contact">
                                  Participer au programme
                                </Link>
                              </Button>
                              <Button asChild variant="outline" className="bg-transparent w-full">
                                <Link to="/ressources">
                                  Voir les ressources
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact global */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre impact en 2024</h2>
              <p className="text-lg text-gray-600 mb-12">
                Nos actions ont permis de toucher des milliers de personnes à travers le Sénégal
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">1447+</div>
                  <div className="text-gray-600">Personnes touchées</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">801</div>
                  <div className="text-gray-600">Personnes formées</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">646</div>
                  <div className="text-gray-600">Personnes sensibilisées</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">6</div>
                  <div className="text-gray-600">Projets actifs</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Appel à l'action */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rejoignez nos actions</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Votre engagement nous permet de continuer à lutter pour les droits des femmes et des filles au Sénégal.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link to="/contact">
                  Devenir bénévole
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
                <Link to="/blog">
                  Suivre nos actualités
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
