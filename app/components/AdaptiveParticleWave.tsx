'use client'

import { memo } from 'react'
import { useDeviceDetection } from '../hooks/useDeviceDetection'
import LazyParticleWave from './LazyParticleWave'

// Mobile fallback component with CSS-based animation
const MobileParticleFallback = memo(function MobileParticleFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* CSS-based animated background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(34, 197, 94, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.25) 0%, transparent 50%)
          `,
          animation: 'mobileParticles 8s ease-in-out infinite'
        }}
      />
      
      {/* Floating particles using CSS */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `floatParticle ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes mobileParticles {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(180deg); }
        }
        
        @keyframes floatParticle {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  )
})

const AdaptiveParticleWave = memo(function AdaptiveParticleWave() {
  const { isMobile, isTablet, isLowEnd } = useDeviceDetection()
  
  // Disable 3D particles on mobile devices and low-end devices
  const shouldUse3D = !isMobile && !isLowEnd && !isTablet

  if (shouldUse3D) {
    return <LazyParticleWave />
  }

  return <MobileParticleFallback />
})

export default AdaptiveParticleWave
