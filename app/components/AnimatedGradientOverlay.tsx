'use client'

import { motion } from 'framer-motion'

export default function AnimatedGradientOverlay() {
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        background: 'radial-gradient(ellipse 1200px 800px at 20% 30%, rgba(59, 130, 246, 0.08) 0%, rgba(6, 182, 212, 0.06) 25%, rgba(168, 85, 247, 0.05) 50%, rgba(34, 197, 94, 0.04) 75%, transparent 100%)',
        opacity: 0.7,
      }}
      animate={{
        x: ['0%', '100%', '0%'],
        y: ['0%', '-50%', '0%'],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Secondary overlay for depth */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 800px 600px at 80% 70%, rgba(6, 182, 212, 0.06) 0%, rgba(168, 85, 247, 0.05) 30%, rgba(59, 130, 246, 0.04) 60%, transparent 100%)',
          opacity: 0.5,
        }}
        animate={{
          x: ['100%', '0%', '100%'],
          y: ['50%', '0%', '50%'],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
    </motion.div>
  )
}
