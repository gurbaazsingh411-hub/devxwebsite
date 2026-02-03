import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import { FallingPattern } from "@/components/ui/falling-pattern";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Falling Pattern Background */}
      <div className="absolute inset-0">
        <FallingPattern
          color="hsl(var(--primary))"
          backgroundColor="hsl(var(--background))"
          duration={120}
          blurIntensity="0.8em"
          density={1}
        />
      </div>

      <div className="section-container relative z-10 text-center py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Official Campus Chapter of DevX Bharat</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
        >
          Where GTBIT Joins the{" "}
          <span className="text-gradient glow-text">DevX Revolution</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
        >
          Campus chapter of a{" "}
          <span className="text-primary font-semibold">6,000+ strong</span>{" "}
          national tech community for coders, builders, innovators, and founders.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact">
            <Button variant="hero" size="xl">
              <Users className="w-5 h-5" />
              Join DevX GTBIT
            </Button>
          </a>
          <a href="#events">
            <Button variant="heroOutline" size="xl">
              Attend Next Event
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
          <a href="#contact">
            <Button variant="heroSecondary" size="lg">
              Become a Contributor
            </Button>
          </a>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { value: "6,000+", label: "Community Members" },
            { value: "30+", label: "Events Hosted" },
            { value: "15+", label: "Projects Built" },
            { value: "5+", label: "Hackathon Wins" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="glass-card rounded-xl p-6 hover-glow"
            >
              <div className="text-2xl md:text-3xl font-display font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
