import * as THREE from "three";
import { displayPaintingInfo, hidePaintingInfo } from "./paintingInfo.js";
import { updateMovement } from "./movement.js";

export const setupRendering = (
  scene,
  camera,
  renderer,
  paintings,
  controls,
  walls
) => {
  const clock = new THREE.Clock();

  let render = function () {
    const delta = clock.getDelta();

    updateMovement(delta, controls, camera, walls);

    // Only check for paintings if the user has started (controls are locked)
    if (controls.isLocked) {
      const distanceThreshold = 8;
      let paintingToShow;
      paintings.forEach((painting) => {
        const distanceToPainting = camera.position.distanceTo(painting.position);
        if (distanceToPainting < distanceThreshold) {
          paintingToShow = painting;
        }
      });

      if (paintingToShow) {
        displayPaintingInfo(paintingToShow.userData.info);
      } else {
        hidePaintingInfo();
      }
    } else {
      hidePaintingInfo();
    }

    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };

  render();
};
