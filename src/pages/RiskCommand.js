import "../pages_css/RiskCommand.css";

export default function RiskCommandCenter() {
  const items = [
    {
      title: "Always-On Awareness",
      body: "Monitor exposure, volatility, correlations, leverage, liquidity, and stress indicators in one view.",
    },
    {
      title: "Actionable Guidance",
      body: "AI-augmented scenarios propose rebalancing, hedges, and exposure shifts in real time.",
    },
    {
      title: "Custom Alerts",
      body: "Threshold-based notifications escalate to decision-makers with full audit trails.",
    },
  ];

  return (
    <main className="rcc-page">
      {/* Hero Section */}
      <section
        className="rcc-hero"
        style={{ backgroundImage: "url(/images/hero-risk-center.jpg)" }}
        aria-label="Hero section"
      >
        <div className="rcc-hero-inner">
          <div className="rcc-hero-left">
            <h1 className="rcc-title">Risk Command Center</h1>
            <p className="rcc-subtitle">
              From detection to direction—turn risk into a strategic advantage with real-time intelligence and guidance.
            </p>
            <div className="rcc-actions">
              <a className="rcc-button-primary" href="#features">Review Controls</a>
              <a className="rcc-button-ghost" href="/client-command-portal">See Client Portal</a>
            </div>
          </div>
          <div className="rcc-hero-right" role="img" aria-label="Risk dashboards and alerts">
            <img className="rcc-side-image" src="/images/side-risk-center.jpg" alt="Risk dashboards and alerts" />
          </div>
        </div>
      </section>

      {/* Section 1: Overview - content left, image right */}
      <section className="rcc-section rcc-split">
        <div className="rcc-text">
          <h2 className="rcc-h2">Real-Time Intelligence</h2>
          <p className="rcc-p">
            MAPSIGMA CAPITAL’s Risk Command Center monitors, assesses, and guides risk across all portfolios in real time,
            ensuring discipline, protection, and foresight are built into every investment decision.
          </p>
        </div>
        <div className="rcc-image">
          <img src="/images/rcc-overview.jpg" alt="Risk intelligence dashboard" />
        </div>
      </section>

      {/* Section 2: Recommendations - content right, image left */}
      <section className="rcc-section rcc-split-reverse">
        <div className="rcc-image">
          <img src="/images/rcc-recommendations.jpg" alt="AI-driven risk recommendations" />
        </div>
        <div className="rcc-text">
          <h2 className="rcc-h2">Proactive Recommendations</h2>
          <p className="rcc-p">
            The platform doesn’t just flag vulnerabilities; it recommends real-time adjustments such as asset rebalancing,
            hedging strategies, and exposure shifts aligned with portfolio objectives and risk appetite.
          </p>
        </div>
      </section>

      {/* Section 3: Alerts & Compliance - content left, image right */}
      <section className="rcc-section rcc-split">
        <div className="rcc-text">
          <h2 className="rcc-h2">Custom Alerts & Compliance</h2>
          <p className="rcc-p">
            Threshold-based alerts escalate automatically to decision-makers. Deep audit trails and reporting features
            uphold fiduciary duties, ensuring transparency and accountability.
          </p>
        </div>
        <div className="rcc-image">
          <img src="/images/rcc-alerts.jpg" alt="Risk alerts dashboard" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="rcc-section">
        <div className="rcc-container">
          <ul className="rcc-features">
            {items.map((it) => (
              <li key={it.title} className="rcc-feature-card">
                <h3 className="rcc-feature-title">{it.title}</h3>
                <p className="rcc-feature-body">{it.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
