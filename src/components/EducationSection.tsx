import { ScrollReveal } from "./ScrollReveal";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Laws (Hons)",
    institution: "Open University of Sri Lanka",
    period: "2024 – Present",
    description:
      "Pursuing a legal education to complement technology and business expertise with a strong understanding of law and governance.",
  },
  {
    degree: "Diploma in Digital Marketing",
    institution: "Sri Lanka Institute of Marketing",
    period: "2023 – 2024",
    description:
      "Professional diploma covering digital marketing strategies, SEO, social media marketing, and content strategy.",
  },
  {
    degree: "Diploma in Political Studies",
    institution: "Centenary Political Academy",
    period: "2023 – 2024",
    description:
      "Studied political theory, governance, and public policy frameworks to support community empowerment initiatives.",
  },
  {
    degree: "BA in Sustainable Development",
    institution: "Xavier University, Odisha",
    period: "2022 – 2026",
    description:
      "Interdisciplinary program focusing on sustainable development principles, environmental management, and social impact strategies.",
  },
  {
    degree: "BSc. (Hons) in Information Systems",
    institution: "Sabaragamuwa University of Sri Lanka",
    period: "2021 – 2025",
    description:
      "Comprehensive degree covering information systems, software development, data analysis, and business process management.",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="section-padding-sm" style={{ background: "var(--section-gradient)" }}>
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">Academic Background</h2>
        </ScrollReveal>

        <div className="relative pl-8 border-l-2 border-border space-y-8">
          {education.map((ed, i) => (
            <ScrollReveal key={i} delay={0.06 * i}>
              <div className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[calc(2rem+5px)] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                <div className="card-elevated min-h-[180px] flex flex-col">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <GraduationCap size={18} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{ed.degree}</h3>
                  </div>
                  <p className="text-primary font-medium text-sm mb-1">{ed.institution}</p>
                  <p className="text-xs text-muted-foreground mb-2">{ed.period}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{ed.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
