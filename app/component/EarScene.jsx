import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function EarModel({ autoRotate }) {
  const gltf = useGLTF('/Ear1.glb');
  const ref = useRef();

  // If manual auto-rotation is needed (like on mobile without OrbitControls)
  useFrame(() => {
    if (autoRotate && ref.current) {
      ref.current.rotation.y += 0.01; // Rotate slowly on Y-axis
      ref.current.rotation.x += 0.002; // Slight X-axis rotation for 3D effect
    }
  });

  return <primitive ref={ref} object={gltf.scene} scale={3} />;
}

export default function EarScene() {
  // Detect if mobile by window width (client-side only)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [0, 0, 50], fov: 50 }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[55, 55, 55]} intensity={1} />
      <Suspense fallback={null}>
        <EarModel autoRotate={isMobile} />
      </Suspense>

      {/* On desktop show OrbitControls with autoRotate */}
      {!isMobile && (
        <OrbitControls
          enableRotate={false}
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={2}
        />
      )}
    </Canvas>
  );
}
