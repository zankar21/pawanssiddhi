import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { motion } from 'framer-motion';

const industries = [
  { name: 'ACC Cement', logo: '/logos/acc-cement.png' },
  { name: 'Dalmia Bharat Cement', logo: '/logos/dalmia-cement.png' },
  { name: 'Steel Authority of India Limited', logo: '/logos/sail.png' },
  { name: 'Lloyds Steel', logo: '/logos/lloyds-steel.png' },
  { name: 'Western Coalfield Limited', logo: '/logos/wcl.png' },
  {
    name: 'Mahagenco Thermal Plants',
    subItems: ['CSTPS Chandrapur', 'Koradi TPS', 'Khaperkheda TPS', 'Paras TPS'],
    logo: '/logos/mahagenco.png',
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-r from-[#e0f7fa] via-[#ffffff] to-[#e0f7fa] bg-[length:200%_200%] animate-bg-pan">
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.08)_1px,_transparent_1px)] bg-[length:20px_20px] opacity-10 z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-16 underline decoration-accent decoration-4 underline-offset-4"
        >
          Our Clients & Industries
        </motion.h2>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={industry.logo}
                alt={industry.name}
                title={industry.name}
                className="h-16 sm:h-20 md:h-24 object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
              />
              {industry.subItems && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm text-gray-700 bg-white px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {industry.subItems.join(', ')}
                </div>
              )}
            </motion.div>
          ))}
        </div>

       {/* Swiper for mobile */}
<div className="sm:hidden mt-10">
  <Swiper
    modules={[Autoplay]}
    autoplay={{ delay: 2500, disableOnInteraction: false }}
    loop
    spaceBetween={20}
    slidesPerView={1.4}
  >
    {industries.map((industry, index) => (
      <SwiperSlide key={index}>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <img
            src={industry.logo}
            alt={industry.name}
            title={industry.name}
            className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
          {industry.subItems && (
            <p className="text-sm text-slate-600 mt-2 text-center px-2">
              {industry.subItems.join(', ')}
            </p>
          )}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
      </div>
    </section>
  );
}
