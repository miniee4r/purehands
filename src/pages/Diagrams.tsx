import React, { useState } from "react";
import { Binary, ExternalLink, Info, CheckCircle2 } from "lucide-react";

export function Diagrams() {
  const [activeType, setActiveType] = useState<"pfd" | "block">("pfd");

  const diagrams = {
    pfd: {
      url: "/assets/process-flow.jpg",
      title: "Process Flow Diagram (PFD)",
      desc: "Illustrates the continuous pathway from raw chemical measurement, sequential blending in the mixing chamber, quality observation, and final container packaging."
    },
    block: {
      url: "/assets/block-diagram.jpg",
      title: "Functional Block Diagram",
      desc: "Represents the logical engineering blocks: inputs (Methanol 10 ml, H₂O₂ 5 ml, Glycerol 5 ml, Distilled Water 20 ml, Perfume), processing unit (Stirring & Uniform Homogenization), and output sanitizer."
    }
  };

  const current = diagrams[activeType];

  return (
    <main className="pb-24">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-primary">
          <Binary className="h-3.5 w-3.5" />
          <span>Section 03</span>
        </div>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-foreground md:text-5xl">
          Process Flow &amp; Block Diagrams
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Engineering schematics for the sanitizer synthesis: 10 ml Methanol, 5 ml H₂O₂, 5 ml Glycerol, 20 ml Distilled Water, and fragrance blended into a stable formulation.
        </p>
      </section>

      {/* Main Container */}
      <section className="mx-auto max-w-6xl px-4">
        {/* Toggle Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-6">
          <div className="inline-flex rounded-2xl border border-border bg-card p-1.5 shadow-sm">
            <button
              onClick={() => setActiveType("pfd")}
              className={`rounded-xl px-5 py-2 text-sm font-semibold transition-all ${
                activeType === "pfd"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Process Flow Diagram
            </button>
            <button
              onClick={() => setActiveType("block")}
              className={`rounded-xl px-5 py-2 text-sm font-semibold transition-all ${
                activeType === "block"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Block Diagram
            </button>
          </div>

          <a
            href={current.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-xs font-semibold text-primary hover:border-primary/60 transition"
          >
            <span>Open High-Res in New Tab</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Diagram Display Box */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card p-4 sm:p-6 shadow-xl">
          <div className="mb-4">
            <h2 className="font-display text-xl font-bold text-foreground">
              {current.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {current.desc}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-ink/50 border border-border/50 p-2 sm:p-4">
            <img
              key={current.url}
              src={current.url}
              alt={current.title}
              className="w-full rounded-xl object-contain max-h-[70vh] mx-auto animate-in fade-in duration-300"
            />
          </div>

          {/* Quick Flow Details */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 border-t border-border/60 pt-6 text-xs">
            <div className="rounded-xl border border-border/60 bg-secondary/30 p-3.5">
              <span className="font-mono font-bold text-primary">01. Raw Reagents</span>
              <p className="mt-1 text-muted-foreground">
                10 ml Methanol + 5 ml H₂O₂ + 5 ml Glycerol + 20 ml Distilled Water
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-secondary/30 p-3.5">
              <span className="font-mono font-bold text-aqua">02. Homogenization</span>
              <p className="mt-1 text-muted-foreground">
                Agitation via glass stirring rod to achieve uniform colloidal dissolution
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-secondary/30 p-3.5">
              <span className="font-mono font-bold text-green-400">03. Final Bottling</span>
              <p className="mt-1 text-muted-foreground">
                Dispensed into sealed container for sanitization applications
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Diagrams;

