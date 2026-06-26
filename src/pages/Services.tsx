import React from "react";
import { Link } from "react-router-dom";
import { PageLayout, PageHero, Section, SectionHeading } from "../components/site/PageLayout";
import { useSEO } from "../lib/useSEO";

const services = [
  {
    title: "Website Design & Development",
    summary: "We design and build custom websites from scratch — no templates, no shortcuts. Every site is built to match your brand and turn visitors into customers.",
    bullets: ["Custom design tailored to your brand", "Mobile-friendly on every screen size", "Fast load times and clean code"],
  },
  {
    title: "Web App Development",
    summary: "Need something more than a website? We build web apps — dashboards, booking systems, client portals — whatever your business needs to run smoothly online.",
    bullets: ["Built for real users, not developers", "Secure login and user accounts", "Easy to update and grow over time"],
  },
  {
    title: "E-Commerce Stores",
    summary: "We build online stores that make it easy for customers to browse and buy. Whether you're selling 10 products or 10,000, we set it up right from the start.",
    bullets: ["Fast and easy checkout", "Product pages that sell", "Payment gateway integration"],
  },
  {
    title: "UI/UX Design",
    summary: "Good design isn't just about looks — it's about making sure visitors find what they need and take action. We design every screen with that in mind.",
    bullets: ["Clear layouts that guide the eye", "Designed for real users", "Prototypes you can test before we build"],
  },
  {
    title: "Brand & Visual Identity",
    summary: "Your brand is the first impression. We create logos, colour palettes, and visual styles that make your business look professional and memorable.",
    bullets: ["Logo design", "Colour palette and typography", "Brand guidelines document"],
  },
  {
    title: "SEO & Search Visibility",
    summary: "We make sure your website shows up when people search for what you offer. From technical setup to page structure, we handle the parts that affect your ranking.",
    bullets: ["Google-friendly site structure", "Fast pages that rank better", "Local and international SEO"],
  },
  {
    title: "Speed & Performance",
    summary: "Slow websites lose visitors. We audit your existing site and fix the issues that are making it slow — so it loads faster and keeps people around longer.",
    bullets: ["Site speed audit", "Image and code optimisation", "Hosting and server improvements"],
  },
  {
    title: "Ongoing Support & Maintenance",
    summary: "After launch, your site still needs care. We offer ongoing support plans so you're never stuck when something breaks or needs updating.",
    bullets: ["Regular updates and security checks", "Content and design changes", "Priority response for emergencies"],
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

      <Section>
        <SectionHeading
          kicker="WHAT WE DO"
          title="Our services, explained simply."
          subtitle="Pick what you need — or talk to us and we'll figure out the right fit together."
        />

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="glass rounded-3xl border border-border/30 p-8 shadow-panel transition hover:-translate-y-1 hover:border-emerald-300/40"
            >
              <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{service.summary}</p>
              <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
                {service.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* How we work */}
      <Section>
        <SectionHeading
          kicker="HOW IT WORKS"
          title="Simple process, no surprises."
          subtitle="We keep things straightforward so you always know what's happening with your project."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <div
              key={item.step}
              className="glass rounded-3xl border border-border/40 p-7 shadow-panel"
            >
              <div className="text-3xl font-black text-emerald-400/40">{item.step}</div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden glass rounded-3xl border border-emerald-500/20 p-12 text-center shadow-panel">
          <div className="absolute inset-0 bg-linear-to-br from-emerald-500/8 to-amber-400/8 pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-foreground">Not sure where to start?</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground max-w-lg mx-auto">
              Book a free 20-minute call and we'll help you figure out exactly what you need — no sales pitch, just honest advice.
            </p>
            <div className="mt-8">
              <Link
                to="/contact#schedule"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-emerald-400 to-amber-300 px-8 py-3.5 text-sm font-bold text-[#07100f] shadow-lg hover:-translate-y-0.5 transition"
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
