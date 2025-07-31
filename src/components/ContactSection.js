import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Message sent:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-12 bg-offWhite text-center max-w-4xl mx-auto">
      <h2 className="text-primary font-heading text-2xl md:text-3xl font-bold mb-8">Get in Touch</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="px-4 py-3 border border-slate rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="px-4 py-3 border border-slate rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows="5"
          required
          className="px-4 py-3 border border-slate rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition resize-none"
        ></textarea>
        <button
          type="submit"
          className="bg-accent text-white font-semibold py-3 rounded-md hover:bg-primary transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
