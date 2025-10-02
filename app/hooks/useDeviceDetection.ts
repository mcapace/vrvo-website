'use client'

import { useState, useEffect } from 'react'

interface DeviceInfo {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  hasTouch: boolean
  hasHover: boolean
  isLowEnd: boolean
}

export function useDeviceDetection(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    hasTouch: false,
    hasHover: true,
    isLowEnd: false
  })

  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
      const isTablet = /ipad|android(?!.*mobile)/i.test(userAgent)
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const hasHover = window.matchMedia('(hover: hover)').matches
      
      // Detect low-end devices based on hardware concurrency and memory
      const hardwareConcurrency = navigator.hardwareConcurrency || 2
      const isLowEnd = hardwareConcurrency <= 2 || isMobile

      setDeviceInfo({
        isMobile: isMobile && !isTablet,
        isTablet,
        isDesktop: !isMobile,
        hasTouch,
        hasHover,
        isLowEnd
      })
    }

    detectDevice()
    window.addEventListener('resize', detectDevice)
    
    return () => window.removeEventListener('resize', detectDevice)
  }, [])

  return deviceInfo
}
