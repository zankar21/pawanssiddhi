// src/pages/ServicesPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { services } from '../data/services';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      {/* SEO & Meta */}
      <Helmet>
        <title>Our Services | Maintenance Hawkeye</title>
        <meta
          name="description"
          content="We offer a comprehensive suite of industrial services tailored to your needs."
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl font-heading mb-4">Our Services</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Delivering excellence in maintenance, installation, repair, and more.
        </p>
      </section>

      {/* Service List (Alternating Layout) */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <h2 className="sr-only">Service List</h2>
          {services.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              No services available at this time.
            </div>
          ) : (
            services.map((service, idx) => (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8"
              >
                {idx % 2 === 0 ? (
                  <>
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                    <div>
                      <h2 className="text-3xl font-heading text-charcoal mb-4">
                        {service.title}
                      </h2>
                      <p className="text-slate mb-6">
                        {service.description}
                      </p>
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-block py-2 px-4 bg-accent text-white rounded-lg hover:bg-accent-dark transition"
                      >
                        Learn More
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2 className="text-3xl font-heading text-charcoal mb-4">
                        {service.title}
                      </h2>
                      <p className="text-slate mb-6">
                        {service.description}
                      </p>
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-block py-2 px-4 bg-accent text-white rounded-lg hover:bg-accent-dark transition"
                      >
                        Learn More
                      </Link>
                    </div>
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
