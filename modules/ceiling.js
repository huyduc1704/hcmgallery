import * as THREE from "three";

// create a function that takes a scene and a textureLoader as arguments that will be passed in from main.js where the createCeiling is called
export const createCeiling = (scene, textureLoader) => {
  // Load the Vietnam Flag texture
  const colorTexture = textureLoader.load("/img/vietnam_flag.png");

  // Set texture parameters
  // colorTexture.wrapS = colorTexture.wrapT = THREE.RepeatWrapping; // Might tile the flag, let's see. For a big ceiling, maybe tile or stretch?
  // Let's try tiling it slightly or just stretching it. The ceiling is 45x40.
  // Ideally a flag should probably be one big image or a pattern.
  // Let's stick to the user's request "ceiling is the flag".
  // So maybe no repeat, just stretch.
  colorTexture.colorSpace = THREE.SRGBColorSpace;

  const ceilingGeometry = new THREE.PlaneGeometry(45, 40);
  const ceilingMaterial = new THREE.MeshBasicMaterial({
    map: colorTexture,
    side: THREE.DoubleSide,
  });
  const ceilingPlane = new THREE.Mesh(ceilingGeometry, ceilingMaterial);

  ceilingPlane.rotation.x = Math.PI / 2;

  ceilingPlane.position.y = 10;

  scene.add(ceilingPlane);
};
