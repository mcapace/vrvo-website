'use client'

import { useRef, useMemo, memo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Line } from '@react-three/drei'
import * as THREE from 'three'

interface ParticleNetworkProps {
  className?: string
}

const ParticleField = memo(function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.Group>(null)
  const { mouse } = useThree()
  const frameRef = useRef(0)

  // Create particles and connections
  const { positions, colors, connections } = useMemo(() => {
    const particleCount = 120
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const connections: number[][] = []

    // Generate particle positions
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      
      // Create a more structured neural network pattern
      const radius = 8 + Math.random() * 4
      const angle = (i / particleCount) * Math.PI * 2
      const height = (Math.random() - 0.5) * 6
      
      positions[i3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 2
      positions[i3 + 1] = height
      positions[i3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 2
      
      // Blue to cyan gradient based on height
      const normalizedY = (height + 3) / 6
      colors[i3] = 0.2 + normalizedY * 0.3 // Blue component
      colors[i3 + 1] = 0.6 + normalizedY * 0.4 // Green component  
      colors[i3 + 2] = 1.0 // Cyan component
    }

    // Create connections between nearby particles
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3]
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
        
        // Connect particles that are close enough
        if (distance < 4 && Math.random() > 0.7) {
          connections.push([i, j])
        }
      }
    }

    return { positions, colors, connections }
  }, [])

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current) return
    
    frameRef.current++
    // Update every other frame for better performance
    if (frameRef.current % 2 !== 0) return

    const time = state.clock.getElapsedTime()
    
    // Update particle positions
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
    const colors = pointsRef.current.geometry.attributes.color.array as Float32Array
    
    for (let i = 0; i < 120; i++) {
      const i3 = i * 3
      const originalX = positions[i3]
      const originalY = positions[i3 + 1]
      const originalZ = positions[i3 + 2]
      
      // Gentle floating animation
      const floatY = Math.sin(time * 0.5 + i * 0.1) * 0.3
      const rotateX = Math.cos(time * 0.3 + i * 0.05) * 0.2
      const rotateZ = Math.sin(time * 0.4 + i * 0.08) * 0.2
      
      // Mouse parallax effect
      const mouseInfluence = 0.3
      const parallaxX = mouse.x * mouseInfluence * Math.sin(time + i * 0.1)
      const parallaxY = mouse.y * mouseInfluence * Math.cos(time + i * 0.1)
      
      positions[i3] = originalX + rotateX + parallaxX
      positions[i3 + 1] = originalY + floatY + parallaxY
      positions[i3 + 2] = originalZ + rotateZ
      
      // Update colors based on position
      const normalizedY = (positions[i3 + 1] + 3) / 6
      colors[i3] = 0.2 + normalizedY * 0.3
      colors[i3 + 1] = 0.6 + normalizedY * 0.4
      colors[i3 + 2] = 1.0
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true
    pointsRef.current.geometry.attributes.color.needsUpdate = true
  })

  return (
    <group>
      {/* Particles */}
      <Points ref={pointsRef} positions={positions} colors={colors}>
        <PointMaterial
          transparent
          vertexColors
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Connection lines */}
      <group ref={linesRef}>
        {connections.map((connection, index) => (
          <Line
            key={index}
            points={[
              [positions[connection[0] * 3], positions[connection[0] * 3 + 1], positions[connection[0] * 3 + 2]],
              [positions[connection[1] * 3], positions[connection[1] * 3 + 1], positions[connection[1] * 3 + 2]]
            ]}
            color="#06b6d4"
            opacity={0.3}
            transparent
            lineWidth={1}
          />
        ))}
      </group>
    </group>
  )
})

const ParticleNetwork = memo(function ParticleNetwork({ className = '' }: ParticleNetworkProps) {
  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
        performance={{ min: 0.8 }}
        gl={{ 
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: false
        }}
        frameloop="demand"
      >
        <ParticleField />
      </Canvas>
    </div>
  )
})

export default ParticleNetwork
