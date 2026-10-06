import Image from "next/image";

interface HeroProps {
  onContact: () => void;
}

export default function Hero({ onContact }: HeroProps) {
  function handleContactClick(e: React.MouseEvent) {
    e.preventDefault();
    onContact();
  }

  return (
    <section className="hero">
      <div className="hero-waves" aria-hidden="true"></div>
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">IDEAS &nbsp;|&nbsp; AUTOMATION &nbsp;|&nbsp; AI &nbsp;|&nbsp; DIGITAL SOLUTIONS</p>
          <h1>Technology that solves what&#39;s <span>slowing you down.</span></h1>
          <p className="hero-sub">
            AI, automation and digital solutions — made simple.<br />
            You tell us what&#39;s not working. We&#39;ll take care of the rest.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact" onClick={handleContactClick}>
              Tell us what&#39;s not working <span aria-hidden="true">→</span>
            </a>
            <a className="btn btn-ghost" href="#work">
              <span className="play" aria-hidden="true">▶</span> See what&#39;s possible
            </a>
          </div>
        </div>

        <div className="hero-diagram reveal" aria-label="ANU-Q turns common business challenges into practical solutions">
          <div className="challenge-row">
            <article className="challenge challenge-pink">
              <span className="icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M6 3h8l4 4v14H6z"/>
                  <path d="M14 3v5h5M9 12h6M9 16h6"/>
                </svg>
              </span>
              <strong>Manual<br />work</strong>
            </article>
            <article className="challenge challenge-blue">
              <span className="icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M10.5 13.5l3-3"/>
                  <path d="M7.5 16.5l-1 1a3 3 0 0 1-4.2-4.2l3-3a3 3 0 0 1 4.2 0"/>
                  <path d="M14.5 9.5a3 3 0 0 1 0-4.2l3-3a3 3 0 0 1 4.2 4.2l-1 1a3 3 0 0 1-4.2 0"/>
                </svg>
              </span>
              <strong>Disconnected<br />tools</strong>
            </article>
            <article className="challenge challenge-orange">
              <span className="icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8"/>
                  <path d="M12 7v5l3 2"/>
                </svg>
              </span>
              <strong>Slow<br />decisions</strong>
            </article>
            <article className="challenge challenge-purple">
              <span className="icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M9 18h6M10 21h4"/>
                  <path d="M8 15c-1.6-1.2-2.5-3-2.5-5a6.5 6.5 0 0 1 13 0c0 2-.9 3.8-2.5 5-.7.5-1 1.2-1 2H9c0-.8-.3-1.5-1-2z"/>
                </svg>
              </span>
              <strong>New<br />ideas</strong>
            </article>
          </div>

          <svg className="connector-map" viewBox="0 0 600 240" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="lineA" x1="0" x2="1">
                <stop offset="0" stopColor="#ff6da8"/>
                <stop offset="1" stopColor="#2d9bf0"/>
              </linearGradient>
              <linearGradient id="lineB" x1="0" x2="1">
                <stop offset="0" stopColor="#ffae3f"/>
                <stop offset="1" stopColor="#8a4dff"/>
              </linearGradient>
            </defs>
            <path d="M75 10 C75 115 220 80 300 188" stroke="#ff6da8" />
            <path d="M225 10 C225 105 270 105 300 188" stroke="#2b9cf1" />
            <path d="M375 10 C375 105 330 105 300 188" stroke="#ffae3f" />
            <path d="M525 10 C525 115 380 80 300 188" stroke="#9a55ff" />
            <path d="M300 175l-7-10M300 175l7-10" stroke="#2d9bf0" />
          </svg>

          <div className="solution-card">
            <Image src="/logo-icon.webp" alt="" width={58} height={58} />
            <span className="solution-brand">ANU-Q<small>TECHNOLOGIES</small></span>
            <p>A simpler, smarter way forward.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
