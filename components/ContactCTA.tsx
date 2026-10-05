"use client";

import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

export default function ContactCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message: "Contact request from CTA", name: "" }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative bg-[#0F172A] py-24 overflow-hidden">
      {/* Wave gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-[#1E1B4B]/60 to-transparent" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#4F46E5]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#7C3AED]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase mb-4">Let's Build What's Next</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-4">
              You don't need the tech answer.<br />
              <span className="text-indigo-400">Just the problem.</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Tell us what's not working and we'll show you what's possible.
            </p>
          </div>

          {/* Right — email form */}
          <div>
            {status === "sent" ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <p className="text-white font-bold text-xl mb-2">We'll be in touch soon.</p>
                <p className="text-slate-400">No obligation. Just a conversation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="Your work email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#4F46E5] text-white font-semibold text-sm hover:bg-[#3730A3] transition-colors whitespace-nowrap disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending…" : "Get in touch"}
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
                {status === "error" && (
                  <p className="text-rose-400 text-sm">Something went wrong — email us at hello@anuqtech.com</p>
                )}
                <p className="text-slate-500 text-xs">No obligation. Just a conversation.</p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
