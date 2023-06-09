import React, { useRef, Suspense } from "react";
import * as THREE from "three";

import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { Environment, PerspectiveCamera, Stars } from "@react-three/drei";
import Camera from "./Camera";
import Lights from "./Lights";


import { default as Fire } from "./models/Fire.tsx";
import { default as Outdoors } from "./models/Outdoors.tsx"
import { default as Room } from "./models/Room.tsx";
import { default as Interactables } from "./models/Interactables.tsx";
import { default as Snow } from "./Snow.tsx";
import { default as Furniture } from "./models/Furniture.tsx";
import { default as Photos } from "./models/Photos.tsx";

const Scene: React.FC = () => {
  const cameraPosition = new THREE.Vector3(10, 30, -50);
  const [config, setConfig] = useControls(() => ({
    camera: {
      value: true,
      hint: "free camera",
      options: [true, false],
    },
    outside: {
      value: true,
      hint: "Outside is visible",
      options: [true, false],
    },
    room: {
      value: true,
      hint: "Room is visible",
      options: [true, false],
    },
    interactables: {
      value: true,
      hint: "Interactables are visible",
      options: [true, false],
    },
  }));

  return (
    <Canvas shadows="basic">
      <Suspense>
        <Room />
        <Photos />
        <Furniture />
        <Snow />
        <Fire />
        <Interactables />
        <PerspectiveCamera
          makeDefault
          near={1}
          far={500}
          fov={75}
          position={cameraPosition}
        />
        <Camera freeCamera={true} />
        <Outdoors position={[40,10,10]}/>
        <Stars
          radius={100}
          count={2500}
          factor={6}
          saturation={0}
          fade={true}
        />
        <Lights />
        {/* <Environment background={false} preset={"night"}/> */}
      </Suspense>
    </Canvas>
  );
};

export default Scene;
