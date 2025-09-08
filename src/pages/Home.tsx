
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, Heart, BookOpen, Calendar, ArrowRight, Star } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

import heroBg from '@/assets/images/backgrounds/herobg1.png'

/**
 * Page d'accueil - Page principale du site J-GEN Sénégal
 * Présente l'organisation, ses missions et ses actualités
 */
export default function HomePage() {
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
  // Données des programmes phares
  const featuredPrograms = [
    {
      id: 'uef',
      title: 'Université d\'Été Féministe',
      description: 'Un espace de mobilisation, de savoir et de résistance pour les féministes d\'Afrique de l\'Ouest et du Centre.',
      color: 'from-pink-500 to-purple-600',
      icon: <BookOpen className="h-8 w-8" />
    },
    {
      id: 'pas-a-pas',
      title: 'PAS À PAS',
      description: 'Programme pionnier en soutien au plaidoyer pour l\'avortement sécurisé en cas de viol et d\'inceste.',
      color: 'from-orange-500 to-red-500',
      icon: <Heart className="h-8 w-8" />
    },
    {
      id: 'elles-aussi',
      title: 'ELLES AUSSI',
      description: 'Projet d\'intervention communautaire contre les violences sexuelles à l\'égard des filles.',
      color: 'from-green-500 to-teal-500',
      icon: <Users className="h-8 w-8" />
    }
  ]

  // Données des actualités
  const news = [
    {
      id: 1,
      title: 'Rapport Annuel 2024 publié',
      date: '15 Décembre 2024',
      excerpt: 'Découvrez nos réalisations et l\'impact de nos actions tout au long de l\'année 2024.',
      image: 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/36408d98-48eb-4f40-b6c0-5521359ae9c1.jpg'
    },
    {
      id: 2,
      title: 'Forum National sur la Justice Reproductive',
      date: '30 Septembre 2024',
      excerpt: '150 participants ont discuté des avortements clandestins et de l\'application du Protocole de Maputo.',
      image: 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/e6d101e4-0e4c-4038-9fc9-080fa240aa9b.jpg'
    },
    {
      id: 3,
      title: 'Lancement du projet LIGGEEYAL ËLËG',
      date: '15 Novembre 2024',
      excerpt: 'Un nouveau projet pour l\'autonomisation économique des jeunes filles et femmes vulnérables.',
      image: 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/20f3a980-af34-4acd-849f-41702537edd8.jpg'
    }
  ]

  // Statistiques clés
  const stats = [
    { number: '1447+', label: 'Personnes touchées en 2024' },
    { number: '801', label: 'Personnes formées' },
    { number: '646', label: 'Personnes sensibilisées' },
    { number: '6', label: 'Projets actifs' }
  ]

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
              <h2 className="text-2xl md:text-3xl font-bold">Actualités</h2>
              <Link to="/blog" className="text-sm underline hover:no-underline">Voir toutes</Link>
            </div>
            <div className="relative">
              <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]} className="w-full">
                <CarouselContent>
                  {news.map((item) => (
                    <CarouselItem key={item.id}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div className="aspect-video w-full overflow-hidden rounded-lg">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center text-sm text-gray-200 mb-2">
                            <Calendar className="h-4 w-4 mr-1" />
                            {item.date}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-3">{item.title}</h3>
                          <p className="text-gray-100 mb-6">{item.excerpt}</p>
                          <Button asChild className="bg-white text-gray-900 hover:bg-gray-100">
                            <Link to={`/blog/${item.id}`} className="flex items-center">
                              Lire la suite <ArrowRight className="ml-2 h-4 w-4" />
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

       
    

        {/* Notre mission */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre mission</h2>
              <p className="text-lg text-gray-600">
                Contribuer à l'égalité des sexes à travers l'autonomisation des femmes et des filles par le renforcement 
                de capacités, la mobilisation communautaire, le plaidoyer et l'éducation entrepreneuriale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-pink-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Renforcement de capacités</h3>
                <p className="text-gray-600">
                  Formation des jeunes femmes et militantes féministes sur le leadership, les droits humains et la lutte contre les VBG.
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobilisation communautaire</h3>
                <p className="text-gray-600">
                  Sensibilisation des communautés sur la justice sociale, l'égalité des droits et l'élimination des disparités.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Plaidoyer et communication</h3>
                <p className="text-gray-600">
                  Défense des droits des femmes et des filles auprès des décideurs et création de mouvements sociaux féministes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Programmes phares */}
        <section className="py-16" style={{ backgroundColor: '#1B2A31' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nos programmes phares</h2>
              <p className="text-lg text-white/80">
                Découvrez nos initiatives clés qui transforment la vie des femmes et des filles au Sénégal.
              </p>
            </div>

            <div className="relative">
              <Carousel opts={{ loop: true }} className="w-full">
                <CarouselContent>
                  {featuredPrograms.map((program) => (
                    <CarouselItem key={program.id} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="border-0 shadow-lg overflow-hidden bg-white">
                        <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                        <div className="h-40 w-full bg-gray-200">
                          {/* Placeholder image area; can be wired to real images later */}
                          <div className={`h-full w-full bg-gradient-to-r ${program.color} opacity-30`}></div>
                        </div>
                        <CardHeader>
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${program.color} text-white`}>
                              {program.icon}
                            </div>
                            <CardTitle className="text-xl">{program.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-600">
                            {program.description}
                          </CardDescription>
                        </CardContent>
                        <CardFooter>
                          <Button asChild variant="outline" className="bg-transparent w-full">
                            <Link to={`/nos-programmes#${program.id}`}>
                              En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4 md:-left-8 bg-white" />
                <CarouselNext className="-right-4 md:-right-8 bg-white" />
              </Carousel>
            </div>

            <div className="text-center mt-12">
              <Button asChild className="bg-[#E81F74] hover:bg-[#E81F74]/90">
                <Link to="/nos-programmes">
                  Voir tous nos programmes
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Actualités (grid) */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Actualités</h2>
              <p className="text-lg text-gray-600">
                Restez informé de nos dernières actions et événements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {news.map((item) => (
                <Card key={item.id} className="overflow-hidden shadow-md">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {item.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 p-0">
                      <Link to={`/blog/${item.id}`} className="flex items-center">
                        Lire la suite <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" className="bg-transparent">
                <Link to="/blog">
                  Voir toutes les actualités
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Appel à l'action */}
        <section className="py-16 bg-[#E81F74] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rejoignez notre mouvement</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ensemble, nous pouvons créer un monde plus juste et égalitaire pour les femmes et les filles.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link to="/contact">
                  Devenir bénévole
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
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
