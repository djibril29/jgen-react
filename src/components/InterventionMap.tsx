import { useMemo, useRef, useState } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
// @ts-ignore - bundler will handle json import
import senegalRegions from '@/assets/data/senegal-regions.geojson'

// Projects by region code
const regionProjects: Record<string, { name: string; projects: string[] }> = {
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
  const [hoverCode, setHoverCode] = useState<string>('')
  const [activeCode, setActiveCode] = useState<string>('')

  const center = useMemo(() => [14.497, -14.452] as [number, number], []) // Sénégal approx
  const style = (feature?: any) => {
    const code = feature?.properties?.code as string
    const isActive = activeCode && code === activeCode
    const isHover = hoverCode && code === hoverCode
    return {
      color: '#1B2A31',
      weight: isActive ? 3 : 1.5,
      fillColor: isActive || isHover ? '#9B153E' : '#F3D3B7',
      fillOpacity: isActive || isHover ? 0.8 : 0.7,
    }
  }

  const onEachFeature = (feature: any, layer: any) => {
    layer.on({
      mouseover: () => setHoverCode(feature.properties.code),
      mouseout: () => setHoverCode(''),
      click: () => setActiveCode(feature.properties.code),
    })
  }

  const active = activeCode && regionProjects[activeCode]
  const hover = !active && hoverCode && regionProjects[hoverCode]
  const panel = active || hover

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-2">
        <div className="w-full overflow-hidden rounded-xl shadow">
          <MapContainer center={center} zoom={6} scrollWheelZoom={false} style={{ height: 420 }}>
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON data={senegalRegions as any} onEachFeature={onEachFeature} style={style as any} />
          </MapContainer>
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold text-[#1B2A31] mb-2">
            {panel ? panel.name : "Survolez ou cliquez une région"}
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            {panel
              ? 'Projets d’intervention actifs dans cette région:'
              : 'Survolez une zone de la carte, ou cliquez pour figer la sélection.'}
          </p>
          <ul className="space-y-2">
            {(panel ? panel.projects : []).map((p) => (
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