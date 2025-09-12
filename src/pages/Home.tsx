import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, Calendar, ArrowRight, Equal, Megaphone, Hand } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useTranslation } from 'react-i18next'
import Reveal from '@/components/Reveal'
import TypewriterSignature from '@/components/TypewriterSignature'
import StaggeredReveal from '@/components/StaggeredReveal'

import heroBg from '@/assets/images/backgrounds/herobg1.png'
import mayaImg from '@/assets/images/backgrounds/MAYA.jpeg'
import heroBg3 from '@/assets/images/backgrounds/herobg3.png'
import presidenteImg from '@/assets/images/backgrounds/presidente.png'
import herobg4 from '@/assets/images/backgrounds/herobg4.png'
import herobg5 from '@/assets/images/backgrounds/herobg5.png'
import icon1 from '@/assets/images/icone/1.svg'
import icon2 from '@/assets/images/icone/2.svg'
import icon3 from '@/assets/images/icone/3.svg'

import { sanityClient } from '@/lib/sanity'
import { homeDoc, blogList } from '@/lib/queries'
import { PROGRAMS } from '@/data/programs'
import { urlFor } from '@/lib/image'

/**
 * Page d'accueil - Page principale du site J-GEN Sénégal
 * Présente l'organisation, ses missions et ses actualités
 */
