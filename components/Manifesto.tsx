export default function Manifesto() {
  return (
    <section id="manifesto" className="bg-[#1D4ED8] py-24 sm:py-32 overflow-hidden relative">
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-white/40" />
              <span className="text-white/60 text-xs font-mono tracking-widest uppercase">Our position</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tight">
              The specialist<br />problem.
            </h2>
            <div className="mt-12 border-l-4 border-white/30 pl-6">
              <p className="text-xl text-white/80 font-light italic leading-relaxed">
                "When the problem is bigger than one specialist, bring it to us."
              </p>
            </div>
          </div>

          <div className="space-y-5 text-white/80 text-lg leading-relaxed">
            <p>
              Specialists solve narrow problems well — until yours crosses a boundary. Then you hire two. Then a third to coordinate them. Then a manager for the coordinator.
            </p>
            <p className="text-white font-semibold text-xl">
              The problem wasn't complex. The structure made it complex.
            </p>
            <p>
              Every handoff is a delay. Every gap between specialisms is your budget leaking. We close those gaps — one team, full accountability.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 mt-6">
              {[
                { value: "1", label: "team, not three" },
                { value: "0", label: "coordination tax" },
                { value: "∞", label: "problem types" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-4xl font-black text-white">{s.value}</div>
                  <div className="text-sm text-white/50 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
