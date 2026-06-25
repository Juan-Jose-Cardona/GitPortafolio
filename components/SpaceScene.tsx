"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import SolarSystem3D from "@/components/SolarSystem3D";
import type {
  PortfolioSelection,
  PortfolioSystem,
} from "@/data/portfolioData";

type SpaceSceneProps = {
  systems: PortfolioSystem[];
  selected: PortfolioSelection | null;
  onSelect: (selection: PortfolioSelection) => void;
};

const systemPositions: [number, number, number][] = [
  [0, -0.5, -1.7],
  [-4.5, 1.7, 2.4], 
  [5.5, -5.5, -3.8],
  [-5.4, -5, -2.5],
  [4.5, 2.8, 3],
];

// obtiene posicion del sistema
function getSystemPosition(index: number): [number, number, number] {
  return systemPositions[index] ?? [0, 0, -index * 3];
}

// configura luces de escena
function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.58} />
      <directionalLight position={[6, 8, 7]} intensity={1.8} />
      <pointLight position={[0, 5, 6]} color="#89d8ff" intensity={18} distance={18} />
    </>
  );
}

// renderiza escena espacial completa
export default function SpaceScene({ systems, selected, onSelect }: SpaceSceneProps) {
  return (
    <section id="top" className="space-scene" aria-label="Portafolio espacial 3d">
      

      <Canvas
        className="scene-canvas"
        camera={{ position: [0, 3.6, 11.5], fov: 50 }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#06152d"]} />
        <fog attach="fog" args={["#06152d", 12, 31]} />

        <SceneLights />

        <Stars
          radius={90}
          depth={52}
          count={2800}
          factor={4}
          saturation={0}
          fade
          speed={0.35}
        />

        {systems.map((system, systemIndex) => (
          <SolarSystem3D
            key={system.id}
            system={system}
            systemIndex={systemIndex}
            position={getSystemPosition(systemIndex)}
            selected={selected}
            onSelect={onSelect}
          />
        ))}

        <OrbitControls
          makeDefault
          enableDamping
          dampingFactor={0.08}
          enablePan
          enableZoom
          enableRotate
          minDistance={4.5}
          maxDistance={22}
          target={[0, -0.4, -1.8]}
        />
      </Canvas>
    </section>
  );
}
