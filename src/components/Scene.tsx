import React, { useRef, Suspense } from "react";
import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Stars, useCursor } from "@react-three/drei";
import {
  Outline,
  EffectComposer,
  Selection,
  Bloom,
} from "@react-three/postprocessing";
import { BlendFunction, KernelSize } from "postprocessing";
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
import { default as Effects } from "./Effects";
import { default as Snow } from "./models/Snow";
import { default as Fire } from "./models/Fire";
import { default as ProjectPage } from "./projectView/ProjectPage";

const Scene: React.FC = () => {
  const [interactBlink, setInteractBlink] = React.useState(true);
  const [transformScreen, setTransformScreen] = React.useState(false);
  const cameraRef = React.useRef<THREE.PerspectiveCamera>(null!);
  const [moveCameraToBookshelf, setMoveCameraToBookshelf] =
    React.useState(false);
  const [moveCameraToLaptop, setMoveCameraToLaptop] = React.useState(false);
  useCursor(!interactBlink, "pointer", "auto");

  // for tween purposes
  const cameraLookAtTargets = {
    bookshelf: new THREE.Vector3(1.5, 8.43, 13.89),
    laptop: new THREE.Vector3(25.55, 4.0, 11.91),
  };
  const cameraTweenPositionTargets = {
    bookshelf: new THREE.Vector3(13.92, 10.43, 15.89),
    laptop: new THREE.Vector3(26.5, 4.2, 10),
  };
  function handleLaptopClick() {
    console.log("laptop clicked");
    console.log(cameraRef.current);
    if (moveCameraToLaptop === true) {
      setMoveCameraToLaptop(false);
    } else {
      setMoveCameraToLaptop(true);
    }
  }

  function handlePhotoClick() {
    console.log(cameraRef.current);
    if (moveCameraToBookshelf === true) {
      setMoveCameraToBookshelf(false);
    } else {
      setMoveCameraToBookshelf(true);
    }
  }
  return (
    <Canvas>
      <Suspense>
        {/* passive models */}
        <Lights />
        <Projector />
        <Lamp />
        <Stars
          radius={100}
          count={2500}
          factor={6}
          saturation={0}
          fade={true}
        />
        <Snow />
        <Fire />
        <Room />
        <Outside position={[40, 10, 10]} />
        <Art />
        <Books />
        <Couch />
        <LogsTools />
        <Music />
        <RugTable />
        <Skis />
        {/* interactable models*/}
        <Bookshelf />
        <Bookshelf position={[0, 0, -8.5]} />
        <BookshelfItems position={[0, 0, -0.3]} />
        <ProjectPage visible={true} />
        {/* camera */}
        <Camera
          cameraRef={cameraRef}
          toBookshelf={moveCameraToBookshelf}
          toLaptop={moveCameraToLaptop}
          lookAtTargets={cameraLookAtTargets}
          tweenPositionTargets={cameraTweenPositionTargets}
        />
        {/* selection for outline effect on laptop/bookshelf */}
        <Selection>
          <Effects interactBlink={interactBlink} />
          <Laptop
            onClick={() => {
              handleLaptopClick();
            }}
            onPointerOver={() => {
              setInteractBlink(false);
            }}
            onPointerLeave={() => {
              setInteractBlink(true);
            }}
          />
          <Photos
            onClick={() => {
              handlePhotoClick();
            }}
            onPointerOver={() => {
              setInteractBlink(false);
            }}
            onPointerLeave={() => {
              setInteractBlink(true);
            }}
          />
        </Selection>
        {/* embedded HTML page on laptop */}
      </Suspense>
    </Canvas>
  );
};

export default Scene;
