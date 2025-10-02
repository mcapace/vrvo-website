'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedIconProps {
  children: ReactNode
  animationType?: 'rotate' | 'bounce' | 'pulse' | 'scale' | 'float'
  className?: string
  floatDuration?: number
  floatDelay?: number
  [key: string]: unknown
}

export default function AnimatedIcon({
  children,
  animationType = 'rotate',
  className = '',
  floatDuration = 4,
  floatDelay = 0,
  ...props
}: AnimatedIconProps) {
  const getAnimationProps = () => {
    switch (animationType) {
      case 'rotate':
        return {
          whileHover: { 
            rotate: 360,
            scale: 1.1,
            color: "rgb(34, 197, 94)"
          },
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 20,
            color: { duration: 0.2 }
          }
        }
      case 'bounce':
        return {
          whileHover: { 
            y: [-2, -8, -2],
            scale: 1.1,
            color: "rgb(59, 130, 246)"
          },
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
            color: { duration: 0.2 }
          }
        }
      case 'pulse':
        return {
          whileHover: { 
            scale: [1, 1.2, 1],
            color: "rgb(6, 182, 212)"
          },
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            color: { duration: 0.2 }
          }
        }
      case 'scale':
        return {
          whileHover: { 
            scale: 1.2,
            rotate: 5,
            color: "rgb(168, 85, 247)"
          },
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
            color: { duration: 0.2 }
          }
        }
      case 'float':
        return {
          animate: {
            y: [-5, 5, -5],
            rotate: [-2, 2, -2],
            scale: [1, 1.05, 1]
          },
          transition: {
            duration: floatDuration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: floatDelay
          },
          whileHover: {
            scale: 1.2,
            color: "rgb(59, 130, 246)",
            y: 0,
            rotate: 0
          }
        }
      default:
        return {
          whileHover: { 
            scale: 1.1,
            color: "rgb(34, 197, 94)"
          },
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 25,
            color: { duration: 0.2 }
          }
        }
    }
  }

  return (
    <motion.div
      className={`inline-block ${className}`}
      {...getAnimationProps()}
      {...props}
    >
      {children}
    </motion.div>
  )
}
