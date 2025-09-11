import { ReactNode, useEffect, useRef, useState, type ElementType } from 'react'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  animation?: 'fade-up' | 'fade' | 'slide-left' | 'slide-right' | 'zoom'
  delayMs?: number
  className?: string
}

export default function Reveal({ children, as = 'div', animation = 'fade-up', delayMs = 0, className }: RevealProps) {
  const Tag = as as any
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delayMs)
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [delayMs])

  const base = 'reveal opacity-0 will-change-transform'
  const animClass = visible ? `reveal-show ${animation}` : animation

  return (
    <Tag ref={ref} className={`${base} ${animClass} ${className || ''}`.trim()}>
      {children}
    </Tag>
  )
} 