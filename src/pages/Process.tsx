import React from "react";
import { PageLayout, PageHero, Section, SectionHeading } from "../components/site/PageLayout";
import { useSEO } from "../lib/useSEO";

const steps = [
  {
    step: "Discovery Protocol",
    description: "Aligning business goals, technical signals, and user needs into a clear engineering roadmap.",
  },
  {
    step: "UX Intelligence Mapping",
    description: "Building experience systems that are data-informed, modular, and future-ready.",
  },
  {
    step: "Systems Architecture",
    description: "Designing resilient backend services, secure APIs, and scaling product systems end to end.",
  },
  {
    step: "Interface Engineering",
    description: "Crafting premium UI systems with motion, accessibility, and conversion-driven detail.",
  },
  {
    step: "Infrastructure Deployment",
    description: "Deploying cloud pipelines, observability stacks, and resilient delivery flows.",
  },
  {
    step: "QA Automation",
    description: "Ensuring quality with automated checks, performance monitoring, and release controls.",
  },
  {
    step: "Launch Optimization",
    description: "Refining experiences and delivery based on real-time telemetry and product analytics.",
  },
  {
    step: "Scaling & Monitoring",
    description: "Maintaining system health while optimizing for growth, load, and uptime.",
  },
];

export default function Process() {
  useSEO({
    title: "Our Process — How We Build Websites",
    description: "From discovery call to launch — see how Arlotech designs and builds websites step by step. No surprises, just clear communication.",
    path: "/process",
  });

  return (
    <PageLayout>
      <PageHero
        kicker="PROCESS"
        title={
          <>
            A future-driven product timeline designed for precision delivery and product resilience.
          </>
        }
        subtitle="Every phase is engineered to reduce risk, accelerate velocity, and keep complex digital systems aligned with business outcomes."
      />

      <Section className="space-y-16">
        <SectionHeading
          kicker="PIPELINE"
          title="Eight distinct phases for premium product engineering."
          subtitle="From discovery to scaling, each step is a system in itself."
        />

        <div className="space-y-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative rounded-4xl border border-border/30 bg-background/75 p-8 shadow-panel transition hover:border-emerald-300/30 hover:-translate-y-1">
              <div className="absolute left-6 top-0 h-full w-px bg-border/50" />
              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-400/10 text-xl font-semibold text-emerald-300">
                  {index + 1}
                </div>
                <div className="max-w-3xl">
                  <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">{item.step}</div>
                  <p className="mt-3 text-lg font-semibold text-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-4xl border border-border/40 p-10 shadow-panel">
          <div className="label-tech">QUALITY FIRST</div>
          <h2 className="mt-4 text-3xl font-semibold text-foreground">Automated engineering checks and launch safeguards.</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">We layer automation, security, and validation across each release so enterprise builds move quickly without sacrificing stability.</p>
        </div>
        <div className="glass rounded-4xl border border-border/40 p-10 shadow-panel">
          <div className="label-tech">CONTINUOUS MONITORING</div>
          <h2 className="mt-4 text-3xl font-semibold text-foreground">Telemetry driven product evolution.</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">From error analytics to performance telemetry, our delivery is always grounded in real-world system behavior and learnings.</p>
        </div>
      </Section>
    </PageLayout>
  );
}
