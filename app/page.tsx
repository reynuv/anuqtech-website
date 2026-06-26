import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import ProblemBuckets from "@/components/ProblemBuckets";
import HowWeSimplify from "@/components/HowWeSimplify";
import Proof from "@/components/Proof";
import Capabilities from "@/components/Capabilities";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <ProblemBuckets />
        <HowWeSimplify />
        <Proof />
        <Capabilities />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
