import { Instagram, Linkedin, Twitter, Github, ArrowUp } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Events", href: "/#events" },
  { label: "Projects", href: "/#projects" },
  { label: "Team", href: "/#team" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/devx_gtbit19/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/devx-gtbit/", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="section-container py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <a href="/#home" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-display font-bold text-gradient">
                DevX
              </span>
              <span className="text-2xl font-display font-bold text-foreground">
                GTBIT
              </span>
            </a>
            <p className="text-muted-foreground text-sm mb-4 max-w-sm">
              An official campus chapter of DevX Bharat. Building the next
              generation of tech innovators at GTBIT, Delhi.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>devx.gtbit@gmail.com</li>
              <li>GTBIT, Delhi</li>
              <li>
                <a
                  href="https://www.instagram.com/devx_gtbit19/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @devx_gtbit19
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © 2024 DevX GTBIT. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
