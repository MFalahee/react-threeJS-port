import React, { useEffect, Suspense, useCallback } from "react";
import * as THREE from "three";
// @ts-ignore
import * as TWEEN from "@tweenjs/tween.js";
import { Canvas } from "@react-three/fiber";
import { useCursor } from "@react-three/drei";
import { Selection } from "@react-three/postprocessing";
import Camera from "./Camera";
import StaticModels from "./models/StaticModels";
import { Model as LaptopScreen } from "./models/LaptopScreen";
import { Model as Laptop } from "./models/Laptop";
import { Model as Photos } from "./models/Photos";
import { default as Effects } from "./Effects";

const Scene: React.FC = () => {
  const [interactBlink, setInteractBlink] = React.useState(true);

  // laptop screen states
  const [transformScreen, setTransformScreen] = React.useState(true);

  // camera states
  const [prevCamPosition, setPrevCamPosition] = React.useState(
    new THREE.Vector3(13, 14, 5)
  );
  const [moveCameraToBookshelf, setMoveCameraToBookshelf] =
    React.useState(false);
  const [moveCameraToLaptop, setMoveCameraToLaptop] = React.useState(false);
  useCursor(!interactBlink, "pointer", "auto");

  // refs to pass to models
  const cameraRef = React.useRef<THREE.PerspectiveCamera>(null!);

  // for tween camera pan purposes
  const cameraTweenPositionTargets = {
    bookshelf: new THREE.Vector3(14.92, 12.43, 18.89),
    laptop: new THREE.Vector3(26.2, 4.2, 10.4),
  };

  // click handlers for camera pan
  function handleLaptopClick() {
    if (moveCameraToLaptop === true) {
      setMoveCameraToLaptop(false);
      setTransformScreen(true);
    } else {
      setPrevCamPosition(cameraRef.current.position);
      setMoveCameraToLaptop(true);
    }
  }

  // click handlers for camera pan
  function handlePhotoClick() {
    if (moveCameraToBookshelf === true) {
      setMoveCameraToBookshelf(false);
    } else {
      setMoveCameraToBookshelf(true);
    }
  }
  const moveBookshelf = useCallback(() => {
    let tween = new TWEEN.Tween(cameraRef.current.position)
      .to(cameraTweenPositionTargets.bookshelf, 2000)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onComplete(() => {
        // at bookshelf
        // add disable for photo frames and instead enlarge photos or zoom up to them -- TODO
      });
    return tween.start();
  }, [cameraRef]);

  // for tween camera pan purposes
  const moveLaptop = useCallback(() => {
    let tween = new TWEEN.Tween(cameraRef.current.position)
      .to(cameraTweenPositionTargets.laptop, 2000)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onComplete(() => {
        // at laptop
        // disable screen transform
        setTransformScreen(false);
      });
    return tween.start();
  }, [cameraRef]);

  // for camera panning effect on click
  useEffect(() => {
    if (moveCameraToBookshelf) {
      moveBookshelf();
    }
    if (moveCameraToLaptop) {
      moveLaptop();
    }
  }, [moveCameraToBookshelf, moveCameraToLaptop]);

  return (
    <Canvas>
      <Suspense>
        {/* static models */}
        <StaticModels />
        {/* interactable models*/}
        <LaptopScreen transformBool={transformScreen} />

        {/* camera */}
        <Camera
          cameraRef={cameraRef}
          prevCamPosition={prevCamPosition}
          toBookshelf={moveCameraToBookshelf}
          toLaptop={moveCameraToLaptop}
          tweenPositionTargets={cameraTweenPositionTargets}
          lookAtBookshelf={moveCameraToBookshelf}
          lookAtLaptop={moveCameraToLaptop}
        />
        {/* selection for outline effect on laptop/bookshelf */}
        <Selection>
          <Effects interactBlink={interactBlink} />
          <Laptop
            transformBool={transformScreen}
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
          {/* <Photos
            onClick={() => {
              handlePhotoClick();
            }}
            onPointerOver={() => {
              setInteractBlink(false);
            }}
            onPointerLeave={() => {
              setInteractBlink(true);
            }}
          /> */}
        </Selection>
        {/* embedded HTML page on laptop */}
      </Suspense>
    </Canvas>
  );
};

export default Scene;
