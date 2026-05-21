import { ExternalLink, Mail } from "lucide-react";

const footerLinks = {
  Products: [
    { label: "AnuQ Vastu", href: "#products" },
    { label: "SkinSense", href: "#products" },
  ],
  Services: [
    { label: "AI Agent Development", href: "#services" },
    { label: "Process Automation", href: "#services" },
    { label: "AI Consulting", href: "#services" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C3AE8] to-[#F7931E] flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <span className="font-bold text-lg text-white">
                AnuQ<span className="text-[#9B6DFF]">Tech</span>
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
              Building AI-powered products and automation solutions for the modern world. Registered OPC in India.
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
                    className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#6C3AE8] transition-all"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                {group}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} AnuQ Technologies OPC Pvt Ltd. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Crafted with ♥ in India · Powered by Claude AI
          </p>
        </div>
      </div>
    </footer>
  );
}
