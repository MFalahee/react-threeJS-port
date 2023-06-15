/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { awsModelPath } from "../../utils/awsModelPath";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Plane003: THREE.Mesh;
    Plane003_1: THREE.Mesh;
    Plane003_2: THREE.Mesh;
  };
  materials: {
    bookShelfWood: THREE.MeshStandardMaterial;
    bookShelfBack: THREE.MeshStandardMaterial;
    bookShelfInner: THREE.MeshStandardMaterial;
  };
};
let modelPath: string = "/models/bookshelf.gltf";
import.meta.env.PROD ? (modelPath = awsModelPath(modelPath)) : null;
export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(modelPath) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[1.92, 5.43, 22.89]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003.geometry}
            material={materials.bookShelfWood}
          />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_1.geometry}
          material={materials.bookShelfBack}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_2.geometry}
          material={materials.bookShelfInner}
        />
      </group>
    </group>
  );
}

useGLTF.preload(modelPath);
