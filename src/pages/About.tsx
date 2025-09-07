
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { Users, Target, Award, Globe, Heart, Star } from 'lucide-react'

/**
 * Page À propos - Présentation détaillée de l'organisation J-GEN
 * Historique, mission, vision, valeurs et équipe
 */
export default function AboutPage() {
  // Valeurs de l'organisation
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Égalité des genres",
      description: "Nous croyons en une société où les femmes et les filles ont les mêmes droits et opportunités que les hommes."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Sororité",
      description: "Nous promouvons la solidarité entre les femmes et construisons des alliances pour un changement collectif."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Justice sociale",
      description: "Nous luttons contre les inégalités et les discriminations pour une société plus juste et équitable."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Innovation",
      description: "Nous innovons dans nos approches pour répondre efficacement aux défis émergents."
    }
  ]

  // Axes d'intervention
  const interventionAreas = [
    "Renforcement de capacités",
    "Mobilisation et sensibilisation communautaire",
    "Communication et plaidoyer",
    "Co-construction de mouvements sociaux féministes",
    "Réseautage, apprentissage et mentorat",
    "Éducation entrepreneurial et autonomisation économique",
    "Guérison et réparation psychologiques de survivantes de violences sexuelles"
  ]

  // Chiffres clés
  const keyFigures = [
    { year: "2016", event: "Création de J-GEN Sénégal" },
    { year: "2023", event: "Première édition de l'Université d'Été Féministe" },
    { year: "2024", event: "Lancement du projet LIGGEEYAL ËLËG" },
    { year: "2024", event: "Forum National sur la Justice Reproductive" }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          title="À propos de J-GEN Sénégal"
          description="Découvrez notre histoire, notre mission et notre engagement pour les droits des femmes et des filles au Sénégal."
          backgroundImage="https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/e844ba04-8ebc-40d8-b22d-98141dab9f5e.jpg"
        />

        {/* Notre histoire */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Notre histoire</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  J-GEN est une association à but non lucratif créée en 2016, avec pour mission principale de contribuer 
                  à l'égalité des sexes à travers l'autonomisation des femmes et des filles au Sénégal.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Depuis sa création, J-GEN s'est engagée dans la lutte contre les inégalités de genre et les violences 
                  faites aux femmes et aux filles. Notre organisation a su développer une approche holistique qui combine 
                  renforcement de capacités, plaidoyer, mobilisation communautaire et soutien psychologique.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Au fil des années, J-GEN est devenue une référence dans l'accompagnement des femmes et des filles 
                  pour une meilleure prise en charge de leurs droits fondamentaux, particulièrement en matière de santé 
                  et bien-être, d'insertion socioprofessionnelle et de participation politique.
                </p>
                
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 my-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Notre vision</h3>
                  <p className="text-gray-700 italic">
                    "Être une référence dans l'accompagnement des femmes et de filles pour une meilleure prise en charge 
                    de leurs droits fondamentaux particulièrement en matière de santé et bien-être, d'insertion 
                    socioprofessionnelle, de participation politique entre autres."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chiffres clés */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre parcours</h2>
              <p className="text-lg text-gray-600">
                Les moments clés qui ont marqué notre histoire
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Ligne verticale */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-400 to-purple-600"></div>
                
                <div className="space-y-12">
                  {keyFigures.map((figure, index) => (
                    <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className="w-1/2 pr-8">
                        <Card className="shadow-md">
                          <CardHeader>
                            <CardTitle className="text-xl">{figure.event}</CardTitle>
                          </CardHeader>
                        </Card>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                          {figure.year}
                        </div>
                      </div>
                      
                      <div className="w-1/2 pl-8"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notre mission */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Notre mission</h2>
              
              <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg p-8 mb-8">
                <p className="text-xl text-gray-700 text-center mb-6">
                  Contribuer à l'égalité des sexes à travers l'autonomisation des femmes et des filles
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {interventionAreas.map((area, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos valeurs</h2>
              <p className="text-lg text-gray-600">
                Les principes qui guident notre action quotidienne
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mot de la directrice */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-square rounded-full overflow-hidden border-4 border-pink-200">
                    <img 
                      src="https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/847298f4-d790-46cb-8256-7683454f55d6.jpg" 
                      alt="Maimouna YADE, Directrice Exécutive"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mot de la Directrice Exécutive</h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <blockquote className="text-gray-700 italic mb-4">
                      "2024 a été marquée par un rétrécissement préoccupant de l'espace civique, tant au niveau national 
                      qu'international. Dans ce contexte particulièrement contraint, J-GEN Sénégal a su faire preuve d'une 
                      résilience remarquable."
                    </blockquote>
                    <p className="text-gray-600 mb-4">
                      Loin de céder au découragement, nous avons renforcé nos fondations : diversification des partenariats, 
                      rationalisation des ressources, capitalisation sur l'expertise locale, et recentrage sur des actions à fort impact.
                    </p>
                    <p className="text-gray-600">
                      En 2025, nous redoublerons d'énergie, de créativité et de résilience, portés par cette conviction profonde 
                      que l'autonomisation des femmes et des filles n'est pas un choix, mais une urgence historique.
                    </p>
                    <div className="mt-6">
                      <p className="font-semibold text-gray-900">Maimouna YADE</p>
                      <p className="text-gray-600">Directrice Exécutive de J-GEN Sénégal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Appel à l'action */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rejoignez notre mouvement</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Votre engagement nous permet de continuer notre lutte pour les droits des femmes et des filles.
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
