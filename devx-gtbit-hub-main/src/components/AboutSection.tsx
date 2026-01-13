import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Rocket } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">DevX GTBIT</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Empowering the next generation of tech innovators at GTBIT
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              DevX GTBIT is the official campus chapter of{" "}
              <span className="text-primary font-semibold">DevX Bharat</span>, India's
              fastest-growing tech community with over 6,000 members nationwide.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We're a vibrant community of coders, designers, startup enthusiasts,
              and tech innovators working together to build, learn, and grow. Our
              mission is to bridge the gap between academic learning and real-world
              tech skills.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From hackathons to AI workshops, from startup incubation to
              influencer-led sessions — we create opportunities that transform
              curious students into industry-ready professionals.
            </p>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To create a thriving ecosystem where students can explore, innovate, and build real-world projects.",
              },
              {
                icon: Lightbulb,
                title: "Our Vision",
                description:
                  "To be the launchpad for the next generation of tech leaders, entrepreneurs, and innovators from GTBIT.",
              },
              {
                icon: Rocket,
                title: "Our Impact",
                description:
                  "Connecting students with industry mentors, hosting workshops, and fostering a culture of continuous learning.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="glass-card rounded-xl p-6 hover-glow group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
