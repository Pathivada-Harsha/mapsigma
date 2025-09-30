import "../pages_css/ClientCommand.css";

export default function ClientCommandPortal() {
  return (
    <main className="ccp-page">

      {/* Hero Section */}
      <section
        className="ccp-hero"
        style={{ backgroundImage: "url(/images/hero-client-portal.jpg)" }}
        aria-label="Hero section"
      >
        <div className="ccp-hero-inner">
          <div className="ccp-hero-left">
            <h1 className="ccp-title">Client Command Portal</h1>
            <p className="ccp-subtitle">
              Total Transparency. Real-Time Control. Personalized Experience.
            </p>
            <div className="ccp-actions">
              <a className="ccp-button-primary" href="#features">Open Portal</a>
              <a className="ccp-button-ghost" href="/client-command-portal">See Client Portal</a>
            </div>
          </div>
          <div className="ccp-hero-right" role="img" aria-label="Client portal interface">
            <img className="ccp-side-image" src="/images/side-client-portal.jpg" alt="Client portal interface" />
          </div>
        </div>
      </section>

      {/* Section: Full Description */}
      <section className="ccp-section">
        <div className="ccp-container">
          <p className="ccp-full-text">
            At MAPSIGMA CAPITAL, we believe that every client deserves more than a report—they deserve a window into their financial world. That’s why we built the Client Command Portal, a secure, intuitive, and fully personalized digital platform that gives clients real-time visibility, clarity, and control over their portfolios. This isn’t just a dashboard, it’s a decision-making command center.
          </p>
          <p className="ccp-full-text">
            The portal offers a seamless interface where clients can:
          </p>
          <ul className="ccp-list">
            <li>View live portfolio performance and position-level breakdowns</li>
            <li>Monitor risk exposure, returns and market movements in real time</li>
            <li>Access bespoke strategy reports, economic insights and research</li>
            <li>Receive secure updates, alerts and direct communication from the MAPSIGMA team</li>
            <li>Upload, retrieve and manage important documents, all in one place</li>
          </ul>
          <p className="ccp-full-text">
            The platform is accessible via web and mobile, offering global access 24/7 from any device without compromising on security or speed.
          </p>
        </div>
      </section>

      {/* Split Section 1 */}
      <section className="ccp-section ccp-split">
        <div className="ccp-split-inner">
          <div className="ccp-text">
            <h2 className="ccp-h2">Tailored Experiences</h2>
            <p className="ccp-p">
              Every experience is tailored. From customized reports and curated insights to personalized risk metrics and benchmark comparisons, clients receive information that is relevant to their goals and aligned with their investment mandates.
            </p>
          </div>
          <div className="ccp-image">
            <img src="/images/ccp-tailored.jpg" alt="Tailored client experience" />
          </div>
        </div>
      </section>

      {/* Split Section 2 (Reverse) */}
      <section className="ccp-section ccp-split-reverse">
        <div className="ccp-split-inner">
          <div className="ccp-image">
            <img src="/images/ccp-security.jpg" alt="Security and encryption" />
          </div>
          <div className="ccp-text">
            <h2 className="ccp-h2">Security & Trust</h2>
            <p className="ccp-p">
              Built with bank-grade encryption, dual-factor authentication, and continuous monitoring, the Client Command Portal combines trust with usability, giving clients confidence in every click.
            </p>
          </div>
        </div>
      </section>

      {/* Split Section 3 */}
      <section className="ccp-section ccp-split">
        <div className="ccp-split-inner">
          <div className="ccp-text">
            <h2 className="ccp-h2">Clarity & Control</h2>
            <p className="ccp-p">
              In a world filled with noise, we offer clarity. In a world full of complexity, we offer control. The Client Command Portal is how we keep you informed, empowered, and ahead.
            </p>
          </div>
          <div className="ccp-image">
            <img src="/images/ccp-clarity.jpg" alt="Clarity and control" />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="ccp-section ccp-cta">
        <div className="ccp-container">
          <h2 className="ccp-h2">Experience Full Control Today</h2>
          <a className="ccp-button-primary" href="/client-command-portal">Open Your Portal</a>
        </div>
      </section>

    </main>
  );
}
