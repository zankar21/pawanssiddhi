// src/pages/BlogPostPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PageLayout from "../components/PageLayout";
import { blogPosts } from "../data/blogPosts";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageLayout
        title="Post Not Found"
        description="Sorry, that blog post does not exist."
        heroButton={
          <Link to="/blog" className="text-accent font-semibold hover:underline">
            &larr; Back to Blog
          </Link>
        }
      />
    );
  }

  return (
    <PageLayout
      title={post.title}
      description={post.summary}
      heroButton={
        <p className="text-gray-400 text-sm">
          {new Date(post.date).toLocaleDateString()} &bull; by {post.author}
        </p>
      }
      bgGradient={false}
    >
      <article className="prose max-w-3xl mx-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
        <div className="mt-8">
          <Link to="/blog" className="text-accent hover:underline font-semibold">
            &larr; Back to Blog
          </Link>
        </div>
      </article>
    </PageLayout>
  );
}
