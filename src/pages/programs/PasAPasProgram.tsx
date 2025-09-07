
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { 
  Users, 
  Heart, 
  Shield, 
  Target, 
  Award, 
  ArrowRight,
  ChevronRight,
  Clock,
  MapPin,
  BookOpen,
  MessageCircle,
  Gavel,
  Lightbulb,
  Calendar
} from 'lucide-react'

/**
 * Page PasAPasProgram - Page détaillée du programme PAS À PAS
 * Présente en détail le programme de plaidoyer pour l'avortement sécurisé
 */
export default function PasAPasProgram() {
  // Données détaillées du programme
  const programData = {
    title: "PAS À PAS",
    subtitle: "Vers une justice reproductive au Sénégal",
    description: "Un programme pionnier en soutien au plaidoyer pour l'avortement sécurisé en cas de viol et d'inceste, porté par JGEN Sénégal et ses partenaires.",
    duration: "2022 - Présent",
    location: "National (Sénégal)",
    focus: "Justice reproductive et droits des femmes",
    partners: ["PP Global", "FJS", "Amplify Change", "Marie Stopes International"],
    
    objectives: [
      {
        icon: <Shield className="h-6 w-6" />,
        title: "Dépénaliser l'avortement",
        description: "Plaidoyer pour l'accès à l'avortement sécurisé en cas de viol et d'inceste"
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Mobiliser les acteurs",
        description: "Créer des réseaux multi-acteurs pour la justice reproductive"
      },
      {
        icon: <Heart className="h-6 w-6" />,
        title: "Accompagner les survivantes",
        description: "Soutenir les victimes de violences sexuelles dans leur parcours"
      },
      {
        icon: <BookOpen className="h-6 w-6" />,
        title: "Sensibiliser l'opinion",
        description: "Éduquer le public sur les droits sexuels et reproductifs"
      }
    ],

    networks: [
      {
        name: "Réseau des acteurs communautaires",
        icon: <Users className="h-5 w-5" />,
        description: "Leaders communautaires engagés dans la sensibilisation locale",
        members: "45 membres actifs",
        impact: "Actions de sensibilisation dans 12 communautés"
      },
      {
        name: "Réseau des jeunes pour la justice reproductive",
        icon: <Target className="h-5 w-5" />,
        description: "Jeunes leaders formés au plaidoyer et à l'éducation par les pairs",
        members: "60 jeunes filles leaders",
        impact: "Formation de 60 jeunes filles dans la région de Dakar"
      },
      {
        name: "Réseau des professionnel·les des médias",
        icon: <MessageCircle className="h-5 w-5" />,
        description: "Journalistes engagés dans une couverture éthique des questions de DSSR",
        members: "25 journalistes",
        impact: "Création d'un lexique journalistique spécialisé"
      },
      {
        name: "Réseau des religieux engagés",
        icon: <Heart className="h-5 w-5" />,
        description: "Leaders religieux favorables à une approche compassionnelle",
        members: "15 leaders religieux",
        impact: "Dialogue interconfessionnel sur la justice reproductive"
      }
    ],

    forumData: {
      date: "Septembre 2024",
      participants: "150 participant·es",
      title: "Forum National sur la Justice Reproductive",
      description: "Premier forum national sur les avortements clandestins et l'application du Protocole de Maputo"
    },

    recommendations: [
      {
        icon: <Gavel className="h-5 w-5" />,
        title: "Dépénalisation",
        description: "Dépénaliser l'avortement en cas de viol et d'inceste dans le Code pénal sénégalais"
      },
      {
        icon: <Users className="h-5 w-5" />,
        title: "Inclusion des leaders",
        description: "Intégrer les leaders religieux et les acteurs communautaires dans la stratégie de plaidoyer"
      },
      {
        icon: <MessageCircle className="h-5 w-5" />,
        title: "Lexique journalistique",
        description: "Créer un lexique journalistique pour réduire la stigmatisation dans les médias"
      },
      {
        icon: <BookOpen className="h-5 w-5" />,
        title: "Formation des journalistes",
        description: "Former les journalistes à la justice reproductive, sans biais sexiste"
      },
      {
        icon: <Heart className="h-5 w-5" />,
        title: "Maisons d'accueil",
        description: "Mettre en place des maisons d'accueil pour les survivantes de VBG et d'avortements à risque"
      },
      {
        icon: <Lightbulb className="h-5 w-5" />,
        title: "Cadre juridique",
        description: "Élaborer un cadre juridique clair, avec le soutien actif des parlementaires"
      },
      {
        icon: <Shield className="h-5 w-5" />,
        title: "Accompagnement psychologique",
        description: "Accompagner les détenues victimes par des psychologues et travailleurs sociaux"
      },
      {
        icon: <Target className="h-5 w-5" />,
        title: "Mobilisation de la jeunesse",
        description: "Mobiliser davantage la jeunesse, notamment via des influenceur·ses culturels et communautaires"
      }
    ],

    achievements: [
      {
        number: "4",
        label: "Réseaux nationaux créés",
        description: "Structures multi-acteurs pour le plaidoyer"
      },
      {
        number: "150",
        label: "Participants au forum",
        description: "Acteurs clés de la justice reproductive réunis"
      },
      {
        number: "60",
        label: "Jeunes filles formées",
        description: "Leaders communautaires en santé reproductive"
      },
      {
        number: "8",
        label: "Recommandations stratégiques",
        description: "Propositions concrètes pour le changement"
      }
    ],

    impactStories: [
      {
        title: "Aminata, 19 ans",
        story: "Grâce au programme PAS À PAS, j'ai compris que j'avais des droits sur mon corps. Aujourd'hui, j'éduque mes amies sur la santé reproductive.",
        location: "Dakar"
      },
      {
        title: "Marie, journaliste",
        story: "La formation m'a appris à traiter les sujets sensibles avec plus d'humanité et moins de jugement. Mon travail a changé.",
        location: "Presse écrite"
      },
      {
        title: "Imam Ibrahim",
        story: "Le dialogue m'a ouvert à une approche plus compassionnelle. La religion et les droits humains peuvent coexister.",
        location: "Leader religieux"
      }
    ],

    nextSteps: [
      "Poursuivre le plaidoyer auprès des parlementaires pour l'adoption des recommandations",
      "Renforcer les capacités des réseaux existants et en créer de nouveaux",
      "Développer des campagnes de sensibilisation à l'échelle nationale",
      "Documenter et partager les bonnes pratiques en justice reproductive",
      "Établir des partenariats avec les services de santé pour l'orientation des survivantes"
    ]
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          title={programData.title}
          subtitle={programData.subtitle}
          description={programData.description}
          backgroundImage="https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/e3ef8d34-9675-4c44-b90d-9beeb45b42ff.jpg"
          primaryButtonText="Soutenir le programme"
          primaryButtonLink="/contact"
          secondaryButtonText="Télécharger les ressources"
          secondaryButtonLink="/ressources"
        />

        {/* Informations clés */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="h-8 w-8 text-[#E81F74] mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Durée</h3>
                  <p className="text-gray-600">{programData.duration}</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 text-[#E81F74] mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Zone d'action</h3>
                  <p className="text-gray-600">{programData.location}</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Target className="h-8 w-8 text-[#E81F74] mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Focus</h3>
                  <p className="text-gray-600">{programData.focus}</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Award className="h-8 w-8 text-[#E81F74] mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Partenaires</h3>
                  <p className="text-gray-600">{programData.partners.length} organisations</p>
                </CardContent>
              </Card>
            </div>

            {/* Objectifs */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nos objectifs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programData.objectives.map((objective, index) => (
                  <Card key={index} className="border-l-4 border-l-[#E81F74]">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="text-[#E81F74]">
                          {objective.icon}
                        </div>
                        <CardTitle className="text-lg">{objective.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {objective.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Les réseaux */}
        <section className="py-16 bg-[#FDE8F0]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Les réseaux stratégiques</h2>
              <p className="text-lg text-gray-600">
                Quatre réseaux nationaux pour un plaidoyer efficace et inclusif
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programData.networks.map((network, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-[#E81F74] bg-opacity-10 rounded-full flex items-center justify-center">
                        <div className="text-[#E81F74]">
                          {network.icon}
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-lg">{network.name}</CardTitle>
                        <p className="text-sm text-gray-600">{network.members}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-3">
                      {network.description}
                    </CardDescription>
                    <div className="bg-[#E81F74] bg-opacity-5 rounded-lg p-3">
                      <p className="text-sm font-medium text-[#E81F74]">Impact:</p>
                      <p className="text-sm text-gray-700">{network.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Forum National */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 text-[#E81F74] mb-2">
                      <Calendar className="h-5 w-5" />
                      <span className="font-medium">{programData.forumData.date}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {programData.forumData.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-4">
                      {programData.forumData.description}
                    </p>
                    <div className="bg-[#FDE8F0] rounded-lg p-4 inline-block">
                      <span className="text-[#E81F74] font-semibold">
                        {programData.forumData.participants}
                      </span>
                      <span className="text-gray-600"> participant·es</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    Ce forum majeur a permis de briser le silence autour des violences sexuelles subies par les filles et les femmes, de recentrer le débat sur l'article 14 du Protocole de Maputo, et de formuler des recommandations concrètes pour l'évolution du cadre juridique et social.
                  </p>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/7a72881a-3e08-4ebd-b212-1762631f9f34.jpg" 
                      alt="Forum National sur la Justice Reproductive"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommandations */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommandations clés</h2>
              <p className="text-lg text-gray-600">
                Propositions concrètes issues du forum pour un changement réel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programData.recommendations.map((recommendation, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-[#E81F74] mt-1">
                    {recommendation.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{recommendation.title}</h4>
                    <p className="text-gray-600 text-sm">{recommendation.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Réalisations */}
        <section className="py-16 bg-[#E81F74] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Notre impact</h2>
              <p className="text-xl opacity-90">
                Des résultats concrets pour la justice reproductive
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programData.achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {achievement.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {achievement.label}
                  </h3>
                  <p className="text-sm opacity-80">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Voix du changement</h2>
              <p className="text-lg text-gray-600">
                Témoignages de personnes impactées par le programme
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programData.impactStories.map((story, index) => (
                <Card key={index} className="bg-[#FDE8F0] border-0">
                  <CardContent className="pt-6">
                    <Heart className="h-5 w-5 text-[#E81F74] mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">{story.title}</h4>
                    <p className="text-gray-700 text-sm mb-3 italic">
                      "{story.story}"
                    </p>
                    <p className="text-xs text-gray-600">{story.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Prochaines étapes */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Prochaines étapes</h2>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {programData.nextSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-[#E81F74] rounded-full flex items-center justify-center flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button asChild className="bg-[#E81F74] hover:bg-[#E81F74]/90">
                    <Link to="/contact">
                      Rejoignez notre action
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
