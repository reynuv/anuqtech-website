"use client";

import { ArrowRight, Smartphone, Star, Lock } from "lucide-react";

const products = [
  {
    id: "vastu",
    emoji: "🏠",
    badge: "Live",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
    dotColor: "bg-green-500",
    name: "AnuQ Vastu",
    tagline: "Ancient Wisdom. AI Precision.",
    description:
      "India's first AI-powered Vastu Shastra app for apartment dwellers. Upload your floor plan, set North via compass, and get a room-by-room Vastu score, color recommendations, and remedy guidance — in minutes, not days.",
    gradient: "from-orange-500 via-amber-400 to-yellow-300",
    cardBg: "bg-gradient-to-br from-orange-50 to-amber-50",
    border: "border-orange-100",
    accentColor: "text-orange-600",
    accentBg: "bg-orange-100",
    features: [
      "AI floor plan room detection",
      "16-Direction Shakti Grid mapping",
      "Room-by-room Vastu score",
      "Color & remedy recommendations",
      "Hindi + English support",
    ],
    platforms: ["iOS", "Android"],
    visual: {
      score: 78,
      rooms: ["Living Room", "Master Bedroom", "Kitchen"],
      scores: [85, 72, 68],
    },
  },
  {
    id: "skinsense",
    emoji: "✨",
    badge: "Coming Soon",
    badgeColor: "bg-pink-100 text-pink-700 border-pink-200",
    dotColor: "bg-pink-400",
    name: "SkinSense",
    tagline: "Your AI Skin Expert.",
    description:
      "An intelligent skincare companion that analyzes your skin type, detects concerns, and recommends personalized routines and products — powered by computer vision and dermatology knowledge.",
    gradient: "from-pink-500 via-rose-400 to-fuchsia-400",
    cardBg: "bg-gradient-to-br from-pink-50 to-rose-50",
    border: "border-pink-100",
    accentColor: "text-pink-600",
    accentBg: "bg-pink-100",
    features: [
      "Real-time skin analysis via camera",
      "Personalized routine builder",
      "Ingredient safety checker",
      "Progress tracker over time",
      "Dermatologist-reviewed advice",
    ],
    platforms: ["iOS", "Android"],
    visual: {
      concerns: ["Hydration", "SPF Protection", "Anti-Aging"],
      tags: ["Sensitive", "Combination"],
    },
  },
];

function VastuVisual() {
  const rooms = [
    { name: "Living Room", score: 85, color: "bg-green-500" },
    { name: "Master Bedroom", score: 72, color: "bg-amber-500" },
    { name: "Kitchen", score: 68, color: "bg-orange-500" },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Vastu Score</span>
        <span className="text-2xl font-black text-orange-600">78<span className="text-sm font-medium text-zinc-400">/100</span></span>
      </div>
      {rooms.map((r) => (
        <div key={r.name} className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-zinc-600 font-medium">{r.name}</span>
            <span className="font-bold text-zinc-800">{r.score}</span>
          </div>
          <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
            <div
              className={`h-full ${r.color} rounded-full transition-all`}
              style={{ width: `${r.score}%` }}
            />
          </div>
        </div>
      ))}
      <div className="mt-4 p-3 bg-orange-100 rounded-xl">
        <p className="text-xs text-orange-800 font-medium">💡 Top Remedy: Place a Tulsi plant in NE corner for positive energy flow.</p>
      </div>
    </div>
  );
}

function SkinSenseVisual() {
  const concerns = [
    { label: "Hydration", value: 62, color: "bg-blue-400" },
    { label: "SPF Protection", value: 45, color: "bg-pink-400" },
    { label: "Anti-Aging", value: 80, color: "bg-purple-400" },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Skin Analysis</span>
        <div className="flex gap-1">
          {["Sensitive", "Combo"].map((t) => (
            <span key={t} className="text-[10px] px-2 py-0.5 bg-pink-100 text-pink-600 rounded-full font-medium">{t}</span>
          ))}
        </div>
      </div>
      {concerns.map((c) => (
        <div key={c.label} className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-zinc-600 font-medium">{c.label}</span>
            <span className="font-bold text-zinc-800">{c.value}%</span>
          </div>
          <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
            <div className={`h-full ${c.color} rounded-full`} style={{ width: `${c.value}%` }} />
          </div>
        </div>
      ))}
      <div className="mt-4 p-3 bg-pink-100 rounded-xl">
        <p className="text-xs text-pink-800 font-medium">✨ Recommendation: Use hyaluronic acid serum + SPF 50 daily routine.</p>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F7931E]/10 border border-[#F7931E]/20 text-[#F7931E] text-sm font-medium mb-4">
            <Smartphone size={14} />
            Our Products
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight mb-4">
            AI products built for{" "}
            <span className="gradient-text">real lives</span>
          </h2>
          <p className="text-lg text-zinc-500">
            Each product solves a deeply human problem with the precision of modern AI.
          </p>
        </div>

        {/* Products */}
        <div className="space-y-12">
          {products.map((product, i) => (
            <div
              key={product.id}
              className={`rounded-3xl border ${product.border} ${product.cardBg} overflow-hidden`}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                {/* Info side */}
                <div className={`p-8 sm:p-12 flex flex-col justify-center ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  {/* Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{product.emoji}</span>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${product.badgeColor}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${product.dotColor}`} />
                      {product.badge}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-zinc-900 mb-1">
                    {product.name}
                  </h3>
                  <p className={`text-lg font-semibold ${product.accentColor} mb-4`}>
                    {product.tagline}
                  </p>
                  <p className="text-zinc-600 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-zinc-600">
                        <Star size={14} className={product.accentColor} fill="currentColor" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Platform + CTA */}
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex gap-2">
                      {product.platforms.map((p) => (
                        <span key={p} className={`text-xs px-3 py-1 rounded-lg font-medium ${product.accentBg} ${product.accentColor}`}>
                          {p}
                        </span>
                      ))}
                    </div>
                    {product.badge === "Live" ? (
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-[#6C3AE8] transition-colors"
                      >
                        Learn more <ArrowRight size={14} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400">
                        <Lock size={14} /> Join waitlist
                      </span>
                    )}
                  </div>
                </div>

                {/* Visual side */}
                <div className={`p-8 sm:p-12 flex items-center justify-center ${i % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-zinc-100 p-6">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-50">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center text-sm`}>
                        {product.emoji}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-zinc-900">{product.name}</div>
                        <div className="text-xs text-zinc-400">AI Analysis Report</div>
                      </div>
                    </div>
                    {product.id === "vastu" ? <VastuVisual /> : <SkinSenseVisual />}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More coming */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border-2 border-dashed border-zinc-200 text-zinc-400">
            <span className="text-2xl">🚀</span>
            <span className="font-medium">More products in the pipeline — stay tuned.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
