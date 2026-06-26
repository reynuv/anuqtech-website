const buckets = [
  {
    number: "01",
    headline: "Too many moving parts.",
    description: "AI, product, automation, ops — and nobody owns the whole thing. You're managing vendors instead of building.",
    examples: ["Multi-system integrations", "Cross-functional builds", "AI + product combined"],
  },
  {
    number: "02",
    headline: "No one owns the full solution.",
    description: "Each specialist delivered their part. Nobody connected them. Correct pieces. Broken outcome.",
    examples: ["Fragmented tech stacks", "Disconnected workflows", "Half-automated processes"],
  },
  {
    number: "03",
    headline: "The scope keeps shifting.",
    description: "What started as an app revealed a workflow problem, then a data problem, then an AI layer. Specialists can't follow. We can.",
    examples: ["Evolving scope", "Unclear starting points", "Problems without a name yet"],
  },
  {
    number: "04",
    headline: "You've been told it can't be done.",
    description: "Out of scope. Too complex. Too expensive. We prefer those problems.",
    examples: ["Rejected proposals", "Custom requirements", "No one has solved this yet"],
  },
];

export default function ProblemBuckets() {
  return (
    <section id="problems" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16 border-b border-zinc-100 pb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#1D4ED8]" />
              <span className="text-[#1D4ED8] text-xs font-mono tracking-widest uppercase">Sound familiar?</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 leading-[0.95] tracking-tight">
              We recognise<br />your problem.
            </h2>
          </div>
          <p className="text-zinc-500 text-lg max-w-xs">
            Most clients come to us after the specialist route failed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-100">
          {buckets.map((b) => (
            <div key={b.number} className="bg-white p-8 sm:p-10 group hover:bg-blue-50/50 transition-colors">
              <span className="text-xs font-mono text-zinc-300 tracking-widest">{b.number}</span>
              <h3 className="text-2xl font-black text-zinc-900 mt-3 mb-3 group-hover:text-[#1D4ED8] transition-colors">
                {b.headline}
              </h3>
              <p className="text-zinc-500 leading-relaxed mb-5 text-sm">{b.description}</p>
              <div className="flex flex-wrap gap-2">
                {b.examples.map((e) => (
                  <span key={e} className="text-xs px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-500 font-medium">
                    {e}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
