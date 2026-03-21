import { motion } from "framer-motion";
import { ArrowDown, MapPin, Linkedin, Github, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.png";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/keshihan/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/keshihan019", label: "GitHub" },
  { icon: Facebook, href: "https://www.facebook.com/KeshihanIlamuruganathan", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/keshihan_19", label: "Instagram" },
  { icon: Twitter, href: "https://www.twitter.com/Keshihan4", label: "Twitter" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UCewC3HIV1PW4iQFncs8Nqxw", label: "YouTube" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative z-10 container-narrow px-6 py-32 md:py-0">
        <div className="flex flex-col md:flex-row md:items-center md:gap-16">
          {/* Text content */}
          <div className="max-w-2xl flex-1">
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2 text-primary-foreground/70 text-sm font-medium mb-6">
                <MapPin size={14} />
                <span>Trincomalee, Sri Lanka</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-primary-foreground mb-4">
                Keshihan
                <br />
                <span className="text-primary">Ilamuruganathan</span>
              </h1>
            </motion.div>

            {/* Social media handles */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2.5 mb-6"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-primary/30 hover:text-primary-foreground transition-colors active:scale-95"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-primary-foreground/75 max-w-lg mb-8 leading-relaxed"
            >
              Digital Innovator · Social Impactpreneur · 2× Salesforce Certified · Aspire Scholar '23
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
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

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 md:mt-0 shrink-0"
          >
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden ring-4 ring-primary/30 ring-offset-4 ring-offset-foreground/70 shadow-2xl">
              <img
                src={profilePhoto}
                alt="Keshihan Ilamuruganathan"
                className="w-full h-full object-cover"
              />
            </div>
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
