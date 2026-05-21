"use client";

import { Bot, Layers, Cpu, BarChart3, Workflow, Shield } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agent Development",
    description:
      "Custom AI agents that automate complex workflows, handle customer queries, and make decisions — built on Claude, GPT, and open-source LLMs.",
    color: "from-[#6C3AE8] to-[#9B6DFF]",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description:
      "End-to-end automation of business processes — from document processing and data extraction to multi-system integrations via APIs.",
    color: "from-[#F7931E] to-[#FF6B35]",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: Cpu,
    title: "Vision & Multimodal AI",
    description:
      "AI systems that understand images, documents, and floor plans. We build vision pipelines for real-world inspection, analysis, and classification.",
    color: "from-[#06b6d4] to-[#3b82f6]",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
  },
  {
    icon: Layers,
    title: "Full-Stack AI Products",
    description:
      "From concept to app store — we design, build, and launch complete AI-powered mobile and web products on React Native, Next.js, and Supabase.",
    color: "from-[#10b981] to-[#059669]",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: BarChart3,
    title: "AI Strategy & Consulting",
    description:
      "We help businesses identify where AI creates the most leverage, build a roadmap, and select the right models and infrastructure for their needs.",
    color: "from-[#f43f5e] to-[#e11d48]",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    icon: Shield,
    title: "Responsible AI",
    description:
      "We bake compliance, data privacy (DPDPA 2023), and responsible AI practices into every product — not as an afterthought, but from day one.",
    color: "from-[#8b5cf6] to-[#6C3AE8]",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6C3AE8]/10 border border-[#6C3AE8]/20 text-[#6C3AE8] text-sm font-medium mb-4">
            What We Do
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight mb-4">
            AI Automation that{" "}
            <span className="gradient-text">actually works</span>
          </h2>
          <p className="text-lg text-zinc-500">
            We don&apos;t chase trends — we build AI systems that deliver measurable
            outcomes for your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className={`group p-6 rounded-2xl border ${svc.border} ${svc.bg} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-4 shadow-md`}
                >
                  <Icon className="text-white" size={22} />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  {svc.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {svc.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA strip */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#6C3AE8] to-[#9B6DFF] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-white">
              Have a project in mind?
            </h3>
            <p className="text-violet-200 mt-1">
              Let&apos;s talk about how AI can transform your business.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-white text-[#6C3AE8] font-semibold hover:bg-violet-50 transition-colors shadow-lg"
          >
            Start a conversation →
          </a>
        </div>
      </div>
    </section>
  );
}
