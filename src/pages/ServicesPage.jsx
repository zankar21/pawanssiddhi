import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { services as allServices } from "../data/services";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ServicesPage() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(allServices);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const lower = query.toLowerCase();
    setFiltered(
      allServices.filter(
        s =>
          s.title.toLowerCase().includes(lower) ||
          s.description.toLowerCase().includes(lower) ||
          (s.highlights && s.highlights.some(h => h.toLowerCase().includes(lower)))
      )
    );
  }, [query]);

  return (
    <>
      <Helmet>
        <title>Our Services | Maintenance Hawkeye</title>
        <meta name="description" content="We offer a comprehensive suite of industrial services tailored to your needs." />
      </Helmet>

      <PageLayout
        title="Our Services"
        description="Delivering excellence in maintenance, installation, repair, and more."
        heroButton={
          <a href="/contact" className="bg-white text-primary font-bold px-8 py-2 rounded-full shadow-lg hover:bg-gray-100 transition mt-4">
            Get a Quote
          </a>
        }
      >
        <div className="max-w-2xl mx-auto mb-12">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Search services…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <div className="max-w-7xl mx-auto space-y-16">
          {filtered.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              No services match your search.
            </div>
          ) : (
            filtered.map((service, idx) => (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8"
                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={idx * 80}
              >
                {idx % 2 === 0 ? (
                  <>
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                    />
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                        {service.title}
                      </h2>
                      <p className="text-gray-700 mb-4">{service.description}</p>
                      {service.highlights && (
                        <ul className="mb-6 text-left text-gray-600 list-disc pl-6 space-y-1">
                          {service.highlights.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      )}
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
                      <p className="text-gray-700 mb-4">{service.description}</p>
                      {service.highlights && (
                        <ul className="mb-6 text-left text-gray-600 list-disc pl-6 space-y-1">
                          {service.highlights.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      )}
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
                      className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
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
