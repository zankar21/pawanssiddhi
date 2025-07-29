// src/pages/TeamPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamCard from '../components/TeamCard';
import { teamMembers } from '../data/team';

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl font-heading mb-4">Meet the Team</h1>
        <p className="max-w-2xl mx-auto">
          The passionate experts behind Maintenance Hawkeye.
        </p>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-3xl font-heading text-center mb-12 text-charcoal">
          Our Core Team
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map(member => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      {/* Culture / Values */}
      <section className="bg-slate text-white py-16 px-6 md:px-12">
        <h2 className="text-3xl font-heading mb-8 text-center">Our Values</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-6 text-center">
            <span className="text-4xl block mb-2">⚙️</span>
            <h3 className="font-heading text-xl mb-1">Innovation</h3>
            <p>We push boundaries to keep you ahead of failures.</p>
          </div>
          <div className="glass p-6 text-center">
            <span className="text-4xl block mb-2">🔒</span>
            <h3 className="font-heading text-xl mb-1">Reliability</h3>
            <p>Our solutions run 24×7 with enterprise-grade uptime.</p>
          </div>
          <div className="glass p-6 text-center">
            <span className="text-4xl block mb-2">🤝</span>
            <h3 className="font-heading text-xl mb-1">Collaboration</h3>
            <p>We partner closely to solve your toughest challenges.</p>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-16 px-6 md:px-12 text-center">
        <h3 className="text-2xl mb-4 text-charcoal">
          Think you’d be a great fit?
        </h3>
        <a
          href="/careers"
          className="btn-accent inline-block"
        >
          View Open Roles
        </a>
      </section>

      <Footer />
    </div>
  );
}
