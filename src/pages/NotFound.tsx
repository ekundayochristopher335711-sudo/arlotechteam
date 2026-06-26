import React from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "../components/site/PageLayout";

export default function NotFound() {
  return (
    <PageLayout>
      <div className="relative mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="relative rounded-4xl border border-border/50 bg-background/85 p-12 shadow-panel">
          <div className="label-tech">CYBER ERROR</div>
          <h1 className="mt-6 text-7xl font-black tracking-[-0.06em] text-accent">404</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            The signal dropped somewhere in the network. The page you requested is off the current deployment path.
          </p>
          <Link
            to="/"
            className="mt-10 inline-flex rounded-full bg-linear-to-r from-emerald-400 to-amber-300 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#07100f] shadow-glow"
          >
            Return to mission control
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
