'use client'

import { useRef, useEffect, useState, memo, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  whileHover?: unknown
  whileTap?: unknown
  onClick?: () => void
  magneticStrength?: number
  magneticDistance?: number
  [key: string]: unknown
}

const MagneticButton = memo(function MagneticButton({
  children,
  className = '',
  whileHover,
  whileTap,
  onClick,
  magneticStrength = 0.3,
  magneticDistance = 100,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 15,
    restDelta: 0.001
  })

  const springY = useSpring(y, {
    stiffness: 150,
    damping: 15,
    restDelta: 0.001
  })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!buttonRef.current || !isHovering) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

    if (distance < magneticDistance) {
      const force = (magneticDistance - distance) / magneticDistance
      const moveX = (deltaX * force * magneticStrength) / 10
      const moveY = (deltaY * force * magneticStrength) / 10

      x.set(moveX)
      y.set(moveY)
    } else {
      x.set(0)
      y.set(0)
    }
  }, [isHovering, magneticDistance, magneticStrength, x, y])

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
    x.set(0)
    y.set(0)
  }, [x, y])

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    button.addEventListener('mouseenter', handleMouseEnter)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseenter', handleMouseEnter)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave])

  return (
    <motion.button
      ref={buttonRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        x: springX,
        y: springY,
      }}
      whileHover={{
        scale: 1.05,
        ...(whileHover as Record<string, unknown>)
      }}
      whileTap={whileTap as any}
      onClick={onClick}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25
      }}
      {...props}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'linear-gradient(45deg, #3b82f6, #06b6d4, #14b8a6)',
          backgroundSize: '300% 300%',
          animation: isHovering ? 'gradientShift 2s ease infinite' : 'none'
        }}
      />
      
      {/* Cursor shadow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
          opacity: 0,
          x: springX,
          y: springY
        }}
        animate={{
          opacity: isHovering ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />
      
      <span className="relative z-10">
        {children}
      </span>
      
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.button>
  )
})

export default MagneticButton
