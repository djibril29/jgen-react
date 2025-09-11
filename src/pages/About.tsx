
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, Target, Award, Globe, Heart, Star, Shield, Hand, Megaphone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import uefImg from '@/assets/images/projects/uef/uef1.png'
import proscidesImg from '@/assets/images/projects/proscides/proscide1.jpeg'
import jvImg from '@/assets/images/projects/jeunes-volontaires/jeunevolontaire.jpeg'
import heroBg from '@/assets/images/backgrounds/herobg1.png'

/**
 * Page À propos - Présentation détaillée de l'organisation J-GEN
 * Historique, mission, vision, valeurs et équipe
 */
export default function AboutPage() {
  const { t } = useTranslation()
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
  const axes = [
    {
      title: 'LE PLAIDOYER',
      image: uefImg as string,
      text:
        "Le Plaidoyer est l’un de nos moyens d’intervention les plus efficaces, avec nos cibles, nos bénéficiaires et nos partenaires. Nous portons des plaidoyer forts en direction des décideurs et sur les sujets liés aux grands défis et enjeux en matière d’égalité des sexes au Sénégal .",
    },
    {
      title: 'LA SENSIBILISATION COMMUNAUTAIRE',
      image: heroBg as string,
      text:
        "Nous intervenons également à travers la sensibilisation des communautés sur différentes thématiques liées au droit des femmes. JGEN SENEGAL se définit comme une organisation communautaire de base mettant en avant une approche féministe communautaire et populaire. La sensibilisation communautaire est un moyen efficace de partager, avec les populations particulièrement les cibles directes et indirectes des informations cruciales sur nos différents domaines d’intervention et nos objectifs.",
    },
    {
      title: "LE RENFORCEMENT DES CAPACITÉS",
      image: jvImg as string,
      text:
        "La formation et le renforcement des capacités sont pour nous un puissant levier de développement au plan individuel comme au plan collectif : c’est pour cela que nous les mettons au cœur de notre intervention. Nous renforçons les capacités de nos jeunes cibles et bénéficiaires dans les zones où interviennent nos projets. nous privilégions la formation la capitale l’apprentissage pour assurer un suivi efficace et efficient de notre investissement sur le capital humain des femmes et des jeunes filles..",
    },
    {
      title: 'RÉSEAUTAGE ET PARTENARIAT',
      image: proscidesImg as string,
      text:
        "Nous croyons à la force du réseautage et au pouvoir du partenariat, ainsi JGEN se positionne comme un véritable catalyseur qui crée et offre des opportunités de réalisation d’actions collectives pour les jeunes organisations féministes, les alliés du mouvement et les partenaires de base. Nous créons des espaces sûrs, militants et inclusifs, des espaces qui donnent la parole aux femmes et aux alliés. JGEN participe également à des initiatives qui renforce les liens sociaux et professionnels des femmes et des communautés progressistes engagées pour créer ensemble des sociétés plus justes, plus équitables et plus égalitaires.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section
        className="relative py-12"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ensemble, pour l'égalité et la justice
            </h2>
            <p className="text-lg text-white/95 max-w-2xl">
              JGEN Sénégal s'engage à bâtir une société inclusive où chaque femme et chaque fille peut s'épanouir, libre de toute violence et discrimination.
            </p>
          </div>
        </div>
      </section>
      
      
      <main className="flex-grow">
        {/* Vision & Mission */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B2A31] mb-4"> QUI-SOMMES-NOUS ?</h1>
                
                <p className="text-gray-700">
                JGEN Sénégal est une association féministe à but non lucratif créée en 2016, elle œuvre pour l’abandon des violences basées sur le genre et entend contribuer efficacement à mettre fin aux violences sexuelles et sexistes à l’égard des femmes et des enfants.

JGEN Sénégal travaille aussi dans la co construction du mouvement féministe au Sénégal et en Afrique francophone.Elle intègre aussi un volet entrepreneuriat social qui travaille spécifiquement dans la mise en réseau des femmes entrepreneures et dans le partage de connaissances et pratiques entrepreneuriales solidaires innovantes à haut impact socioéconomique.
                </p>
              </div>
              <div className=" lg:block">
                <div className="border-8">
                  <div className="aspect-video bg-[#1B2A31]">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Domaines d'intervention */}
        <section className="py-16 md:py-20" style={{ backgroundColor: '#1B2A31' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12">Domaines d'intervention</h2>
            <div className="space-y-16">
              {axes.map((axis, i) => {
                const tags = (
                  i === 0 ? ['Plaidoyer', 'Égalité des sexes'] :
                  i === 1 ? ['Communautaire', 'Droits des femmes'] :
                  i === 2 ? ['Formation', 'Renforcement des capacités'] :
                  ['Partenariat', 'Réseautage']
                )
                return (
                  <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Texte à gauche pour pairs, sinon à droite */}
                    {i % 2 === 0 ? (
                      <div>
                        <div className="text-white">
                          <div className="uppercase tracking-tight text-3xl md:text-6xl font-extrabold leading-tight">
                            <span className="inline-block border-b-4 border-pink-500 pb-1">{axis.title}</span>
                          </div>
                          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/90 max-w-2xl">{axis.text}</p>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {tags.map((t, k) => (
                              <span key={k} className="px-3 py-1 rounded-full text-xs md:text-sm border border-white/30 text-white/90">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="order-2 lg:order-1">
                        <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
                          <img src={axis.image} alt={axis.title} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    )}

                    {/* Image complémentaire */}
                    {i % 2 === 0 ? (
                      <div>
                        <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
                          <img src={axis.image} alt={axis.title} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    ) : (
                      <div className="order-1 lg:order-2">
                        <div className="text-white">
                          <div className="uppercase tracking-tight text-3xl md:text-6xl font-extrabold leading-tight">
                            <span className="inline-block border-b-4 border-pink-500 pb-1">{axis.title}</span>
                          </div>
                          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/90 max-w-2xl">{axis.text}</p>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {tags.map((t, k) => (
                              <span key={k} className="px-3 py-1 rounded-full text-xs md:text-sm border border-white/30 text-white/90">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
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
              Nous aspirons à être une organisation féministe engagée dans l’évolution continue et l’apprentissage.
              Nos valeurs guident la manière dont nous agissons au sein du mouvement.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.join')}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Votre engagement nous permet de continuer notre lutte pour les droits des femmes et des filles.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-white text-[#1B2A31] hover:bg-gray-100">
                <Link to="/contact">
                  {t('cta.volunteer')}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#1B2A31]">
                <Link to="/blog">
                  {t('cta.followNews')}
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
