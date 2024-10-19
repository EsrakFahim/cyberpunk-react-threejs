/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { gsap } from "gsap";
import * as THREE from "three";

function Model() {
      const { scene } = useLoader(GLTFLoader, "./DamagedHelmet.gltf");
      const [rotation, setRotation] = useState({ x: 0, y: 0 });

      useEffect(() => {
            const handleMouseMove = (event) => {
                  const xRotation = (event.clientX / window.innerWidth - 0.5) * Math.PI * 0.1;
                  const yRotation = (event.clientY / window.innerHeight - 0.5) * Math.PI * 0.1;
                  setRotation({ x: yRotation, y: xRotation });
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
      }, []);

      useFrame(() => {
            gsap.to(scene.rotation, {
                  x: rotation.x,
                  y: rotation.y,
                  duration: 1,
                  ease: "power2.out",
            });
      });

      // eslint-disable-next-line react/no-unknown-property
      return <primitive object={scene} />;
}

function Environment() {
      const texture = useLoader(RGBELoader, "./pond_bridge_night_1k.hdr");
      const { scene } = useThree();

      useEffect(() => {
            if (texture) {
                  texture.mapping = THREE.EquirectangularReflectionMapping;
                  scene.environment = texture;
            }
      }, [texture, scene]);

      return null;
}

function CanvasScene() {
      return (
            <Canvas
                  camera={{ fov: 45, position: [0, 0, 3.5] }}
                  gl={{ antialias: true, alpha: true }}
                  style={{ position: "absolute", top: 0, left: 0 }}
            >
                  <ambientLight intensity={0.3} />
                  <Model />
                  <Environment />
            </Canvas>
      );
}

export default CanvasScene;
