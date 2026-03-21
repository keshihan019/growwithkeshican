import { ScrollReveal } from "./ScrollReveal";
import { Briefcase, GraduationCap, Award, Globe2, Phone } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Current Role", value: "Analyst (Business + Social Media)" },
  { icon: GraduationCap, label: "Education", value: "BSc. Information Systems" },
  { icon: Award, label: "Certifications", value: "2× Salesforce · Cisco Certified" },
  { icon: Globe2, label: "Languages", value: "Tamil · English · Sinhala · French" },
  { icon: Phone, label: "Phone", value: "+94 77 918 5685" },
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
            Keshihan is a dedicated and ambitious professional with a strong passion for Information
            Technology and Business Management. He is a passionate social impactpreneur from
            Trincomalee, Sri Lanka, dedicated to driving innovation at the intersection of technology,
            digital marketing & community empowerment. With experience spanning business analysis at
            Dialog Axiata PLC, social media analytics, and full-stack development, he combines
            analytical thinking with creative storytelling to deliver measurable impact.
          </p>
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
