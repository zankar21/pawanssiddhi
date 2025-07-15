// src/components/ProcessSection.js
import React from 'react';
import { motion } from 'framer-motion';
import Divider from './Divider';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const steps = [
  { title: 'Discover', desc: 'We analyze requirements and site conditions to identify critical needs.' },
  { title: 'Design', desc: 'Craft tailored solutions, from supply specifications to engineering prototypes.' },
  { title: 'Deploy', desc: 'Implement products and systems with full project management and rigorous quality checks.' },
  { title: 'Maintain', desc: 'Provide ongoing service, inspections, and support to ensure maximum uptime.' },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative bg-gradient-to-b from-white to-gray-100 py-24 scroll-snap-start overflow-hidden">
      {/* Top wave divider */}
      <div className="absolute inset-x-0 top-0 -mt-24 overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-32">
          <path d="M0,80 C300,0 900,160 1200,80 L1200,120 L0,120 Z" fill="#f3f4f6" />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-heading text-center text-charcoal mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Our Process
        </motion.h2>

        <div className="space-y-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col md:flex-row items-center md:items-start gap-6"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              {/* Step number */}
              <div className="flex-shrink-0">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-accent text-white font-semibold">
                  {idx + 1}
                </div>
              </div>

              {/* Step content */}
              <div className="md:w-3/4 space-y-2 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-charcoal flex items-center">
                  {step.title}
                  <ChevronRightIcon className="h-6 w-6 text-accent ml-2" />
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="relative mt-24">
        <Divider color="white" flip wave />
      </div>
    </section>
  );
}
