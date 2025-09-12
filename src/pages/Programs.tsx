
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { Users, BookOpen, Heart, Target, Calendar, MapPin, Star, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { PROGRAMS } from '@/data/programs'

/**
 * Page Nos programmes - Présentation détaillée de tous les programmes de J-GEN
 * Affiche les informations sur chaque programme avec leurs impacts et résultats
 */
export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState('all')
  const programs = PROGRAMS
  const { t } = useTranslation()

  

  const normalized = programs.map((p) => ({
    id: p.slug,
    title: p.title,
    route: p.route,
    image: undefined,
    color: 'from-pink-500 to-purple-600',
    icon: <BookOpen className="h-8 w-8" />,
    description: '',
    details: [],
    achievements: [],
    partners: [],
    category: 'Autres',
  }))

  const categoriesFromData = Array.from(new Set(normalized.map((p) => p.category).filter(Boolean)))
  const categories = [
    { id: 'all', name: t('programsPage.filters.all') },
    ...categoriesFromData.map((c) => ({ id: c, name: c })),
  ]

  const filteredPrograms = activeTab === 'all' ? normalized : normalized.filter(p => p.category === activeTab)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          title={t('programsPage.title')}
          description={t('programsPage.description')}
          backgroundImage="https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/b5e5e874-39b8-4d07-9b45-306844d95814.jpg"
        />

        {/* Filtres par catégorie */}
        <section className="py-8 bg-white sticky top-16 z-40 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === category.id
                      ? `bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Liste des programmes */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12">
              {filteredPrograms.map((program) => (
                <div key={program.id} id={program.id} className="scroll-mt-24">
                  <Card className="overflow-hidden border-0 shadow-lg rounded-xl max-w-4xl mx-auto">
                    {/* Image illustrative */}
                    <div className="h-48 md:h-56 w-full overflow-hidden">
                      {program.image ? (
                        <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gray-200" />
                      )}
                    </div>
                    
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-2/3">
                          <div className="flex items-start space-x-4 mb-4">
                            <div className={`p-3 rounded-lg bg-gradient-to-r ${program.color} text-white`}>
                              {program.icon}
                            </div>
                            <div>
                              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                {program.title}
                              </h2>
                              {program.description && (
                                <p className="text-lg text-gray-600">{program.description}</p>
                              )}
                              <div className="mt-1 text-sm text-gray-500">{program.category}</div>
                            </div>
                          </div>
                        </div>

                        <div className="md:w-1/3">
                          <div className="bg-gray-50 rounded-lg p-6 h-full">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('programsPage.sidebarTitle')}</h3>
                            <p className="text-gray-600 mb-6">
                              {t('programsPage.sidebarText')}
                            </p>
                            <div className="space-y-3">
                              <Button asChild className="w-full rounded-full border-pink-600 text-white bg-pink-600 hover:bg-pink-700 transition-colors">
                                <Link to={program.route}>
                                  Voir le programme
                                </Link>
                              </Button>
                              <Button asChild variant="outline" className="bg-transparent w-full rounded-full border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition-colors">
                                <Link to="/ressources">
                                  {t('programsPage.viewResources')}
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact global */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('programsPage.impactTitle')}</h2>
              <p className="text-lg text-gray-600 mb-12">
                {t('programsPage.impactDesc')}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">1447+</div>
                  <div className="text-gray-600">{t('programsPage.impacted')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">801</div>
                  <div className="text-gray-600">{t('programsPage.trained')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">646</div>
                  <div className="text-gray-600">{t('programsPage.sensitized')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">6</div>
                  <div className="text-gray-600">{t('programsPage.activeProjects')}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Appel à l'action */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('programsPage.joinActionsTitle')}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t('programsPage.joinActionsDesc')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link to="/contact">
                  {t('cta.volunteer')}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
                <Link to="/blog">
                  {t('cta.followNews')}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
