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
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16">

      {/* ── Pastel wave background — right half only ── */}
      <div className="absolute inset-y-0 right-0 w-[58%] pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 600 800"
          preserveAspectRatio="xMinYMid slice"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.65" />
            </linearGradient>
            <linearGradient id="ind" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#A5B4FC" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#818CF8" stopOpacity="0.65" />
            </linearGradient>
            <linearGradient id="vio" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="pnk" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FBCFE8" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#F9A8D4" stopOpacity="0.65" />
            </linearGradient>
          </defs>

          {/* Sky-blue band — top */}
          <path d="M-60,160 C80,80 220,200 380,130 C470,95 540,120 640,80 L640,200 C540,240 470,215 380,250 C220,320 80,200 -60,280 Z"
            fill="url(#sky)" />

          {/* Indigo band */}
          <path d="M-60,300 C80,220 220,340 380,270 C470,235 540,260 640,220 L640,340 C540,380 470,355 380,390 C220,460 80,340 -60,420 Z"
            fill="url(#ind)" />

          {/* Violet band */}
          <path d="M-60,440 C80,360 220,480 380,410 C470,375 540,400 640,360 L640,480 C540,520 470,495 380,530 C220,600 80,480 -60,560 Z"
            fill="url(#vio)" />

          {/* Pink band — bottom (fills to edge) */}
          <path d="M-60,560 C80,480 220,600 380,530 C470,495 540,520 640,480 L640,800 L-60,800 Z"
            fill="url(#pnk)" />
        </svg>

        {/* Left-edge white fade so waves don't bleed into text */}
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white to-transparent" />
      </div>

      {/* Very light base tint behind text column */}
      <div className="absolute inset-y-0 left-0 w-[50%] bg-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div>
            <div className="flex flex-wrap gap-2 mb-8">
              {serviceTags.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-[11px] font-bold tracking-widest text-slate-500 hover:text-[#4F46E5] hover:border-[#4F46E5] border border-slate-300 rounded-full px-3 py-1 uppercase transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>

            <h1 className="text-[clamp(2.4rem,4.5vw,4rem)] font-black leading-[1.06] tracking-tight text-[#0F172A] mb-6">
              Technology that solves<br />
              what's{" "}
              <span className="text-[#4F46E5]">slowing you down.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-md mb-10">
              AI, automation and digital solutions — made simple.
              You tell us what's not working. We'll take care of the rest.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-[#4F46E5] text-white font-semibold hover:bg-[#3730A3] transition-colors shadow-lg shadow-indigo-200"
              >
                Tell us what's not working
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#what-we-do"
                className="inline-flex items-center gap-2.5 px-5 py-4 text-slate-700 font-semibold hover:text-[#4F46E5] transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-white shadow border border-slate-100 flex items-center justify-center">
                  <Play size={10} fill="#4F46E5" className="ml-0.5" />
                </span>
                See what's possible
              </a>
            </div>
          </div>

          {/* Right — illustration */}
          <div className="hidden lg:flex flex-col items-center">
            {/* Problem cards */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {problems.map(({ icon: Icon, label, iconBg }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl border border-slate-100 shadow-md px-4 py-5 flex flex-col items-center gap-2.5 text-center"
                >
                  <span className={`w-12 h-12 rounded-2xl flex items-center justify-center ${iconBg}`}>
                    <Icon size={22} />
                  </span>
                  <span className="text-sm font-bold text-slate-800 leading-tight">{label}</span>
                </div>
              ))}
            </div>

            {/* Converging arrows */}
            <svg viewBox="0 0 320 72" className="w-72" fill="none">
              <line x1="60"  y1="0" x2="160" y2="56" stroke="#F43F5E" strokeWidth="2" strokeDasharray="5 4" />
              <line x1="120" y1="0" x2="160" y2="56" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5 4" />
              <line x1="200" y1="0" x2="160" y2="56" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="5 4" />
              <line x1="260" y1="0" x2="160" y2="56" stroke="#10B981" strokeWidth="2" strokeDasharray="5 4" />
              <polygon points="154,56 166,56 160,70" fill="#4F46E5" />
            </svg>

            {/* ANU-Q solution card */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-xl px-10 py-8 flex flex-col items-center gap-4 w-full max-w-xs">
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

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-14 fill-[#EEF2FF]">
          <path d="M0,30 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
