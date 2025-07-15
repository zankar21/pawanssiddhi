// src/components/Product3D.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html, useProgress } from '@react-three/drei';

// Simple loader UI
function Loader() {
  const { progress } = useProgress();
  return <Html center>{Math.round(progress)}% loaded</Html>;
}

function Model() {
  // adjust path to where you put your model
  const { scene } = useGLTF('/model.glb', true);
  return <primitive object={scene} scale={1} />;
}

export default function Product3D() {
  return (
    <section id="product-showcase" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-semibold">Explore Our Flagship Product</h2>
      </div>
      <div className="h-96">
        <Canvas camera={{ position: [0, 1, 3] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Suspense fallback={<Loader />}>
            <Model />
          </Suspense>
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
    </section>
  );
}
