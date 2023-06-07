import { OrbitControls } from "@react-three/drei";


type cameraProps = {
  freeCamera: boolean;
};

export default function Camera(props: cameraProps) {
  if (props.freeCamera) {
    return (
      <OrbitControls
          target={[15, 10, 15]}
          enableZoom={true}
          enablePan={true}
          maxDistance={15}
          zoomSpeed={1}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          minAzimuthAngle={Math.PI / 1.5}
          maxAzimuthAngle={Math.PI + Math.PI / 2}
        />
      // <>
      //   <OrbitControls
      //     target={[0, 0, 0]}
      //     maxDistance={100}
      //     enableZoom={true}
      //     enablePan={true}
      //     zoomSpeed={1}
      //   />
      // </>
    );
  }
  else
    return (
      <>
        <OrbitControls
          target={[15, 10, 15]}
          enableZoom={true}
          enablePan={false}
          maxDistance={1}
          zoomSpeed={0.7}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          minAzimuthAngle={Math.PI / 1.5}
          maxAzimuthAngle={Math.PI + Math.PI / 2}
        />
      </>
    )}
