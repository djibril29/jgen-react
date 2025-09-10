
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProgramLayout from '@/components/ProgramLayout'

export default function PasAPasProgram() {
  const coverImage = 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/e3ef8d34-9675-4c44-b90d-9beeb45b42ff.jpg'

  const title = 'PAS À PAS'
  const subtitle = 'Vers une justice reproductive au Sénégal'
  const description = (
    <p>
      Un programme pionnier en soutien au plaidoyer pour l'avortement sécurisé en cas de viol et d'inceste,
      porté par JGEN Sénégal et ses partenaires.
    </p>
  )

  const stats = [
    { value: '2022 – présent', label: 'Durée' },
    { value: 'Sénégal', label: "Zone d'action" },
    { value: 'Justice reproductive', label: 'Focus' },
    { value: '4+', label: 'Partenaires' },
  ]

  const objectives = [
    { title: "Dépénaliser l'avortement", description: "Plaidoyer pour l'accès à l'avortement sécurisé en cas de viol et d'inceste" },
    { title: 'Mobiliser les acteurs', description: 'Créer des réseaux multi‑acteurs pour la justice reproductive' },
    { title: 'Accompagner les survivantes', description: 'Soutenir les victimes de violences sexuelles dans leur parcours' },
    { title: "Sensibiliser l'opinion", description: 'Éduquer le public sur les DSSR' },
  ]

  const achievements = [
    '4 réseaux nationaux créés pour le plaidoyer',
    '150 participants au Forum national (sept. 2024)',
    '60 jeunes filles leaders formées à Dakar',
    '8 recommandations stratégiques issues du Forum',
  ]

  const partners = ['PP Global', 'FJS', 'Amplify Change', 'Marie Stopes International']

  const nextSteps = [
    "Poursuivre le plaidoyer parlementaire pour l'adoption des recommandations",
    'Renforcer les réseaux existants et en créer de nouveaux',
    "Développer des campagnes de sensibilisation nationales",
    'Capitaliser et partager les bonnes pratiques en justice reproductive',
    'Établir des partenariats avec les services de santé pour l’orientation',
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProgramLayout
          programId="pas-a-pas"
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
