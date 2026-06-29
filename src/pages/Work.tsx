import { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "../components/site/PageLayout";
import { projects } from "../data/projects";
import { useSEO } from "../lib/useSEO";

function ProjectSection({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const showScreenshot = project.screenshot && (iframeError || !iframeLoaded);

  return (
    <section className="relative flex flex-col lg:flex-row min-h-screen border-b border-border/30">
      {/* ── Left: project info ── */}
      <div className="flex flex-col justify-center lg:w-[42%] px-8 lg:px-16 py-20 lg:py-0 lg:sticky lg:top-0 lg:h-screen">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl font-black text-foreground/10 leading-none select-none">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="rounded-full border border-border/50 bg-background/80 px-3 py-1 text-xs text-muted-foreground">
              {project.category}
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{project.title}</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">{project.about}</p>

          <div className="mt-8">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">What we built</p>
            <ul className="space-y-3">
              {project.built.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-emerald-400 to-amber-300 px-7 py-3.5 text-sm font-bold text-[#07100f] shadow-lg hover:-translate-y-0.5 transition"
          >
            Visit Live Site
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Right: preview ── */}
      <div className={`lg:w-[58%] h-[70vw] lg:h-screen bg-[#060d0a] relative overflow-hidden`}>

        {/* Screenshot preview (shown while iframe loads, if it errors, or when we want to use a static preview) */}
        {project.screenshot && (
          <img
            src={project.screenshot}
            alt={`${project.title} preview`}
            className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${
              showScreenshot ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {/* Gradient overlay on screenshot */}
        {project.screenshot && showScreenshot && (
          <div className="absolute inset-0 bg-linear-to-l from-background/60 via-transparent to-transparent pointer-events-none z-10" />
        )}

        {/* iframe — hidden until loaded */}
        {!iframeError && (
          <iframe
            src={project.href}
            title={project.title}
            onLoad={() => setIframeLoaded(true)}
            onError={() => setIframeError(true)}
            className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-700 ${
              iframeLoaded ? "opacity-100 z-20" : "opacity-0"
            }`}
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        )}

        {/* Fallback: no screenshot AND iframe blocked */}
        {iframeError && !project.screenshot && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-5 p-10 text-center">
            <div className={`h-20 w-20 rounded-2xl bg-linear-to-br ${project.color} flex items-center justify-center`}>
              <span className="text-4xl font-black text-white/30">{project.title.charAt(0)}</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              This site can't be embedded — click below to open it in a new tab.
            </p>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 px-5 py-2.5 text-sm font-semibold text-emerald-400 hover:bg-emerald-400/10 transition"
            >
              Open site ↗
            </a>
          </div>
        )}

        {/* Open in new tab badge */}
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="absolute top-4 right-4 z-30 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-white/70 hover:text-white hover:bg-black/60 transition backdrop-blur-sm"
        >
          Open site ↗
        </a>

        {/* project number watermark */}
        <span className="absolute bottom-6 right-8 text-7xl font-black text-white/5 select-none leading-none z-10">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}

export default function Work() {
  useSEO({
    title: "Our Work — Websites We've Built",
    description: "See the websites, web apps, and online stores Arlotech has built for businesses worldwide. Real projects with live previews.",
    path: "/work",
  });

  return (
    <PageLayout>
      {/* Header */}
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-16">
        <p className="section-label">Our Work</p>
        <h1 className="mt-3 text-5xl md:text-6xl font-black tracking-tighter text-foreground">
          Every site we've built.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl">
          Scroll through all {projects.length} projects. Each one shows a live preview of the site alongside what we built and why.
        </p>
        <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-emerald-400">
            <path d="M8 2v12M4 10l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Scroll down to browse
        </div>
      </div>

      {/* Project sections */}
      {projects.map((project, i) => (
        <ProjectSection key={project.title} project={project} index={i} />
      ))}

      {/* Bottom CTA */}
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-foreground">Want a site like these?</h2>
        <p className="mt-4 text-base text-muted-foreground max-w-md mx-auto">
          Tell us about your project — we'll get back to you within 24 hours.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            to="/contact#schedule"
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-emerald-400 to-amber-300 px-8 py-3.5 text-sm font-bold text-[#07100f] shadow-lg hover:-translate-y-0.5 transition"
          >
            Start a Project
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-border/60 px-8 py-3.5 text-sm font-semibold text-foreground hover:border-emerald-400 hover:text-emerald-400 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
