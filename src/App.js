// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import pages
import TeamPage from "./pages/TeamPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ServicesPage from "./pages/ServicesPage";
import IoTSensorsPage from "./pages/IoTSensorsPage";
import DataAnalyticsPage from "./pages/DataAnalyticsPage";
import ProductsPage from "./pages/ProductsPage";

// Import About and Contact sections
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

function HomePage() {
  return (
    <>
      <section
        className="flex flex-col items-center justify-center min-h-[80vh] w-full px-6 text-center"
        style={{
          background: "linear-gradient(90deg, #25b5aa 0%, #e9f5f5 100%)",
        }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-4 drop-shadow-md">
          Welcome to Pawanssiddhi
        </h1>
        <p className="font-semibold text-xl md:text-2xl mb-4 text-black drop-shadow-sm">
          The future of industrial services,<br />delivered today.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
          <a
            href="/contact"
            className="bg-orange-500 text-white text-lg md:text-xl font-bold py-3 px-8 rounded-full shadow-lg hover:bg-orange-600 transition"
          >
            Get a Quote
          </a>
          <a
            href="/services"
            className="border-2 border-teal-700 text-teal-700 text-lg md:text-xl font-bold py-3 px-8 rounded-full hover:bg-teal-700 hover:text-white transition"
          >
            Our Services
          </a>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 opacity-90 drop-shadow-sm">
          Delivering reliability. Enabling growth.
        </h2>
      </section>

      {/* Add About and Contact sections below the hero */}
      <AboutSection />
      <ContactSection />
    </>
  );
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />

      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/iot-sensors" element={<IoTSensorsPage />} />
          <Route path="/analytics" element={<DataAnalyticsPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
