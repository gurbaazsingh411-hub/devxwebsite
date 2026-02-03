import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Instagram, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:devxgtbit@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Create a temporary anchor element to trigger the mailto protocol more reliably across browsers
    const link = document.createElement("a");
    link.href = mailtoUrl;
    link.click();

    toast({
      title: "Opening Mail Client...",
      description: "Please send the pre-filled email to get in touch with us!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

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

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Email Us</h3>
                  <p className="text-muted-foreground">devxgtbit@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    GTBIT, Guru Tegh Bahadur Institute of Technology
                    <br />
                    Delhi, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Follow Us</h3>
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

            {/* Social CTA */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-display font-semibold text-lg mb-3">
                Join Our Community
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Connect with 6,000+ developers on Discord and WhatsApp
              </p>
              <div className="flex gap-3">
                <a href="https://wa.me/919958555716" target="_blank" rel="noopener noreferrer">
                  <Button variant="heroSecondary" size="sm">
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your.email@example.com"
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us what's on your mind..."
                  required
                  rows={5}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
