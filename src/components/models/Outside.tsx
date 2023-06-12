/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["3d-model002"]: THREE.Mesh;
    ["3d-model002_1"]: THREE.Mesh;
    ["3d-model002_2"]: THREE.Mesh;
    ["3d-model002_3"]: THREE.Mesh;
    ["3d-model002_4"]: THREE.Mesh;
    ["3d-model002_5"]: THREE.Mesh;
    hill: THREE.Mesh;
    rocks: THREE.Mesh;
  };
  materials: {
    treewood: THREE.MeshStandardMaterial;
    green1: THREE.MeshPhysicalMaterial;
    green2: THREE.MeshStandardMaterial;
    green3: THREE.MeshStandardMaterial;
    green4: THREE.MeshStandardMaterial;
    green5: THREE.MeshStandardMaterial;
    snowyhill: THREE.MeshStandardMaterial;
    fpstone1: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/outsidefinalized.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3d-model002"].geometry}
        material={materials.treewood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3d-model002_1"].geometry}
        material={materials.green1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3d-model002_2"].geometry}
        material={materials.green2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3d-model002_3"].geometry}
        material={materials.green3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3d-model002_4"].geometry}
        material={materials.green4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3d-model002_5"].geometry}
        material={materials.green5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hill.geometry}
        material={materials.snowyhill}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rocks.geometry}
        material={materials.fpstone1}
      />
    </group>
  );
}

useGLTF.preload("/outsidefinalized.gltf");