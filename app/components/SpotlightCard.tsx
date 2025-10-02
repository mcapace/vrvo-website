'use client'

import { useRef, useEffect, useState } from 'react'
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
  spotlightColor = 'rgba(59, 130, 246, 0.1)',
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

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current || !isHovering) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

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
      {/* Primary spotlight overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${springX}px ${springY}px, ${spotlightColor}, transparent 50%)`,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{
          opacity: { duration: 0.3 }
        }}
      />
      
      {/* Secondary glow overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(200px circle at ${springX}px ${springY}px, rgba(255, 255, 255, 0.1), transparent 60%)`,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{
          opacity: { duration: 0.4, delay: 0.1 }
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
