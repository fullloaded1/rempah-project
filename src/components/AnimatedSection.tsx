'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in' | 'slide-bottom'
  delay?: number
  threshold?: number
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1 
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, threshold])

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0'
    
    switch (animation) {
      case 'fade-up':
        return 'animate-fade-in-up'
      case 'fade-left':
        return 'animate-fade-in-left'
      case 'fade-right':
        return 'animate-fade-in-right'
      case 'scale-in':
        return 'animate-scale-in'
      case 'slide-bottom':
        return 'animate-slide-in-bottom'
      default:
        return 'animate-fade-in-up'
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  )
}

export default AnimatedSection
