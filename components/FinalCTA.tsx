export default function FinalCTA() {
  return (
    <section className="bg-[#0a0a0a] py-32 relative overflow-hidden">
      {/* Large background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="text-[20vw] font-black text-white/[0.02] leading-none tracking-tight whitespace-nowrap"
        >
          SOLVE
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-8 bg-[#6C3AE8]" />
          <span className="text-[#6C3AE8] text-xs font-mono tracking-widest uppercase">
            The invitation
          </span>
          <div className="h-px w-8 bg-[#6C3AE8]" />
        </div>

        <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8">
          If no one can
          <br />
          solve it —
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #6C3AE8, #F7931E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            bring it to us.
          </span>
        </h2>

        <p className="text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed mb-12">
          We prefer complex problems and unclear starting points. You don't
          need to have the answer figured out — that's our job.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center gap-3 px-10 py-5 bg-[#6C3AE8] text-white font-bold rounded-xl hover:bg-[#5a2fd4] transition-all text-xl shadow-2xl shadow-[#6C3AE8]/30 hover:shadow-[#6C3AE8]/50 hover:scale-105"
        >
          Start with the problem →
        </a>

        <p className="mt-6 text-sm text-zinc-600">
          No deck required. No scope document. Just describe what's broken.
        </p>
      </div>
    </section>
  );
}
