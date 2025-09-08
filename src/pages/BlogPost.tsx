
import { Link, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, User, Tag, ArrowLeft, Share2, Heart, MessageCircle, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Page BlogPost - Affiche un article de blog individuel
 * @param {Object} props - Les propriétés du composant
 */
export default function BlogPost() {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()

  // Données des articles (simulées)
  const articles: Record<string, any> = {
    '1': {
      id: 1,
      title: "Rapport Annuel 2024 : Une année de résilience et d'adaptation stratégique",
      excerpt: 'Découvrez les réalisations marquantes de J-GEN en 2024 et notre vision pour 2025 dans ce rapport annuel complet.',
      content: `
        <h3>Contexte 2024 : Un espace civique en rétrécissement</h3>
        <p>L'année 2024 a été marquée par un rétrécissement préoccupant de l'espace civique, tant au niveau national qu'international. La montée des conservatismes, les pressions politiques, la stigmatisation des mouvements féministes, ainsi que la réduction drastique des opportunités de financement dédiées aux droits des femmes ont fragilisé de nombreuses organisations.</p>
        
        <p>Dans ce contexte particulièrement contraint, J-GEN Sénégal a su faire preuve d'une résilience remarquable. Au Sénégal, une nouvelle alternance politique survenue en mars 2024 a permis de reconcentrer les politiques publiques autour d'un nouvel agenda national de transformation, il s'agit de la VISION 2050.</p>
        
        <h3>Les défis majeurs de J-GEN</h3>
        <p>Les défis majeurs de J-GEN dans l'analyse de l'environnement socio politique actuel du Sénégal restent la veille, l'alerte et le contrôle citoyen, concernant particulièrement toutes les politiques et mesures institutionnelles qui touchent les droits des femmes, des filles et des enfants.</p>
        
        <p>Fidèle à sa mission de défendre les droits des femmes et des filles, l'organisation a su s'adapter, innover et maintenir son engagement sur le terrain. Loin de céder au découragement, l'organisation a renforcé ses fondations : diversification des partenariats, rationalisation des ressources, capitalisation sur l'expertise locale, et recentrage sur des actions à fort impact.</p>
        
        <h3>Les réalisations marquantes</h3>
        <p>JGEN a également misé sur des dynamiques collectives de solidarité féministe, en consolidant des alliances stratégiques avec d'autres OSC, en soutenant les jeunes voix féminines émergentes, et en continuant à porter un plaidoyer audacieux, même face aux replis conservateurs.</p>
        
        <p>Cette capacité d'adaptation témoigne non seulement de la solidité institutionnelle de JGEN, mais aussi de sa vision à long terme : bâtir un mouvement féministe durable, intergénérationnel, enraciné dans les réalités sénégalaises, et capable d'influencer les transformations sociales et politiques en faveur de l'égalité.</p>
        
        <h3>Perspectives 2025</h3>
        <p>En 2025, nous redoublerons d'énergie, de créativité et de résilience, portés par cette conviction profonde que l'autonomisation des femmes et des filles n'est pas un choix, mais une urgence historique. Face aux défis colossaux qui se dessinent, nous ne reculerons pas.</p>
        
        <p>Nous avançons avec la rage douce de celles et ceux qui croient, même dans l'adversité, à un monde juste, égalitaire et humain. Notre passion est tenace, notre foi en la transformation sociale est intacte, notre détermination est une signature. Et si le vent souffle fort, nous hisserons plus haut les voiles de la sororité.</p>
      `,
      date: '15 Décembre 2024',
      author: 'Maimouna YADE',
      category: 'actualites',
      image: '/assets/images/pas-a-pas/site3.jpeg',
      tags: ['rapport annuel', '2024', 'résilience', 'féminisme'],
      readTime: '8 min'
    },
    '2': {
      id: 2,
      title: 'Forum National sur la Justice Reproductive : Un pas vers le changement',
      excerpt: "150 participants ont discuté des avortements clandestins et de l'application du Protocole de Maputo.",
      content: `
        <h3>Un événement historique</h3>
        <p>Organisé en septembre 2024, le premier Forum de JGEN sur les avortements clandestins et l'application du Protocole de Maputo a rassemblé 150 participant·es issues des réseaux constitués par le programme PAS À PAS. Cet événement majeur, soutenu par PP Global, FJS, et Marie Stopes International, a marqué une étape importante dans le plaidoyer pour la justice reproductive au Sénégal.</p>
        
        <h3>Les objectifs du forum</h3>
        <p>Le forum avait pour objectifs principaux de :</p>
        <ul>
          <li>Briser le silence autour des violences sexuelles subies par les filles et les femmes</li>
          <li>Recentrer le débat sur l'article 14 du Protocole de Maputo</li>
          <li>Formuler des recommandations concrètes pour l'évolution du cadre juridique et social</li>
        </ul>
        
        <h3>Les recommandations clés</h3>
        <p>Les participants ont formulé plusieurs recommandations importantes :</p>
        <ul>
          <li>Dépénaliser l'avortement en cas de viol et d'inceste dans le Code pénal sénégalais</li>
          <li>Intégrer les leaders religieux et les acteurs communautaires dans la stratégie de plaidoyer</li>
          <li>Créer un lexique journalistique pour réduire la stigmatisation dans les médias</li>
          <li>Former les journalistes à la justice reproductive, sans biais sexiste</li>
          <li>Mettre en place des maisons d'accueil pour les survivantes de VBG et d'avortements à risque</li>
        </ul>
        
        <h3>Prochaines étapes</h3>
        <p>Le forum n'était qu'une première étape. J-GEN et ses partenaires s'engagent à poursuivre le dialogue et à mettre en œuvre les recommandations formulées. Des groupes de travail seront constitués pour suivre l'avancement de chaque recommandation et assurer leur mise en œuvre effective.</p>
      `,
      date: '30 Septembre 2024',
      author: 'Équipe J-GEN',
      category: 'evenements',
      image: 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/f6625d97-a7ab-4406-b3ff-9162a29e20cd.jpg',
      tags: ['justice reproductive', 'forum', 'protocole de maputo'],
      readTime: '6 min'
    }
  }

  const article = articles[id || '1']

  if (!article) {
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

  // Articles similaires
  const relatedArticles = Object.values(articles).filter(a => a.id !== article.id).slice(0, 2)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* En-tête de l'article (Hero) */}
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
                <span className="inline-flex items-center"><Calendar className="h-4 w-4 mr-1" /> {article.date}</span>
                <span>•</span>
                <span className="inline-flex items-center"><User className="h-4 w-4 mr-1" /> {article.author}</span>
                <span>•</span>
                <span>{article.readTime} {t('blogPost.read')}</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                {article.title}
              </h1>

              {article.excerpt && (
                <p className="text-base md:text-lg text-gray-600 max-w-3xl">
                  {article.excerpt}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mt-6">
                {article.tags.map((tag: string, index: number) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm"
                  >
                    <Tag className="h-3 w-3 inline mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contenu de l'article */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Auteur et date */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{article.author}</h3>
                    <p className="text-sm text-gray-500">{article.date}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {article.readTime} {t('blogPost.read')}
                </div>
              </div>
              
              {/* Contenu de l'article */}
              <div className="prose prose-lg max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: article.content }} 
                  className="prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-p:text-lg prose-li:text-base prose-a:text-pink-600 prose-a:no-underline hover:prose-a:underline"
                />
              </div>
              
              {/* Barre de partage */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-700 font-medium">{t('blogPost.share')}</span>
                    <div className="flex space-x-3">
                      <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors shadow-md">
                        <span className="font-bold text-sm">f</span>
                      </button>
                      <button className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors shadow-md">
                        <span className="font-bold text-sm">t</span>
                      </button>
                      <button className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors shadow-md">
                        <span className="font-bold text-sm">in</span>
                      </button>
                      <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors shadow-md">
                        <span className="font-bold text-sm">✉</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors bg-gray-100 px-4 py-2 rounded-full">
                      <Heart className="h-4 w-4" />
                      <span>{t('blogPost.like')}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors bg-gray-100 px-4 py-2 rounded-full">
                      <MessageCircle className="h-4 w-4" />
                      <span>{t('blogPost.comment')}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles similaires */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('blogPost.relatedTitle')}</h2>
                <p className="text-lg text-gray-600">
                  {t('blogPost.relatedDesc')}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <Card key={related.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="h-3 w-3 mr-1" />
                        {related.date}
                      </div>
                      <CardTitle className="text-lg line-clamp-2 group-hover:text-pink-600 transition-colors">
                        <Link 
                          to={`/blog/${related.id}`} 
                          className="hover:text-pink-600 transition-colors"
                        >
                          {related.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {related.excerpt}
                      </p>
                      <Button asChild variant="ghost" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 p-0 text-sm font-medium group-hover:bg-pink-50 group-hover:px-3 group-hover:py-1 group-hover:rounded-full transition-all">
                        <Link to={`/blog/${related.id}`} className="flex items-center">
                          {t('common.readMore')} <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  )
}
