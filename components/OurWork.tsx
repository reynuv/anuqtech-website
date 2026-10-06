import Image from "next/image";

interface OurWorkProps {
  onContact: () => void;
}

export default function OurWork({ onContact }: OurWorkProps) {
  function handleContactClick(e: React.MouseEvent) {
    e.preventDefault();
    onContact();
  }

  return (
    <section className="section work-section" id="work">
      <div className="container">
        <div className="section-heading work-heading reveal">
          <div>
            <p className="eyebrow">OUR WORK</p>
            <h2>A few ways this can look.</h2>
          </div>
          <a href="#contact" onClick={handleContactClick}>View all case studies <span aria-hidden="true">→</span></a>
        </div>

        <div className="work-grid">
          <article className="work-card work-card-blue reveal">
            <div className="work-copy">
              <small>Process Automation</small>
              <h3>From hours<br />to minutes</h3>
              <a className="circle-arrow" href="#contact" onClick={handleContactClick} aria-label="Discuss process automation">→</a>
            </div>
            <div className="mini-laptop" aria-hidden="true">
              <div className="laptop-screen">
                <span>✓ Manual work</span>
                <span>✓ Automated</span>
                <span>✓ Time saved</span>
                <span>✓ Happier team</span>
              </div>
              <div className="laptop-base"></div>
            </div>
          </article>

          <article className="work-card work-card-green reveal">
            <div className="work-copy">
              <small>Connected Systems</small>
              <h3>All your tools.<br />Working together.</h3>
              <a className="circle-arrow" href="#contact" onClick={handleContactClick} aria-label="Discuss connected systems">→</a>
            </div>
            <div className="system-flow" aria-hidden="true">
              <span className="app-badge coral">M</span>
              <span className="dots">•••</span>
              <span className="app-badge brand-badge">
                <Image src="/logo-icon.webp" alt="" width={42} height={42} />
              </span>
              <span className="dots">•••</span>
              <span className="app-badge green-badge">▦</span>
            </div>
          </article>

          <article className="work-card work-card-purple reveal">
            <div className="work-copy">
              <small>Custom Solutions</small>
              <h3>Your idea.<br />Built for your business.</h3>
              <a className="circle-arrow" href="#contact" onClick={handleContactClick} aria-label="Discuss a custom solution">→</a>
            </div>
            <div className="device-stack" aria-hidden="true">
              <div className="phone small">
                <div className="screen-ui">
                  <i></i><b></b><em></em>
                </div>
              </div>
              <div className="phone large">
                <div className="screen-ui">
                  <i></i><b></b><em></em><span></span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
