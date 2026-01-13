import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
import { EventsSection } from "@/components/EventsSection";
import { GalaxySection } from "@/components/GalaxySection";
import { TeamSection } from "@/components/TeamSection";
import { PartnersSection } from "@/components/PartnersSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WhatWeDoSection />
        <EventsSection />
        <GalaxySection />
        <TeamSection />
        <PartnersSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
