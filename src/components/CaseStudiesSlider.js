import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const cases = [
  { img: '/case1.jpg', title: 'Plant Upgrade', desc: 'Detail...' },
  /* ... */
];
export default function CaseStudiesSlider() {
  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-3xl text-center mb-8">Case Studies</h2>
      <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 } }}>
        {cases.map(c => (
          <SwiperSlide key={c.title}>
            <img src={c.img} alt={c.title} className="rounded-lg mb-4" />
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-gray-600">{c.desc}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}