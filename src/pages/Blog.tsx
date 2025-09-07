
import { useState } from 'react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { Calendar, User, Tag, Search, ArrowRight } from 'lucide-react'

/**
 * Page Blog - Actualités et articles de J-GEN
 * Affiche les articles du blog avec système de filtrage par catégorie
 */
export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Catégories d'articles
  const categories = [
    { id: 'all', name: 'Tous les articles', count: 12 },
    { id: 'actualites', name: 'Actualités', count: 5 },
    { id: 'evenements', name: 'Événements', count: 3 },
    { id: 'plaidoyer', name: 'Plaidoyer', count: 2 },
    { id: 'temoignages', name: 'Témoignages', count: 2 }
  ]

  // Articles du blog
  const articles = [
    {
      id: 1,
      title: 'Rapport Annuel 2024 : Une année de résilience et d\'adaptation stratégique',
      excerpt: 'Découvrez les réalisations marquantes de J-GEN en 2024 et notre vision pour 2025 dans ce rapport annuel complet.',
      content: 'L\'année 2024 a été marquée par un rétrécissement préoccupant de l\'espace civique, tant au niveau national qu\'international. Dans ce contexte particulièrement contraint, J-GEN Sénégal a su faire preuve d\'une résilience remarquable...',
      date: '15 Décembre 2024',
      author: 'Maimouna YADE',
      category: 'actualites',
      image: 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/355cb97a-5311-4a9c-8061-e07bce34eeda.jpg',
      tags: ['rapport annuel', '2024', 'résilience']
    },
    {
      id: 2,
      title: 'Forum National sur la Justice Reproductive : Un pas vers le changement',
      excerpt: '150 participants ont discuté des avortements clandestins et de l\'application du Protocole de Maputo lors de notre forum.',
      content: 'Organisé en septembre 2024, le premier Forum de JGEN sur les avortements clandestins et l\'application du Protocole de Maputo a rassemblé 150 participant·es issues des réseaux constitués par le programme PAS À PAS...',
      date: '30 Septembre 2024',
      author: 'Équipe J-GEN',
      category: 'evenements',
      image: 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/154bb4ae-b9a8-4233-8529-ea3ff8ba416c.jpg',
      tags: ['justice reproductive', 'forum', 'protocole de maputo']
    },
    {
      id: 3,
      title: 'Lancement du projet LIGGEEYAL ËLËG pour l\'autonomisation économique',
      excerpt: 'Un nouveau projet de 3 ans pour l\'autonomisation économique des jeunes filles et femmes vulnérables à Kaolack et Fatick.',
      content: 'LIGGEEYAL ËLËG est un projet qui s\'allie à la mission de J-GEN. En partenariat avec l\'Organisation Internationale de la Francophonie (OIF), ce projet vise l\'autonomisation économique des jeunes filles et femmes vulnérables...',
      date: '15 Novembre 2024',
      author: 'Équipe J-GEN',
      category: 'actualites',
      image: 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/3266672b-4de6-460c-9ac2-89561518a201.jpg',
      tags: ['autonomisation économique', 'LIGGEEYAL ËLËG', 'OIF']
    },
    {
      id: 4,
      title: 'Université d\'Été Féministe 2024 : Un espace de savoir et de résistance',
      excerpt: 'Retour sur la deuxième édition de l\'UEF qui a réuni 275 militantes féministes d\'Afrique francophone.',
      content: 'En 2024, JGEN Sénégal, en partenariat avec le Collectif des Féministes du Sénégal, a marqué un nouveau tournant dans le leadership féministe régional en organisant la deuxième édition de l\'Université d\'Été Féministe...',
      date: '10 Août 2024',
      author: 'Équipe J-GEN',
      category: 'evenements',
      image: 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/491c689a-941a-49ff-b23b-a7ce598e02bd.jpg',
      tags: ['UEF', 'féminisme', 'formation']
    },
    {
      id: 5,
      title: 'Témoignage : Aminata, survivante et militante',
      excerpt: 'Aminata partage son parcours de survivante et son engagement dans la lutte contre les violences faites aux filles.',
      content: '« Avant de rencontrer J-GEN, je me sentais seule et perdue. Les séances de guérison m\'ont aidée à retrouver ma force. Aujourd\'hui, je suis militante et j\'aide d\'autres filles comme moi... »',
      date: '5 Juillet 2024',
      author: 'Aminata Diop',
      category: 'temoignages',
      image: 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/9ac25252-bea6-4ebb-bd59-ec5cb48911ea.jpg',
      tags: ['témoignage', 'survivante', 'résilience']
    },
    {
      id: 6,
      title: 'Plaidoyer pour la dépénalisation de l\'avortement en cas de viol',
      excerpt: 'Notre position et nos arguments en faveur de la dépénalisation de l\'avortement en cas de viol et d\'inceste au Sénégal.',
      content: 'Le programme PAS À PAS de J-GEN défend la dépénalisation de l\'avortement en cas de viol et d\'inceste comme une mesure de justice reproductive essentielle. Cette position s\'appuie sur plusieurs arguments...',
      date: '20 Juin 2024',
      author: 'Équipe Plaidoyer J-GEN',
      category: 'plaidoyer',
      image: 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/97bb2b4f-9952-44df-9e1e-43d1a1b29b5d.jpg',
      tags: ['avortement', 'droits reproductifs', 'plaidoyer']
    }
  ]

  // Filtrer les articles
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  // Articles populaires
  const popularArticles = articles.slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          title="Blog & Actualités"
          description="Restez informé de nos actions, événements et prises de position pour les droits des femmes et des filles."
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
                      placeholder="Rechercher des articles..."
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
                      <Card key={article.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div className="md:flex">
                          <div className="md:w-1/3">
                            <div className="h-48 md:h-full">
                              <img 
                                src={article.image} 
                                alt={article.title}
                                className="w-full h-full object-cover"
                              />
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
                              <div className="flex flex-wrap gap-2 mb-4">
                                {article.tags.map((tag, index) => (
                                  <span 
                                    key={index} 
                                    className="px-2 py-1 bg-pink-100 text-pink-800 rounded-full text-xs"
                                  >
                                    <Tag className="h-3 w-3 inline mr-1" />
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <Button asChild variant="ghost" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 p-0">
                                <Link to={`/blog/${article.id}`} className="flex items-center">
                                  Lire la suite <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                            </CardContent>
                          </div>
                        </div>
                      </Card>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500 text-lg">Aucun article trouvé pour votre recherche.</p>
                      <Button 
                        variant="outline" 
                        className="mt-4"
                        onClick={() => {
                          setSearchTerm('')
                          setSelectedCategory('all')
                        }}
                      >
                        Réinitialiser les filtres
                      </Button>
                    </div>
                  )}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                  <div className="flex space-x-2">
                    <Button variant="outline" disabled>
                      Précédent
                    </Button>
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-600">
                      1
                    </Button>
                    <Button variant="outline">
                      2
                    </Button>
                    <Button variant="outline">
                      Suivant
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
                        <div key={article.id} className="flex space-x-3">
                          <div className="w-20 h-20 flex-shrink-0">
                            <img 
                              src={article.image} 
                              alt={article.title}
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                              <Link 
                                to={`/blog/${article.id}`} 
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

                {/* Tags */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'féminisme', 'droits des femmes', 'VBG', 'santé reproductive', 
                        'autonomisation', 'éducation', 'plaidoyer', 'justice sociale'
                      ].map((tag, index) => (
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
