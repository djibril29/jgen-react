
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { 
  Users, 
  BookOpen, 
  Calendar, 
  MapPin, 
  Star, 
  Target, 
  Award, 
  ArrowRight,
  ChevronRight,
  Clock,
  Globe,
  Lightbulb,
  Shield,
  Heart
} from 'lucide-react'

/**
 * Page UEFProgram - Page détaillée du programme Université d'Été Féministe
 * Présente en détail le programme UEF, ses objectifs, réalisations et impacts
 */
export default function UEFProgram() {
  // Données détaillées du programme
  const programData = {
    title: "Université d'Été Féministe (UEF)",
    subtitle: "Un espace stratégique de mobilisation, de formation et de réflexion féministe",
    description: "L'Université d'Été Féministe d'Afrique de l'Ouest et du Centre est un rendez-vous stratégique qui s'impose comme un véritable catalyseur de mobilisation, de formation et de réflexion féministe pour la région.",
    duration: "Édition annuelle (3 jours)",
    location: "Dakar, Sénégal",
    participants: "275 participantes en 2024",
    year: "Créé en 2023",
    partners: ["FJS", "Fondation HEWLETT", "CENTRE ODAS", "AWDF", "PPG GLOBAL"],
    
    objectives: [
      {
        icon: <Target className="h-6 w-6" />,
        title: "Renforcer l'infrastructure du mouvement",
        description: "Créer et maintenir un espace durable pour le mouvement féministe régional"
      },
      {
        icon: <BookOpen className="h-6 w-6" />,
        title: "Capitaliser les savoirs féministes",
        description: "Documenter et partager les connaissances et expériences des militantes"
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Former les leaders de demain",
        description: "Renforcer les capacités des jeunes militantes féministes"
      },
      {
        icon: <Globe className="h-6 w-6" />,
        title: "Créer des réseaux internationaux",
        description: "Faciliter les échanges et collaborations entre féministes africaines"
      }
    ],

    achievements2024: [
      {
        number: "275",
        label: "participantes engagées",
        description: "Militantes et alliées de plusieurs pays d'Afrique francophone"
      },
      {
        number: "18",
        label: "panels et ateliers",
        description: "Sessions pratiques sur des thématiques féministes progressistes"
      },
      {
        number: "10",
        label: "militantes honorées",
        description: "Reconnaissance de l'engagement exemplaire de féministes noires"
      },
      {
        number: "10",
        label: "outils pratiques produits",
        description: "Ressources sur les DSSR et l'avortement sécurisé"
      }
    ],

    themes: [
      {
        title: "Autonomie corporelle",
        icon: <Heart className="h-5 w-5" />,
        description: "Droit au choix et à la décision sur son propre corps"
      },
      {
        title: "Justice économique",
        icon: <Target className="h-5 w-5" />,
        description: "Lutte contre les inégalités économiques de genre"
      },
      {
        title: "DSSR",
        icon: <Shield className="h-5 w-5" />,
        description: "Droits sexuels et reproductifs comme droits humains"
      },
      {
        title: "Justice climatique",
        icon: <Globe className="h-5 w-5" />,
        description: "Impact du changement climatique sur les femmes et filles"
      },
      {
        title: "Numérique féministe",
        icon: <Lightbulb className="h-5 w-5" />,
        description: "Utilisation des technologies pour le militantisme"
      },
      {
        title: "Intersectionnalité",
        icon: <Users className="h-5 w-5" />,
        description: "Approche croisée des discriminations"
      }
    ],

    hubFeatures: [
      {
        title: "Espace documentaire",
        description: "Archives numériques des productions féministes africaines"
      },
      {
        title: "Plateforme d'apprentissage",
        description: "Ressources éducatives et modules de formation en ligne"
      },
      {
        title: "Réseau de mentorat",
        description: "Connexion entre militantes expérimentées et jeunes féministes"
      },
      {
        title: "Laboratoire d'idées",
        description: "Espace de co-création de stratégies féministes innovantes"
      }
    ],

    testimonials: [
      {
        quote: "L'UEF a transformé ma manière de concevoir le militantisme. J'ai acquis des outils concrets pour mener des actions dans ma communauté.",
        author: "Aminata T.",
        role: "Participante 2024, Mali"
      },
      {
        quote: "C'est plus qu'une formation, c'est une famille. Les liens créés ici nous soutiennent dans notre combat quotidien.",
        author: "Fatou N.",
        role: "Participante 2023, Sénégal"
      },
      {
        quote: "Le Hub numérique va révolutionner l'accès aux ressources féministes en Afrique francophone.",
        author: "Marie K.",
        role: "Formatrice, Côte d'Ivoire"
      }
    ],

    nextSteps: [
      "Finaliser la mise en opérationnelle du Hub d'excellence numérique",
      "Développer des formations en ligne pour élargir l'impact",
      "Créer des antennes nationales dans d'autres pays d'Afrique de l'Ouest",
      "Établir des partenariats avec les universités pour la recherche féministe"
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
          backgroundImage="https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/7c790be6-1d62-40d1-bd21-675869ca7f39.jpg"
          primaryButtonText="S'inscrire à l'édition 2025"
          primaryButtonLink="/contact"
          secondaryButtonText="Télécharger le rapport"
          secondaryButtonLink="/ressources"
        />

        {/* Informations clés */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Calendar className="h-8 w-8 text-[#E81F74] mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Durée</h3>
                  <p className="text-gray-600">{programData.duration}</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 text-[#E81F74] mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Lieu</h3>
                  <p className="text-gray-600">{programData.location}</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 text-[#E81F74] mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Participants</h3>
                  <p className="text-gray-600">{programData.participants}</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="h-8 w-8 text-[#E81F74] mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Création</h3>
                  <p className="text-gray-600">{programData.year}</p>
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

        {/* Réalisations 2024 */}
        <section className="py-16 bg-[#FDE8F0]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">L'édition 2024 en chiffres</h2>
              <p className="text-lg text-gray-600">
                Des résultats concrets qui démontrent l'impact de notre engagement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programData.achievements2024.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#E81F74] mb-2">
                    {achievement.number}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.label}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Thèmes abordés */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thèmes abordés</h2>
              <p className="text-lg text-gray-600">
                Les grandes thématiques qui animent nos réflexions et ateliers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programData.themes.map((theme, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#FDE8F0] rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-[#E81F74]">
                        {theme.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{theme.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {theme.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Hub d'excellence numérique */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Hub d'excellence numérique</h2>
                  <p className="text-gray-600 mb-6">
                    Lancé officiellement lors de l'édition 2024, le Hub d'excellence numérique de l'UEF est un espace créatif, technologique et documentaire dédié à la capitalisation des ressources féministes en Afrique francophone.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Ce Hub vise à rendre les savoirs féministes accessibles, à documenter les trajectoires militantes, et à créer un écosystème numérique au service du mouvement féministe africain.
                  </p>
                  
                  <div className="space-y-4">
                    {programData.hubFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <ChevronRight className="h-5 w-5 text-[#E81F74] mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/0d354a60-7a8b-45de-84be-64012fce9a3f.jpg" 
                      alt="Hub d'excellence numérique"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Témoignages</h2>
              <p className="text-lg text-gray-600">
                Ce que les participantes disent de leur expérience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programData.testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-[#FDE8F0] border-0">
                  <CardContent className="pt-6">
                    <Star className="h-5 w-5 text-[#E81F74] mb-4" />
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

        {/* Partenaires */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos partenaires</h2>
              <p className="text-lg text-gray-600">
                Merci à nos partenaires qui rendent ce programme possible
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {programData.partners.map((partner, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-16 h-16 bg-[#FDE8F0] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-[#E81F74]" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prochaines étapes */}
        <section className="py-16 bg-[#E81F74] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Prochaines étapes</h2>
              <p className="text-xl mb-8">
                Notre vision pour l'avenir de l'Université d'Été Féministe
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {programData.nextSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <p className="text-left">{step}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild size="lg" className="bg-white text-[#E81F74] hover:bg-gray-100">
                  <Link to="/contact">
                    Devenir partenaire
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#E81F74]">
                  <Link to="/programmes">
                    Voir autres programmes
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
