import React, { useEffect } from "react";
import { PageLayout, PageHero, Section, SectionHeading } from "../components/site/PageLayout";
import { useSEO } from "../lib/useSEO";

export default function Contact() {
  useSEO({
    title: "Contact Us — Hire a Web Designer in Lagos",
    description: "Get in touch with Arlotech for a free consultation. We build custom websites and web apps for businesses worldwide. Based in Lagos. Email: contact@arlotech.com.ng.",
    path: "/contact",
  });

  useEffect(() => {
    if (window.location.hash === "#schedule") {
      const target = document.getElementById("schedule");
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <PageLayout>
      <PageHero
        kicker="GET IN TOUCH"
        title="Tell us about your project — we'll get back to you within 24 hours."
        subtitle="Fill in the form below and we'll respond with a plan and a quote. No commitment, no pressure."
      />

      <Section className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="glass rounded-4xl border border-border/40 p-10 shadow-panel">
          <SectionHeading
            title="Start a project"
            subtitle="Tell us what you need and we'll take it from there."
          />
          <form id="schedule" className="grid gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-muted-foreground">
                Your name
                <input
                  id="contactName"
                  name="contactName"
                  className="mt-2 w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground outline-none focus:border-emerald-300"
                  placeholder="Full name"
                />
              </label>
              <label className="text-sm text-muted-foreground">
                Company or brand
                <input
                  className="mt-2 w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground outline-none focus:border-emerald-300"
                  placeholder="Company name (if any)"
                />
              </label>
            </div>

            <label className="text-sm text-muted-foreground">
              What do you need?
              <input
                id="projectType"
                name="projectType"
                className="mt-2 w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground outline-none focus:border-emerald-300"
                placeholder="e.g. New website, redesign, online store, web app"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-muted-foreground">
                Budget (optional)
                <input
                  id="budget"
                  name="budget"
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground outline-none focus:border-emerald-300"
                  placeholder="e.g. $500 / ₦200k"
                />
              </label>
              <label className="text-sm text-muted-foreground">
                Timeline (optional)
                <input
                  id="timeline"
                  name="timeline"
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground outline-none focus:border-emerald-300"
                  placeholder="e.g. 2 weeks / 1 month"
                />
              </label>
            </div>

            <label className="text-sm text-muted-foreground">
              Your email
              <input
                id="contactEmail"
                name="contactEmail"
                type="email"
                className="mt-2 w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground outline-none focus:border-emerald-300"
                placeholder="you@example.com"
              />
            </label>

            <label className="text-sm text-muted-foreground">
              Tell us more about the project
              <textarea
                id="brief"
                name="brief"
                rows={5}
                className="mt-2 w-full rounded-3xl border border-border bg-background/80 px-4 py-4 text-sm text-foreground outline-none focus:border-emerald-300"
                placeholder="What's the goal? Who is it for? Any examples of sites you like?"
              />
            </label>

            <button
              type="button"
              onClick={() => {
                const name = (document.getElementById("contactName") as HTMLInputElement)?.value || "";
                const projectType = (document.getElementById("projectType") as HTMLInputElement)?.value || "";
                const budget = (document.getElementById("budget") as HTMLInputElement)?.value || "";
                const timeline = (document.getElementById("timeline") as HTMLInputElement)?.value || "";
                const email = (document.getElementById("contactEmail") as HTMLInputElement)?.value || "";
                const brief = (document.getElementById("brief") as HTMLTextAreaElement)?.value || "";
                const body = `Name: ${name}\nProject: ${projectType}\nBudget: ${budget}\nTimeline: ${timeline}\nEmail: ${email}\n\nDetails:\n${brief}`;
                const mailto = `mailto:contact@arlotech.com.ng?subject=${encodeURIComponent("New project enquiry from " + (name || "website"))}&body=${encodeURIComponent(body)}`;
                window.open(mailto, "_self");
              }}
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-emerald-400 to-amber-300 px-8 py-3.5 text-sm font-bold text-[#07100f] shadow-lg hover:-translate-y-0.5 transition"
            >
              Send Enquiry
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="glass rounded-4xl border border-border/40 p-10 shadow-panel">
            <h2 className="text-2xl font-semibold text-foreground">What happens next?</h2>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                We read your brief and get back to you within 24 hours.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                We schedule a free call to talk through the project.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                You get a clear plan and quote — no hidden costs.
              </li>
            </ul>
          </div>

          <div className="glass rounded-4xl border border-border/40 p-10 shadow-panel">
            <h2 className="text-2xl font-semibold text-foreground">Contact details</h2>
            <div className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
              <p>Lagos, Nigeria</p>
              <p>
                <span className="font-semibold text-foreground">Email: </span>
                <a href="mailto:contact@arlotech.com.ng" className="text-foreground hover:text-emerald-400 transition">
                  contact@arlotech.com.ng
                </a>
              </p>
              <p>
                <span className="font-semibold text-foreground">WhatsApp: </span>
                <a href="https://wa.me/2348166419332" target="_blank" rel="noreferrer" className="text-foreground hover:text-emerald-400 transition">
                  +234 816 641 9332
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
