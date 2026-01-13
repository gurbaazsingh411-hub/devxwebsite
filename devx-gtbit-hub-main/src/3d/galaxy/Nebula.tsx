'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface NebulaProps {
  count?: number;
  color?: string;
  opacity?: number;
}

export function Nebula({ count = 200, color = '#6366f1', opacity = 0.15 }: NebulaProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const { matrices, scales } = useMemo(() => {
    const matrices: THREE.Matrix4[] = [];
    const scales: number[] = [];

    for (let i = 0; i < count; i++) {
      const matrix = new THREE.Matrix4();
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 30
      );
      const scale = Math.random() * 3 + 1;
      scales.push(scale);

      matrix.compose(
        position,
        new THREE.Quaternion().setFromEuler(
          new THREE.Euler(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
          )
        ),
        new THREE.Vector3(scale, scale, scale)
      );
      matrices.push(matrix);
    }

    return { matrices, scales };
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;

    for (let i = 0; i < count; i++) {
      const time = state.clock.elapsedTime;
      const scale = scales[i] * (1 + Math.sin(time * 0.5 + i) * 0.1);
      
      dummy.position.setFromMatrixPosition(matrices[i]);
      dummy.rotation.x += 0.001;
      dummy.rotation.y += 0.002;
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </instancedMesh>
  );
}
