const cases = [
  {
    tag: "AI · Mobile",
    product: "AnuQ Vastu",
    before: "Vastu consultants charge ₹5,000–25,000 per visit. No affordable alternative existed.",
    after: "AI floor plan analysis — room-by-room Vastu scores, remedies, and color guidance in minutes.",
    outcome: "Specialist knowledge. Accessible price.",
    metric: "< 5 min",
    metricLabel: "full analysis",
  },
  {
    tag: "Vision AI · Mobile",
    product: "SkinSense",
    before: "Skincare advice was generic or required expensive dermatologist visits.",
    after: "Real-time skin analysis, personalised routine builder, and ingredient checker — on your phone.",
    outcome: "Dermatology knowledge. Everyone's pocket.",
    metric: "Real-time",
    metricLabel: "analysis",
  },
  {
    tag: "AI Automation · B2B",
    product: "Custom AI Workflow",
    before: "Client's team spent 60% of time on manual document processing across three systems.",
    after: "One AI pipeline: ingest, classify, extract, route. Three tools replaced. Team refocused.",
    outcome: "60% time reclaimed. One pipeline.",
    metric: "60%",
    metricLabel: "time saved",
  },
];

export default function Proof() {
  return (
    <section id="proof" className="py-24 sm:py-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#1D4ED8]" />
            <span className="text-[#1D4ED8] text-xs font-mono tracking-widest uppercase">Breadth doesn't mean vague</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 leading-[0.95] tracking-tight">
            Proof.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.product}
              className="bg-white rounded-2xl border border-zinc-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="h-1 bg-gradient-to-r from-[#1D4ED8] to-[#0EA5E9]" />
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">{c.tag}</span>
                  <div className="text-right">
                    <div className="text-2xl font-black text-[#1D4ED8]">{c.metric}</div>
                    <div className="text-[10px] text-zinc-400 font-mono">{c.metricLabel}</div>
                  </div>
                </div>

                <h3 className="text-xl font-black text-zinc-900 mb-5">{c.product}</h3>

                <div className="space-y-3 flex-1">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-100">
                    <div className="text-[10px] font-mono text-red-400 uppercase tracking-widest mb-1.5">Before</div>
                    <p className="text-sm text-zinc-600 leading-relaxed">{c.before}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                    <div className="text-[10px] font-mono text-blue-600 uppercase tracking-widest mb-1.5">After</div>
                    <p className="text-sm text-zinc-600 leading-relaxed">{c.after}</p>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-zinc-100">
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
