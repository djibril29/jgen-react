import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Play, ChevronRight, Award, Star } from 'lucide-react'
import ProgramRelated from '@/components/ProgramRelated'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

export type ProgramLayoutProps = {
  programId: string
  title: string
  subtitle?: string
  coverImage: string
  intro?: ReactNode
  description?: ReactNode
  stats?: { value: string; label: string }[]
  videoUrl?: string
  objectives?: { title: string; description?: string }[]
  achievements?: string[]
  partners?: string[]
  nextSteps?: string[]
  partnerLogos?: string[]
  gallery?: string[]
}

export default function ProgramLayout(props: ProgramLayoutProps) {
  const {
    programId,
    title,
    subtitle,
    coverImage,
    intro,
    description,
    stats = [],
    videoUrl,
    objectives = [],
    achievements = [],
    partners = [],
    nextSteps = [],
    partnerLogos = [],
    gallery = [],
  } = props

  return (
    <div className="flex flex-col">
      {/* HERO: image + overlay title */}
      <section className="relative">
        <div className="aspect-[16/6] w-full overflow-hidden">
          <img src={coverImage} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-6 md:pb-10">
            <h1 className="text-white text-2xl md:text-5xl font-extrabold drop-shadow-md">{title}</h1>
            {subtitle && <p className="text-white/90 mt-2 max-w-3xl">{subtitle}</p>}
          </div>
        </div>
      </section>

      {/* INTRO + STICKY SIDEBAR */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="prose prose-p:leading-relaxed max-w-none">
                {intro}
                {description}
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                {stats.length > 0 && (
                  <Card className="border-0 shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg">Chiffres clés</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        {stats.map((s, i) => (
                          <div key={i} className="text-center">
                            <div className="text-2xl font-extrabold" style={{ color: '#a42c64' }}>{s.value}</div>
                            <div className="text-gray-600 text-xs mt-1">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Partenaires</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {partnerLogos.length > 0 ? (
                      <div className="flex flex-wrap gap-3">
                        {partnerLogos.map((src, i) => (
                          <div key={i} className="w-20 h-12 rounded-md bg-white border flex items-center justify-center overflow-hidden">
                            <img src={src} alt={`Partenaire ${i + 1}`} className="max-h-10 object-contain" />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {partners.map((p, i) => (
                          <span key={i} className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: '#f9dded', color: '#a42c64' }}>{p}</span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Video (optionnel) */}
      {videoUrl && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-xl overflow-hidden relative bg-black/10">
                <video className="w-full h-full" controls src={videoUrl} />
                {!videoUrl.endsWith('.mp4') && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white/90" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* OBJECTIFS: texte simple */}
      {objectives.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Nos objectifs</h2>
              <div className="space-y-6">
                {objectives.map((o, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-semibold text-gray-900">{o.title}</h3>
                    {o.description && (
                      <p className="text-gray-700 mt-1">{o.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* RÉALISATIONS: cards colorées */}
      {achievements.length > 0 && (
        <section className="py-12" style={{ backgroundColor: '#f9dded' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Réalisations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((a, i) => (
                  <Card key={i} className="shadow-md rounded-xl border-0">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#a42c64' }}>
                          <Star className="h-5 w-5 text-white" />
                        </div>
                        <p className="text-gray-800 font-medium">{a}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* GALERIE: carrousel d'images */}
      {gallery.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Galerie</h2>
              <Carousel className="w-full">
                <CarouselContent>
                  {gallery.map((src, i) => (
                    <CarouselItem key={i} className="basis-[88%] md:basis-[46%] lg:basis-[31%]">
                      <div className="aspect-video overflow-hidden rounded-xl">
                        <img src={src} alt={`Galerie ${i + 1}`} className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-3 md:-left-8" />
                <CarouselNext className="-right-3 md:-right-8" />
              </Carousel>
            </div>
          </div>
        </section>
      )}

      {/* PROCHAINES ÉTAPES */}
      {nextSteps.length > 0 && (
        <section className="py-12 text-white" style={{ backgroundColor: '#a42c64' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Prochaines étapes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                {nextSteps.map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <p>{s}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-white text-[color:#a42c64] hover:bg-gray-100">
                  <Link to="/contact">Devenir partenaire</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[color:#a42c64]">
                  <Link to="/nos-programmes">Voir autres programmes</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CONTENU LIÉ */}
      <ProgramRelated programId={programId} />
    </div>
  )
} 