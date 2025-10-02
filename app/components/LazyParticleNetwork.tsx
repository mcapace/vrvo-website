'use client'

import { Suspense, memo } from 'react'
import dynamic from 'next/dynamic'
import { useDeviceDetection } from '../hooks/useDeviceDetection'

// Lazy load the ParticleNetwork component
const ParticleNetwork = dynamic(() => import('./ParticleNetwork'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-950/50 to-slate-900/50 animate-pulse" />
  )
})

// Mobile fallback component
const MobileNetworkFallback = memo(function MobileNetworkFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* CSS-based animated background for mobile */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
          `,
          animation: 'networkPulse 6s ease-in-out infinite'
        }}
      />
      
      {/* Animated connection lines using CSS */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 40}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `networkLine ${4 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
      
      {/* Floating particles using CSS */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `networkFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes networkPulse {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
            opacity: 0.3;
          }
          50% { 
            transform: scale(1.05) rotate(180deg);
            opacity: 0.5;
          }
        }
        
        @keyframes networkLine {
          0%, 100% { 
            opacity: 0.2;
            transform: scaleX(0.8) rotate(var(--rotation));
          }
          50% { 
            opacity: 0.6;
            transform: scaleX(1.2) rotate(var(--rotation));
          }
        }
        
        @keyframes networkFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-15px) translateX(10px);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  )
})

const LazyParticleNetwork = memo(function LazyParticleNetwork() {
  const { isMobile, isLowEnd } = useDeviceDetection()
  
  // Use CSS fallback on mobile and low-end devices
  if (isMobile || isLowEnd) {
    return <MobileNetworkFallback />
  }

  return (
    <Suspense fallback={
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-950/50 to-slate-900/50 animate-pulse" />
    }>
      <ParticleNetwork />
    </Suspense>
  )
})

export default LazyParticleNetwork
