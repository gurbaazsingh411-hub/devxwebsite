'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

interface ConnectionLinesProps {
  positions: [number, number, number][];
  color?: string;
}

export function ConnectionLines({ positions, color = '#6366f1' }: ConnectionLinesProps) {
  return (
    <group>
      {positions.map((pos, index) => {
        if (index === 0) return null;
        const prevPos = positions[index - 1];
        
        // Create curved path
        const start = new THREE.Vector3(...prevPos);
        const end = new THREE.Vector3(...pos);
        const mid = new THREE.Vector3().lerpVectors(start, end, 0.5);
        mid.y += 0.5;

        const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
        const points = curve.getPoints(30);

        return (
          <Line
            key={index}
            points={points}
            color={color}
            lineWidth={1}
            transparent
            opacity={0.3}
          />
        );
      })}
    </group>
  );
}

// Energy beam between connected nodes
export function EnergyBeam({
  start,
  end,
  color = '#6366f1',
}: {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
}) {
  const particlesRef = useRef<THREE.Points>(null);

  const { direction, length } = useMemo(() => {
    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);
    const direction = new THREE.Vector3().subVectors(endVec, startVec);
    const length = direction.length();
    direction.normalize();

    return { direction, length };
  }, [start, end]);

  // Particles geometry
  const particleGeometry = useMemo(() => {
    const count = 20;
    const positions = new Float32Array(count * 3);
    const startVec = new THREE.Vector3(...start);

    for (let i = 0; i < count; i++) {
      const t = i / count;
      const pos = startVec.clone().addScaledVector(direction, t * length);
      positions[i * 3] = pos.x;
      positions[i * 3 + 1] = pos.y;
      positions[i * 3 + 2] = pos.z;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [start, direction, length]);

  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      const startVec = new THREE.Vector3(...start);
      const count = positions.length / 3;

      for (let i = 0; i < count; i++) {
        const t = ((i / count) + state.clock.elapsedTime * 0.5) % 1;
        const pos = startVec.clone().addScaledVector(direction, t * length);
        const wave = Math.sin(t * Math.PI * 4 + state.clock.elapsedTime * 3) * 0.05;
        pos.y += wave;

        positions[i * 3] = pos.x;
        positions[i * 3 + 1] = pos.y;
        positions[i * 3 + 2] = pos.z;
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  // Create line points
  const linePoints = useMemo(() => {
    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);
    return [startVec, endVec];
  }, [start, end]);

  return (
    <group>
      {/* Beam line */}
      <Line
        points={linePoints}
        color={color}
        lineWidth={1}
        transparent
        opacity={0.2}
      />

      {/* Flowing particles */}
      <points ref={particlesRef} geometry={particleGeometry}>
        <pointsMaterial
          size={0.05}
          color={color}
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}
