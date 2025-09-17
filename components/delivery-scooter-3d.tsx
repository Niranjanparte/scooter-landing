"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import { Suspense, useRef } from "react"
import type { Mesh } from "three"

function SimpleScooter({ color = "#ff8c00" }: { color?: string }) {
  const scooterRef = useRef<Mesh>(null)

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={scooterRef} scale={[1.2, 1.2, 1.2]}>
        <mesh position={[0, -0.2, 0]}>
          <boxGeometry args={[2.2, 0.12, 0.6]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>

        <mesh position={[1.0, 0.4, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 1.2]} />
          <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
        </mesh>

        <mesh position={[1.0, 1.0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.04, 0.04, 1.0]} />
          <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
        </mesh>

        <mesh position={[1.0, 1.0, 0.5]}>
          <cylinderGeometry args={[0.06, 0.06, 0.15]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.8} />
        </mesh>
        <mesh position={[1.0, 1.0, -0.5]}>
          <cylinderGeometry args={[0.06, 0.06, 0.15]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.8} />
        </mesh>

        <mesh position={[1.0, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.12]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.2} roughness={0.9} />
        </mesh>

        <mesh position={[-1.0, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.12]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.2} roughness={0.9} />
        </mesh>

        <mesh position={[1.1, 0.7, 0]}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>
      </group>
    </Float>
  )
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-white text-lg">Loading 3D Model...</div>
    </div>
  )
}

interface DeliveryScooter3DProps {
  selectedColor: string
}

export function DeliveryScooter3D({ selectedColor }: DeliveryScooter3DProps) {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      <Canvas camera={{ position: [4, 2, 4], fov: 50 }}>
        <Suspense fallback={null}>
          <Environment preset="warehouse" />
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff8c00" />

          <SimpleScooter color={selectedColor} />

          <OrbitControls
            enablePan={false}
            enableZoom={true}
            maxPolarAngle={Math.PI / 2}
            minDistance={3}
            maxDistance={8}
            autoRotate
            autoRotateSpeed={2}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
