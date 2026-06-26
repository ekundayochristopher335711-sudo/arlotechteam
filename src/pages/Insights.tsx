import React from "react";
import { PageLayout, PageHero, Section, SectionHeading } from "../components/site/PageLayout";

const posts = [
  {
    title: "Scaling Modern Web Applications",
    category: "Architecture",
    description: "Strategies for reliable growth, predictable performance, and complex product launches.",
  },
  {
    title: "Engineering Design Systems",
    category: "Design",
    description: "How we build tokenized UI systems for enterprise brands and product teams.",
  },
  {
    title: "Performance Optimization Tactics",
    category: "Performance",
    description: "A technical playbook for frontend speed, caching, and real user metric lift.",
  },
  {
    title: "AI-Assisted Product Development",
    category: "AI",
    description: "Using intelligent tooling to accelerate decision-making, prototyping, and product engineering.",
  },
  {
    title: "Advanced Frontend Architecture",
    category: "Engineering",
    description: "Building modular, composable frontend systems that support scale and maintainability.",
  },
];

export default function Insights() {
  return (
    <PageLayout>
      <PageHero
        kicker="INSIGHTS"
        title={
          <>
            Technical storytelling for design-led engineering and product infrastructure.
          </>
        }
        subtitle="Explore our latest thinking on modern web systems, AI workflows, and performance-driven product development."
      />

      <Section className="space-y-16">
        <SectionHeading
          kicker="BLOG"
          title="Ideas, tactics, and technical guidance from the team." 
          subtitle="Every post reflects our engineering-first mindset and enterprise product focus."
        />

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="glass rounded-4xl border border-border/40 p-8 shadow-panel transition hover:-translate-y-1">
              <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">{post.category}</div>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">{post.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{post.description}</p>
              <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-accent">
                <span>Read article</span>
                <span className="inline-flex h-0.5 w-6 rounded-full bg-accent" />
              </div>
            </article>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
