import { useEffect, useRef } from "react";
import type { NextPage } from "next";
import { DefaultLayout } from "@components/DefaultLayout";
import { SEO } from "@components/SEO";
import * as THREE from "three";

const Chandelier: NextPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container == null) return;

    const DEFAULT_WIDTH = 500;
    const DEFAULT_HEIGHT = 500;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer();
    const color = new THREE.Color();
    const camera = new THREE.PerspectiveCamera(
      45,
      DEFAULT_WIDTH / DEFAULT_HEIGHT,
      0.1,
      1000
    );

    scene.background = color;
    renderer.setSize(DEFAULT_WIDTH, DEFAULT_HEIGHT);
    container.appendChild(renderer.domElement);

    camera.position.z = 5;

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <SEO
        title="Chandelier"
        description="IIIIIIIII gonna dance!!!!!!!!!! From the chandelieeeeeeeeeeeeeeeeee!!!! From the chandelieeeeeeeeeeeeeeeeee"
      />
      <DefaultLayout backward ref={containerRef}>
        Chandelier
      </DefaultLayout>
    </>
  );
};

export default Chandelier;
