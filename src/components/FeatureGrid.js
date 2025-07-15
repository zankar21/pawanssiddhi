// src/components/FeatureGrid.js
import React from 'react';
import { ShoppingCartIcon, CubeIcon, TruckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Raw Materials',
    desc: 'High-grade steel, alloys & polymers sourced from top manufacturers.',
    icon: ShoppingCartIcon,
  },
  {
    title: 'Packaging',
    desc: 'Secure, eco-friendly packaging solutions tailored to your needs.',
    icon: CubeIcon,
  },
  {
    title: 'Logistics',
    desc: 'On-time delivery and comprehensive tracking across the globe.',
    icon: TruckIcon,
  },
];

export default function FeatureGrid() {
  return (
    <section id="services" className="bg-white py-24 scroll-snap-start">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-heading text-charcoal">
          Our <span className="text-accent">Services</span>
        </h2>
      </div>
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="group bg-off-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
          >
            <f.icon className="h-12 w-12 text-primary mb-4 mx-auto group-hover:text-accent transition-colors" />
            <h3 className="text-2xl font-semibold text-charcoal mb-2 group-hover:text-accent transition-colors">
              {f.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
