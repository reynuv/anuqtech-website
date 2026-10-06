interface WhatWeHelpProps {
  onContact: () => void;
}

export default function WhatWeHelp({ onContact }: WhatWeHelpProps) {
  function handleContactClick(e: React.MouseEvent) {
    e.preventDefault();
    onContact();
  }

  return (
    <section className="section section-cards" id="what-we-do">
      <div className="container">
        <div className="section-heading split-heading reveal">
          <div>
            <p className="eyebrow">WHAT WE HELP WITH</p>
            <h2>Turn challenges into opportunities.</h2>
          </div>
          <p>Practical technology solutions<br />for real business needs.</p>
        </div>

        <div className="benefit-grid">
          <article className="benefit-card reveal">
            <span className="benefit-icon blue" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="8"/>
                <path d="M12 7v5l3 2"/>
              </svg>
            </span>
            <h3>Save time</h3>
            <p>Automate the manual work so your team can focus on what matters.</p>
            <a className="circle-arrow" href="#contact" onClick={handleContactClick} aria-label="Talk to us about saving time">→</a>
          </article>

          <article className="benefit-card reveal">
            <span className="benefit-icon green" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="2"/>
                <circle cx="18" cy="6" r="2"/>
                <circle cx="12" cy="18" r="2"/>
                <path d="M8 7l8 0M7 8l4 8M17 8l-4 8"/>
              </svg>
            </span>
            <h3>Connect systems</h3>
            <p>Bring your data, tools and teams together.</p>
            <a className="circle-arrow" href="#contact" onClick={handleContactClick} aria-label="Talk to us about connecting systems">→</a>
          </article>

          <article className="benefit-card reveal">
            <span className="benefit-icon purple" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M5 19V11h3v8zM10.5 19V7h3v12zM16 19V4h3v15z"/>
              </svg>
            </span>
            <h3>Build smarter</h3>
            <p>Turn your ideas into simple, scalable solutions.</p>
            <a className="circle-arrow" href="#contact" onClick={handleContactClick} aria-label="Talk to us about building a solution">→</a>
          </article>
        </div>
      </div>
    </section>
  );
}
