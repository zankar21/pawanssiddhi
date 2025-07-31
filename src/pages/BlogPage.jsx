// src/pages/BlogPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { blogPosts } from "../data/blogPosts";

export default function BlogPage() {
  return (
    <PageLayout
      title="Our Blog"
      description="Insights on IoT, Analytics, and Maintenance"
      heroButton={null}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {blogPosts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-primary mb-2">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <p className="text-gray-700 line-clamp-3">{post.summary || post.content}</p>
            <Link to={`/blog/${post.slug}`} className="text-accent mt-3 inline-block font-semibold">
              Read More &rarr;
            </Link>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
