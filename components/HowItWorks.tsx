import { MessageCircle, FileText, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    n: "1",
    icon: MessageCircle,
    title: "Share the problem",
    desc: "Tell us what's not working. No tech knowledge needed.",
  },
  {
    n: "2",
    icon: FileText,
    title: "Get the plan",
    desc: "We'll recommend the right solution, clearly and simply.",
  },
  {
    n: "3",
    icon: Rocket,
    title: "See it built",
    desc: "We design and deliver it end-to-end.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#4F46E5] uppercase mb-3">How It Works</p>
        <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] leading-tight mb-16 max-w-xl">
          A clear path from problem to progress.
        </h2>

        <div className="flex flex-col sm:flex-row items-start gap-0">
          {steps.map(({ n, icon: Icon, title, desc }, i) => (
            <div key={n} className="flex flex-col sm:flex-row items-start gap-0 flex-1">
              <div className="flex flex-col sm:flex-row items-start gap-4 flex-1">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-sm font-black flex items-center justify-center">
                      {n}
                    </span>
                    <span className="w-10 h-10 rounded-2xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center">
                      <Icon size={18} />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F172A] text-lg mb-1.5">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">{desc}</p>
                  </div>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden sm:flex items-start pt-4 px-4 text-slate-300">
                  <ArrowRight size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
