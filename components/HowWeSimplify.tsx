const steps = [
  {
    number: "01",
    verb: "Understand.",
    description: "We listen to the messy version. No need to package the problem neatly — we find its real shape.",
    detail: "Discovery · stakeholder mapping · problem reframing",
  },
  {
    number: "02",
    verb: "Break it down.",
    description: "We decompose complexity into clear components. A map of what needs to happen, in what order.",
    detail: "System design · dependency mapping · scope definition",
  },
  {
    number: "03",
    verb: "Solve.",
    description: "We build and ship under one roof. No handoffs, no scope gaps, one accountable team.",
    detail: "Full-stack execution · AI integration · deployment",
  },
];

export default function HowWeSimplify() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-[#0F172A] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29,78,216,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(29,78,216,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#3B82F6]" />
            <span className="text-[#3B82F6] text-xs font-mono tracking-widest uppercase">How we work</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 justify-between">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight">
              We make the<br />complex usable.
            </h2>
            <p className="text-zinc-400 text-lg max-w-sm">
              A method, not a menu. Three steps that prevent complexity from becoming expensive.
            </p>
          </div>
        </div>

        <div className="space-y-px">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group grid lg:grid-cols-12 gap-6 py-10 border-t border-zinc-800 hover:border-[#3B82F6]/40 transition-colors"
            >
              <div className="lg:col-span-1">
                <span className="text-xs font-mono text-zinc-600 tracking-widest">{step.number}</span>
              </div>
              <div className="lg:col-span-3">
                <h3 className="text-3xl font-black text-white group-hover:text-[#3B82F6] transition-colors">
                  {step.verb}
                </h3>
              </div>
              <div className="lg:col-span-5">
                <p className="text-zinc-400 leading-relaxed text-lg">{step.description}</p>
              </div>
              <div className="lg:col-span-3">
                <p className="text-zinc-600 text-sm font-mono">{step.detail}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-zinc-800" />
        </div>
      </div>
    </section>
  );
}
