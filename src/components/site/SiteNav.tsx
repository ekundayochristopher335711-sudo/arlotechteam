import { Link, NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import { Logo } from "./Logo";

const servicesDropdown = [
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/infrastructure", label: "Stack" },
];

const topLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
] as const;

const afterLinks = [
  { to: "/work", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openDropdown() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  }
  function scheduleClose() {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 140);
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-2xl shadow-[0_24px_80px_-60px_rgba(0,0,0,0.8)]">
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <Logo className="h-10 w-10" />
          <p className="font-display text-xs uppercase tracking-[0.35em] text-muted-foreground">Arlotech</p>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-9 text-sm text-muted-foreground">
          {topLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "text-accent" : "hover:text-foreground"}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}

          {/* Services dropdown */}
          <li
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleClose}
          >
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              Services
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-48 rounded-xl border border-emerald-500/20 bg-[#0b1a12] p-2 shadow-2xl shadow-black/40 backdrop-blur-xl"
                onMouseEnter={openDropdown}
                onMouseLeave={scheduleClose}
              >
                {servicesDropdown.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setDropdownOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-2.5 text-sm transition-colors ${
                        isActive
                          ? "bg-emerald-500/15 text-emerald-400"
                          : "text-zinc-300 hover:bg-white/5 hover:text-white"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </li>

          {afterLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "text-accent" : "hover:text-foreground"}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-linear-to-r from-emerald-400 to-amber-300 px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#081012] shadow-glow button-magnetic"
          >
            Start a Project
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/90 text-foreground transition hover:border-accent"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-strong border-t border-border/40">
          <div className="px-6 py-5 space-y-1">
            {topLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm text-foreground transition hover:bg-emerald-400/10"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-1 pb-0.5 px-4 text-xs uppercase tracking-widest text-muted-foreground/50">
              Services
            </div>
            {servicesDropdown.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="block rounded-2xl px-6 py-3 text-sm text-foreground transition hover:bg-emerald-400/10"
              >
                {item.label}
              </Link>
            ))}

            {afterLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm text-foreground transition hover:bg-emerald-400/10"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-linear-to-r from-emerald-400 to-amber-300 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.24em] text-[#081012]"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
