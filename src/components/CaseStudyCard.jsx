// src/components/CaseStudyCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function CaseStudyCard({ title, description, link }) {
  return (
    <div className="card p-6 bg-white shadow hover:shadow-lg">
      <h3 className="text-2xl font-heading text-charcoal mb-2">{title}</h3>
      <p className="text-slate mb-4">{description}</p>
      <Link to={link} className="text-primary hover:text-accent">Learn More →</Link>
    </div>
  );
}
