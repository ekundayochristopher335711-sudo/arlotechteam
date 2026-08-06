import { Link } from "react-router-dom";
import { PageHero, PageLayout } from "../components/site/PageLayout";
import { projects } from "../data/projects";
import { useSEO } from "../lib/useSEO";

function ProjectSection({ project, index }: { project: (typeof projects)[0]; index: number }) {
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
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              What we built
            </p>
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
              <path
                d="M2 7h10M7 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Right: gradient panel ── */}
      <div className={`relative h-[72vw] min-h-96 overflow-hidden lg:h-screen lg:w-[58%] bg-linear-to-br ${project.color}`}>
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow orb */}
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-[80px] pointer-events-none" />

        {/* Browser chrome mockup */}
        <div className="absolute inset-8 lg:inset-16 flex flex-col rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm overflow-hidden shadow-2xl">
          {/* Browser bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/20 shrink-0">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            <div className="mx-3 flex-1 rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/40 truncate">
              {project.href.replace("https://", "")}
            </div>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 text-[10px] text-white/50 hover:text-white/80 transition"
            >
              ↗
            </a>
          </div>

          {/* Content area */}
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[.25em] text-white/40 mb-4">{project.category}</p>
            <h3 className="text-2xl lg:text-4xl font-black text-white/80 leading-tight">{project.title}</h3>
            <p className="mt-3 text-sm text-white/40 max-w-xs">{project.highlight}</p>
          </div>
        </div>

        {/* Project number watermark */}
        <span className="absolute bottom-4 right-6 text-8xl font-black text-white/[0.04] select-none leading-none z-10">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}

export default function Work() {
  useSEO({
    title: "Our Work — Websites We've Built",
    description:
      "See the websites, web apps, and online stores Arlotech has built for businesses worldwide. Real projects with live previews.",
    path: "/work",
  });

  return (
    <PageLayout>
      <PageHero
        kicker="OUR WORK"
        title="Every site we've built."
        subtitle={`${projects.length} real projects — the thinking behind each build and the details we delivered.`}
      />

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
