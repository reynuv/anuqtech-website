"use client";

import { useState } from "react";
import { Mail, MapPin, ExternalLink, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#6C3AE8]/30 focus:border-[#6C3AE8] transition-all";

  return (
    <section id="contact" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6C3AE8]/10 border border-[#6C3AE8]/20 text-[#6C3AE8] text-sm font-medium mb-4">
            <Mail size={14} />
            Get in Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight mb-4">
            Let&apos;s build something{" "}
            <span className="gradient-text">remarkable.</span>
          </h2>
          <p className="text-lg text-zinc-500">
            Whether you have a product idea, need AI automation, or just want
            to explore what&apos;s possible — we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl border border-zinc-100 bg-white space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6C3AE8]/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[#6C3AE8]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-900">Email</div>
                  <a
                    href="mailto:hello@anuqtech.com"
                    className="text-sm text-zinc-500 hover:text-[#6C3AE8] transition-colors"
                  >
                    hello@anuqtech.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6C3AE8]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#6C3AE8]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-900">Location</div>
                  <div className="text-sm text-zinc-500">India · Remote-first</div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="p-6 rounded-2xl border border-zinc-100 bg-white">
              <p className="text-sm font-semibold text-zinc-900 mb-4">Follow along</p>
              <div className="flex gap-3">
                {[
                  { icon: ExternalLink, label: "X (Twitter)", href: "https://twitter.com/anuqtech" },
                  { icon: ExternalLink, label: "LinkedIn", href: "https://linkedin.com/company/anuqtech" },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-200 text-zinc-600 text-sm font-medium hover:border-[#6C3AE8] hover:text-[#6C3AE8] transition-all"
                    >
                      <Icon size={16} />
                      {s.label}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Response time */}
            <div className="p-4 rounded-2xl bg-[#6C3AE8]/5 border border-[#6C3AE8]/15">
              <div className="flex items-center gap-2 text-sm text-[#6C3AE8] font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Usually responds within 24 hours
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-8">
              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <CheckCircle size={48} className="text-green-500" />
                  <h3 className="text-xl font-bold text-zinc-900">Message sent!</h3>
                  <p className="text-zinc-500 text-sm">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-sm font-medium text-[#6C3AE8] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ravi Sharma"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="ravi@company.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      I&apos;m interested in...
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="ai-automation">AI Automation for my business</option>
                      <option value="vastu">AnuQ Vastu app</option>
                      <option value="skinsense">SkinSense app</option>
                      <option value="partnership">Partnership / Collaboration</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project, idea, or question..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-500">
                      Something went wrong. Please email us directly at hello@anuqtech.com
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#6C3AE8] text-white font-semibold hover:bg-[#4F1FD4] transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-[#6C3AE8]/20"
                  >
                    {status === "sending" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
