import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Play, ChevronRight, Award } from 'lucide-react'
import ProgramRelated from '@/components/ProgramRelated'

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
  } = props

  return (
    <div className="flex flex-col">
      {/* Top banner with image */}
      <section className="bg-[color:var(--tw-prose-bullets)]" style={{ backgroundColor: '#ff9800' }}>
        <div className="container mx-auto px-4 py-8 md:py-10">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-2">{title}</h1>
          {subtitle && <p className="text-white/90 max-w-3xl">{subtitle}</p>}
        </div>
      </section>
      <section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow -mt-10 md:-mt-16 relative z-10">
            <img src={coverImage} alt={title} className="w-full h-64 md:h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* Intro and description */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-p:leading-relaxed">
            {intro}
            {description}
          </div>
        </div>
      </section>

      {/* Stats */}
      {stats.length > 0 && (
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-5xl font-extrabold text-[color:#a42c64]">{s.value}</div>
                  <div className="text-gray-600 text-sm md:text-base mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Video */}
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

      {/* Objectives */}
      {objectives.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Nos objectifs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {objectives.map((o, i) => (
                  <Card key={i} className="border-l-4" style={{ borderLeftColor: '#a42c64' }}>
                    <CardHeader>
                      <CardTitle className="text-lg">{o.title}</CardTitle>
                    </CardHeader>
                    {o.description && (
                      <CardContent>
                        <p className="text-gray-600">{o.description}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Achievements grid */}
      {achievements.length > 0 && (
        <section className="py-12" style={{ backgroundColor: '#f9dded' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Réalisations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((a, i) => (
                  <Card key={i} className="shadow-sm">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <ChevronRight className="h-5 w-5 text-[color:#a42c64] mt-0.5" />
                        <p className="text-gray-700">{a}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Partners */}
      {partners.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Nos partenaires</h2>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {partners.map((p, i) => (
                <div key={i} className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[color:#f9dded] rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="h-6 w-6 md:h-8 md:w-8 text-[color:#a42c64]" />
                  </div>
                  <p className="text-xs md:text-sm font-medium text-gray-900">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next steps */}
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

      {/* Related */}
      <ProgramRelated programId={programId} />
    </div>
  )
} 