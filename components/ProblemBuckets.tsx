const buckets = [
  {
    number: "01",
    headline: "Too many moving parts.",
    description:
      "Your project involves AI, product, automation, content, and ops — and nobody owns the whole thing. You're managing five vendors instead of building the solution.",
    examples: ["Multi-system integrations", "AI + product + ops combined", "Cross-functional builds"],
  },
  {
    number: "02",
    headline: "No one owns the full solution.",
    description:
      "Each specialist delivered their part. Nobody connected them. You're left with a collection of correct pieces that don't work together.",
    examples: ["Fragmented tech stacks", "Disconnected workflows", "Half-automated processes"],
  },
  {
    number: "03",
    headline: "The scope keeps shifting.",
    description:
      "What started as an app became a workflow problem, which revealed a data problem, which needs an AI layer. Specialists can't follow the problem as it evolves. We can.",
    examples: ["Evolving product scope", "Unclear starting points", "Problems without a name yet"],
  },
  {
    number: "04",
    headline: "You've been told it can't be done.",
    description:
      "Other teams quoted it as out of scope, too expensive, or too complex. We prefer those problems. That's where generalist thinking compounds.",
    examples: ["Rejected proposals", "\"Custom\" requirements", "Nobody's solved this yet"],
  },
];

export default function ProblemBuckets() {
  return (
    <section id="problems" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16 border-b border-zinc-100 pb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#6C3AE8]" />
              <span className="text-[#6C3AE8] text-xs font-mono tracking-widest uppercase">
                Do any of these sound familiar?
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 leading-[0.95] tracking-tight">
              We recognise
              <br />
              your problem.
            </h2>
          </div>
          <p className="text-zinc-500 text-lg max-w-sm leading-relaxed">
            Most of our clients come to us after the specialist route failed.
            We're built for exactly that moment.
          </p>
        </div>

        {/* Buckets */}
        <div className="grid md:grid-cols-2 gap-px bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-100">
          {buckets.map((b) => (
            <div
              key={b.number}
              className="bg-white p-8 sm:p-10 group hover:bg-zinc-50 transition-colors"
            >
              <span className="text-xs font-mono text-zinc-300 tracking-widest">{b.number}</span>
              <h3 className="text-2xl font-black text-zinc-900 mt-3 mb-4 group-hover:text-[#6C3AE8] transition-colors">
                {b.headline}
              </h3>
              <p className="text-zinc-500 leading-relaxed mb-6">{b.description}</p>
              <div className="flex flex-wrap gap-2">
                {b.examples.map((e) => (
                  <span
                    key={e}
                    className="text-xs px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-500 font-medium"
                  >
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
