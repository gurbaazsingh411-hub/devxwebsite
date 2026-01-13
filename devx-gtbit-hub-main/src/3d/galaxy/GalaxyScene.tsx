'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GalaxyProps {
  count?: number;
  size?: number;
  radius?: number;
  branches?: number;
  spin?: number;
  randomness?: number;
  randomnessPower?: number;
  insideColor?: string;
  outsideColor?: string;
}

export function Galaxy({
  count = 50000,
  size = 0.01,
  radius = 8,
  branches = 5,
  spin = 1.2,
  randomness = 0.3,
  randomnessPower = 3,
  insideColor = '#6366f1',
  outsideColor = '#1e1b4b',
}: GalaxyProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorInside = new THREE.Color(insideColor);
    const colorOutside = new THREE.Color(outsideColor);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const radiusValue = Math.random() * radius;
      const branchAngle = ((i % branches) / branches) * Math.PI * 2;
      const spinAngle = radiusValue * spin;

      const randomX =
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        randomness *
        radiusValue;
      const randomY =
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        randomness *
        radiusValue;
      const randomZ =
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        randomness *
        radiusValue;

      positions[i3] = Math.cos(branchAngle + spinAngle) * radiusValue + randomX;
      positions[i3 + 1] = randomY * 0.5;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radiusValue + randomZ;

      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radiusValue / radius);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    return geo;
  }, [count, radius, branches, spin, randomness, randomnessPower, insideColor, outsideColor]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={size}
        sizeAttenuation
        depthWrite={false}
        vertexColors
        blending={THREE.AdditiveBlending}
        transparent
        opacity={0.8}
      />
    </points>
  );
}
