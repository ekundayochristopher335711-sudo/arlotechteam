import React, { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { PageLayout } from "../components/site/PageLayout";
import { getPostBySlug, posts as staticPosts, type Post } from "../data/posts";
import { useSEO } from "../lib/useSEO";
import { ArrowLeft, ArrowRight, Clock, User, Tag } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [posts, setPosts] = useState(staticPosts);
  const [post, setPost] = useState<Post | undefined>(slug ? getPostBySlug(slug) : undefined);

  useEffect(() => {
    fetch("/api/posts.php")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length) {
          setPosts(data);
          const found = data.find((p: Post) => p.slug === slug);
          if (found) setPost(found);
        }
      })
      .catch(() => {});
  }, [slug]);

  useSEO({
    title: post ? post.title : "Blog Post Not Found",
    description: post ? post.excerpt : "This article could not be found.",
    path: `/blog/${slug || ""}`,
  });

  if (!post) return <Navigate to="/blog" replace />;

  const currentIndex = posts.findIndex((p) => p.slug === post.slug);
  const nextPost = posts[currentIndex + 1];
  const prevPost = posts[currentIndex - 1];

  return (
    <PageLayout>
      <article className="mx-auto max-w-3xl px-6 pt-32 pb-20">
        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald-400 transition mb-10"
        >
          <ArrowLeft size={15} /> Back to Blog
        </Link>

        {/* Category badge */}
        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400">
          {post.category}
        </span>

        {/* Title */}
        <h1 className="mt-6 text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground border-b border-border/30 pb-8">
          <span className="flex items-center gap-1.5">
            <User size={14} /> {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} /> {post.readTime}
          </span>
          <span className="flex items-center gap-1.5">
            <Tag size={14} /> {post.category}
          </span>
          <span>{post.date}</span>
        </div>

        {/* Content */}
        <div className="mt-10 space-y-6">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-base leading-8 text-zinc-300">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share / CTA */}
        <div className="mt-14 rounded-2xl border border-emerald-500/20 bg-[#0f1f1a] p-8 text-center">
          <h3 className="text-xl font-bold text-foreground">
            Need help with this?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            We can help you put these ideas into action. Let's talk about your
            project.
          </p>
          <Link
            to="/contact#schedule"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-emerald-400 to-yellow-300 px-7 py-3 text-sm font-bold text-[#07100f] hover:scale-105 transition"
          >
            Get in Touch <ArrowRight size={15} />
          </Link>
        </div>

        {/* Prev / Next */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {prevPost ? (
            <Link
              to={`/blog/${prevPost.slug}`}
              className="group rounded-2xl border border-border/30 p-6 transition hover:border-emerald-500/30"
            >
              <span className="text-xs text-muted-foreground">
                ← Previous
              </span>
              <p className="mt-2 text-sm font-semibold text-foreground group-hover:text-emerald-400 transition leading-snug">
                {prevPost.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {nextPost && (
            <Link
              to={`/blog/${nextPost.slug}`}
              className="group rounded-2xl border border-border/30 p-6 text-right transition hover:border-emerald-500/30"
            >
              <span className="text-xs text-muted-foreground">
                Next →
              </span>
              <p className="mt-2 text-sm font-semibold text-foreground group-hover:text-emerald-400 transition leading-snug">
                {nextPost.title}
              </p>
            </Link>
          )}
        </div>
      </article>
    </PageLayout>
  );
}
