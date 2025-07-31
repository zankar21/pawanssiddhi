// src/components/FeatureGrid.jsx
import React from "react";
import {
  Cog8ToothIcon,
  WrenchIcon,
  ArrowPathIcon,
  FireIcon,
  BuildingLibraryIcon,
  BoltIcon,
  BriefcaseIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "Maintenance & Overhaul",
    description: "Comprehensive machinery maintenance and complete system overhauls to ensure peak performance.",
    icon: Cog8ToothIcon,
  },
  {
    title: "Mechanical Installation",
    description: "Precision mechanical installation of industrial equipment with certified alignment and calibration.",
    icon: WrenchIcon,
  },
  {
    title: "Rotating Equipment Repair",
    description: "Expert repair services for pumps, compressors, turbines and other rotating machinery.",
    icon: ArrowPathIcon,
  },
  {
    title: "Welding & Fabrication",
    description: "Custom metal fabrication and high-quality welding solutions for all structural needs.",
    icon: FireIcon,
  },
  {
    title: "Civil & Structural Works",
    description: "Robust civil construction and structural support for industrial facilities.",
    icon: BuildingLibraryIcon,
  },
  {
    title: "Electrical & Instrumentation",
    description: "Advanced electrical installations and instrumentation for precise process control.",
    icon: BoltIcon,
  },
  {
    title: "Turnkey Project Execution",
    description: "End-to-end project management from design to commissioning.",
    icon: BriefcaseIcon,
  },
  {
    title: "24/7 Emergency Services",
    description: "Round-the-clock support and rapid response to minimize downtime.",
    icon: ClockIcon,
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-16 bg-gradient-to-b from-off-white to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-12">
          Our Service Offerings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition"
              >
                <div className="flex items-center justify-center mb-4 h-16 w-16 rounded-full bg-primary/10 shadow-inner">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
