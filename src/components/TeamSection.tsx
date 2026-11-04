import React from "react";
import { Users, Presentation, Globe, FlaskConical, FileText, CheckCircle2 } from "lucide-react";

export interface TeamMember {
  name: string;
  prn: string;
  role: string;
  specialty: string;
  avatarInitials: string;
  primaryWork: string;
  contributions: string[];
  jointWork: string[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "Nidhi Chaudhari",
    prn: "202501100005",
    role: "Project Co-Lead",
    specialty: "PPT & Presentation Lead",
    avatarInitials: "NC",
    primaryWork: "Designed & authored project presentation slides (PPT)",
    contributions: [
      "Crafted full scientific slide deck and presentation flow",
      "Researched chemical theory and organized reaction pathways",
      "Formatted chemical equations and defense materials"
    ],
    jointWork: [
      "Chemical synthesis & measurement of the sanitizer in the lab",
      "Co-authored and compiled the comprehensive project report"
    ]
  },
  {
    name: "Shruti Khauria",
    prn: "202501100011",
    role: "Project Co-Lead",
    specialty: "Website & Digital Platform Lead",
    avatarInitials: "SK",
    primaryWork: "Developed and built the interactive web showcase",
    contributions: [
      "Designed UI/UX, responsive layouts, and interactive navigation",
      "Integrated lab photography, block diagrams, and video player",
      "Engineered the interactive chemical explorer and AI quiz"
    ],
    jointWork: [
      "Chemical synthesis & measurement of the sanitizer in the lab",
      "Co-authored and compiled the comprehensive project report"
    ]
  }
];

export function TeamSection() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-4 py-16 scroll-mt-20">
      <div className="mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-primary">
          <Users className="h-3.5 w-3.5" />
          <span>Project Contributors</span>
        </div>
        <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
          Team Members &amp; Roles
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Chemical Prototyping Laboratory Project. Meet the student researchers behind the formulation, chemical preparation, presentation, and website.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {teamMembers.map((member) => (
          <div
            key={member.prn}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-2xl sm:p-8"
          >
            {/* Top decorative gradient bar */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-aqua to-primary/50" />

            <div>
              {/* Header with Avatar, Name, PRN */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary font-display text-xl font-bold border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {member.avatarInitials}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-muted-foreground">
                      {member.role} · <span className="text-primary font-semibold">{member.specialty}</span>
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-primary/30 bg-secondary/80 px-3 py-1.5 font-mono text-xs font-semibold text-primary shadow-sm">
                  PRN: {member.prn}
                </div>
              </div>

              {/* Individual Focus Box */}
              <div className="mt-6 rounded-2xl border border-border/80 bg-secondary/40 p-4">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                  {member.name.includes("Nidhi") ? (
                    <Presentation className="h-4 w-4" />
                  ) : (
                    <Globe className="h-4 w-4" />
                  )}
                  <span>Primary Specialization</span>
                </div>
                <p className="mt-1.5 text-sm font-semibold text-foreground">
                  {member.primaryWork}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {member.contributions.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Joint Responsibilities */}
              <div className="mt-6 border-t border-border/60 pt-5">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-aqua">
                  <FlaskConical className="h-3.5 w-3.5" />
                  <span>Joint Laboratory Contributions</span>
                </div>
                <div className="mt-3 space-y-2">
                  {member.jointWork.map((jw, i) => (
                    <div key={i} className="flex items-center gap-2.5 rounded-xl border border-border/40 bg-secondary/20 px-3 py-2 text-xs text-foreground/90">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-aqua" />
                      <span>{jw}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom info */}
            <div className="mt-8 flex items-center justify-between border-t border-border/40 pt-4 text-[11px] font-mono text-muted-foreground">
              <span>Chemical Prototyping</span>
              <span className="text-foreground/80">Batch 2025–2026</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
