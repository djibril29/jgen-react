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
import liggeeyalImg from '@/assets/images/projects/liggeeyal-eleg/2.png'
import jeunesVolontairesImg from '@/assets/images/projects/jeunes-volontaires/1.png'
import uefImg from '@/assets/images/projects/uef/3.png'

import { sanityClient } from '@/lib/sanity'
import { homeDoc, blogList } from '@/lib/queries'
import { PROGRAMS } from '@/data/programs'
import { urlFor } from '@/lib/image'
import type { CarouselApi } from '@/components/ui/carousel'

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
  ).slice(0, 4).map((n: any) => ({
    slug: n.slug,
    title: n.title,
    date: n.date ? new Date(n.date).toLocaleDateString('fr-FR') : '',
    excerpt: n.excerpt || '',
    image: n.coverImage ? urlFor(n.coverImage).width(1200).height(630).url() : '',
  }))

  const newsItems = news.slice(0, 4)
  const newsSlides: any[][] = Array.from({ length: Math.ceil(newsItems.length / 2) }, (_, i) => newsItems.slice(i * 2, i * 2 + 2))
    .slice(0, 2)
  const [newsApi, setNewsApi] = useState<CarouselApi | null>(null)
  const [newsIndex, setNewsIndex] = useState(0)

  useEffect(() => {
    if (!newsApi) return
    const onSelect = () => setNewsIndex(newsApi.selectedScrollSnap())
    newsApi.on('select', onSelect)
    onSelect()
    return () => { newsApi.off('select', onSelect) }
  }, [newsApi])

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
        </section>{/* Programmes phares - Layout inspiré de l'image */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8A1036] mb-4">
                  NOS PROGRAMMES PHARES
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Découvrez nos initiatives principales pour l'autonomisation des femmes et la promotion de l'égalité des genres.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {/* Programme 1 - Jeunes Volontaires */}
                <div className="text-center group">
                  <div className="relative mb-6">
                    {/* Image circulaire avec overlay */}
                    <div className="relative w-48 h-48 mx-auto">
                     
                        <img 
                          src={jeunesVolontairesImg} 
                          alt="Jeunes Volontaires" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      
                      {/* Overlay décoratif */}
                      
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-[#8A1036] mb-4 uppercase leading-tight">
                    JEUNE VOLONTAIRE POUR LA SANTÉ SEXUELLE ET REPRODUCTIVE
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet purus gravida quis blandit turpis.
                  </p>
                  
                  <Button asChild className="bg-[#8A1036] hover:bg-[#8A1036]/90 text-white px-8 py-3 rounded-none font-semibold">
                    <Link to="/programme/jeunes-volontaires">
                      En savoir plus
                    </Link>
                  </Button>
                      </div>

                {/* Programme 2 - Liggeeyal Eleg */}
                <div className="text-center group">
                  <div className="relative mb-6">
                    {/* Image circulaire avec overlay */}
                    <div className="relative w-48 h-48 mx-auto">
                      
                        <img 
                          src={liggeeyalImg} 
                          alt="Liggeeyal Eleg" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      
                      {/* Overlay décoratif */}
                     
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-[#8A1036] mb-4 uppercase leading-tight">
                    LIGGEEYAL ELEG
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet purus gravida quis blandit turpis.
                  </p>
                  
                  <Button asChild className="bg-[#8A1036] hover:bg-[#8A1036]/90 text-white px-8 py-3 rounded-none font-semibold">
                    <Link to="/programme/liggeeyal-eleg">
                      En savoir plus
                      </Link>
                    </Button>
                </div>

                {/* Programme 3 - UEF */}
                <div className="text-center group">
                  <div className="relative mb-6">
                    {/* Image circulaire avec overlay */}
                    <div className="relative w-48 h-48 mx-auto">
                     
                        <img 
                          src={uefImg} 
                          alt="Université Féministe d'Été" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                     
                      {/* Overlay décoratif */}
                     
                    </div>
            </div>

                  <h3 className="text-lg md:text-xl font-bold text-[#8A1036] mb-4 uppercase leading-tight">
                    UNIVERSITÉ FÉMINISTE D'ÉTÉ D'AFRIQUE DE L'OUEST ET DU CENTRE
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet purus gravida quis blandit turpis.
                  </p>
                  
                  <Button asChild className="bg-[#8A1036] hover:bg-[#8A1036]/90 text-white px-8 py-3 rounded-none font-semibold">
                    <Link to="/programme/universite-ete-feministe">
                      En savoir plus
                </Link>
              </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* Actualités - Layout inspiré de l'image */}
        <section className="py-16 md:py-20 bg-[#ecd5c3]">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Titre de la section */}
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-4">
                  Actualités
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Restez informé de nos dernières actions et événements.
                </p>
              </div>

              {/* Conteneur principal avec fond magenta foncé */}
              <div className="bg-[#8A1036] p-8 md:p-12">
                {/* Carousel pour les actualités (2 slides, 2 cartes par slide) */}
                <Carousel opts={{ loop: newsSlides.length > 1, align: 'start' }} className="w-full" setApi={setNewsApi}>
                  <CarouselContent>
                    {newsSlides.map((pair, slideIdx) => (
                      <CarouselItem key={slideIdx} className="md:basis-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                          {pair.map((item: any, idx: number) => (
                            <div key={item.slug ?? idx} className="bg-gray-800 rounded-xl p-6 md:p-8 relative group hover:transform hover:scale-105 transition-all duration-300">
                              {/* Image d'actualité */}
                              <div className="mb-6">
                                <div className="h-48 md:h-56 w-full rounded-lg overflow-hidden">
                                  {item?.image ? (
                                    <img src={item.image} alt={item.title ?? ''} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                  ) : (
                                    <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                                      <span className="text-gray-400">Image à venir</span>
                                    </div>
                                  )}
                                </div>
                              </div>

                              {/* Contenu de la carte */}
                              <div className="space-y-4">
                                <div className="text-white text-sm font-medium">{item?.date}</div>
                                <h3 className="text-white text-lg md:text-xl font-bold uppercase leading-tight">{item?.title}</h3>
                                {item?.excerpt && (
                                  <p className="text-white text-sm md:text-base leading-relaxed">{item.excerpt}</p>
                                )}
                              </div>

                              {/* Zone cliquable vers l'article */}
                              <Link to={item?.slug ? `/blog/${item.slug}` : '/blog'} className="absolute inset-0 z-10" aria-label={item?.title ?? 'Voir l\'article'} />
                            </div>
                          ))}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>

                {/* Points de navigation */}
                {newsSlides.length > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-6">
                    {newsSlides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => newsApi?.scrollTo(i)}
                        className={newsIndex === i ? 'h-2.5 w-2.5 rounded-full bg-white' : 'h-2.5 w-2.5 rounded-full bg-white/40'}
                        aria-label={`Aller au slide ${i + 1}`}
                      />
                    ))}
                  </div>
                )}

                {/* Bouton Voir toutes les actualités */}
                <div className="text-center mt-8 md:mt-12">
                  <Button asChild className="bg-white text-[#8A1036] hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
                    <Link to="/blog">Voir toutes les actualités</Link>
                  </Button>
                </div>
              </div>
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
