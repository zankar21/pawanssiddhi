// File: src/components/MetricsSection.js
import React from 'react';
import CountUp from 'react-countup';

export default function MetricsSection() {
  const stats = [
    { label: 'Projects Delivered', value: 500, suffix: '+' },
    { label: 'On-Time Rate', value: 99.9, suffix: '%' },
    { label: 'Clients Served', value: 120, suffix: '+' },
  ];

  return (
    <section id="metrics" className="py-20 bg-white text-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map(({ label, value, suffix }) => (
          <div key={label}>
            <h3 className="text-4xl font-heading mb-2">
              <CountUp end={value} duration={2} decimals={value % 1 ? 1 : 0} suffix={suffix} />
            </h3>
            <p className="text-gray-600 font-body">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}