import { ScrollReveal } from "./ScrollReveal";
import { BadgeCheck } from "lucide-react";

const certifications = [
  { name: "Salesforce Administrator", issuer: "Salesforce" },
  { name: "Salesforce Platform Developer", issuer: "Salesforce" },
  { name: "Aspire Leaders Program", issuer: "Aspire Institute" },
  { name: "Google Analytics", issuer: "Google" },
  { name: "Digital Marketing Fundamentals", issuer: "Various Platforms" },
  { name: "Web Development", issuer: "Coursera / freeCodeCamp / Udemy" },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding bg-background">
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Certifications</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">Professional Credentials</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <ScrollReveal key={i} delay={0.06 * i}>
              <div className="card-elevated flex items-center gap-4">
                <BadgeCheck size={22} className="text-primary shrink-0" />
                <div>
                  <p className="font-semibold text-sm">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.issuer}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
