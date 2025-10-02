'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface LoadingScreenProps {
  onComplete?: () => void
  duration?: number
}

export default function LoadingScreen({ onComplete, duration = 3000 }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const controls = useAnimation()

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start({
        opacity: 0,
        scale: 1.1,
        transition: {
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      })

      setTimeout(() => {
        setIsVisible(false)
        onComplete?.()
      }, 1200)
    }, duration)

    return () => clearTimeout(timer)
  }, [controls, duration, onComplete])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={controls}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)
            `,
            backgroundSize: '400px 400px, 300px 300px, 500px 500px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="relative mb-12"
        >
          {/* Logo Background Glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={{
              boxShadow: [
                '0 0 0px rgba(59, 130, 246, 0)',
                '0 0 30px rgba(59, 130, 246, 0.3)',
                '0 0 50px rgba(34, 197, 94, 0.3)',
                '0 0 30px rgba(6, 182, 212, 0.3)',
                '0 0 0px rgba(59, 130, 246, 0)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: 'rgba(30, 41, 59, 0.5)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              padding: '2rem'
            }}
          />

          {/* Logo Text */}
          <motion.div
            className="relative z-10 text-6xl md:text-8xl font-bold"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: 'linear-gradient(45deg, #3b82f6, #22c55e, #06b6d4, #8b5cf6, #3b82f6)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textFillColor: 'transparent',
            }}
          >
            <Image
              src="/logo/vrvo_logo.png"
              alt="Vrvo - Next-Generation Marketing"
              width={320}
              height={100}
              priority
              className="w-auto h-auto max-w-[320px]"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.5)) drop-shadow(0 0 60px rgba(6, 182, 212, 0.3))'
              }}
            />
          </motion.div>

          {/* Floating Particles around Logo */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: `linear-gradient(45deg, ${
                  ['#3b82f6', '#22c55e', '#06b6d4', '#8b5cf6'][i % 4]
                }, transparent)`,
                top: `${20 + (i * 15)}%`,
                left: `${10 + (i * 20)}%`,
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-80 md:w-96 h-1 bg-slate-800 rounded-full overflow-hidden relative"
        >
          {/* Loading Bar Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-full" />
          
          {/* Animated Progress */}
          <motion.div
            className="h-full rounded-full relative overflow-hidden"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: duration / 1000,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {/* Gradient Background */}
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: 'linear-gradient(90deg, #3b82f6, #22c55e, #06b6d4, #8b5cf6, #3b82f6)',
                backgroundSize: '200% 200%'
              }}
            />
            
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 opacity-60"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                width: '50%'
              }}
            />
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <motion.p
            className="text-slate-400 text-lg font-medium mb-2"
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Crafting Your Digital Excellence
          </motion.p>
          
          <motion.div
            className="flex items-center justify-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Corner Accents */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-blue-400/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />
      <motion.div
        className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-cyan-400/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      />
      <motion.div
        className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-teal-400/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-purple-400/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      />
    </motion.div>
  )
}
