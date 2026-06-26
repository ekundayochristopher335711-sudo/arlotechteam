import React from "react";
import { PageLayout, PageHero, Section } from "../components/site/PageLayout";

export default function Terms() {
  return (
    <PageLayout>
      <PageHero
        kicker="TERMS OF SERVICE"
        title="Terms for working with Arlotech."
        subtitle="These terms apply to our planning, proposal, and delivery of product engineering and design services."
      />

      <Section className="space-y-12">
        <div className="glass rounded-4xl border border-border/40 p-10 shadow-panel">
          <div className="label-tech">WEBSITE TERMS</div>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">These terms apply to use of the Arlotech website, including contact forms, request submissions, and the information shared through our online inquiry process.</p>
        </div>

        <div className="glass rounded-4xl border border-border/40 p-10 shadow-panel">
          <h2 className="text-3xl font-semibold text-foreground">Project engagements</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">Engagements are scoped based on the information provided during the intake process and confirmed through our proposed delivery plan.</p>
        </div>

        <div className="glass rounded-4xl border border-border/40 p-10 shadow-panel">
          <h2 className="text-3xl font-semibold text-foreground">Deliverables and ownership</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">Deliverables are clearly defined in every proposal. Intellectual property and code ownership are transferred according to the project agreement. We retain the right to showcase non-confidential work in our portfolio. </p>
        </div>

        <div className="glass rounded-4xl border border-border/40 p-10 shadow-panel">
          <h2 className="text-3xl font-semibold text-foreground">Payment and timelines</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">Payment terms are agreed at engagement start. Timelines are based on the approved scope and may change if scope evolves beyond the original delivery plan.</p>
        </div>
      </Section>
    </PageLayout>
  );
}
