import { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "../components/site/PageLayout";
import { projects, type Project } from "../data/projects";
import { useSEO } from "../lib/useSEO";
import Hero from "../components/site/Hero";

const services = [
  { name: "Website Design & Development", description: "Custom-built websites that look great, load fast, and turn visitors into customers." },
  { name: "Web App Development", description: "Full-featured web apps built for real users — from idea to launch." },
  { name: "E-Commerce Stores", description: "Online stores designed to sell — fast checkout, mobile-ready, and easy to manage." },
  { name: "UI/UX Design", description: "Interfaces people enjoy using. Every screen designed with clarity and ease in mind." },
  { name: "Brand & Visual Identity", description: "Logos, colours, and visual style that make your brand instantly recognisable." },
  { name: "SEO & Search Visibility", description: "Technical setup so your site shows up when people search for what you offer." },
  { name: "Speed & Performance", description: "We audit and fix slow websites so they rank better and keep visitors from leaving." },
  { name: "Ongoing Support", description: "Updates, fixes, and security checks after launch — so you're never left on your own." },
];

const team = [
  {
    title: "Lead Designer & Developer",
    name: "Christopher .s",
    linkedin: "https://www.linkedin.com/in/christopher-segun-648867406/",
    image: "/logos/christopher.jpg",
    skills: ["Web Design", "Frontend Development", "Design Systems"],
  },
  {
    title: "Full-Stack Developer",
    name: "Demilade (Grandtech)",
    image: "/logos/grandtech.jpg",
    skills: ["Web Applications", "Backend Development", "Performance"],
  },
  {
    title: "UI Designer & Content",
    name: "Emmy Nuelo",
    image: "/logos/maya.jpg",
    skills: ["UI Design", "Accessibility", "Content Writing"],
  },
];

export default function Home() {
  useSEO({
    title: "Web Design & Development Studio in Lagos, Nigeria",
    description: "Arlotech builds custom websites, web apps, and online stores for businesses worldwide. Based in Lagos, Nigeria. Get a free consultation today.",
    path: "/",
  });

  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.homepage !== false).slice(0, 2);

  return (
    <PageLayout>
      <Hero />

      {/* Dark → White transition */}
      <div className="h-32 bg-gradient-to-b from-[#07120C] to-white" />

      {/* ── Services ─────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">What We Do</p>
            <h2 className="mt-2 text-4xl font-bold text-[#111]">Everything you need to build a strong online presence.</h2>
            <p className="mt-4 text-base leading-7 text-[#555] max-w-2xl">
              From a brand new website to a fully custom web app — we handle design, development, and launch. You stay focused on running your business.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md hover:-translate-y-1 hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-[#111]">{service.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[#666]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White → Dark transition */}
      <div className="h-32 bg-gradient-to-b from-white to-[#07120C]" />

      {/* ── Our Work ─────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12">
          <p className="section-label">Our Work</p>
          <h2 className="mt-2 text-4xl font-bold text-foreground">Sites we've built.</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Click a card to learn more, see some of  our projects.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {/* 2 featured project cards */}
          {featured.map((project) => (
            <button
              key={project.title}
              onClick={() => setActiveProject(project)}
              className="group glass overflow-hidden rounded-3xl border border-border/40 shadow-panel hover:-translate-y-1 hover:border-emerald-400/40 transition text-left w-full"
            >
              <div className={`relative h-48 bg-linear-to-br ${project.color} overflow-hidden flex items-end p-6`}>
                {project.title === "Breadwrapz" ? (
                <iframe
                  src={project.href}
                  title={`${project.title} mini preview`}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms"
                  className="absolute inset-0 h-full w-full border-0 object-cover z-10"
                />
              ) : (
                  project.screenshot && (
                    <img
                      src={project.screenshot}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
                    />
                  )
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent pointer-events-none z-0" />
                <span className="relative z-10 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs text-white/80">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-emerald-400 transition">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.highlight}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  View details
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </div>
            </button>
          ))}

          {/* View all card */}
          <Link
            to="/work"
            className="group glass overflow-hidden rounded-3xl border border-border/40 shadow-panel hover:-translate-y-1 hover:border-emerald-400/40 transition flex flex-col items-center justify-center text-center p-10 min-h-80"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 mb-6 group-hover:bg-emerald-400/20 transition">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-emerald-400">
                <path d="M4 6h16M4 10h16M4 14h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M14 17l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-400 transition">Browse some of our projects</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-45">
              Browse some of our projects. Breadwrapz will now use the live iframe in that section as well.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400">
              View all
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </Link>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12">
          <p className="section-label">The Team</p>
          <h2 className="mt-2 text-4xl font-bold text-foreground">Three people, one focused team.</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground max-w-2xl">
            We're a small studio — which means you work directly with the people building your site, not an account manager who passes things along.
          </p>
        </div>
        <div className="grid gap-6 xl:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="glass rounded-3xl border border-border/40 p-8 hover:-translate-y-1 transition">
              <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-[#081016] h-48">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-linear-to-br from-black/20 via-transparent to-black/40" />
              </div>
              <div className="mt-6">
                <p className="text-sm text-muted-foreground">{member.title}</p>
                <h3 className="mt-1 text-2xl font-semibold text-foreground">
                  {member.linkedin ? (
                    <a href={member.linkedin} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">{member.name}</a>
                  ) : member.name}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-border/50 bg-background/80 px-3 py-1 text-xs text-foreground/70">{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden glass rounded-3xl border border-emerald-500/20 p-12 text-center shadow-panel">
          <div className="absolute inset-0 bg-linear-to-br from-emerald-500/8 to-amber-400/8 pointer-events-none" />
          <div className="relative">
            <h2 className="text-4xl font-bold text-foreground">Ready to build something?</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground max-w-lg mx-auto">
              Tell us about your project and we'll get back to you within 24 hours. No commitment, no pressure — just a conversation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link to="/contact#schedule" className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-emerald-500 to-amber-400 px-8 py-3.5 text-sm font-bold text-[#07100f] shadow-lg hover:-translate-y-0.5 transition">
                Get in Touch
              </Link>
              <Link to="/contact#schedule" className="inline-flex items-center justify-center rounded-full border border-border/60 px-8 py-3.5 text-sm font-semibold text-foreground hover:border-emerald-400 hover:text-emerald-400 transition">
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Modal ─────────────────────────────────── */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setActiveProject(null)}>
          <div className="relative w-full max-w-lg glass rounded-3xl border border-border/50 shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className={`h-24 bg-linear-to-br ${activeProject.color} flex items-end px-8 pb-5`}>
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">{activeProject.category}</span>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground">{activeProject.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{activeProject.about}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">What we built</p>
                <ul className="space-y-2.5">
                  {activeProject.built.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <a href={activeProject.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-emerald-400 to-amber-300 px-6 py-3 text-sm font-bold text-[#07100f] shadow-lg hover:-translate-y-0.5 transition">
                  Visit Live Site
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <button onClick={() => setActiveProject(null)} className="text-sm text-muted-foreground hover:text-foreground transition">Close</button>
              </div>
            </div>
            <button onClick={() => setActiveProject(null)} className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white/70 hover:text-white transition">✕</button>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