export default function HomePage() {
  const { t } = useTranslation()
  const [home, setHome] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)
  const [latestPosts, setLatestPosts] = useState<any[]>([])
  

  useEffect(() => {
    Promise.all([
      sanityClient.fetch(homeDoc).catch(() => null),
      sanityClient.fetch(blogList).catch(() => []),
    ])
      .then(([homeRes, postsRes]) => {
        setHome(homeRes)
        setLatestPosts(Array.isArray(postsRes) ? postsRes : [])
      })
      .finally(() => setLoading(false))
  }, [])

  const stats = home?.stats || []
  const statsList = (Array.isArray(stats) && stats.length > 0)
    ? stats
    : [
        { number: '1447+', label: 'Bénéficiaires' },
        { number: '801', label: 'Formations' },
        { number: '646', label: 'Sensibilisés' },
        { number: '6', label: 'Projets actifs' },
      ]
  const featuredPrograms = PROGRAMS.slice(0, 8).map((p: any) => ({
    slug: p.slug,
    title: p.title,
    description: '',
    image: '',
    icon: <Users className="h-8 w-8" />,
  }))
  const news = ((home?.news && home.news.length > 0)
    ? home.news
    : latestPosts
  ).slice(0, 6).map((n: any) => ({
    slug: n.slug,
    title: n.title,
    date: n.date ? new Date(n.date).toLocaleDateString('fr-FR') : '',
    excerpt: n.excerpt || '',
    image: n.coverImage ? urlFor(n.coverImage).width(1200).height(630).url() : '',
  }))

  const CountUp = ({ end, durationMs = 1500, className, suffix = '' }: { end: number; durationMs?: number; className?: string; suffix?: string }) => {
    const [value, setValue] = useState(0)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const startedRef = useRef(false)

    useEffect(() => {
      const node = containerRef.current
      if (!node) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            let startTimestamp: number | null = null
            const step = (timestamp: number) => {
              if (startTimestamp === null) startTimestamp = timestamp
              const elapsed = timestamp - startTimestamp
              const progress = Math.min(elapsed / durationMs, 1)
              setValue(Math.floor(progress * end))
              if (progress < 1) requestAnimationFrame(step)
            }
            requestAnimationFrame(step)
            observer.disconnect()
          }
        },
        { threshold: 0.3 }
      )
      observer.observe(node)
      return () => observer.disconnect()
    }, [end, durationMs])

    return (
      <div ref={containerRef} className={className}>
        {value.toLocaleString()}{suffix}
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-20">Chargement…</div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - Layout inspiré de l'image */}
        <section className="h-screen flex flex-col lg:flex-row relative overflow-hidden">
          {/* Section gauche - Contenu textuel */}
          <div className="w-full lg:w-3/5 bg-[#A42C64] flex items-center justify-center p-6 md:p-8 lg:p-12 relative min-h-[50vh] lg:min-h-screen">
            <div className="max-w-lg text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
                WEBSITE
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-black mb-6 md:mb-8 tracking-widest">
                LAUNCH PLAN
              </h2>
              <p className="text-base md:text-lg text-white italic leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet purus gravida quis blandit turpis.
              </p>
            </div>
          </div>

          {/* Section droite - Image et éléments graphiques */}
          <div className="w-full lg:w-2/5 bg-white relative flex items-center justify-center min-h-[50vh] lg:min-h-screen">
            {/* Image principale */}
            <div className="relative z-10">
              <img 
                src={heroBg3} 
                alt="Portrait" 
                className="w-64 h-80 md:w-72 md:h-88 lg:w-80 lg:h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Cercle vert en haut à droite */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 md:w-16 md:h-16 bg-green-400 rounded-full z-20"></div>
            
            {/* Cercle rouge en bas à droite */}
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 md:w-16 md:h-16 bg-red-400 rounded-full z-20"></div>
          </div>
        </section>

        {/* Mot de la directrice exécutive - Layout inspiré de l'image */}
        <section className="py-16 md:py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Section gauche - Image avec formes géométriques */}
                <div className="w-full lg:w-2/5 relative">
                  {/* Formes géométriques en arrière-plan */}
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#8A1036] rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#E81F74] rounded-full opacity-20"></div>
                  
                  {/* Image principale dans un cercle */}
                  <div className="relative z-10 flex justify-center lg:justify-start">
                    <div className="relative">
                      {/* Cercle de fond */}
                      <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#F3D3B7] to-[#E8C4A0] p-2 shadow-2xl">
                        <div className="w-full h-full rounded-full overflow-hidden">
                          <img 
                            src={presidenteImg} 
                            alt="Directrice exécutive"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Formes décoratives */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full"></div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-400 rounded-full"></div>
                      <div className="absolute top-1/2 -right-4 w-4 h-4 bg-pink-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Section droite - Contenu textuel */}
                <div className="w-full lg:w-3/5">
                  <div className="max-w-2xl">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8A1036] mb-6">
                      Mot de bienvenue de la directrice exécutive
                    </h2>
                    
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p className="text-base md:text-lg">
                        <span className="font-semibold">Chers ami.e.s</span>
                      </p>
                      
                      <p className="text-sm md:text-base">
                        Je vous souhaite une cordiale bienvenue sur le site de l'association JGEN SÉNÉGAL, Women Global Entrepreneurship. Créée en Octobre 2016, JGEN est une association féministe à but non lucratif qui travaille essentiellement à contribuer à l'élimination des violences basées sur le genre notamment les violences sexuelles et sexistes contre les femmes et les filles et la promotion de la santé sexuelle et reproductive des femmes.
                      </p>
                      
                      <p className="text-sm md:text-base">
                        JGEN est également engagée à accompagner l'entrepreneuriat féminin des jeunes femmes et des jeunes filles sénégalaises, à promouvoir les droits des enfants, la justice climatique de genre et la justice économique.
                      </p>
                    </div>

                    {/* Signature de la directrice */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex flex-col items-end">
                        <div className="mb-2">
                          <TypewriterSignature 
                            text="Maimouna Astou Yade"
                            speed={150}
                            className="text-right"
                          />
                        </div>
                        <p className="text-sm text-gray-600 italic">
                          Directrice Exécutive
                        </p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button asChild size="lg" className="bg-[#8A1036] hover:bg-[#8A1036]/90 text-white rounded-full">
                        <Link to="/a-propos">
                          En savoir plus
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Notre mission - Layout inspiré de l'image */}
        <section className="py-16 md:py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
                {/* Section gauche - Titre et texte de mission */}
                <div className="w-full lg:w-2/5 relative">
                  {/* Image de fond subtile */}
                  <div 
                    className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${herobg4})`,
                      backgroundPosition: 'left center',
                    }}
                  ></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#8A1036] mb-8 leading-tight">
                      <span className="block">NOTRE</span>
                      <span className="block">MISSION</span>
                    </h2>
                    
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      <p className="text-lg md:text-xl font-medium">
                        Renforcer le pouvoir d'agir des femmes et des filles pour une meilleure prise en charge holistique de leurs besoins pratiques et stratégiques.
                      </p>
                      
                      <p className="text-lg md:text-xl font-medium">
                        Accompagner le développement du mouvement féministe en Afrique francophone.
              </p>
            </div>
                  </div>
                </div>

                {/* Section droite - Trois piliers de la mission */}
                <div className="w-full lg:w-3/5">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Pilier 1 - Renforcement des capacités */}
                    <div className="bg-white border-2 border-orange-400 rounded-lg p-6 relative shadow-lg">
                      {/* Cercle coloré en haut */}
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-400 rounded-full"></div>
                      
                      {/* Icône */}
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
                          <img src={icon1} alt="Renforcement des capacités" className="w-10 h-10" />
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                        Renforcement des capacités
                      </h3>
                      
                      <p className="text-sm text-gray-600 text-center leading-relaxed">
                        Formations sur le leadership féministe, le consentement, les violences basées sur le genre et les droits en santé sexuelle et reproductive (DSSR).
                </p>
              </div>

                    {/* Pilier 2 - Sensibilisation à la justice sociale */}
                    <div className="bg-white border-2 border-purple-400 rounded-lg p-6 relative shadow-lg">
                      {/* Cercle coloré en haut */}
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-400 rounded-full"></div>
                      
                      {/* Icône */}
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center">
                          <img src={icon2} alt="Sensibilisation à la justice sociale" className="w-10 h-10" />
                        </div>
                </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                        Sensibilisation à la justice sociale
                      </h3>
                      
                      <p className="text-sm text-gray-600 text-center leading-relaxed">
                        Actions éducatives auprès des femmes, jeunes et communautés pour promouvoir l'égalité des droits et réduire les inégalités socioéconomiques.
                </p>
              </div>

                    {/* Pilier 3 - Autonomisation socioéconomique */}
                    <div className="bg-white border-2 border-pink-600 rounded-lg p-6 relative shadow-lg">
                      {/* Cercle coloré en haut */}
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pink-600 rounded-full"></div>
                      
                      {/* Icône */}
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
                          <img src={icon3} alt="Autonomisation socioéconomique" className="w-10 h-10" />
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                        Autonomisation socioéconomique
                      </h3>
                      
                      <p className="text-sm text-gray-600 text-center leading-relaxed">
                        Soutien à la formation professionnelle, à la création d'emplois décents et à l'insertion des jeunes femmes vulnérables.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Notre Impact en 2024 - Layout inspiré de l'image */}
        <section className="py-16 md:py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24">
                {/* Section gauche - Cartes de statistiques */}
                <div className="w-full lg:w-2/5">
                  <div className="space-y-6">
                    {/* Carte 1 - Bénéficiaires */}
                    <StaggeredReveal delayMs={0}>
                      <div className="bg-white border-2 border-orange-400 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-center">
                          <CountUp 
                            end={1447} 
                            suffix="+" 
                            className="text-4xl md:text-5xl font-bold text-orange-400 mb-2" 
                          />
                          <p className="text-lg font-semibold text-gray-900">Bénéficiaires</p>
                        </div>
                      </div>
                    </StaggeredReveal>

                    {/* Carte 2 - Formations */}
                    <StaggeredReveal delayMs={200}>
                      <div className="bg-white border-2 border-teal-400 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-center">
                          <CountUp 
                            end={801} 
                            className="text-4xl md:text-5xl font-bold text-teal-400 mb-2" 
                          />
                          <p className="text-lg font-semibold text-gray-900">Formations</p>
                        </div>
                      </div>
                    </StaggeredReveal>

                    {/* Carte 3 - Sensibilisés */}
                    <StaggeredReveal delayMs={400}>
                      <div className="bg-white border-2 border-pink-400 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-center">
                          <CountUp 
                            end={646} 
                            className="text-4xl md:text-5xl font-bold text-pink-400 mb-2" 
                          />
                          <p className="text-lg font-semibold text-gray-900">Sensibilisés</p>
                        </div>
                      </div>
                    </StaggeredReveal>
                  </div>
                </div>

                {/* Section droite - Titre et image */}
                <div className="w-full lg:w-3/5 relative">
                  {/* Titre */}
                  <div className="mb-8">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#8A1036] leading-tight">
                      <span className="block">NOTRE IMPACT</span>
                      <span className="block">EN 2024</span>
                    </h2>
                  </div>

                  {/* Image avec cercles décoratifs */}
                  <div className="relative">
                    {/* Image principale */}
                    <div className="relative z-10">
                      <img 
                        src={herobg5} 
                        alt="Impact JGEN 2024"
                        className="w-full max-w-md mx-auto lg:mx-0 rounded-lg shadow-2xl"
                      />
                    </div>

                    {/* Cercles décoratifs */}
                    <div className="absolute -top-4 -left-4 w-6 h-6 bg-pink-400 rounded-full z-20"></div>
                    <div className="absolute top-8 -right-8 w-4 h-4 bg-orange-400 rounded-full z-20"></div>
                    <div className="absolute -bottom-4 -right-4 w-5 h-5 bg-teal-400 rounded-full z-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>        {/* Programmes phares */}
        <section className="py-12 md:py-16" style={{ backgroundColor: '#f5f5f5' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">{t('home.programsHeadline')}</h2>
              <p className="text-base md:text-lg text-gray-600">
                {t('home.programsSub')}
              </p>
            </div>

            <div className="relative">
              <Carousel opts={{ loop: true }} className="w-full">
                <CarouselContent>
              {featuredPrograms.map((program: any) => (
                    <CarouselItem key={program.slug} className="basis-[90%] sm:basis-[68%] md:basis-[42%] lg:basis-[28%]">
                      <Reveal animation="fade-up">
                        <Card className="border-0 shadow-lg overflow-hidden bg-white h-full rounded-xl max-w-sm mx-auto">
                          {program.image && (
                            <div className="h-40 md:h-44 w-full overflow-hidden">
                              <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                            </div>
                          )}
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg text-white`}>
                        {program.icon}
                      </div>
                            <CardTitle className="text-base md:text-xl">{program.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                          <CardDescription className="text-gray-600 text-sm md:text-base">
                      {program.description}
                    </CardDescription>
                  </CardContent>
                            <CardFooter className="mt-auto">
                    <Button asChild variant="outline" className="w-full rounded-full border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition-colors">
                      <Link to={`/programme/${program.slug}`}>
                              {t('common.learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                      </Reveal>
                    </CarouselItem>
              ))}
                </CarouselContent>
                <CarouselPrevious className="-left-3 md:-left-8" />
                <CarouselNext className="-right-3 md:-right-8" />
              </Carousel>
            </div>

            <div className="text-center mt-10 md:mt-12">
              <Button asChild className="bg-[#E81F74] hover:bg-[#E81F74]/90 rounded-full">
                <Link to="/nos-programmes">
                  {t('common.seeAllPrograms')}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Actualités (grid) */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">{t('home.newsGridTitle')}</h2>
              <p className="text-base md:text-lg text-gray-600">
                {t('home.newsGridSub')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {news.map((item: any) => (
                <Reveal key={item.slug} animation="fade-up">
                  <Card className="overflow-hidden shadow-md h-full rounded-xl max-w-sm mx-auto">
                    <div className="h-44 md:h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                      <div className="flex items-center text-xs md:text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                      <CardTitle className="text-lg md:text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <CardDescription className="text-gray-600 text-sm md:text-base">
                      {item.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                      <Button asChild variant="outline" className="rounded-full border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition-colors">
                        <Link to={`/blog/${item.slug}`} className="flex items-center">
                          {t('common.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                </Reveal>
              ))}
            </div>

            <div className="text-center mt-10 md:mt-12">
              <Button asChild variant="outline" className="bg-transparent rounded-full border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition-colors">
                <Link to="/blog">
                  {t('common.viewAll')} {t('home.news')}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Appel à l'action */}
        <section className="py-12 md:py-16 bg-[#E81F74] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">{t('cta.join')}</h2>
            <p className="text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
              Ensemble, nous pouvons créer un monde plus juste et égalitaire pour les femmes et les filles.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link to="/contact">
                  {t('cta.volunteer')}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
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
