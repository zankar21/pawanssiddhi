import React from "react";

const directors = [
  {
    name: "Pawan Saraf",
    title: "Director",
    description: [
      "He is director of the company. He is also Director in M/s Shah Sonraj Tikamchand Saraf & Kuwar Tikamchand Jewellers Pvt Ltd. With respective Turnovers of 25 crore & 75 crore respectively. He is also director in New Era B2B Trading Pvt Ltd. A company engaged in developing software for government entities on centre and state level.",
      "His strengths lie in continuous staving for new growth opportunities & playing leader role, guiding team for the same to attain desired results."
    ]
  },
  {
    name: "Tapasya Saraf",
    title: "Director",
    description: [
      "She is director of the company, shouldering equal responsibility in the growth journey. She is wife of Pawan Saraf and equal partner in all business her husband deals in.",
      "A dynamic lady of ambitious attitude with target-oriented approach."
    ]
  },
  {
    name: "Dr. Ashish Varma",
    title: "Director",
    description: [
      "He is a doctor by profession having equal skills to get the pulse of business as he does of his patients.",
      "His immediate attention paying approach helps a lot in decision making."
    ]
  }
];

export default function DirectorsSection() {
  return (
    <section className="max-w-6xl mx-auto my-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">
        Our Directors
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {directors.map((director, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-4 border-primary/80 hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <h3 className="text-xl font-extrabold text-primary mb-0.5 uppercase tracking-wide text-center">{director.name}</h3>
            <span className="block text-sm font-semibold text-gray-500 mb-3 text-center">{director.title}</span>
            {director.description.map((para, i) => (
              <p key={i} className="text-gray-700 text-base mb-2 text-center">{para}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
