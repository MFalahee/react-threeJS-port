import React, { useRef, Suspense } from "react";
import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import { Canvas } from "@react-three/fiber";
import { useCursor } from "@react-three/drei";
import { Selection } from "@react-three/postprocessing";
import Camera from "./Camera";
import StaticModels from "./models/StaticModels";
import { Model as Laptop } from "./models/Laptop";
import { Model as Photos } from "./models/Photos";
import { default as Effects } from "./Effects";
import { default as ProjectPage } from "./projectView/ProjectPage";

const Scene: React.FC = () => {
  const [interactBlink, setInteractBlink] = React.useState(true);
  const [transformScreen, setTransformScreen] = React.useState(true);
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
      setTransformScreen(true);
    } else {
      setMoveCameraToLaptop(true);
      setTransformScreen(false);
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
        {/* static models */}
        <StaticModels />
        {/* interactable models*/}
        <ProjectPage visible={true} transform={transformScreen} />
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
