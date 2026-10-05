"use client";

import { ArrowRight, Play, FileText, Link2, Clock, Lightbulb } from "lucide-react";
import Image from "next/image";

const problems = [
  { icon: FileText,  label: "Manual work",        color: "bg-rose-50 text-rose-500",       line: "#F43F5E" },
  { icon: Link2,     label: "Disconnected tools",  color: "bg-amber-50 text-amber-500",     line: "#F59E0B" },
  { icon: Clock,     label: "Slow decisions",      color: "bg-sky-50 text-sky-500",         line: "#0EA5E9" },
  { icon: Lightbulb, label: "New ideas",           color: "bg-emerald-50 text-emerald-600", line: "#10B981" },
];

const serviceTags = [
  { label: "Ideas",             href: "/ideas" },
  { label: "Automation",        href: "/automation" },
  { label: "AI",                href: "/ai" },
  { label: "Digital Solutions", href: "/digital-solutions" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#F0F4FF] to-transparent" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-[#EEF2FF] blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            {/* Service tags — each links to its own page */}
            <div className="flex flex-wrap gap-2 mb-8">
              {serviceTags.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-[11px] font-bold tracking-widest text-slate-500 hover:text-[#4F46E5] hover:border-[#4F46E5] border border-slate-200 rounded-full px-3 py-1 uppercase transition-colors"
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
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#4F46E5] text-white font-semibold hover:bg-[#3730A3] transition-colors shadow-lg shadow-indigo-200"
              >
                Tell us what's not working
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#what-we-do"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-slate-700 font-semibold hover:text-[#4F46E5] transition-colors"
              >
                <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center">
                  <Play size={11} fill="currentColor" />
                </span>
                See what's possible
              </a>
            </div>
          </div>

          {/* Right — illustration */}
          <div className="hidden lg:flex flex-col items-center gap-0">
            {/* Problem cards */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {problems.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl border border-slate-200 shadow-md px-4 py-4 flex items-center gap-3"
                >
                  <span className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                    <Icon size={19} />
                  </span>
                  <span className="text-sm font-bold text-slate-800">{label}</span>
                </div>
              ))}
            </div>

            {/* Converging arrows */}
            <svg viewBox="0 0 320 72" className="w-72" fill="none">
              <line x1="60"  y1="0" x2="160" y2="58" stroke="#F43F5E" strokeWidth="1.8" strokeDasharray="5 4" />
              <line x1="120" y1="0" x2="160" y2="58" stroke="#F59E0B" strokeWidth="1.8" strokeDasharray="5 4" />
              <line x1="200" y1="0" x2="160" y2="58" stroke="#0EA5E9" strokeWidth="1.8" strokeDasharray="5 4" />
              <line x1="260" y1="0" x2="160" y2="58" stroke="#10B981" strokeWidth="1.8" strokeDasharray="5 4" />
              <polygon points="153,58 167,58 160,72" fill="#4F46E5" />
            </svg>

            {/* ANU-Q solution card */}
            <div className="bg-white rounded-2xl border border-indigo-100 shadow-xl px-10 py-8 flex flex-col items-center gap-4 w-full max-w-xs">
              <Image
                src="/logo-icon.webp"
                alt="ANU-Q Technologies"
                width={96}
                height={96}
                className="w-24 h-24 object-contain"
              />
              <div className="text-center">
                <p className="font-black text-base tracking-widest text-[#0F172A] uppercase">ANU-Q Technologies</p>
                <p className="text-slate-500 text-sm mt-1">A simpler, smarter way forward.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
