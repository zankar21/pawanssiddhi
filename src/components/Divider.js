// src/components/Divider.js
import React from 'react';

export default function Divider({ color = 'white', flip = false, wave = false }) {
  const transform = flip ? 'scaleX(-1)' : undefined;
  if (wave) {
    // gentle wave
    return (
      <div className="overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20"
          style={{ transform }}
        >
          <path
            d="M0,0 C150,100 350,100 500,50 C650,0 850,100 1200,0 L1200,120 L0,120 Z"
            fill={color}
          />
        </svg>
      </div>
    );
  }
  // angled cut
  return (
    <div className="overflow-hidden leading-none">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-20"
        style={{ transform }}
      >
        <path d="M0,0 L1200,0 L0,120 Z" fill={color} />
      </svg>
    </div>
  );
}
