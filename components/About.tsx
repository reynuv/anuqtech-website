"use client";

import { Building2, Target, Lightbulb, Heart } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "AI-First Thinking",
    description:
      "Every product we build starts with the question: how can AI make this 10x better for the user?",
  },
  {
    icon: Target,
    title: "India-Native",
    description:
      "Built for Indian users — Hindi + English, Razorpay payments, DPDPA compliance, and problems that matter here.",
  },
  {
    icon: Heart,
    title: "Human-Centered",
    description:
      "Technology is a means, not an end. We measure success by the lives our products genuinely improve.",
  },
  {
    icon: Building2,
    title: "Lean & Focused",
    description:
      "As an OPC, every decision is deliberate. No bloat, no committees — fast execution, high quality.",
  },
];

const timeline = [
  { year: "2024", event: "AnuQ Technologies founded as OPC in India" },
  { year: "2025 Q1", event: "AnuQ Vastu v1.0 — floor plan analysis with Claude Vision" },
  { year: "2025 Q3", event: "SkinSense development begins" },
  { year: "2026", event: "AI Automation services launched for B2B clients" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: story */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6C3AE8]/10 border border-[#6C3AE8]/20 text-[#6C3AE8] text-sm font-medium mb-6">
              About AnuQ Technologies
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight mb-6">
              A one-person company with{" "}
              <span className="gradient-text">outsized ambition.</span>
            </h2>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>
                AnuQ Technologies is an AI-first technology company registered
                as a One Person Company (OPC) in India. We build intelligent
                software products that solve real problems for everyday
                people — starting with AnuQ Vastu and SkinSense.
              </p>
              <p>
                Our approach is simple: take a problem that millions of people
                face, apply modern AI to make the solution 10x better and 10x
                more accessible, and ship it as a polished product. No bloat,
                no buzzwords — just working software that people love.
              </p>
              <p>
                We also work with businesses to build custom AI automation —
                agents, pipelines, and integrations that eliminate manual work
                and unlock new capabilities.
              </p>
            </div>

            {/* OPC badge */}
            <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-zinc-200 bg-zinc-50">
              <div className="w-10 h-10 rounded-lg bg-[#6C3AE8]/10 flex items-center justify-center">
                <Building2 size={20} className="text-[#6C3AE8]" />
              </div>
              <div>
                <div className="text-sm font-bold text-zinc-900">Registered OPC · India</div>
                <div className="text-xs text-zinc-400">Ministry of Corporate Affairs</div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-4">
                Journey
              </h3>
              <div className="space-y-4">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#6C3AE8] mt-1 flex-shrink-0" />
                      {i < timeline.length - 1 && (
                        <div className="w-px h-8 bg-[#6C3AE8]/20 mt-1" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#6C3AE8] uppercase tracking-wide">
                        {item.year}
                      </span>
                      <p className="text-sm text-zinc-600 mt-0.5">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: values */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-6">
              Our Values
            </h3>
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="p-6 rounded-2xl border border-zinc-100 hover:border-[#6C3AE8]/30 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#6C3AE8]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#6C3AE8] transition-colors">
                      <Icon
                        size={18}
                        className="text-[#6C3AE8] group-hover:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 mb-1">{v.title}</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed">{v.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Tech stack pill cloud */}
            <div className="p-6 rounded-2xl border border-zinc-100 bg-zinc-50">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-3">
                Tech we build with
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Claude AI", "React Native", "Next.js", "TypeScript",
                  "Supabase", "Expo", "Tailwind CSS", "Node.js",
                  "PostgreSQL", "Vercel",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 bg-white rounded-lg border border-zinc-200 text-zinc-600 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
