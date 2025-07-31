// src/pages/ServicesPage.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { services } from "../data/services";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | Maintenance Hawkeye</title>
        <meta
          name="description"
          content="We offer a comprehensive suite of industrial services tailored to your needs."
        />
      </Helmet>

      <PageLayout
        title="Our Services"
        description="Delivering excellence in maintenance, installation, repair, and more."
        heroButton={
          <a
            href="/contact"
            className="bg-white text-primary font-bold px-8 py-2 rounded-full shadow-lg hover:bg-gray-100 transition mt-4"
          >
            Get a Quote
          </a>
        }
      >
        <div className="max-w-7xl mx-auto space-y-16">
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
                      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                        {service.title}
                      </h2>
                      <p className="text-gray-700 mb-6">{service.description}</p>
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-block py-2 px-4 bg-primary text-white rounded-full shadow hover:bg-primary-dark transition"
                      >
                        Learn More
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                        {service.title}
                      </h2>
                      <p className="text-gray-700 mb-6">{service.description}</p>
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-block py-2 px-4 bg-primary text-white rounded-full shadow hover:bg-primary-dark transition"
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
      </PageLayout>
    </>
  );
}
