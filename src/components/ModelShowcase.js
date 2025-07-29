// src/components/ModelShowcase.js
import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html, useProgress } from '@react-three/drei';

// Define your available models
const models = [
  { label: 'Safety Helmet', path: '/models/helmet.glb', scale: 1 },
  { label: 'Industrial Valve', path: '/models/valve.glb', scale: 0.7 },
  { label: 'Pipe Assembly', path: '/models/pipes.glb', scale: 1 },
];

// Loader fallback for 3D model loading progress
function Loader() {
  const { progress } = useProgress();
  return <Html center className="text-gray-700 font-body">{Math.round(progress)}% loaded</Html>;
}

// Renders a GLTF model at given path and scale
function Model({ path, scale }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={scale} />;
}

// Main showcase component with dropdown
export default function ModelShowcase() {
  const [selected, setSelected] = useState(models[0]);

  return (
    <section id="product-showcase" className="py-20 bg-white">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-heading mb-4">3D Product Showcase</h2>
        <select
          className="p-2 border rounded font-body"
          value={selected.label}
          onChange={e => {
            const found = models.find(m => m.label === e.target.value);
            setSelected(found);
          }}
        >
          {models.map(m => (
            <option key={m.label} value={m.label}>
              {m.label}
            </option>
          ))}
        </select>
      </div>
      <div className="h-96 w-full bg-gray-50">
        <Canvas camera={{ position: [0, 1.5, 3] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={<Loader />}>
            <Model path={selected.path} scale={selected.scale} />
          </Suspense>
          <OrbitControls enableZoom />
        </Canvas>
      </div>
    </section>
  );
}
