import { ArrowRight, CheckCircle2, Smartphone } from "lucide-react";

const cases = [
  {
    tag: "Process Automation",
    tagColor: "text-sky-600 bg-sky-50",
    title: "From hours to minutes",
    gradient: "from-sky-50 to-blue-50",
    visual: (
      <div className="bg-white rounded-xl border border-slate-100 shadow p-5 space-y-3">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Before → After</p>
        <div className="space-y-2">
          {[
            { label: "Data entry", done: false },
            { label: "Report generation", done: true },
            { label: "Email follow-ups", done: true },
            { label: "Status updates", done: true },
          ].map(({ label, done }) => (
            <div key={label} className="flex items-center gap-2.5">
              <CheckCircle2
                size={16}
                className={done ? "text-emerald-500" : "text-rose-300"}
                fill={done ? "#10B981" : "none"}
              />
              <span className={`text-sm font-medium ${done ? "text-slate-700" : "text-rose-400 line-through"}`}>
                {label}
              </span>
              {done && <span className="ml-auto text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">Auto</span>}
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between text-xs text-slate-500">
          <span>Time saved</span>
          <span className="font-black text-emerald-600 text-sm">14 hrs/week</span>
        </div>
      </div>
    ),
  },
  {
    tag: "Connected Systems",
    tagColor: "text-violet-600 bg-violet-50",
    title: "All your tools. Working together.",
    gradient: "from-violet-50 to-indigo-50",
    visual: (
      <div className="py-2">
        <div className="flex items-center justify-center gap-2 mb-4">
          {[
            { bg: "bg-[#4A154B]", label: "Slack" },
            { bg: "bg-[#4F46E5]", label: "ANU-Q" },
            { bg: "bg-[#0F9D58]", label: "Sheets" },
          ].map(({ bg, label }, i) => (
            <div key={label} className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-1">
                <div className={`w-14 h-14 rounded-2xl ${bg} text-white font-black text-xs flex items-center justify-center shadow-lg`}>
                  {label.slice(0, 2)}
                </div>
                <span className="text-[10px] text-slate-500 font-medium">{label}</span>
              </div>
              {i < 2 && (
                <div className="flex gap-0.5 mb-4">
                  {[...Array(4)].map((_, d) => (
                    <div key={d} className="w-1.5 h-1.5 rounded-full bg-indigo-200" />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl border border-slate-100 p-3 text-center shadow-sm">
          <p className="text-xs text-slate-500">Last sync</p>
          <p className="text-sm font-bold text-slate-800">2 seconds ago</p>
          <div className="mt-2 h-1.5 rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-violet-400 to-indigo-500" />
          </div>
        </div>
      </div>
    ),
  },
  {
    tag: "Custom Solutions",
    tagColor: "text-emerald-600 bg-emerald-50",
    title: "Your idea. Built for your business.",
    gradient: "from-emerald-50 to-teal-50",
    visual: (
      <div className="flex justify-center py-1">
        <div className="w-36 bg-white rounded-[28px] border-2 border-slate-200 shadow-xl overflow-hidden">
          {/* Phone status bar */}
          <div className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] h-10 flex items-center justify-between px-3">
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-white/60" />
              <div className="w-1 h-1 rounded-full bg-white/60" />
              <div className="w-1 h-1 rounded-full bg-white/60" />
            </div>
            <Smartphone size={12} className="text-white/80" />
          </div>
          {/* App content */}
          <div className="p-3 space-y-2 bg-[#F8FAFF]">
            <div className="h-2.5 rounded-full bg-slate-200 w-3/4" />
            <div className="h-2 rounded-full bg-slate-100 w-full" />
            <div className="h-2 rounded-full bg-slate-100 w-5/6" />
            <div className="mt-3 grid grid-cols-2 gap-1.5">
              <div className="h-12 rounded-xl bg-white border border-indigo-100 shadow-sm flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-indigo-100" />
              </div>
              <div className="h-12 rounded-xl bg-white border border-emerald-100 shadow-sm flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-emerald-100" />
              </div>
            </div>
            <div className="h-7 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] flex items-center justify-center">
              <div className="w-12 h-1.5 rounded-full bg-white/60" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function OurWork() {
  return (
    <section id="our-work" className="relative bg-[#0F172A] py-24">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "linear-gradient(rgba(79,70,229,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase mb-3">Our Work</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              A few ways this can look.
            </h2>
          </div>
          <a href="#contact" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-white transition-colors">
            View all case studies <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {cases.map(({ tag, tagColor, title, gradient, visual }) => (
            <div
              key={tag}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              {/* Gradient header */}
              <div className={`bg-gradient-to-br ${gradient} p-5`}>
                <span className={`text-xs font-bold tracking-wide uppercase px-2.5 py-1 rounded-full ${tagColor}`}>
                  {tag}
                </span>
                <div className="mt-4">{visual}</div>
              </div>

              {/* Card footer */}
              <div className="px-5 py-4 flex items-center justify-between border-t border-slate-100">
                <h3 className="font-bold text-[#0F172A] text-base leading-snug">{title}</h3>
                <a
                  href="#contact"
                  className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#4F46E5] flex items-center justify-center transition-colors shrink-0 ml-3"
                >
                  <ArrowRight size={14} className="text-slate-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave down into contact */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-14 fill-[#0F172A]">
          <path d="M0,20 C480,70 960,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
