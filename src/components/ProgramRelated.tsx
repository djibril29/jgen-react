import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, FileText, ArrowRight } from 'lucide-react'

import Reveal from '@/components/Reveal'
import { useEffect, useState } from 'react'
import { sanityClient } from '@/lib/sanity'
import { relatedBlogByProgramSlug, relatedResourcesByProgramSlug } from '@/lib/queries'
import { urlFor } from '@/lib/image'

export default function ProgramRelated({ programId }: { programId: string }) {
  const [news, setNews] = useState<any[]>([])
  const [resources, setResources] = useState<any[]>([])

  useEffect(() => {
    if (!programId) return
    sanityClient.fetch(relatedBlogByProgramSlug, { slug: programId })
      .then((res) => setNews(Array.isArray(res) ? res : []))
      .catch(() => setNews([]))
    sanityClient.fetch(relatedResourcesByProgramSlug, { slug: programId })
      .then((res) => setResources(Array.isArray(res) ? res : []))
      .catch(() => setResources([]))
  }, [programId])

  if (!news.length && !resources.length) return null

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {news.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Actualités liées</h2>
                <Link to="/blog" className="text-sm text-pink-600 hover:text-pink-700">Voir tout</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((item: any, idx: number) => (
                  <Reveal key={`news-reveal-${item.slug}`} animation="fade-up" delayMs={idx * 80}>
                    <Card className="overflow-hidden shadow-md">
                      {item.coverImage && (
                        <div className="h-40 overflow-hidden">
                          <img src={urlFor(item.coverImage).width(800).height(450).url()} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <CardHeader className="pb-2">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          {item.date ? new Date(item.date).toLocaleDateString('fr-FR') : ''}
                        </div>
                        <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                      </CardHeader>
                      {item.excerpt && (
                        <CardContent className="pt-0">
                          <p className="text-gray-600 text-sm line-clamp-2 mb-3">{item.excerpt}</p>
                          <Button asChild variant="ghost" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 p-0 text-sm font-medium">
                            <Link to={`/blog/${item.slug}`} className="flex items-center">
                              Lire <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                          </Button>
                        </CardContent>
                      )}
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {resources.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ressources liées</h2>
                <Link to="/ressources" className="text-sm text-pink-600 hover:text-pink-700">Voir tout</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((item: any, idx: number) => (
                  <Reveal key={`res-reveal-${item.slug}`} animation="fade-up" delayMs={idx * 80}>
                    <Card className="shadow-md">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-pink-600" /> {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>{item.date ? new Date(item.date).toLocaleDateString('fr-FR') : ''}</span>
                          <Button asChild variant="outline">
                            <Link to={`/ressources/${item.slug}`} className="flex items-center">Ouvrir <ArrowRight className="ml-1 h-3 w-3" /></Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 