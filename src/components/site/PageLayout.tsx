import { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <SiteNav />
      <main className="flex-1 pt-16">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({ kicker, title, subtitle }: { kicker: string; title: ReactNode; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 grid-overlay opacity-40 animate-grid-pan" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/40 to-background" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="label-tech mb-4">{kicker}</div>
        <h1 className="hero-title text-4xl md:text-6xl uppercase max-w-4xl">{title}</h1>
        {subtitle && <p className="hero-subtitle mt-6 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-7xl px-6 py-20 ${className}`}>{children}</section>;
}

export function SectionHeading({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12 max-w-3xl">
      {kicker && <div className="label-tech mb-3">{kicker}</div>}
      <h2 className="section-title text-3xl md:text-5xl uppercase tracking-[-0.04em]">{title}</h2>
      {subtitle && <p className="section-subtitle mt-4 text-muted-foreground text-lg">{subtitle}</p>}
    </div>
  );
}
