// src/components/HeroWithForm.js
import React from 'react';
import heroPattern from '../assets/hero-pattern.png';

export default function HeroWithForm() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-industrial.jpg')" }}
    >
      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/textures/hero-pattern.png')",
          backgroundRepeat: 'repeat',
          opacity: 0.1,
        }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-primary/70"></div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-start justify-center min-h-screen">
        <h1 className="text-[3rem] md:text-[4rem] font-heading text-white mb-4 leading-tight">
          <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">
            Premium Industrial Supplies
          </span>
          <br />
          Engineered for Excellence
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
          Delivering precision-engineered solutions and elite protective gear that elevate safety and performance.
        </p>
        <div className="flex space-x-4">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-accent text-white font-semibold rounded-lg shadow-lg hover:bg-primary transition"
          >
            Get a Quote
          </a>
          <a
            href="#services"
            className="inline-block px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
