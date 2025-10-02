'use client'

import { memo } from 'react'
import { useDeviceDetection } from '../hooks/useDeviceDetection'
import FloatingElement from './FloatingElement'

interface AdaptiveFloatingElementProps {
  children: React.ReactNode
  amplitude?: number
  duration?: number
  delay?: number
  className?: string
  [key: string]: unknown
}

const AdaptiveFloatingElement = memo(function AdaptiveFloatingElement({
  children,
  amplitude = 10,
  duration = 4,
  delay = 0,
  className = '',
  ...props
}: AdaptiveFloatingElementProps) {
  const { isMobile, isLowEnd, hasTouch } = useDeviceDetection()
  
  // Reduce floating animation on mobile and low-end devices
  const shouldReduceAnimation = isMobile || isLowEnd || hasTouch
  
  const adaptiveAmplitude = shouldReduceAnimation ? amplitude * 0.5 : amplitude
  const adaptiveDuration = shouldReduceAnimation ? duration * 1.5 : duration

  return (
    <FloatingElement
      amplitude={adaptiveAmplitude}
      duration={adaptiveDuration}
      delay={delay}
      className={className}
      {...props}
    >
      {children}
    </FloatingElement>
  )
})

export default AdaptiveFloatingElement
