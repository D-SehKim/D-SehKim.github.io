import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const BackgroundModel = () => {
  const modelRef = useRef();
  const { scene } = useGLTF('./sakura.glb'); // Make sure to replace with your model's pat

  let default_speed = 0.0002;

  useFrame(() => {
    // Rotate the model slightly over time if needed
    modelRef.current.rotation.y += default_speed;
  });

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={[5, 5, 5]} // Adjust the scale of the model to fit the background
      position={[2, -20, -30]} // Position it further back
    />
  );
};

export default function Background() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 30 }}
      style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, background:'#f0ebe3'}}
    > 
      <ambientLight intensity={3} />
      <BackgroundModel />
    </Canvas>
  );
}
