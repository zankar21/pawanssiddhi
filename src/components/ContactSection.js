// src/components/ContactSection.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setResponseMessage('');

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
        setResponseMessage('✅ Thanks! We received your message.');
        setForm({ name: '', email: '', message: '' });
      } else {
        setResponseMessage('❌ Oops—something went wrong. Please try again later.');
      }
    } catch (err) {
      console.error(err);
      setResponseMessage('❌ Network error. Please try again.');
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
      <div className="container mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-accent"
              required
              disabled={submitting}
              aria-required="true"
              aria-describedby="nameHelp"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-accent"
              required
              disabled={submitting}
              aria-required="true"
              aria-describedby="emailHelp"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-accent"
              required
              disabled={submitting}
              aria-required="true"
              aria-describedby="messageHelp"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-3 font-semibold rounded ${
              submitting
                ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                : 'bg-accent text-white hover:bg-accent-dark transition'
            }`}
            aria-live="polite"
          >
            {submitting ? 'Sending…' : 'Send Message'}
          </button>
        </form>

        {responseMessage && (
          <p className="mt-4 text-center font-medium">{responseMessage}</p>
        )}

        {/* Replace with your actual Google Maps embed URL */}
        <div className="mt-12">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019424574073!2d144.95605541558792!3d-37.81720974214593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2e040d17%3A0x3d4e2b6ee6324f64!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1631677206817!5m2!1sen!2sau"
            className="w-full h-64 border-0 rounded"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </motion.section>
  );
}
