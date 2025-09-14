
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { Download, FileText, Video, Image, ExternalLink, Search, Filter, Calendar } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { sanityClient } from '@/lib/sanity'
import { resourcesList } from '@/lib/queries'
import { urlFor } from '@/lib/image'

/**
 * Page Ressources - Documents et ressources téléchargeables
 * Affiche les rapports, guides, vidéos et autres ressources de J-GEN
 */
export default function ResourcesPage() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const initialQ = params.get('q') || ''
  const [searchTerm, setSearchTerm] = useState(initialQ)
  const [selectedType, setSelectedType] = useState('all')
  const [selectedYear, setSelectedYear] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [items, setItems] = useState<any[]>([])
  const { t } = useTranslation()

  useEffect(() => {
    sanityClient.fetch(resourcesList).then((res) => setItems(res)).catch(() => setItems([]))
  }, [])

  const resources = items.map((r) => ({
    id: r.slug,
    title: r.title,
    description: r.description || '',
    type: r.type || 'other',
    year: r.date ? new Date(r.date).getFullYear().toString() : 'NA',
    date: r.date ? new Date(r.date).toLocaleDateString('fr-FR') : '',
    thumb: r.coverImage ? urlFor(r.coverImage).width(800).height(600).url() : undefined,
    fileUrl: r.url || '',
    format: r.type?.toUpperCase() || '',
    category: r.category || 'Autres',
  }))

  const filteredResources = resources.filter(resource => {
    const q = searchTerm.toLowerCase()
    const matchesSearch = resource.title.toLowerCase().includes(q) ||
                         resource.description.toLowerCase().includes(q)
    const matchesType = selectedType === 'all' || resource.type === selectedType
    const matchesYear = selectedYear === 'all' || resource.year === selectedYear
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory
    return matchesSearch && matchesType && matchesYear && matchesCategory
  })

  const years = [{ id: 'all', name: t('resourcesPage.yearsAll') }, ...Array.from(new Set(resources.map(r => r.year))).filter(Boolean).map(y => ({ id: y, name: y }))]
  const categories = [{ id: 'all', name: t('resourcesPage.filterTypeAll') }, ...Array.from(new Set(resources.map(r => r.category))).filter(Boolean).map(c => ({ id: c, name: c }))]

  const resourceTypes = [
    { id: 'all', name: t('resourcesPage.filterTypeAll'), icon: <FileText className="h-5 w-5" /> },
    { id: 'pdf', name: 'PDF', icon: <FileText className="h-5 w-5" /> },
    { id: 'video', name: 'Vidéos', icon: <Video className="h-5 w-5" /> },
    { id: 'image', name: 'Images', icon: <Image className="h-5 w-5" /> },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          title={t('resourcesPage.title')}
          description={t('resourcesPage.description')}
          backgroundImage="https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/101a1234-1e2a-4546-a390-f68da941068b.jpg"
        />

        {/* Filtres et recherche */}
        <section className="py-8 bg-white sticky top-16 z-40 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Barre de recherche */}
              <div className="relative flex-grow max-w-md">
                <input
                  type="text"
                  placeholder={t('resourcesPage.searchPlaceholder')}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>

              {/* Filtre par type */}
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  {resourceTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filtre par catégorie */}
              <div className="flex items-center space-x-2">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filtre par année */}
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                {years.map((year) => (
                  <option key={year.id} value={year.id}>
                    {year.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Liste des ressources */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Résultats */}
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                {t('resourcesPage.results', { count: filteredResources.length })}
              </p>
            </div>

            {/* Grille des ressources */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <Card key={resource.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    {resource.thumb ? (
                      <img src={resource.thumb} alt={resource.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                    ) : (
                      <div className="w-full h-full bg-gray-200" />
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded-full text-xs font-medium">
                        {resource.type}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {resource.date}
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{resource.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {resource.description}
                    </CardDescription>
                    <div className="mt-1 text-xs text-gray-500">{resource.category}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <span>{resource.format}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button asChild variant="outline" className="flex-1">
                        <Link to={`/ressources/${resource.id}`} className="flex items-center justify-center">
                          {t('resourcesPage.view')}
                        </Link>
                      </Button>
                      <Button asChild disabled={!resource.fileUrl} className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90">
                        <a href={resource.fileUrl || '#'} className="flex items-center justify-center" onClick={(e) => { if (!resource.fileUrl) e.preventDefault() }}>
                        <Download className="h-4 w-4 mr-2" />
                          {t('resourcesPage.download')}
                      </a>
                    </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Message si aucun résultat */}
            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">{t('resourcesPage.noneFound')}</p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedType('all')
                    setSelectedYear('all')
                    setSelectedCategory('all')
                  }}
                >
                  {t('common.resetFilters')}
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Section demandes spécifiques */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('resourcesPage.helpTitle')}</h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('resourcesPage.helpText')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90">
                  <a href="/contact">
                    {t('resourcesPage.contactTeam')}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent">
                  <a href="mailto:jgensenegal@gmail.com">
                    {t('resourcesPage.sendEmail')}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
