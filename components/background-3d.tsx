"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float, PerspectiveCamera } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function ScooterModel() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} position={[2, 0, -2]} scale={[0.8, 0.8, 0.8]}>
        {/* Scooter Body */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[2, 0.3, 0.8]} />
          <meshStandardMaterial color="#10b981" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Scooter Deck */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.8, 0.1, 0.6]} />
          <meshStandardMaterial color="#1f2937" metalness={0.6} roughness={0.3} />
        </mesh>

        {/* Handle Bar */}
        <mesh position={[0.8, 1.2, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.6]} />
          <meshStandardMaterial color="#6b7280" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Wheels */}
        <mesh position={[0.7, -0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.1]} />
          <meshStandardMaterial color="#1f2937" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[-0.7, -0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.1]} />
          <meshStandardMaterial color="#1f2937" metalness={0.7} roughness={0.3} />
        </mesh>

        {/* LED Strip */}
        <mesh position={[0, 0.6, 0.41]}>
          <boxGeometry args={[1.6, 0.05, 0.02]} />
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} />
        </mesh>
      </group>
    </Float>
  )
}

function FloatingElements() {
  return (
    <>
      {/* Floating geometric shapes */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-4, 2, -3]}>
          <octahedronGeometry args={[0.3]} />
          <meshStandardMaterial color="#10b981" transparent opacity={0.6} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh position={[4, -1, -4]}>
          <tetrahedronGeometry args={[0.4]} />
          <meshStandardMaterial color="#6366f1" transparent opacity={0.4} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={2.5}>
        <mesh position={[-3, -2, -2]}>
          <dodecahedronGeometry args={[0.25]} />
          <meshStandardMaterial color="#10b981" transparent opacity={0.5} />
        </mesh>
      </Float>
    </>
  )
}

export function Background3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <Suspense fallback={null}>
          <Environment preset="night" />
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#10b981" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />

          <ScooterModel />
          <FloatingElements />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
