// src/components/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard({ slug, title, excerpt, imageUrl }) {
  return (
    <article className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-heading text-charcoal mb-2">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p className="text-slate mb-4">{excerpt}</p>
        <Link to={`/blog/${slug}`} className="text-primary hover:text-accent">
          Read more →
        </Link>
      </div>
    </article>
  );
}