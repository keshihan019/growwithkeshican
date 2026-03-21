import { ScrollReveal } from "./ScrollReveal";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Current Role", value: "Social Media Analyst" },
  { icon: GraduationCap, label: "Education", value: "BSc. Information Systems" },
  { icon: Award, label: "Certifications", value: "2× Salesforce Certified" },
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
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-12">
            I'm a passionate social impactpreneur from Trincomalee, Sri Lanka, dedicated to driving
            innovation at the intersection of technology, digital marketing, and community empowerment.
            Currently working as a Social Media Analyst at Qubitz, I combine analytical thinking with
            creative storytelling to deliver measurable impact. My journey spans full-stack development,
            business analysis, and digital transformation.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={0.1 + i * 0.08}>
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
