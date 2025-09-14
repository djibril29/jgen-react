
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { Calendar, User, Tag, Search, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { sanityClient } from '@/lib/sanity'
import { blogList } from '@/lib/queries'
import { urlFor } from '@/lib/image'

/**
 * Page Blog - Actualités et articles de J-GEN
 * Affiche les articles du blog avec système de filtrage par catégorie
 */
export default function BlogPage() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const initialQ = params.get('q') || ''
  const [searchTerm, setSearchTerm] = useState(initialQ)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [posts, setPosts] = useState<any[] | null>(null)
  const { t } = useTranslation()

  useEffect(() => {
    sanityClient.fetch(blogList).then((res) => setPosts(res)).catch(() => setPosts([]))
  }, [])

  const articles = (posts && posts.length > 0 ? posts.map(p => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt || '',
    content: '',
    date: new Date(p.date || Date.now()).toLocaleDateString('fr-FR'),
    author: 'J-GEN',
    category: p.category || 'Autres',
    image: p.coverImage ? urlFor(p.coverImage).width(1200).height(630).url() : undefined,
    tags: [],
  })) : [])

  const uniqueCats = Array.from(new Set(articles.map(a => a.category).filter(Boolean)))
  const categories = [
    { id: 'all', name: t('blog.categories.all'), count: articles.length },
    ...uniqueCats.map((c) => ({ id: c, name: c, count: articles.filter(a => a.category === c).length })),
  ]

  const filteredArticles = articles.filter(article => {
    const q = searchTerm.toLowerCase()
    const matchesSearch = article.title.toLowerCase().includes(q) ||
                         article.excerpt.toLowerCase().includes(q)
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const popularArticles = articles.slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          title={t('blog.title')}
          description={t('blog.description')}
          backgroundImage="https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/a9e12dc2-7eb5-417c-9194-a8605c2c38ed.jpg"
        />

        {/* Contenu du blog */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Colonne principale - Articles */}
              <div className="lg:w-2/3">
                {/* Barre de recherche */}
                <div className="mb-8">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={t('blog.searchPlaceholder')}
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                {/* Filtres par catégorie */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      {category.name}
                      <span className="ml-2 bg-white bg-opacity-20 px-2 py-0.5 rounded-full text-xs">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Liste des articles */}
                <div className="space-y-8">
                  {filteredArticles.length > 0 ? (
                    filteredArticles.map((article) => (
                      <Card key={article.slug} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div className="md:flex">
                          <div className="md:w-1/3">
                            <div className="h-48 md:h-full">
                              {article.image ? (
                                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                              ) : (
                                <div className="w-full h-full bg-gray-200" />
                              )}
                            </div>
                          </div>
                          <div className="md:w-2/3">
                            <CardHeader>
                              <div className="flex items-center text-sm text-gray-500 mb-2">
                                <Calendar className="h-4 w-4 mr-1" />
                                {article.date}
                                <span className="mx-2">•</span>
                                <User className="h-4 w-4 mr-1" />
                                {article.author}
                              </div>
                              <CardTitle className="text-xl md:text-2xl mb-2">
                                {article.title}
                              </CardTitle>
                              <CardDescription className="text-gray-600">
                                {article.excerpt}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="flex flex-wrap gap-2 mb-2">
                                <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded-full text-xs">{article.category}</span>
                              </div>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {(article.tags || []).map((tag: string, index: number) => (
                                  <span 
                                    key={index} 
                                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                                  >
                                    <Tag className="h-3 w-3 inline mr-1" />
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <Button asChild variant="ghost" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 p-0">
                                <Link to={`/blog/${article.slug}`} className="flex items-center">
                                  {t('common.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                            </CardContent>
                          </div>
                        </div>
                      </Card>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500 text-lg">{t('blog.noneFound')}</p>
                      <Button 
                        variant="outline" 
                        className="mt-4"
                        onClick={() => {
                          setSearchTerm('')
                          setSelectedCategory('all')
                        }}
                      >
                        {t('common.resetFilters')}
                      </Button>
                    </div>
                  )}
                </div>

                {/* Pagination (placeholder) */}
                <div className="mt-12 flex justify-center">
                  <div className="flex space-x-2">
                    <Button variant="outline" disabled>
                      {t('common.previous')}
                    </Button>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-500">
                      1
                    </Button>
                    <Button variant="outline">
                      2
                    </Button>
                    <Button variant="outline">
                      {t('common.next')}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Colonne latérale */}
              <div className="lg:w-1/3">
                {/* Articles populaires */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl">Articles populaires</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {popularArticles.map((article) => (
                        <div key={article.slug} className="flex space-x-3">
                          <div className="w-20 h-20 flex-shrink-0">
                            {article.image ? (
                              <img src={article.image} alt={article.title} className="w-full h-full object-cover rounded" />
                            ) : (
                              <div className="w-full h-full bg-gray-200 rounded" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                              <Link 
                                to={`/blog/${article.slug}`}
                                className="hover:text-pink-600 transition-colors"
                              >
                                {article.title}
                              </Link>
                            </h4>
                            <p className="text-sm text-gray-500">{article.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-xl">Newsletter</CardTitle>
                    <CardDescription>
                      Restez informé de nos actualités
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités et événements.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Votre email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90">
                        S'inscrire
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Tags (placeholder) */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {['féminisme','droits des femmes','VBG','santé reproductive','autonomisation','éducation','plaidoyer','justice sociale'].map((tag, index) => (
                        <button
                          key={index}
                          onClick={() => setSearchTerm(tag)}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                        >
                          #{tag}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
