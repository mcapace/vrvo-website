'use client'

import { lazy, Suspense } from 'react'

// Lazy load the ParticleWave component
const ParticleWave = lazy(() => import('./ParticleWave'))

export default function LazyParticleWave() {
  return (
    <Suspense fallback={
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-900/50 animate-pulse" />
    }>
      <ParticleWave />
    </Suspense>
  )
}
