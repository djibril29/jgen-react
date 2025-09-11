import { Link, useParams } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowLeft, Tag } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { sanityClient } from '@/lib/sanity'
import { blogBySlug } from '@/lib/queries'
import { urlFor } from '@/lib/image'
import { PortableText } from '@portabletext/react'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useTranslation()
  const [post, setPost] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) {
      setLoading(false)
      return
    }
    sanityClient
      .fetch(blogBySlug, { slug })
      .then((res) => setPost(res))
      .catch(() => setPost(null))
      .finally(() => setLoading(false))
  }, [slug])

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

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('blogPost.notFound')}</h1>
            <Button asChild>
              <Link to="/blog">{t('blogPost.backToBlog')}</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const coverImage = post.coverImage ? urlFor(post.coverImage).width(1600).height(600).url() : ''
  const date = post.date ? new Date(post.date).toLocaleDateString('fr-FR') : ''

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Button asChild variant="ghost" className="mb-6 text-pink-600 hover:text-pink-700">
                <Link to="/blog" className="flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t('blogPost.backToBlog')}
                </Link>
              </Button>

              <div className="mb-5 text-gray-600 text-sm flex items-center flex-wrap gap-x-3 gap-y-2">
                {date && (
                  <span className="inline-flex items-center"><Calendar className="h-4 w-4 mr-1" /> {date}</span>
                )}
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="text-base md:text-lg text-gray-600 max-w-3xl mb-6">
                  {post.excerpt}
                </p>
              )}

              {post.coverImage && (
                <img src={coverImage} alt={post.title} className="w-full h-auto rounded-lg mb-10" />
              )}

              {post.tags && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">
                      <Tag className="h-3 w-3 inline mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="prose prose-lg max-w-none">
                <PortableText value={post.body} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

