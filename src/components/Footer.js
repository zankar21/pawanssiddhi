// src/components/Footer.js
import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  // Load Twitter widgets script for embedded timeline
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus('Please enter a valid email.');
      return;
    }
    // TODO: integrate with your newsletter API endpoint
    setStatus('Thanks for subscribing!');
    setEmail('');
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Newsletter Signup */}
        <div>
          <h4 className="text-xl font-semibold mb-4 font-heading">Subscribe to our Newsletter</h4>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="p-3 rounded text-gray-800 flex-grow"
              required
            />
            <button
              type="submit"
              className="p-3 bg-teal text-white rounded font-medium hover:bg-teal-dark transition"
            >
              Subscribe
            </button>
          </form>
          {status && <p className="mt-2 text-sm font-body">{status}</p>}
        </div>

        {/* Social Feed */}
        <div>
          <h4 className="text-xl font-semibold mb-4 font-heading">Follow Us on Twitter</h4>
          <a
            className="twitter-timeline"
            data-height="300"
            data-theme="dark"
            href="https://twitter.com/PawanSiddhiSUP?ref_src=twsrc%5Etfw"
          >
            Tweets by PawanSiddhiSUP
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400 font-body text-sm">
        © {new Date().getFullYear()} Pawanssiddhi Supplier Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
