import React from "react";
import { EffectComposer, Outline } from "@react-three/postprocessing";
import { BlendFunction, KernelSize } from "postprocessing";
interface EffectsProps {
  interactBlink: boolean;
}

const Effects: React.FC<EffectsProps> = (props) => {
  return (
    <EffectComposer multisampling={8} disableNormalPass autoClear={false}>
      {props.interactBlink ? (
        <Outline
          blendFunction={BlendFunction.SCREEN}
          edgeStrength={5}
          pulseSpeed={0.5}
          visibleEdgeColor={0xffffff}
          hiddenEdgeColor={0x000000}
          blur
          kernelSize={KernelSize.VERY_LARGE}
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
  );
};
export default Effects;
