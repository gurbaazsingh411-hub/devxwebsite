import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Code2,
  Smartphone,
  Layers,
  Zap,
  Users,
  Award,
  Clock,
  TrendingUp,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Mail,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with React, Next.js, and cutting-edge technologies.",
    features: [
      "Single Page Applications (SPA)",
      "E-commerce Platforms",
      "Progressive Web Apps (PWA)",
      "Custom CMS Solutions",
    ],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
    features: [
      "React Native Apps",
      "Flutter Applications",
      "UI/UX Design",
      "App Store Deployment",
    ],
  },
  {
    icon: Layers,
    title: "Software Development",
    description:
      "Custom software solutions, APIs, and backend systems tailored to your business needs.",
    features: [
      "RESTful APIs",
      "Database Design",
      "Cloud Integration",
      "System Architecture",
    ],
  },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Flutter",
  "React Native",
  "TailwindCSS",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "AWS",
];

const benefits = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile development process ensuring quick turnaround times",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous testing and code reviews for production-ready solutions",
  },
  {
    icon: Users,
    title: "Collaborative Team",
    description: "6,000+ community backing with diverse skill sets",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Built for growth with modern architecture and best practices",
  },
];

const featuredProjects = [
  {
    title: "VIMUN",
    description: "A premium Model United Nations portal with real-time news updates, committee management, and registration systems.",
    image: "/brain/3fba1ce4-d1bf-48f7-a35c-e80c4e7fb46b/vimun_preview_1770135551024.png",
    link: "https://vimun.netlify.app/",
    tags: ["React", "MUN", "TailwindCSS"],
  },
  {
    title: "O'Brunch Coffee",
    description: "A cozy and interactive restaurant website with digital menus, table reservations, and social media integration.",
    image: "/brain/3fba1ce4-d1bf-48f7-a35c-e80c4e7fb46b/obrunch_coffee_preview_1770135568536.png",
    link: "https://obrunchcoffee.netlify.app/",
    tags: ["Web Design", "Hospitality", "Framer Motion"],
  },
  {
    title: "Thermodynamics",
    description: "A highly technical scientific dashboard for visualizing complex physical simulations and molecular interactions.",
    image: "/brain/3fba1ce4-d1bf-48f7-a35c-e80c4e7fb46b/thermodynamics_preview_1770135584676.png",
    link: "https://thermodyanmics.netlify.app/",
    tags: ["React Three Fiber", "3D Visualization", "Analytics"],
  },
];

export default function HireUs() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const techRef = useRef(null);
  const benefitsRef = useRef(null);
  const contactRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" });
  const techInView = useInView(techRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" });

  // Removed form state and handlers in favor of direct contact options

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 cyber-grid opacity-30" />

        <div className="section-container relative z-10 text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Professional Development Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            Build Your Next Project{" "}
            <span className="text-gradient glow-text">With DevX GTBIT</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            Expert developers from India's fastest-growing tech community, ready to
            transform your ideas into powerful digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => {
                document.getElementById("contact-form")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Start Your Project
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => {
                document.getElementById("services")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              View Services
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "30+", label: "Happy Clients" },
              { value: "100%", label: "Success Rate" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
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

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Section */}
      <section
        id="services"
        ref={servicesRef}
        className="py-24 md:py-32 relative"
      >
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive development solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-8 h-full hover-glow relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>

                    <h3 className="font-display font-semibold text-2xl mb-3">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        id="projects"
        ref={projectsRef}
        className="py-24 md:py-32 relative bg-secondary/10"
      >
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Take a look at some of our previous work and successful deliveries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card rounded-2xl overflow-hidden h-full hover-glow flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-background/90 text-foreground px-4 py-2 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-primary/10 text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    <Button
                      variant="heroSecondary"
                      size="sm"
                      className="w-full mt-auto"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      View Live Project
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        ref={techRef}
        className="py-24 md:py-32 relative bg-secondary/30"
      >
        <div className="absolute inset-0 cyber-grid opacity-50" />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Our <span className="text-gradient">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We work with modern, industry-standard technologies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={techInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                className="glass-card rounded-lg px-6 py-3 hover-glow group cursor-default"
              >
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {tech}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Hire Us Section */}
      <section ref={benefitsRef} className="py-24 md:py-32 relative">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Why <span className="text-gradient">Hire Us</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              What sets us apart from the competition
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 hover-glow group text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
        ref={contactRef}
        className="py-24 md:py-32 relative bg-secondary/30"
      >
        <div className="absolute inset-0 cyber-grid opacity-30" />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Start Your <span className="text-gradient">Project</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={contactInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
          >
            {/* WhatsApp Option */}
            <div className="glass-card rounded-2xl p-8 md:p-10 flex flex-col items-center text-center hover-glow group transition-all duration-300">
              <div className="w-20 h-20 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                <MessageCircle className="w-10 h-10 text-green-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Chat on WhatsApp</h3>
              <p className="text-muted-foreground mb-8">
                Get a quick response and discuss your project requirements directly with our team over WhatsApp.
              </p>
              <Button
                variant="hero"
                size="xl"
                className="w-full bg-green-600 hover:bg-green-700 border-none shadow-[0_0_20px_rgba(22,163,74,0.3)]"
                onClick={() => {
                  const message = encodeURIComponent("hey i am interested in making a website");
                  window.open(`https://wa.me/919958555716?text=${message}`, "_blank");
                }}
              >
                Send Message
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>

            {/* Email Option */}
            <div className="glass-card rounded-2xl p-8 md:p-10 flex flex-col items-center text-center hover-glow group transition-all duration-300">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Mail className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Send an Email</h3>
              <p className="text-muted-foreground mb-8">
                Prefer formal communication? Drop us an email with your project brief and we'll get back to you shortly.
              </p>
              <Button
                variant="hero"
                size="xl"
                className="w-full"
                onClick={() => {
                  window.location.href = "mailto:devxgtbit@gmail.com";
                }}
              >
                Email Us
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
