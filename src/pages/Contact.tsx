
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { MapPin, Phone, Mail, Clock, Send, Users, Heart, Star, BookOpen } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Page Contact - Informations de contact et formulaire
 * Permet aux utilisateurs de contacter J-GEN pour diverses demandes
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    contactType: 'general'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { t } = useTranslation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Réinitialiser le formulaire après 3 secondes
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          contactType: 'general'
        })
      }, 3000)
    }, 1500)
  }

  // Coordonnées de contact
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Adresse',
      content: '6781 Sicap Liberté 6, 2é étage Gauche, Dakar, Sénégal'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Téléphone',
      content: '(221) 33 805 91 39'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'jgensenegal@gmail.com'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Horaires',
      content: 'Lundi - Vendredi: 9h00 - 17h00'
    }
  ]

  // Options de contact
  const contactOptions = [
    {
      id: 'general',
      title: t('contact.options.general.title'),
      description: t('contact.options.general.desc'),
      icon: <Mail className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'volunteer',
      title: t('contact.options.volunteer.title'),
      description: t('contact.options.volunteer.desc'),
      icon: <Users className="h-8 w-8" />,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'information',
      title: t('contact.options.information.title'),
      description: t('contact.options.information.desc'),
      icon: <BookOpen className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'partnership',
      title: t('contact.options.partnership.title'),
      description: t('contact.options.partnership.desc'),
      icon: <Star className="h-8 w-8" />,
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          title={t('contact.title')}
          description={t('contact.description')}
        />

        {/* Options de contact */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('contact.howHelp')}</h2>
              <p className="text-lg text-gray-600">
                {t('contact.chooseCategory')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactOptions.map((option) => (
                <Card 
                  key={option.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    formData.contactType === option.id ? 'ring-2 ring-pink-500' : ''
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, contactType: option.id }))}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center mx-auto mb-4 text-white`}>
                      {option.icon}
                    </div>
                    <CardTitle className="text-lg">{option.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {option.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Formulaire de contact et informations */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulaire de contact */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('contact.formTitle')}</h2>
                
                {isSubmitted ? (
                  <Card className="border-green-200 bg-green-50">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Send className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-green-800 mb-2">{t('contact.sentTitle')}</h3>
                        <p className="text-green-700">
                          {t('contact.sentText')}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('contact.fullName')}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          placeholder={t('contact.placeholderName') as string}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('contact.email')}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          placeholder={t('contact.placeholderEmail') as string}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.subject')}
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder={t('contact.placeholderSubject') as string}
                      />
                    </div>

                    <div>
                      <label htmlFor="contactType" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.requestType')}
                      </label>
                      <select
                        id="contactType"
                        name="contactType"
                        value={formData.contactType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      >
                        {contactOptions.map(option => (
                          <option key={option.id} value={option.id}>
                            {option.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder={t('contact.placeholderMessage') as string}
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90"
                    >
                      {isSubmitting ? t('contact.sending') : t('contact.sendMessage')}
                    </Button>
                  </form>
                )}
              </div>

              {/* Informations de contact */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('contact.contactInfo')}</h2>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-gray-600">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Carte */}
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>{t('contact.mapTitle')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">{t('contact.mapLabel')}</p>
                        <p className="text-sm text-gray-400">6781 Sicap Liberté 6, Dakar</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button asChild variant="outline" className="w-full">
                        <a 
                          href="https://maps.google.com/?q=6781+Sicap+Liberté+6,+Dakar,+Sénégal" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {t('contact.viewOnMaps')}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Réseaux sociaux */}
                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900 mb-4">{t('contact.followUs')}</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                      <span className="font-bold">f</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                      <span className="font-bold">t</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                      <span className="font-bold">in</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('contact.faqTitle')}</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Comment devenir bénévole ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Pour devenir bénévole, remplissez notre formulaire de contact en sélectionnant l'option "Bénévolat". 
                      Nous vous contacterons rapidement pour discuter de vos motivations et des opportunités disponibles.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Comment devenir bénévole ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Pour devenir bénévole, remplissez notre formulaire de contact en sélectionnant l'option "Bénévolat". 
                      Nous vous contacterons rapidement pour discuter de vos motivations et des opportunités disponibles.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Comment participer à nos programmes ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Nous proposons différentes formes de participation à nos programmes : bénévolat, 
                      participation à des événements, diffusion d'informations, ou contribution bénévole 
                      selon vos compétences. Contactez-nous pour en savoir plus sur les opportunités disponibles.
                    </p>
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
