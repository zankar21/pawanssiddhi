// src/pages/TeamPage.jsx
import React from "react";
import PageLayout from "../components/PageLayout";
import TeamCard from "../components/TeamCard";
import { teamMembers } from "../data/team";

export default function TeamPage() {
  return (
    <PageLayout
      title="Meet the Team"
      description="The passionate experts behind Maintenance Hawkeye."
      heroButton={null}
    >
      {/* Team Grid */}
      <section aria-labelledby="core-team" className="mb-16">
        <h2 id="core-team" className="text-3xl font-bold text-center mb-10 text-primary">
          Our Core Team
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      {/* Culture / Values */}
      <section aria-labelledby="values" className="mb-16">
        <h2 id="values" className="text-3xl font-bold text-center mb-8 text-primary">Our Values</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <span className="text-4xl block mb-2">⚙️</span>
            <h3 className="font-bold text-xl mb-1 text-primary">Innovation</h3>
            <p className="text-gray-600">We push boundaries to keep you ahead of failures.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <span className="text-4xl block mb-2">🔒</span>
            <h3 className="font-bold text-xl mb-1 text-primary">Reliability</h3>
            <p className="text-gray-600">Our solutions run 24×7 with enterprise-grade uptime.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <span className="text-4xl block mb-2">🤝</span>
            <h3 className="font-bold text-xl mb-1 text-primary">Collaboration</h3>
            <p className="text-gray-600">We partner closely to solve your toughest challenges.</p>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="text-center mt-8">
        <h3 className="text-2xl mb-4 text-primary">
          Think you’d be a great fit?
        </h3>
        <a
          href="/careers"
          className="inline-block bg-primary text-white font-bold px-8 py-2 rounded-full shadow hover:bg-primary-dark transition"
        >
          View Open Roles
        </a>
      </section>
    </PageLayout>
  );
}
