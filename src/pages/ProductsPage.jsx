// src/pages/ProductsPage.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { productCategories } from "../data/productCategories";

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title>Industrial & Engineering Products | Maintenance Hawkeye</title>
        <meta
          name="description"
          content="We provide a comprehensive range of high-quality industrial and engineering components—from pumps and valves to instrumentation and fasteners—for rapid delivery and minimal lead times."
        />
      </Helmet>

      <PageLayout
        title="Industrial & Engineering Products"
        description="Everything from pumps, valves, bearings, and seals to instrumentation, piping, and fasteners—sourced from leading global manufacturers and stocked across our strategic warehouses for rapid delivery and minimal lead times."
        heroButton={null}
      >
        <div className="max-w-7xl mx-auto space-y-16">
          {productCategories.map((cat, idx) => (
            <article
              key={cat.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
            >
              {idx % 2 === 0 ? (
                <>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                      {cat.title}
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                      {cat.description.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                    <Link
                      to={`/products/${cat.id}`}
                      className="inline-block bg-primary text-white font-semibold py-2 px-6 rounded-full shadow hover:bg-primary-dark transition"
                    >
                      Learn More
                    </Link>
                  </div>
                  <div className="w-full h-64 bg-slate rounded-lg shadow-inner flex items-center justify-center text-white text-lg">
                    {/* Placeholder for image or icon */}
                    <span className="opacity-30">Product Image</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full h-64 bg-slate rounded-lg shadow-inner flex items-center justify-center text-white text-lg">
                    {/* Placeholder for image or icon */}
                    <span className="opacity-30">Product Image</span>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                      {cat.title}
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                      {cat.description.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                    <Link
                      to={`/products/${cat.id}`}
                      className="inline-block bg-primary text-white font-semibold py-2 px-6 rounded-full shadow hover:bg-primary-dark transition"
                    >
                      Learn More
                    </Link>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
