// src/components/BeforeAfterSlider.js
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const caseStudies = [
  {
    title: 'Plant Maintenance Overhaul',
    before: '/assets/case1-before.jpg',
    after: '/assets/case1-after.jpg',
  },
  {
    title: 'Safety Gear Upgrade',
    before: '/assets/case2-before.jpg',
    after: '/assets/case2-after.jpg',
  },
  {
    title: 'Logistics Workflow',
    before: '/assets/case3-before.jpg',
    after: '/assets/case3-after.jpg',
  },
];

export default function BeforeAfterSlider() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
  });

  return (
    <section id="case-studies" className="bg-white py-24 scroll-snap-start">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-heading text-charcoal">Case Studies</h2>
        <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
          Before & After transformations showcasing our impact.
        </p>
      </div>

      <div className="relative">
        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {caseStudies.map((cs, idx) => (
            <div className="keen-slider__slide" key={idx}>
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-semibold text-charcoal mb-4 text-center">
                  {cs.title}
                </h3>
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={cs.before} alt="Before image" />}
                  itemTwo={<ReactCompareSliderImage src={cs.after} alt="After image" />}
                  sliderLineColor="var(--accent)"
                  handle={<div className="bg-accent h-8 w-1 rounded cursor-col-resize" />}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => slider.current?.prev()}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
        >
          <ChevronLeftIcon className="h-6 w-6 text-charcoal" />
        </button>
        <button
          onClick={() => slider.current?.next()}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
        >
          <ChevronRightIcon className="h-6 w-6 text-charcoal" />
        </button>
      </div>
    </section>
  );
}
