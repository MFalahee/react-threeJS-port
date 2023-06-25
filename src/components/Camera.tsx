import {
  OrbitControls,
  PerspectiveCamera,
  useHelper,
  Sphere,
} from "@react-three/drei";
import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import { useFrame } from "@react-three/fiber";
import React, { useRef, forwardRef } from "react";

interface CameraProps {
  makeDefault?: boolean;
  lookAtTargets: { laptop: THREE.Vector3; bookshelf: THREE.Vector3 };
  tweenPositionTargets: { laptop: THREE.Vector3; bookshelf: THREE.Vector3 };
  toBookshelf?: boolean;
  fromBookshelf?: boolean;
  toLaptop?: boolean;
  fromLaptop?: boolean;
  cameraRef: React.MutableRefObject<THREE.PerspectiveCamera>;
}
const Camera: React.FC<CameraProps> = (props) => {
  const cameraStartPosition: THREE.Vector3 = new THREE.Vector3(13, 14, 5);
  const [movedCamera, setMovedCamera] = React.useState(false);

  let count = 0;
  useFrame(() => {
    if (props.cameraRef && props.cameraRef.current) {
      if (count % 1000) {
      }
    }
  });
  return (
    <>
      <PerspectiveCamera
        makeDefault
        near={1}
        far={500}
        fov={50}
        ref={props.cameraRef}
        position={
          props.cameraRef && props.cameraRef.current
            ? props.cameraRef.current.position
            : cameraStartPosition
        }
      />
      <OrbitControls
        target={[15, 10, 15]}
        enableZoom={true}
        enablePan={true}
        maxDistance={15}
        zoomSpeed={1}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        minAzimuthAngle={Math.PI / 1.3}
        maxAzimuthAngle={Math.PI + Math.PI / 2}
      />
      <Sphere position={props.lookAtTargets.laptop} scale={0.5}>
        <meshBasicMaterial attach="material" color="hotpink" />
      </Sphere>
      <Sphere position={props.lookAtTargets.bookshelf} scale={0.5}>
        <meshBasicMaterial attach="material" color="hotpink" />
      </Sphere>
      <Sphere position={props.tweenPositionTargets.laptop} scale={0.1}>
        <meshBasicMaterial attach="material" color="blue" />
      </Sphere>
      <Sphere position={props.tweenPositionTargets.bookshelf} scale={0.1}>
        <meshBasicMaterial attach="material" color="blue" />
      </Sphere>
    </>
  );
};

export default Camera;
