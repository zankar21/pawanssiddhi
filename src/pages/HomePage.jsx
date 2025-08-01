import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import IndustriesSection from '../components/IndustriesSection';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <>
      <section
        className="flex flex-col items-center justify-center min-h-[85vh] px-4 w-full text-center sm:text-left"
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
        >
          Welcome to <br className="sm:hidden" /> Pawanssiddhi
        </motion.h2>

        {/* Animated Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-2xl md:text-3xl font-extrabold text-black mb-8 text-center max-w-3xl leading-snug"
        >
          The future of industrial services, <br className="sm:hidden" /> delivered today.
        </motion.h1>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 w-full max-w-sm sm:max-w-md"
        >
          <a
            href="/contact"
            className="w-full text-center bg-gradient-to-r from-accent to-primary text-white text-base sm:text-lg font-semibold py-3 px-6 rounded-full shadow-md hover:scale-105 transition"
          >
            Get a Quote
          </a>
          <a
            href="/services"
            className="w-full text-center border-2 border-primary text-primary text-base sm:text-lg font-semibold py-3 px-6 rounded-full bg-white hover:bg-primary hover:text-white hover:scale-105 transition"
          >
            Our Services
          </a>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-base sm:text-xl font-semibold text-primary opacity-90 leading-relaxed"
        >
          Delivering reliability. <br className="sm:hidden" /> Enabling growth.
        </motion.p>
      </section>

      {/* Other sections */}
      <AboutSection />
      <IndustriesSection />
      <ContactSection />
    </>
  );
}
