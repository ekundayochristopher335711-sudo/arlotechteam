import React from "react";
import { Link } from "react-router-dom";
import { PageLayout, Section } from "../components/site/PageLayout";
import { useSEO } from "../lib/useSEO";

const services = [
  {
    title: "Website Design & Development",
    summary: "Beautiful, responsive websites built for performance and a seamless user experience.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Web Application Development",
    summary: "Custom web applications that solve real problems and scale with your business.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
  },
  {
    title: "E-Commerce Solutions",
    summary: "Online stores that are secure, fast, and built to convert visitors into customers.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    title: "SEO & Digital Marketing",
    summary: "Improve your visibility, attract the right audience, and grow your online presence.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    summary: "Interfaces people enjoy using — designed with clarity, flow, and conversion in mind.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Speed & Performance",
    summary: "We audit and fix slow websites so they rank better and keep visitors from leaving.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support",
    summary: "Updates, fixes, and security checks after launch — so your site stays healthy.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const process = [
  { step: "1", title: "Discovery Call", description: "We start with a free call to understand your project and goals." },
  { step: "2", title: "Design", description: "We design the look and layout. You review and give feedback." },
  { step: "3", title: "Build", description: "We build the full thing with updates along the way." },
  { step: "4", title: "Launch", description: "We test everything, go live, and stay on hand after launch." },
];

export default function Services() {
  useSEO({
    title: "Web Design & Development Services",
    description: "Website design, web app development, e-commerce stores, UI/UX design, SEO, and ongoing support. Based in Lagos, working with clients worldwide.",
    path: "/services",
  });

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/40 to-background" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="section-label mb-4">SERVICES</div>
          <h1 className="text-4xl md:text-6xl font-black uppercase max-w-4xl tracking-tight text-foreground">
            Everything you need to build a strong online presence.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            From a simple website to a full web app — we handle design, development, and launch. You stay focused on your business.
          </p>
        </div>
      </section>

      {/* Services — light section */}
      <section className="bg-[#eef5f0] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">What We Do</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#111]">Our Services, Built Around You</h2>
            <p className="mt-4 text-base text-[#555] max-w-2xl mx-auto">
              From idea to launch and beyond, we provide end-to-end digital solutions tailored to your business goals.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-600">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="mt-5 text-[15px] font-bold text-[#111] leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-[#666]">
                  {service.summary}
                </p>

                {/* Arrow */}
                <div className="mt-6">
                  <Link
                    to="/contact#schedule"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-300 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                {/* Bottom green accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-linear-to-r from-emerald-500 to-emerald-400" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process — back to dark */}
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
              className="group relative overflow-hidden rounded-2xl border border-border/40 p-7 glass shadow-panel transition hover:-translate-y-1"
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
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 p-12 text-center shadow-panel">
          <div className="absolute inset-0 bg-linear-to-br from-emerald-500/8 to-amber-400/8 pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-foreground">Not sure where to start?</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground max-w-lg mx-auto">
              Book a free call and we'll help you figure out exactly what you need — no sales pitch, just honest advice.
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
