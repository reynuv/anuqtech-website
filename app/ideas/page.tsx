import { ArrowRight, Lightbulb, Target, Zap, Users } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const offerings = [
  { icon: Lightbulb, title: "Concept to prototype", desc: "We take rough ideas and shape them into working prototypes fast — validating before you invest big." },
  { icon: Target, title: "Problem definition", desc: "Before we build anything, we help you define exactly what problem you're solving and for whom." },
  { icon: Zap, title: "Rapid experimentation", desc: "Small, fast experiments to test your assumptions before committing to full-scale development." },
  { icon: Users, title: "Workshop facilitation", desc: "Structured sessions to align your team, uncover blind spots, and map the path forward." },
];

export default function IdeasPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#4F46E5] mb-10 transition-colors">
              ← Back to home
            </Link>
            <p className="text-xs font-bold tracking-[0.2em] text-[#4F46E5] uppercase mb-4">Ideas</p>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0F172A] leading-tight mb-6 max-w-2xl">
              From rough idea to real solution.
            </h1>
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed mb-12">
              You don't need a complete brief. Bring us the spark — we'll help shape it into something that works.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#4F46E5] text-white font-semibold hover:bg-[#3730A3] transition-colors">
              Start with your idea <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <section className="bg-[#F8FAFF] py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid sm:grid-cols-2 gap-6">
              {offerings.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                  <span className="w-11 h-11 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-bold text-[#0F172A] text-lg mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
