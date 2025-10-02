'use client'

import { useState, useEffect } from 'react'
import LazyLoadingScreen from './LazyLoadingScreen'

interface LoadingWrapperProps {
  children: React.ReactNode
  loadingDuration?: number
}

export default function LoadingWrapper({ children, loadingDuration = 2500 }: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, loadingDuration)

    return () => clearTimeout(timer)
  }, [loadingDuration])

  if (isLoading) {
    return <LazyLoadingScreen onComplete={() => setIsLoading(false)} duration={loadingDuration} />
  }

  return <>{children}</>
}
