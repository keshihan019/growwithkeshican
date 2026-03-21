import { ScrollReveal } from "./ScrollReveal";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "BSc. (Hons) in Information Systems",
    institution: "Sabaragamuwa University of Sri Lanka",
    period: "Undergraduate",
    description:
      "Pursuing a comprehensive degree covering information systems, software development, data analysis, and business process management.",
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

        {education.map((ed, i) => (
          <ScrollReveal key={i} delay={0.1}>
            <div className="card-elevated flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{ed.degree}</h3>
                <p className="text-primary font-medium text-sm mb-2">{ed.institution}</p>
                <p className="text-xs text-muted-foreground mb-3">{ed.period}</p>
                <p className="text-muted-foreground leading-relaxed">{ed.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
