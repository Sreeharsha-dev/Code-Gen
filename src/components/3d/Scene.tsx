import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { FloatingCube } from './FloatingCube';

export function Scene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <FloatingCube position={[-4, 2, -5]} color="#3b82f6" />
        <FloatingCube position={[4, -2, -2]} color="#6366f1" />
        <FloatingCube position={[0, 3, -3]} color="#8b5cf6" />
        <FloatingCube position={[-3, -1, -4]} color="#ec4899" />
      </Canvas>
    </div>
  );
}