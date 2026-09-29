"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-[#0F172A] overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29,78,216,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(29,78,216,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow — centered on logo */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#1D4ED8]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-16">

        {/* Logo — prominent brand anchor */}
        <div className="flex flex-col items-start gap-4 mb-14">
          <Image
            src="/logo-icon.webp"
            alt="ANU-Q Technologies"
            width={120}
            height={120}
            className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain drop-shadow-[0_0_40px_rgba(96,165,250,0.35)]"
            priority
          />
          <div>
            <p className="text-white font-black text-2xl sm:text-3xl tracking-widest uppercase leading-none">ANU-Q</p>
            <p className="text-zinc-500 text-xs tracking-[0.4em] uppercase mt-1">Technologies</p>
          </div>
        </div>

        <h1 className="text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.9] tracking-tight text-white max-w-5xl mb-8">
          One team for the problems
          <br />
          <span className="text-[#60A5FA]">
            specialists split apart.
          </span>
        </h1>

        <p className="text-xl text-zinc-400 max-w-xl leading-relaxed mb-10">
          Complex, fragmented problems. No gap between specialists. One team,
          one solution, fewer handoffs.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1D4ED8] text-white font-semibold rounded-xl hover:bg-[#1E40AF] transition-all text-lg shadow-lg shadow-[#1D4ED8]/30"
          >
            Bring us your problem
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#manifesto"
            className="inline-flex items-center gap-3 px-8 py-4 border border-zinc-700 text-zinc-300 font-semibold rounded-xl hover:border-zinc-400 hover:text-white transition-all text-lg"
          >
            See how we think
          </a>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative border-t border-white/5 py-5 overflow-hidden">
        <div className="ticker-track flex gap-0 whitespace-nowrap w-max">
          {[
            "AI Systems", "Process Automation", "Product Builds", "Workflow Design",
            "AnuQ Vastu", "SkinSense", "Full-Stack Development", "AI Strategy",
            "AI Systems", "Process Automation", "Product Builds", "Workflow Design",
            "AnuQ Vastu", "SkinSense", "Full-Stack Development", "AI Strategy",
          ].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 text-sm font-mono text-zinc-600 px-6">
              {item}<span className="text-[#3B82F6]">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
