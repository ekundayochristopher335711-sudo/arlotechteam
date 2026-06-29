import React from "react";
import { PageLayout, PageHero, Section } from "../components/site/PageLayout";
import { useSEO } from "../lib/useSEO";

const stack = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Prisma"],
  },
  {
    title: "Hosting & Tools",
    items: ["Vercel", "Netlify", "GitHub", "Cloudflare"],
  },
  {
    title: "Design",
    items: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva"],
  },
];

export default function Infrastructure() {
  useSEO({
    title: "Tech Stack — Tools We Use to Build Websites",
    description: "The technologies Arlotech uses to build fast, reliable websites and web apps — React, TypeScript, Tailwind CSS, and more.",
    path: "/infrastructure",
  });

  return (
    <PageLayout>
      <PageHero
        kicker="TECH STACK"
        title="The tools we use to build your website."
        subtitle="Modern, reliable technologies that make your site fast, secure, and easy to maintain."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stack.map((group) => (
            <div
              key={group.title}
              className="glass rounded-3xl border border-border/40 p-8 shadow-panel transition hover:-translate-y-1"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-400">{group.title}</h3>
              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="glass rounded-3xl border border-border/40 p-10 shadow-panel">
          <h2 className="text-2xl font-bold text-foreground">Why does the tech stack matter?</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground max-w-3xl">
            The tools we use directly affect how fast your site loads, how secure it is, and how easy it is to update later. We pick modern, battle-tested technologies — not the trendiest thing, but what actually works best for your project. Every site we build loads fast, works on all devices, and is easy for us to maintain and improve over time.
          </p>
        </div>
      </Section>
    </PageLayout>
  );
}
