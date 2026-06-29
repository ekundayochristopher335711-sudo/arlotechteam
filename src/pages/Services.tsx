import React from "react";
import { Link } from "react-router-dom";
import { PageLayout, PageHero, Section, SectionHeading } from "../components/site/PageLayout";
import { useSEO } from "../lib/useSEO";

const services = [
  {
    title: "Website Design & Development",
    summary: "Beautiful, responsive websites built for performance and a seamless user experience.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Web Application Development",
    summary: "Custom web applications that solve real problems and scale with your business.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
  },
  {
    title: "E-Commerce Solutions",
    summary: "Online stores that are secure, fast, and built to convert visitors into customers.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    title: "SEO & Digital Marketing",
    summary: "Improve your visibility, attract the right audience, and grow your online presence.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    summary: "Interfaces people enjoy using — designed with clarity, flow, and conversion in mind.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: "Brand & Visual Identity",
    summary: "Logos, colours, and visual systems that make your brand instantly recognisable.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <path d="M17.5 10.5l4 4-8 8H8v-5.5l9.5-6.5z" />
        <path d="M6 14l-3.5 3.5a2.12 2.12 0 003 3L9 17" />
      </svg>
    ),
  },
  {
    title: "Speed & Performance",
    summary: "We audit and fix slow websites so they rank better and keep visitors from leaving.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support & Maintenance",
    summary: "Updates, fixes, and security checks after launch — so your site stays healthy.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const process = [
  {
    step: "1",
    title: "Discovery Call",
    description: "We start with a free call to understand what you need, who your customers are, and what success looks like for your project.",
  },
  {
    step: "2",
    title: "Design",
    description: "We design the look and layout of your site or app. You review it, give feedback, and we refine it until you're happy.",
  },
  {
    step: "3",
    title: "Build",
    description: "Once the design is approved, we build the full thing. You get updates along the way so there are no surprises.",
  },
  {
    step: "4",
    title: "Launch",
    description: "We test everything, then go live. We stay on hand after launch to fix any issues quickly.",
  },
];

export default function Services() {
  useSEO({
    title: "Web Design & Development Services",
    description: "Website design, web app development, e-commerce stores, UI/UX design, SEO, and ongoing support. Based in Lagos, working with clients worldwide.",
    path: "/services",
  });

  return (
    <PageLayout>
      <PageHero
        kicker="SERVICES"
        title="Everything you need to build a strong online presence."
        subtitle="From a simple website to a full web app — we handle design, development, and launch. You stay focused on your business."
      />

      {/* Services grid */}
      <Section>
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">What We Do</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Our Services, Built Around You</h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            From idea to launch and beyond, we provide end-to-end digital solutions tailored to your business goals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-[#0f1f1a] border border-emerald-900/30 p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-emerald-500/10 hover:border-emerald-500/30"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-950/60 text-emerald-400">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-base font-bold text-foreground leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {service.summary}
              </p>

              {/* Arrow button */}
              <div className="mt-6">
                <Link
                  to="/contact#schedule"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500/30 text-emerald-400 transition group-hover:bg-emerald-500 group-hover:text-[#07100f] group-hover:border-emerald-500"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-linear-to-r from-emerald-500 to-amber-400 opacity-0 group-hover:opacity-100 transition" />
            </article>
          ))}
        </div>
      </Section>

      {/* How we work */}
      <Section>
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">How It Works</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Simple Process, No Surprises</h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            We keep things straightforward so you always know what's happening with your project.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <div
              key={item.step}
              className="group relative overflow-hidden rounded-2xl bg-[#0f1f1a] border border-emerald-900/30 p-7 shadow-lg transition hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-[#07100f] text-lg font-black">
                {item.step}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-linear-to-r from-emerald-500 to-amber-400 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 p-12 text-center shadow-panel bg-[#0f1f1a]">
          <div className="absolute inset-0 bg-linear-to-br from-emerald-500/8 to-amber-400/8 pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-foreground">Not sure where to start?</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground max-w-lg mx-auto">
              Book a free 20-minute call and we'll help you figure out exactly what you need — no sales pitch, just honest advice.
            </p>
            <div className="mt-8">
              <Link
                to="/contact#schedule"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-linear-to-r from-emerald-400 to-amber-300 px-8 py-3.5 text-sm font-bold text-[#07100f] shadow-lg hover:-translate-y-0.5 transition"
              >
                Book a Free Call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
