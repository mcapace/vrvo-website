'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

export default function PageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="page-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        }}
        exit={{ 
          opacity: 0, 
          y: -20,
          transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
