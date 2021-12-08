import { useEffect, useRef } from "react";
import { DefaultLayout } from "@components/DefaultLayout";
import type { NextPage } from "next";
import * as THREE from "three";

const ThreeIntroLine: NextPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container == null) return;

    const DEFAULT_WIDTH = 500;
    const DEFAULT_HEIGHT = 500;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(DEFAULT_WIDTH, DEFAULT_HEIGHT);
    container.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(
      45,
      DEFAULT_WIDTH / DEFAULT_HEIGHT,
      1,
      500
    );

    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color();

    //create a blue LineBasicMaterial
    const material = new THREE.LineBasicMaterial({
      color: 0x0000ff,
      linewidth: 3,
    });

    const points = [];
    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const line = new THREE.Line(geometry, material);

    scene.add(line);
    renderer.render(scene, camera);

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <DefaultLayout ref={containerRef}>ThreeIntroCube</DefaultLayout>;
};

export default ThreeIntroLine;
