// src/components/canvas/Stars.jsx
import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

function Stars() {
  const ref = useRef();
  const [positions] = useState(
    () => random.inSphere(new Float32Array(2000 * 3), { radius: 1.2 })
  );
  useFrame((_, d) => {
    if (!ref.current) return;
    ref.current.rotation.x -= d * 0.1;
    ref.current.rotation.y -= d * 0.15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial transparent size={0.01} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
}

export default function StarsCanvas() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)} // transparent
      >
        <Suspense fallback={null}>
          <Stars />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}