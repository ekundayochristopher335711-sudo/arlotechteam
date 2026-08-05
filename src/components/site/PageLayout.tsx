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

type PageHeroProps = {
  kicker: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
};

export function PageHero({
  kicker,
  title,
  subtitle,
  image,
  imageAlt = "",
  imagePosition = "center",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#050b18] text-white">
      {/* Glow decorations */}
      <div className="absolute -bottom-10 -left-10 h-[400px] w-[400px] rounded-full bg-emerald-500/[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-amber-400/[0.04] blur-[100px] pointer-events-none" />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div
        className={`relative mx-auto grid min-h-[520px] ${image ? "max-w-screen-2xl lg:grid-cols-[0.94fr_1.06fr]" : "max-w-7xl"}`}
      >
        <div className="relative z-10 flex items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-emerald-400">{kicker}</p>
            <h1 className="text-4xl font-black tracking-tight leading-[1.08] text-white sm:text-5xl lg:text-6xl">{title}</h1>
            {subtitle && (
              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">{subtitle}</p>
            )}
          </div>
        </div>

        {image ? (
          <div className="relative min-h-80 overflow-hidden border-t border-white/[0.06] lg:min-h-full lg:border-l lg:border-t-0">
            <img
              src={image}
              alt={imageAlt}
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: imagePosition }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#050b18]/40 via-transparent to-transparent lg:bg-linear-to-r lg:from-[#050b18]/25 lg:via-transparent lg:to-transparent" />
          </div>
        ) : (
          <div className="absolute inset-0 grid-overlay opacity-20" />
        )}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-7xl px-6 py-20 ${className}`}>{children}</section>;
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      {kicker && <div className="label-tech mb-3">{kicker}</div>}
      <h2 className="section-title text-3xl md:text-5xl uppercase tracking-[-0.04em]">{title}</h2>
      {subtitle && <p className="section-subtitle mt-4 text-muted-foreground text-lg">{subtitle}</p>}
    </div>
  );
}
