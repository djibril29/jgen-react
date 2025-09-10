
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProgramLayout from '@/components/ProgramLayout'

export default function ProscidesProgram() {
  const coverImage = 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/26c49af7-4aa8-4702-987c-f0eda492f31b.jpg'

  const title = 'PROSCIDES'
  const subtitle = "Protection et Solidarité pour les Droits de l'Enfant au Sénégal"
  const description = (
    <p>
      Programme de renforcement des organisations de la société civile pour la promotion et la protection des droits
      de l'enfant, financé par Save the Children Suède, déployé à Pikine et Kaolack.
    </p>
  )

  const stats = [
    { value: '2022 – 2024', label: 'Durée' },
    { value: 'Pikine, Kaolack', label: 'Localisation' },
    { value: "Droits de l'enfant", label: 'Focus' },
    { value: 'Save the Children', label: 'Partenaire' },
  ]

  const objectives = [
    { title: "Renforcer la participation des enfants", description: 'Espaces de participation active à la vie citoyenne' },
    { title: 'Protéger les droits fondamentaux', description: "Promotion et protection des droits de l'enfant" },
    { title: 'Renforcer les capacités des OSC', description: 'Développement des compétences des organisations' },
    { title: 'Créer des partenariats stratégiques', description: 'Collaboration avec autorités et services sociaux' },
  ]

  const achievements = [
    "4 cadres d'enfants créés (participation structurée)",
    '2 établissements scolaires partenaires',
    '2 000+ personnes sensibilisées',
    '97 enfants activement engagés',
  ]

  const partners = ['Save the Children Suède', 'Écoles partenaires', 'Mairies', 'Services sociaux', 'Associations locales']

  const nextSteps = [
    'Pérenniser les cadres d’enfants et former des animateurs locaux',
    "Institutionnaliser la participation dans les politiques locales",
    'Développer des fonds de soutien locaux',
    'Poursuivre le plaidoyer et la documentation des impacts',
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProgramLayout
          programId="proscides"
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
