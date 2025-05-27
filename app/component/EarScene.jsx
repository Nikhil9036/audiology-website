import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function EarModel() {
  const gltf = useGLTF('/Ear1.glb');
  return <primitive object={gltf.scene} scale={3} />;
}

export default function EarScene() {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [0, 0, 50], fov: 50 }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[55, 55, 55]} intensity={1} />
      <Suspense fallback={null}>
        <EarModel />
      </Suspense>
      <OrbitControls
        enableRotate={false}   // disable manual rotate
        enableZoom={false}     // disable zoom
        enablePan={false}      // disable pan
        autoRotate={true}      // enable auto rotate
        autoRotateSpeed={1.5}  // slower smooth rotation, adjust as needed
      />
    </Canvas>
  );
}
