// src/components/AboutSection.js
import React from 'react';
import Divider from './Divider';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-off-white py-24">
      {/* Section Header */}
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-heading text-charcoal mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto text-lg text-slate-700">
          Founded in 2020, Pawanssiddhi Supplier Pvt Ltd partners with leading industry players to deliver specialized power-plant supplies, civil & electrical projects, and maintenance services. Our commitment to innovation and quality drives success worldwide.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-start p-6 bg-white rounded-lg shadow">
          <ChevronRightIcon className="h-6 w-6 text-accent mr-4" />
          <div>
            <h3 className="text-2xl font-semibold text-charcoal mb-2">Our Mission</h3>
            <p className="text-slate-700">
              To provide socially responsible solutions with exceptional client satisfaction.
            </p>
          </div>
        </div>
        <div className="flex items-start p-6 bg-white rounded-lg shadow">
          <ChevronRightIcon className="h-6 w-6 text-accent mr-4" />
          <div>
            <h3 className="text-2xl font-semibold text-charcoal mb-2">Our Vision</h3>
            <p className="text-slate-700">
              To become a global leader through ethics, innovation, and relentless service.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16">
        <Divider color="white" wave />
      </div>
    </section>
  );
}
