import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative z-10 container-narrow px-6 py-32 md:py-0">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 text-primary-foreground/70 text-sm font-medium mb-6">
              <MapPin size={14} />
              <span>Trincomalee, Sri Lanka</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-primary-foreground mb-6">
              Keshihan
              <br />
              <span className="text-primary">Ilamuruganathan</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-primary-foreground/75 max-w-lg mb-8 leading-relaxed"
          >
            Digital Innovator · Social Impactpreneur · 2× Salesforce Certified · Aspire Scholar '23
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Get in Touch
            </a>
            <a
              href="#about"
              className="border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-primary-foreground/10 transition-colors active:scale-[0.97]"
            >
              Explore More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/50 animate-bounce"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
};
