import { Clock, Share2, BarChart3, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Clock,
    iconBg: "bg-sky-500",
    gradient: "from-sky-500/10 via-sky-50/50 to-white",
    border: "border-sky-100",
    accent: "bg-sky-500",
    title: "Save time",
    desc: "Automate the manual work so your team can focus on what matters.",
    stat: "80%",
    statLabel: "less manual work",
  },
  {
    icon: Share2,
    iconBg: "bg-teal-500",
    gradient: "from-teal-500/10 via-teal-50/50 to-white",
    border: "border-teal-100",
    accent: "bg-teal-500",
    title: "Connect systems",
    desc: "Bring your data, tools and teams together into one coherent workflow.",
    stat: "1",
    statLabel: "source of truth",
  },
  {
    icon: BarChart3,
    iconBg: "bg-violet-500",
    gradient: "from-violet-500/10 via-violet-50/50 to-white",
    border: "border-violet-100",
    accent: "bg-violet-500",
    title: "Build smarter",
    desc: "Turn your ideas into simple, scalable solutions built for growth.",
    stat: "3×",
    statLabel: "faster to market",
  },
];

export default function WhatWeHelp() {
  return (
    <section id="what-we-do" className="relative bg-[#F0F4FF] py-24">
      {/* Top wave (matches hero bottom) */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none -translate-y-px">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-14 fill-[#F0F4FF]">
          <path d="M0,40 C360,0 1080,80 1440,20 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#4F46E5] uppercase mb-3">What We Help With</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] leading-tight max-w-md">
              Turn challenges into opportunities.
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-xs leading-relaxed sm:text-right">
            Practical technology solutions<br className="hidden sm:block" /> for real business needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, iconBg, gradient, border, accent, title, desc, stat, statLabel }) => (
            <div
              key={title}
              className={`group bg-gradient-to-b ${gradient} rounded-2xl border ${border} shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}
            >
              <div className={`h-1 w-full ${accent}`} />
              <div className="p-7">
                <span className={`w-12 h-12 rounded-2xl ${iconBg} text-white flex items-center justify-center mb-5 shadow-md`}>
                  <Icon size={22} />
                </span>
                <h3 className="font-bold text-[#0F172A] text-lg mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{desc}</p>

                {/* Stat callout */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-black text-[#4F46E5]">{stat}</span>
                  <span className="text-xs text-slate-500 font-medium">{statLabel}</span>
                </div>

                <a
                  href="#contact"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F46E5] hover:gap-2.5 transition-all`}
                >
                  Learn more <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave transition down */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-14 fill-white">
          <path d="M0,20 C480,70 960,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
