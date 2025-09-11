import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProgramLayout from '@/components/ProgramLayout'
import { sanityClient } from '@/lib/sanity'
import { programBySlug } from '@/lib/queries'
import { urlFor } from '@/lib/image'
import { PortableText } from '@portabletext/react'

export default function ProgramDynamic() {
  const { slug } = useParams<{ slug: string }>()

  const [doc, setDoc] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) {
      setLoading(false)
      return
    }
    setLoading(true)
    sanityClient
      .fetch(programBySlug, { slug })
      .then((res) => setDoc(res))
      .catch(() => setDoc(null))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow"> <div className="container mx-auto px-4 py-20">Chargement…</div> </main>
        <Footer />
      </div>
    )
  }

  if (!doc) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow"> <div className="container mx-auto px-4 py-20">Programme introuvable.</div> </main>
        <Footer />
      </div>
    )
  }

  const coverImage = doc.coverImage ? urlFor(doc.coverImage).width(1600).height(600).url() : ''

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProgramLayout
          programId={slug || ''}
          title={doc.title}
          subtitle={doc.intro || ''}
          coverImage={coverImage}
          intro={doc.intro ? <p>{doc.intro}</p> : undefined}
          description={doc.description ? <PortableText value={doc.description} /> : undefined}
          stats={doc.stats}
          objectives={doc.objectives}
          achievementsDetailed={doc.achievementsDetailed}
          partners={doc.partners}
          partnerLogos={(doc.partnerLogos || []).map((i: any) => urlFor(i).width(160).height(80).url())}
          gallery={(doc.gallery || []).map((i: any) => urlFor(i).width(1200).height(675).url())}
        />
      </main>
      <Footer />
    </div>
  )
} 