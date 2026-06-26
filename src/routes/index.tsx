import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, Section, SectionHeading } from "@/components/site/PageLayout";
import {
  ArrowRight, Cpu, Layers, Rocket, Activity, ShieldCheck, Gauge, Sparkles,
  Code2, Workflow, Cloud, LineChart, Palette, Database, Wand2, Globe,
  Terminal, Boxes, GitBranch, Server,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arlotech — Digital Infrastructure" },
      { name: "description", content: "Elite web engineering, UI systems, and scalable product architecture for ambitious startups and enterprise teams." },
      { property: "og:title", content: "Arlotech — Digital Infrastructure" },
      { property: "og:description", content: "Elite web engineering, UI systems, and scalable product architecture for ambitious startups and enterprise teams." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <PageLayout>
      <Hero />
      <Metrics />
      <CoreDivision />
      <Services />
      <CaseStudies />
      <Pipeline />
      <Stack />
      <Trust />
      <Insights />
      <Careers />
      <FinalCTA />
    </PageLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-50 animate-grid-pan" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-primary/15 blur-[140px]" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/30 to-background" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-32 lg:pt-40">
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="label-tech">Accepting Q2 Engagements</span>
          </span>
          <span className="glass rounded-full px-3 py-1.5 text-xs label-tech">v.2026.5</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[0.95] max-w-5xl">
          We engineer <span className="gradient-text">digital infrastructure</span> for modern brands.
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground">
          Elite web engineering, UI systems, and scalable product architecture for ambitious
          startups and enterprise teams.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-glow hover:scale-105 transition-transform">
            Initiate Project <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full glass border-primary/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-primary transition">
            Explore Systems
          </Link>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-4">
          <TerminalCard />
          <FloatingPanel />
          <FloatingPanel variant="metrics" />
        </div>
      </div>
    </section>
  );
}

function TerminalCard() {
  return (
    <div className="glass-strong rounded-xl overflow-hidden shadow-card relative scanline">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5 bg-background/40">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
        <span className="ml-2 font-mono text-[11px] text-muted-foreground">~/arlotech/deploy</span>
      </div>
      <pre className="font-mono text-[12px] leading-relaxed p-4 text-muted-foreground">
{`> arlo deploy --env=prod
  ✓ build  ........... 18.4s
  ✓ tests  ........... 312 passing
  ✓ lighthouse ....... 98 / 100
  ✓ ssr cache ........ warm
  ✓ edge regions ..... 18 active

  `}<span className="text-primary">→ deployment stable · 99.98%</span>
      </pre>
    </div>
  );
}

