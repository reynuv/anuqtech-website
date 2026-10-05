import { ArrowRight, Globe, Smartphone, Database, Shield } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const offerings = [
  { icon: Globe, title: "Web applications", desc: "Full-stack web apps built for scale — from internal tools to customer-facing platforms." },
  { icon: Smartphone, title: "Mobile apps", desc: "iOS and Android apps that your customers will actually use — clean, fast, and reliable." },
  { icon: Database, title: "System integrations", desc: "Connect your CRM, ERP, payment systems, and third-party tools into one coherent ecosystem." },
  { icon: Shield, title: "Secure & compliant builds", desc: "Built with security and compliance baked in — not bolted on at the end." },
];

export default function DigitalSolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#4F46E5] mb-10 transition-colors">
              ← Back to home
            </Link>
            <p className="text-xs font-bold tracking-[0.2em] text-[#4F46E5] uppercase mb-4">Digital Solutions</p>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0F172A] leading-tight mb-6 max-w-2xl">
              Built for your business. End to end.
            </h1>
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed mb-12">
              Web, mobile, and systems that work the way your business does — not the other way around.
            </p>
            <a href="/#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#4F46E5] text-white font-semibold hover:bg-[#3730A3] transition-colors">
              Build your solution <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <section className="bg-[#F8FAFF] py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid sm:grid-cols-2 gap-6">
              {offerings.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                  <span className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-bold text-[#0F172A] text-lg mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
