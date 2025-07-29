// src/components/PartnersSection.js
import React from 'react';
import { motion } from 'framer-motion';

// Replace these with real partner logo paths in /public/assets/partners/
const partners = [
  { name: 'Babu Enterprises', logo: '/assets/partners/babu-enterprises.png' },
  { name: 'ASMI Engineering', logo: '/assets/partners/asmi-engineering.png' },
  { name: 'Global Plant Co.', logo: '/assets/partners/global-plant.png' },
  { name: 'EcoPack Solutions', logo: '/assets/partners/ecopack-solutions.png' },
  { name: 'LogiTrans Logistics', logo: '/assets/partners/logitrans.png' },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="bg-white py-24 scroll-snap-start">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-heading text-charcoal">Our Partners & Clients</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We proudly collaborate with industry leaders around the world.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          variants={{
            hidden: {},
            visible: {},
          }}
        >
          {partners.map((p, idx) => (
            <motion.div
              key={idx}
              className="w-32 h-32 flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
              }}
            >
              <img
                src={p.logo}
                alt={p.name}
                className="max-h-full max-w-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
