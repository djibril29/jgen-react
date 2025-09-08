
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ProgramRelated from '@/components/ProgramRelated'
import { 
  Users, 
  Target, 
  Award, 
  ArrowRight,
  ChevronRight,
  Clock,
  MapPin,
  BookOpen,
  TrendingUp,
  Calendar,
  CheckCircle,
  DollarSign,
  Lightbulb,
  Star,
  Heart
} from 'lucide-react'

/**
 * Page LiggeeyalElegProgram - Page détaillée du programme LIGGEEYAL ËLËG
 * Présente en détail le programme d'autonomisation économique des jeunes filles et femmes
 */
export default function LiggeeyalElegProgram() {
  // Données détaillées du programme
  const programData = {
    title: "LIGGEEYAL ËLËG",
    subtitle: "Autonomisation économique des jeunes filles et femmes vulnérables",
    description: "Un projet de 3 ans pour l'autonomisation économique des jeunes filles et femmes vulnérables dans les régions de Kaolack et Fatick, financé par l'Organisation Internationale de la Francophonie (OIF).",
    duration: "Novembre 2024 - Octobre 2027",
    location: "Régions de Kaolack et Fatick",
    focus: "Autonomisation économique et entrepreneuriat féminin",
    partner: "Organisation Internationale de la Francophonie (OIF)",
    program: "Programme Francophonie pour ELLES",
    
    objectives: [
      {
        icon: <Target className="h-6 w-6" />,
        title: "Renforcer les capacités entrepreneuriales",
        description: "Former les jeunes filles et femmes aux compétences entrepreneuriales et à la gestion d'entreprise"
      },
      {
        icon: <DollarSign className="h-6 w-6" />,
        title: "Faciliter l'accès au financement",
        description: "Mettre en place des mécanismes de financement adaptés aux femmes entrepreneures"
      },
      {
        icon: <BookOpen className="h-6 w-6" />,
        title: "Développer l'alphabétisation fonctionnelle",
        description: "Renforcer les compétences de base en lecture, écriture et calcul"
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Créer un réseau de soutien",
        description: "Établir un réseau de mentorat et de solidarité entre femmes entrepreneures"
      }
    ],

    context: {
      title: "Contexte et justification",
      challenges: [
        {
          title: "Niveau élevé de vulnérabilité",
          description: "Les filles et femmes des régions de Kaolack et Fatick font face à une précarité économique importante"
        },
        {
          title: "Déscolarisation massive",
          description: "Taux élevé de déscolarisation et de non-scolarisation des jeunes filles limitant leurs opportunités"
        },
        {
          title: "Inégalités de genre persistantes",
          description: "Discriminations systémiques qui maintiennent les femmes dans des positions économiques précaires"
        },
        {
          title: "Accès limité aux ressources",
          description: "Difficultés d'accès au crédit, à la formation et aux marchés pour les femmes entrepreneures"
        }
      ],
      opportunity: "Le programme répond à un besoin urgent d'autonomisation économique comme levier d'émancipation et de réduction des violences basées sur le genre."
    },

    targetGroups: [
      {
        name: "Jeunes filles déscolarisées",
        age: "15-24 ans",
        number: "300 bénéficiaires directes",
        needs: ["Alphabétisation", "Formation professionnelle", "Soutien psychosocial"],
        objectives: "Réinsertion économique et sociale par l'entrepreneuriat adapté"
      },
      {
        name: "Femmes chefs de ménage",
        age: "25-45 ans",
        number: "200 bénéficiaires directes",
        needs: ["Développement d'activités génératrices de revenus", "Accès au microcrédit", "Gestion d'entreprise"],
        objectives: "Amélioration des revenus et autonomie décisionnelle au sein du ménage"
      },
      {
        name: "Femmes en situation de précarité",
        age: "18-35 ans",
        number: "100 bénéficiaires directes",
        needs: ["Formation qualifiante", "Accompagnement à la création d'entreprise", "Mentorat"],
        objectives: "Création d'entreprises durables et intégration économique"
      }
    ],

    approach: {
      title: "Notre approche intégrée",
      components: [
        {
          title: "Diagnostic participatif",
          description: "Identification des besoins et potentiels avec les bénéficiaires",
          icon: <Target className="h-5 w-5" />
        },
        {
          title: "Formation modulaire",
          description: "Parcours de formation adaptés aux niveaux et besoins spécifiques",
          icon: <BookOpen className="h-5 w-5" />
        },
        {
          title: "Accompagnement personnalisé",
          description: "Suivi individualisé pour chaque bénéficiaire",
          icon: <Heart className="h-5 w-5" />
        },
        {
          title: "Mise en réseau",
          description: "Création de liens entre entrepreneures et avec les marchés",
          icon: <Users className="h-5 w-5" />
        }
      ]
    },

    activities: [
      {
        icon: <BookOpen className="h-6 w-6" />,
        title: "Alphabétisation fonctionnelle",
        description: "Renforcement des compétences de base en lecture, écriture et calcul",
        details: [
          "Centres d'alphabétisation dans les zones cibles",
          "Approche pédagogique adaptée au contexte local",
          "Matériel didactique en langues locales",
          "Formation des alphabétiseurs communautaires"
        ],
        duration: "12 mois par cohorte"
      },
      {
        icon: <Target className="h-6 w-6" />,
        title: "Formation professionnelle",
        description: "Développement de compétences techniques et entrepreneuriales",
        details: [
          "Identification des filières porteuses locales",
          "Formation aux métiers demandeurs (couture, transformation alimentaire, artisanat)",
          "Modules de gestion et comptabilité",
          "Marketing et commercialisation des produits"
        ],
        duration: "6-9 mois selon les filières"
      },
      {
        icon: <DollarSign className="h-6 w-6" />,
        title: "Accès au financement",
        description: "Mécanismes de financement adaptés aux femmes entrepreneures",
        details: [
          "Fonds de crédit rotatif",
          "Formation à l'élaboration de plans d'affaires",
          "Accompagnement bancaire",
          "Partenariats avec institutions financières locales"
        ],
        target: "500 femmes bénéficiaires de crédits"
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Mentorat et mise en réseau",
        description: "Accompagnement continu et création de liens professionnels",
        details: [
          "Programme de mentorat par des entrepreneures expérimentées",
          "Création de coopératives et groupements d'intérêt économique",
          "Salons et foires pour la commercialisation",
          "Plateforme numérique de mise en relation"
        ],
        impact: "Création d'un écosystème de soutien"
      }
    ],

    expectedResults: [
      {
        number: "600",
        label: "femmes et filles formées",
        description: "Bénéficiaires directes des formations et accompagnements"
      },
      {
        number: "300",
        label: "micro-entreprises créées",
        description: "Activités économiques génératrices de revenus"
      },
      {
        number: "70%",
        label: "d'augmentation de revenus",
        description: "Amélioration moyenne des revenus des bénéficiaires"
      },
      {
        number: "15",
        label: "coopératives créées",
        description: "Structures collectives pour le développement économique"
      }
    ],

    implementationStrategy: {
      phases: [
        {
          name: "Phase de démarrage",
          period: "Novembre 2024 - Avril 2025",
          activities: [
            "Missions d'introduction et présentation du projet",
            "Recrutement et formation de l'équipe technique",
            "Identification et sélection des bénéficiaires",
            "Diagnostic approfondi des besoins locaux",
            "Mise en place des comités de suivi"
          ],
          deliverables: [
            "Base de données des bénéficiaires",
            "Plan de mise en œuvre détaillé",
            "Comités opérationnels dans chaque région",
            "Partenariats formalisés avec les autorités locales"
          ]
        },
        {
          name: "Phase de mise en œuvre",
          period: "Mai 2025 - Avril 2027",
          activities: [
            "Lancement des centres d'alphabétisation",
            "Début des formations professionnelles",
            "Mise en place du fonds de crédit",
            "Démarrage du programme de mentorat",
            "Organisation de foires commerciales",
            "Suivi-évaluation continu"
          ],
          deliverables: [
            "600 femmes et filles alphabétisées et formées",
            "300 micro-entreprises fonctionnelles",
            "15 coopératives en activité",
            "Réseaux de mentorat opérationnels"
          ]
        },
        {
          name: "Phase de consolidation",
          period: "Mai 2027 - Octobre 2027",
          activities: [
            "Évaluation finale des impacts",
            "Planification de la pérennisation",
            "Capitalisation des bonnes pratiques",
            "Élaboration des stratégies de sortie",
            "Cérémonie de clôture et partage des résultats"
          ],
          deliverables: [
            "Rapport d'évaluation finale",
            "Plan de durabilité",
            "Publication des leçons apprises",
            "Documentaire sur le projet"
          ]
        }
      ]
    },

    partnerships: {
      title: "Partenaires stratégiques",
      institutions: [
        {
          name: "Autorités locales",
          role: "Appui institutionnel, facilitation administrative",
          contribution: "Mise à disposition d'espaces, intégration dans les plans locaux"
        },
        {
          name: "Services techniques de l'État",
          role: "Appui technique, encadrement",
          contribution: "Expertise sectorielle, formation des formateurs"
        },
        {
          name: "Institutions financières",
          role: "Financement, services bancaires",
          contribution: "Produits financiers adaptés, formation financière"
        },
        {
          name: "Organisations de la société civile",
          role: "Relais communautaires, mobilisation",
          contribution: "Sensibilisation, identification des bénéficiaires, suivi"
        }
      ]
    },

    sustainability: [
      "Autonomisation progressive des structures créées",
      "Formation des formateurs locaux pour la pérennisation",
      "Création de fonds de capitalisation autogérés",
      "Intégration dans les politiques locales de développement",
      "Développement de partenariats économiques durables",
      "Système de monitoring participatif"
    ],

    innovation: {
      title: "Approches innovantes",
      aspects: [
        {
          title: "Intégration numérique",
          description: "Utilisation du mobile pour le suivi, la formation et la mise en marché"
        },
        {
          title: "Approche chaîne de valeur",
          description: "Intervention sur toute la chaîne de valeur des filières porteuses"
        },
        {
          title: "Finance inclusive",
          description: "Mécanismes financiers adaptés aux réalités locales des femmes"
        },
        {
          title: "Mentorat inversé",
          description: "Bénéficiaires formées deviennent mentores pour d'autres"
        }
      ]
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
          backgroundImage="https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/46d8f3a7-eda1-47a4-a71e-bff8b6641581.jpg"
          primaryButtonText="Devenir partenaire"
          primaryButtonLink="/contact"
          secondaryButtonText="Suivre l'actualité"
          secondaryButtonLink="/blog"
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
                  <h3 className="font-semibold text-gray-900">Financeur</h3>
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

        {/* Contexte */}
        <section className="py-16 bg-[#FDE8F0]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{programData.context.title}</h2>
              <p className="text-lg text-gray-600">
                Comprendre les défis et opportunités qui motivent notre action
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {programData.context.challenges.map((challenge, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-[#E81F74]">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {challenge.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Opportunité d'intervention :</h3>
              <p className="text-gray-700">{programData.context.opportunity}</p>
            </div>
          </div>
        </section>

        {/* Groupes cibles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Groupes cibles</h2>
              <p className="text-lg text-gray-600">
                Les bénéficiaires prioritaires de notre intervention
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programData.targetGroups.map((group, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#E81F74]">{group.name}</CardTitle>
                    <p className="text-sm text-gray-600">{group.age} • {group.number}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Besoins identifiés :</h4>
                      <ul className="space-y-1">
                        {group.needs.map((need, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="h-3 w-3 text-[#E81F74]" />
                            <span>{need}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Objectifs :</h4>
                      <p className="text-sm text-gray-600">{group.objectives}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Approche */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{programData.approach.title}</h2>
              <p className="text-lg text-gray-600">
                Une méthode globale pour une autonomisation durable
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programData.approach.components.map((component, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#E81F74] rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-white">
                        {component.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{component.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {component.description}
                    </CardDescription>
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
                Nos interventions clés pour l'autonomisation économique
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
                      <p className="text-sm font-medium text-[#E81F74]">
                        {activity.duration ? `Durée : ${activity.duration}` : `Cible : ${activity.target}`}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stratégie de mise en œuvre */}
        <section className="py-16 bg-[#FDE8F0]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Stratégie de mise en œuvre</h2>
              
              <div className="space-y-8">
                {programData.implementationStrategy.phases.map((phase, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="bg-[#E81F74] h-1"></div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{phase.name}</CardTitle>
                        <span className="px-3 py-1 bg-[#E81F74] text-white rounded-full text-sm">
                          {phase.period}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Activités prévues :</h4>
                          <ul className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <CheckCircle className="h-4 w-4 text-[#E81F74] mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Livrables attendus :</h4>
                          <ul className="space-y-2">
                            {phase.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <TrendingUp className="h-4 w-4 text-[#E81F74] mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Résultats attendus */}
        <section className="py-16 bg-[#E81F74] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Résultats attendus</h2>
              <p className="text-xl opacity-90">
                Notre vision d'impact pour les 3 ans du programme
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programData.expectedResults.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {result.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {result.label}
                  </h3>
                  <p className="text-sm opacity-80">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovation et durabilité */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Innovation */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{programData.innovation.title}</h2>
                  <div className="space-y-4">
                    {programData.innovation.aspects.map((aspect, index) => (
                      <div key={index} className="bg-[#FDE8F0] rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{aspect.title}</h4>
                        <p className="text-sm text-gray-700">{aspect.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Durabilité */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Durabilité</h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-600 mb-4">
                      Pour assurer la pérennité des impacts, nous mettons en place :
                    </p>
                    <ul className="space-y-3">
                      {programData.sustainability.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-[#E81F74] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6">
                      <Button asChild className="bg-[#E81F74] hover:bg-[#E81F74]/90">
                        <Link to="/contact">
                          Contribuer au programme
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partenariats */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{programData.partnerships.title}</h2>
              <p className="text-lg text-gray-600">
                La force de la collaboration pour un impact durable
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programData.partnerships.institutions.map((institution, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{institution.name}</CardTitle>
                    <span className="px-2 py-1 bg-[#FDE8F0] text-[#E81F74] rounded-full text-xs">
                      {institution.role}
                    </span>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Contribution :</h4>
                      <p className="text-sm text-gray-600 mb-3">{institution.contribution}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <ProgramRelated programId="liggeeyal-eleg" />
      <Footer />
    </div>
  )
}
