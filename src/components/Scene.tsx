import React, { useRef, Suspense } from "react";
import * as THREE from "three";

import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { Environment, PerspectiveCamera, Stars } from "@react-three/drei";
import Camera from "./Camera";
import Lights from "./Lights";

import { Model as Art } from "./models/Art";
import { Model as Books } from "./models/Books";
import { Model as Bookshelf } from "./models/Bookshelf";
import { Model as BookshelfItems } from "./models/BookshelfItems";
import { Model as Couch } from "./models/Couch";
import { Model as Lamp } from "./models/Lamp";
import { Model as Laptop } from "./models/Laptop";
import { Model as LogsTools } from "./models/LogsTools";
import { Model as Music } from "./models/Music";
import { Model as Outside } from "./models/Outside";
import { Model as Photos } from "./models/Photos";
import { Model as Projector } from "./models/Projector";
import { Model as Room } from "./models/Room";
import { Model as RugTable } from "./models/RugTable";
import { Model as Skis } from "./models/Skis";
import { default as Snow } from "./models/Snow";
import { default as Fire } from "./models/Fire";

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
        {/* passive models */}
        <Room />
        <Outside position={[40, 10, 10]} />
        <Art />
        <Books />
        <Bookshelf />
        <Couch />
        <LogsTools />
        <Music />
        <RugTable />
        <Skis />
        {/* interactable models*/}
        <Laptop />
        <BookshelfItems />
        <Projector />
        <Lamp />
        <Photos />
        {/* effects */}
        <Stars
          radius={100}
          count={2500}
          factor={6}
          saturation={0}
          fade={true}
        />
        <Snow />
        <Fire />

        {/* camera */}
        <PerspectiveCamera
          makeDefault
          near={1}
          far={500}
          fov={75}
          position={cameraPosition}
        />
        <Camera freeCamera={true} />
        <Lights />
        {/* <Environment background={false} preset={"night"}/> */}
      </Suspense>
    </Canvas>
  );
};

export default Scene;
