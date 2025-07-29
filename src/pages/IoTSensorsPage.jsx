// src/pages/IoTSensorsPage.jsx
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { ParallaxBanner } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SensorCard from '../components/SensorCard';
import SpecsAccordion from '../components/SpecsAccordion';
import UseCaseGrid from '../components/UseCaseGrid';
import { sensors } from '../data/sensors';
import { sensorUseCases } from '../data/sensorUseCases';

// Simple analytics tracker
const trackEvent = (action, label) => {
  window.gtag?.('event', action, { event_category: 'IoT Sensors', event_label: label });
};

export default function IoTSensorsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);
  const [selectedSensor, setSelectedSensor] = useState(null);

  // Update URL when filters change
  useEffect(() => {
    const params = {};
    if (category !== 'All') params.category = category;
    if (searchTerm) params.search = searchTerm;
    setSearchParams(params, { replace: true });
  }, [category, searchTerm, setSearchParams]);

  // Derive categories
  const categories = useMemo(
    () => ['All', ...new Set(sensors.map(s => s.category))],
    []
  );

  // Filter sensors by category and search
  const filteredSensors = useMemo(
    () =>
      sensors
        .filter(s => category === 'All' || s.category === category)
        .filter(s => {
          const term = searchTerm.toLowerCase();
          return (
            s.name.toLowerCase().includes(term) ||
            s.description.toLowerCase().includes(term)
          );
        }),
    [category, searchTerm]
  );

  // Trap focus in modal
  const modalRef = useRef(null);
  useEffect(() => {
    if (selectedSensor) modalRef.current?.focus();
  }, [selectedSensor]);

  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Helmet>
        <title>IoT Sensor Suite | Maintenance Hawkeye</title>
        <meta name="description" content="Explore our plug-and-play IoT sensors for real-time monitoring and predictive maintenance." />
        <meta property="og:title" content="IoT Sensor Suite | Maintenance Hawkeye" />
        <meta property="og:description" content="Industrial-grade IoT sensors for uptime & predictive maintenance." />
        <meta property="og:image" content="/images/hero-iot.jpg" />
      </Helmet>

      <Header />

      <main className="mt-16 snap-y snap-mandatory overflow-y-auto h-screen">
        {/* Parallax Hero */}
        <ParallaxBanner
          className="snap-start h-96"
          layers={[{ image: '/images/hero-iot.jpg', speed: -20 }]}
        >
          <div className="flex flex-col justify-center items-center h-full bg-slate bg-opacity-50 text-white text-center px-4">
            <h1 className="text-4xl font-heading mb-4">IoT Sensor Suite</h1>
            <p className="max-w-2xl text-lg">
              Reliable, industrial-grade sensors for predictive maintenance.
            </p>
          </div>
        </ParallaxBanner>

        {/* Category Tabs */}
        <section className="snap-start py-6 bg-off-white">
          <div className="max-w-4xl mx-auto flex justify-center space-x-4 overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setCategory(cat); trackEvent('Select Category', cat); }}
                className={`px-4 py-2 font-body rounded-full transition-colors focus:outline-none ${
                  category === cat ? 'bg-primary text-white' : 'bg-white text-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Search Filter */}
        <section className="snap-start py-8 px-6 md:px-12 bg-off-white">
          <div className="max-w-4xl mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={e => { setSearchTerm(e.target.value); trackEvent('Search', e.target.value); }}
              placeholder="Search sensors by name or feature…"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary"
            />
          </div>
        </section>

        {/* Sensor Catalog */}
        <section id="catalog" className="snap-start py-16 px-8 bg-off-white">
          <h2 className="text-3xl font-heading text-center text-charcoal mb-12">Our Sensors</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSensors.map(sensor => (
              <motion.div
                key={sensor.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <SensorCard
                  sensor={sensor}
                  onLearnMore={() => { setSelectedSensor(sensor); trackEvent('Open Modal', sensor.name); }}
                />
              </motion.div>
            ))}
            {filteredSensors.length === 0 && (
              <p className="col-span-full text-center text-slate">
                No sensors match your filters.
              </p>
            )}
          </div>
        </section>

        {/* Specs Accordion */}
        <section id="specs" className="snap-start py-16 px-8 bg-white">
          <h2 className="text-3xl font-heading text-center text-charcoal mb-8">Technical Specifications</h2>
          <SpecsAccordion items={filteredSensors.length ? filteredSensors : sensors} />
        </section>

        {/* Use Cases */}
        <section id="use-cases" className="snap-start bg-slate text-white py-16 px-8">
          <h2 className="text-3xl font-heading text-center mb-8">Real-World Use Cases</h2>
          <UseCaseGrid cases={sensorUseCases} />
        </section>

        {/* Deployment & Integration */}
        <section id="deployment" className="snap-start py-16 px-6 md:px-12 bg-white">
          <h2 className="text-3xl font-heading text-center text-charcoal mb-6">Deployment & Integration</h2>
          <div className="max-w-4xl mx-auto prose">
            <ul>
              <li>Plug-and-play installation with quick calibration (5–10 minutes per sensor).</li>
              <li>Wireless connectivity via MQTT/HTTP to any SCADA or cloud platform.</li>
              <li>Onboard data buffering ensures no data loss during network outages.</li>
            </ul>
          </div>
        </section>

        {/* Maintenance Guidelines */}
        <section id="maintenance-guidelines" className="snap-start py-16 px-6 md:px-12 bg-off-white">
          <h2 className="text-3xl font-heading text-center text-charcoal mb-6">Maintenance Guidelines</h2>
          <div className="max-w-4xl mx-auto prose">
            <p>To ensure optimal performance:</p>
            <ol>
              <li>Inspect sensor housing and connectors semi-annually.</li>
              <li>Recalibrate sensors annually against industry standards.</li>
              <li>Update firmware remotely via secure OTA updates.</li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="snap-start py-16 px-6 md:px-12 text-center bg-primary text-white">
          <h3 className="text-2xl mb-4 font-heading">Ready to Transform Your Maintenance?</h3>
          <p className="max-w-xl mx-auto mb-6">
            Contact our sales team to discuss your plant’s requirements and get a customized quote.
          </p>
          <a href="/contact" className="btn-accent inline-block py-3 px-6">Get a Quote</a>
        </section>
      </main>

      {/* Detail Modal */}
      {selectedSensor && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <div
            ref={modalRef}
            tabIndex={-1}
            className="bg-white rounded-lg max-w-lg w-full p-6 overflow-y-auto max-h-full"
          >
            <button
              onClick={() => setSelectedSensor(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-charcoal text-2xl"
            >
              &times;
            </button>
            <h2 id="modal-title" className="text-2xl font-heading mb-4">
              {selectedSensor.name}
            </h2>
            <p className="text-slate mb-4">{selectedSensor.description}</p>
            <h3 className="font-heading mb-2">Specifications</h3>
            <ul className="list-disc list-inside mb-4">
              {selectedSensor.specs.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
            <h3 className="font-heading mb-2">Category</h3>
            <p>{selectedSensor.category}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
);
}
