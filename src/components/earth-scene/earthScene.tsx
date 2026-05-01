import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";
import { EarthModel } from "./earthModel";

export const EarthScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />

      <Suspense fallback={null}>
        <Stage environment="city" shadows={false}>
          <EarthModel />
        </Stage>
      </Suspense>

      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};
