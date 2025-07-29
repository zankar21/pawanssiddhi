// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// ← Add these!
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ParallaxProvider } from 'react-scroll-parallax';

import App from './App';
import TeamPage from './pages/TeamPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ServicesPage from './pages/ServicesPage';
import IoTSensorsPage from './pages/IoTSensorsPage';
import DataAnalyticsPage from './pages/DataAnalyticsPage';
import ProductsPage from './pages/ProductsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ParallaxProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/iot-sensors" element={<IoTSensorsPage />} />   {/* use /iot-sensors */}
        <Route path="/analytics" element={<DataAnalyticsPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </ParallaxProvider>
  </BrowserRouter>
);
