"use client";

import { ArrowRight, Play, FileText, Link2, Clock, Lightbulb } from "lucide-react";
import Image from "next/image";

const problems = [
  { icon: FileText,  label: "Manual work",       iconColor: "text-rose-400",    iconBg: "bg-rose-50",    lineColor: "#F43F5E" },
  { icon: Link2,     label: "Disconnected tools", iconColor: "text-blue-400",    iconBg: "bg-blue-50",    lineColor: "#3B82F6" },
  { icon: Clock,     label: "Slow decisions",     iconColor: "text-amber-400",   iconBg: "bg-amber-50",   lineColor: "#F59E0B" },
  { icon: Lightbulb, label: "New ideas",          iconColor: "text-violet-400",  iconBg: "bg-violet-50",  lineColor: "#8B5CF6" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-gradient-to-b from-[#F5F7FF] via-[#EEF1FF] to-[#E8EDFF] overflow-hidden pt-16">

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 w-full">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">

          {/* ── Left: copy ── */}
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase mb-7">
              Ideas&nbsp;&nbsp;|&nbsp;&nbsp;Automation&nbsp;&nbsp;|&nbsp;&nbsp;AI&nbsp;&nbsp;|&nbsp;&nbsp;Digital Solutions
            </p>

            <h1 className="text-[clamp(2.4rem,4.5vw,4rem)] font-black leading-[1.07] tracking-tight text-[#0F172A] mb-5">
              Technology that solves what's<br />
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                slowing you down.
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              AI, automation and digital solutions — made simple.<br />
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
              <a href="#what-we-do" className="inline-flex items-center gap-3 px-4 py-4 text-slate-700 font-semibold hover:text-[#4F46E5] transition-colors">
                <span className="w-8 h-8 rounded-full bg-white shadow border border-slate-100 flex items-center justify-center">
                  <Play size={10} fill="#4F46E5" className="ml-0.5" />
                </span>
                See what's possible
              </a>
            </div>
          </div>

          {/* ── Right: diagram ── */}
          <div className="hidden lg:flex flex-col items-center gap-0">

            {/* 4 problem cards — horizontal row */}
            <div className="grid grid-cols-4 gap-3 w-full">
              {problems.map(({ icon: Icon, label, iconColor, iconBg }) => (
                <div
                  key={label}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white shadow-md p-4 flex flex-col items-center gap-3 text-center"
                >
                  <span className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center`}>
                    <Icon size={22} className={iconColor} />
                  </span>
                  <span className="text-xs font-semibold text-slate-700 leading-tight">{label}</span>
                </div>
              ))}
            </div>

            {/* Curved SVG connecting lines */}
            <svg viewBox="0 0 480 110" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {problems.map(({ lineColor }, i) => (
                  <marker key={i} id={`arr${i}`} markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
                    <path d="M0,1 L3.5,6 L7,1" stroke={lineColor} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </marker>
                ))}
              </defs>
              {/* Curved paths: each card center x = 55, 175, 305, 425 → converge to 240, 100 */}
              <path d="M55,0 C55,55 240,55 240,100"   stroke={problems[0].lineColor} strokeWidth="2" markerEnd="url(#arr0)" />
              <path d="M175,0 C175,50 240,50 240,100"  stroke={problems[1].lineColor} strokeWidth="2" markerEnd="url(#arr1)" />
              <path d="M305,0 C305,50 240,50 240,100"  stroke={problems[2].lineColor} strokeWidth="2" markerEnd="url(#arr2)" />
              <path d="M425,0 C425,55 240,55 240,100"  stroke={problems[3].lineColor} strokeWidth="2" markerEnd="url(#arr3)" />
            </svg>

            {/* ANU-Q solution card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-white shadow-xl px-10 py-7 flex flex-col items-center gap-3 w-4/5">
              <Image
                src="/logo-icon.webp"
                alt="ANU-Q Technologies"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
              <div className="text-center">
                <p className="font-black text-lg tracking-widest text-[#0F172A] uppercase leading-tight">ANU-Q</p>
                <p className="text-xs font-semibold tracking-[0.3em] text-slate-400 uppercase mb-1">Technologies</p>
                <p className="text-slate-500 text-sm">A simpler, smarter way forward.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom wave decoration ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-24" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveBlue" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0" />
              <stop offset="40%" stopColor="#818CF8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="wavePink" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#F9A8D4" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#C084FC" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Blue/indigo wave — right side */}
          <path d="M600,80 C800,20 1100,100 1440,40 L1440,120 L600,120 Z" fill="url(#waveBlue)" />
          {/* Pink/violet wave — left side */}
          <path d="M0,90 C200,30 500,110 840,60 L840,120 L0,120 Z" fill="url(#wavePink)" />
        </svg>
      </div>
    </section>
  );
}
