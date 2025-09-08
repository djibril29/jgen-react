
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ProgramRelated from '@/components/ProgramRelated'
import { 
  Users, 
  Shield, 
  Heart, 
  Target, 
  Award, 
  ArrowRight,
  ChevronRight,
  Clock,
  MapPin,
  BookOpen,
  MessageCircle,
  Home,
  AlertTriangle,
  Calendar,
  CheckCircle
} from 'lucide-react'

/**
 * Page EllesAussiProgram - Page détaillée du programme ELLES AUSSI
 * Présente en détail le programme d'intervention communautaire contre les violences sexuelles
 */
export default function EllesAussiProgram() {
  // Données détaillées du programme
  const programData = {
    title: "ELLES AUSSI",
    subtitle: "Projet d'intervention communautaire contre les violences sexuelles",
    description: "Un projet innovant de lutte contre les violences sexuelles à l'égard des filles dans la région de Fatick, combinant accompagnement psychologique et mobilisation communautaire.",
    duration: "2021 - 2024 (Phase I)",
    location: "Région de Fatick (Communes de Fatick et Diouroup)",
    beneficiaries: "60 jeunes filles survivantes",
    partners: ["African Women Development Fund (AWDF)", "Initiative KASA"],
    
    objectives: [
      {
        icon: <Heart className="h-6 w-6" />,
        title: "Accompagnement psychologique",
        description: "Fournir un soutien en guérison et réparation aux survivantes de violences sexuelles"
      },
      {
        icon: <Shield className="h-6 w-6" />,
        title: "Protection communautaire",
        description: "Mettre en place des mécanismes de prévention et d'alerte dans les communautés"
      },
      {
        icon: <BookOpen className="h-6 w-6" />,
        title: "Éducation et sensibilisation",
        description: "Former les filles sur leurs droits et la prévention des violences"
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Mobilisation communautaire",
        description: "Impliquer tous les acteurs locaux dans la lutte contre les VBG"
      }
    ],

    committees: [
      {
        name: "Comité de Ndiadiaye",
        location: "Quartier Ndiadiaye, Fatick",
        members: "15 membres",
        composition: ["Chefs de quartier", "Imams", "Leaders communautaires", "Enseignants", "Jeunes"],
        activities: "Sensibilisation mensuelle, veille communautaire, orientation des survivantes"
      },
      {
        name: "Comité de Peulgha",
        location: "Quartier Peulgha, Fatick",
        members: "12 membres",
        composition: ["Badianou Gox", "Leaders religieux", "Élus locaux", "Personnes ressources"],
        activities: "Médiation, sensibilisation, accompagnement juridique"
      },
      {
        name: "Comité de Diouroup",
        location: "Commune de Diouroup",
        members: "18 membres",
        composition: ["Autorités municipales", "Services de santé", "ONG locales", "Représentants jeunes"],
        activities: "Coordination locale, plaidoyer, mise en réseau des services"
      }
    ],

    approach: {
      title: "Notre approche holistique",
      phases: [
        {
          title: "Phase 1: Accueil et évaluation",
          description: "Identification des survivantes et évaluation de leurs besoins spécifiques",
          icon: <Heart className="h-5 w-5" />
        },
        {
          title: "Phase 2: Accompagnement psychologique",
          description: "Séances individuelles et collectives de guérison et de résilience",
          icon: <Shield className="h-5 w-5" />
        },
        {
          title: "Phase 3: Renforcement de capacités",
          description: "Formation sur les droits, l'alerte précoce et l'autonomisation",
          icon: <BookOpen className="h-5 w-5" />
        },
        {
          title: "Phase 4: Réinsertion sociale",
          description: "Accompagnement pour le retour à une vie normale et active",
          icon: <Target className="h-5 w-5" />
        }
      ]
    },

    achievements: [
      {
        number: "58",
        label: "filles accompagnées",
        description: "Survivantes de violences sexuelles prises en charge"
      },
      {
        number: "3",
        label: "Comités de veille créés",
        description: "Mécanismes communautaires de protection active"
      },
      {
        number: "45",
        label: "sensibilisations réalisées",
        description: "Sessions d'information dans les communautés"
      },
      {
        number: "1000+",
        label: "personnes touchées",
        description: "Impact indirect à travers la sensibilisation communautaire"
      }
    ],

    services: [
      {
        icon: <Heart className="h-6 w-6" />,
        title: "Soutien psychologique",
        description: "Accompagnement individuel et groupemental par une psychologue spécialisée",
        details: [
          "Séances de counseling individuel",
          "Thérapies de groupe",
          "Ateliers de résilience",
          "Accompagnement dans le processus de guérison"
        ]
      },
      {
        icon: <Shield className="h-6 w-6" />,
        title: "Protection et sécurité",
        description: "Mise en place de mécanismes de protection communautaire",
        details: [
          "Comités de veille et d'alerte",
          "Système de référence",
          "Coordination avec les autorités",
          "Médiation communautaire"
        ]
      },
      {
        icon: <BookOpen className="h-6 w-6" />,
        title: "Éducation juridique",
        description: "Information sur les droits et les recours légaux disponibles",
        details: [
          "Droits des enfants et des femmes",
          "Procédures judiciaires",
          "Accès aux services d'aide",
          "Mécanismes de signalement"
        ]
      },
      {
        icon: <Home className="h-6 w-6" />,
        title: "Réinsertion socio-économique",
        description: "Soutien pour l'autonomisation et la réintégration sociale",
        details: [
          "Formation professionnelle",
          "Soutien scolaire",
          "Appui à l'entrepreneuriat",
          "Accompagnement familial"
        ]
      }
    ],

    testimonials: [
      {
        quote: "Grâce à ELLES AUSSI, j'ai retrouvé le sourire et l'espoir. Les séances avec la psychologue m'ont aidée à guérir.",
        author: "Aminata, 16 ans",
        role: "Bénéficiaire, Fatick"
      },
      {
        quote: "Notre comité de veille est devenu un pilier dans la communauté. Les gens nous font confiance pour signaler les problèmes.",
        author: "Ibrahim Ndiaye",
        role: "Président du comité de Ndiadiaye"
      },
      {
        quote: "La collaboration avec J-GEN a transformé notre approche des violences sexuelles. Nous sommes plus réactifs et mieux organisés.",
        author: "Dr. Fall",
        role: "Responsable santé, District de Fatick"
      }
    ],

    challenges: [
      {
        icon: <AlertTriangle className="h-5 w-5" />,
        title: "Stigmatisation sociale",
        description: "Les survivantes font face à la stigmatisation et au jugement de la communauté"
      },
      {
        icon: <AlertTriangle className="h-5 w-5" />,
        title: "Réticence à parler",
        description: "Difficulté à briser le silence autour des violences sexuelles par honte ou peur"
      },
      {
        icon: <AlertTriangle className="h-5 w-5" />,
        title: "Ressources limitées",
        description: "Besoin constant de financement pour étendre les services et former plus d'acteurs"
      }
    ],

    nextPhase: {
      title: "Phase II - Poursuivre l'impact",
      objectives: [
        "Étendre l'intervention à d'autres communes de la région",
        "Renforcer les capacités des comités existants",
        "Développer des activités génératrices de revenus pour les survivantes",
        "Créer un réseau régional de lutte contre les VBG",
        "Documenter et capitaliser les bonnes pratiques"
      ],
      duration: "2025-2027",
      target: "100 nouvelles bénéficiaires"
    }
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
          backgroundImage="https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/634dff46-38cb-42c1-80b8-84b059055e87.jpg"
          primaryButtonText="Soutenir la phase II"
          primaryButtonLink="/contact"
          secondaryButtonText="Lire le rapport complet"
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
                  <Users className="h-8 w-8 text-[#E81F74] mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Bénéficiaires</h3>
                  <p className="text-gray-600">{programData.beneficiaries}</p>
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

        {/* Approche holistique */}
        <section className="py-16 bg-[#FDE8F0]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{programData.approach.title}</h2>
              <p className="text-lg text-gray-600">
                Une méthode complète pour un accompagnement efficace des survivantes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programData.approach.phases.map((phase, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#E81F74] rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-white">
                        {phase.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{phase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {phase.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comités de veille */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comités de veille communautaire</h2>
              <p className="text-lg text-gray-600">
                Des mécanismes locaux de protection et d'alerte
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programData.committees.map((committee, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#E81F74]">{committee.name}</CardTitle>
                    <p className="text-sm text-gray-600">{committee.location}</p>
                    <div className="bg-[#FDE8F0] rounded-full px-3 py-1 inline-block">
                      <span className="text-sm font-medium text-[#E81F74]">{committee.members} membres</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Composition :</h4>
                      <ul className="space-y-1">
                        {committee.composition.map((member, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="h-3 w-3 text-[#E81F74]" />
                            <span>{member}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Activités :</h4>
                      <p className="text-sm text-gray-600">{committee.activities}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services offerts */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos services</h2>
              <p className="text-lg text-gray-600">
                Un accompagnement complet pour les survivantes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programData.services.map((service, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-[#FDE8F0] rounded-full flex items-center justify-center">
                        <div className="text-[#E81F74]">
                          {service.icon}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <ChevronRight className="h-4 w-4 text-[#E81F74] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Réalisations */}
        <section className="py-16 bg-[#E81F74] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Notre impact en chiffres</h2>
              <p className="text-xl opacity-90">
                Phase I (2021-2024)
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
                Ce que les bénéficiaires et partenaires disent du programme
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programData.testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-[#FDE8F0] border-0">
                  <CardContent className="pt-6">
                    <MessageCircle className="h-5 w-5 text-[#E81F74] mb-4" />
                    <blockquote className="text-gray-700 italic mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Défis et Phase II */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Défis */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Défis rencontrés</h2>
                  <div className="space-y-4">
                    {programData.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg">
                        <div className="text-[#E81F74] mt-1">
                          {challenge.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{challenge.title}</h4>
                          <p className="text-gray-600 text-sm">{challenge.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phase II */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{programData.nextPhase.title}</h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-4">
                      <span className="text-[#E81F74] font-medium">Durée : </span>
                      <span className="text-gray-700">{programData.nextPhase.duration}</span>
                    </div>
                    <div className="mb-4">
                      <span className="text-[#E81F74] font-medium">Cible : </span>
                      <span className="text-gray-700">{programData.nextPhase.target}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-3">Objectifs :</h4>
                    <ul className="space-y-2">
                      {programData.nextPhase.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-[#E81F74] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{objective}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6">
                      <Button asChild className="w-full bg-[#E81F74] hover:bg-[#E81F74]/90">
                        <Link to="/contact">
                          Soutenir la Phase II
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
      
      <ProgramRelated programId="elles-aussi" />
      <Footer />
    </div>
  )
}
