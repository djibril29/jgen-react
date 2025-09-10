
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProgramLayout from '@/components/ProgramLayout'

export default function LiggeeyalElegProgram() {
  const coverImage = 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/46d8f3a7-eda1-47a4-a71e-bff8b6641581.jpg'

  const title = 'LIGGEEYAL ËLËG'
  const subtitle = "Autonomisation économique des jeunes filles et femmes vulnérables"
  const description = (
    <p>
      Projet de 3 ans pour l'autonomisation économique des jeunes filles et femmes vulnérables dans les régions de
      Kaolack et Fatick, financé par l’Organisation Internationale de la Francophonie (OIF).
    </p>
  )

  const stats = [
    { value: 'Nov. 2024 – Oct. 2027', label: 'Durée' },
    { value: 'Kaolack, Fatick', label: 'Localisation' },
    { value: 'Entrepreneuriat féminin', label: 'Focus' },
    { value: 'OIF', label: 'Financeur' },
  ]

  const objectives = [
    { title: 'Renforcer les capacités entrepreneuriales', description: "Compétences d'entreprise et gestion" },
    { title: "Faciliter l'accès au financement", description: 'Mécanismes financiers inclusifs' },
    { title: "Développer l'alphabétisation", description: 'Compétences de base en lecture/écriture/calcul' },
    { title: 'Créer un réseau de soutien', description: 'Mentorat et solidarité entre entrepreneures' },
  ]

  const achievements = [
    'Démarrage des centres d’alphabétisation et des premières cohortes',
    'Mise en place du fonds de crédit rotatif',
    'Lancement du programme de mentorat et de mise en réseau',
    'Organisation des premières foires commerciales locales',
  ]

  const partners = ['Autorités locales', "Services de l’État", 'Institutions financières', 'OSC locales']

  const nextSteps = [
    'Sélection et accompagnement continu des bénéficiaires',
    'Déploiement des formations professionnelles par filières',
    'Octroi progressif des microcrédits et suivi',
    'Structuration de coopératives et dispositifs de durabilité',
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProgramLayout
          programId="liggeeyal-eleg"
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
