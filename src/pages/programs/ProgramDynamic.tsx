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

  const safeCover = (() => {
    try {
      return doc.coverImage ? urlFor(doc.coverImage).width(1600).height(600).url() : ''
    } catch {
      return ''
    }
  })()

  const safeStats = Array.isArray(doc.stats) ? doc.stats : []
  const safeObjectives = Array.isArray(doc.objectives) ? doc.objectives : []
  const safeAchievementsDetailed = Array.isArray(doc.achievementsDetailed) ? doc.achievementsDetailed : []
  const safePartners = Array.isArray(doc.partners) ? doc.partners : []

  const safePartnerLogos: string[] = Array.isArray(doc.partnerLogos)
    ? doc.partnerLogos.map((img: any) => {
        try {
          return urlFor(img).width(160).height(80).url()
        } catch {
          return ''
        }
      }).filter(Boolean)
    : []

  const safeGallery: string[] = Array.isArray(doc.gallery)
    ? doc.gallery.map((img: any) => {
        try {
          return urlFor(img).width(1200).height(675).url()
        } catch {
          return ''
        }
      }).filter(Boolean)
    : []

  const hasBlocks = Array.isArray(doc.description)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProgramLayout
          programId={slug || ''}
          title={doc.title || ''}
          subtitle={typeof doc.intro === 'string' ? doc.intro : ''}
          coverImage={safeCover}
          intro={typeof doc.intro === 'string' ? <p>{doc.intro}</p> : undefined}
          description={hasBlocks ? <PortableText value={doc.description} /> : undefined}
          stats={safeStats}
          objectives={safeObjectives}
          achievementsDetailed={safeAchievementsDetailed}
          partners={safePartners}
          partnerLogos={safePartnerLogos}
          gallery={safeGallery}
        />
      </main>
      <Footer />
    </div>
  )
} 