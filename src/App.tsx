// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { Stats, Loader } from "@react-three/drei";
import { Leva } from "leva";
import Scene from "./components/Scene";
import "./index.scss";

function App() {

  

  return (
    <>
      <Scene />
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
