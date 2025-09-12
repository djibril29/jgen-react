import { useState, useEffect } from 'react'

interface TypewriterSignatureProps {
  text: string
  speed?: number
  className?: string
  onComplete?: () => void
}

export default function TypewriterSignature({ 
  text, 
  speed = 100, 
  className = '',
  onComplete 
}: TypewriterSignatureProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (!isComplete) {
      setIsComplete(true)
      onComplete?.()
    }
  }, [currentIndex, text, speed, isComplete, onComplete])

  return (
    <div className={`relative ${className}`}>
      <span 
        className="font-handwriting text-[#8A1036] font-bold"
        style={{
          fontFamily: '"Dancing Script", "Brush Script MT", cursive',
          fontSize: '1.5rem',
          letterSpacing: '0.1em'
        }}
      >
        {displayedText}
        {!isComplete && (
          <span className="animate-pulse text-[#8A1036]">|</span>
        )}
      </span>
    </div>
  )
}
