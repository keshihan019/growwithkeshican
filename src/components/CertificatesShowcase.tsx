import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { X, ShieldCheck, CalendarDays, Hash } from "lucide-react";

import msa1 from "@/assets/certs/msa-1.jpg.asset.json";
import msaAlpha from "@/assets/certs/msa-alpha.jpg.asset.json";
import sfAi from "@/assets/certs/sf-ai-associate.jpg.asset.json";
import sfPlatform from "@/assets/certs/sf-platform-foundations.jpg.asset.json";
import copado from "@/assets/certs/copado-ai.jpg.asset.json";

const certificates = [
  {
    title: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    date: "Dec 21, 2024",
    credential: "5497581",
    image: sfAi.url,
  },
  {
    title: "Salesforce Certified Platform Foundations",
    issuer: "Salesforce",
    date: "Jan 13, 2026",
    credential: "7366999",
    image: sfPlatform.url,
  },
  {
    title: "Copado Certified — Copado AI",
    issuer: "Copado",
    date: "Apr 13, 2026",
    credential: "065498",
    image: copado.url,
  },
  {
    title: "Microsoft Learn Student Ambassador",
    issuer: "Microsoft",
    date: "2024",
    image: msa1.url,
  },
  {
    title: "Microsoft Learn Student Ambassador — Alpha",
    issuer: "Microsoft",
    date: "2024",
    image: msaAlpha.url,
  },
];

export const CertificatesShowcase = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="tech-certifications"
      className="section-padding relative overflow-hidden bg-background"
    >
      {/* decorative backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-20"
        style={{ background: "var(--hero-gradient)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container-narrow relative">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Verified Certificates
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Professional Tech Certifications
          </h2>
          <p className="text-muted-foreground max-w-xl mb-12">
            Official credentials from Salesforce, Copado and Microsoft — tap any
            certificate to view it full size.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((c, i) => (
            <ScrollReveal key={c.title} delay={0.07 * i}>
              <button
                onClick={() => setActive(i)}
                className="group w-full text-left"
              >
                <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-primary/40 via-border to-accent/40 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="rounded-2xl bg-card overflow-hidden">
                    <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                      <img
                        src={c.image}
                        alt={`${c.title} certificate issued by ${c.issuer}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-primary shadow-sm">
                        <ShieldCheck size={12} /> {c.issuer}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold leading-snug mb-2">{c.title}</h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays size={12} /> {c.date}
                        </span>
                        {c.credential && (
                          <span className="inline-flex items-center gap-1.5">
                            <Hash size={12} /> {c.credential}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4 md:p-10"
          >
            <button
              aria-label="Close certificate preview"
              onClick={() => setActive(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center text-foreground shadow-lg"
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full rounded-2xl overflow-hidden bg-card shadow-2xl"
            >
              <img
                src={certificates[active].image}
                alt={`${certificates[active].title} certificate`}
                className="w-full max-h-[70vh] object-contain bg-background"
              />
              <div className="p-5">
                <h3 className="font-bold">{certificates[active].title}</h3>
                <p className="text-sm text-muted-foreground">
                  {certificates[active].issuer} · {certificates[active].date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
