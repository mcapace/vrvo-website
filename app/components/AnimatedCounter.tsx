'use client'

import { useEffect, useState, memo } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
}

const AnimatedCounter = memo(function AnimatedCounter({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = ''
}: AnimatedCounterProps) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 25,
    stiffness: 80,
    restDelta: 0.01,
  })
  
  const display = useTransform(springValue, (current) => {
    return current.toFixed(decimals)
  })

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
      motionValue.set(end)
    }
  }, [inView, hasAnimated, end, motionValue])

  // Add scale bounce effect when animation completes
  const [isComplete, setIsComplete] = useState(false)
  
  useEffect(() => {
    if (hasAnimated) {
      const timer = setTimeout(() => {
        setIsComplete(true)
      }, duration * 1000 + 500) // Wait for animation to complete
      
      return () => clearTimeout(timer)
    }
  }, [hasAnimated, duration])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.2
      }}
    >
        <motion.div
          style={{ display: 'inline-block' }}
          animate={inView ? { 
            textShadow: [
              '0 0 0px rgba(59, 130, 246, 0)',
              '0 0 8px rgba(59, 130, 246, 0.4)',
              '0 0 15px rgba(59, 130, 246, 0.3)',
              '0 0 8px rgba(59, 130, 246, 0.2)',
              '0 0 0px rgba(59, 130, 246, 0)'
            ],
            scale: isComplete ? [1, 1.1, 0.95, 1.05, 1] : [1, 1.05, 1.02, 1]
          } : {}}
          transition={{
            duration: isComplete ? 0.6 : 3,
            ease: isComplete ? "easeOut" : [0.25, 0.46, 0.45, 0.94],
            delay: isComplete ? 0 : 0.8
          }}
        >
        {prefix}
        <motion.span
          style={{
            display: 'inline-block',
            minWidth: decimals > 0 ? '2ch' : '1ch',
          }}
        >
          {display}
        </motion.span>
        {suffix}
      </motion.div>
    </motion.div>
  )
})

export default AnimatedCounter
