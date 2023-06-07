import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";


const Lights: React.FC = () => {
  let debugColor = "#5EFF00"
  let blue1 = "#3B5EC4"
  let blue2 = "#627ED0"
  const ref = useRef(null!);
  const lightRef = React.useRef<THREE.PointLight>(null!)
  // color options
    /*  
    new THREE.Color("rgb(252, 67, 3)"),  // Deep orange
    new THREE.Color("rgb(252, 163, 3)"), // Light orange
    new THREE.Color("rgb(252, 215, 3)"), // Yellow
    new THREE.Color("rgb(255, 255, 255)") // White 
    */
  useFrame((state, delta) => {});
  return (
    <group ref={ref}>
      {/* hanging lights */}
      <pointLight
        position={[32, 25, 12.6 ]}
        intensity={.3}
        shadow-mapSize={1024}
        shadow-bias={0.01}
        color={"white"}
      />
      <pointLight
      position={[15.8, 26, 12.1 ]}
      intensity={.3}
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
        position={[20, 0, 36]}
        shadow-mapSize={1024}
        shadow-bias={0.0001}
        color={"rgb(252, 67, 3)"}
      />
      <pointLight
        intensity={.5}
        shadow-mapSize={1024}
        shadow-bias={0.01}
        position={[20, 0, 36]}
        color={"rgb(252, 163, 3)"}
      />




    </group>
  );
};
export default Lights;
