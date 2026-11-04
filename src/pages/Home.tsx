import React from "react";
import { Link } from "react-router-dom";
import { 
  FlaskConical, 
  Beaker, 
  Binary, 
  Video, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight, 
  Sparkles,
  Droplet
} from "lucide-react";
import TeamSection from "../components/TeamSection";

export function Home() {
  const sections = [
    {
      to: "/chemistry",
      n: "01",
      icon: FlaskConical,
      t: "Reactions & chemicals",
      d: "Explore our formula: 10 ml Methanol, 5 ml Glycerol, 5 ml H₂O₂, 20 ml Distilled Water."
    },
    {
      to: "/procedure",
      n: "02",
      icon: Beaker,
      t: "Experimental procedure",
      d: "Step-by-step photos captured during our formulation session in the laboratory."
    },
    {
      to: "/diagrams",
      n: "03",
      icon: Binary,
      t: "Process & block diagrams",
      d: "Detailed schematic flowcharts showing how raw ingredients convert into sanitizer."
    },
    {
      to: "/video",
      n: "04",
      icon: Video,
      t: "Demonstration video",
      d: "Watch our recorded live lab demonstration and sample testing."
    },
    {
      to: "/applications",
      n: "05",
      icon: ShieldCheck,
      t: "Applications & safety",
      d: "Real-world healthcare and daily uses, plus key benefits and precautions."
    },
    {
      to: "/quiz",
      n: "06",
      icon: HelpCircle,
      t: "AI quiz challenge",
      d: "Test your understanding with interactive questions on chemicals and procedure."
    }
  ];

  const formulationPills = [
    { name: "Methanol (CH₃OH)", amt: "10 ml", role: "Active Agent" },
    { name: "Glycerol (C₃H₈O₃)", amt: "5 ml", role: "Humectant" },
    { name: "Hydrogen Peroxide (H₂O₂)", amt: "5 ml", role: "Spore Inactivator" },
    { name: "Distilled Water (H₂O)", amt: "20 ml", role: "Solvent / Diluent" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative isolate flex min-h-[85vh] items-end overflow-hidden">
        {/* Background photo */}
        <img
          src="/assets/group-photo.jpeg"
          alt="Our chemical prototyping lab team"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_30%]"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/80 to-ink/30" />

        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-32">
          {/* Lab Project Badge (MIT Logo removed as requested) */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-aqua/30 bg-ink/70 px-4 py-1.5 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-aqua animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-aqua">
              Chemical Prototyping Laboratory
            </span>
          </div>

          <h1 className="max-w-3xl font-display text-5xl font-extrabold leading-[1.05] text-ink-foreground md:text-7xl">
            Making our own <span className="text-aqua">hand sanitizer</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base text-gray-300 md:text-lg">
            A complete chemical prototyping journey: from precise reagent measurements and reaction chemistry to process flow diagrams, lab verification, and digital showcase.
          </p>

          {/* Team Member Hero Pills with PRN */}
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="flex items-center gap-2.5 rounded-full border border-ink-foreground/30 bg-ink-foreground/10 px-4 py-2 text-sm font-medium text-ink-foreground backdrop-blur-md shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span>Nidhi Chaudhari</span>
              <span className="font-mono text-xs opacity-75">(PRN: 202501100005)</span>
            </div>

            <div className="flex items-center gap-2.5 rounded-full border border-ink-foreground/30 bg-ink-foreground/10 px-4 py-2 text-sm font-medium text-ink-foreground backdrop-blur-md shadow-sm">
              <span className="h-2 w-2 rounded-full bg-aqua" />
              <span>Shruti Khauria</span>
              <span className="font-mono text-xs opacity-75">(PRN: 202501100011)</span>
            </div>
          </div>

          {/* Quick Formulation Strip */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Droplet className="h-3.5 w-3.5 text-aqua" />
              <span>Corrected Laboratory Formulation (Total ~40 ml)</span>
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {formulationPills.map((pill) => (
                <div key={pill.name} className="rounded-xl border border-white/10 bg-white/5 p-2.5">
                  <p className="font-mono text-base font-bold text-aqua">{pill.amt}</p>
                  <p className="text-xs font-semibold text-white truncate">{pill.name}</p>
                  <p className="text-[10px] text-gray-400">{pill.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards Grid */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Sections</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
            Explore the Project
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-primary">{item.n}</span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.t}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.d}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  <span>Open section</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Dedicated Team Details Section */}
      <TeamSection />
    </main>
  );
}

export default Home;

