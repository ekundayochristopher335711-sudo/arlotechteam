import { Link } from "react-router-dom";
import { PageHero, PageLayout } from "../components/site/PageLayout";
import { projects } from "../data/projects";
import { useSEO } from "../lib/useSEO";

function ProjectSection({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const preview = project.screenshot ?? "/images/portfolio-devices.jpg";

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

      {/* ── Right: preview ── */}
      <div className="relative h-[72vw] min-h-96 overflow-hidden bg-[#060d0a] lg:h-screen lg:w-[58%]">
        <img
          src={preview}
          alt={`${project.title} homepage preview`}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 hover:scale-[1.015]"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-l from-background/35 via-transparent to-transparent" />

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
    description:
      "See the websites, web apps, and online stores Arlotech has built for businesses worldwide. Real projects with live previews.",
    path: "/work",
  });

  return (
    <PageLayout>
      <PageHero
        kicker="OUR WORK"
        title="Every site we've built."
        subtitle={`Explore all ${projects.length} projects through real homepage previews, the thinking behind each build, and the details we delivered.`}
        image="/images/portfolio-devices.jpg"
        imageAlt="Responsive website projects displayed across a laptop, tablet, and phone"
        imagePosition="center"
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
