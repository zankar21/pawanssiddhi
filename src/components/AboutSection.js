import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-lightCyan py-16 px-6 md:px-12 text-center">
      <h2 className="text-primary font-heading text-2xl md:text-3xl font-bold mb-6">
        About Us
      </h2>
      <p className="max-w-3xl mx-auto text-slate text-lg md:text-xl leading-relaxed mb-12">
        Founded in 2020, Pawanssiddhi Supplier Pvt Ltd partners with leading industry
        players to deliver specialized power-plant supplies, civil & electrical
        projects, and maintenance services. Our commitment to{" "}
        <span className="text-accent font-semibold">innovation</span> and{" "}
        <span className="text-accent font-semibold">quality</span> drives success worldwide.
      </p>

      <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto justify-center">
        <div className="bg-white rounded-xl shadow-md p-8 flex-1">
          <h3 className="text-primary font-heading text-xl font-bold mb-3">Our Mission</h3>
          <p className="text-slate text-base leading-relaxed">
            To provide socially responsible solutions with exceptional client satisfaction.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 flex-1">
          <h3 className="text-primary font-heading text-xl font-bold mb-3">Our Vision</h3>
          <p className="text-slate text-base leading-relaxed">
            To become a global leader through ethics, innovation, and relentless service.
          </p>
        </div>
      </div>
    </section>
  );
}
