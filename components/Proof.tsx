const cases = [
  {
    tag: "AI · Mobile Product",
    product: "AnuQ Vastu",
    before: "Vastu consultants charge ₹5,000–25,000 per visit. Apartment dwellers had no affordable, reliable option.",
    after: "AI-powered floor plan analysis delivering room-by-room Vastu scores, color guidance, and remedies in minutes — not days.",
    outcome: "From expensive specialist to accessible AI product.",
    metric: "< 5 min",
    metricLabel: "analysis time",
  },
  {
    tag: "AI · Vision · Mobile",
    product: "SkinSense",
    before: "Skincare advice was generic or required expensive dermatologist visits. No personalised, real-time analysis at scale.",
    after: "Computer vision + dermatology knowledge base delivering personalised skin analysis, routine builder, and ingredient checker.",
    outcome: "Specialist dermatology knowledge made accessible to everyone.",
    metric: "Real-time",
    metricLabel: "analysis",
  },
  {
    tag: "AI Automation · B2B",
    product: "Custom AI Workflow",
    before: "Client's team spent 60% of time on manual document processing across three disconnected systems.",
    after: "Single AI pipeline: ingest, classify, extract, route. Three systems unified. Team refocused on high-value work.",
    outcome: "60% time saving. One pipeline replacing three fragmented tools.",
    metric: "60%",
    metricLabel: "time reclaimed",
  },
];

export default function Proof() {
  return (
    <section id="proof" className="py-24 sm:py-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#6C3AE8]" />
            <span className="text-[#6C3AE8] text-xs font-mono tracking-widest uppercase">
              Breadth doesn't mean vague
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 leading-[0.95] tracking-tight">
            Proof.
          </h2>
        </div>

        {/* Cases */}
        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.product}
              className="bg-white rounded-2xl border border-zinc-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Top bar */}
              <div className="h-1 bg-gradient-to-r from-[#6C3AE8] to-[#F7931E]" />

              <div className="p-8 flex-1 flex flex-col">
                {/* Tag + product */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    {c.tag}
                  </span>
                  <div className="text-right">
                    <div className="text-2xl font-black text-[#6C3AE8]">{c.metric}</div>
                    <div className="text-[10px] text-zinc-400 font-mono">{c.metricLabel}</div>
                  </div>
                </div>

                <h3 className="text-xl font-black text-zinc-900 mb-6">{c.product}</h3>

                {/* Before / After */}
                <div className="space-y-4 flex-1">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-100">
                    <div className="text-[10px] font-mono text-red-400 uppercase tracking-widest mb-2">Before</div>
                    <p className="text-sm text-zinc-600 leading-relaxed">{c.before}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-green-50 border border-green-100">
                    <div className="text-[10px] font-mono text-green-600 uppercase tracking-widest mb-2">After</div>
                    <p className="text-sm text-zinc-600 leading-relaxed">{c.after}</p>
                  </div>
                </div>

                {/* Outcome */}
                <div className="mt-6 pt-5 border-t border-zinc-100">
                  <p className="text-sm font-semibold text-zinc-900">{c.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
