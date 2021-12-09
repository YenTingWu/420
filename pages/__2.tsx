import { useEffect, useRef, useState, useCallback } from "react";
import { DefaultLayout } from "@components/DefaultLayout";
import { SEO } from "@components/SEO";
import type { NextPage } from "next";
import { Button } from "@chakra-ui/button";
import { HStack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import * as THREE from "three";

const ThreeIntroLine: NextPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reset, setReset] = useState<boolean>(false);

  const handleReset = useCallback(() => setReset((prev) => !prev), []);

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
      color: 0x0fa3ff,
      linewidth: 3,
    });

    for (let i = 0; i < 100; i++) {
      const points = createRandomVector3(500);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material);
      scene.add(line);
    }

    renderer.render(scene, camera);

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, [reset]);

  return (
    <>
      <SEO title="Three Intro Line" description="Practice 2 from three js" />
      <DefaultLayout ref={containerRef}>
        <HStack spacing="10" mb="5">
          <chakra.span>ThreeIntroCube</chakra.span>
          <Button variant="ghost" onClick={handleReset}>
            Reset
          </Button>
        </HStack>
      </DefaultLayout>
    </>
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
