'use client'

import { memo } from 'react'
import { useDeviceDetection } from '../hooks/useDeviceDetection'
import CustomCursor from './CustomCursor'

const AdaptiveCursor = memo(function AdaptiveCursor() {
  const { hasTouch, hasHover, isMobile, isTablet } = useDeviceDetection()
  
  // Only show custom cursor on desktop devices with hover support
  const shouldShowCursor = !hasTouch && hasHover && !isMobile && !isTablet

  if (!shouldShowCursor) {
    return null
  }

  return <CustomCursor />
})

export default AdaptiveCursor
