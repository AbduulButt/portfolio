import { Canvas, useFrame } from "@react-three/fiber"
import {
    Float,
    Sparkles,
    Stars,
} from "@react-three/drei"

import { useRef } from "react"
import * as THREE from "three"

const FloatingCore = () => {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (!meshRef.current) return

        const time =
            state.clock.getElapsedTime()

        meshRef.current.rotation.x =
            time * 0.18

        meshRef.current.rotation.y =
            time * 0.28

        meshRef.current.rotation.x +=
            state.pointer.y * 0.08

        meshRef.current.rotation.y +=
            state.pointer.x * 0.1
    })

    return (
        <Float
            speed={1.6}
            rotationIntensity={0.8}
            floatIntensity={1.2}
        >
            <mesh ref={meshRef}>
                <icosahedronGeometry
                    args={[1.25, 2]}
                />

                <meshStandardMaterial
                    color="#2f7bff"
                    roughness={0.25}
                    metalness={0.65}
                    emissive="#0b2a63"
                    emissiveIntensity={0.6}
                    wireframe={false}
                />
            </mesh>
        </Float>
    )
}

const OrbitRing = () => {
    const ringRef =
        useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (!ringRef.current) return

        ringRef.current.rotation.z =
            state.clock.getElapsedTime() *
            0.22
    })

    return (
        <mesh
            ref={ringRef}
            rotation={[1.15, 0.2, 0]}
        >
            <torusGeometry
                args={[1.9, 0.018, 16, 180]}
            />

            <meshBasicMaterial
                color="#64d9ff"
                transparent
                opacity={0.6}
            />
        </mesh>
    )
}

const ProfileScene = () => {
    return (
        <div className="profile-scene">
            <Canvas
                camera={{
                    position: [0, 0, 5],
                    fov: 45,
                }}
                dpr={[1, 1.5]}
            >
                <ambientLight
                    intensity={0.7}
                />

                <directionalLight
                    position={[3, 3, 4]}
                    intensity={2.4}
                    color="#ffffff"
                />

                <pointLight
                    position={[-3, -2, 3]}
                    intensity={8}
                    color="#64d9ff"
                />

                <pointLight
                    position={[3, 2, 2]}
                    intensity={7}
                    color="#7357ff"
                />

                <Stars
                    radius={25}
                    depth={20}
                    count={500}
                    factor={1.5}
                    saturation={0}
                    fade
                    speed={0.35}
                />

                <Sparkles
                    count={40}
                    scale={5}
                    size={1.6}
                    speed={0.35}
                    color="#64d9ff"
                />

                <FloatingCore />

                <OrbitRing />
            </Canvas>
        </div>
    )
}

export default ProfileScene