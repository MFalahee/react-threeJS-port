import React, { useEffect } from "react";

import { OrbitControls, PerspectiveCamera, Sphere } from "@react-three/drei";
import * as THREE from "three";
import TWEEN from "@tweenjs/tween.js";
import { useFrame } from "@react-three/fiber";

interface CameraProps {
  makeDefault?: boolean;
  tweenPositionTargets: { laptop: THREE.Vector3; bookshelf: THREE.Vector3 };
  prevCamPosition: THREE.Vector3;
  toBookshelf?: boolean;
  fromBookshelf?: boolean;
  toLaptop?: boolean;
  fromLaptop?: boolean;
  lookAtLaptop?: boolean;
  lookAtBookshelf?: boolean;
  cameraRef: React.MutableRefObject<THREE.PerspectiveCamera>;
}
const Camera: React.FC<CameraProps> = (props) => {
  const helpers = false;
  const cameraLookAtTargets = {
    bookshelf: new THREE.Vector3(1.5, 9.43, 18.5),
    laptop: new THREE.Vector3(25.7, 4.0, 11.9),
  };

  useFrame((state, delta) => {
    TWEEN.update();
    if (props.lookAtLaptop && props.cameraRef.current && !TWEEN.isPlaying)
      props.cameraRef.current.lookAt(cameraLookAtTargets.laptop);
    if (props.lookAtBookshelf && props.cameraRef.current && !TWEEN.isPlaying)
      props.cameraRef.current.lookAt(cameraLookAtTargets.bookshelf);
  });

  useEffect(() => {});
  if (props.toBookshelf || props.toLaptop) {
    return (
      <PerspectiveCamera
        makeDefault
        near={1}
        far={500}
        fov={50}
        ref={props.cameraRef ? props.cameraRef : null}
        position={
          props.cameraRef && props.cameraRef.current
            ? props.cameraRef.current.position
            : props.prevCamPosition
        }
      />
    );
  } else
    return (
      <>
        <PerspectiveCamera
          makeDefault
          near={1}
          far={500}
          fov={60}
          ref={props.cameraRef ? props.cameraRef : null}
          position={
            props.cameraRef && props.cameraRef.current
              ? props.cameraRef.current.position
              : props.prevCamPosition
          }
        />
        <OrbitControls
          target={[40, 11, 10]}
          enableZoom={true}
          enablePan={true}
          maxDistance={15}
          zoomSpeed={1}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          minAzimuthAngle={Math.PI / 1.3}
          maxAzimuthAngle={Math.PI + Math.PI / 2}
        />

        {/* sphere helpers for camera pos/targets */}
        {helpers ? (
          <>
            <Sphere position={cameraLookAtTargets.laptop} scale={0.1}>
              <meshBasicMaterial attach="material" color="hotpink" />
            </Sphere>
            <Sphere position={cameraLookAtTargets.bookshelf} scale={0.1}>
              <meshBasicMaterial attach="material" color="hotpink" />
            </Sphere>
            <Sphere position={props.tweenPositionTargets.laptop} scale={0.1}>
              <meshBasicMaterial attach="material" color="blue" />
            </Sphere>
            <Sphere position={props.tweenPositionTargets.bookshelf} scale={0.1}>
              <meshBasicMaterial attach="material" color="blue" />
            </Sphere>{" "}
          </>
        ) : null}
      </>
    );
};

export default Camera;
