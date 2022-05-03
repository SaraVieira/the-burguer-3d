import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/modelDraco.gltf')

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.set(
      0.1 + Math.cos(t / 4.5) / 20,
      Math.sin(t / 4) / 4,
      0.3 - (1 + Math.sin(t / 4)) / 8
    )
    group.current.position.y = (1 + Math.sin(t / 2)) / 20
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.patty.geometry}
        material={materials.patty}
        position={[0, -0.04, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.onion001.geometry}
        material={nodes.onion001.material}
        position={[0.61, 0.16, -0.19]}
        rotation={[0, 0, -0.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.onion.geometry}
        material={nodes.onion.material}
        position={[-0.24, 0.18, 0.16]}
        rotation={[0.01, 0, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.onion003.geometry}
        material={nodes.onion003.material}
        position={[0.42, 0.16, 0.36]}
        rotation={[0.05, 0, -0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickle.geometry}
        material={nodes.pickle.material}
        position={[0.15, 0.16, -0.62]}
        rotation={[-0.1, 0, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickle001.geometry}
        material={nodes.pickle001.material}
        position={[0.63, 0.19, 0.15]}
        rotation={[0.04, 0, -0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.toip_bun.geometry}
        material={nodes.toip_bun.material}
        position={[0, 0.58, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.onion002.geometry}
        material={nodes.onion002.material}
        position={[-0.47, 0.17, -0.43]}
        rotation={[-0.08, 0, 0.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickle002.geometry}
        material={nodes.pickle002.material}
        position={[0.03, 0.21, -0.18]}
        rotation={[-0.05, 0, -0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickle003.geometry}
        material={nodes.pickle003.material}
        position={[-0.51, 0.2, 0.27]}
        rotation={[0.01, 0, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottom_bun.geometry}
        material={nodes.bottom_bun.material}
        position={[0, -0.33, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.onion004.geometry}
        material={nodes.onion004.material}
        position={[-0.07, 0.17, 0.55]}
        rotation={[0.09, 0, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['Material.001']}
        position={[0, 0.06, 0]}
      />
    </group>
  )
}

useGLTF.preload('/modelDraco.gltf')
