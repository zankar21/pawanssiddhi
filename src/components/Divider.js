// src/components/Divider.jsx
import React from 'react';
import clsx from 'clsx';

const SVG_PATHS = {
  wave:    'M0,64 C150,192 350,0 500,128 L500,00 L0,0 Z',
  zigzag:  'M0,64 L125,0 L250,64 L375,0 L500,64 L500,00 L0,0 Z',
  tilt:    'M0,80 L500,0 L500,00 L0,0 Z',
};

export default function Divider({
  shape = 'wave',           // 'wave' | 'zigzag' | 'tilt'
  color = '#F3F4F6',
  speed = 'normal',         // 'slow' | 'normal' | 'fast'
  flip = false,
  animate = true,           // toggle animation on/off
  delay = 0,                // animation-delay in seconds
}) {
  const animClass = animate
    ? `animate-divider-${shape}-${speed}`
    : '';
  return (
    <div className="overflow-hidden">
      <svg
        viewBox="0 0 500 128"
        preserveAspectRatio="none"
        className={clsx(
          'block w-full h-20 origin-center',
          flip && 'rotate-180',
          animClass
        )}
        style={animate ? { animationDelay: `${delay}s` } : {}}
      >
        <path d={SVG_PATHS[shape]} fill={color} />
      </svg>
    </div>
  );
}
