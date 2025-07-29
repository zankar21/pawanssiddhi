// src/pages/BlogPostPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { blogPosts } from '../data/blogPosts';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold">Post not found</h2>
        <Link to="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </section>
    );
  }

  return (
    <article className="prose max-w-3xl mx-auto py-12 px-4">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">
        {new Date(post.date).toLocaleDateString()} &bull; by {post.author}
      </p>
      <hr className="my-6" />
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {post.content}
      </ReactMarkdown>
      <p className="mt-8">
        <Link to="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </p>
    </article>
  );
}
