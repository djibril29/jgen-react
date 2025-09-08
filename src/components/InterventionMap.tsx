import { useState } from 'react'

// Minimal interactive map with a few sample regions (not exhaustive)
// Regions: Dakar, Kaolack, Fatick (as examples). Paths are simplified.

type RegionKey = 'dakar' | 'kaolack' | 'fatick'

const regionProjects: Record<RegionKey, { name: string; projects: string[] }> = {
  dakar: {
    name: 'Dakar',
    projects: ['PAS À PAS', 'Jeunes Volontaires (SSR)', "Université d'Été Féministe"],
  },
  kaolack: {
    name: 'Kaolack',
    projects: ['LIGGEEYAL ËLËG', 'PROSCIDES'],
  },
  fatick: {
    name: 'Fatick',
    projects: ['ELLES AUSSI', 'LIGGEEYAL ËLËG'],
  },
}

export default function InterventionMap() {
  const [hoverRegion, setHoverRegion] = useState<RegionKey | null>(null)

  const baseFill = '#F3D3B7' // brand sand
  const hoverFill = '#9B153E' // brand primary
  const stroke = '#1B2A31' // brand dark

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-2">
        <div className="w-full bg-white rounded-xl shadow p-4">
          <svg
            viewBox="0 0 600 400"
            role="img"
            aria-label="Carte du Sénégal"
            className="w-full h-auto"
          >
            {/* Simplified placeholders for regions (not geographic accurate) */}
            <g>
              {/* Dakar */}
              <path
                d="M60,140 L120,140 L120,200 L60,200 Z"
                fill={hoverRegion === 'dakar' ? hoverFill : baseFill}
                stroke={stroke}
                strokeWidth="2"
                onMouseEnter={() => setHoverRegion('dakar')}
                onMouseLeave={() => setHoverRegion(null)}
              />
              {/* Kaolack */}
              <path
                d="M220,220 L340,220 L340,300 L220,300 Z"
                fill={hoverRegion === 'kaolack' ? hoverFill : baseFill}
                stroke={stroke}
                strokeWidth="2"
                onMouseEnter={() => setHoverRegion('kaolack')}
                onMouseLeave={() => setHoverRegion(null)}
              />
              {/* Fatick */}
              <path
                d="M180,180 L260,180 L260,240 L180,240 Z"
                fill={hoverRegion === 'fatick' ? hoverFill : baseFill}
                stroke={stroke}
                strokeWidth="2"
                onMouseEnter={() => setHoverRegion('fatick')}
                onMouseLeave={() => setHoverRegion(null)}
              />
            </g>
          </svg>
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold text-[#1B2A31] mb-2">
            {hoverRegion ? regionProjects[hoverRegion].name : 'Survolez une région'}
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            {hoverRegion
              ? 'Projets d’intervention actifs dans cette région:'
              : 'Survolez une zone de la carte pour voir les projets associés.'}
          </p>
          <ul className="space-y-2">
            {(hoverRegion ? regionProjects[hoverRegion].projects : []).map((p) => (
              <li key={p} className="flex items-center text-[#1B2A31]">
                <span className="inline-block w-2 h-2 rounded-full bg-[#9B153E] mr-2" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
} 