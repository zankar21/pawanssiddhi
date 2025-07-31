// src/pages/HomePage.jsx
import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <>
      <section
        className="flex flex-col items-center justify-center min-h-[85vh] px-4 w-full"
        style={{
          background: "linear-gradient(90deg, #23b2a7 0%, #c9efec 100%)",
        }}
      >
        {/* Main heading */}
        <h1
          className="text-7xl md:text-9xl font-extrabold text-orange-500 mb-6 drop-shadow-lg tracking-wide text-center"
          style={{
            letterSpacing: "0.06em",
            textShadow: "0 8px 28px rgba(36,173,155,0.25)",
          }}
        >
          Welcome to Pawanssiddhi
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-700 mb-6 font-medium text-center max-w-2xl">
          The future of industrial services, delivered today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-10">
          <a
            href="/contact"
            className="bg-gradient-to-r from-accent to-primary text-white text-xl font-bold py-3 px-8 rounded-full shadow-lg hover:from-primary hover:to-accent hover:scale-105 transform transition duration-200"
            style={{ boxShadow: "0 6px 24px 0 rgba(36,173,155,0.18)" }}
          >
            Get a Quote
          </a>
          <a
            href="/services"
            className="border-2 border-primary text-primary text-xl font-bold py-3 px-8 rounded-full hover:bg-primary hover:text-white hover:scale-105 transform transition duration-200 bg-white"
            style={{ boxShadow: "0 6px 24px 0 rgba(36,173,155,0.10)" }}
          >
            Our Services
          </a>
        </div>

        {/* Tagline */}
        <div className="text-3xl md:text-4xl font-heading text-primary font-bold opacity-90 text-center">
          Delivering reliability. Enabling growth.
        </div>
      </section>

      {/* About and Contact sections */}
      <AboutSection />
      <ContactSection />
    </>
  );
}
