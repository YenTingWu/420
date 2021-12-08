import { useEffect, useRef, useState } from "react";
import { DefaultLayout } from "@components/DefaultLayout";
import type { NextPage } from "next";
import { Button } from "@chakra-ui/button";
import { HStack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import * as THREE from "three";

const ThreeIntroLine: NextPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reset, setReset] = useState<number>(0);

  const handleReset = () => setReset(Math.random());

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

    camera.position.set(40, 10, 50);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color();

    //create a blue LineBasicMaterial
    const material = new THREE.LineBasicMaterial({
      color: 0x0000ff,
      linewidth: 3,
    });

    const points = createRandomVector3(500);
    const points2 = createRandomVector3(1000);
    const points3 = createRandomVector3(5000);

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const geometry2 = new THREE.BufferGeometry().setFromPoints(points2);
    const geometry3 = new THREE.BufferGeometry().setFromPoints(points3);

    const line = new THREE.Line(geometry, material);
    const line2 = new THREE.Line(geometry2, material);
    const line3 = new THREE.Line(geometry3, material);

    scene.add(line);
    scene.add(line2);
    scene.add(line3);

    renderer.render(scene, camera);

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, [reset]);

  return (
    <DefaultLayout ref={containerRef}>
      <HStack spacing="10" mb="5">
        <chakra.span>ThreeIntroCube</chakra.span>
        <Button variant="ghost" onClick={handleReset}>
          Reset
        </Button>
      </HStack>
    </DefaultLayout>
  );
};

const createSUPERRandomNumber = (i: number) => {
  const isPositive = Math.random() >= 0.5 ? 1 : -1;
  return (
    isPositive *
    Math.floor(Math.pow(Math.random() + i, 2)) *
    Math.pow(Math.random() + i, 2)
  );
};

const createRandomVector3 = (amount: number) =>
  new Array(amount).fill(null).map((_, i) => {
    return new THREE.Vector3(
      createSUPERRandomNumber(i),
      createSUPERRandomNumber(i),
      createSUPERRandomNumber(i)
    );
  });

export default ThreeIntroLine;
