'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionTransitionProps {
  children: ReactNode
  sectionId: string
  className?: string
}

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.95,
    filter: 'blur(10px)'
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 1.05,
    filter: 'blur(5px)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const childVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export default function SectionTransition({ 
  children, 
  sectionId, 
  className = '' 
}: SectionTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={sectionId}
        id={sectionId}
        variants={sectionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={className}
      >
        <motion.div variants={childVariants}>
          {children}
        </motion.div>
      </motion.section>
    </AnimatePresence>
  )
}
