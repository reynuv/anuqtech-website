"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeHelp from "@/components/WhatWeHelp";
import HowItWorks from "@/components/HowItWorks";
import OurWork from "@/components/OurWork";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [prefillEmail, setPrefillEmail] = useState("");

  function openContact(email?: string) {
    setPrefillEmail(email || "");
    setDialogOpen(true);
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar onContact={openContact} />
      <main id="main">
        <Hero onContact={openContact} />
        <WhatWeHelp onContact={openContact} />
        <HowItWorks />
        <OurWork onContact={openContact} />
        <ContactCTA onContact={openContact} />
      </main>
      <Footer />
      <ContactDialog
        open={dialogOpen}
        prefillEmail={prefillEmail}
        onClose={() => setDialogOpen(false)}
      />
      <RevealObserver />
    </>
  );
}
