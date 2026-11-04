import React from "react";
import { FlaskConical, Heart, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40 py-12 text-sm text-muted-foreground">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
              <FlaskConical className="h-4 w-4" />
            </div>
            <div>
              <p className="font-display font-bold text-foreground">PureHands Lab</p>
              <p className="text-xs text-muted-foreground">Chemical Prototyping Laboratory</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs text-foreground/80">
              Created with <Heart className="inline h-3 w-3 text-red-500 fill-red-500" /> by{" "}
              <strong className="text-primary font-semibold">Nidhi Chaudhari</strong> (PRN: 202501100005) &amp;{" "}
              <strong className="text-primary font-semibold">Shruti Khauria</strong> (PRN: 202501100011)
            </p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Formulation: 10 ml Methanol · 5 ml Glycerol · 5 ml H₂O₂ · 20 ml Distilled Water
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

