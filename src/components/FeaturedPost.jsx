// src/components/FeaturedPost.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedPost({ post }) {
  // Use provided excerpt or generate one from content
  const excerpt = post.excerpt
    ? post.excerpt
    : post.content.trim().slice(0, 150) + '…';

  // Use imageUrl or fallback to thumbnail
  const imageSrc = post.imageUrl || post.thumbnail;

  return (
    <article className="max-w-4xl mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={post.title}
          className="w-full md:w-1/2 object-cover h-64"
        />
      )}
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-heading mb-1 text-charcoal">
            <Link to={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h2>
          <p className="text-sm text-slate mb-3">
            {new Date(post.date).toLocaleDateString()} &bull; {post.author}
          </p>
          <p className="text-slate mb-4">{excerpt}</p>
        </div>
        <Link
          to={`/blog/${post.slug}`}
          className="btn-accent self-start"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
