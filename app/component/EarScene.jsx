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
      camera={{ position: [0, 0, 50], fov: 50 }} // Camera moved back to fit larger model
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[55, 55, 55]} intensity={1} />
      <Suspense fallback={null}>
        <EarModel />
      </Suspense>
      <OrbitControls
        enableZoom={false}     // Zoom disabled as you wanted
        enablePan={false}      // Pan disabled as you wanted
        autoRotate={true}     // No auto rotation
        maxPolarAngle={Math.PI / 3} // Optional: limit vertical rotation
        minPolarAngle={Math.PI / 3} // Fix vertical rotation at mid-level (horizontal rotation only)
      />
    </Canvas>
  );
}
