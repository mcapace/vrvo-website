'use client'

import { useRef, useMemo, memo, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

const ParticleField = memo(function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const { mouse } = useThree()
  const frameRef = useRef(0)

  // Optimized particle count and memoized positions
  const particles = useMemo(() => {
    const count = 1000 // Reduced from 1500 for better performance
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      
      // Create a wave pattern across the x-axis
      const x = (Math.random() - 0.5) * 20
      const y = Math.sin(x * 0.3) * 3 + (Math.random() - 0.5) * 2
      const z = (Math.random() - 0.5) * 20
      
      positions[i3] = x
      positions[i3 + 1] = y
      positions[i3 + 2] = z
      
      // Blue to cyan gradient based on height
      const normalizedY = (y + 5) / 10
      colors[i3] = 0.2 + normalizedY * 0.3
      colors[i3 + 1] = 0.6 + normalizedY * 0.4
      colors[i3 + 2] = 1.0
    }
    
    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (!pointsRef.current) return
    
    frameRef.current++
    // Update every other frame for better performance (30fps instead of 60fps)
    if (frameRef.current % 2 !== 0) return

    const time = state.clock.getElapsedTime()
    
    // Animate particles with wave motion
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
    const colors = pointsRef.current.geometry.attributes.color.array as Float32Array
    
    for (let i = 0; i < 1000; i++) {
      const i3 = i * 3
      const x = positions[i3]
      
      // Create flowing wave animation with reduced complexity
      const waveY = Math.sin(x * 0.3 + time * 0.5) * 2
      const mouseInfluence = (mouse.x * 0.3 + mouse.y * 0.2) * Math.sin(time + x * 0.1) * 0.3 // Reduced influence
      
      positions[i3 + 1] = waveY + mouseInfluence
      
      // Simplified color animation
      const normalizedY = (positions[i3 + 1] + 5) / 10
      colors[i3] = 0.2 + normalizedY * 0.3
      colors[i3 + 1] = 0.6 + normalizedY * 0.4
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true
    pointsRef.current.geometry.attributes.color.needsUpdate = true
  })

  return (
    <Points ref={pointsRef} positions={particles.positions} colors={particles.colors}>
      <PointMaterial
        transparent
        vertexColors
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
})

const ParticleWave = memo(function ParticleWave() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]} // Reduced max DPR for better performance
        performance={{ min: 0.8 }} // Increased minimum performance threshold
        gl={{ 
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: false
        }}
        frameloop="demand" // Only render when needed
      >
        <ParticleField />
      </Canvas>
    </div>
  )
})

export default ParticleWave
