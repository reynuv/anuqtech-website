import { Clock, Share2, BarChart3, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Clock,
    iconBg: "bg-sky-50 text-sky-500",
    cardAccent: "from-sky-50",
    title: "Save time",
    desc: "Automate the manual work so your team can focus on what matters.",
  },
  {
    icon: Share2,
    iconBg: "bg-teal-50 text-teal-500",
    cardAccent: "from-teal-50",
    title: "Connect systems",
    desc: "Bring your data, tools and teams together.",
  },
  {
    icon: BarChart3,
    iconBg: "bg-violet-50 text-violet-500",
    cardAccent: "from-violet-50",
    title: "Build smarter",
    desc: "Turn your ideas into simple, scalable solutions.",
  },
];

export default function WhatWeHelp() {
  return (
    <section id="what-we-do" className="bg-[#F8FAFF] py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#4F46E5] uppercase mb-3">What We Help With</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] leading-tight max-w-md">
              Turn challenges into opportunities.
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs leading-relaxed sm:text-right">
            Practical technology solutions<br className="hidden sm:block" /> for real business needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {services.map(({ icon: Icon, iconBg, cardAccent, title, desc }) => (
            <div
              key={title}
              className={`group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow`}
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${cardAccent} to-white`} />
              <div className="p-7">
                <span className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-5 ${iconBg}`}>
                  <Icon size={22} />
                </span>
                <h3 className="font-bold text-[#0F172A] text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{desc}</p>
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
