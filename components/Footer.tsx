import { ExternalLink, Mail } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Products: [
    { label: "AnuQ Vastu", href: "#proof" },
    { label: "SkinSense", href: "#capabilities" },
  ],
  Services: [
    { label: "AI Automation", href: "#capabilities" },
    { label: "Product Builds", href: "#capabilities" },
    { label: "AI Strategy", href: "#capabilities" },
  ],
  Company: [
    { label: "How We Work", href: "#process" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <Image
              src="/logo.png"
              alt="Anu-Q Technologies"
              width={160}
              height={44}
              className="h-10 w-auto object-contain brightness-0 invert opacity-90"
            />
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
              AI products and automation for complex, fragmented problems. Registered OPC, India.
            </p>
            <div className="flex gap-3">
              {[
                { icon: ExternalLink, href: "https://twitter.com/anuqtech", label: "X" },
                { icon: ExternalLink, href: "https://linkedin.com/company/anuqtech", label: "LinkedIn" },
                { icon: Mail, href: "mailto:hello@anuqtech.com", label: "Email" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#1D4ED8] transition-all"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">{group}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} AnuQ Technologies OPC Pvt Ltd. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">Crafted in India · Powered by Claude AI</p>
        </div>
      </div>
    </footer>
  );
}
