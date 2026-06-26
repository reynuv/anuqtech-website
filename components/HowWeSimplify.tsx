const steps = [
  {
    number: "01",
    verb: "Understand.",
    description:
      "We don't ask you to package your problem neatly. We listen to the messy version and find the real shape of it — what it actually is versus what it looks like on the surface.",
    detail: "Discovery, stakeholder mapping, constraint identification, problem reframing.",
  },
  {
    number: "02",
    verb: "Break it down.",
    description:
      "We decompose complexity into its actual components. No unnecessary abstraction, no over-engineering. Just a clear map of what needs to happen and in what order.",
    detail: "System design, dependency mapping, scope definition, build sequencing.",
  },
  {
    number: "03",
    verb: "Solve.",
    description:
      "We build, ship, and iterate under one roof. No handoffs to a third party. No scope gaps between teams. One accountable team from problem to outcome.",
    detail: "Full-stack execution, AI integration, testing, deployment, iteration.",
  },
];

export default function HowWeSimplify() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,58,232,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(108,58,232,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#6C3AE8]" />
            <span className="text-[#6C3AE8] text-xs font-mono tracking-widest uppercase">
              How we work
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 justify-between">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight">
              We make the
              <br />
              complex usable.
            </h2>
            <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
              This isn't a process for process's sake. It's how we prevent
              simple problems from becoming expensive disasters.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-px">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="group grid lg:grid-cols-12 gap-6 py-10 border-t border-zinc-800 hover:border-[#6C3AE8]/40 transition-colors"
            >
              {/* Number */}
              <div className="lg:col-span-1">
                <span className="text-xs font-mono text-zinc-600 tracking-widest">
                  {step.number}
                </span>
              </div>

              {/* Verb */}
              <div className="lg:col-span-3">
                <h3 className="text-3xl font-black text-white group-hover:text-[#6C3AE8] transition-colors">
                  {step.verb}
                </h3>
              </div>

              {/* Description */}
              <div className="lg:col-span-5">
                <p className="text-zinc-400 leading-relaxed text-lg">{step.description}</p>
              </div>

              {/* Detail */}
              <div className="lg:col-span-3">
                <p className="text-zinc-600 text-sm leading-relaxed font-mono">{step.detail}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-zinc-800" />
        </div>
      </div>
    </section>
  );
}
