'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface StarFieldProps {
  count?: number;
  depth?: number;
  size?: number;
}

export function StarField({ count = 5000, depth = 100, size = 0.5 }: StarFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Spherical distribution
      const radius = depth * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Star colors
      const colorChoice = Math.random();
      if (colorChoice < 0.7) {
        colors[i3] = 0.9 + Math.random() * 0.1;
        colors[i3 + 1] = 0.9 + Math.random() * 0.1;
        colors[i3 + 2] = 1;
      } else if (colorChoice < 0.85) {
        colors[i3] = 0.6 + Math.random() * 0.2;
        colors[i3 + 1] = 0.7 + Math.random() * 0.2;
        colors[i3 + 2] = 1;
      } else {
        colors[i3] = 1;
        colors[i3 + 1] = 0.8 + Math.random() * 0.2;
        colors[i3 + 2] = 0.5 + Math.random() * 0.3;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    return geo;
  }, [count, depth]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.005) * 0.1;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.15}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Shooting stars
export function ShootingStars({ count = 5 }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      delay: Math.random() * 10,
      duration: 1 + Math.random() * 2,
      startPos: new THREE.Vector3(
        (Math.random() - 0.5) * 60,
        20 + Math.random() * 20,
        (Math.random() - 0.5) * 60
      ),
      direction: new THREE.Vector3(
        (Math.random() - 0.5) * 0.5,
        -1,
        (Math.random() - 0.5) * 0.5
      ).normalize(),
    }));
  }, [count]);

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.children.forEach((child, i) => {
      const star = stars[i];
      const time = (state.clock.elapsedTime + star.delay) % (star.duration + 5);

      if (time < star.duration) {
        const progress = time / star.duration;
        const speed = 40;

        child.position.copy(star.startPos);
        child.position.addScaledVector(star.direction, progress * speed);
        child.visible = true;

        const material = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
        material.opacity = 1 - progress;
      } else {
        child.visible = false;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {stars.map((star) => (
        <mesh key={star.id} visible={false}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}
