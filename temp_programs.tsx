        {/* Programmes phares - Layout inspiré de l'image */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8A1036] mb-4">
                  NOS PROGRAMMES PHARES
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Découvrez nos initiatives principales pour l'autonomisation des femmes et la promotion de l'égalité des genres.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {/* Programme 1 - Jeunes Volontaires */}
                <div className="text-center group">
                  <div className="relative mb-6">
                    {/* Image circulaire avec overlay */}
                    <div className="relative w-48 h-48 mx-auto">
                      <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
                        <img 
                          src={jeunesVolontairesImg} 
                          alt="Jeunes Volontaires" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {/* Overlay décoratif */}
                      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-black rounded-full opacity-60"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-[#8A1036] mb-4 uppercase leading-tight">
                    JEUNE VOLONTAIRE POUR LA SANTÉ SEXUELLE ET REPRODUCTIVE
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet purus gravida quis blandit turpis.
                  </p>
                  
                  <Button asChild className="bg-[#8A1036] hover:bg-[#8A1036]/90 text-white px-8 py-3 rounded-none font-semibold">
                    <Link to="/programme/jeunes-volontaires">
                      En savoir plus
                    </Link>
                  </Button>
                </div>

                {/* Programme 2 - Liggeeyal Eleg */}
                <div className="text-center group">
                  <div className="relative mb-6">
                    {/* Image circulaire avec overlay */}
                    <div className="relative w-48 h-48 mx-auto">
                      <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
                        <img 
                          src={liggeeyalImg} 
                          alt="Liggeeyal Eleg" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {/* Overlay décoratif */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-[#8A1036] rounded-full opacity-60"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-[#8A1036] mb-4 uppercase leading-tight">
                    LIGGEEYAL ELEG
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet purus gravida quis blandit turpis.
                  </p>
                  
                  <Button asChild className="bg-[#8A1036] hover:bg-[#8A1036]/90 text-white px-8 py-3 rounded-none font-semibold">
                    <Link to="/programme/liggeeyal-eleg">
                      En savoir plus
                    </Link>
                  </Button>
                </div>

                {/* Programme 3 - UEF */}
                <div className="text-center group">
                  <div className="relative mb-6">
                    {/* Image circulaire avec overlay */}
                    <div className="relative w-48 h-48 mx-auto">
                      <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
                        <img 
                          src={uefImg} 
                          alt="Université Féministe d'Été" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {/* Overlay décoratif */}
                      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-[#E8C4A0] rounded-full opacity-60"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-[#8A1036] mb-4 uppercase leading-tight">
                    UNIVERSITÉ FÉMINISTE D'ÉTÉ D'AFRIQUE DE L'OUEST ET DU CENTRE
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet purus gravida quis blandit turpis.
                  </p>
                  
                  <Button asChild className="bg-[#8A1036] hover:bg-[#8A1036]/90 text-white px-8 py-3 rounded-none font-semibold">
                    <Link to="/programme/universite-ete-feministe">
                      En savoir plus
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
