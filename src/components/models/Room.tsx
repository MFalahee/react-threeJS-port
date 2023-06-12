/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Plane008: THREE.Mesh;
    Plane008_1: THREE.Mesh;
    Plane008_2: THREE.Mesh;
    Plane008_3: THREE.Mesh;
    Plane008_4: THREE.Mesh;
    Plane008_5: THREE.Mesh;
    Plane008_6: THREE.Mesh;
  };
  materials: {
    brick: THREE.MeshStandardMaterial;
    woodbeam: THREE.MeshStandardMaterial;
    wallWood: THREE.MeshStandardMaterial;
    fpstone2: THREE.MeshStandardMaterial;
    woodpanel: THREE.MeshStandardMaterial;
    fpstone1: THREE.MeshStandardMaterial;
    fpBlk: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/room.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials.brick}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008_1.geometry}
        material={materials.woodbeam}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008_2.geometry}
        material={materials.wallWood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008_3.geometry}
        material={materials.fpstone2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008_4.geometry}
        material={materials.woodpanel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008_5.geometry}
        material={materials.fpstone1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008_6.geometry}
        material={materials.fpBlk}
      />
    </group>
  );
}

useGLTF.preload("/room.gltf");
