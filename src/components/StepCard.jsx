// src/components/StepCard.jsx
import React from 'react';

export default function StepCard({ number, title, desc }) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow hover:shadow-lg">
      <div className="text-3xl font-heading text-primary mb-2">{number}</div>
      <h3 className="text-xl font-heading text-charcoal mb-2">{title}</h3>
      <p className="text-slate">{desc}</p>
    </div>
  );
}
