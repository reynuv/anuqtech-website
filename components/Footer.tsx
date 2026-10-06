import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer" id="about">
      <div className="container footer-grid">
        <a className="brand footer-brand" href="#top" aria-label="ANU-Q Technologies home">
          <Image src="/logo-icon.webp" alt="" width={46} height={46} />
          <span className="brand-copy">
            <strong>ANU-Q</strong>
            <small>TECHNOLOGIES</small>
          </span>
        </a>

        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#what-we-do">What We Do</a>
          <a href="#work">Our Work</a>
          <a href="#about">About</a>
          <a href="mailto:hello@anuqtech.com">Contact</a>
        </nav>

        <div className="socials" aria-label="Social links">
          <a href="https://linkedin.com/company/anuqtech" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
          <a href="https://twitter.com/anuqtech" target="_blank" rel="noreferrer" aria-label="X / Twitter">𝕏</a>
        </div>
      </div>

      <div className="container legal-row">
        <small>© {new Date().getFullYear()} ANU-Q TECHNOLOGIES (OPC) PRIVATE LIMITED · CIN: U62099MH2026OPC472555 · All rights reserved.</small>
        <small>Innovative ideas. Practical solutions. Real impact.</small>
      </div>
    </footer>
  );
}
