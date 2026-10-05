import { MessageCircle, FileText, Rocket } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: MessageCircle,
    title: "Share the problem",
    desc: "Tell us what's not working. No tech knowledge needed — just describe what's slowing you down.",
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    n: "02",
    icon: FileText,
    title: "Get the plan",
    desc: "We'll recommend the right solution, clearly and simply. No jargon, no bloated proposals.",
    color: "from-violet-500 to-indigo-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    n: "03",
    icon: Rocket,
    title: "See it built",
    desc: "We design and deliver end-to-end. You get a working solution, not a half-finished prototype.",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] text-[#4F46E5] uppercase mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] leading-tight">
            A clear path from problem to progress.
          </h2>
        </div>

        {/* Timeline steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden sm:block absolute top-14 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-0.5 bg-gradient-to-r from-sky-200 via-violet-200 to-emerald-200" />

          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map(({ n, icon: Icon, title, desc, color, bg, border }) => (
              <div key={n} className="relative flex flex-col items-center text-center sm:items-start sm:text-left">
                {/* Step number bubble */}
                <div className={`relative w-28 h-28 rounded-3xl bg-gradient-to-br ${color} flex flex-col items-center justify-center shadow-lg shadow-indigo-100 mb-6 z-10`}>
                  <Icon size={32} className="text-white mb-1" />
                  <span className="text-white/70 text-xs font-bold tracking-widest">{n}</span>
                </div>

                {/* Card */}
                <div className={`${bg} ${border} border rounded-2xl p-6 w-full`}>
                  <h3 className="font-bold text-[#0F172A] text-lg mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-14 fill-[#0F172A]">
          <path d="M0,0 C360,60 1080,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
