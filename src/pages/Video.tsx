import React from "react";
import { Video as VideoIcon, Play, ShieldAlert, Sparkles, CheckCircle2 } from "lucide-react";

export function Video() {
  return (
    <main className="pb-24">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-primary">
          <VideoIcon className="h-3.5 w-3.5" />
          <span>Section 04</span>
        </div>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-foreground md:text-5xl">
          Demonstration Video
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Live laboratory demonstration recorded during our chemical prototyping session. Watch our hands-on measurement, mixture preparation, and final test presentation.
        </p>
      </section>

      {/* Video Container */}
      <section className="mx-auto max-w-4xl px-4">
        <div className="overflow-hidden rounded-3xl border border-border bg-card p-4 sm:p-6 shadow-2xl">
          <div className="relative overflow-hidden rounded-2xl bg-black aspect-video flex items-center justify-center">
            <video
              src="/assets/demo.mp4"
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Presentation Highlights */}
          <div className="mt-6 border-t border-border/60 pt-6">
            <h2 className="font-display text-lg font-bold text-foreground">
              Presentation &amp; Lab Highlights
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-secondary/30 p-4">
                <span className="font-mono text-xs font-bold text-primary">01. Setup &amp; Safety</span>
                <p className="mt-1 text-xs text-muted-foreground">
                  Goggles, nitrile gloves, and calibrated measuring cylinders used for accurate lab dispensing.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-secondary/30 p-4">
                <span className="font-mono text-xs font-bold text-aqua">02. Chemical Blending</span>
                <p className="mt-1 text-xs text-muted-foreground">
                  Careful sequential addition: 10 ml Methanol, 5 ml H₂O₂, 5 ml Glycerol, and 20 ml Distilled Water.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-secondary/30 p-4">
                <span className="font-mono text-xs font-bold text-green-400">03. Outcome Evaluation</span>
                <p className="mt-1 text-xs text-muted-foreground">
                  Assessment of drying time, skin feel, fragrance, and clarity in the final dispenser bottle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Video;

