"use client";

import { ArrowRight, Play, FileText, Link2, Clock, Lightbulb } from "lucide-react";
import Image from "next/image";

const problems = [
  { icon: FileText,  label: "Manual work",        iconBg: "bg-rose-100 text-rose-500",     line: "#F43F5E" },
  { icon: Link2,     label: "Disconnected tools",  iconBg: "bg-amber-100 text-amber-500",   line: "#F59E0B" },
  { icon: Clock,     label: "Slow decisions",      iconBg: "bg-sky-100 text-sky-500",       line: "#0EA5E9" },
  { icon: Lightbulb, label: "New ideas",           iconBg: "bg-emerald-100 text-emerald-600", line: "#10B981" },
];

const serviceTags = [
  { label: "Ideas",             href: "/ideas" },
  { label: "Automation",        href: "/automation" },
  { label: "AI",                href: "/ai" },
  { label: "Digital Solutions", href: "/digital-solutions" },
];

export default function Hero() {
  return (
    <section className="relative flex items-center bg-white overflow-hidden pt-16 min-h-screen">
      {/* Rich layered background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F5F3FF] to-[#EEF2FF]" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-indigo-100/60 to-violet-100/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-sky-100/40 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div className="flex flex-wrap gap-2 mb-8">
              {serviceTags.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-[11px] font-bold tracking-widest text-slate-500 hover:text-[#4F46E5] hover:border-[#4F46E5] border border-slate-300 rounded-full px-3 py-1 uppercase transition-colors bg-white/70 backdrop-blur-sm"
                >
                  {label}
                </a>
              ))}
            </div>

            <h1 className="text-[clamp(2.6rem,5vw,4.2rem)] font-black leading-[1.06] tracking-tight text-[#0F172A] mb-6">
              Technology that solves<br />
              what's{" "}
              <span className="text-[#4F46E5]">slowing you down.</span>
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed max-w-lg mb-10">
              AI, automation and digital solutions — made simple.<br />
              You tell us what's not working. We'll take care of the rest.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#4F46E5] text-white font-semibold hover:bg-[#3730A3] transition-colors shadow-xl shadow-indigo-300/40"
              >
                Tell us what's not working
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#what-we-do"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-slate-700 font-semibold hover:text-[#4F46E5] transition-colors"
              >
                <span className="w-7 h-7 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center">
                  <Play size={10} fill="currentColor" className="text-[#4F46E5] ml-0.5" />
                </span>
                See what's possible
              </a>
            </div>
          </div>

          {/* Right — illustration panel */}
          <div className="hidden lg:block">
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl border border-white shadow-2xl shadow-indigo-100/50 p-8">
              {/* Subtle grid background on panel */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(rgba(79,70,229,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.04) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }} />

              {/* Problem cards */}
              <div className="relative grid grid-cols-2 gap-3 mb-0">
                {problems.map(({ icon: Icon, label, iconBg }) => (
                  <div
                    key={label}
                    className="bg-white rounded-2xl border border-slate-100 shadow-md px-4 py-4 flex items-center gap-3"
                  >
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}>
                      <Icon size={19} />
                    </span>
                    <span className="text-sm font-bold text-slate-800">{label}</span>
                  </div>
                ))}
              </div>

              {/* Converging SVG arrows */}
              <svg viewBox="0 0 320 72" className="w-full -my-1" fill="none">
                <line x1="60"  y1="0" x2="160" y2="58" stroke="#F43F5E" strokeWidth="1.8" strokeDasharray="5 4" />
                <line x1="120" y1="0" x2="160" y2="58" stroke="#F59E0B" strokeWidth="1.8" strokeDasharray="5 4" />
                <line x1="200" y1="0" x2="160" y2="58" stroke="#0EA5E9" strokeWidth="1.8" strokeDasharray="5 4" />
                <line x1="260" y1="0" x2="160" y2="58" stroke="#10B981" strokeWidth="1.8" strokeDasharray="5 4" />
                <polygon points="153,58 167,58 160,72" fill="#4F46E5" />
              </svg>

              {/* ANU-Q solution card */}
              <div className="relative bg-gradient-to-b from-indigo-50 to-white rounded-2xl border border-indigo-100 shadow-lg px-10 py-7 flex flex-col items-center gap-4">
                <Image
                  src="/logo-icon.webp"
                  alt="ANU-Q Technologies"
                  width={96}
                  height={96}
                  className="w-24 h-24 object-contain drop-shadow-md"
                />
                <div className="text-center">
                  <p className="font-black text-base tracking-widest text-[#0F172A] uppercase">ANU-Q Technologies</p>
                  <p className="text-slate-500 text-sm mt-1">A simpler, smarter way forward.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Wave transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-14 fill-[#F0F4FF]">
          <path d="M0,40 C360,0 1080,80 1440,20 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
