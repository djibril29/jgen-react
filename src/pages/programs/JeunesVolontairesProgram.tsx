
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProgramLayout from '@/components/ProgramLayout'

export default function JeunesVolontairesProgram() {
  const coverImage = 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/3a14a18f-2a99-41d5-a3cd-b11a3b288231.jpg'

  const title = 'Jeunes Volontaires pour la Santé Sexuelle et Reproductive'
  const subtitle = 'Autonomisation des jeunes pour une meilleure santé reproductive'
  const description = (
    <p>
      Programme de renforcement des capacités des adolescentes et jeunes sur la santé sexuelle et reproductive,
      financé par Voix Essentielles, dans la commune de Yoff (Dakar).
    </p>
  )

  const stats = [
    { value: '2023 – présent', label: 'Durée' },
    { value: 'Yoff (Dakar)', label: 'Localisation' },
    { value: 'SSR des jeunes', label: 'Focus' },
    { value: 'Voix Essentielles', label: 'Partenaire' },
  ]

  const objectives = [
    { title: "Améliorer l'accès à l'information", description: 'Informations précises sur la SSR' },
    { title: 'Renforcer les capacités', description: "Hygiène menstruelle et prévention des VBG" },
    { title: 'Mobiliser la communauté', description: 'Implication des autorités et acteurs locaux' },
    { title: 'Développer le plaidoyer', description: 'Influence des politiques locales en faveur de la SSR' },
  ]

  const achievements = [
    '84 jeunes filles formées et autonomisées',
    '3 cadres de discussion permanents sur l’hygiène menstruelle',
    '25 autorités locales engagées via des visites de plaidoyer',
    'Budget municipal dédié à la santé reproductive',
  ]

  const partners = ['Voix Essentielles', 'UDEFY', 'Badiene Gokh', 'Services de santé']

  const nextSteps = [
    "Signature du protocole d'accord avec la mairie de Yoff",
    'Mise en place des espaces jeunes dans les structures de santé',
    'Formation continue et extension du réseau de volontaires',
    'Développement d’AGR pour les jeunes filles',
    'Extension à d’autres communes de Dakar',
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProgramLayout
          programId="jeunes-volontaires"
          title={title}
          subtitle={subtitle}
          coverImage={coverImage}
          description={description}
          stats={stats}
          objectives={objectives}
          achievements={achievements}
          partners={partners}
          nextSteps={nextSteps}
        />
      </main>
      <Footer />
    </div>
  )
}
