import React from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

export function FloatingCube({ position = [0, 0, 0], color = '#4f46e5' }) {
  const meshRef = React.useRef<THREE.Mesh>(null);
  
  const [spring] = useSpring(() => ({
    from: { scale: [1, 1, 1], rotation: [0, 0, 0] },
    to: async (next) => {
      while (true) {
        await next({ scale: [1.2, 1.2, 1.2], rotation: [0, Math.PI, 0] });
        await next({ scale: [1, 1, 1], rotation: [0, 0, 0] });
      }
    },
    config: { duration: 3000 },
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime) * 0.003;
    }
  });

  return (
    <animated.mesh
      ref={meshRef}
      position={position}
      scale={spring.scale}
      rotation={spring.rotation}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </animated.mesh>
  );
}