"use client";

import React, { useEffect, useRef } from "react";
import type { NextPage } from "next";
import { DefaultLayout } from "@components/DefaultLayout";
import { SEO } from "@components/SEO";
import { Heading } from "@chakra-ui/layout";
import * as THREE from "three";
import type { GUI } from "dat.gui";

const Chandelier: NextPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let gui: GUI | null = null;

    if (container == null) return;
    (async () => {
      const WINDOW_WIDTH = window.innerWidth;
      const WINDOW_HEIGHT = window.innerHeight;

      const DEFAULT_WIDTH = Math.min(WINDOW_WIDTH, 500);
      const DEFAULT_HEIGHT = Math.min(WINDOW_HEIGHT, 500);

      // Loading
      const textureLoader = new THREE.TextureLoader();

      const normalTexture = textureLoader.load("textures/normal_map.png");

      // Render
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.domElement.style.position = "absolute";
      renderer.domElement.style.mixBlendMode = "exclusion";

      renderer.setSize(DEFAULT_WIDTH, DEFAULT_HEIGHT);
      container.appendChild(renderer.domElement);

      // Scene
      const scene = new THREE.Scene();

      // Objects
      const geometry = new THREE.SphereBufferGeometry(0.5, 64, 64);

      // Material
      const material = new THREE.MeshStandardMaterial();

      material.metalness = 0.7;
      material.roughness = 0.2;
      material.normalMap = normalTexture;

      material.color = new THREE.Color(0x292929);

      // Mesh
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      // Lights1
      const pointLight = new THREE.PointLight(0xffffff, 0.4);
      pointLight.position.set(2, 3, 4);

      scene.add(pointLight);

      // Light2
      const pointLight2 = new THREE.PointLight(0xff0000, 2.5);
      pointLight2.position.set(-1.86, 1, -1.65);
      pointLight2.intensity = 10;

      scene.add(pointLight2);

      // Light3
      const pointLight3 = new THREE.PointLight(0x75ff, 2.5);
      pointLight3.position.set(1.86, -1.52, -1.65);
      pointLight3.intensity = 10;

      scene.add(pointLight3);

      // Camera
      const camera = new THREE.PerspectiveCamera(
        45,
        DEFAULT_WIDTH / DEFAULT_HEIGHT,
        0.1,
        1000
      );

      camera.position.set(0, 0, 2);
      camera.lookAt(0, 0, 0);

      /**
       *  Animation
       */

      let mouseX = 0;
      let mouseY = 0;

      let targetX = 0;
      let targetY = 0;

      const windowX = window.innerWidth / 2;
      const windowY = window.innerHeight / 2;

      document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX - windowX;
        mouseY = e.clientY - windowY;
      });

      const clock = new THREE.Clock();

      const animate = () => {
        requestAnimationFrame(animate);

        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;

        const elapsedTime = clock.getElapsedTime();

        // Update objects
        sphere.rotation.y = 0.5 * elapsedTime;

        sphere.rotation.x += 0.5 * (targetX - sphere.rotation.x);
        sphere.rotation.y += -0.15 * (targetX - sphere.rotation.y);
        sphere.rotation.z += 0.05 * (targetY - sphere.rotation.z);

        renderer.render(scene, camera);
      };

      animate();
    })();

    return () => {
      if (gui) gui.destroy();
      container.childNodes.forEach((node) => {
        if (node instanceof HTMLCanvasElement) {
          container.removeChild(node);
        }
      });
    };
  }, []);

  return (
    <>
      <SEO
        title="Chandelier"
        description="IIIIIIIII gonna dance!!!!!!!!!! From the chandelieeeeeeeeeeeeeeeeee!!!! From the chandelieeeeeeeeeeeeeeeeee"
      />
      <DefaultLayout bgColor="rgb(24, 24, 24)" backward ref={containerRef}>
        <Heading
          color="white"
          fontWeight="bold"
          fontSize={["1rem", "5rem", "5rem", "5rem", "8rem"]}
          letterSpacing={["20px", "30px"]}
        >
          CHANDELIER
        </Heading>
      </DefaultLayout>
    </>
  );
};

export default Chandelier;
