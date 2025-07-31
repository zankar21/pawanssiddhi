// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import pages
import HomePage from "./pages/HomePage";          // Import your separate HomePage here
import TeamPage from "./pages/TeamPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ServicesPage from "./pages/ServicesPage";
import IoTSensorsPage from "./pages/IoTSensorsPage";
import DataAnalyticsPage from "./pages/DataAnalyticsPage";
import ProductsPage from "./pages/ProductsPage";

// Import About and Contact sections only if you use them directly here (optional)
// Otherwise, these should be inside HomePage.jsx already
// import AboutSection from './components/AboutSection';
// import ContactSection from './components/ContactSection';

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
