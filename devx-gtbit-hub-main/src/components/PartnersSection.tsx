import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const partners = [
  { name: "Google", logo: "G" },
  { name: "Microsoft", logo: "M" },
  { name: "GitHub", logo: "GH" },
  { name: "AWS", logo: "AWS" },
  { name: "Vercel", logo: "V" },
  { name: "Figma", logo: "F" },
];

export const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Partners & <span className="text-gradient">Sponsors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Backed by industry leaders who believe in our mission
          </p>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="glass-card rounded-xl p-6 flex items-center justify-center hover-glow aspect-square"
            >
              <span className="text-2xl md:text-3xl font-display font-bold text-muted-foreground group-hover:text-primary transition-colors">
                {partner.logo}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Partner With Us
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join hands with DevX GTBIT to reach talented students, sponsor events,
            and build your brand among the next generation of tech professionals.
          </p>
          <Button variant="hero" size="lg">
            Become a Partner
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
