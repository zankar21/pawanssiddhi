// src/pages/IoTSensorsPage.jsx
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { ParallaxBanner } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import SensorCard from "../components/SensorCard";
import SpecsAccordion from "../components/SpecsAccordion";
import UseCaseGrid from "../components/UseCaseGrid";
import { sensors } from "../data/sensors";
import { sensorUseCases } from "../data/sensorUseCases";

// Simple analytics tracker
const trackEvent = (action, label) => {
  window.gtag?.("event", action, { event_category: "IoT Sensors", event_label: label });
};

export default function IoTSensorsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialSearch = searchParams.get("search") || "";
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);
  const [selectedSensor, setSelectedSensor] = useState(null);

  useEffect(() => {
    const params = {};
    if (category !== "All") params.category = category;
    if (searchTerm) params.search = searchTerm;
    setSearchParams(params, { replace: true });
  }, [category, searchTerm, setSearchParams]);

  const categories = useMemo(() => ["All", ...new Set(sensors.map((s) => s.category))], []);

  const filteredSensors = useMemo(
    () =>
      sensors
        .filter((s) => category === "All" || s.category === category)
        .filter((s) => {
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
    <>
      <Helmet>
        <title>IoT Sensor Suite | Maintenance Hawkeye</title>
        <meta
          name="description"
          content="Explore our plug-and-play IoT sensors for real-time monitoring and predictive maintenance."
        />
        <meta property="og:title" content="IoT Sensor Suite | Maintenance Hawkeye" />
        <meta property="og:description" content="Industrial-grade IoT sensors for uptime & predictive maintenance." />
        <meta property="og:image" content="/images/hero-iot.jpg" />
      </Helmet>

      <PageLayout
        title="IoT Sensor Suite"
        description="Reliable, industrial-grade sensors for predictive maintenance."
        heroButton={null}
      >
        {/* Parallax Hero (Optional: keep or remove if too heavy) */}
        <div className="mb-10">
          <ParallaxBanner
            className="h-72 rounded-xl shadow"
            layers={[{ image: "/images/hero-iot.jpg", speed: -20 }]}
          >
            <div className="flex flex-col justify-center items-center h-full bg-slate bg-opacity-50 text-white text-center px-4">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">IoT Sensor Suite</h1>
              <p className="max-w-2xl text-lg">
                Reliable, industrial-grade sensors for predictive maintenance.
              </p>
            </div>
          </ParallaxBanner>
        </div>

        {/* Category Tabs */}
        <div className="max-w-4xl mx-auto flex justify-center space-x-4 overflow-x-auto mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                trackEvent("Select Category", cat);
              }}
              className={`px-4 py-2 font-body rounded-full transition-colors focus:outline-none ${
                category === cat ? "bg-primary text-white" : "bg-white text-charcoal"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Filter */}
        <div className="max-w-4xl mx-auto mb-8">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              trackEvent("Search", e.target.value);
            }}
            placeholder="Search sensors by name or feature…"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary"
          />
        </div>

        {/* Sensor Catalog */}
        <section id="catalog" className="mb-16">
          <h2 className="text-3xl font-bold text-center text-primary mb-10">Our Sensors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSensors.map((sensor) => (
              <motion.div
                key={sensor.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <SensorCard
                  sensor={sensor}
                  onLearnMore={() => {
                    setSelectedSensor(sensor);
                    trackEvent("Open Modal", sensor.name);
                  }}
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
        <section id="specs" className="mb-16">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Technical Specifications
          </h2>
          <SpecsAccordion items={filteredSensors.length ? filteredSensors : sensors} />
        </section>

        {/* Use Cases */}
        <section id="use-cases" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Real-World Use Cases</h2>
          <UseCaseGrid cases={sensorUseCases} />
        </section>

        {/* Deployment & Integration */}
        <section id="deployment" className="mb-16">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">
            Deployment & Integration
          </h2>
          <div className="max-w-4xl mx-auto prose">
            <ul>
              <li>Plug-and-play installation with quick calibration (5–10 minutes per sensor).</li>
              <li>Wireless connectivity via MQTT/HTTP to any SCADA or cloud platform.</li>
              <li>Onboard data buffering ensures no data loss during network outages.</li>
            </ul>
          </div>
        </section>

        {/* Maintenance Guidelines */}
        <section id="maintenance-guidelines" className="mb-16">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">
            Maintenance Guidelines
          </h2>
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
        <section className="text-center mb-8">
          <h3 className="text-2xl mb-4 font-bold text-primary">Ready to Transform Your Maintenance?</h3>
          <p className="max-w-xl mx-auto mb-6 text-gray-700">
            Contact our sales team to discuss your plant’s requirements and get a customized quote.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full shadow hover:bg-primary-dark transition"
          >
            Get a Quote
          </a>
        </section>
      </PageLayout>

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
            className="bg-white rounded-lg max-w-lg w-full p-6 overflow-y-auto max-h-full relative"
          >
            <button
              onClick={() => setSelectedSensor(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-charcoal text-2xl"
            >
              &times;
            </button>
            <h2 id="modal-title" className="text-2xl font-bold mb-4">
              {selectedSensor.name}
            </h2>
            <p className="text-slate mb-4">{selectedSensor.description}</p>
            <h3 className="font-bold mb-2">Specifications</h3>
            <ul className="list-disc list-inside mb-4">
              {selectedSensor.specs.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
            <h3 className="font-bold mb-2">Category</h3>
            <p>{selectedSensor.category}</p>
          </div>
        </div>
      )}
    </>
  );
}
