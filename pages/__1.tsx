import { useEffect, useRef } from "react";
import { DefaultLayout } from "@components/DefaultLayout";
import { SEO } from "@components/SEO";
import type { NextPage } from "next";
import * as THREE from "three";

const ThreeIntroCube: NextPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container == null) return;

    const DEFAULT_WIDTH = 500;
    const DEFAULT_HEIGHT = 500;

    const scene = new THREE.Scene();
    const color1 = new THREE.Color("skyblue");

    scene.background = color1;

    const camera = new THREE.PerspectiveCamera(
      // Field of view
      75,
      // Aspect ratio
      DEFAULT_WIDTH / DEFAULT_HEIGHT,
      // Near
      0.1,
      // Far
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(DEFAULT_WIDTH, DEFAULT_HEIGHT);

    container.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshNormalMaterial();

    // A mesh is an object that takes a geometry, and applies a material to it, which we then can insert to our scene, and move freely around.
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.05;
      cube.rotation.y += 0.1;

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <SEO title="Three Intro Cube" description="Practice 1 from three js" />
      <DefaultLayout ref={containerRef}>ThreeIntroCube</DefaultLayout>
    </>
  );
};

export default ThreeIntroCube;
