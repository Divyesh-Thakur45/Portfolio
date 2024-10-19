// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";

// export default function Model({ ...props }) {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/computer.glb");
//   return (
//     <group
//       position={[0, 0.8, 0]}
//       rotation={[Math.PI / 7, -Math.PI / 2, 0]}
//       scale={[1.6, 1.6, 1.6]}
//       ref={group}
//       {...props}
//       dispose={null}
//     >
//       <mesh
//         geometry={nodes.Cube.geometry}
//         material={nodes.Cube.material}
//         position={[-0.01, -0.04, 0]}
//         scale={[0.03, 0.86, 1.54]}
//       />
//       <mesh
//         geometry={nodes.Cube001.geometry}
//         material={materials["Material.002"]}
//         position={[0.7, -0.86, -0.02]}
//         rotation={[0, 0, -1.57]}
//         scale={[0.03, 0.74, 1.54]}
//       />
//       <mesh
//         geometry={nodes.Plane.geometry}
//         material={materials["Material.001"]}
//         position={[0.03, 0, 0]}
//         rotation={[0, 0, -1.57]}
//         scale={[0.75, 1, 1.43]}
//       />
//       <mesh
//         geometry={nodes.Plane001.geometry}
//         material={materials["Material.003"]}
//         position={[0.73, -0.82, 0]}
//         rotation={[0, 1.56, 0]}
//         scale={[1.34, 1, 0.5]}
//       />
//       <mesh
//         geometry={nodes.Text.geometry}
//         material={materials["Material.004"]}
//         position={[0.11, -0.22, 1.23]}
//         rotation={[1.57, -0.02, -1.57]}
//         scale={[0.73, 1, 0.78]}
//       />
//     </group>
//   );
// }

// useGLTF.preload("/computer.glb");
