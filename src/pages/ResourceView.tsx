import { Link, useParams } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { sanityClient } from '@/lib/sanity'
import { resourceBySlug } from '@/lib/queries'

export default function ResourceView() {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useTranslation()
  const [resource, setResource] = useState<any | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (!slug) return
    setLoading(true)
    sanityClient
      .fetch(resourceBySlug, { slug })
      .then((res) => setResource(res || null))
      .finally(() => setLoading(false))
  }, [slug])

  const renderViewer = () => {
    const url: string = resource?.url || ''
    const type: string = resource?.type || ''
    if (!url) return <div className="text-gray-500">{t('resourceView.downloadNA')}</div>
    if (type === 'video' || url.endsWith('.mp4')) {
      return <video className="w-full rounded-lg" controls src={url} />
    }
    if (type === 'image' || url.match(/\.(png|jpe?g|webp|gif)$/i)) {
      return <img src={url} alt={resource?.title || ''} className="w-full rounded-lg" />
    }
    return <iframe title={resource?.title || ''} src={url} className="w-full h-[70vh] rounded-lg bg-white" />
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

              {loading ? (
                <div className="mb-6">Chargement…</div>
              ) : !resource ? (
                <div className="mb-6">{t('resourcesPage.noneFound')}</div>
              ) : (
                <>
                  <div className="mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{resource.title}</h1>
                    {resource.description && (
                      <p className="text-gray-600 mt-2">{resource.description}</p>
                    )}
                  </div>

                  <Card className="mb-6">
                    <CardContent className="pt-6">{renderViewer()}</CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>{t('resourceView.about')}</CardTitle>
                      {resource.date && (
                        <CardDescription>
                          {t('resourceView.publishedOn', { date: new Date(resource.date).toLocaleDateString('fr-FR') })}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600">{t('resourceView.type', { type: resource.type || '-' })}</div>
                        {resource.url ? (
                          <Button asChild>
                            <a href={resource.url} download>
                              {t('resourceView.download')}
                            </a>
                          </Button>
                        ) : (
                          <Button disabled>{t('resourceView.downloadNA')}</Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 