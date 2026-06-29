import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border/50 bg-background/75">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-4">
            <Logo className="h-11 w-11" />
            <div className="font-display text-lg font-bold tracking-[0.35em] uppercase text-foreground">Arlotech</div>
          </div>

          <p className="text-sm text-muted-foreground max-w-sm leading-7">
            A web design and development studio based in Lagos, Nigeria. We build websites, web apps, and online stores for businesses worldwide.
          </p>

          <div className="flex items-center gap-2 pt-1">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-muted-foreground">Available for new projects</span>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="mailto:contact@arlotech.com.ng"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-red-950/40 text-red-400 transition hover:border-red-400"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </a>
            <a
              href="https://discord.com/users/1139159714765209724"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-indigo-950/40 text-indigo-400 transition hover:border-indigo-400"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.015.04.036.05a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.036-.05c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/christopher-segun-648867406/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-blue-950/40 text-blue-400 transition hover:border-blue-400"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5a2.27 2.27 0 100 4.538A2.27 2.27 0 004.98 3.5zM3 21.5h4v-12H3v12zm6.5 0H13v-5.75c0-1.46.83-2.25 2.1-2.25 1.26 0 1.9.8 1.9 2.1v5.9h3.5v-6.25c0-3.4-1.8-4.95-4.2-4.95-1.95 0-2.8 1.05-3.3 1.8H13v-1.55H9.5v12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Company links */}
        <FooterCol
          title="Company"
          links={[
            ["Home", "/"],
            ["About", "/about"],
            ["Contact", "/contact"],
          ]}
        />

        {/* Services links */}
        <FooterCol
          title="Services"
          links={[
            ["What We Do", "/services"],
            ["Our Process", "/process"],
            ["Tech Stack", "/infrastructure"],
          ]}
        />

        {/* Contact info */}
        <div className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Get in Touch</div>
          <div className="space-y-3 text-sm">
            <a href="mailto:contact@arlotech.com.ng" className="block text-foreground hover:text-emerald-400 transition">
              contact@arlotech.com.ng
            </a>
            <p className="text-muted-foreground leading-6">
              Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Arlotech Studio. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link to="/privacy" className="hover:text-foreground transition">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground transition">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="space-y-3">
      <div className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{title}</div>
      <ul className="space-y-2 text-sm">
        {links.map(([label, to]) => (
          <li key={to}>
            <Link to={to} className="text-muted-foreground transition hover:text-foreground">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
