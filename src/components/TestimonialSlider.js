// src/components/TestimonialSlider.js
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    quote: 'Pawanssiddhi transformed our supply chain with unmatched reliability and service.',
    author: 'John Smith, Plant Manager',
  },
  {
    quote: 'Their attention to quality and on-time delivery is second to none.',
    author: 'Maria Garcia, Procurement Lead',
  },
  {
    quote: 'We’ve seen a 20% reduction in downtime thanks to their maintenance solutions.',
    author: 'Wei Zhang, Operations Director',
  },
];

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  return (
    <section id="testimonials" className="bg-gray-50 py-24 scroll-snap-start">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-heading text-charcoal">What Our Clients Say</h2>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {testimonials.map((t, idx) => (
          <div key={idx} className="keen-slider__slide px-4">
            <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-6 w-6 text-accent" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
              <p className="font-semibold text-charcoal">— {t.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center mt-8 space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => slider.current?.moveToSlideRelative(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              currentSlide === idx ? 'bg-accent' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
