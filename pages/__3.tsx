import { useEffect, useRef } from "react";
import type { NextPage } from "next";
import { DefaultLayout } from "@components/DefaultLayout";
import * as THREE from "three";

const Chandelier: NextPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container == null) return;
  }, []);

  return <DefaultLayout ref={containerRef}>Chandelier</DefaultLayout>;
};

export default Chandelier;
