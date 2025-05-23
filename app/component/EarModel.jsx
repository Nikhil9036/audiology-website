import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function EarModel() {
  const gltf = useGLTF('/Ear1.glb');  // Make sure ear.glb is in the public folder

  return (
    <primitive 
      object={gltf.scene} 
      scale={2}             // Adjust scale to fit view nicely
      position={[0, 0, 0]}  // Center model
    />
  );
}
