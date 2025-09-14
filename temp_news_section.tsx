        {/* Actualités - Layout inspiré de l'image avec carousel */}
        <section className="py-16 md:py-20 bg-[#ecd5c3]">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Titre de la section */}
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-4">
                  Actualités
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Restez informé de nos dernières actions et événements.
                </p>
              </div>

              {/* Conteneur principal avec fond magenta foncé */}
              <div className="bg-[#8A1036] p-8 md:p-12">
                {/* Carousel des actualités */}
                <Carousel opts={{ loop: true }} className="w-full">
                  <CarouselContent>
                    {/* Slide 1 - Articles 1 et 2 */}
                    <CarouselItem className="basis-full">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Carte d'actualité 1 */}
                        <div className="bg-gray-800 rounded-xl p-6 md:p-8 relative group hover:transform hover:scale-105 transition-all duration-300">
                          {/* Image d'actualité */}
                          <div className="mb-6">
                            <div className="h-48 md:h-56 w-full rounded-lg overflow-hidden">
                              {news.length > 0 && news[0]?.image ? (
                                <img 
                                  src={news[0].image} 
                                  alt={news[0].title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                              ) : (
                                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                                  <span className="text-gray-400">Image à venir</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Contenu de la carte */}
                          <div className="space-y-4">
                            {/* Date */}
                            <div className="text-white text-sm font-medium">
                              {news.length > 0 && news[0]?.date ? news[0].date : '13 sept 2025'}
                            </div>

                            {/* Titre */}
                            <h3 className="text-white text-lg md:text-xl font-bold uppercase leading-tight">
                              {news.length > 0 && news[0]?.title ? news[0].title : 'LANCEMENT DU PROJET LIGUEYEUL EULEUK'}
                            </h3>

                            {/* Description */}
                            <p className="text-white text-sm md:text-base leading-relaxed">
                              {news.length > 0 && news[0]?.excerpt ? news[0].excerpt : 'Your paragraph text marks the beginning of an exciting new journey for our team. As the project takes flight, we are committed to making a meaningful impact in our community.'}
                            </p>
                          </div>

                          {/* Icône de navigation - Lien vers l'article */}
                          <div className="absolute bottom-6 right-6">
                            <Link to={news.length > 0 && news[0]?.slug ? `/blog/${news[0].slug}` : '/blog'}>
                              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 cursor-pointer">
                                <ArrowRight className="w-6 h-6 text-white" />
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Carte d'actualité 2 */}
                        <div className="bg-gray-800 rounded-xl p-6 md:p-8 relative group hover:transform hover:scale-105 transition-all duration-300">
                          {/* Image d'actualité */}
                          <div className="mb-6">
                            <div className="h-48 md:h-56 w-full rounded-lg overflow-hidden">
                              {news.length > 1 && news[1]?.image ? (
                                <img 
                                  src={news[1].image} 
                                  alt={news[1].title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                              ) : (
                                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                                  <span className="text-gray-400">Image à venir</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Contenu de la carte */}
                          <div className="space-y-4">
                            {/* Date */}
                            <div className="text-white text-sm font-medium">
                              {news.length > 1 && news[1]?.date ? news[1].date : '15 sept 2025'}
                            </div>

                            {/* Titre */}
                            <h3 className="text-white text-lg md:text-xl font-bold uppercase leading-tight">
                              {news.length > 1 && news[1]?.title ? news[1].title : 'FORMATION DES JEUNES VOLONTAIRES'}
                            </h3>

                            {/* Description */}
                            <p className="text-white text-sm md:text-base leading-relaxed">
                              {news.length > 1 && news[1]?.excerpt ? news[1].excerpt : 'Formation intensive des jeunes volontaires sur la santé sexuelle et reproductive. Cette initiative vise à renforcer les capacités des acteurs communautaires.'}
                            </p>
                          </div>

                          {/* Icône de navigation - Lien vers l'article */}
                          <div className="absolute bottom-6 right-6">
                            <Link to={news.length > 1 && news[1]?.slug ? `/blog/${news[1].slug}` : '/blog'}>
                              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 cursor-pointer">
                                <ArrowRight className="w-6 h-6 text-white" />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>

                    {/* Slide 2 - Articles 3 et 4 */}
                    <CarouselItem className="basis-full">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Carte d'actualité 3 */}
                        <div className="bg-gray-800 rounded-xl p-6 md:p-8 relative group hover:transform hover:scale-105 transition-all duration-300">
                          {/* Image d'actualité */}
                          <div className="mb-6">
                            <div className="h-48 md:h-56 w-full rounded-lg overflow-hidden">
                              {news.length > 2 && news[2]?.image ? (
                                <img 
                                  src={news[2].image} 
                                  alt={news[2].title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                              ) : (
                                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                                  <span className="text-gray-400">Image à venir</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Contenu de la carte */}
                          <div className="space-y-4">
                            {/* Date */}
                            <div className="text-white text-sm font-medium">
                              {news.length > 2 && news[2]?.date ? news[2].date : '17 sept 2025'}
                            </div>

                            {/* Titre */}
                            <h3 className="text-white text-lg md:text-xl font-bold uppercase leading-tight">
                              {news.length > 2 && news[2]?.title ? news[2].title : 'SENSIBILISATION COMMUNAUTAIRE'}
                            </h3>

                            {/* Description */}
                            <p className="text-white text-sm md:text-base leading-relaxed">
                              {news.length > 2 && news[2]?.excerpt ? news[2].excerpt : 'Campagne de sensibilisation dans les communautés locales pour promouvoir les droits des femmes et l'égalité des genres.'}
                            </p>
                          </div>

                          {/* Icône de navigation - Lien vers l'article */}
                          <div className="absolute bottom-6 right-6">
                            <Link to={news.length > 2 && news[2]?.slug ? `/blog/${news[2].slug}` : '/blog'}>
                              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 cursor-pointer">
                                <ArrowRight className="w-6 h-6 text-white" />
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Carte d'actualité 4 */}
                        <div className="bg-gray-800 rounded-xl p-6 md:p-8 relative group hover:transform hover:scale-105 transition-all duration-300">
                          {/* Image d'actualité */}
                          <div className="mb-6">
                            <div className="h-48 md:h-56 w-full rounded-lg overflow-hidden">
                              {news.length > 3 && news[3]?.image ? (
                                <img 
                                  src={news[3].image} 
                                  alt={news[3].title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                              ) : (
                                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                                  <span className="text-gray-400">Image à venir</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Contenu de la carte */}
                          <div className="space-y-4">
                            {/* Date */}
                            <div className="text-white text-sm font-medium">
                              {news.length > 3 && news[3]?.date ? news[3].date : '20 sept 2025'}
                            </div>

                            {/* Titre */}
                            <h3 className="text-white text-lg md:text-xl font-bold uppercase leading-tight">
                              {news.length > 3 && news[3]?.title ? news[3].title : 'ATELIER ENTREPRENEURIAT FÉMININ'}
                            </h3>

                            {/* Description */}
                            <p className="text-white text-sm md:text-base leading-relaxed">
                              {news.length > 3 && news[3]?.excerpt ? news[3].excerpt : 'Atelier de formation sur l'entrepreneuriat féminin pour accompagner les jeunes femmes dans la création de leurs entreprises.'}
                            </p>
                          </div>

                          {/* Icône de navigation - Lien vers l'article */}
                          <div className="absolute bottom-6 right-6">
                            <Link to={news.length > 3 && news[3]?.slug ? `/blog/${news[3].slug}` : '/blog'}>
                              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 cursor-pointer">
                                <ArrowRight className="w-6 h-6 text-white" />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>

                {/* Bouton Voir toutes les actualités */}
                <div className="text-center mt-8 md:mt-12">
                  <Button asChild className="bg-white text-[#8A1036] hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
                    <Link to="/blog">
                      Voir toutes les actualités
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
