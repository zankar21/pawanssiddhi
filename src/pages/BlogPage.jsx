// src/pages/BlogPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      <section className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-heading">Our Blog</h1>
        <p className="max-w-2xl mx-auto mt-2">Insights on IoT, Analytics, and Maintenance</p>
      </section>
      <main className="flex-grow py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {blogPosts.map(post => (
            <article key={post.slug} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-heading text-charcoal mb-2">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-slate text-sm mb-4">{new Date(post.date).toLocaleDateString()}</p>
              <p className="text-slate line-clamp-3">{post.content}</p>
              <Link to={`/blog/${post.slug}`} className="text-primary mt-2 inline-block">
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
