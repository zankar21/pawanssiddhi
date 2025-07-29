// src/pages/DataAnalyticsPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StepCard from '../components/StepCard';
import DashboardPreview from '../components/DashboardPreview';
import CaseStudyCard from '../components/CaseStudyCard';
import { sampleAnalyticsData } from '../data/sampleAnalyticsData'; // <–– import your sample data

export default function DataAnalyticsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl font-heading mb-4">Data Analytics</h1>
        <p className="max-w-2xl mx-auto">Turn sensor data into actionable insights.</p>
      </section>

      {/* Pipeline Steps */}
      <section className="py-16 px-8 bg-off-white">
        <h2 className="text-3xl font-heading mb-12 text-center">Our Process</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard number={1} title="Data Ingestion" desc="Stream & store IoT feeds." />
          <StepCard number={2} title="Model Training" desc="AI algorithms detect anomalies." />
          <StepCard number={3} title="Insight Delivery" desc="Real-time alerts & dashboards." />
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 px-8 bg-white">
        <DashboardPreview data={sampleAnalyticsData} />
      </section>

      {/* Case Study */}
      <section className="bg-slate text-white py-16 px-8">
        <CaseStudyCard
          title="Chandrapur STPS Success"
          description="Reduced boiler tube failures by 40%."
          link="/case-studies/chandrapur"
        />
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-8 bg-accent text-white text-center">
        <h3 className="text-2xl mb-4">See It in Action</h3>
        <a href="/contact" className="btn-accent">Request Demo</a>
      </section>

      <Footer />
    </div>
  );
}
