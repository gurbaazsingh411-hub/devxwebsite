import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Instagram } from "lucide-react";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-secondary/30" ref={ref}>
      <div className="absolute inset-0 cyber-grid opacity-30" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have questions? Want to collaborate? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12 max-w-lg w-full"
          >
            <div className="grid gap-8">
              <div className="flex items-start gap-4 glass-card p-6 rounded-2xl hover-glow transition-all duration-300">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1 text-lg">Email Us</h3>
                  <a href="mailto:devxgtbit@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    devxgtbit@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 glass-card p-6 rounded-2xl hover-glow transition-all duration-300">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1 text-lg">Location</h3>
                  <p className="text-muted-foreground">
                    GTBIT, Guru Tegh Bahadur Institute of Technology
                    <br />
                    Delhi, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 glass-card p-6 rounded-2xl hover-glow transition-all duration-300">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1 text-lg">Follow Us</h3>
                  <a
                    href="https://www.instagram.com/devx_gtbit19/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @devx_gtbit19
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
