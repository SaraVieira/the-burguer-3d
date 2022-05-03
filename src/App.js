import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF
} from '@react-three/drei'
import Model from './Model'

export default function App() {
  return (
    <>
      <div className="grid">
        <div className="left">
          <div>
            We make
            <br />
            The best
            <br />
            burguers in
            <br />
            town
          </div>
        </div>
        <div className="right">
          <h1 className="jumbo">
            The
            <br />
            Shack
          </h1>
        </div>
      </div>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <Suspense fallback={null}>
          <Environment preset="forest" />
          <Model />
          <ContactShadows
            position={[0, -0.6, 0]}
            far={2}
            blur={4}
            opacity={0.5}
          />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  )
}
