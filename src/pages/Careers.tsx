import React from "react";
import { PageLayout, PageHero, Section, SectionHeading } from "../components/site/PageLayout";

const roles = [
  {
    title: "Frontend Engineer",
    description: "Join us to build modular product interfaces, design systems, and optimized frontend stacks for enterprise clients.",
  },
  {
    title: "UI Systems Designer",
    description: "Lead the creation of high-fidelity component systems, motion libraries, and branded interface ecosystems.",
  },
  {
    title: "Motion Designer",
    description: "Craft cinematic transitions, product animations, and premium visual narratives for digital products.",
  },
  {
    title: "Backend Engineer",
    description: "Design resilient API ecosystems, scalable infrastructure, and cloud-native delivery systems."
  },
];

export default function Careers() {
  return (
    <PageLayout>
      <PageHero
        kicker="CAREERS"
        title={
          <>
            Join a remote-first team for elite specialists who build premium product platforms.
          </>
        }
        subtitle="We hire people who want to design with systems, deliver with precision, and elevate the next generation of digital products."
      />

      <Section className="space-y-16">
        <SectionHeading
          kicker="WHY JOIN"
          title="A culture built for engineers, designers, and makers who value quality and speed."
          subtitle="Work in a remote-first environment supported by modern tools, flexible collaboration, and strong operational discipline."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {roles.map((role) => (
            <article key={role.title} className="glass rounded-4xl border border-border/40 p-8 shadow-panel transition hover:-translate-y-1">
              <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Role</div>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">{role.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{role.description}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Remote-first",
              text: "We operate from anywhere with structured collaboration rituals and deep asynchronous documentation.",
            },
            {
              title: "Team Benefits",
              text: "Competitive compensation, generous learning budgets, and a high-trust work environment.",
            },
            {
              title: "Engineering Philosophy",
              text: "We focus on maintainable code, product-led systems, and elegant technical craftsmanship.",
            },
          ].map((item) => (
            <div key={item.title} className="glass rounded-[1.75rem] border border-border/40 p-8 shadow-panel">
              <div className="label-tech">{item.title}</div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
