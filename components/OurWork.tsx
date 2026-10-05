import { ArrowRight, CheckCircle2, Zap, Smartphone } from "lucide-react";

const cases = [
  {
    tag: "Process Automation",
    title: "From hours to minutes",
    visual: (
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 space-y-2">
        {["Manual work", "Automated", "Time saved", "Happier team"].map((item, i) => (
          <div key={item} className="flex items-center gap-2.5 text-sm">
            <CheckCircle2 size={15} className={i > 0 ? "text-emerald-500" : "text-slate-300"} fill={i > 0 ? "#10B981" : "none"} />
            <span className={i > 0 ? "text-slate-700 font-medium" : "text-slate-400 line-through"}>{item}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    tag: "Connected Systems",
    title: "All your tools. Working together.",
    visual: (
      <div className="flex items-center justify-center gap-3 py-3">
        {[
          { bg: "bg-[#4A154B]", text: "S", label: "Slack" },
          { bg: "bg-[#4F46E5]", text: "AQ", label: "ANU-Q" },
          { bg: "bg-[#0F9D58]", text: "G", label: "Sheets" },
        ].map(({ bg, text, label }, i) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex flex-col items-center gap-1">
              <div className={`w-12 h-12 rounded-2xl ${bg} text-white font-black text-sm flex items-center justify-center shadow-md`}>
                {text}
              </div>
              <span className="text-[10px] text-slate-400">{label}</span>
            </div>
            {i < 2 && (
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(3)].map((_, d) => (
                  <div key={d} className="w-1 h-1 rounded-full bg-indigo-200" />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    ),
  },
  {
    tag: "Custom Solutions",
    title: "Your idea. Built for your business.",
    visual: (
      <div className="flex justify-center py-2">
        <div className="w-28 bg-white rounded-2xl border-2 border-slate-200 shadow-lg overflow-hidden">
          <div className="bg-[#4F46E5] h-8 flex items-center justify-center">
            <Smartphone size={14} className="text-white" />
          </div>
          <div className="p-2 space-y-1.5">
            {[80, 60, 90, 50].map((w, i) => (
              <div key={i} className="h-1.5 rounded-full bg-slate-100" style={{ width: `${w}%` }} />
            ))}
            <div className="mt-2 h-5 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center">
              <div className="w-8 h-1 rounded-full bg-[#4F46E5]/40" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function OurWork() {
  return (
    <section id="our-work" className="bg-[#F8FAFF] py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#4F46E5] uppercase mb-3">Our Work</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] leading-tight">
              A few ways this can look.
            </h2>
          </div>
          <a href="#contact" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#4F46E5] hover:text-[#3730A3] transition-colors">
            View all case studies <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {cases.map(({ tag, title, visual }) => (
            <div
              key={tag}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="p-5 flex-1">
                <p className="text-xs font-semibold text-[#4F46E5] tracking-wide uppercase mb-3">{tag}</p>
                <div className="mb-5">{visual}</div>
                <h3 className="font-bold text-[#0F172A] text-lg leading-snug">{title}</h3>
              </div>
              <div className="px-5 pb-5">
                <a
                  href="#contact"
                  className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#4F46E5] flex items-center justify-center transition-colors"
                >
                  <ArrowRight size={14} className="text-slate-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
