import { useControls, Leva } from "leva";

const Controls = ({ scene }: { scene: any }) => {
  const { add } = useControls<Leva>("Scene", { collapsed: true });

  add(scene, "roomVisible").onChange((value: boolean) => {
    scene.children[0].visible = value;
  });

  add(scene, "outdoorsVisible").onChange((value: boolean) => {
    scene.children[1].visible = value;
  });

  add(scene, "cameraType", ["track", "orbit"]).onChange((value: string) => {
    const camera = scene.getObjectByName("camera");
    if (value === "track") {
      camera.position.set(0, 0, 0);
      camera.lookAt(0, 0, 0);
    } else if (value === "orbit") {
      camera.position.set(0, 50, 200);
      camera.lookAt(0, 0, 0);
    }
  });

  return null;
};

export default Controls;
