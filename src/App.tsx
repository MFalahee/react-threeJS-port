// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import * as React from "react";
import {
  Stats,
  Loader,
  KeyboardControls,
  KeyboardControlsEntry,
} from "@react-three/drei";
import { Leva } from "leva";
import Scene from "./components/Scene";
import "./index.scss";

enum Controls {
  forward = "forward",
  back = "back",
  left = "left",
  right = "right",
  up = "up",
  down = "down",
}
function App() {
  const keyMap = React.useMemo<KeyboardControlsEntry<Controls>[]>(() => {
    return [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.up, keys: ["KeyX"] },
      { name: Controls.down, keys: ["KeyZ"] },
    ];
  }, []);
  return (
    <>
      <KeyboardControls map={keyMap}>
        <Scene />
      </KeyboardControls>
      <Loader
        containerStyles={{ backgroundColor: "black" }}
        innerStyles={{
          backgroundColor: "#black",
          color: "white",
          fontSize: "1.5rem",
        }}
        barStyles={{ backgroundColor: "white" }}
        dataStyles={{ backgroundColor: "black" }}
        dataInterpolation={(p) => `Falahee.dev - Loading ${p.toFixed(2)}%`}
        initialState={(active: boolean) => active}
      ></Loader>
      <Leva collapsed />
      <Stats />
    </>
  );
}

export default App;
