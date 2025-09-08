
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ProgramRelated from '@/components/ProgramRelated'
import { 
  Users, 
  Baby, 
  Shield, 
  Target, 
  Award, 
  ArrowRight,
  ChevronRight,
  Clock,
  MapPin,
  BookOpen,
  School,
  Home,
  Calendar,
  CheckCircle,
  TrendingUp,
  Heart
} from 'lucide-react'

/**
 * Page ProscidesProgram - Page détaillée du programme PROSCIDES
 * Présente en détail le programme de protection des droits de l'enfant
 */
export default function ProscidesProgram() {
  // Données détaillées du programme
  const programData = {
    title: "PROSCIDES",
    subtitle: "Protection et Solidarité pour les Droits de l'Enfant au Sénégal",
    description: "Un programme phare de renforcement des organisations de la société civile pour la promotion et la protection des droits de l'enfant, financé par Save the Children Suède.",
    duration: "2022 - 2024",
    location: "Pikine et Kaolack",
    focus: "Droits de l'enfant et participation citoyenne",
    partner: "Save the Children Suède",
    
    objectives: [
      {
        icon: <Baby className="h-6 w-6" />,
        title: "Renforcer la participation des enfants",
        description: "Créer des espaces de participation active des enfants à la vie citoyenne"
      },
      {
        icon: <Shield className="h-6 w-6" />,
        title: "Protéger les droits fondamentaux",
        description: "Assurer la promotion et la protection des droits de l'enfant"
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Renforcer les capacités des OSC",
        description: "Développer les compétences des organisations de la société civile"
      },
      {
        icon: <Target className="h-6 w-6" />,
        title: "Créer des partenariats stratégiques",
        description: "Établir des collaborations avec les autorités locales et services sociaux"
      }
    ],

    childrenFrameworks: [
      {
        name: "Cadre de Pikine Nord",
        location: "Pikine, Région de Dakar",
        children: "25 enfants membres",
        activities: [
          "Sessions hebdomadaires de participation citoyenne",
          "Ateliers sur les droits de l'enfant",
          "Actions de sensibilisation dans la communauté",
          "Projets environnementaux locaux"
        ],
        achievements: [
          "Organisation de 2 journées de l'enfant",
          "Création d'un jardin scolaire",
          "Campagne de propreté dans le quartier"
        ]
      },
      {
        name: "Cadre de Pikine Sud",
        location: "Pikine, Région de Dakar",
        children: "30 enfants membres",
        activities: [
          "Débats sur les droits à l'éducation",
          "Théâtre forum sur les violences",
          "Visites institutionnelles",
          "Radio scolaire"
        ],
        achievements: [
          "Production d'une pièce de théâtre",
          "Émission radio mensuelle",
          "Rencontre avec le maire de Pikine"
        ]
      },
      {
        name: "Cadre de Kaolack Nord",
        location: "Kaolack, Région de Kaolack",
        children: "20 enfants membres",
        activities: [
          "Ateliers de paix et sécurité",
          "Sensibilisation sur le mariage d'enfants",
          "Actions sportives et culturelles",
          "Jumelage avec d'autres cadres"
        ],
        achievements: [
          "Tournoi de paix inter-quartiers",
          "Caravane contre le mariage précoce",
          "Festival culturel des enfants"
        ]
      },
      {
        name: "Cadre de Kaolack Sud",
        location: "Kaolack, Région de Kaolack",
        children: "22 enfants membres",
        activities: [
          "Club de lecture",
          "Ateliers d'expression artistique",
          "Sensibilisation sur l'hygiène",
          "Actions de solidarité"
        ],
        achievements: [
          "Bibliothèque communautaire",
          "Exposition d'art enfantin",
          "Opération 'scolarisation pour tous'"
        ]
      }
    ],

    methodology: {
      title: "Notre méthodologie",
      approaches: [
        {
          title: "Approche participative",
          description: "Les enfants sont acteurs de leur propre développement",
          icon: <Users className="h-5 w-5" />
        },
        {
          title: "Approche droits-based",
          description: "Centrée sur les droits fondamentaux de l'enfant",
          icon: <Shield className="h-5 w-5" />
        },
        {
          title: "Approche communautaire",
          description: "Implication de tous les acteurs locaux",
          icon: <Home className="h-5 w-5" />
        },
        {
          title: "Approche genre",
          description: "Attention particulière aux filles et aux vulnérabilités spécifiques",
          icon: <Heart className="h-5 w-5" />
        }
      ]
    },

    achievements: [
      {
        number: "4",
        label: "Cadres d'enfants créés",
        description: "Espaces structurés de participation enfantine"
      },
      {
        number: "2",
        label: "Établissements scolaires partenaires",
        description: "Collaboration active avec le système éducatif"
      },
      {
        number: "2000+",
        label: "Personnes sensibilisées",
        description: "Impact communautaire à travers nos actions"
      },
      {
        number: "97",
        label: "Enfants actifs",
        description: "Membres engagés dans les cadres de participation"
      }
    ],

    keyActivities: [
      {
        icon: <School className="h-6 w-6" />,
        title: "Formation des enfants",
        description: "Renforcement des capacités en matière de droits, participation citoyenne et leadership",
        details: [
          "Sessions de formation sur la Convention internationale des droits de l'enfant",
          "Ateliers de communication et expression",
          "Formation en leadership et prise de parole",
          "Initiation à la gestion de projets"
        ]
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Sensibilisation communautaire",
        description: "Actions de sensibilisation auprès des parents, leaders et autorités",
        details: [
          "Campagnes de porte-à-porte",
          "Émissions radiophoniques communautaires",
          "Rencontres avec les leaders religieux et coutumiers",
          "Journées de mobilisation sociale"
        ]
      },
      {
        icon: <Target className="h-6 w-6" />,
        title: "Plaidoyer institutionnel",
        description: "Dialogue avec les autorités pour l'application des politiques de protection",
        details: [
          "Réunions régulières avec les autorités municipales",
          "Participation aux conseils locaux de protection de l'enfance",
          "Propositions d'amélioration des services sociaux",
          "Suivi des politiques locales en faveur de l'enfance"
        ]
      },
      {
        icon: <BookOpen className="h-6 w-6" />,
        title: "Documentation et capitalisation",
        description: "Production de ressources et partage des bonnes pratiques",
        details: [
          "Rapports d'activités et études d'impact",
          "Guides méthodologiques",
          "Base de données des enfants participants",
          "Articles et publications sur les droits de l'enfant"
        ]
      }
    ],

    impactStories: [
      {
        title: "Amina, 14 ans",
        story: "Avant de rejoindre le cadre, j'avais peur de parler en public. Maintenant je peux animer des réunions et défendre mes droits. Je veux devenir avocate.",
        location: "Cadre de Pikine Nord",
        change: "Confiance en soi et leadership"
      },
      {
        title: "Moussa, 12 ans",
        story: "Grâce aux formations, j'ai compris que j'avais le droit à l'éducation et à la protection. J'ai aidé mon ami à retourner à l'école.",
        location: "Cadre de Kaolack Sud",
        change: "Connaissance des droits et solidarité"
      },
      {
        title: "Fatou, 15 ans",
        story: "Notre théâtre forum sur le mariage d'enfants a fait changer beaucoup d'idées dans notre communauté. Les parents écoutent maintenant les enfants.",
        location: "Cadre de Pikine Sud",
        change: "Impact communautaire et changement social"
      }
    ],

    partnerships: [
      {
        name: "Écoles partenaires",
        type: "Institutionnel",
        contribution: "Mise à disposition d'espaces, enseignants relais, participation aux activités",
        impact: "Renforcement du lien école-communauté"
      },
      {
        name: "Mairies de Pikine et Kaolack",
        type: "Autorités locales",
        contribution: "Soutien logistique, participation aux événements, intégration dans les politiques locales",
        impact: "Institutionnalisation de la participation enfantine"
      },
      {
        name: "Services sociaux",
        type: "Technique",
        contribution: "Expertise, orientation des cas, formation des encadreurs",
        impact: "Amélioration de la protection des enfants vulnérables"
      },
      {
        name: "Associations locales",
        type: "Société civile",
        contribution: "Relais communautaires, volontaires, partage d'expériences",
        impact: "Durabilité et ancrage local"
      }
    ],

    lessonsLearned: [
      {
        title: "La participation des enfants est transformative",
        description: "Quand on leur donne les moyens et l'espace, les enfants deviennent des acteurs de changement dans leurs communautés."
      },
      {
        title: "L'approche multi-acteurs est essentielle",
        description: "La protection des enfants nécessite la collaboration de tous : famille, école, autorités, société civile."
      },
      {
        title: "Le renforcement des capacités est continu",
        description: "Les enfants et les adultes ont besoin d'un accompagnement constant pour maintenir et développer leurs compétences."
      },
      {
        title: "L'adaptation au contexte local est cruciale",
        description: "Les stratégies doivent être adaptées aux réalités culturelles et sociales de chaque communauté."
      }
    ],

    sustainability: [
      "Autonomisation progressive des cadres d'enfants",
      "Formation des animateurs communautaires locaux",
      "Intégration des activités dans les programmes municipaux",
      "Création de fonds de soutien locaux",
      "Développement de partenariats économiques locaux",
      "Système de monitoring et évaluation communautaire"
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
          backgroundImage="https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/26c49af7-4aa8-4702-987c-f0eda492f31b.jpg"
          primaryButtonText="Soutenir le programme"
          primaryButtonLink="/contact"
          secondaryButtonText="Voir les ressources"
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

        {/* Méthodologie */}
        <section className="py-16 bg-[#FDE8F0]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{programData.methodology.title}</h2>
              <p className="text-lg text-gray-600">
                Approches innovantes pour une protection efficace des droits de l'enfant
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programData.methodology.approaches.map((approach, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#E81F74] rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-white">
                        {approach.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{approach.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {approach.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cadres d'enfants */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Les cadres de participation des enfants</h2>
              <p className="text-lg text-gray-600">
                Quatre espaces structurés pour la participation active des enfants
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programData.childrenFrameworks.map((framework, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#E81F74]">{framework.name}</CardTitle>
                    <p className="text-sm text-gray-600">{framework.location}</p>
                    <div className="bg-[#FDE8F0] rounded-full px-3 py-1 inline-block">
                      <span className="text-sm font-medium text-[#E81F74]">{framework.children}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Activités principales :</h4>
                      <ul className="space-y-1">
                        {framework.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="h-3 w-3 text-[#E81F74]" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Réalisations marquantes :</h4>
                      <ul className="space-y-1">
                        {framework.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <TrendingUp className="h-3 w-3 text-[#E81F74]" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Activités clés */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Activités clés</h2>
              <p className="text-lg text-gray-600">
                Nos interventions principales pour la protection des droits de l'enfant
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programData.keyActivities.map((activity, index) => (
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
                    <ul className="space-y-2">
                      {activity.details.map((detail, idx) => (
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
                Trois ans d'engagement pour les droits de l'enfant
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Transformations vécues</h2>
              <p className="text-lg text-gray-600">
                Les enfants racontent leur expérience et leur évolution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programData.impactStories.map((story, index) => (
                <Card key={index} className="bg-[#FDE8F0] border-0">
                  <CardContent className="pt-6">
                    <Baby className="h-5 w-5 text-[#E81F74] mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">{story.title}</h4>
                    <p className="text-gray-700 text-sm mb-3 italic">
                      "{story.story}"
                    </p>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-600">{story.location}</p>
                      <p className="text-xs font-medium text-[#E81F74]">{story.change}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partenariats */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos partenaires</h2>
              <p className="text-lg text-gray-600">
                La force de la collaboration pour la protection des enfants
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programData.partnerships.map((partnership, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{partnership.name}</CardTitle>
                      <span className="px-2 py-1 bg-[#FDE8F0] text-[#E81F74] rounded-full text-xs">
                        {partnership.type}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3">
                      <h4 className="font-semibold text-gray-900 mb-1">Contribution :</h4>
                      <p className="text-sm text-gray-600">{partnership.contribution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Impact :</h4>
                      <p className="text-sm text-gray-600">{partnership.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leçons apprises et durabilité */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Leçons apprises */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Leçons apprises</h2>
                  <div className="space-y-4">
                    {programData.lessonsLearned.map((lesson, index) => (
                      <div key={index} className="bg-[#FDE8F0] rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{lesson.title}</h4>
                        <p className="text-sm text-gray-700">{lesson.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Durabilité */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Durabilité</h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-600 mb-4">
                      Pour assurer la pérennité des acquis, nous avons mis en place une stratégie de durabilité basée sur :
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
                          Contribuer à la durabilité
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
      
      <ProgramRelated programId="proscides" />
      <Footer />
    </div>
  )
}
