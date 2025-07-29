// src/components/UseCaseGrid.jsx
import React from 'react';

export default function UseCaseGrid({ cases }) {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {cases.map(uc => (
        <div key={uc.id} className="glass p-6 text-center">
          <span className="text-4xl block mb-2">{uc.icon}</span>
          <h3 className="font-heading text-xl mb-1 text-charcoal">{uc.title}</h3>
          <p className="text-slate">{uc.description}</p>
        </div>
      ))}
    </div>
  );
}