import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeHelp from "@/components/WhatWeHelp";
import HowItWorks from "@/components/HowItWorks";
import OurWork from "@/components/OurWork";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatWeHelp />
      <HowItWorks />
      <OurWork />
      <ContactCTA />
      <Footer />
    </main>
  );
}
