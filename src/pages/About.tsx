
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, Target, Award, Globe, Heart, Star, Shield, Hand, Megaphone } from 'lucide-react'

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

  const principles = [
    "L'autonomie corporelle est un droit non négociable.",
    "L'autonomisation économique est un levier d'égalité.",
    "Les filles et les femmes sont expertes de leurs vécus.",
    "Le plaidoyer doit être guidé par leurs voix et besoins.",
    "La lutte contre les rapports de pouvoir exige un engagement anti-raciste et anti-colonial."
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Vision & Mission */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B2A31] mb-4">Notre vision et mission</h1>
                <p className="text-xl font-semibold text-[#1B2A31] mb-4">
                  L'obstacle majeur à l'égalité est la persistance du manque d'autonomie et d'intégrité des filles et des femmes.
                </p>
                <p className="text-gray-700">
                  J-GEN est une association à but non lucratif créée en 2016 avec pour mission de contribuer à l'égalité des sexes
                  à travers l'autonomisation des femmes et des filles. Nous menons une approche holistique qui combine
                  renforcement de capacités, plaidoyer, mobilisation communautaire et soutien psychologique.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="border-8" style={{ borderColor: '#F3D3B7' }}>
                  <div className="h-48 bg-[#1B2A31]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Goals / Objectifs */}
        <section className="py-16" style={{ backgroundColor: '#1B2A31' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10">Nos objectifs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {interventionAreas.slice(0,4).map((area, i) => (
                <Card key={i} className="overflow-hidden border-0 shadow-lg" style={{ backgroundColor: '#F3D3B7' }}>
                  <CardHeader className="pb-3 flex flex-row items-center justify-between">
                    <CardTitle className="text-[#1B2A31]">Objectif {i+1}</CardTitle>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1B2A31', color: '#F3D3B7' }}>
                      {i===0 && <Shield className="h-5 w-5" />}
                      {i===1 && <Hand className="h-5 w-5" />}
                      {i===2 && <Megaphone className="h-5 w-5" />}
                      {i===3 && <Target className="h-5 w-5" />}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-[#1B2A31]">{area}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Banner image */}
        <section className="bg-white">
          <div className="container mx-auto px-4">
            <div className="rounded-xl overflow-hidden shadow">
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600&auto=format&fit=crop"
                alt="Femmes et leadership"
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Tagline */}
        <section className="py-12 bg-[#F3D3B7]">
          <div className="container mx-auto px-4 text-center">
            <p className="text-2xl md:text-3xl font-extrabold text-[#1B2A31] max-w-4xl mx-auto">
            La vision de J-GEN est d'être une référence dans l’accompagnement des femmes et de filles
pour une meilleure prise en charge de leurs droits fondamentaux particulièrement en matière
de santé et bien-être, d’insertion socioprofessionnelle, de participation politique entre autres.
            </p>
          </div>
        </section>

        {/* Values & Principles side by side */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Valeurs */}
            <div>
              <h3 className="text-2xl font-extrabold text-[#1B2A31] mb-4">Nos valeurs</h3>
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: '#1B2A31' }}>
                        {value.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-[#1B2A31]">{value.title}</div>
                        <div className="text-gray-600 text-sm">{value.description}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Principes */}
            <div>
              <h3 className="text-2xl font-extrabold text-[#1B2A31] mb-4">Nos principes</h3>
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {principles.map((p, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#1B2A31]">
                        <span className="mt-1 inline-block w-2 h-2 rounded-full" style={{ backgroundColor: '#9B153E' }} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Engagement & Parcours */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-extrabold text-[#1B2A31] mb-6">Notre engagement</h3>
            <p className="text-gray-700 mb-6 max-w-5xl">
              Nous ancrons nos actions dans des valeurs anti-racistes et anti-coloniales. Nous reconnaissons les
              déséquilibres de pouvoir et œuvrons à les transformer, en plaçant au centre l’expertise et les besoins
              des filles et des femmes.
            </p>
            <h3 className="text-2xl font-extrabold text-[#1B2A31] mb-4">Notre parcours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyFigures.map((k, i) => (
                <Card key={i} className="border-0 shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-[#1B2A31]">{k.year}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-gray-700">{k.event}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Appel à l'action */}
        <section className="py-16 bg-[#1B2A31] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rejoignez notre mouvement</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Votre engagement nous permet de continuer notre lutte pour les droits des femmes et des filles.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-white text-[#1B2A31] hover:bg-gray-100">
                <Link to="/contact">
                  Devenir bénévole
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#1B2A31]">
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
