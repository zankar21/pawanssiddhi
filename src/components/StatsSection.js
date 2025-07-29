// src/components/StatsSection.js
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Divider from './Divider';
import { UsersIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid';

const stats = [
  { label: 'Clients Served', end: 60, icon: UsersIcon },
  { label: 'Projects Delivered', end: 83, icon: CheckCircleIcon },
  { label: 'On-Time Rate (%)', end: 99.9, icon: ClockIcon, decimals: 1 },
];

export default function StatsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <section
      id="stats"
      ref={ref}
      className="relative bg-gradient-to-tr from-primary/20 to-primary/80 py-24 scroll-snap-start overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-accent/30 rounded-full filter blur-3xl animate-blob" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-blob animation-delay-2000" />

      <div className="relative container mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-heading mb-12">Our Impact in Numbers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map(({ label, end, icon: Icon, decimals }, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 hover:bg-white/30 p-8 rounded-xl backdrop-blur-lg shadow-lg transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1, transition: { delay: idx * 0.3, duration: 0.8 } } : {}}
            >
              <Icon className="h-12 w-12 mx-auto text-white mb-4" />
              <p className="text-5xl font-heading">
                {inView ? (
                  <CountUp end={end} duration={2} decimals={decimals || 0} suffix={decimals ? '%' : ''} />
                ) : (
                  '0'
                )}
              </p>
              <p className="mt-2 text-lg">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <Divider color="white" wave />
      </div>
    </section>
  );
}
