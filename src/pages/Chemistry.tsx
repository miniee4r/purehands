import React, { useState } from "react";
import { FlaskConical, Atom, Info, Sparkles, CheckCircle } from "lucide-react";

export function Chemistry() {
  const ingredients = [
    {
      f: "CH₃OH",
      n: "Methanol",
      q: "10 ml",
      role: "Main Active Agent",
      d: "Denatures microbial proteins and dissolves cellular lipid membranes, neutralizing pathogenic bacteria and enveloped viruses. Measured with precision as the primary alcohol solvent."
    },
    {
      f: "H₂O₂",
      n: "Hydrogen Peroxide",
      q: "5 ml",
      role: "Spore Inactivator",
      d: "Inactivates resistant bacterial spores that might contaminate the solution or container during filling. Slowly breaks down into water and oxygen leaving no harmful residues."
    },
    {
      f: "C₃H₈O₃",
      n: "Glycerol",
      q: "5 ml",
      role: "Moisturiser (Humectant)",
      d: "Acts as a humectant to retain moisture in the dermal layers. Prevents excessive skin dryness, irritation, and cracking caused by repeated alcohol application."
    },
    {
      f: "H₂O",
      n: "Distilled Water",
      q: "20 ml",
      role: "Diluent & Solvent",
      d: "Dilutes the solution to the optimal antiseptic concentration. Crucial because water enables alcohol to penetrate microbial membranes more effectively than anhydrous alcohol."
    },
    {
      f: "✿",
      n: "Perfume / Fragrance",
      q: "few drops",
      role: "Aromatic Fragrance",
      d: "Masks the pungent chemical scent of the alcohol and adds a refreshing, user-friendly aroma to the final formulation."
    }
  ];

  const reactions = [
    {
      eq: "2 H₂O₂ → 2 H₂O + O₂↑",
      t: "Decomposition of Hydrogen Peroxide",
      d: "Releases reactive oxygen species (ROS) that destroy microbial spore walls; leaves behind pure water and non-toxic oxygen."
    },
    {
      eq: "Protein (folded) + CH₃OH → Protein (denatured)",
      t: "Microbial Protein Denaturation",
      d: "Methanol molecules disrupt internal hydrogen bonding and hydrophobic interactions within microbial enzymes, inactivating their biological function."
    },
    {
      eq: "Lipid membrane + CH₃OH → Dissolved Lipids",
      t: "Membrane Lysis & Disruption",
      d: "Methanol's amphiphilic nature dissolves the fatty lipid bilayer envelopes of viruses and bacteria, causing structural lysis."
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const activeIngredient = ingredients[activeIdx];

  return (
    <main className="pb-24">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-primary">
          <FlaskConical className="h-3.5 w-3.5" />
          <span>Section 01</span>
        </div>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-foreground md:text-5xl">
          Reactions &amp; Chemicals
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Detailed chemical breakdown of our hand sanitizer formulation. Tap any reagent below to inspect its chemical formula, exact measured volume, and biochemical role.
        </p>
      </section>

      {/* Interactive Formulation Explorer */}
      <section className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1.1fr_1.3fr]">
        {/* Buttons List */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
          {ingredients.map((item, idx) => (
            <button
              key={item.n}
              onClick={() => setActiveIdx(idx)}
              className={`rounded-2xl border p-5 text-left transition-all duration-200 ${
                idx === activeIdx
                  ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]"
                  : "border-border bg-card text-card-foreground hover:border-primary/60 hover:bg-secondary/40"
              }`}
            >
              <div className="font-mono text-2xl font-bold tracking-tight">{item.f}</div>
              <div className="mt-2 font-semibold text-sm">{item.n}</div>
              <div className={`mt-1 font-mono text-xs ${idx === activeIdx ? "text-primary-foreground/90 font-bold" : "text-muted-foreground"}`}>
                Volume: {item.q}
              </div>
            </button>
          ))}
        </div>

        {/* Active Item Card */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-xl">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          <div>
            <div className="flex h-36 items-center justify-center rounded-2xl bg-secondary/80 font-mono text-6xl font-extrabold text-primary border border-border">
              {activeIngredient.f}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
                {activeIngredient.role}
              </span>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-bold text-primary">
                {activeIngredient.q}
              </span>
            </div>

            <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
              {activeIngredient.n}
            </h2>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              {activeIngredient.d}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-2 rounded-xl bg-secondary/30 p-3 text-xs text-muted-foreground border border-border/50">
            <Info className="h-4 w-4 shrink-0 text-primary" />
            <span>Prepared and verified in the Chemical Prototyping Laboratory session.</span>
          </div>
        </div>
      </section>

      {/* Chemical Reactions Section */}
      <section className="mx-auto max-w-6xl px-4 pt-20">
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-widest text-aqua">Mechanism of Action</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
            Key Chemical Reactions
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            How methanol and hydrogen peroxide neutralize microorganisms and stabilize the mixture.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reactions.map((rx) => (
            <div key={rx.t} className="rounded-3xl border border-border bg-card p-6 flex flex-col justify-between">
              <div>
                <div className="rounded-xl bg-ink p-3.5 font-mono text-xs text-aqua border border-aqua/20 overflow-x-auto">
                  {rx.eq}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {rx.t}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {rx.d}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs text-aqua font-medium">
                <CheckCircle className="h-3.5 w-3.5" />
                <span>Verified Laboratory Reaction</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Chemistry;

