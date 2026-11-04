import React, { useState } from "react";
import { Beaker, X, ZoomIn, CheckCircle2 } from "lucide-react";

export function Procedure() {
  const [modalImg, setModalImg] = useState<{ url: string; title: string } | null>(null);

  const steps = [
    {
      img: "/assets/step-cylinder.jpeg",
      t: "Measure Methanol",
      tag: "Step 01",
      amt: "10 ml",
      d: "Measure 10 ml of methanol accurately using a clean graduated measuring cylinder. Ensure reading is taken at the bottom of the meniscus."
    },
    {
      img: "/assets/step-measure.jpeg",
      t: "Add Hydrogen Peroxide",
      tag: "Step 02",
      amt: "5 ml",
      d: "Measure 5 ml of 3% hydrogen peroxide (H₂O₂) and add it into the mixing container to eliminate any bacterial spores present."
    },
    {
      img: "/assets/step-4.jpeg",
      t: "Add Glycerol & Distilled Water",
      tag: "Step 03",
      amt: "5 ml + 20 ml",
      d: "Add 5 ml of glycerol for skin conditioning and humectant protection, followed by 20 ml of distilled water to properly dilute and balance the solution."
    },
    {
      img: "/assets/step-5.jpeg",
      t: "Add Perfume & Stir Thoroughly",
      tag: "Step 04",
      amt: "few drops",
      d: "Add a few drops of fragrance/perfume and stir gently with a glass rod for several minutes until a completely homogeneous solution is formed."
    },
    {
      img: "/assets/step-observe.jpeg",
      t: "Quality Inspection & Bottling",
      tag: "Step 05",
      amt: "Final Product (~40 ml)",
      d: "Inspect the final sanitizer liquid for clarity and uniformity. Transfer the finished formulation carefully into a sanitized dispenser bottle."
    }
  ];

  return (
    <main className="pb-24">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-primary">
          <Beaker className="h-3.5 w-3.5" />
          <span>Section 02</span>
        </div>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-foreground md:text-5xl">
          Experimental Procedure
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Step-by-step photographic documentation captured directly during our chemical prototyping laboratory session. Click on any lab photo to enlarge it.
        </p>
      </section>

      {/* Steps List */}
      <section className="mx-auto max-w-5xl px-4">
        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div
              key={step.t}
              className={`grid items-center gap-8 rounded-3xl border border-border bg-card p-6 md:grid-cols-2 md:p-8 ${
                idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image Preview with click to zoom */}
              <div
                onClick={() => setModalImg({ url: step.img, title: step.t })}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-ink aspect-[4/3]"
              >
                <img
                  src={step.img}
                  alt={step.t}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/20 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                  <span className="flex items-center gap-1.5 rounded-full bg-black/75 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                    <ZoomIn className="h-4 w-4 text-aqua" />
                    <span>Enlarge photo</span>
                  </span>
                </div>
              </div>

              {/* Text Information */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                    {step.tag}
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 font-mono text-xs font-semibold text-aqua">
                    {step.amt}
                  </span>
                </div>

                <h2 className="mt-3 font-display text-2xl font-bold text-foreground">
                  {step.t}
                </h2>

                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {step.d}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs text-primary font-medium">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Lab protocol verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {modalImg && (
        <div
          onClick={() => setModalImg(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-card p-3 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-3 px-2">
              <span className="font-display font-semibold text-sm text-foreground">{modalImg.title}</span>
              <button
                onClick={() => setModalImg(null)}
                className="rounded-full bg-secondary p-1.5 text-foreground hover:bg-secondary/80"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <img
              src={modalImg.url}
              alt={modalImg.title}
              className="max-h-[80vh] w-auto rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default Procedure;

