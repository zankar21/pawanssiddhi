// src/components/SensorCard.jsx
import React from 'react';

export default function SensorCard({ sensor }) {
  return (
    <div className="text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition">
      <img src={sensor.icon} alt={sensor.name} className="mx-auto h-16 mb-4"/>
      <h4 className="text-xl font-semibold mb-2">{sensor.name}</h4>
      <p className="text-gray-600">{sensor.description}</p>
    </div>
  );
}
