
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
  Calendar,
  CheckCircle,
  TrendingUp,
  Lightbulb,
  Star
} from 'lucide-react'

/**
 * Page JeunesVolontairesProgram - Page détaillée du programme Jeunes Volontaires
 * Présente en détail le programme de santé sexuelle et reproductive pour les jeunes
 */
export default function JeunesVolontairesProgram() {
  // Données détaillées du programme
  const programData = {
    title: "Jeunes Volontaires pour la Santé Sexuelle et Reproductive",
    subtitle: "Autonomisation des jeunes pour une meilleure santé reproductive",
    description: "Un programme innovant de renforcement des capacités des adolescentes et jeunes sur la santé sexuelle et reproductive, financé par Voix Essentielles.",
    duration: "2023 - Présent",
    location: "Commune de Yoff, Dakar",
    focus: "Santé sexuelle et reproductive des jeunes",
    partner: "Voix Essentielles",
    
    objectives: [
      {
        icon: <Heart className="h-6 w-6" />,
        title: "Améliorer l'accès à l'information",
        description: "Fournir des informations précises sur la santé sexuelle et reproductive"
      },
      {
        icon: <Shield className="h-6 w-6" />,
        title: "Renforcer les capacités",
        description: "Former les jeunes sur l'hygiène menstruelle et la prévention des VBG"
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Mobiliser la communauté",
        description: "Impliquer les autorités locales et les communautés dans la prise en charge"
      },
      {
        icon: <Target className="h-6 w-6" />,
        title: "Développer le plaidoyer",
        description: "Influencer les politiques locales en faveur de la santé des jeunes"
      }
    ],

    phases: [
      {
        name: "Phase test",
        period: "2023",
        description: "Phase pilote pour tester l'approche et évaluer l'acceptation communautaire",
        participants: "40 jeunes",
        activities: ["Sensibilisation initiale", "Formation de base", "Évaluation des besoins"],
        outcomes: "Fort intérêt communautaire et demande d'extension"
      },
      {
        name: "Phase I",
        period: "2024",
        description: "Mise en œuvre complète avec élargissement des activités et des bénéficiaires",
        participants: "84 jeunes",
        activities: ["Formations approfondies", "Cadres de discussion", "Plaidoyer institutionnel"],
        outcomes: "Engagements formels des autorités et structuration du réseau"
      }
    ],

    activities: [
      {
        icon: <BookOpen className="h-6 w-6" />,
        title: "Cadres de discussion sur l'hygiène menstruelle",
        description: "Espaces d'échange sécurisés pour parler des règles et déconstruire les tabous",
        details: [
          "3 cadres de discussion organisés",
          "Distribution de kits d'hygiène menstruelle",
          "Formation sur la fabrication de protections réutilisables",
          "Sensibilisation à la gestion des déchets menstruels"
        ],
        impact: "84 jeunes filles formées et autonomisées"
      },
      {
        icon: <MessageCircle className="h-6 w-6" />,
        title: "Sessions de sensibilisation sur les VBG",
        description: "Prévention et réponse aux violences basées sur le genre",
        details: [
          "Identification des différentes formes de VBG",
          "Mécanismes de signalement et d'assistance",
          "Renforcement de l'estime de soi",
          "Auto-défense et protection personnelle"
        ],
        impact: "Sensibilisation de 200+ jeunes et membres de la communauté"
      },
      {
        icon: <Target className="h-6 w-6" />,
        title: "Plaidoyer auprès des autorités",
        description: "Dialogue avec les décideurs pour améliorer les services de santé reproductive",
        details: [
          "Élaboration d'une note de plaidoyer participative",
          "3 visites de plaidoyer auprès de 25 autorités",
          "Réunions de suivi avec les services municipaux",
          "Propositions concrètes d'amélioration des services"
        ],
        impact: "Engagement formel de la mairie d'allouer un budget"
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Engagement communautaire",
        description: "Mobilisation des acteurs locaux pour un soutien durable",
        details: [
          "Implication de l'UDEFY et de la Badiene Gokh",
          "Engagement des leaders religieux et coutumiers",
          "Participation des services de santé",
          "Mobilisation des parents et tuteurs"
        ],
        impact: "Large coalition de soutien au sein de la communauté"
      }
    ],

    achievements: [
      {
        number: "84",
        label: "jeunes formées",
        description: "Adolescentes et jeunes renforcées en SSR"
      },
      {
        number: "3",
        label: "cadres de discussion",
        description: "Espaces permanents d'échange sur l'hygiène menstruelle"
      },
      {
        number: "25",
        label: "autorités engagées",
        description: "Décideurs locaux impliqués dans le plaidoyer"
      },
      {
        number: "1",
        label: "budget municipal",
        description: "Ligne budgétaire dédiée à la santé reproductive"
      }
    ],

    testimonies: [
      {
        quote: "Avant, j'avais honte de parler de mes règles. Maintenant, je peux aider mes amies et même expliquer aux plus jeunes.",
        author: "Aminata, 17 ans",
        role: "Jeune volontaire"
      },
      {
        quote: "L'engagement de la mairie est une victoire importante. Cela montre que quand les jeunes s'organisent, les autorités les écoutent.",
        author: "M. Diop",
        role: "Coordinateur du projet"
      },
      {
        quote: "En tant que leader religieux, je pensais que ces sujets étaient tabous. J'ai compris que c'est une question de santé et de dignité.",
        author: "Imam Ibrahim",
        role: "Leader religieux, Yoff"
      }
    ],

    advocacyNote: {
      title: "Note de plaidoyer pour l'amélioration de la santé reproductive",
      content: "Document élaboré de manière participative avec les bénéficiaires, présentant des recommandations concrètes pour améliorer l'accès aux services de santé reproductive des adolescentes et jeunes de Yoff.",
      recommendations: [
        "Création d'espaces jeunes adaptés dans les structures de santé",
        "Formation des agents de santé sur l'accueil des adolescents",
        "Mise en place de services de conseil confidentiels",
        "Distribution gratuite de protections menstruelles",
        "Sensibilisation continue dans les écoles et quartiers"
      ],
      officialSupport: [
        "Maire de Yoff : Engagement d'allouer une ligne budgétaire",
        "Services de santé : Amélioration de l'accueil des jeunes",
        "UDEFY : Soutien logistique et mobilisation",
        "Badiene Gokh : Sensibilisation au sein des groupements de femmes"
      ]
    },

    nextSteps: [
      "Signature du protocole d'accord avec la mairie de Yoff",
      "Mise en place des espaces jeunes dans les structures de santé",
      "Formation continue des volontaires et élargissement du réseau",
      "Développement d'activités génératrices de revenus pour les jeunes filles",
      "Extension du programme à d'autres communes de Dakar",
      "Création d'un fonds de soutien pour la santé reproductive"
    ],

    challenges: [
      {
        title: "Réticences culturelles",
        description: "Sujets considérés comme tabous dans certaines familles et communautés"
      },
      {
        title: "Ressources limitées",
        description: "Besoin de financement pour étendre les activités et former plus de jeunes"
      },
      {
        title: "Coordination institutionnelle",
        description: "Nécessité de renforcer la collaboration entre les différents services"
      }
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
          backgroundImage="https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/3a14a18f-2a99-41d5-a3cd-b11a3b288231.jpg"
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
                  <h3 className="font-semibold text-gray-900">Localisation</h3>
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
                  <h3 className="font-semibold text-gray-900">Partenaire</h3>
                  <p className="text-gray-600">{programData.partner}</p>
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

        {/* Phases du programme */}
        <section className="py-16 bg-[#FDE8F0]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Évolution du programme</h2>
              <p className="text-lg text-gray-600">
                De la phase test à la mise en œuvre complète
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programData.phases.map((phase, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-[#E81F74]">{phase.name}</CardTitle>
                      <span className="px-3 py-1 bg-[#E81F74] text-white rounded-full text-sm">
                        {phase.period}
                      </span>
                    </div>
                    <CardDescription className="text-gray-600">
                      {phase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Participants :</h4>
                        <p className="text-gray-600">{phase.participants}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Activités clés :</h4>
                        <ul className="space-y-1">
                          {phase.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                              <CheckCircle className="h-3 w-3 text-[#E81F74]" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-[#E81F74] bg-opacity-5 rounded-lg p-3">
                        <p className="text-sm font-medium text-[#E81F74]">Résultat :</p>
                        <p className="text-sm text-gray-700">{phase.outcomes}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Activités principales */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Activités principales</h2>
              <p className="text-lg text-gray-600">
                Nos interventions pour la santé sexuelle et reproductive des jeunes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programData.activities.map((activity, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-[#FDE8F0] rounded-full flex items-center justify-center">
                        <div className="text-[#E81F74]">
                          {activity.icon}
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-lg">{activity.title}</CardTitle>
                        <CardDescription className="text-gray-600">
                          {activity.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {activity.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <ChevronRight className="h-4 w-4 text-[#E81F74] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-[#FDE8F0] rounded-lg p-3">
                      <p className="text-sm font-medium text-[#E81F74]">Impact :</p>
                      <p className="text-sm text-gray-700">{activity.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Note de plaidoyer */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{programData.advocacyNote.title}</h2>
                  <p className="text-gray-600 mb-6">
                    {programData.advocacyNote.content}
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Recommandations clés :</h4>
                  <ul className="space-y-2 mb-6">
                    {programData.advocacyNote.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-[#E81F74] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Soutien officiel obtenu :</h4>
                  <div className="space-y-2">
                    {programData.advocacyNote.officialSupport.map((support, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-[#E81F74]" />
                        <span className="text-sm text-gray-700">{support}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/234b5266-279c-43b3-a343-e779d9f4a504.jpg" 
                      alt="Réunion de plaidoyer avec les autorités"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Réalisations */}
        <section className="py-16 bg-[#E81F74] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Notre impact</h2>
              <p className="text-xl opacity-90">
                Des résultats concrets pour la santé des jeunes
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Témoignages</h2>
              <p className="text-lg text-gray-600">
                Ce que les participants et partenaires disent du programme
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programData.testimonies.map((testimony, index) => (
                <Card key={index} className="bg-[#FDE8F0] border-0">
                  <CardContent className="pt-6">
                    <MessageCircle className="h-5 w-5 text-[#E81F74] mb-4" />
                    <blockquote className="text-gray-700 italic mb-4">
                      "{testimony.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-gray-900">{testimony.author}</p>
                      <p className="text-sm text-gray-600">{testimony.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Défis et prochaines étapes */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Défis */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Défis rencontrés</h2>
                  <div className="space-y-4">
                    {programData.challenges.map((challenge, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-2">{challenge.title}</h4>
                        <p className="text-gray-600 text-sm">{challenge.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prochaines étapes */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Prochaines étapes</h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <ul className="space-y-3">
                      {programData.nextSteps.map((step, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-[#E81F74] rounded-full flex items-center justify-center flex-shrink-0">
                            <ChevronRight className="h-4 w-4 text-white" />
                          </div>
                          <p className="text-gray-700">{step}</p>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6">
                      <Button asChild className="w-full bg-[#E81F74] hover:bg-[#E81F74]/90">
                        <Link to="/contact">
                          Soutenir la prochaine phase
                        </Link>
                      </Button>
                    </div>
                  </div>
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
