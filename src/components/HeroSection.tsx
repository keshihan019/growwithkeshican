import { motion } from "framer-motion";
import { ArrowDown, MapPin, Linkedin, Github, Facebook, Instagram, Youtube, Twitter, ArrowUpRight } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import profilePhoto from "@/assets/profile-photo.png";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/keshihan/", label: "LinkedIn", color: "#0A66C2" },
  { icon: Github, href: "https://github.com/keshihan019", label: "GitHub", color: "#181717" },
  { icon: Facebook, href: "https://www.facebook.com/growithkeshican", label: "Facebook", color: "#1877F2" },
  { icon: Instagram, href: "https://www.instagram.com/keshihan_19", label: "Instagram", color: "#E4405F" },
  { icon: Twitter, href: "https://x.com/keshihan019", label: "X", color: "#000000" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UCewC3HIV1PW4iQFncs8Nqxw", label: "YouTube", color: "#FF0000" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Ambient background wash */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 container-narrow px-6 py-32 md:py-24">
        <div className="grid md:grid-cols-2 items-center gap-12 md:gap-8">
          {/* LEFT — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full mb-6">
                <MapPin size={12} />
                <span>Trincomalee, Sri Lanka · Available for work</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-foreground mb-6">
                Building at the
                <br />
                <span className="text-primary italic font-display">intersection</span>
                <br />
                of tech & impact.
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-8">
                I'm <span className="font-semibold text-foreground">Keshihan Ilamuruganathan</span> — an analyst and social impactpreneur turning ideas into digital products, campaigns, and community programs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-baseline gap-x-8 gap-y-4 max-w-xl mb-8"
            >
              {[
                { value: 30, suffix: "+", label: "Trainings Provided" },
                { value: 1200, suffix: "+", label: "Impacted Youth" },
                { value: 50, suffix: "+", label: "Success Stories" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex flex-col">
                  <p className="text-4xl md:text-5xl font-bold font-display leading-none tracking-tight gradient-text">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground font-medium mt-1.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-primary transition-colors active:scale-[0.97]"
              >
                Get in Touch
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-foreground/5 transition-colors active:scale-[0.97]"
              >
                View Gallery
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2.5"
            >
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="relative w-9 h-9 rounded-lg bg-white/40 backdrop-blur-sm border border-primary text-foreground/70 hover:bg-primary hover:text-primary-foreground flex items-center justify-center overflow-hidden transition-colors"
                  whileTap="tap"
                  variants={{
                    tap: { scale: 0.88, transition: { duration: 0.1 } },
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    style={{ backgroundColor: s.color }}
                    variants={{
                      tap: {
                        opacity: [0, 1, 0],
                        transition: { duration: 0.35, times: [0, 0.5, 1] },
                      },
                    }}
                  />
                  <motion.span
                    className="relative z-10"
                    variants={{
                      tap: {
                        color: ["currentColor", "#ffffff", "currentColor"],
                        transition: { duration: 0.35, times: [0, 0.5, 1] },
                      },
                    }}
                  >
                    <s.icon size={16} />
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — photo composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-md aspect-square"
          >
            {/* Decorative shapes */}
            <svg className="absolute -top-4 left-4 w-16 h-16 text-accent" viewBox="0 0 64 64" fill="none">
              <path d="M4 40 L14 26 L24 40 L34 26 L44 40 L54 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="absolute top-2 right-6 w-10 h-10 rounded-full border-2 border-primary/60" />
            <div className="absolute top-8 right-14 w-10 h-10 rounded-full border-2 border-accent/60" />
            <svg className="absolute -bottom-2 left-2 w-14 h-14 text-primary" viewBox="0 0 60 60" fill="none">
              <path d="M8 50 L30 10 L52 50 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
            </svg>
            <div className="absolute bottom-6 right-2 text-primary text-3xl font-light select-none">+</div>
            <div className="absolute top-1/2 -left-2 text-accent text-2xl font-light select-none">+</div>

            {/* Backdrop tilted card */}
            <motion.div
              animate={{ rotate: [4, 6, 4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-primary/25 to-accent/25"
            />

            {/* Photo frame */}
            <motion.div
              whileHover={{ rotate: -2, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl -rotate-3 bg-card"
              style={{ boxShadow: "0 30px 60px -20px hsl(var(--primary) / 0.35), 0 20px 40px -15px hsl(220 20% 14% / 0.15)" }}
            >
              <img
                src={profilePhoto}
                alt="Keshihan Ilamuruganathan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 md:-left-8 bg-card border border-border rounded-2xl p-4 shadow-xl"
            >
              <p className="text-2xl font-bold text-primary leading-none">65K+</p>
              <p className="text-xs text-muted-foreground mt-1">Social Media Family</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -top-2 -right-2 md:-right-6 bg-card border border-border rounded-2xl p-4 shadow-xl"
            >
              <p className="text-2xl font-bold text-accent leading-none">2×</p>
              <p className="text-xs text-muted-foreground mt-1">Salesforce Certified</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
};
