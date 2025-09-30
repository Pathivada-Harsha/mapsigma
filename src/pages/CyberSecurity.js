import "../pages_css/CyberSecurity.css";

export default function CybersecurityGovernance() {
  const items = [
    {
      title: "Defense in Depth",
      body: "Enterprise encryption, secure cloud, next-gen firewalls, and biometric access protocols.",
    },
    {
      title: "Relentless Testing",
      body: "External pen testing, red-team simulations, and 24/7 AI monitoring across endpoints.",
    },
    {
      title: "Global Standards",
      body: "GDPR, ISO 27001, and SOC 2 alignment exceed regulatory expectations.",
    },
  ];

  return (
    <main className="csg-page">
      <section
        className="csg-hero"
        style={{ backgroundImage: "url(/images/hero-cybersecurity.jpg)" }}
        aria-label="Hero section"
      >
        <div className="csg-hero-inner">
          <div className="csg-hero-left">
            <h1 className="csg-title">Cybersecurity & Data Governance</h1>
            <p className="csg-subtitle">
              Trust begins with protection—security and governance as frontline priorities.
            </p>
            <div className="csg-actions">
              <a className="csg-button-primary" href="#features">
                Read Policies
              </a>
              <a className="csg-button-ghost" href="/client-command-portal">
                See Client Portal
              </a>
            </div>
          </div>
          <div className="csg-hero-right" role="img" aria-label="Cybersecurity lock and network">
            <img className="csg-side-image" src="/images/side-cybersecurity.jpg" alt="Cybersecurity lock and network" />
          </div>
        </div>
      </section>

      {/* Split Layout Sections */}
      <section className="csg-section csg-split">
        <div className="csg-split-inner">
          <div className="csg-text">
            <h2 className="csg-h2">Multi-Layered Security</h2>
            <p className="csg-p">
              Our cybersecurity infrastructure uses encryption, firewalls, secure cloud architecture, and continuous
              threat detection to protect client data and assets at every level.
            </p>
          </div>
          <div className="csg-image">
            <img src="/images/csg-multilayer.jpg" alt="Multi-layered security" />
          </div>
        </div>
      </section>

      <section className="csg-section csg-split-reverse">
        <div className="csg-split-inner">
          <div className="csg-image">
            <img src="/images/csg-governance.jpg" alt="Data governance policies" />
          </div>
          <div className="csg-text">
            <h2 className="csg-h2">Governance & Compliance</h2>
            <p className="csg-p">
              Data lifecycle management, strict enforcement of GDPR, ISO 27001, SOC 2, and regular audits ensure
              regulatory compliance and client trust.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="csg-section">
        <div className="csg-container">
          <ul className="csg-features">
            {items.map((it) => (
              <li key={it.title} className="csg-feature-card">
                <h3 className="csg-feature-title">{it.title}</h3>
                <p className="csg-feature-body">{it.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
