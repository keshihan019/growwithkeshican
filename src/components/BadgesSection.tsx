import { ScrollReveal } from "./ScrollReveal";
import { ExternalLink } from "lucide-react";

const badges = [
  {
    name: "Create Your First Gemini Enterprise Application",
    issuer: "Google Cloud",
    date: "Jul 19, 2026",
    image: "https://images.credly.com/images/3c923d13-42da-4765-995d-59f3030e042a/blob",
  },
  {
    name: "Orchestrate Multi-agent Workflows with Gemini Enterprise",
    issuer: "Google Cloud",
    date: "Jul 19, 2026",
    image: "https://images.credly.com/images/951db2d7-4997-4b2a-89de-1a1297236e77/blob",
  },
  {
    name: "McKinsey.org Forward Program",
    issuer: "McKinsey.org",
    date: "Jul 7, 2025",
    image: "https://images.credly.com/images/94f4180f-4139-4529-9cd1-c5ae95b12f5f/blob",
  },
  {
    name: "Data Analytics Essentials",
    issuer: "Cisco",
    date: "Nov 6, 2023",
    image: "https://images.credly.com/images/1fdfeaeb-e61c-4450-bdfe-a07bd4e715df/image.png",
  },
  {
    name: "Diploma in Digital Marketing (DDM)",
    issuer: "Sri Lanka Institute of Marketing (SLIM)",
    date: "Mar 28, 2023",
    image: "https://images.credly.com/images/2da3830e-0c7e-4aa4-934b-f079afd4e930/Badge-09.png",
  },
  {
    name: "Introduction to Data Science",
    issuer: "Cisco",
    date: "Oct 30, 2022",
    image: "https://images.credly.com/images/b38a42e0-dc58-4ce2-b6c0-28d978e8aaad/image.png",
  },
  {
    name: "Cybersecurity Essentials",
    issuer: "Cisco",
    date: "Sep 30, 2022",
    image: "https://images.credly.com/images/054913b2-e271-49a2-a1a4-9bf1c1f9a404/CyberEssentials.png",
  },
  {
    name: "OPSWAT Introduction to Critical Infrastructure Protection (ICIP)",
    issuer: "OPSWAT",
    date: "Expired Dec 6, 2023",
    image: "https://images.credly.com/images/f9f3c533-9b5a-47eb-8a3e-5734663116c0/image.png",
  },
];

export const BadgesSection = () => {
  return (
    <section id="badges" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
                Verified Badges
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Credly Digital Credentials
              </h2>
            </div>
            <a
              href="https://www.credly.com/users/keshihan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View on Credly <ExternalLink size={14} />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {badges.map((b, i) => (
            <ScrollReveal key={i} delay={0.05 * i}>
              <a
                href="https://www.credly.com/users/keshihan"
                target="_blank"
                rel="noopener noreferrer"
                className="group card-elevated flex flex-col items-center text-center h-full transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={b.image}
                    alt={`${b.name} badge`}
                    loading="lazy"
                    className="relative w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-md group-hover:scale-105 transition-transform"
                  />
                </div>
                <p className="font-semibold text-sm leading-snug mb-1">{b.name}</p>
                <p className="text-xs text-muted-foreground">{b.issuer}</p>
                <p className="text-[11px] text-muted-foreground/80 mt-1">{b.date}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
