// src/components/HeroWithForm.js
import React from 'react';

export default function HeroWithForm() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-industrial.jpg')" }}
    >
      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/textures/hero-pattern.png')",
          backgroundRepeat: 'repeat',
          opacity: 0.08,
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-primary/60"></div>

      {/* Centered Content Card */}
      <div className="relative z-10 w-full flex justify-center items-center min-h-screen px-2">
        <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 md:p-12 max-w-3xl"
          style={{ boxShadow: "0 10px 32px 0 rgba(0,0,0,0.24)" }}
        >
          <h2 className="font-bold text-accent text-2xl md:text-3xl mb-1 drop-shadow-lg">
            Premium Industrial Supplies
          </h2>
          <h3 className="text-white text-lg md:text-xl mb-6 font-semibold" style={{textShadow:'0 2px 10px rgba(0,0,0,0.22)'}}>
            Engineered for Excellence
          </h3>
          <h1
            className="text-white font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-8 leading-tight"
            style={{
              textShadow: '0 4px 24px rgba(0,0,0,0.33), 0 1px 0 #222'
            }}
          >
            Delivering precision-engineered<br />
            solutions and elite protective<br />
            gear that elevate safety and<br />
            performance.
          </h1>
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#contact"
              className="px-7 py-3 bg-accent text-white font-semibold rounded-full shadow-md hover:bg-yellow-600 transition text-lg"
            >
              Get a Quote
            </a>
            <a
              href="#services"
              className="px-7 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition text-lg"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
