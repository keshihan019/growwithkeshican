import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

import slimGrad from "@/assets/gallery-real/slim-graduation.jpg.asset.json";
import hackforce from "@/assets/gallery-real/hackforce.jpg.asset.json";
import stjohn from "@/assets/gallery-real/stjohn-oath.jpg.asset.json";
import ieee from "@/assets/gallery-real/ieee-presentation.jpg.asset.json";
import americanHub from "@/assets/gallery-real/american-hub.jpg.asset.json";
import youthForum from "@/assets/gallery-real/youth-forum.jpg.asset.json";
import peace from "@/assets/gallery-real/peace-pioneers.jpg.asset.json";
import centenary from "@/assets/gallery-real/centenary-grad.jpg.asset.json";
import fact from "@/assets/gallery-real/fact-symposium.jpg.asset.json";
import journalism from "@/assets/gallery-real/digital-journalism.jpg.asset.json";

const photos = [
  { src: youthForum.url, title: "Youth Forum Leadership Summit — Colombo 2024", tag: "Leadership" },
  { src: hackforce.url, title: "Hackforce '23 Grand Finale — Yarl Salesforce Ohana", tag: "Hackathon" },
  { src: centenary.url, title: "Centenary Academy — Graduation 2024", tag: "Graduation" },
  { src: americanHub.url, title: "Most Articulate Speaker — American IHub", tag: "Speaking" },
  { src: journalism.url, title: "Digital Journalism Academy — Workshop 2026", tag: "Workshop" },
  { src: peace.url, title: "R2R East-Coast Peace Pioneers Program 2024", tag: "Peace" },
  { src: slimGrad.url, title: "SLIM Graduation 2023 — Diploma in Digital Marketing", tag: "Graduation" },
  { src: ieee.url, title: "IEEE Student Branch — Project Pitch, SUSL", tag: "Pitch" },
  { src: fact.url, title: "FACT Annual Research Symposium 2025", tag: "Research" },
  { src: stjohn.url, title: "St John Official Oath Ceremony — Trincomalee 2023", tag: "Ceremony" },
];

// Masonry span pattern for visual rhythm (10 tiles)
const spans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-2 md:row-span-1",
];

export const GallerySection = () => {
  const [active, setActive] = useState<number | null>(null);

  const next = () => setActive((i) => (i === null ? null : (i + 1) % photos.length));
  const prev = () => setActive((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Gallery</p>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
              Moments from events, hackathons & community work
            </h2>
            <a
              href="https://www.facebook.com/GrowWithKeshiCan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              <Camera size={16} /> More on Facebook →
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[200px] gap-3 md:gap-4">
          {photos.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.04}>
              <button
                onClick={() => setActive(i)}
                className={`group relative overflow-hidden rounded-xl w-full h-full ${spans[i]} focus:outline-none focus:ring-2 focus:ring-primary`}
              >
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-left">
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider bg-primary/90 text-primary-foreground px-2 py-0.5 rounded mb-1.5">
                    {p.tag}
                  </span>
                  <p className="text-primary-foreground text-sm md:text-base font-semibold leading-tight line-clamp-2">
                    {p.title}
                  </p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setActive(null); }}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center text-background"
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 md:left-8 w-11 h-11 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center text-background"
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 md:right-8 w-11 h-11 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center text-background"
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[active].src}
                alt={photos[active].title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center text-background">
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider bg-primary text-primary-foreground px-2 py-0.5 rounded mb-2">
                  {photos[active].tag}
                </span>
                <p className="text-lg font-semibold">{photos[active].title}</p>
                <p className="text-xs text-background/60 mt-1">{active + 1} / {photos.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
