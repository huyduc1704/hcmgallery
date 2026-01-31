import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export const loadStatueModel = (scene) => {
  const loader = new GLTFLoader();

  // Load the statue model
  loader.load(
    "/models/statue_bac_ho.glb",
    (gltf) => {
      const statue = gltf.scene;

      // Position the statue at the center
      // Floor is at -Math.PI (~ -3.14)
      statue.position.set(0, 0.39, 0);

      // Scale up significantly
      statue.scale.set(9, 9, 9); 
      
      statue.rotation.y = 6.283185; // Face the entrance

      statue.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          
          if (child.material.map) {
            child.material.map.anisotropy = 16; 
            // Log texture size to verify
            console.log("Statue Texture:", child.material.map.image.width, "x", child.material.map.image.height);
          }

          // Bronze-like material settings
          child.material.metalness = 0.6; // Slightly more metallic
          child.material.roughness = 0.4; // Slightly smoother
        }
      });

      scene.add(statue);
      console.log("Statue loaded successfully!");
    },
    undefined,
    (error) => {
      console.error("An error occurred while loading the statue model.", error);
    }
  );
};
