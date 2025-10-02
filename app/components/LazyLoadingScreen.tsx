'use client'

import { lazy, Suspense } from 'react'

// Lazy load the LoadingScreen component
const LoadingScreen = lazy(() => import('./LoadingScreen'))

interface LazyLoadingScreenProps {
  onComplete?: () => void
  duration?: number
}

export default function LazyLoadingScreen({ onComplete, duration }: LazyLoadingScreenProps) {
  return (
    <Suspense fallback={
      <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <LoadingScreen onComplete={onComplete} duration={duration} />
    </Suspense>
  )
}
