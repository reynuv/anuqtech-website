"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-[#0a0a0a] overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,58,232,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(108,58,232,0.07) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6C3AE8]/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px w-12 bg-[#6C3AE8]" />
          <span className="text-[#6C3AE8] text-sm font-mono tracking-widest uppercase">
            AnuQ Technologies
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.9] tracking-tight text-white max-w-5xl mb-10">
          One team for the problems
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #6C3AE8, #F7931E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            specialists split apart.
          </span>
        </h1>

        {/* Subhead */}
        <p className="text-xl sm:text-2xl text-zinc-400 max-w-2xl leading-relaxed mb-12 font-light">
          We take the complex, fragmented problems no single specialist owns —
          and deliver one complete solution. Fewer handoffs. Less waste.
          Faster results.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#6C3AE8] text-white font-semibold rounded-xl hover:bg-[#5a2fd4] transition-all text-lg shadow-lg shadow-[#6C3AE8]/30"
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
      <div className="relative border-t border-zinc-800 py-5 overflow-hidden">
        <div className="ticker-track flex gap-0 whitespace-nowrap w-max">
          {[
            "AI Systems", "Process Automation", "Product Builds",
            "Workflow Design", "AnuQ Vastu", "SkinSense", "Full-Stack Development",
            "AI Strategy", "Problem Solving", "One Team",
            "AI Systems", "Process Automation", "Product Builds",
            "Workflow Design", "AnuQ Vastu", "SkinSense", "Full-Stack Development",
            "AI Strategy", "Problem Solving", "One Team",
          ].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 text-sm font-mono text-zinc-500 px-6">
              {item}
              <span className="text-[#6C3AE8]">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