function FloatingPanel({ variant }: { variant?: "metrics" }) {
  if (variant === "metrics") {
    return (
      <div className="glass-strong rounded-xl p-5 shadow-card animate-float">
        <div className="label-tech mb-3">Live Telemetry</div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { l: "TTFB", v: "84ms" },
            { l: "LCP", v: "1.1s" },
            { l: "CLS", v: "0.01" },
            { l: "INP", v: "112ms" },
          ].map((m) => (
            <div key={m.l}>
              <div className="text-xs text-muted-foreground font-mono">{m.l}</div>
              <div className="text-xl font-bold text-primary">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="glass-strong rounded-xl p-5 shadow-card">
      <div className="label-tech mb-3">Architecture Map</div>
      <div className="space-y-2 font-mono text-[12px]">
        {["edge/", "  ├─ middleware.ts", "  └─ cache.ts", "api/", "  ├─ routes/", "  └─ workers/", "ui/", "  └─ system/"].map((l) => (
          <div key={l} className="text-muted-foreground">{l}</div>
        ))}
      </div>
    </div>
  );
}

function Metrics() {
  const metrics = [
    { v: "99.98%", l: "Deployment Stability", i: ShieldCheck },
    { v: "<1.2s", l: "Average Load Time", i: Gauge },
    { v: "40+", l: "Production Systems", i: Rocket },
    { v: "12M+", l: "Combined User Reach", i: Activity },
    { v: "24/7", l: "Infrastructure Monitoring", i: Cpu },
  ];
  return (
    <Section>
      <SectionHeading kicker="Engineering Metrics" title="Numbers that ship." subtitle="Production telemetry across the systems we engineer and operate." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {metrics.map((m) => (
          <div key={m.l} className="glass rounded-xl p-6 glow-border relative group hover:-translate-y-1 transition">
            <m.i className="h-5 w-5 text-primary mb-4" />
            <div className="text-3xl md:text-4xl font-bold gradient-text">{m.v}</div>
            <div className="mt-2 text-xs text-muted-foreground uppercase tracking-wider">{m.l}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CoreDivision() {
  const team = [
    { role: "Lead Product Engineer", name: "C. Sagun", tags: ["TypeScript", "React", "Distributed Systems"], stack: "Next.js · Node · Postgres" },
    { role: "Senior UI/UX Systems Architect", name: "M. Ardent", tags: ["Design Systems", "Motion", "Accessibility"], stack: "Figma · Framer · Tokens" },
    { role: "Infrastructure & Performance Engineer", name: "K. Voss", tags: ["DevOps", "Observability", "Edge"], stack: "AWS · K8s · CloudFlare" },
  ];
  return (
    <Section>
      <SectionHeading kicker="Core Division" title="Three operators. One team." subtitle="A boutique engineering cell built for precision, speed, and ownership." />
      <div className="grid md:grid-cols-3 gap-5">
        {team.map((t) => (
          <div key={t.role} className="group relative glass-strong rounded-2xl p-6 glow-border hover:shadow-glow transition">
            <div className="h-44 md:h-52 rounded-3xl bg-linear-to-br from-primary/20 via-background to-background border border-border mb-5 relative overflow-hidden">
              <div className="absolute inset-0 grid-overlay opacity-30" />
              <div className="absolute bottom-3 left-3 label-tech">{t.name}</div>
            </div>
            <h3 className="font-bold text-lg">{t.role}</h3>
            <p className="mt-2 text-xs font-mono text-muted-foreground">{t.stack}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {t.tags.map((tag) => (
                <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-primary/30 text-primary/90">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const SERVICES = [
  { i: Code2, t: "Full-Stack Platform Engineering", d: "End-to-end engineering for production-grade web platforms." },
  { i: Palette, t: "Enterprise UI/UX Systems", d: "Tokenized, scalable design systems built for velocity." },
  { i: Boxes, t: "SaaS Product Architecture", d: "Multi-tenant systems engineered for scale and reliability." },
  { i: Wand2, t: "AI Workflow Integration", d: "LLM-powered workflows wired into your product surface." },
  { i: Server, t: "API Infrastructure", d: "Typed, observable APIs with first-class developer ergonomics." },
  { i: Gauge, t: "Performance Optimization", d: "Core Web Vitals, edge caching, and runtime budgets." },
  { i: Sparkles, t: "Motion Design Systems", d: "Composable motion language wired into your component library." },
  { i: LineChart, t: "Conversion-Focused Interfaces", d: "Funnels engineered with intent, instrumentation, and clarity." },
  { i: Layers, t: "Brand System Engineering", d: "Identity that scales from product to marketing surface." },
  { i: Globe, t: "Technical SEO Optimization", d: "Schema, rendering, and crawl strategy for organic growth." },
  { i: Cloud, t: "Cloud Deployment Pipelines", d: "Immutable CI/CD with rollback safety and audit trails." },
  { i: Workflow, t: "Scalability Consulting", d: "Architecture reviews and forward-loaded planning." },
];

function Services() {
  return (
    <Section>
      <SectionHeading kicker="Capability Matrix" title="Twelve disciplines. One pipeline." subtitle="Composable services delivered as a single engineering surface." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.map((s) => (
          <div key={s.t} className="group glass rounded-xl p-6 border border-border hover:border-primary/50 hover:bg-card/80 transition">
            <s.i className="h-6 w-6 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Link to="/services" className="inline-flex items-center gap-2 text-primary text-sm uppercase tracking-wider">
          View full capability matrix <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}

const CASES = [
  { cat: "SaaS", t: "Northwind OS", d: "Workspace platform rebuilt on edge runtime.", m: ["+42% activation", "1.1s LCP", "18 regions"] },
  { cat: "Fintech", t: "Lattice Ledger", d: "Realtime ledger UI with sub-100ms updates.", m: ["99.99% uptime", "−61% TTI", "SOC2"] },
  { cat: "AI Platform", t: "Mirrorloop", d: "LLM dashboards with streaming evaluations.", m: ["12M events/day", "+3.4x ARR", "$0 idle cost"] },
  { cat: "E-Commerce", t: "Argent & Oak", d: "Headless storefront with content-aware caching.", m: ["+28% conv.", "0.04 CLS", "−72% bundle"] },
];

function CaseStudies() {
  return (
    <Section>
      <SectionHeading kicker="Selected Work" title="Systems we shipped." subtitle="Engineering-led launches with measurable production outcomes." />
      <div className="grid md:grid-cols-2 gap-5">
        {CASES.map((c) => (
          <Link to="/case-studies" key={c.t} className="group glass-strong rounded-2xl overflow-hidden glow-border hover:shadow-glow transition">
            <div className="aspect-[16/9] relative bg-linear-to-br from-primary/10 via-background to-background border-b border-border">
              <div className="absolute inset-0 grid-overlay opacity-40" />
              <div className="absolute top-4 left-4 label-tech glass rounded-full px-3 py-1">{c.cat}</div>
              <div className="absolute bottom-4 right-4 text-xs font-mono text-muted-foreground">/case-study/{c.t.toLowerCase().replace(/\s/g, "-")}</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">{c.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.m.map((x) => (
                  <span key={x} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono">{x}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

const PIPELINE = [
  "Discovery Protocol", "UX Intelligence Mapping", "Systems Architecture", "Interface Engineering",
  "Infrastructure Deployment", "QA Automation", "Launch Optimization", "Scaling & Monitoring",
];

function Pipeline() {
  return (
    <Section>
      <SectionHeading kicker="Development Pipeline" title="Eight phases. One trajectory." subtitle="A repeatable engineering protocol — predictable, instrumented, accountable." />
      <ol className="relative grid md:grid-cols-2 gap-4">
        {PIPELINE.map((p, i) => (
          <li key={p} className="glass rounded-xl p-5 flex items-start gap-4 border border-border hover:border-primary/40 transition">
            <span className="font-mono text-xs text-primary border border-primary/30 rounded-md px-2 py-1">0{i + 1}</span>
            <div>
              <div className="font-bold">{p}</div>
              <div className="text-xs text-muted-foreground mt-1 font-mono">phase.{String(i + 1).padStart(2, "0")}.executing</div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

const STACK_GROUPS = [
  { g: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"] },
  { g: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Prisma", "GraphQL"] },
  { g: "Cloud & DevOps", items: ["Docker", "AWS", "Vercel", "Kubernetes", "GitHub Actions"] },
  { g: "Design", items: ["Figma", "Adobe Suite", "Blender", "After Effects"] },
];

function Stack() {
  return (
    <Section>
      <SectionHeading kicker="Infrastructure Stack" title="Technologies in production." subtitle="The composable toolkit behind every system we ship." />
      <div className="grid md:grid-cols-2 gap-5">
        {STACK_GROUPS.map((g) => (
          <div key={g.g} className="glass-strong rounded-2xl p-6 glow-border">
            <div className="flex items-center gap-2 mb-4">
              <Database className="h-4 w-4 text-primary" />
              <h3 className="font-bold uppercase tracking-widest text-sm">{g.g}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span key={i} className="font-mono text-xs px-3 py-1.5 rounded-md border border-border bg-background/40 hover:border-primary/50 hover:text-primary transition">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const QUOTES = [
  { n: "Lena V.", c: "Founder, Northwind", q: "They didn't just build the UI — they shipped the engineering culture." },
  { n: "Ravi P.", c: "CTO, Lattice", q: "The most disciplined engineering partner we've ever onboarded." },
  { n: "Owen K.", c: "Head of Product, Mirrorloop", q: "Production-grade work, delivered with startup tempo." },
];

function Trust() {
  return (
    <Section>
      <SectionHeading kicker="Endorsements" title="Trusted by operators." />
      <div className="grid md:grid-cols-3 gap-5">
        {QUOTES.map((q) => (
          <figure key={q.n} className="glass rounded-2xl p-6 glow-border">
            <Terminal className="h-5 w-5 text-primary mb-4" />
            <blockquote className="text-base leading-relaxed">"{q.q}"</blockquote>
            <figcaption className="mt-5 text-xs font-mono text-muted-foreground">
              {q.n} · {q.c}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-6 opacity-60">
        {["NORTHWIND", "LATTICE", "MIRRORLOOP", "ARGENT", "HELIX", "VANTA"].map((l) => (
          <div key={l} className="font-mono text-xs tracking-[0.3em]">{l}</div>
        ))}
      </div>
    </Section>
  );
}

const POSTS = [
  { t: "Scaling Modern Web Applications", d: "Patterns for stateful systems under real-world load." },
  { t: "Engineering Design Systems", d: "Tokens, primitives, and the contract between teams." },
  { t: "Performance Optimization Tactics", d: "From budgets to runtime — a working playbook." },
];

function Insights() {
  return (
    <Section>
      <SectionHeading kicker="Insights" title="Field notes from the team." />
      <div className="grid md:grid-cols-3 gap-5">
        {POSTS.map((p) => (
          <Link to="/insights" key={p.t} className="group glass rounded-2xl p-6 border border-border hover:border-primary/50 transition">
            <div className="label-tech mb-3">Engineering</div>
            <h3 className="font-bold text-lg group-hover:text-primary transition">{p.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            <div className="mt-5 inline-flex items-center gap-1 text-xs text-primary uppercase tracking-wider">
              Read protocol <ArrowRight className="h-3 w-3" />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function Careers() {
  return (
    <Section>
      <SectionHeading kicker="Careers" title="Build with the team." subtitle="Remote-first, ownership-heavy, engineering-led. Open invitations for senior operators." />
      <div className="grid md:grid-cols-2 gap-4">
        {[
          "Frontend Engineer", "UI Systems Designer", "Motion Designer", "Backend Engineer",
        ].map((r) => (
          <Link to="/careers" key={r} className="glass rounded-xl p-5 flex items-center justify-between border border-border hover:border-primary/50 transition group">
            <div>
              <div className="font-bold">{r}</div>
              <div className="text-xs text-muted-foreground font-mono mt-1">Remote · Full-time · Senior</div>
            </div>
            <GitBranch className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
          </Link>
        ))}
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 my-20">
      <div className="relative overflow-hidden glass-strong rounded-3xl p-12 md:p-20 text-center glow-border">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="relative">
          <div className="label-tech mb-5">Final Protocol</div>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">
            Build something that <span className="gradient-text">outperforms.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
            Partner with a systems-focused web engineering team engineered for scale.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-glow hover:scale-105 transition">
              Start a Brief
            </Link>
            <Link to="/contact#schedule" className="rounded-full glass border-primary/40 px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-primary transition">
              Schedule Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
