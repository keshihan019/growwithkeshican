import { ScrollReveal } from "./ScrollReveal";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "BSc. (Hons) in Information Systems",
    institution: "Sabaragamuwa University of Sri Lanka",
    period: "2021 – 2025",
    description:
      "Comprehensive degree covering information systems, software development, data analysis, and business process management.",
  },
  {
    degree: "BA in Sustainable Development",
    institution: "Xavier University, Odisha",
    period: "2022 – 2026",
    description:
      "Interdisciplinary program focusing on sustainable development principles, environmental management, and social impact strategies.",
  },
  {
    degree: "Bachelor of Laws (Hons)",
    institution: "Open University of Sri Lanka",
    period: "2024 – Present",
    description:
      "Pursuing a legal education to complement technology and business expertise with a strong understanding of law and governance.",
  },
  {
    degree: "Diploma in Political Studies",
    institution: "Centenary Political Academy",
    period: "2023 – 2024",
    description:
      "Studied political theory, governance, and public policy frameworks to support community empowerment initiatives.",
  },
  {
    degree: "Diploma in Digital Marketing",
    institution: "Sri Lanka Institute of Marketing",
    period: "2023 – 2024",
    description:
      "Professional diploma covering digital marketing strategies, SEO, social media marketing, and content strategy.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((ed, i) => (
            <ScrollReveal key={i} delay={0.06 * i}>
              <div className="card-elevated h-full flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{ed.degree}</h3>
                  <p className="text-primary font-medium text-sm mb-1">{ed.institution}</p>
                  <p className="text-xs text-muted-foreground mb-2">{ed.period}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ed.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
