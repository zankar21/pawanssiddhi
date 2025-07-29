// src/App.js
import React from 'react';
import './index.css';

import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Header from './components/Header';
import Divider from './components/Divider';
import HeroWithForm from './components/HeroWithForm';
import StatsSection from './components/StatsSection';
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

      {/* Main content with scroll-snap sections */}
      <main className="mt-16 space-y-0 snap-y snap-mandatory overflow-y-auto h-screen">
        {/* Hero Section */}
        <section className="snap-start">
          <HeroWithForm />
        </section>
        <Divider color="#F3F4F6" flip />

        {/* Services Preview */}
      <section className="snap-start bg-off-white py-16 text-center">
  <h2 className="text-3xl font-heading text-charcoal mb-4">Our Services</h2>
  <p className="text-slate mb-6 max-w-xl mx-auto">
    We offer a full suite of industrial services tailored to your operational needs.
  </p>
  <a
    href="/services"
    className="inline-block py-2 px-6 bg-primary text-white rounded-lg hover:bg-primary-dark transition mt-8"
  >
    View All Services
  </a>
</section>

        <Divider color="#F9FAFB" wave />

        {/* Stats Section */}
        <section id="stats" className="snap-start">
          <StatsSection />
        </section>
        <Divider color="#F9FAFB" wave />

        {/* About Section */}
        <section className="snap-start">
          <AboutSection />
        </section>
        <Divider color="white" wave flip />

        {/* Partners Section */}
        <section className="snap-start">
          <PartnersSection />
        </section>
        <Divider color="#F3F4F6" />

        {/* Case Studies Section */}
        <section className="snap-start">
          <BeforeAfterSlider />
        </section>
        <Divider color="#F3F4F6" />

        {/* Testimonials Section */}
        <section className="snap-start">
          <TestimonialSlider />
        </section>
        <Divider color="white" flip wave />

       

        {/* Process Section */}
        <section className="snap-start">
          <ProcessSection />
        </section>
        <Divider color="white" wave flip />

        {/* Contact Section */}
        <section className="snap-start">
          <ContactSection />
        </section>
      </main>

      {/* Back-to-Top Button */}
      <BackToTop />

      {/* Footer */}
      <Footer />
    </div>
  );
}
