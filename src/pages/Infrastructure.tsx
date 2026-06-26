import React from "react";
import { PageLayout, PageHero, Section, SectionHeading } from "../components/site/PageLayout";
import { useSEO } from "../lib/useSEO";

const stack = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Prisma", "GraphQL"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Docker", "AWS", "Vercel", "Kubernetes", "GitHub Actions"],
  },
  {
    title: "Design",
    items: ["Figma", "Adobe Suite", "Blender", "After Effects", "Design Tokens"],
  },
];

const metrics = [
  { label: "TTFB", value: "78ms" },
  { label: "LCP", value: "1.1s" },
  { label: "Uptime", value: "99.99%" },
  { label: "Deploys", value: "Daily" },
  { label: "Observability", value: "24/7" },
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
        title={
          <>
            Advanced infrastructure crafted for product velocity and enterprise-grade scale.
          </>
        }
        subtitle="A connected technology stack that supports fast iteration, high reliability, and premium digital experiences."
      />

      <Section className="space-y-16">
        <SectionHeading
          kicker="STACK OVERVIEW"
          title="A modern infrastructure foundation for high-performance systems."
          subtitle="From frontend interfaces to cloud-native deployment and creative tooling, each layer is built for product excellence."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stack.map((group) => (
            <div key={group.title} className="glass rounded-4xl border border-border/40 p-8 shadow-panel transition hover:-translate-y-1">
              <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">{group.title}</div>
              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {metrics.map((metric) => (
            <div key={metric.label} className="glass rounded-[1.75rem] border border-border/40 p-6 text-center shadow-panel transition hover:-translate-y-1">
              <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">{metric.label}</div>
              <div className="mt-4 text-4xl font-semibold text-foreground">{metric.value}</div>
            </div>
          ))}
        </div>

        <div className="glass rounded-4xl border border-border/40 p-10 shadow-panel bg-[#0b1222]/90">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="label-tech">DEPLOYMENT PIPELINES</div>
              <h2 className="mt-4 text-3xl font-semibold text-foreground">Automated delivery, observability, and resilience.</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">We build the pipelines that keep your product stable, visible, and ready for rapid iteration with zero surprise launches.</p>
            </div>
            <div className="grid gap-4">
              {[
                "CI/CD orchestration",
                "Continuous delivery safeguards",
                "Infrastructure as code",
                "Monitoring & incident workflows",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-border/30 bg-background/80 p-5 text-sm text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
