'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FloatingElementProps {
  children: ReactNode
  amplitude?: number // How far up and down to float
  duration?: number // Duration of one complete cycle
  delay?: number // Initial delay before starting
  className?: string
  [key: string]: unknown
}

export default function FloatingElement({
  children,
  amplitude = 10,
  duration = 4,
  delay = 0,
  className = '',
  ...props
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -amplitude, 0, amplitude, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
        repeatType: "loop"
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
