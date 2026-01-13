'use client';

import React, { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import type { Project } from '@/lib/types';

interface ProjectNodeProps {
  project: Project;
  position: [number, number, number];
  onClick: () => void;
  isSelected: boolean;
  index: number;
}

// Particle trail component
function ParticleTrail({ color, count = 50 }: { color: string; count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const angle = (i / count) * Math.PI * 2;
      const radius = 0.8 + Math.random() * 0.3;

      positions[i3] = Math.cos(angle) * radius;
      positions[i3 + 1] = (Math.random() - 0.5) * 0.5;
      positions[i3 + 2] = Math.sin(angle) * radius;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const time = state.clock.elapsedTime;
      const angle = (i / count) * Math.PI * 2 + time * 0.5;
      const radius = 0.7 + Math.sin(time * 2 + i) * 0.1;

      posArray[i3] = Math.cos(angle) * radius;
      posArray[i3 + 1] = Math.sin(time * 3 + i * 0.5) * 0.2;
      posArray[i3 + 2] = Math.sin(angle) * radius;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.03}
        color={color}
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Glowing ring component
function GlowRing({ color, radius = 0.8 }: { color: string; radius?: number }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime) * 0.1;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.02, radius, 64]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.4}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

// Energy core component
function EnergyCore({ color }: { color: string }) {
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (coreRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
      coreRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={coreRef}>
      <sphereGeometry args={[0.15, 32, 32]} />
      <meshBasicMaterial color={color} transparent opacity={0.9} />
    </mesh>
  );
}

export function ProjectNode({ project, position, onClick, isSelected, index }: ProjectNodeProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.15;

      const targetScale = hovered || isSelected ? 1.3 : 1;
      groupRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        {/* Main sphere with distortion */}
        <mesh
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <sphereGeometry args={[0.4, 64, 64]} />
          <MeshDistortMaterial
            color={project.color}
            emissive={project.color}
            emissiveIntensity={hovered || isSelected ? 0.5 : 0.2}
            roughness={0.2}
            metalness={0.8}
            distort={hovered || isSelected ? 0.3 : 0.15}
            speed={2}
          />
        </mesh>

        {/* Inner glow sphere */}
        <mesh scale={0.95}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshBasicMaterial
            color={project.color}
            transparent
            opacity={0.1}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Outer glow */}
        <mesh scale={1.5}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshBasicMaterial
            color={project.color}
            transparent
            opacity={hovered || isSelected ? 0.15 : 0.05}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        {/* Energy core */}
        <EnergyCore color={project.color} />

        {/* Orbital ring */}
        <GlowRing color={project.color} radius={0.65} />

        {/* Second ring at different angle */}
        <group rotation={[Math.PI / 3, 0, Math.PI / 4]}>
          <GlowRing color={project.color} radius={0.55} />
        </group>

        {/* Particle trail */}
        {(hovered || isSelected) && <ParticleTrail color={project.color} count={40} />}

        {/* Project label */}
        {(hovered || isSelected) && (
          <Text
            position={[0, 0.9, 0]}
            fontSize={0.15}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            {project.title}
          </Text>
        )}

        {/* Featured indicator */}
        {project.featured && (
          <mesh position={[0.5, 0.5, 0]}>
            <octahedronGeometry args={[0.08]} />
            <meshBasicMaterial color="#fbbf24" />
          </mesh>
        )}
      </Float>
    </group>
  );
}
