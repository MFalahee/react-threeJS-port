import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Fire: React.FC = () => {
  const particleGeometry = useRef(new THREE.BufferGeometry());
  const intenseParticleGeometry = useRef(new THREE.BufferGeometry());
  const particles = useRef<THREE.Points>(null!);
  const intenseParticles = useRef<THREE.Points>(null!);

  // Set up the initial particles and their velocities
  const [initialParticlePositions, initialParticleVelocities] = useMemo(() => {
    const positions = [];
    const velocities = [];
    for (let i = 0; i < 500; i++) {
      positions.push((Math.random() - 0.5));  // x
      positions.push(Math.random() * 5);          // y
      positions.push((Math.random() - 0.5));  // z
      velocities.push(new THREE.Vector3((Math.random() - 0.5) * 0.05, Math.random() * 0.05, (Math.random() - 0.5) * 0.05));
    }
    return [new Float32Array(positions), velocities];
  }, []);

  particleGeometry.current.setAttribute('position', new THREE.BufferAttribute(initialParticlePositions, 3));

  // Set up the initial particles and their velocities for the intense fire base
  const [intenseParticlePositions, intenseParticleVelocities] = useMemo(() => {
    const positions = [];
    const velocities = [];
    for (let i = 0; i < 200; i++) {
      positions.push((Math.random() - 0.5));  // x
      positions.push(0);                      // y
      positions.push((Math.random() - 0.5));  // z
      velocities.push(new THREE.Vector3((Math.random() - 0.5) * 0.001, Math.random() * 0.015, (Math.random() - 0.5) * 0.001)); // increased y velocity
    }
    return [new Float32Array(positions), velocities];
  }, []);

  intenseParticleGeometry.current.setAttribute('position', new THREE.BufferAttribute(intenseParticlePositions, 3));

  const particleMaterial = new THREE.PointsMaterial({
    color: 0xff4500,
    size: 0.1,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const intenseParticleMaterial = new THREE.PointsMaterial({
    color: 0xffff00,
    size: 0.5,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  useFrame(() => {
    if (!particles.current || !intenseParticles.current) return;

    const updateParticles = (positions: Float32Array, velocities: THREE.Vector3[], max_x: number, max_y: number, max_z: number, geom: THREE.BufferGeometry) => {
      for (let i = 0; i < velocities.length; i++) {
        positions[i*3] += velocities[i].x;
        positions[i*3 + 1] += velocities[i].y;
        positions[i*3 + 2] += velocities[i].z;
    
        if (positions[i*3 + 1] > max_y || Math.abs(positions[i*3]) > max_x || Math.abs(positions[i*3 + 2]) > max_z) {
          positions[i*3] = (Math.random() - 0.5);  // x
          positions[i*3 + 1] = 0;                       // y
          positions[i*3 + 2] = (Math.random() - 0.5);  // z
          velocities[i].set((Math.random() - 0.5) * 0.01, Math.random() * 0.05, (Math.random() - 0.5) * 0.01);
        }
      }
    
      geom.attributes.position.needsUpdate = true;
    }

    const positions = particles.current.geometry.attributes.position.array as Float32Array;
    const intensePositions = intenseParticles.current.geometry.attributes.position.array as Float32Array;
    // x,y,z
    updateParticles(positions, initialParticleVelocities, 2, 5, 1, particles.current.geometry);
    updateParticles(intensePositions, intenseParticleVelocities, 1.3, 2.5, 3, intenseParticles.current.geometry);
  });

  return (
    <>
      <points ref={particles} geometry={particleGeometry.current} material={particleMaterial} position={[20,1.7,37]} />
      <points ref={intenseParticles} geometry={intenseParticleGeometry.current} material={intenseParticleMaterial} position={[20,1.7,37]} />
    </>
  );
};

export default Fire;
