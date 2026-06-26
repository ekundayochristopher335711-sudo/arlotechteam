import React from "react";
import { Link } from "react-router-dom";
import { PageLayout, PageHero, Section, SectionHeading } from "../components/site/PageLayout";
import { useSEO } from "../lib/useSEO";

const team = [
  {
    name: "Christopher .s",
    title: "Lead Designer & Developer",
    image: "/logos/christopher.jpg",
    linkedin: "https://www.linkedin.com/in/christopher-segun-648867406/",
    bio: "Christopher leads the design and frontend side of every project. He cares deeply about making things look great and work even better.",
    skills: ["Web Design", "Frontend Development", "Design Systems"],
  },
  {
    name: "Demilade (Grandtech)",
    title: "Full-Stack Developer",
    image: "/logos/grandtech.jpg",
    bio: "Demilade handles the technical backbone — building the logic, databases, and server-side parts that make websites and apps run reliably.",
    skills: ["Web Applications", "Backend Development", "Performance"],
  },
  {
    name: "Emmy Nuelo",
    title: "UI Designer & Content",
    image: "/logos/maya.jpg",
    bio: "Emmy focuses on user interface design and content — making sure every page is clear, readable, and guides visitors toward action.",
    skills: ["UI Design", "Accessibility", "Content Writing"],
  },
];

const values = [
  {
    title: "We keep it simple",
    description: "We don't use jargon or make things more complicated than they need to be. You'll always know what we're building and why.",
  },
  {
    title: "You work with us directly",
    description: "No account managers, no handoffs. You speak directly with the person designing or building your site from day one.",
  },
  {
    title: "We build things that last",
    description: "We don't cut corners. Every site we build is clean, fast, and easy to maintain — so it keeps working long after launch.",
  },
];

export default function About() {
  useSEO({
    title: "About Us — Meet the Arlotech Team",
    description: "Arlotech is a team of three designers and developers based in Lagos, Nigeria. We build custom websites and web apps for businesses that want real results.",
    path: "/about",
  });

  return (
    <PageLayout>
      <PageHero
        kicker="ABOUT US"
        title="A small team that takes your website seriously."
        subtitle="We're three designers and developers based in Lagos, Nigeria. We've been building websites for businesses around the world since 2022."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Who we are</h2>
            <div className="space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                Arlotech started because we saw too many businesses stuck with websites that looked outdated, loaded slowly, or didn't reflect the quality of their actual work. We wanted to change that.
              </p>
              <p>
                We're a small studio — just three people — but that's a feature, not a bug. It means every project gets our full attention. When you hire us, you're not getting passed to a junior team. You get us.
              </p>
              <p>
                We've built sites for law firms, churches, restaurants, fashion brands, and SaaS products — for clients in Nigeria, Europe, and beyond. Every project is different and we approach each one that way.
              </p>
            </div>
            <Link
              to="/contact#schedule"
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-emerald-400 to-amber-300 px-7 py-3 text-sm font-bold text-[#07100f] shadow-lg hover:-translate-y-0.5 transition"
            >
              Talk to Us
            </Link>
          </div>

          <div className="grid gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass rounded-2xl border border-border/40 p-6 shadow-panel"
              >
                <h3 className="font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section>
        <SectionHeading
          kicker="THE TEAM"
          title="The people behind your project."
          subtitle="Three specialists, one focused team. When you work with Arlotech, you work with all of us."
        />

        <div className="space-y-10">
          {team.map((member, index) => (
            <article
              key={member.name}
              className={`glass rounded-4xl border border-border/40 shadow-panel overflow-hidden lg:grid lg:items-center lg:gap-6 ${
                index % 2 === 1 ? "lg:grid-cols-[1fr_minmax(320px,40%)]" : "lg:grid-cols-[minmax(320px,40%)_1fr]"
              }`}
            >
              <div className={`relative overflow-hidden bg-[#081016] lg:min-h-112 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full min-h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-br from-black/20 via-transparent to-black/60 pointer-events-none" />
              </div>

              <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400">
                  {member.title}
                </p>
                <h3 className="mt-4 text-3xl lg:text-4xl font-semibold text-foreground">
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-emerald-400 transition"
                    >
                      {member.name}
                    </a>
                  ) : (
                    member.name
                  )}
                </h3>
                <p className={`mt-5 text-base leading-8 text-muted-foreground max-w-2xl ${index % 2 === 1 ? "lg:ml-auto" : ""}`}>
                  {member.bio}
                </p>

                <div className={`mt-8 flex flex-wrap gap-3 justify-start ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/40 bg-background/90 px-3 py-2 text-xs font-semibold text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Location + CTA */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-3xl border border-border/40 p-8 shadow-panel space-y-4">
            <h3 className="text-xl font-bold text-foreground">Based in Lagos, working worldwide</h3>
            <p className="text-sm leading-7 text-muted-foreground">
              We're based in Lagos, Nigeria — but we work with clients across Europe, Asia, and beyond. All our work is done remotely and we communicate clearly at every step.
            </p>
            <div className="pt-2 space-y-2 text-sm">
              <a href="mailto:arlotechweb@gmail.com" className="block text-foreground hover:text-emerald-400 transition">
                arlotechweb@gmail.com
              </a>
            </div>
          </div>

          <div className="glass rounded-3xl border border-emerald-500/20 p-8 shadow-panel flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-foreground">Ready to work together?</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Tell us about your project and we'll get back to you within 24 hours. The first call is free and there's no pressure.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact#schedule"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-emerald-400 to-amber-300 px-7 py-3 text-sm font-bold text-[#07100f] shadow-lg hover:-translate-y-0.5 transition"
              >
                Start a Project
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-border/60 px-7 py-3 text-sm font-semibold text-foreground hover:border-emerald-400 transition"
              >
                See Our Services
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
