"use client";

import { ArrowRight, Sparkles, Zap, Brain } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient grid-pattern overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#6C3AE8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#F7931E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6C3AE8]/10 border border-[#6C3AE8]/20 text-[#6C3AE8] text-sm font-medium">
              <Sparkles size={14} />
              AI-First Technology Company · India
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none text-zinc-900">
                Building the
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none gradient-text">
                Intelligent
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none text-zinc-900">
                Future.
              </h1>
            </div>

            <p className="text-xl text-zinc-500 leading-relaxed max-w-lg">
              AnuQ Technologies crafts AI-powered products and automation
              solutions that solve real problems — from ancient wisdom to modern
              skincare.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6C3AE8] text-white font-semibold hover:bg-[#4F1FD4] transition-all hover:scale-105 shadow-lg shadow-[#6C3AE8]/25"
              >
                Explore Products <ArrowRight size={16} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-zinc-200 text-zinc-700 font-semibold hover:border-[#6C3AE8] hover:text-[#6C3AE8] transition-all"
              >
                Our Services
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              {[
                { value: "2+", label: "Products Launched" },
                { value: "AI", label: "First Approach" },
                { value: "OPC", label: "Registered in India" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-zinc-900">{stat.value}</div>
                  <div className="text-xs text-zinc-400 font-medium mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual card cluster */}
          <div className="relative hidden lg:flex items-center justify-center h-[520px]">
            {/* Center card */}
            <div className="absolute w-72 h-40 bg-white rounded-2xl shadow-2xl border border-zinc-100 flex items-center gap-5 px-6 animate-float z-10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6C3AE8] to-[#9B6DFF] flex items-center justify-center flex-shrink-0">
                <Brain className="text-white" size={28} />
              </div>
              <div>
                <div className="font-bold text-zinc-900">AI Analysis</div>
                <div className="text-sm text-zinc-400">Powered by Claude Vision</div>
                <div className="mt-2 h-1.5 w-32 bg-zinc-100 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-[#6C3AE8] to-[#F7931E] rounded-full" />
                </div>
              </div>
            </div>

            {/* Top-left card */}
            <div className="absolute top-10 left-4 w-52 h-28 bg-white rounded-2xl shadow-xl border border-zinc-100 p-4 flex flex-col gap-2"
              style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 text-sm">🏠</span>
                </div>
                <div className="text-xs font-semibold text-zinc-700">AnuQ Vastu</div>
              </div>
              <div className="text-xs text-zinc-400">Vastu Score</div>
              <div className="flex items-center gap-2">
                <div className="h-2 flex-1 bg-zinc-100 rounded-full overflow-hidden">
                  <div className="h-full w-[78%] bg-gradient-to-r from-orange-400 to-orange-500 rounded-full" />
                </div>
                <span className="text-xs font-bold text-orange-500">78%</span>
              </div>
            </div>

            {/* Bottom-right card */}
            <div className="absolute bottom-16 right-4 w-52 h-28 bg-white rounded-2xl shadow-xl border border-zinc-100 p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center">
                  <span className="text-pink-600 text-sm">✨</span>
                </div>
                <div className="text-xs font-semibold text-zinc-700">SkinSense</div>
              </div>
              <div className="text-xs text-zinc-400">Skin Analysis</div>
              <div className="flex gap-1">
                {["Hydration", "SPF"].map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 bg-pink-50 text-pink-600 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Top-right badge */}
            <div className="absolute top-8 right-8 flex items-center gap-2 px-3 py-2 bg-green-50 rounded-xl border border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-green-700">Live in Production</span>
            </div>

            {/* Floating zap */}
            <div className="absolute bottom-8 left-8 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F7931E] to-[#FF6B35] flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "2s" }}>
              <Zap className="text-white" size={22} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400">
        <span className="text-xs font-medium">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border-2 border-zinc-200 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#6C3AE8] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
