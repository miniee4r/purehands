import React from "react";
import { 
  ShieldCheck, 
  Hospital, 
  Bus, 
  Building2, 
  Home as HomeIcon, 
  Check, 
  AlertTriangle, 
  Flame, 
  Sparkles 
} from "lucide-react";

export function Applications() {
  const useCases = [
    {
      icon: Hospital,
      title: "Healthcare & Clinics",
      desc: "Immediate point-of-care antimicrobial disinfection for healthcare workers and visitors between patient consultations."
    },
    {
      icon: Bus,
      title: "Public Transit & Commuting",
      desc: "Convenient sanitization on buses, trains, and public terminals where running water and soap are unavailable."
    },
    {
      icon: Building2,
      title: "Offices, Schools & Labs",
      desc: "Mounted at classroom doors, office entrances, and lab benches to minimize cross-contamination across shared equipment."
    },
    {
      icon: HomeIcon,
      title: "Household & Personal Carry",
      desc: "Pocket-sized bottles for on-the-go hygiene after touching elevator buttons, groceries, or door handles."
    }
  ];

  const advantages = [
    "Rapid broad-spectrum antimicrobial action (kills 99.9% of bacteria and enveloped viruses within 30 seconds).",
    "Waterless and soapless application—vital in field conditions and resource-limited environments.",
    "Formulated with glycerol (5 ml) to act as a humectant and prevent dermal moisture loss.",
    "Hydrogen peroxide addition ensures inactivation of latent microbial bacterial spores inside the bottle.",
    "Convenient drying time without sticky residues when rubbed thoroughly across skin."
  ];

  const disadvantages = [
    "Flammability hazard: Contains alcohol solvent and must be stored far away from open flames, heat, or sparks.",
    "Not effective on visibly soiled or greasy hands—dirt and grease require mechanical washing with soap and running water.",
    "External topical use only: Highly toxic if ingested or swallowed; contact with eyes causes severe irritation.",
    "Excessive repeated daily application on sensitive skin without moisturizers may cause irritation or dermatitis."
  ];

  return (
    <main className="pb-24">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-primary">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>Section 05</span>
        </div>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-foreground md:text-5xl">
          Applications, Advantages &amp; Disadvantages
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Real-world deployment contexts, clinical advantages, and essential safety guidelines for laboratory-prepared alcohol-based hand sanitizer.
        </p>
      </section>

      {/* Application Domains Grid */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="mb-6">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Domains</p>
          <h2 className="mt-1 font-display text-2xl font-bold text-foreground">
            Where Hand Sanitizer is Applied
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((uc) => {
            const Icon = uc.icon;
            return (
              <div
                key={uc.title}
                className="rounded-3xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/60 transition"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary border border-border">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                    {uc.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Advantages vs Disadvantages Split */}
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Advantages */}
          <div className="rounded-3xl border border-emerald-500/30 bg-card p-8 shadow-lg">
            <div className="flex items-center gap-2.5 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
              <Check className="h-4 w-4" />
              <span>Key Advantages</span>
            </div>
            <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
              Benefits of Formulation
            </h3>
            <ul className="mt-6 space-y-4">
              {advantages.map((adv, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold">
                    ✓
                  </span>
                  <span className="leading-relaxed">{adv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Disadvantages & Safety */}
          <div className="rounded-3xl border border-amber-500/30 bg-card p-8 shadow-lg">
            <div className="flex items-center gap-2.5 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
              <Flame className="h-4 w-4" />
              <span>Limitations &amp; Precautions</span>
            </div>
            <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
              Safety &amp; Disadvantages
            </h3>
            <ul className="mt-6 space-y-4">
              {disadvantages.map((dis, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold">
                    !
                  </span>
                  <span className="leading-relaxed">{dis}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Applications;

