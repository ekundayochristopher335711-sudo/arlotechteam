import React from "react";
import { PageLayout, PageHero, Section } from "../components/site/PageLayout";

export default function Privacy() {
  return (
    <PageLayout>
      <PageHero
        kicker="PRIVACY POLICY"
        title="Protecting your data with enterprise care and transparency."
        subtitle="We collect only what we need to respond to inquiries, and we process information securely as part of our project services."
      />

      <Section className="space-y-12">
        <div className="glass rounded-4xl border border-border/40 p-10 shadow-panel">
          <div className="label-tech">WEBSITE SCOPE</div>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">This policy applies to personal information collected through the Arlotech website, including contact forms, briefing submissions, and inquiry messages submitted via the site.</p>
        </div>

        <div className="glass rounded-4xl border border-border/40 p-10 shadow-panel">
          <h2 className="text-3xl font-semibold text-foreground">Information we collect</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">We may collect contact details, project briefing information, and optional business metrics to scope proposals and deliver premium solutions.</p>
        </div>

        <div className="glass rounded-4xl border border-border/40 p-10 shadow-panel">
          <h2 className="text-3xl font-semibold text-foreground">How we use data</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>• To respond to briefs and schedule discovery sessions.</li>
            <li>• To evaluate technical requirements and recommend solutions.</li>
            <li>• To manage communication and improve our service delivery.</li>
          </ul>
        </div>

        <div className="glass rounded-4xl border border-border/40 p-10 shadow-panel">
          <h2 className="text-3xl font-semibold text-foreground">Security and retention</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">We protect data with industry-standard controls, encrypt communication, and retain information only for as long as necessary to support project work and client relationships.</p>
        </div>
      </Section>
    </PageLayout>
  );
}
