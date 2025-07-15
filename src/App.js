// src/App.js
import React from 'react';
import './index.css';

import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Header from './components/Header';
import Divider from './components/Divider';
import HeroWithForm from './components/HeroWithForm';
import FeatureGrid from './components/FeatureGrid';
import StatsSection from './components/StatsSection';
import ParallaxSection from './components/ParallaxSection';
import AboutSection from './components/AboutSection';
import PartnersSection from './components/PartnersSection';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import TestimonialSlider from './components/TestimonialSlider';
import ModelShowcase from './components/ModelShowcase';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Header */}
      <Header />

      {/* Main content with scroll snapping */}
      <main className="mt-16 space-y-0 snap-y snap-mandatory overflow-y-auto h-screen">
        {/* Hero */}
        <section className="snap-start">
          <HeroWithForm />
        </section>
        <Divider color="#F3F4F6" flip />

        {/* Services */}
        <section className="snap-start">
          <FeatureGrid />
        </section>
        <Divider color="#F9FAFB" wave />

        {/* Stats */}
        <section id="stats" className="snap-start">
          <StatsSection />
        </section>
        <Divider color="#F9FAFB" wave />

        {/* About */}
        <section className="snap-start">
          <AboutSection />
        </section>
        <Divider color="white" wave flip />

        {/* Partners */}
        <section className="snap-start">
          <PartnersSection />
        </section>
        <Divider color="#F3F4F6" />

        {/* Case Studies */}
        <section className="snap-start">
          <BeforeAfterSlider />
        </section>
        <Divider color="#F3F4F6" />

        {/* Testimonials */}
        <section className="snap-start">
          <TestimonialSlider />
        </section>
        <Divider color="white" flip wave />

        {/* 3D Showcase */}
        <section className="snap-start">
          <ModelShowcase />
        </section>
        <Divider color="#F3F4F6" />

        {/* Process */}
        <section className="snap-start">
          <ProcessSection />
        </section>
        <Divider color="white" wave flip />

        {/* Contact */}
        <section className="snap-start">
          <ContactSection />
        </section>
      </main>

      {/* Back-to-Top */}
      <BackToTop />

      {/* Footer */}
      <Footer />
    </div>
  );
}
