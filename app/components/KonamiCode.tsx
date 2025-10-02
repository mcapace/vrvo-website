'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface KonamiCodeProps {
  onActivate?: () => void
  onDeactivate?: () => void
}

export default function KonamiCode({ onActivate, onDeactivate }: KonamiCodeProps) {
  const [sequence, setSequence] = useState<string[]>([])
  const [isActive, setIsActive] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  // Konami Code: ↑↑↓↓←→←→BA
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ]

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.code
      
      // Add the key to sequence
      setSequence(prev => {
        const newSequence = [...prev, key]
        
        // Keep only the last 10 keys
        if (newSequence.length > 10) {
          newSequence.shift()
        }
        
        // Check if sequence matches Konami code
        if (newSequence.length === 10) {
          const isMatch = newSequence.every((k, i) => k === konamiCode[i])
          if (isMatch && !isActive) {
            setIsActive(true)
            setShowConfetti(true)
            onActivate?.()
            
            // Deactivate after 5 seconds
            setTimeout(() => {
              setIsActive(false)
              setShowConfetti(false)
              onDeactivate?.()
            }, 5000)
          }
        }
        
        return newSequence
      })
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isActive, onActivate, onDeactivate])

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 z-[10000] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Rainbow Background Overlay */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080)',
                'linear-gradient(225deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080)',
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              opacity: 0.1,
              mixBlendMode: 'screen'
            }}
          />

          {/* Confetti Particles */}
          {showConfetti && (
            <div className="absolute inset-0">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'][Math.floor(Math.random() * 6)]
                  }}
                  initial={{
                    y: -100,
                    x: Math.random() * window.innerWidth,
                    scale: 0,
                    rotate: 0
                  }}
                  animate={{
                    y: window.innerHeight + 100,
                    x: Math.random() * window.innerWidth,
                    scale: [0, 1, 0],
                    rotate: 360
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    delay: Math.random() * 2,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          )}

          {/* Celebration Text */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.5
            }}
          >
            <motion.h1
              className="text-6xl font-bold text-white text-center"
              animate={{
                textShadow: [
                  '0 0 10px #ff0000',
                  '0 0 20px #00ff00',
                  '0 0 30px #0000ff',
                  '0 0 40px #ffff00',
                  '0 0 30px #ff00ff',
                  '0 0 20px #00ffff',
                  '0 0 10px #ff0000'
                ]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🎉 KONAMI CODE ACTIVATED! 🎉
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
