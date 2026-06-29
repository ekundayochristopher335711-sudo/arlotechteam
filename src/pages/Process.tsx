import React from "react";
import { Link } from "react-router-dom";
import { PageLayout, PageHero, Section } from "../components/site/PageLayout";
import { useSEO } from "../lib/useSEO";

const steps = [
  { step: "Discovery Call", description: "We talk through your project — what you need, who it's for, and what success looks like. This call is free." },
  { step: "Planning & Quote", description: "We put together a clear plan with timeline, deliverables, and pricing. No surprises — you know exactly what you're getting." },
  { step: "Design", description: "We design the look and feel of your site. You review it, give feedback, and we refine until you're happy." },
  { step: "Development", description: "We build the real thing — clean code, fast pages, mobile-friendly. You get updates along the way." },
  { step: "Review & Testing", description: "We test everything across devices and browsers. You check it, request final changes, and sign off." },
  { step: "Launch", description: "We take the site live. Domain, hosting, SSL — all handled. Your site is out in the world." },
  { step: "Handover & Training", description: "We walk you through how to update content and manage your site. No tech knowledge needed." },
  { step: "Ongoing Support", description: "After launch we're still here. Updates, fixes, changes — we've got you covered." },
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
        kicker="OUR PROCESS"
        title="How we take your project from idea to live website."
        subtitle="A simple, clear process with no jargon. You always know what's happening and what comes next."
      />

      <Section>
        <div className="space-y-6">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative rounded-3xl border border-border/30 bg-background/75 p-8 shadow-panel transition hover:border-emerald-300/30 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-400/10 text-xl font-bold text-emerald-300">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{item.step}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground max-w-2xl">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 p-12 text-center shadow-panel">
          <div className="absolute inset-0 bg-linear-to-br from-emerald-500/8 to-amber-400/8 pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-foreground">Ready to start?</h2>
            <p className="mt-4 text-base text-muted-foreground max-w-md mx-auto">
              The first step is a free call. Tell us what you need and we'll take it from there.
            </p>
            <div className="mt-8">
              <Link
                to="/contact#schedule"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-emerald-400 to-amber-300 px-8 py-3.5 text-sm font-bold text-[#07100f] shadow-lg hover:-translate-y-0.5 transition"
              >
                Book a Free Call
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
