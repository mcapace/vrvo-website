'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxTextProps {
  children: React.ReactNode
  className?: string
  speed?: number
  scale?: boolean
}

export default function ParallaxText({ 
  children, 
  className = '',
  speed = 0.5,
  scale = true
}: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100 * (1 - speed), -100 * (1 - speed)])
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], scale ? [0.8, 1, 0.8] : [1, 1, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        scale: scaleValue,
        opacity
      }}
    >
      {children}
    </motion.div>
  )
}
