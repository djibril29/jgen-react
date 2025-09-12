
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProgramLayout from '@/components/ProgramLayout'

export default function UEFProgram() {
  const data = {
    title: "Université d'Été Féministe (UEF)",
    subtitle: "Un espace stratégique de mobilisation, de formation et de réflexion féministe",
    coverImage: 'https://pub-cdn.sider.ai/u/U08XHO6GEO7/web-coder/68bd045dd4f5bb9dcd3ca6f0/resource/7c790be6-1d62-40d1-bd21-675869ca7f39.jpg',
    intro: (
      <p>
        L'Université d'Été Féministe d'Afrique de l'Ouest et du Centre est un rendez-vous stratégique qui s'impose
        comme un véritable catalyseur de mobilisation, de formation et de réflexion féministe pour la région.
      </p>
    ),
    stats: [
      { value: '3 jours', label: "Durée de l'édition" },
      { value: 'Dakar', label: 'Lieu' },
      { value: '275', label: 'Participantes en 2024' },
      { value: '2023', label: 'Création' },
    ],
    objectives: [
      { title: "Renforcer l'infrastructure du mouvement", description: "Créer et maintenir un espace durable pour le mouvement féministe régional" },
      { title: 'Capitaliser les savoirs féministes', description: 'Documenter et partager les connaissances et expériences des militantes' },
      { title: 'Former les leaders de demain', description: 'Renforcer les capacités des jeunes militantes féministes' },
      { title: 'Créer des réseaux internationaux', description: 'Faciliter les échanges et collaborations entre féministes africaines' },
    ],
    achievements: [
      '275 participantes engagées en 2024',
      '18 panels et ateliers pratiques sur des thématiques féministes',
      "10 militantes féministes noires honorées",
      "10 outils pratiques produits sur les DSSR et l'avortement sécurisé",
    ],
    partners: ['FJS', 'Fondation HEWLETT', 'CENTRE ODAS', 'AWDF', 'PPG GLOBAL'],
    nextSteps: [
      "Mise en opération du Hub d'excellence numérique",
      'Développer des formations en ligne pour élargir l’impact',
      "Créer des antennes nationales dans d'autres pays d'Afrique de l'Ouest",
      'Établir des partenariats académiques pour la recherche féministe',
    ],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProgramLayout
          programId="universite-ete-feministe"
          title={data.title}
          subtitle={data.subtitle}
          coverImage={data.coverImage}
          intro={data.intro}
          stats={data.stats}
          objectives={data.objectives}
          achievements={data.achievements}
          partners={data.partners}
          nextSteps={data.nextSteps}
        />
      </main>
      <Footer />
    </div>
  )
}
