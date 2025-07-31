import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <>
      <section
        className="flex flex-col items-center justify-center min-h-[85vh] px-4 w-full"
        style={{
          background: "linear-gradient(90deg, #23b2a7 0%, #c9efec 100%)",
        }}
      >
        {/* Animated Welcome Text */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 mb-3 tracking-wide"
          style={{ letterSpacing: "0.06em" }}
        >
          Welcome to Pawanssiddhi
        </motion.h2>

        {/* Animated Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-8 text-center max-w-3xl"
          style={{ letterSpacing: "0.02em" }}
        >
          The future of industrial services, delivered today.
        </motion.h1>

        {/* Buttons with hover animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 w-full max-w-md"
        >
          <a
            href="/contact"
            className="flex-1 text-center bg-gradient-to-r from-accent to-primary text-white text-lg sm:text-xl font-bold py-3 px-6 rounded-full shadow-lg hover:from-primary hover:to-accent hover:scale-105 transform transition duration-300"
            style={{ boxShadow: "0 6px 24px 0 rgba(36,173,155,0.18)" }}
          >
            Get a Quote
          </a>
          <a
            href="/services"
            className="flex-1 text-center border-2 border-primary text-primary text-lg sm:text-xl font-bold py-3 px-6 rounded-full bg-white hover:bg-primary hover:text-white hover:scale-105 transform transition duration-300"
            style={{ boxShadow: "0 6px 24px 0 rgba(36,173,155,0.10)" }}
          >
            Our Services
          </a>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-xl sm:text-2xl md:text-3xl font-heading text-primary font-bold opacity-90 text-center max-w-3xl"
        >
          Delivering reliability. Enabling growth.
        </motion.div>
      </section>

      {/* About and Contact sections */}
      <AboutSection />
      <ContactSection />
    </>
  );
}
