'use client'

import { motion } from 'framer-motion'

interface ShimmerTextProps {
  children: React.ReactNode
  className?: string
  shimmerColors?: string[]
  [key: string]: any
}

export default function ShimmerText({
  children,
  className = '',
  shimmerColors = ['#3b82f6', '#22c55e', '#06b6d4'],
  ...props
}: ShimmerTextProps) {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25
      }}
      {...props}
    >
      {/* Shimmer gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{
          background: `linear-gradient(90deg, transparent, ${shimmerColors[0]}20, ${shimmerColors[1]}20, ${shimmerColors[2]}20, transparent)`,
          backgroundSize: '200% 100%',
          backgroundPosition: '-200% 0',
        }}
        whileHover={{
          backgroundPosition: '200% 0',
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
      />
      
      {/* Text content */}
      <span className="relative z-10">
        {children}
      </span>
    </motion.div>
  )
}
