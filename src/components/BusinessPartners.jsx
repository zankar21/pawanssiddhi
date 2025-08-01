import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Sample image imports (replace with actual logo paths)
import electrotherm from '../assets/partners/electrotherm.png';
import bharatBijlee from '../assets/partners/bharat-bijlee.png';
import astral from '../assets/partners/astral.png';
import paharpur from '../assets/partners/paharpur.png';
import neeco from '../assets/partners/neeco.png';
import marsh from '../assets/partners/marsh.png';
import hydrocare from '../assets/partners/hydrocare.png';
import ionexchange from '../assets/partners/ionexchange.png';

const partners = [
  { name: "ELECTROTHERM INDIA LTD", logo: electrotherm },
  { name: "BHARAT BIJLEE", logo: bharatBijlee },
  { name: "ASTRAL PIPES", logo: astral },
  { name: "PAHARPUR COOLING TOWERS", logo: paharpur },
  { name: "NEECO ENGINEERING", logo: neeco },
  { name: "MARSH AUTOMATION", logo: marsh },
  { name: "HYDRO CARE ENGINEERS", logo: hydrocare },
  { name: "ION EXCHANGE INDIA LTD", logo: ionexchange },
];

export default function BusinessPartners() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      className="w-full px-4 py-12 bg-white"
      id="partners"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 underline">
          Our Business Partners
        </h2>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:shadow-lg"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 object-contain mb-2"
              />
              <p className="text-xs text-gray-700 text-center">{partner.name}</p>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={2}
            grabCursor={true}
            pagination={{ clickable: true }}
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div
                  className="flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 object-contain mb-2"
                  />
                  <p className="text-xs text-gray-700 text-center">{partner.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
