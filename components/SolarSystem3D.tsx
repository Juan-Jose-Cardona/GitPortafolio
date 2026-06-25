"use client";

import { useMemo, useRef } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type {
  PortfolioItem,
  PortfolioSelection,
  PortfolioSystem,
} from "@/data/portfolioData";

type SolarSystem3DProps = {
  system: PortfolioSystem;
  systemIndex: number;
  position: [number, number, number];
  selected: PortfolioSelection | null;
  onSelect: (selection: PortfolioSelection) => void;
};

type PlanetMeshProps = {
  item: PortfolioItem;
  itemIndex: number;
  systemIndex: number;
  totalItems: number;
  system: PortfolioSystem;
  selected: PortfolioSelection | null;
  onSelect: (selection: PortfolioSelection) => void;
};

type SolarOrbitProps = {
  radius: number;
  color: string;
};

type PlanetOrbitData = {
  radius: number;
  speed: number;
  angle: number;
  size: number;
  height: number;
};

const orbitRadii = [1.25, 1.85, 2.45, 3.05, 3.65, 4.25, 4.85];

// crea geometria del anillo
function createOrbitGeometry(radius: number) {
  const points: THREE.Vector3[] = [];
  const segments = 160;

  for (let index = 0; index <= segments; index += 1) {
    const angle = (index / segments) * Math.PI * 2;
    points.push(
      new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius * 0.72)
    );
  }

  return new THREE.BufferGeometry().setFromPoints(points);
}

// calcula datos orbitales del planeta
function getPlanetOrbit(
  itemIndex: number,
  systemIndex: number,
  totalItems: number
): PlanetOrbitData {
  const orbitIndex = itemIndex % orbitRadii.length;
  const orbitCycle = Math.floor(itemIndex / orbitRadii.length);
  const hasManyPlanets = totalItems > 6;

  return {
    radius: orbitRadii[orbitIndex] + orbitCycle * 0.38,
    speed: 0.2 + orbitIndex * 0.045 + systemIndex * 0.012,
    angle: itemIndex * 2.399 + systemIndex * 0.7,
    size: hasManyPlanets ? 0.15 + orbitIndex * 0.012 : 0.17 + orbitIndex * 0.025,
    height: (orbitIndex - 2.5) * 0.07,
  };
}

// dibuja el anillo orbital
function SolarOrbit({ radius, color }: SolarOrbitProps) {
  const orbitLine = useMemo(() => {
    const geometry = createOrbitGeometry(radius);
    const material = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.32,
    });

    return new THREE.Line(geometry, material);
  }, [radius, color]);

  return <primitive object={orbitLine} />;
}

// dibuja planeta interactivo
function PlanetMesh({
  item,
  itemIndex,
  systemIndex,
  totalItems,
  system,
  selected,
  onSelect,
}: PlanetMeshProps) {
  const planetRef = useRef<THREE.Group>(null);
  const orbit = useMemo(
    () => getPlanetOrbit(itemIndex, systemIndex, totalItems),
    [itemIndex, systemIndex, totalItems]
  );
  const isSelected = selected?.type === "item" && selected.item.id === item.id;

  // actualiza posicion orbital
  useFrame(({ clock }) => {
    if (!planetRef.current) return;

    const time = clock.getElapsedTime() * orbit.speed + orbit.angle;
    planetRef.current.position.set(
      Math.cos(time) * orbit.radius,
      orbit.height + Math.sin(time * 1.8) * 0.08,
      Math.sin(time) * orbit.radius * 0.72
    );
  });

  return (
    <group ref={planetRef}>
      <mesh
        scale={isSelected ? 1.35 : 1}
        onClick={(event) => {
          event.stopPropagation();
          onSelect({ type: "item", system, item });
        }}
      >
        <sphereGeometry args={[orbit.size, 32, 32]} />
        <meshStandardMaterial
          color={item.color}
          emissive={item.color}
          emissiveIntensity={isSelected ? 0.9 : 0.35}
          roughness={0.35}
          metalness={0.08}
        />
      </mesh>

      <Html center distanceFactor={8} position={[0, orbit.size + 0.24, 0]}>
        <button
          type="button"
          className={`planet-tooltip ${isSelected ? "is-selected" : ""}`}
          onClick={(event) => {
            event.stopPropagation();
            onSelect({ type: "item", system, item });
          }}
        >
          {item.title}
        </button>
      </Html>
    </group>
  );
}

// dibuja sistema solar del cv
export default function SolarSystem3D({
  system,
  systemIndex,
  position,
  selected,
  onSelect,
}: SolarSystem3DProps) {
  const systemRef = useRef<THREE.Group>(null);
  const isSelected = selected?.type === "system" && selected.system.id === system.id;
  const visibleOrbitCount = Math.min(Math.max(system.items.length, 3), orbitRadii.length);

  // anima flotacion del sistema
  useFrame(({ clock }) => {
    if (!systemRef.current) return;
    systemRef.current.position.y =
      position[1] + Math.sin(clock.getElapsedTime() * 0.55 + systemIndex) * 0.12;
  });

  return (
    <group
      ref={systemRef}
      position={position}
      rotation={[0.18, systemIndex * 0.18, 0.04]}
    >
      {orbitRadii.slice(0, visibleOrbitCount).map((radius) => (
        <SolarOrbit key={radius} radius={radius} color={system.accent} />
      ))}

      <pointLight color={system.accent} intensity={18} distance={7} decay={2} />

      <mesh
        scale={isSelected ? 1.18 : 1}
        onClick={(event) => {
          event.stopPropagation();
          onSelect({ type: "system", system });
        }}
      >
        <sphereGeometry args={[0.55, 48, 48]} />
        <meshStandardMaterial
          color={system.accent}
          emissive={system.accent}
          emissiveIntensity={1.25}
          roughness={0.25}
        />
      </mesh>

      <Html center distanceFactor={7} position={[0, 0.02, 0]}>
        <button
          type="button"
          className={`system-label ${isSelected ? "is-selected" : ""}`}
          onClick={(event) => {
            event.stopPropagation();
            onSelect({ type: "system", system });
          }}
        >
          {system.title}
        </button>
      </Html>

      {system.items.map((item, itemIndex) => (
        <PlanetMesh
          key={item.id}
          item={item}
          itemIndex={itemIndex}
          systemIndex={systemIndex}
          totalItems={system.items.length}
          system={system}
          selected={selected}
          onSelect={onSelect}
        />
      ))}
    </group>
  );
}
