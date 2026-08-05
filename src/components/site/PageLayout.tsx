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
    <section className="relative overflow-hidden border-b border-border/40 bg-[#0f172a] text-white">
      <div
        className={`relative mx-auto grid min-h-[560px] max-w-384 lg:grid-cols-[0.94fr_1.06fr] ${image ? "" : "max-w-7xl"}`}
      >
        <div className="relative z-10 flex items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
          <div className="max-w-2xl">
            <div className="section-label mb-5 text-emerald-400">{kicker}</div>
            <h1 className="hero-title text-4xl text-white sm:text-5xl lg:text-6xl">{title}</h1>
            {subtitle && (
              <p className="hero-subtitle mt-6 max-w-xl text-base text-zinc-300 sm:text-lg">{subtitle}</p>
            )}
          </div>
        </div>

        {image ? (
          <div className="relative min-h-80 overflow-hidden border-t border-white/10 lg:min-h-full lg:border-l lg:border-t-0">
            <img
              src={image}
              alt={imageAlt}
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: imagePosition }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0f172a]/35 via-transparent to-transparent lg:bg-linear-to-r lg:from-[#0f172a]/20 lg:via-transparent lg:to-transparent" />
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
