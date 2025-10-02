'use client'

import { useEffect, useState, useRef, memo, useCallback } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = memo(function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  // Optimized event handlers with useCallback
  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    const isInteractive = target.matches('button, a, [role="button"], input, textarea, select, [tabindex]') ||
                         target.closest('button, a, [role="button"], input, textarea, select, [tabindex]')
    setIsHovering(isInteractive)
  }, [])

  const checkIsDesktop = useCallback(() => {
    setIsVisible(window.matchMedia('(hover: hover)').matches)
  }, [])

  useEffect(() => {
    // Add event listeners with passive flag for better performance
    window.addEventListener('mousemove', updateMousePosition, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    window.addEventListener('resize', checkIsDesktop, { passive: true })
    
    // Initial check
    checkIsDesktop()

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('resize', checkIsDesktop)
    }
  }, [updateMousePosition, handleMouseOver, checkIsDesktop])

  if (!isVisible) return null

  return (
    <>
      {/* Premium gradient trail */}
      <motion.div
        className="fixed pointer-events-none z-[9997] mix-blend-screen"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          x: -200,
          y: -200,
          scale: isHovering ? [1, 1.2, 1] : [1, 1.1, 1],
          opacity: isHovering ? [0.3, 0.5, 0.3] : [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(6, 182, 212, 0.3) 30%, rgba(14, 184, 166, 0.2) 60%, transparent 100%)',
            filter: 'blur(40px)',
          }}
        />
      </motion.div>

      {/* Secondary trail */}
      <motion.div
        className="fixed pointer-events-none z-[9998] mix-blend-screen"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          x: -150,
          y: -150,
          scale: isHovering ? [1, 1.1, 1] : [1, 1.05, 1],
          opacity: isHovering ? [0.4, 0.6, 0.4] : [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div
          className="w-72 h-72 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, rgba(14, 184, 166, 0.4) 40%, transparent 80%)',
            filter: 'blur(30px)',
          }}
        />
      </motion.div>

      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          x: -8,
          y: -8,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <div
          className="w-4 h-4 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.9) 0%, rgba(6, 182, 212, 0.7) 50%, rgba(14, 184, 166, 0.5) 100%)',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(6, 182, 212, 0.6), 0 0 60px rgba(14, 184, 166, 0.4)',
          }}
        />
      </motion.div>

      {/* Expanding trail circle */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          x: -20,
          y: -20,
          scale: isHovering ? [1, 3, 1] : [1, 1.5, 1],
          opacity: isHovering ? [0.8, 0.3, 0] : [0.6, 0.2, 0],
        }}
        transition={{
          duration: isHovering ? 1 : 1.5,
          repeat: Infinity,
          ease: "easeOut",
        }}
      >
        <div
          className="w-10 h-10 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(34, 197, 94, 0.2) 50%, rgba(6, 182, 212, 0.1) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
          }}
        />
      </motion.div>

      {/* Secondary trail circle */}
      <motion.div
        className="fixed pointer-events-none z-[9997]"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          x: -15,
          y: -15,
          scale: isHovering ? [1, 2.5, 1] : [1, 1.3, 1],
          opacity: isHovering ? [0.6, 0.2, 0] : [0.4, 0.1, 0],
        }}
        transition={{
          duration: isHovering ? 0.8 : 1.2,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.3,
        }}
      >
        <div
          className="w-8 h-8 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.25) 0%, rgba(6, 182, 212, 0.15) 50%, rgba(59, 130, 246, 0.1) 100%)',
            border: '1px solid rgba(34, 197, 94, 0.15)',
          }}
        />
      </motion.div>

      {/* Outer glow ring */}
      <motion.div
        className="fixed pointer-events-none z-[9996]"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          x: -25,
          y: -25,
          scale: isHovering ? [1, 2.5, 1] : [1, 1.3, 1],
          opacity: [0.2, 0.05, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.6,
        }}
      >
        <div
          className="w-12 h-12 rounded-full"
          style={{
            background: 'transparent',
            border: '2px solid rgba(6, 182, 212, 0.2)',
            boxShadow: 'inset 0 0 20px rgba(59, 130, 246, 0.1)',
          }}
        />
      </motion.div>
    </>
  )
})

export default CustomCursor
