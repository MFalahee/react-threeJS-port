import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Lights: React.FC = () => {
  let debugColor = "#5EFF00";
  let blue1 = "#3B5EC4";
  let blue2 = "#627ED0";
  const ref = useRef(null!);
  const fireLightRef1 = React.useRef<THREE.PointLight>(null!);
  const fireLightRef2 = React.useRef<THREE.PointLight>(null!);
  const [targetIntensity1, setTargetIntensity1] = React.useState(
    Math.random() * 0.2
  );
  const [targetIntensity2, setTargetIntensity2] = React.useState(
    Math.random() * 0.2
  );

  useFrame(() => {
    // Update light intensity for flickering effect
    if (fireLightRef1.current && fireLightRef2.current) {
      // Gradually move towards the target intensity
      fireLightRef1.current.intensity +=
        (targetIntensity1 - fireLightRef1.current.intensity) * 0.05;
      fireLightRef2.current.intensity +=
        (targetIntensity2 - fireLightRef2.current.intensity) * 0.05;

      // Occasionally update the target intensity
      if (Math.random() < 0.01) {
        // 1% chance per frame
        setTargetIntensity1(Math.random() * 2);
        setTargetIntensity2(Math.random() * 2);
      }
    }
  });
  return (
    <group ref={ref}>
      {/* hanging lights */}
      <pointLight
        position={[32, 25, 12.6]}
        intensity={0.3}
        shadow-mapSize={1024}
        shadow-bias={0.01}
        color={"white"}
      />
      <pointLight
        position={[15.8, 26, 12.1]}
        intensity={0.3}
        shadow-mapSize={1024}
        shadow-bias={0.01}
        color={"white"}
      />
      {/* helpers */}

      {/* moon light */}
      <directionalLight
        position={[150, 100, -10]}
        intensity={2.5}
        shadow-mapSize={1024}
        shadow-bias={0.01}
        color={blue2}
      />

      {/* fireplace lighting*/}
      <pointLight
        ref={fireLightRef1}
        position={[20, 0, 36]}
        shadow-mapSize={512}
        shadow-bias={0.01}
        color={0xd84a05}
      />
      <pointLight
        ref={fireLightRef2}
        intensity={0.5}
        shadow-mapSize={512}
        shadow-bias={0.01}
        position={[20, 0, 36]}
        color={0xe89005}
      />
    </group>
  );
};
export default Lights;
