// src/pages/DataAnalyticsPage.jsx
import React from "react";
import PageLayout from "../components/PageLayout";
import StepCard from "../components/StepCard";
import DashboardPreview from "../components/DashboardPreview";
import CaseStudyCard from "../components/CaseStudyCard";
import { sampleAnalyticsData } from "../data/sampleAnalyticsData";

export default function DataAnalyticsPage() {
  return (
    <PageLayout
      title="Data Analytics"
      description="Turn sensor data into actionable insights."
      heroButton={
        <a
          href="/contact"
          className="bg-white text-primary font-bold px-8 py-2 rounded-full shadow-lg hover:bg-gray-100 transition mt-4"
        >
          Request Demo
        </a>
      }
    >
      {/* Pipeline Steps */}
      <h2 className="text-3xl font-bold mb-10 text-center text-primary">Our Process</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <StepCard number={1} title="Data Ingestion" desc="Stream & store IoT feeds." />
        <StepCard number={2} title="Model Training" desc="AI algorithms detect anomalies." />
        <StepCard number={3} title="Insight Delivery" desc="Real-time alerts & dashboards." />
      </div>

      {/* Dashboard Preview */}
      <div className="mb-16">
        <DashboardPreview data={sampleAnalyticsData} />
      </div>

      {/* Case Study */}
      <div className="bg-primary/90 rounded-2xl shadow-lg p-8 mb-16">
        <CaseStudyCard
          title="Chandrapur STPS Success"
          description="Reduced boiler tube failures by 40%."
          link="/case-studies/chandrapur"
        />
      </div>
    </PageLayout>
  );
}
