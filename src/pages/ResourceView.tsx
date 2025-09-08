import { Link, useParams } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslation } from 'react-i18next'

interface ResourceItem {
  id: number
  title: string
  description?: string
  type: 'rapport' | 'guide' | 'video' | 'image' | 'outil'
  date?: string
  image?: string
  fileUrl?: string
}

const mockResources: Record<string, ResourceItem> = {
  '1': {
    id: 1,
    title: "Rapport Annuel J-GEN 2024",
    description:
      "Le rapport annuel complet des activités et réalisations de J-GEN pour l'année 2024.",
    type: 'rapport',
    date: '15 Décembre 2024',
    image:
      'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/0c7578f3-18bb-450d-b2d0-39d46a6d3f88.jpg',
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  '2': {
    id: 2,
    title: 'Guide sur les droits sexuels et reproductifs',
    description:
      "Un guide pratique pour comprendre et défendre les droits sexuels et reproductifs.",
    type: 'guide',
    date: '30 Septembre 2024',
    image:
      'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/1f2edea8-8f2d-4069-9d09-164bd2b8b249.jpg',
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  '3': {
    id: 3,
    title: "Vidéo : Témoignages de survivantes",
    type: 'video',
    description:
      "Compilation de témoignages poignants de survivantes de violences sexuelles soutenues par J-GEN.",
    date: '10 Août 2024',
    image:
      'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/0dcf3633-659e-4a50-858e-2c2bddc7fe42.jpg',
    fileUrl:
      'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
}

export default function ResourceView() {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()
  const resource = (id && mockResources[id]) || {
    id: 0,
    title: 'Ressource introuvable',
    description: "La ressource demandée n'a pas été trouvée.",
    type: 'guide' as const,
  }

  const renderViewer = () => {
    const url = resource.fileUrl || ''
    if (resource.type === 'video' || url.endsWith('.mp4')) {
      return (
        <video className="w-full rounded-lg" controls src={url} />
      )
    }
    if (resource.type === 'image' || url.match(/\.(png|jpe?g|webp|gif)$/i)) {
      const src = url || resource.image || ''
      return (
        <img src={src} alt={resource.title} className="w-full rounded-lg" />
      )
    }
    // Default: PDF/document inline via iframe
    return (
      <iframe
        title={resource.title}
        src={url}
        className="w-full h-[70vh] rounded-lg bg-white"
      />
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="mb-6 text-sm text-gray-500">
                <Link to="/ressources" className="hover:underline">{t('resourceView.backToResources')}</Link>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{resource.title}</h1>
                {resource.description && (
                  <p className="text-gray-600 mt-2">{resource.description}</p>
                )}
              </div>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  {renderViewer()}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('resourceView.about')}</CardTitle>
                  {resource.date && (
                    <CardDescription>{t('resourceView.publishedOn', { date: resource.date })}</CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">{t('resourceView.type', { type: resource.type })}</div>
                    {resource.fileUrl ? (
                      <Button asChild>
                        <a href={resource.fileUrl} download>
                          {t('resourceView.download')}
                        </a>
                      </Button>
                    ) : (
                      <Button disabled>{t('resourceView.downloadNA')}</Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 