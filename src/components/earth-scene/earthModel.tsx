import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import type { ThreeElements } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
  };
  materials: {
    ["Scene_-_Root"]: THREE.MeshStandardMaterial;
  };
};

export const EarthModel = (props: ThreeElements["group"]) => {
  const { nodes, materials } = useGLTF("/earth.gltf") as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials["Scene_-_Root"]}
        scale={1}
      />
    </group>
  );
};

useGLTF.preload("/earth.gltf");
