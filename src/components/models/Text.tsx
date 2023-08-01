import { Center, Text3D } from "@react-three/drei";
import * as React from "react";
const Text: React.FC = () => {
  const texts = [
    "I'm a web dev that loves to build and tinker \nwith new things.",
    "Please explore this site to learn more about me and my work!",
    "Oh, you can control the camera using WASD (or the arrow keys). \n Right click dragging and using the scroll wheel also help navigate!  \nTry it out!",
  ];
  const [bottomText, setBottomText] = React.useState<string>(texts[0]);

  function changeBottomText() {
    console.log("clicked");
    // change text on button click to next text in array.
    let index = texts.indexOf(bottomText);
    if (index === texts.length - 1) {
      // if at end of array, go back to beginning.
      setBottomText(texts[0]);
      return;
    }
    setBottomText(texts[index + 1]);
  }
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
      <Center top left position={[40, 7.5, 8.5]}>
        <Text3D
          rotation={[0, -Math.PI / 2, 0]}
          size={0.5}
          letterSpacing={-0.06}
          font="/open_sans.json"
        >
          {bottomText}
          <meshStandardMaterial color="white" />
        </Text3D>
      </Center>
      <Center
        top
        left
        position={[40, 5.5, 9.5]}
        onPointerOver={() => {
          // change cursor to pointer on hover
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          // change cursor back to default on hover out
          document.body.style.cursor = "default";
        }}
        onClick={() => changeBottomText()}
      >
        <Text3D
          font="/open_sans.json"
          rotation={[0, -Math.PI / 2, 0]}
          size={0.7}
          bevelEnabled={true}
          height={0.2}
          lineHeight={0.3}
          letterSpacing={-0.06}
          bevelSize={0.17}
          bevelThickness={0.3}
          bevelOffset={0.02}
        >
          {`--->`}
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  );
};

export default Text;
