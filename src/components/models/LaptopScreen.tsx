import * as React from "react";
import * as THREE from "three";
import { Html } from "@react-three/drei";

interface LaptopScreenProps {
  laptopScreenMeshRef: React.MutableRefObject<THREE.Group>;
  transformBool: boolean;
}

export function Model(props: LaptopScreenProps) {
  const screenPositions = {
    transformed: new THREE.Vector3(0, 0, 0),
    untransformed: new THREE.Vector3(1.01, 0.62, -0.1),
  };
  return (
    <group ref={props.laptopScreenMeshRef} {...props} dispose={null}>
      <mesh position={[25.6, 3.96, 12.11]} rotation={[0.05, -0.325, 0.02]}>
        {props.transformBool ? (
          <Html
            className="screen-div"
            transform
            occlude
            position={screenPositions.transformed}
            rotation={[0, Math.PI, 0]}
          >
            <div className="wrapper">
              <iframe
                className="idle-iframe"
                src="https://mfalahee.github.io/projectpage/"
                title="idle-page"
              />
            </div>
          </Html>
        ) : (
          <Html
            className="screen-div no-transform"
            transform={false}
            position={screenPositions.untransformed}
          >
            <div className="wrapper no-transform">
              <iframe
                className="pp-iframe no-transform"
                src="https://mfalahee.github.io/projectpage/#/pp"
                title="Project Page"
              />
            </div>
          </Html>
        )}
      </mesh>
    </group>
  );
}
