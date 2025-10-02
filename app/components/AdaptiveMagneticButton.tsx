'use client'

import { memo } from 'react'
import { useDeviceDetection } from '../hooks/useDeviceDetection'
import MagneticButton from './MagneticButton'

interface AdaptiveMagneticButtonProps {
  children: React.ReactNode
  className?: string
  whileHover?: unknown
  whileTap?: unknown
  onClick?: () => void
  magneticStrength?: number
  magneticDistance?: number
  [key: string]: unknown
}

const AdaptiveMagneticButton = memo(function AdaptiveMagneticButton({
  children,
  className = '',
  whileHover,
  whileTap,
  onClick,
  magneticStrength = 0.3,
  magneticDistance = 100,
  ...props
}: AdaptiveMagneticButtonProps) {
  const { hasTouch, isMobile, isTablet } = useDeviceDetection()
  
  // Reduce magnetic effect on mobile devices
  const adaptiveMagneticStrength = (hasTouch || isMobile || isTablet) 
    ? magneticStrength * 0.3  // Reduce to 30% on mobile
    : magneticStrength

  const adaptiveMagneticDistance = (hasTouch || isMobile || isTablet)
    ? magneticDistance * 0.7  // Reduce distance on mobile
    : magneticDistance

  // Enhanced touch feedback for mobile
  const enhancedWhileTap = (hasTouch || isMobile || isTablet) 
    ? { scale: 0.95, ...whileTap }
    : whileTap

  return (
    <MagneticButton
      className={className}
      whileHover={whileHover}
      whileTap={enhancedWhileTap}
      onClick={onClick}
      magneticStrength={adaptiveMagneticStrength}
      magneticDistance={adaptiveMagneticDistance}
      {...props}
    >
      {children}
    </MagneticButton>
  )
})

export default AdaptiveMagneticButton
