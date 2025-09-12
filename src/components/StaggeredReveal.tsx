import { useEffect, useState } from 'react'
import Reveal from './Reveal'

interface StaggeredRevealProps {
  children: React.ReactNode
  delayMs?: number
  className?: string
}

export default function StaggeredReveal({ 
  children, 
  delayMs = 200, 
  className = '' 
}: StaggeredRevealProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delayMs)

    return () => clearTimeout(timer)
  }, [delayMs])

  return (
    <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}>
      {children}
    </div>
  )
}
