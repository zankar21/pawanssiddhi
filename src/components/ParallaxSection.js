// src/components/ParallaxSection.js
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

export default function ParallaxSection({ id, bgLayers = [], children, className = 'h-96' }) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>      
      {bgLayers.map((layer, idx) => (
        <Parallax
          key={idx}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${layer.src}')` }}
          speed={layer.speed}
        />
      ))}
      <div className="relative z-10 container mx-auto h-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
}