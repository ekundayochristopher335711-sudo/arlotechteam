import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "../components/site/PageLayout";
import { posts as staticPosts, categories, type Post } from "../data/posts";
import { useSEO } from "../lib/useSEO";
import { Search, ArrowRight, Clock, User } from "lucide-react";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [posts, setPosts] = useState<Post[]>(staticPosts);

  useEffect(() => {
    fetch("/api/posts.php")
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data) && data.length) setPosts(data); })
      .catch(() => {});
  }, []);

  useSEO({
    title: "Blog — Insights, Ideas & Digital Growth",
    description:
      "Web design tips, SEO strategies, branding advice, AI tools, and technology trends to help your business grow online. By Arlotech.",
    path: "/blog",
  });

  const featured = posts.find((p) => p.featured);
  const filtered = posts
    .filter((p) => !p.featured || activeCategory !== "All" || search)
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .filter(
      (p) =>
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0f3d27,transparent_55%)]" />
        <div className="absolute -left-32 top-10 h-[400px] w-[400px] rounded-full bg-green-500/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-400">
            Our Blog
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight text-foreground">
            Insights, Ideas &{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-yellow-300 bg-clip-text text-transparent">
              Digital Growth
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with web design tips, SEO strategies, branding advice,
            AI tools, and technology trends to help your business grow online.
          </p>
          <div className="mt-8">
            <a
              href="#articles"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-400 to-yellow-300 px-7 py-3.5 text-sm font-bold text-[#07100f] shadow-lg hover:scale-105 transition"
            >
              Explore Articles
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Search & Categories */}
      <section id="articles" className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-border/50 bg-background/80 py-3 pl-11 pr-4 text-sm text-foreground outline-none focus:border-emerald-400 transition"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  activeCategory === cat
                    ? "bg-emerald-500 text-[#07100f]"
                    : "border border-border/50 text-muted-foreground hover:border-emerald-400 hover:text-emerald-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featured && activeCategory === "All" && !search && (
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <Link
            to={`/blog/${featured.slug}`}
            className="group block overflow-hidden rounded-3xl border border-border/30 bg-[#0f1f1a] shadow-xl transition hover:-translate-y-1 hover:border-emerald-500/30"
          >
            <div className="grid lg:grid-cols-2">
              {/* Left — cover */}
              <div className="relative h-64 lg:h-auto bg-gradient-to-br from-emerald-600/30 via-emerald-900/40 to-amber-900/20 overflow-hidden">
                {featured.image && (
                  <img src={featured.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                )}
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#0f1f1a]/60" />
                <div className="absolute top-4 left-4 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300">
                  Featured
                </div>
              </div>

              {/* Right — content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 w-fit">
                  {featured.category}
                </span>
                <h2 className="mt-5 text-2xl lg:text-3xl font-bold text-foreground group-hover:text-emerald-400 transition leading-snug">
                  {featured.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <User size={13} /> {featured.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} /> {featured.readTime}
                  </span>
                  <span>{featured.date}</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={15} />
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Articles Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h3 className="text-xl font-bold text-foreground mb-8">
          {activeCategory === "All" && !search
            ? "Latest Articles"
            : search
            ? `Results for "${search}"`
            : activeCategory}
        </h3>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">
              No articles found. Try a different search or category.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-2xl border border-border/30 bg-[#0f1f1a] shadow-lg transition hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-emerald-500/5"
              >
                {/* Cover */}
                <div className="relative h-44 bg-gradient-to-br from-emerald-800/30 via-emerald-950/40 to-background overflow-hidden">
                  {post.image && (
                    <img src={post.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f1a] via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-emerald-400 transition leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-[#07100f] transition">
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl border border-emerald-500/20 bg-[#0f1f1a] p-10 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Never Miss an Update
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-lg mx-auto">
            Get practical web design, SEO, and business tips delivered straight
            to your inbox.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = (
                document.getElementById("newsletter-email") as HTMLInputElement
              )?.value;
              if (email) {
                window.open(
                  `mailto:contact@arlotech.com.ng?subject=${encodeURIComponent(
                    "Newsletter subscription"
                  )}&body=${encodeURIComponent(
                    `Please add me to the newsletter: ${email}`
                  )}`,
                  "_self"
                );
              }
            }}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 rounded-xl border border-border/50 bg-background/80 px-5 py-3.5 text-sm text-foreground outline-none focus:border-emerald-400 transition"
            />
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-emerald-400 to-yellow-300 px-6 py-3.5 text-sm font-bold text-[#07100f] hover:scale-105 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/8 to-amber-400/8 pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-foreground">
              Ready to Build Something Amazing?
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-lg mx-auto">
              Whether you need a website, branding, SEO, or digital solutions,
              Arlotech is here to help your business grow.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact#schedule"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-400 to-yellow-300 px-8 py-3.5 text-sm font-bold text-[#07100f] shadow-lg hover:scale-105 transition"
              >
                Get Started <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-green-500/40 px-8 py-3.5 text-sm font-semibold text-foreground hover:border-emerald-400 hover:text-emerald-400 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
