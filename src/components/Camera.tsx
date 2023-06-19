import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";

interface CameraProps {
  makeDefault?: boolean;
  toBookshelf?: boolean;
  fromBookshelf?: boolean;
  toLaptop?: boolean;
  fromLaptop?: boolean;
}
export default function Camera(props: CameraProps) {
  const cameraStartPosition: [number, number, number] = [10, 25, -30];
  const ref = useRef<THREE.PerspectiveCamera>(null!);

  function moveCameraToBookshelf() {
    // left bookshelf pos = [1.92, 5.43, 22.89]
  }

  function moveCameraToLaptop() {
    // laptop group pos = [25.85, 3.44, 11.71]
  }

  useFrame(() => {
    const { camera, clock } = useThree();
    console.log(camera.position);
    console.log(clock.elapsedTime);
  });
  return (
    <>
      <PerspectiveCamera
        makeDefault
        near={1}
        far={500}
        fov={50}
        ref={ref}
        position={ref.current ? ref.current.position : cameraStartPosition}
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
    </>
  );
}
