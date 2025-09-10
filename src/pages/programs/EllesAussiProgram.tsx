
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProgramLayout from '@/components/ProgramLayout'

export default function EllesAussiProgram() {
  const coverImage = 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/634dff46-38cb-42c1-80b8-84b059055e87.jpg'

  const title = 'ELLES AUSSI'
  const subtitle = "Projet d'intervention communautaire contre les violences sexuelles"
  const description = (
    <p>
      Projet de lutte contre les violences sexuelles à l'égard des filles dans la région de Fatick,
      combinant accompagnement psychologique et mobilisation communautaire.
    </p>
  )

  const stats = [
    { value: '2021 – 2024', label: 'Phase I' },
    { value: 'Fatick / Diouroup', label: 'Localisation' },
    { value: '60', label: 'Jeunes filles bénéficiaires' },
    { value: '2+', label: 'Partenaires' },
  ]

  const objectives = [
    { title: 'Accompagnement psychologique', description: 'Guérison et réparation pour les survivantes' },
    { title: 'Protection communautaire', description: 'Mécanismes de prévention et d’alerte' },
    { title: 'Éducation et sensibilisation', description: 'Formation aux droits et prévention des violences' },
    { title: 'Mobilisation communautaire', description: 'Implication des acteurs locaux contre les VBG' },
  ]

  const achievements = [
    '58 filles accompagnées',
    '3 comités de veille créés',
    '45 actions de sensibilisation',
    '1000+ personnes touchées',
  ]

  const partners = ['AWDF', 'Initiative KASA', 'Autorités locales', 'Services de santé']

  const nextSteps = [
    "Étendre l'intervention à d’autres communes",
    'Renforcer les capacités des comités existants',
    'Développer des AGR pour les survivantes',
    'Créer un réseau régional de lutte contre les VBG',
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProgramLayout
          programId="elles-aussi"
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
