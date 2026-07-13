import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PIN_COUNT = 14;

function latLonToVec3(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function Pins() {
  const pins = useMemo(() => {
    return Array.from({ length: PIN_COUNT }, () => {
      const lat = (Math.random() - 0.5) * 140;
      const lon = Math.random() * 360 - 180;
      return { pos: latLonToVec3(lat, lon, 1.52), delay: Math.random() * 2.4 };
    });
  }, []);

  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    refs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const s = 1 + 0.6 * Math.max(0, Math.sin((t + pins[i].delay) * 1.6));
      mesh.scale.setScalar(s);
      const mat = mesh.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.35 + 0.5 * Math.max(0, Math.sin((t + pins[i].delay) * 1.6));
    });
  });

  return (
    <>
      {pins.map((p, i) => (
        <mesh key={i} position={p.pos} ref={(el) => (refs.current[i] = el)}>
          <sphereGeometry args={[0.022, 12, 12]} />
          <meshBasicMaterial color="#0b0b0f" transparent opacity={0.7} />
        </mesh>
      ))}
    </>
  );
}

function WireGlobe() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.09;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.5, 12]} />
        <meshBasicMaterial color="#d3d1d6" wireframe transparent opacity={0.6} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.48, 48, 48]} />
        <meshBasicMaterial color="#f5f5f5" transparent opacity={0.5} />
      </mesh>
      <Pins />
    </group>
  );
}

export default function Globe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.8]}
    >
      <ambientLight intensity={0.6} />
      <WireGlobe />
    </Canvas>
  );
}
