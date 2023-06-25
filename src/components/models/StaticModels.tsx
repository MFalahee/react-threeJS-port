import React from "react";
import { Stars } from "@react-three/drei";
import Lights from "../Lights";
import { Model as Art } from "./Art";
import { Model as Books } from "./Books";
import { Model as Couch } from "./Couch";
import { Model as Lamp } from "./Lamp";
import { Model as LogsTools } from "./LogsTools";
import { Model as Music } from "./Music";
import { Model as Projector } from "./Projector";
import { Model as Room } from "./Room";
import { Model as RugTable } from "./RugTable";
import { Model as Skis } from "./Skis";
import { Model as Bookshelf } from "./Bookshelf";
import { Model as BookshelfItems } from "./BookshelfItems";
import { Model as Outside } from "./Outside";
import { default as Snow } from "./Snow";
import { default as Fire } from "./Fire";

const StaticModels: React.FC = () => {
  return (
    <>
      <Outside position={[40, 10, 10]} />
      <Stars radius={100} count={2500} factor={6} saturation={0} fade={true} />
      <Bookshelf />
      <Bookshelf position={[0, 0, -8.5]} />
      <BookshelfItems position={[0, 0, -0.3]} />
      <Snow />
      <Fire />
      <Room />
      <Lights />
      <Projector />
      <Lamp />
      <Art />
      <Books />
      <Couch />
      <LogsTools />
      <Music />
      <RugTable />
      <Skis />
    </>
  );
};

export default StaticModels;
