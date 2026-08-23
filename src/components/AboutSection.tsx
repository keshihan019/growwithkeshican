import { ScrollReveal } from "./ScrollReveal";
import { Briefcase, GraduationCap, Award, Globe2, Linkedin, Github, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Briefcase, label: "Current Role", value: "Analyst (Business + Social Media)" },
  { icon: GraduationCap, label: "Education", value: "BSc. Information Systems" },
  { icon: Award, label: "Certifications", value: "2× Salesforce · Cisco Certified" },
  { icon: Globe2, label: "Languages", value: "Tamil · English · Sinhala · French" },
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/keshihan/", label: "LinkedIn", color: "#0A66C2" },
  { icon: Github, href: "https://github.com/keshihan019", label: "GitHub", color: "#181717" },
  { icon: Facebook, href: "https://www.facebook.com/growithkeshican", label: "Facebook", color: "#1877F2" },
  { icon: Instagram, href: "https://www.instagram.com/keshihan_19", label: "Instagram", color: "#E4405F" },
  { icon: Twitter, href: "https://x.com/keshihan019", label: "X", color: "#000000" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UCewC3HIV1PW4iQFncs8Nqxw", label: "YouTube", color: "#FF0000" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Driving Innovation Through Technology & Community
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
            Keshihan is a dedicated and ambitious professional with a strong passion for Information
            Technology and Business Management. He is a passionate social impactpreneur from
            Trincomalee, Sri Lanka, dedicated to driving innovation at the intersection of technology,
            digital marketing & community empowerment.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <span className="text-sm font-medium text-muted-foreground">Connect with me:</span>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="relative w-10 h-10 rounded-xl bg-secondary text-foreground/70 flex items-center justify-center overflow-hidden transition-colors hover:bg-primary/10"
                  whileTap="tap"
                  variants={{
                    tap: {
                      scale: 0.85,
                      transition: { duration: 0.1 },
                    },
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{ backgroundColor: s.color }}
                    variants={{
                      tap: { opacity: [0, 1, 0], transition: { duration: 0.35, times: [0, 0.5, 1] } },
                    }}
                  />
                  <motion.span
                    variants={{
                      tap: { color: ["currentColor", "#ffffff", "currentColor"], transition: { duration: 0.35, times: [0, 0.5, 1] } },
                    }}
                    className="relative z-10"
                  >
                    <s.icon size={18} />
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={0.1 + i * 0.06}>
              <div className="card-elevated flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <s.icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{s.label}</p>
                  <p className="font-semibold text-foreground">{s.value}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
