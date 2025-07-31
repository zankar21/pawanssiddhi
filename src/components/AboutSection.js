// src/components/AboutSection.js
import React from "react";
// import Divider from "./Divider";  // You can comment out this import since Divider won't be used now
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function AboutSection() {
  return (
    <section id="about" className="bg-off-white py-24">
      {/* Section Header */}
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
          About Us
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-700 mb-2">
          Founded in 2020, Pawanssiddhi Supplier Pvt Ltd partners with leading industry players to deliver specialized power-plant supplies, civil & electrical projects, and maintenance services.
        </p>
        <p className="max-w-2xl mx-auto text-base text-slate-600">
          Our commitment to <span className="font-semibold text-accent">innovation</span> and <span className="font-semibold text-accent">quality</span> drives success worldwide.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="flex items-start p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
          <ChevronRightIcon className="h-8 w-8 text-accent mr-5 mt-1" />
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">Our Mission</h3>
            <p className="text-gray-700">
              To provide socially responsible solutions with exceptional client satisfaction.
            </p>
          </div>
        </div>
        <div className="flex items-start p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
          <ChevronRightIcon className="h-8 w-8 text-accent mr-5 mt-1" />
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">Our Vision</h3>
            <p className="text-gray-700">
              To become a global leader through ethics, innovation, and relentless service.
            </p>
          </div>
        </div>
      </div>

      {/* Removed Divider component here to eliminate blank space */}
      {/* <div className="mt-8">
        <Divider color="white" wave />
      </div> */}
    </section>
  );
}
