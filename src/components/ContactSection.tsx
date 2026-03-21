import { ScrollReveal } from "./ScrollReveal";
import { Mail, Linkedin, Github, Facebook, Instagram, Youtube, ExternalLink } from "lucide-react";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/keshihan/" },
  { icon: Github, label: "GitHub", href: "https://github.com/keshihan019" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/KeshihanIlamuruganathan" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/keshihan_19" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/channel/UCewC3HIV1PW4iQFncs8Nqxw" },
];

const freelance = [
  { label: "Fiverr", href: "https://www.fiverr.com/keshihan" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~015084858ff12e8415" },
  { label: "Freelancer", href: "https://www.freelancer.com/u/keshihan19" },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-foreground text-primary-foreground">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <ScrollReveal>
              <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Contact</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Let's Build Something Together
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed mb-8">
                Whether you need a website, a digital marketing strategy, or a Salesforce solution — I'm
                here to help. Drop me a message and let's discuss your next project.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <a
                href="mailto:keshihan0000@gmail.com"
                className="inline-flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors mb-10"
              >
                <Mail size={20} />
                keshihan0000@gmail.com
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50 mb-4">
                Social Media
              </p>
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/30 transition-colors active:scale-95"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — freelance */}
          <div>
            <ScrollReveal delay={0.1}>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50 mb-4">
                Hire Me On
              </p>
              <div className="space-y-3 mb-10">
                {freelance.map((f) => (
                  <a
                    key={f.label}
                    href={f.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors group"
                  >
                    <span className="font-medium">{f.label}</span>
                    <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50 mb-4">
                Also Find Me On
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Twitter / X", href: "https://www.twitter.com/Keshihan4" },
                  { label: "TikTok", href: "https://www.tiktok.com/@keshihan_19" },
                  { label: "Medium", href: "#" },
                  { label: "HackerRank", href: "https://www.hackerrank.com/keshihan0000" },
                  { label: "Stack Overflow", href: "https://stackoverflow.com/users/20063836/keshihan-ilamuruganathan" },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="badge-skill text-xs text-primary-foreground/80 bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Footer */}
        <ScrollReveal delay={0.2}>
          <div className="mt-20 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Keshihan Ilamuruganathan. All rights reserved.
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
