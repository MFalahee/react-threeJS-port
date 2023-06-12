import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { InstancedMesh, Vector3 } from "three";

const NUM_PARTICLES = 1000;
const BOUNDARY_X = 100;
const BOUNDARY_Y = 100;
const BOUNDARY_Z = 100;

export default function Snow() {
  const meshRef = useRef<InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < NUM_PARTICLES; i++) {
      const position = new Vector3(
        (Math.random() - 0.5) * BOUNDARY_X,
        (Math.random() - 0.5) * BOUNDARY_Y,
        (Math.random() - 0.5) * BOUNDARY_Z
      );

      const velocity = new Vector3(
        (Math.random() - 0.5) / 50, // Simulate wind
        -Math.random() / 10, // Gravity
        (Math.random() - 0.5) / 50 // Simulate wind
      );

      temp.push({ position, velocity });
    }
    return temp;
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      const time = performance.now();
      particles.forEach((particle, i) => {
        particle.position.add(particle.velocity);

        if (
          Math.abs(particle.position.x) > BOUNDARY_X ||
          Math.abs(particle.position.y) > BOUNDARY_Y ||
          Math.abs(particle.position.z) > BOUNDARY_Z
        ) {
          particle.position.set(
            (Math.random() - 0.5) * BOUNDARY_X,
            (Math.random() - 0.5) * BOUNDARY_Y,
            (Math.random() - 0.5) * BOUNDARY_Z
          );
        }

        dummy.position.copy(particle.position);
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
      });

      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <>
      <instancedMesh
        ref={meshRef}
        position={[100, 50, 10]}
        rotation-y={-Math.PI / 2}
        args={[
          new THREE.BufferGeometry(),
          new THREE.MeshStandardMaterial(),
          NUM_PARTICLES,
        ]}
      >
        <circleGeometry args={[0.1, 16]} />
        <meshBasicMaterial color="white" />
      </instancedMesh>
    </>
  );
}
