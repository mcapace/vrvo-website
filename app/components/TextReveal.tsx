'use client'

import { motion } from 'framer-motion'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  staggerDelay?: number
  duration?: number
  [key: string]: unknown
}

export default function TextReveal({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.08,
  duration = 0.6,
  ...props
}: TextRevealProps) {
  // Split text into words, then each word into letters
  const words = children.split(' ')
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  }

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay * 0.5
      }
    }
  }

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: -90,
      filter: 'blur(15px)',
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: duration * 1.2,
        type: "spring",
        stiffness: 80,
        damping: 15,
        mass: 1
      }
    }
  }

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="inline-block mr-3 last:mr-0"
          variants={wordVariants}
        >
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              key={`${wordIndex}-${letterIndex}`}
              className="inline-block"
              variants={letterVariants}
              style={{
                transformOrigin: 'bottom',
                backfaceVisibility: 'hidden',
                perspective: 1000
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  )
}
