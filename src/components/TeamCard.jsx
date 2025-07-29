// src/components/TeamCard.jsx
import React from 'react';

export default function TeamCard({ name, role, photoUrl }) {
  return (
    <div className="card flex flex-col items-center p-6 text-center bg-white">
      <img
        src={photoUrl}
        alt={name}
        className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
      />
      <h3 className="text-xl font-heading text-charcoal mb-1">{name}</h3>
      <p className="text-sm text-slate">{role}</p>
    </div>
  );
}
