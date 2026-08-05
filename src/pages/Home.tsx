import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "../components/site/PageLayout";
import { projects, type Project } from "../data/projects";
import { useSEO } from "../lib/useSEO";
import Hero from "../components/site/Hero";
import { Globe, LayoutDashboard, ShoppingCart, Layers, Palette, Search, Zap, Headphones, ArrowRight } from "lucide-react";

const services = [
  { icon: Globe,           name: "Website Design & Development", description: "Custom-built websites that look great, load fast, and turn visitors into customers." },
  { icon: LayoutDashboard, name: "Web App Development",          description: "Full-featured web apps built for real users — from idea to launch." },
  { icon: ShoppingCart,    name: "E-Commerce Stores",            description: "Online stores designed to sell — fast checkout, mobile-ready, and easy to manage." },
  { icon: Layers,          name: "UI/UX Design",                 description: "Interfaces people enjoy using. Every screen designed with clarity and ease in mind." },
  { icon: Palette,         name: "Brand & Visual Identity",      description: "Logos, colours, and visual style that make your brand instantly recognisable." },
  { icon: Search,          name: "SEO & Search Visibility",      description: "Technical setup so your site shows up when people search for what you offer." },
  { icon: Zap,             name: "Speed & Performance",          description: "We audit and fix slow websites so they rank better and keep visitors from leaving." },
  { icon: Headphones,      name: "Ongoing Support",              description: "Updates, fixes, and security checks after launch — so you're never left on your own." },
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
    description:
      "Arlotech builds custom websites, web apps, and online stores for businesses worldwide. Based in Lagos, Nigeria. Get a free consultation today.",
    path: "/",
  });

  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const featured = projects.filter((p) => p.homepage !== false).slice(0, 2);

  useEffect(() => {
    if (!activeProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  return (
    <PageLayout>
      <Hero />

      {/* ── Services ─────────────────────────────────────── */}
      {/* ── Services ─────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 border-t border-white/[0.05]">
        {/* Glow decorations */}
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.07] blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-amber-400/[0.04] blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-400 mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.08]">
              Everything your business
              <br />
              <span className="bg-linear-to-r from-emerald-400 to-yellow-300 bg-clip-text text-transparent">
                needs online.
              </span>
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              From a brand new website to a fully custom web app — we handle design,
              development, and launch. You stay focused on running your business.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/30 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-emerald-500/[0.08]"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/[0.12] text-emerald-400">
                  <service.icon size={20} />
                </div>
                <h3 className="text-sm font-bold text-white leading-snug">{service.name}</h3>
                <p className="mt-2.5 text-xs leading-6 text-zinc-400">{service.description}</p>
                <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-emerald-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  Learn more <ArrowRight size={10} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Work ─────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12">
          <p className="section-label">Our Work</p>
          <h2 className="mt-2 text-4xl font-bold text-foreground">Sites we've built.</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Explore a selection of our work and open any project to see what we built.
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
              <div
                className={`relative h-48 bg-linear-to-br ${project.color} overflow-hidden flex items-end p-6`}
              >
                {project.screenshot && (
                  <img
                    src={project.screenshot}
                    alt={`${project.title} website preview`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent pointer-events-none z-0" />
                <span className="relative z-10 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs text-white/80">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-emerald-400 transition">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.highlight}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  View details
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6h8M6 2l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </button>
          ))}

          {/* View all card */}
          <Link
            to="/work"
            className="group relative overflow-hidden rounded-3xl border border-border/40 shadow-panel hover:-translate-y-1 hover:border-emerald-400/40 transition flex min-h-80 flex-col items-center justify-end text-center p-10"
          >
            <img
              src="/images/portfolio-devices.jpg"
              alt="A portfolio of responsive websites displayed across multiple devices"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#050b18] via-[#050b18]/75 to-transparent" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/30 bg-[#050b18]/80 mb-6 group-hover:bg-emerald-400/20 transition">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-emerald-400">
                <path
                  d="M4 6h16M4 10h16M4 14h10"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M14 17l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="relative text-xl font-bold text-white group-hover:text-emerald-400 transition">
              Browse some of our projects
            </h3>
            <p className="relative mt-2 text-sm text-zinc-300 max-w-52">
              See the websites, web apps, and online stores we've designed and built.
            </p>
            <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400">
              View all
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M7 2l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
            We're a small studio — which means you work directly with the people building your site, not an
            account manager who passes things along.
          </p>
        </div>
        <div className="grid gap-6 xl:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="glass rounded-3xl border border-border/40 p-8 hover:-translate-y-1 transition"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-white/[0.04] h-48">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-br from-black/20 via-transparent to-black/40" />
              </div>
              <div className="mt-6">
                <p className="text-sm text-muted-foreground">{member.title}</p>
                <h3 className="mt-1 text-2xl font-semibold text-foreground">
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-emerald-400 transition"
                    >
                      {member.name}
                    </a>
                  ) : (
                    member.name
                  )}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border/50 bg-background/80 px-3 py-1 text-xs text-foreground/70"
                  >
                    {skill}
                  </span>
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
              Tell us about your project and we'll get back to you within 24 hours. No commitment, no pressure
              — just a conversation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact#schedule"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-emerald-500 to-amber-400 px-8 py-3.5 text-sm font-bold text-[#07100f] shadow-lg hover:-translate-y-0.5 transition"
              >
                Get in Touch
              </Link>
              <Link
                to="/contact#schedule"
                className="inline-flex items-center justify-center rounded-full border border-border/60 px-8 py-3.5 text-sm font-semibold text-foreground hover:border-emerald-400 hover:text-emerald-400 transition"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Modal ─────────────────────────────────── */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setActiveProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="relative w-full max-w-lg glass rounded-3xl border border-border/50 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-24 bg-linear-to-br ${activeProject.color} flex items-end px-8 pb-5`}>
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                {activeProject.category}
              </span>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <h3 id="project-dialog-title" className="text-2xl font-bold text-foreground">
                  {activeProject.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{activeProject.about}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  What we built
                </p>
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
                <a
                  href={activeProject.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-emerald-400 to-amber-300 px-6 py-3 text-sm font-bold text-[#07100f] shadow-lg hover:-translate-y-0.5 transition"
                >
                  Visit Live Site
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7h10M7 2l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Close
                </button>
              </div>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close project details"
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white/70 hover:text-white transition"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
