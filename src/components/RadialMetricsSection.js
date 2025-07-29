// src/components/RadialMetricsSection.js
import React from 'react';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer
} from 'recharts';
import Divider from './Divider';

const data = [
  { name: 'Projects Delivered', value: 83, fill: 'var(--primary)' },
  { name: 'On-Time Rate (%)', value: 99.9, fill: 'var(--accent)' },
  { name: 'Clients Served', value: 60, fill: 'var(--primary)' },
];

export default function RadialMetricsSection() {
  return (
    <section id="radial-metrics" className="relative bg-offWhite pt-24 pb-24 scroll-snap-start">
      {/* Top wave SVG */}
      <div className="absolute inset-x-0 top-0 -mt-24 overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-32">
          <path
            d="M0,80 C300,0 900,160 1200,80 L1200,120 L0,120 Z"
            fill="var(--off-white)"
          />
        </svg>
      </div>

      <div className="relative container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-heading text-charcoal mb-12 animate-slide-up">
          Performance Metrics
        </h2>

        {/* Chart container with explicit arbitrary heights */}
        <div className="w-full h-[20rem] md:h-[24rem]">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              data={data}
              innerRadius="30%"
              outerRadius="85%"
              startAngle={180}
              endAngle={0}
            >
              <RadialBar
                dataKey="value"
                minAngle={15}
                background
                clockWise
                cornerRadius={20}
                isAnimationActive={true}
                animationDuration={1500}
              />
              <Legend
                iconSize={14}
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{ paddingTop: 24, fontSize: '1rem' }}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom divider */}
      <Divider color="white" flip wave />
    </section>
  );
}
