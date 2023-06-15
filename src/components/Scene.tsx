import React, { useRef, Suspense } from "react";
import * as THREE from "three";

import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Stars, useCursor } from "@react-three/drei";
import {
  Outline,
  EffectComposer,
  Selection,
  Bloom,
} from "@react-three/postprocessing";
import { BlendFunction, KernelSize } from "postprocessing";
import Camera from "./Camera";
import Lights from "./Lights";

import { Model as Art } from "./models/Art";
import { Model as Books } from "./models/Books";
import { Model as Bookshelf } from "./models/Bookshelf";
import { Model as BookshelfItems } from "./models/BookshelfItems";
import { Model as Couch } from "./models/Couch";
import { Model as Lamp } from "./models/Lamp";
import { Model as Laptop } from "./models/Laptop";
import { Model as LogsTools } from "./models/LogsTools";
import { Model as Music } from "./models/Music";
import { Model as Outside } from "./models/Outside";
import { Model as Photos } from "./models/Photos";
import { Model as Projector } from "./models/Projector";
import { Model as Room } from "./models/Room";
import { Model as RugTable } from "./models/RugTable";
import { Model as Skis } from "./models/Skis";
import { default as Snow } from "./models/Snow";
import { default as Fire } from "./models/Fire";

const Scene: React.FC = () => {
  const [interactBlink, setInteractBlink] = React.useState(true);
  useCursor(!interactBlink, "pointer", "auto");
  return (
    <Canvas>
      <Suspense>
        {/* passive models */}
        <Room />
        <Outside position={[40, 10, 10]} />
        <Art />
        <Books />
        <Couch />
        <LogsTools />
        <Music />
        <RugTable />
        <Skis />
        {/* interactable models*/}
        <Bookshelf />
        <Bookshelf position={[0, 0, -8.5]} />
        <BookshelfItems position={[0, 0, -0.3]} />

        <Projector />
        <Lamp />

        <Stars
          radius={100}
          count={2500}
          factor={6}
          saturation={0}
          fade={true}
        />
        <Snow />
        <Fire />
        {/* camera */}

        <Camera />
        <Lights />
        <Selection>
          <EffectComposer multisampling={8} disableNormalPass autoClear={false}>
            <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.5} />
            {interactBlink ? (
              <Outline
                blendFunction={BlendFunction.SCREEN}
                edgeStrength={2.5}
                pulseSpeed={0.3}
                visibleEdgeColor={0xffffff}
                hiddenEdgeColor={0x000000}
                blur
                kernelSize={KernelSize.SMALL}
              />
            ) : (
              <Outline
                blendFunction={BlendFunction.SCREEN}
                edgeStrength={2}
                pulseSpeed={0.5}
                blur
                kernelSize={KernelSize.VERY_LARGE}
                visibleEdgeColor={0xa900ff}
                hiddenEdgeColor={0xa900ff}
              />
            )}
          </EffectComposer>
          <Laptop
            onPointerOver={() => {
              setInteractBlink(false);
            }}
            onPointerLeave={() => {
              setInteractBlink(true);
            }}
          />
          <Photos />
        </Selection>
      </Suspense>
    </Canvas>
  );
};

export default Scene;
