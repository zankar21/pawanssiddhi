// src/components/ContactSection.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch(
        'https://<YOUR_API_ID>.execute-api.<YOUR_REGION>.amazonaws.com/dev/contact',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      );
      const json = await res.json();

      if (json.success) {
        alert('✅ Thanks! We received your message.');
        setForm({ name: '', email: '', message: '' });
      } else {
        alert('❌ Oops—something went wrong. Please try again later.');
      }
    } catch (err) {
      console.error(err);
      alert('❌ Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
              disabled={submitting}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
              disabled={submitting}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border rounded"
              required
              disabled={submitting}
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-3 font-semibold rounded ${
              submitting
                ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                : 'bg-teal text-white hover:bg-teal-dark transition'
            }`}
          >
            {submitting ? 'Sending…' : 'Send Message'}
          </button>
        </form>
        {/* Replace with your actual Google Maps embed URL */}
        <div className="mt-12">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            className="w-full h-64 border-0 rounded"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </motion.section>
  );
}
