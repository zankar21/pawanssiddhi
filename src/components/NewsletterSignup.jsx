// src/components/NewsletterSignup.jsx
import React, { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    // TODO: wire up to your newsletter service
    alert(`Subscribed with ${email}`);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        className="px-4 py-2 rounded-lg shadow focus:outline-none"
      />
      <button type="submit" className="btn-accent px-6 py-3">
        Subscribe
      </button>
    </form>
  );
}
