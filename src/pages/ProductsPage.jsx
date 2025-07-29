// src/pages/ProductsPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { productCategories } from '../data/productCategories';

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      {/* SEO & Meta */}
      <Helmet>
        <title>Industrial & Engineering Products | Maintenance Hawkeye</title>
        <meta
          name="description"
          content="We provide a comprehensive range of high-quality industrial and engineering components—from pumps and valves to instrumentation and fasteners—for rapid delivery and minimal lead times."
        />
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl font-heading mb-4">Industrial & Engineering Products</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Everything from pumps, valves, bearings, and seals to instrumentation, piping,
          and fasteners—sourced from leading global manufacturers and stocked
          across our strategic warehouses for rapid delivery and minimal lead times.
        </p>
      </section>

      {/* Product Categories List */}
      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto space-y-16 py-16 px-6 md:px-12">
          {productCategories.map((cat, idx) => (
            <article
              key={cat.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
            >
              {idx % 2 === 0 ? (
                <>
                  <div>
                    <h2 className="text-3xl font-heading text-charcoal mb-4">{cat.title}</h2>
                    <ul className="list-disc list-inside text-slate space-y-2 mb-6">
                      {cat.description.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                    <Link
                      to={`/products/${cat.id}`}
                      className="btn-accent inline-block py-2 px-4"
                    >
                      Learn More
                    </Link>
                  </div>
                  <div className="w-full h-64 bg-slate rounded-lg shadow-inner" />
                </>
              ) : (
                <>
                  <div className="w-full h-64 bg-slate rounded-lg shadow-inner" />
                  <div>
                    <h2 className="text-3xl font-heading text-charcoal mb-4">{cat.title}</h2>
                    <ul className="list-disc list-inside text-slate space-y-2 mb-6">
                      {cat.description.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                    <Link
                      to={`/products/${cat.id}`}
                      className="btn-accent inline-block py-2 px-4"
                    >
                      Learn More
                    </Link>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
