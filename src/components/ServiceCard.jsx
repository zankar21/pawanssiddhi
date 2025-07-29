// src/components/ServiceCard.jsx
import React from 'react';

export default function ServiceCard({ title, description, imageUrl, link }) {
  return (
    <div className="flex flex-col lg:flex-row rounded-lg shadow-lg hover:shadow-2xl transition-shadow bg-white overflow-hidden mb-8">
      {/* Image side */}
      <div className="w-full lg:w-1/2 h-48 md:h-64 lg:h-auto">
        <img
          src={imageUrl}
          alt={title ? title : "Service image"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Description side */}
      <div className="p-6 flex flex-col justify-center w-full lg:w-1/2">
        <h3 className="text-2xl font-heading text-charcoal mb-2">{title}</h3>
        <p className="text-slate mb-4">{description}</p>
        {link && (
          <a
            href={link}
            className="mt-2 inline-block py-2 px-4 bg-accent text-white rounded-lg hover:bg-accent-dark transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        )}
      </div>
    </div>
  );
}
