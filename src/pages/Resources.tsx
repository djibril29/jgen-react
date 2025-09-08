
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { Download, FileText, Video, Image, ExternalLink, Search, Filter, Calendar } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  // Types de ressources
  const resourceTypes = [
    { id: 'all', name: t('resourcesPage.filterTypeAll'), icon: <FileText className="h-5 w-5" /> },
    { id: 'rapport', name: 'Rapports', icon: <FileText className="h-5 w-5" /> },
    { id: 'guide', name: 'Guides', icon: <FileText className="h-5 w-5" /> },
    { id: 'video', name: 'Vidéos', icon: <Video className="h-5 w-5" /> },
    { id: 'image', name: 'Images', icon: <Image className="h-5 w-5" /> },
    { id: 'outil', name: 'Outils', icon: <FileText className="h-5 w-5" /> }
  ]

  // Années disponibles
  const years = [
    { id: 'all', name: t('resourcesPage.yearsAll') },
    { id: '2024', name: '2024' },
    { id: '2023', name: '2023' },
    { id: '2022', name: '2022' },
    { id: '2021', name: '2021' }
  ]

  // Données des ressources
  const resources = [
    {
      id: 1,
      title: 'Rapport Annuel J-GEN 2024',
      description: "Le rapport annuel complet des activités et réalisations de J-GEN pour l'année 2024.",
      type: 'rapport',
      year: '2024',
      date: '15 Décembre 2024',
      size: '2.4 MB',
      format: 'PDF',
      category: 'Rapports annuels',
      downloads: 245,
      image: 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/0c7578f3-18bb-450d-b2d0-39d46a6d3f88.jpg',
      fileUrl: '#'
    },
    {
      id: 2,
      title: 'Guide sur les droits sexuels et reproductifs',
      description: 'Un guide pratique pour comprendre et défendre les droits sexuels et reproductifs des femmes et des filles.',
      type: 'guide',
      year: '2024',
      date: '30 Septembre 2024',
      size: '1.8 MB',
      format: 'PDF',
      category: 'Guides pratiques',
      downloads: 189,
      image: 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/1f2edea8-8f2d-4069-9d09-164bd2b8b249.jpg',
      fileUrl: '#'
    },
    {
      id: 3,
      title: "Outils de plaidoyer pour l'avortement sécurisé",
      description: "Kit d'outils développés dans le cadre du programme PAS À PAS pour le plaidoyer en faveur de l'avortement sécurisé.",
      type: 'outil',
      year: '2024',
      date: '15 Septembre 2024',
      size: '3.2 MB',
      format: 'ZIP',
      category: 'Outils de plaidoyer',
      downloads: 156,
      image: 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/17d0bea9-b91e-4a91-b3b1-444f7cd915e8.jpg',
      fileUrl: '#'
    },
    {
      id: 4,
      title: 'Rapport Annuel J-GEN 2023',
      description: "Le rapport annuel complet des activités et réalisations de J-GEN pour l'année 2023.",
      type: 'rapport',
      year: '2023',
      date: '20 Décembre 2023',
      size: '2.1 MB',
      format: 'PDF',
      category: 'Rapports annuels',
      downloads: 312,
      image: 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/fc95caca-d4dd-481c-80a3-1b6cabfe15f0.jpg',
      fileUrl: '#'
    },
    {
      id: 5,
      title: 'Vidéo : Témoignages de survivantes',
      description: 'Compilation de témoignages poignants de survivantes de violences sexuelles soutenues par J-GEN.',
      type: 'video',
      year: '2024',
      date: '10 Août 2024',
      duration: '15:42',
      format: 'MP4',
      category: 'Témoignages',
      views: 1245,
      image: 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/0dcf3633-659e-4a50-858e-2c2bddc7fe42.jpg',
      fileUrl: '#'
    },
    {
      id: 6,
      title: 'Guide de prévention des VBG',
      description: "Guide complet sur la prévention des violences basées sur le genre à l'égard des femmes et des filles.",
      type: 'guide',
      year: '2023',
      date: '25 Novembre 2023',
      size: '2.7 MB',
      format: 'PDF',
      category: 'Guides pratiques',
      downloads: 423,
      image: 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/75b69869-a65d-4c03-a74a-791d8170f995.jpg',
      fileUrl: '#'
    },
    {
      id: 7,
      title: 'Photos : Forum National Justice Reproductive',
      description: 'Galerie photos du Forum National sur la Justice Reproductive organisé en septembre 2024.',
      type: 'image',
      year: '2024',
      date: '30 Septembre 2024',
      count: '45 photos',
      format: 'JPG',
      category: 'Galerie photos',
      downloads: 89,
      image: 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/08a83722-360b-4ff1-b55b-c25ea356b18b.jpg',
      fileUrl: '#'
    },
    {
      id: 8,
      title: 'Kit de formation sur le leadership féministe',
      description: 'Matériel de formation complet pour renforcer le leadership féministe transformationnel.',
      type: 'outil',
      year: '2024',
      date: '5 Juillet 2024',
      size: '5.1 MB',
      format: 'ZIP',
      category: 'Outils de formation',
      downloads: 201,
      image: 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/fb01c497-2c9b-4023-9643-1ab0e56a3f68.jpg',
      fileUrl: '#'
    }
  ]

  // Filtrer les ressources
  const filteredResources = resources.filter(resource => {
    const q = searchTerm.toLowerCase()
    const matchesSearch = resource.title.toLowerCase().includes(q) ||
                         resource.description.toLowerCase().includes(q)
    
    const matchesType = selectedType === 'all' || resource.type === selectedType
    const matchesYear = selectedYear === 'all' || resource.year === selectedYear
    
    return matchesSearch && matchesType && matchesYear
  })

  // Obtenir les catégories uniques
  const categories = [...new Set(resources.map(r => r.category))]

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
            {/* Catégories */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('resourcesPage.browseByCategory')}</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchTerm(category)}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Résultats */}
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                {t('resourcesPage.results', { count: filteredResources.length })}
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  {t('resourcesPage.newest')}
                </Button>
                <Button variant="outline" size="sm">
                  {t('resourcesPage.mostDownloaded')}
                </Button>
              </div>
            </div>

            {/* Grille des ressources */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <Card key={resource.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={resource.image} 
                      alt={resource.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded-full text-xs font-medium">
                        {resource.category}
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
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <span>{resource.format}</span>
                        {resource.size && <span>{resource.size}</span>}
                        {resource.duration && <span>{resource.duration}</span>}
                        {resource.count && <span>{resource.count}</span>}
                      </div>
                      <div className="flex items-center">
                        {resource.downloads && (
                          <>
                            <Download className="h-4 w-4 mr-1" />
                            <span>{resource.downloads}</span>
                          </>
                        )}
                        {resource.views && (
                          <>
                            <ExternalLink className="h-4 w-4 mr-1" />
                            <span>{resource.views}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button asChild variant="outline" className="flex-1">
                        <Link to={`/ressources/${resource.id}`} className="flex items-center justify-center">
                          {t('resourcesPage.view')}
                        </Link>
                      </Button>
                      <Button asChild className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90">
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
