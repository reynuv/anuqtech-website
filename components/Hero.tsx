"use client";

import { ArrowRight, Play, FileText, Link2, Clock, Lightbulb } from "lucide-react";
import Image from "next/image";

const problems = [
  { icon: FileText,  label: "Manual work",        iconBg: "bg-rose-100 text-rose-500",       line: "#F43F5E" },
  { icon: Link2,     label: "Disconnected tools",  iconBg: "bg-amber-100 text-amber-500",     line: "#F59E0B" },
  { icon: Clock,     label: "Slow decisions",      iconBg: "bg-sky-100 text-sky-500",         line: "#0EA5E9" },
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
    <section className="relative flex items-center bg-[#F5F7FF] overflow-hidden pt-16 min-h-screen">

      {/* ── Wave background SVG ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Base soft gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#EEF2FF] to-[#F5F3FF]" />

        {/* Flowing wave ribbons — right half */}
        <svg
          className="absolute right-0 bottom-0 w-[65%] h-[90%]"
          viewBox="0 0 700 600"
          preserveAspectRatio="xMaxYMax meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wg1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="wg2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#818CF8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="wg3" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="wg4" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F9A8D4" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.75" />
            </linearGradient>
            <filter id="blur">
              <feGaussianBlur stdDeviation="2" />
            </filter>
          </defs>

          {/* Wave 1 — pink ribbon (widest, back) */}
          <path
            d="M-50,420 C80,340 260,460 420,380 C520,330 620,360 750,300 L750,420 C620,480 520,450 420,500 C260,580 80,460 -50,540 Z"
            fill="url(#wg4)"
          />

          {/* Wave 2 — purple ribbon */}
          <path
            d="M-50,320 C80,240 260,360 420,280 C520,230 620,260 750,200 L750,320 C620,380 520,350 420,400 C260,480 80,360 -50,440 Z"
            fill="url(#wg3)"
          />

          {/* Wave 3 — indigo ribbon */}
          <path
            d="M-50,220 C80,140 260,260 420,180 C520,130 620,160 750,100 L750,220 C620,280 520,250 420,300 C260,380 80,260 -50,340 Z"
            fill="url(#wg2)"
          />

          {/* Wave 4 — sky blue ribbon (front, narrowest) */}
          <path
            d="M-50,120 C80,50 260,160 420,80 C520,35 620,60 750,0 L750,100 C620,160 520,135 420,180 C260,260 80,150 -50,220 Z"
            fill="url(#wg1)"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <div className="flex flex-wrap gap-2 mb-8">
              {serviceTags.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-[11px] font-bold tracking-widest text-slate-500 hover:text-[#4F46E5] hover:border-[#4F46E5] border border-slate-300 rounded-full px-3 py-1 uppercase transition-colors bg-white/80"
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
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-[#4F46E5] text-white font-semibold hover:bg-[#3730A3] transition-colors shadow-xl shadow-indigo-300/40"
              >
                Tell us what's not working
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#what-we-do"
                className="inline-flex items-center gap-2.5 px-6 py-4 text-slate-700 font-semibold hover:text-[#4F46E5] transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-white shadow border border-slate-100 flex items-center justify-center">
                  <Play size={11} fill="#4F46E5" className="text-[#4F46E5] ml-0.5" />
                </span>
                See what's possible
              </a>
            </div>
          </div>

          {/* Right — illustration (floats over waves) */}
          <div className="hidden lg:flex flex-col items-center gap-0 relative">
            {/* Problem cards */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-0">
              {problems.map(({ icon: Icon, label, iconBg }) => (
                <div
                  key={label}
                  className="bg-white/90 backdrop-blur-md rounded-2xl border border-white shadow-lg px-4 py-5 flex flex-col items-center gap-2 text-center"
                >
                  <span className={`w-11 h-11 rounded-2xl flex items-center justify-center ${iconBg}`}>
                    <Icon size={22} />
                  </span>
                  <span className="text-sm font-bold text-slate-800 leading-tight">{label}</span>
                </div>
              ))}
            </div>

            {/* Converging arrows */}
            <svg viewBox="0 0 320 72" className="w-72" fill="none">
              <line x1="60"  y1="0" x2="160" y2="58" stroke="#F43F5E" strokeWidth="2" strokeDasharray="5 4" />
              <line x1="120" y1="0" x2="160" y2="58" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5 4" />
              <line x1="200" y1="0" x2="160" y2="58" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="5 4" />
              <line x1="260" y1="0" x2="160" y2="58" stroke="#10B981" strokeWidth="2" strokeDasharray="5 4" />
              <polygon points="153,58 167,58 160,72" fill="#4F46E5" />
            </svg>

            {/* ANU-Q solution card */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-white shadow-xl px-10 py-8 flex flex-col items-center gap-4 w-full max-w-xs">
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

      {/* Bottom wave into next section */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-16 fill-[#EEF2FF]">
          <path d="M0,40 C360,0 1080,80 1440,20 L1440,70 L0,70 Z" />
        </svg>
      </div>
    </section>
  );
}
