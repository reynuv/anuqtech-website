import { ArrowRight, Brain, MessageSquare, Eye, Cpu } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const offerings = [
  { icon: Brain, title: "AI-powered products", desc: "We build AI into your product — recommendations, predictions, and intelligence that learns from your data." },
  { icon: MessageSquare, title: "Conversational AI", desc: "Chatbots and assistants that handle customer queries, internal support, and complex workflows." },
  { icon: Eye, title: "Document & image intelligence", desc: "Automate extraction, classification, and analysis from PDFs, images, and unstructured data." },
  { icon: Cpu, title: "Custom AI pipelines", desc: "End-to-end AI workflows tailored to your specific domain — not off-the-shelf, but built for you." },
];

export default function AIPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#4F46E5] mb-10 transition-colors">
              ← Back to home
            </Link>
            <p className="text-xs font-bold tracking-[0.2em] text-[#4F46E5] uppercase mb-4">AI</p>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0F172A] leading-tight mb-6 max-w-2xl">
              AI that works for your specific problem.
            </h1>
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed mb-12">
              Not every business needs the same AI. We build and integrate AI solutions that fit your context — not generic tools bolted on.
            </p>
            <a href="/#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#4F46E5] text-white font-semibold hover:bg-[#3730A3] transition-colors">
              Explore AI for your business <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <section className="bg-[#F8FAFF] py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid sm:grid-cols-2 gap-6">
              {offerings.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                  <span className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
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
