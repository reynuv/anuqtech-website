export default function HowItWorks() {
  return (
    <section className="section process-section" id="how-it-works">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>A clear path from problem to progress.</h2>
        </div>

        <div className="process-grid">
          <article className="step reveal">
            <div className="step-top">
              <span className="step-number">1</span>
              <span className="step-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M5 5h14v10H9l-4 4z"/>
                </svg>
              </span>
            </div>
            <h3>Share the problem</h3>
            <p>Tell us what&#39;s not working.<br />No tech knowledge needed.</p>
          </article>

          <span className="step-arrow" aria-hidden="true">→</span>

          <article className="step reveal">
            <div className="step-top">
              <span className="step-number">2</span>
              <span className="step-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M6 3h8l4 4v14H6z"/>
                  <path d="M14 3v5h5M9 12h6M9 16h6"/>
                </svg>
              </span>
            </div>
            <h3>Get the plan</h3>
            <p>We&#39;ll recommend the right solution, clearly and simply.</p>
          </article>

          <span className="step-arrow" aria-hidden="true">→</span>

          <article className="step reveal">
            <div className="step-top">
              <span className="step-number">3</span>
              <span className="step-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M14 3c3 1 5 3 6 6l-5 5-5-5z"/>
                  <path d="M10 14l-3 3M8 12l-3 1 1 3M12 16l1 3 3-1"/>
                </svg>
              </span>
            </div>
            <h3>See it built</h3>
            <p>We design and deliver it end-to-end.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
