import { Center, Text3D } from "@react-three/drei";
import * as React from "react";
const Text: React.FC = () => {
  const [bottomText, setBottomText] = React.useState<string>("");

  function changeBottomText() {}
  return (
    <>
      <Center top left position={[40, 11.2, 9.5]}>
        <Text3D
          curveSegments={32}
          bevelEnabled={true}
          height={0.5}
          lineHeight={0.6}
          letterSpacing={-0.06}
          bevelSize={0.04}
          bevelThickness={0.1}
          bevelOffset={0.05}
          rotation={[0, -Math.PI / 2, 0]}
          size={1}
          font="/open_sans.json"
        >
          {`Welcome to falahee.dev`}
          <meshNormalMaterial />
        </Text3D>
      </Center>
      <Center top left position={[40, 5.5, 11]}>
        <Text3D
          rotation={[0, -Math.PI / 2, 0]}
          size={0.5}
          letterSpacing={-0.06}
          font="/open_sans.json"
        >
          {`I'm a software engineer that loves to build and tinker \nwith new things.`}
          <meshStandardMaterial color="white" />
        </Text3D>
      </Center>
    </>
  );
};

export default Text;
