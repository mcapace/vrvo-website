'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
  [key: string]: unknown
}

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(59, 130, 246, 0.3)',
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, {
    stiffness: 300,
    damping: 30,
  })
  
  const springY = useSpring(mouseY, {
    stiffness: 300,
    damping: 30,
  })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!cardRef.current || !isHovering) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    mouseX.set(x)
    mouseY.set(y)
  }, [isHovering, mouseX, mouseY])

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
  }, [])

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    document.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isHovering, handleMouseMove])

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Enhanced Primary spotlight overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(500px circle at ${springX}px ${springY}px, ${spotlightColor}, transparent 70%)`,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{
          opacity: { duration: 0.4, ease: "easeOut" }
        }}
      />
      
      {/* Enhanced Secondary glow overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(300px circle at ${springX}px ${springY}px, rgba(59, 130, 246, 0.15), transparent 60%)`,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.1, ease: "easeOut" }
        }}
      />

      {/* Tertiary outer glow for extra depth */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${springX}px ${springY}px, rgba(6, 182, 212, 0.08), transparent 80%)`,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.2, ease: "easeOut" }
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
