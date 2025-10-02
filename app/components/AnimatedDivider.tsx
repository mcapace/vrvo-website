'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedDividerProps {
  className?: string
}

export default function AnimatedDivider({ className = '' }: AnimatedDividerProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  })

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-center justify-center py-8 ${className}`}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Main divider line */}
      <motion.div
        className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      />
      
      {/* Glowing center dot */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
        style={{
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(6, 182, 212, 0.6)'
        }}
      >
        {/* Pulsing glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 0.4, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            filter: 'blur(8px)',
          }}
        />
      </motion.div>
      
      {/* Side accent dots */}
      <motion.div
        className="absolute left-1/4 w-1 h-1 rounded-full bg-blue-400/60"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.6, ease: "easeOut" }}
      />
      <motion.div
        className="absolute right-1/4 w-1 h-1 rounded-full bg-cyan-400/60"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.8, ease: "easeOut" }}
      />
    </motion.div>
  )
}
