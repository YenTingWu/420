import { useEffect, useRef } from "react"
import { DefaultLayout } from "@components/DefaultLayout"
import type { NextPage } from "next"
import * as THREE from "three"

const ThreeIntroCube: NextPage = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (container == null) return

    const DEFAULT_WIDTH = 500
    const DEFAULT_HEIGHT = 500

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      DEFAULT_WIDTH / DEFAULT_HEIGHT,
      0.1,
      1000
    )
  }, [])

  return <DefaultLayout ref={containerRef}>ThreeIntroCube</DefaultLayout>
}

export default ThreeIntroCube
