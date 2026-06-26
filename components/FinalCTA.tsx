export default function FinalCTA() {
  return (
    <section className="bg-[#0F172A] py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span className="text-[20vw] font-black text-white/[0.02] leading-none tracking-tight whitespace-nowrap">
          SOLVE
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-8 bg-[#3B82F6]" />
          <span className="text-[#3B82F6] text-xs font-mono tracking-widest uppercase">The invitation</span>
          <div className="h-px w-8 bg-[#3B82F6]" />
        </div>

        <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6">
          If no one can solve it —
          <br />
          <span className="text-[#60A5FA]">bring it to us.</span>
        </h2>

        <p className="text-xl text-zinc-400 max-w-lg mx-auto mb-10">
          We prefer complex problems and unclear starting points. You don't need the answer — that's our job.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center gap-3 px-10 py-5 bg-[#1D4ED8] text-white font-bold rounded-xl hover:bg-[#1E40AF] transition-all text-xl shadow-2xl shadow-[#1D4ED8]/30 hover:scale-105"
        >
          Start with the problem →
        </a>

        <p className="mt-5 text-sm text-zinc-600">
          No deck required. Just describe what's broken.
        </p>
      </div>
    </section>
  );
}
