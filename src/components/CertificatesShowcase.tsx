import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { X, ShieldCheck, CalendarDays, Hash, ChevronLeft, ChevronRight } from "lucide-react";

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

const ITEMS_PER_SLIDE = 2;

const getPageCount = () => Math.ceil(certificates.length / ITEMS_PER_SLIDE);

export const CertificatesShowcase = () => {
  const [active, setActive] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const slide = useCallback((nextPage: number) => {
    const total = getPageCount();
    setDirection(nextPage > page ? 1 : -1);
    setPage((prev) => {
      if (nextPage < 0) return total - 1;
      if (nextPage >= total) return 0;
      return nextPage;
    });
  }, [page]);

  useEffect(() => {
    const timer = setInterval(() => {
      slide(page + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, [page, slide]);

  const visible = certificates.slice(
    page * ITEMS_PER_SLIDE,
    page * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
  );

  const pageCount = getPageCount();

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section
      id="tech-certifications"
      className="section-padding relative overflow-hidden bg-background"
    >
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
            Tap the arrows to slide through credentials — click any certificate to view it full size.
          </p>
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative mx-auto max-w-5xl">
          {/* Prev/Next buttons */}
          <button
            onClick={() => slide(page - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 z-20 w-11 h-11 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Previous certificates"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => slide(page + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 z-20 w-11 h-11 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Next certificates"
          >
            <ChevronRight size={22} />
          </button>

          {/* Card stage */}
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 260, damping: 28 },
                  opacity: { duration: 0.25 },
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                {visible.map((c) => (
                  <button
                    key={c.title}
                    onClick={() => {
                      const idx = certificates.findIndex((cert) => cert.title === c.title);
                      setActive(idx);
                    }}
                    className="group text-left"
                  >
                    <div className="relative h-full rounded-3xl p-[2px] bg-gradient-to-br from-primary via-accent to-primary/60">
                      <div className="h-full rounded-3xl bg-card overflow-hidden flex flex-col">
                        <div className="relative h-56 md:h-64 overflow-hidden bg-secondary">
                          <img
                            src={c.image}
                            alt={`${c.title} certificate issued by ${c.issuer}`}
                            loading="lazy"
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur px-3 py-1.5 text-xs font-semibold text-primary shadow-sm">
                            <ShieldCheck size={13} /> {c.issuer}
                          </span>
                          <span className="absolute bottom-4 right-4 rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-xs font-semibold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            Tap to expand
                          </span>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="font-bold text-base md:text-lg leading-snug mb-3">
                            {c.title}
                          </h3>
                          <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                            <span className="inline-flex items-center gap-1.5">
                              <CalendarDays size={14} /> {c.date}
                            </span>
                            {c.credential && (
                              <span className="inline-flex items-center gap-1.5">
                                <Hash size={14} /> ID: {c.credential}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => slide(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-8 h-2.5 bg-primary"
                    : "w-2.5 h-2.5 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to certificate slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/85 backdrop-blur-sm p-4 md:p-10"
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
