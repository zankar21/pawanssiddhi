// src/components/HeroGradient.jsx
import React from "react";

export default function HeroGradient() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-[80vh] w-full px-4"
      style={{
        background: "linear-gradient(90deg, #23B0A8 0%, #E6FAFA 100%)",
      }}
    >
      <h1 className="text-4xl md:text-6xl font-heading text-gray-800 mb-8 text-center drop-shadow-lg">
        The future of industrial services, delivered today.
      </h1>
      <a
        href="#contact"
        className="px-8 py-3 bg-white text-primary font-bold rounded-full shadow-xl text-2xl mb-4 hover:bg-primary hover:text-white transition"
        style={{ boxShadow: '0 8px 24px 0 rgba(0,0,0,0.09)' }}
      >
        Get Started
      </a>
      <a
        href="#services"
        className="text-3xl font-heading text-primary font-semibold mt-2 hover:underline"
      >
        Our Services
      </a>
    </section>
  );
}
