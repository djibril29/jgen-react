import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, FileText, ArrowRight } from 'lucide-react'

import uefImg from '@/assets/images/projects/uef/uef1.png'
import forumImg from '@/assets/images/projects/proscides/proscide1.jpeg'
import Reveal from '@/components/Reveal'

type RelatedItem = {
  id: number
  title: string
  date?: string
  excerpt?: string
  image?: string
  link: string
}

const relatedByProgram: Record<string, { news: RelatedItem[]; resources: RelatedItem[] }> = {
  'uef': {
    news: [
      {
        id: 1,
        title: "Rapport Annuel 2024 : Une année de résilience",
        date: '15 Décembre 2024',
        excerpt: "Découvrez les réalisations marquantes de J-GEN en 2024...",
        image: uefImg as string,
        link: '/#/blog/1',
      },
      {
        id: 2,
        title: 'Forum National sur la Justice Reproductive',
        date: '30 Septembre 2024',
        excerpt: '150 participants ont discuté du Protocole de Maputo...',
        image: forumImg as string,
        link: '/#/blog/2',
      },
    ],
    resources: [
      {
        id: 1,
        title: 'Rapport Annuel J-GEN 2024',
        date: '15 Décembre 2024',
        link: '/#/ressources/1',
      },
      {
        id: 2,
        title: 'Guide droits sexuels et reproductifs',
        date: '30 Septembre 2024',
        link: '/#/ressources/2',
      },
    ],
  },
  'pas-a-pas': {
    news: [
      {
        id: 2,
        title: 'Forum National sur la Justice Reproductive',
        date: '30 Septembre 2024',
        excerpt: 'Premier forum sur les avortements clandestins...',
        image: forumImg as string,
        link: '/#/blog/2',
      },
    ],
    resources: [
      { id: 2, title: 'Guide de plaidoyer', date: '30 Septembre 2024', link: '/#/ressources/2' },
      { id: 3, title: 'Outils de plaidoyer', date: '15 Septembre 2024', link: '/#/ressources/3' },
    ],
  },
  'elles-aussi': {
    news: [
      { id: 1, title: 'Rapport Annuel 2024', date: '15 Décembre 2024', link: '/#/blog/1' },
    ],
    resources: [
      { id: 1, title: 'Rapport Annuel 2024', date: '15 Décembre 2024', link: '/#/ressources/1' },
    ],
  },
  'proscides': {
    news: [
      { id: 1, title: 'Rapport Annuel 2024', date: '15 Décembre 2024', link: '/#/blog/1' },
    ],
    resources: [
      { id: 1, title: 'Rapport Annuel 2024', date: '15 Décembre 2024', link: '/#/ressources/1' },
    ],
  },
  'jeunes-volontaires': {
    news: [
      { id: 2, title: 'Justice Reproductive : Forum National', date: '30 Septembre 2024', link: '/#/blog/2' },
    ],
    resources: [
      { id: 2, title: 'Guide SSR', date: '30 Septembre 2024', link: '/#/ressources/2' },
    ],
  },
  'liggeeyal-eleg': {
    news: [
      { id: 3, title: 'Lancement LIGGEEYAL ËLËG', date: '15 Novembre 2024', link: '/#/blog/1' },
    ],
    resources: [
      { id: 1, title: 'Rapport Annuel 2024', date: '15 Décembre 2024', link: '/#/ressources/1' },
    ],
  },
}

export default function ProgramRelated({ programId }: { programId: string }) {
  const data = relatedByProgram[programId] || { news: [], resources: [] }

  if (!data.news.length && !data.resources.length) return null

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {data.news.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Actualités liées</h2>
                <Link to="/blog" className="text-sm text-pink-600 hover:text-pink-700">Voir tout</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.news.map((item, idx) => (
                  <Reveal key={`news-reveal-${item.id}`} animation="fade-up" delayMs={idx * 80}>
                    <Card className="overflow-hidden shadow-md">
                      {item.image && (
                        <div className="h-40 overflow-hidden">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <CardHeader className="pb-2">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          {item.date}
                        </div>
                        <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                      </CardHeader>
                      {item.excerpt && (
                        <CardContent className="pt-0">
                          <p className="text-gray-600 text-sm line-clamp-2 mb-3">{item.excerpt}</p>
                          <Button asChild variant="ghost" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 p-0 text-sm font-medium">
                            <a href={item.link} className="flex items-center">
                              Lire <ArrowRight className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        </CardContent>
                      )}
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {data.resources.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ressources liées</h2>
                <Link to="/ressources" className="text-sm text-pink-600 hover:text-pink-700">Voir tout</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.resources.map((item, idx) => (
                  <Reveal key={`res-reveal-${item.id}`} animation="fade-up" delayMs={idx * 80}>
                    <Card className="shadow-md">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-pink-600" /> {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>{item.date}</span>
                          <Button asChild variant="outline">
                            <a href={item.link} className="flex items-center">Ouvrir <ArrowRight className="ml-1 h-3 w-3" /></a>
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