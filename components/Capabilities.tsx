const capabilities = [
  { label: "AI Systems", description: "LLM pipelines, vision, agents, RAG" },
  { label: "Process Automation", description: "End-to-end workflow automation" },
  { label: "Product Builds", description: "Mobile + web, full-stack" },
  { label: "Workflow Design", description: "System mapping, dependency resolution" },
  { label: "AI Strategy", description: "Where AI creates leverage for your business" },
  { label: "Data Pipelines", description: "Ingest, transform, route, store" },
  { label: "Content Systems", description: "AI-assisted content at scale" },
  { label: "Integrations", description: "Multi-system, API-first connectivity" },
  { label: "Vision AI", description: "Image analysis, floor plans, diagnostics" },
  { label: "Mobile Apps", description: "React Native, iOS, Android, Expo" },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#6C3AE8]" />
              <span className="text-[#6C3AE8] text-xs font-mono tracking-widest uppercase">
                Tools we use to solve
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 leading-[0.95] tracking-tight mb-6">
              Capabilities
              <br />
              as enablers.
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-md">
              These aren't separate services. They are the tools we reach for
              depending on what your problem actually needs. You don't choose
              a capability — you describe the problem, and we decide what to
              use.
            </p>

            {/* Products callout */}
            <div className="mt-10 space-y-4">
              <div className="p-5 rounded-2xl border border-zinc-100 bg-zinc-50 flex items-start gap-4">
                <span className="text-2xl">🏠</span>
                <div>
                  <div className="font-bold text-zinc-900 text-sm">AnuQ Vastu</div>
                  <div className="text-zinc-500 text-sm">Vision AI + mobile + domain knowledge, combined into one product.</div>
                </div>
              </div>
              <div className="p-5 rounded-2xl border border-zinc-100 bg-zinc-50 flex items-start gap-4">
                <span className="text-2xl">✨</span>
                <div>
                  <div className="font-bold text-zinc-900 text-sm">SkinSense <span className="text-xs font-normal text-zinc-400 ml-1">Coming soon</span></div>
                  <div className="text-zinc-500 text-sm">Computer vision + health knowledge + mobile product, built as one.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: capability map */}
          <div>
            <div className="flex flex-wrap gap-3">
              {capabilities.map((cap) => (
                <div
                  key={cap.label}
                  className="group px-5 py-3 rounded-xl border border-zinc-200 hover:border-[#6C3AE8] hover:bg-[#6C3AE8]/5 transition-all cursor-default"
                >
                  <div className="font-semibold text-zinc-900 text-sm group-hover:text-[#6C3AE8] transition-colors">
                    {cap.label}
                  </div>
                  <div className="text-zinc-400 text-xs mt-0.5">{cap.description}</div>
                </div>
              ))}
            </div>

            {/* Note */}
            <p className="mt-8 text-sm text-zinc-400 font-mono">
              We use what works. The list above is a starting point, not a limit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
