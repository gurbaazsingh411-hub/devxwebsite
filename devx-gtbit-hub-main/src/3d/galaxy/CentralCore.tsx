'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function CentralCore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Particle geometry
  const particleGeometry = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 * 5;
      const radius = 1 + (i / count) * 1.5;
      const height = (Math.random() - 0.5) * 0.5;

      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.2;
      const scale = 1 + Math.sin(time * 2) * 0.05;
      coreRef.current.scale.setScalar(scale);
    }

    if (ringsRef.current) {
      ringsRef.current.rotation.y = time * 0.3;
      ringsRef.current.rotation.x = Math.sin(time * 0.5) * 0.1;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.1;
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      const count = positions.length / 3;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const angle = (i / count) * Math.PI * 2 * 5 + time * 0.5;
        const radius = 1 + (i / count) * 1.5;

        positions[i3] = Math.cos(angle) * radius;
        positions[i3 + 2] = Math.sin(angle) * radius;
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      {/* Main core sphere */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.6, 64, 64]} />
        <MeshDistortMaterial
          color="#6366f1"
          emissive="#6366f1"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.9}
          distort={0.2}
          speed={3}
        />
      </mesh>

      {/* Inner glow */}
      <mesh scale={1.2}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial
          color="#818cf8"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Outer glow */}
      <mesh scale={2}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshBasicMaterial
          color="#6366f1"
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Orbital rings */}
      <group ref={ringsRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.2, 1.25, 128]} />
          <meshBasicMaterial
            color="#6366f1"
            transparent
            opacity={0.4}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        <mesh rotation={[Math.PI / 2.5, Math.PI / 4, 0]}>
          <ringGeometry args={[1.5, 1.53, 128]} />
          <meshBasicMaterial
            color="#8b5cf6"
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        <mesh rotation={[Math.PI / 3, -Math.PI / 3, Math.PI / 6]}>
          <ringGeometry args={[1.8, 1.82, 128]} />
          <meshBasicMaterial
            color="#a78bfa"
            transparent
            opacity={0.2}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>

      {/* Orbiting particles */}
      <points ref={particlesRef} geometry={particleGeometry}>
        <pointsMaterial
          size={0.02}
          color="#818cf8"
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Point lights */}
      <pointLight position={[0, 0, 0]} intensity={2} color="#6366f1" distance={10} />
      <pointLight position={[0, 2, 0]} intensity={0.5} color="#8b5cf6" distance={8} />
    </group>
  );
}
