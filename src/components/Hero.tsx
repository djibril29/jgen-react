
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

/**
 * Composant Hero - Section principale d'introduction des pages
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.title - Titre principal du hero
 * @param {string} props.subtitle - Sous-titre du hero
 * @param {string} props.description - Description détaillée
 * @param {string} props.primaryButtonText - Texte du bouton principal
 * @param {string} props.primaryButtonLink - Lien du bouton principal
 * @param {string} props.secondaryButtonText - Texte du bouton secondaire
 * @param {string} props.secondaryButtonLink - Lien du bouton secondaire
 * @param {string} props.backgroundImage - URL de l'image de fond
 */
interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  backgroundImage?: string
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage
}: HeroProps) {
  return (
    <section className={`relative py-20 md:py-28 ${backgroundImage ? 'bg-cover bg-center' : 'bg-gradient-to-r from-pink-50 to-purple-50'}`}>
      {/* Overlay pour l'image de fond */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {subtitle && (
            <p className={`text-lg font-medium mb-4 ${backgroundImage ? 'text-pink-300' : 'text-[#E81F74]'}`}>
              {subtitle}
            </p>
          )}
          
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${backgroundImage ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h1>
          
          {description && (
            <p className={`text-lg mb-8 ${backgroundImage ? 'text-gray-200' : 'text-gray-600'}`}>
              {description}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            {primaryButtonText && primaryButtonLink && (
              <Button asChild className="bg-[#E81F74] hover:bg-[#E81F74]/90 text-white">
                <a href={primaryButtonLink} className="flex items-center">
                  {primaryButtonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
            
            {secondaryButtonText && secondaryButtonLink && (
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
                <a href={secondaryButtonLink}>
                  {secondaryButtonText}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
