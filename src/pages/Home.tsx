
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

import heroBg from '@/assets/images/backgrounds/herobg1.png'
import mayaImg from '@/assets/images/backgrounds/MAYA.jpeg'

import { sanityClient } from '@/lib/sanity'
import { homeDoc, blogList, programsList } from '@/lib/queries'
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
  const [fallbackPrograms, setFallbackPrograms] = useState<any[]>([])

  useEffect(() => {
    Promise.all([
      sanityClient.fetch(homeDoc).catch(() => null),
      sanityClient.fetch(blogList).catch(() => []),
      sanityClient.fetch(programsList).catch(() => []),
    ])
      .then(([homeRes, postsRes, progsRes]) => {
        setHome(homeRes)
        setLatestPosts(Array.isArray(postsRes) ? postsRes : [])
        setFallbackPrograms(Array.isArray(progsRes) ? progsRes : [])
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
  const featuredPrograms = ((home?.featuredPrograms && home.featuredPrograms.length > 0)
    ? home.featuredPrograms
    : fallbackPrograms
  ).slice(0, 8).map((p: any) => ({
    slug: p.slug,
    title: p.title,
    description: p.intro || '',
    image: p.coverImage ? urlFor(p.coverImage).width(400).height(300).url() : '',
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
        {/* News Carousel (replaces Hero) */}
        <section
          className="text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="flex items-center justify-between mb-4">
              <Reveal animation="fade-up"><h2 className="text-2xl md:text-3xl font-bold">{t('home.news')}</h2></Reveal>
              <Link to="/blog" className="text-sm underline hover:no-underline">{t('common.viewAll')}</Link>
            </div>
            <div className="relative">
              <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]} className="w-full">
                <CarouselContent>
                  {news.map((item: any) => (
                    <CarouselItem key={item.slug} className="min-h-[360px] md:min-h-[320px]">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                        <div className="aspect-video w-full overflow-hidden rounded-lg">
                          <Reveal animation="zoom">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </Reveal>
                        </div>
                        <div>
                          <div className="flex items-center text-sm text-gray-200 mb-2">
                            <Calendar className="h-4 w-4 mr-1" />
                            {item.date}
                          </div>
                          <Reveal animation="fade-up"><h3 className="text-2xl md:text-3xl font-bold mb-3">{item.title}</h3></Reveal>
                          <Reveal animation="fade-up" delayMs={80}><p className="text-gray-100 mb-6">{item.excerpt}</p></Reveal>
                          <Button asChild className="bg-white text-gray-900 hover:bg-gray-100">
                            <Link to={`/blog/${item.slug}`} className="flex items-center">
                              {t('common.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4 md:-left-8" />
                <CarouselNext className="-right-4 md:-right-8" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Mot de la directrice exécutive */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-square rounded-full overflow-hidden border-4" style={{ borderColor: '#F3D3B7' }}>
                    <img 
                      src={mayaImg} 
                      alt={t('about.welcomeName') as string}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl md:text-4xl font-bold text-[#1B2A31] mb-4">{t('about.welcomeTitle')}</h2>
                  <div className="bg-gray-50 rounded-lg p-5 md:p-6">
                    <blockquote className="text-gray-700 italic mb-4 whitespace-pre-line">
                      {t('about.welcomeQuote')}
                    </blockquote>
                    <div className="mt-6 flex items-center gap-4">
                      <div>
                        <p className="font-semibold text-[#1B2A31]">{t('about.welcomeName')}</p>
                        <p className="text-gray-600">{t('about.welcomeRole')}</p>
                      </div>
                      <Button asChild size="sm" variant="outline" className="ml-auto">
                        <Link to="/a-propos">
                          {t('common.learnMore')}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

         {/* Notre mission (layout inspired by provided image) */}
         <section className="py-16 md:py-20" style={{ backgroundColor: '#ffffff' }}>
          
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-4" style={{ color: '#1B2A31' }}>
                {t('home.mission')}
              </h2>
              <p className="text-base md:text-lg" style={{ color: '#1B2A31' }}>
              L’association JGEN œuvre pour l’émancipation des jeunes femmes et des militantes féministes 
              en les accompagnant à travers le renforcement de leurs compétences,
              la sensibilisation communautaire à la justice sociale et l’autonomisation économique.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 bg-[#ff9800] p-10">
              {/* WHO WE ARE */}
              <div className="text-center">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#1B2A31' }}>
                  <Equal className="h-10 w-10 md:h-12 md:w-12" style={{ color: '#F3D3B7' }} />
                </div>
                <div className="uppercase tracking-widest text-xs md:text-sm font-semibold mb-3" style={{ color: '#1B2A31' }}></div>
                <h3 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4" style={{ color: '#1B2A31' }}>
                Renforcement des capacités
                </h3>
                <p className="text-sm md:text-base">Formations sur le leadership féministe, le consentement, les violences basées sur le genre et les droits en santé sexuelle et reproductive (DSSR).</p>
               
              </div>

              {/* WHAT WE DO */}
              <div className="text-center">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#1B2A31' }}>
                  <Hand className="h-10 w-10 md:h-12 md:w-12" style={{ color: '#F3D3B7' }} />
                </div>
                <div className="uppercase tracking-widest text-xs md:text-sm font-semibold mb-3" style={{ color: '#1B2A31' }}></div>
                <h3 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4" style={{ color: '#1B2A31' }}>
                Sensibilisation à la justice sociale
                </h3>
                <p className="text-sm md:text-base">Actions éducatives auprès des femmes, jeunes et communautés pour promouvoir l’égalité des droits et réduire les inégalités socioéconomiques.</p>
                 
              </div>

              {/* HOW WE WORK */}
              <div className="text-center">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#1B2A31' }}>
                  <Megaphone className="h-10 w-10 md:h-12 md:w-12" style={{ color: '#F3D3B7' }} />
                </div>
                <div className="uppercase tracking-widest text-xs md:text-sm font-semibold mb-3" style={{ color: '#1B2A31' }}></div>
                <h3 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4" style={{ color: '#1B2A31' }}>
                Autonomisation socioéconomique
                </h3>
                <p className="text-sm md:text-base">Soutien à la formation professionnelle, à la création d’emplois décents et à l’insertion des jeunes femmes vulnérables.</p>
               
              </div>
            </div>
          </div>
        </section>

        {/* Statistiques */}
        <section className="py-12 md:py-16 bg-[#8A1036] text-white">
          <div className='container mx-auto px-4 mb-10'>
            <h2 className='text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 text-center flex justify-center'> NOTRE IMPACT EN 2024 </h2>

          </div>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {statsList.map((stat: any, index: number) => {
                const raw = (stat.number ?? stat.value ?? '') as string
                const match = String(raw).match(/^(\d+)(.*)$/)
                const end = match ? parseInt(match[1], 10) : 0
                const suffix = match ? match[2] : ''
                return (
                  <Reveal key={index} animation="fade-up" delayMs={index * 80}>
                    <div className="space-y-2">
                      <CountUp end={end} suffix={suffix} className="text-3xl md:text-5xl font-bold" />
                      <div className="text-sm md:text-lg">{stat.label}</div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* Programmes phares */}
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
