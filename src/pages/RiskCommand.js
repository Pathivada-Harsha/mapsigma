import "../pages_css/RiskCommand.css";
import Risk1 from "../images/Technology/Risk1.png"
import Risk2 from "../images/Technology/Risk2.png"
import Risk3 from "../images/Technology/Risk6.png"
import Risk4 from "../images/Technology/Risk4.png"
import Risk5 from "../images/Technology/Risk5.png"

export default function RiskCommandCenter() {
  const items = [
    {
      title: "Always-On Awareness",
      body: "Monitor exposure, volatility, correlations, leverage, liquidity, and stress indicators in one unified view.",
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
    <div className="rcc-page">
      {/* Hero Section */}
      <section 
        className="rcc-hero"
        style={{ backgroundImage: "url(/images/hero-risk-center.jpg)" }}
      >
        <div className="rcc-hero-inner">
          <div className="rcc-hero-left">
            <h1 className="rcc-title">Risk Command Center</h1>
            <p className="rcc-subtitle">
              From detection to direction—turn risk into a strategic advantage with real-time intelligence and proactive guidance across all portfolios.
            </p>
            <div className="rcc-actions">
              <a className="rcc-button-primary" href="#features">
                Review Controls
              </a>
              <a className="rcc-button-ghost" href="/client-command-portal">
                Client Portal
              </a>
            </div>
          </div>
          <div className="rcc-hero-right">
            <img
              className="rcc-side-image"
              src={Risk1}
              alt="Risk dashboards and alerts"
            />
          </div>
        </div>
      </section>

      {/* Real-Time Intelligence */}
      <section className="rcc-section">
        <div className="rcc-split">
          <div className="rcc-split-left">
            <h2 className="rcc-feature-title">Real-Time Intelligence</h2>
            <p>
              MAPSIGMA CAPITAL's Risk Command Center monitors, assesses, and guides risk across all portfolios in real time, ensuring discipline, protection, and foresight are built into every investment decision.
            </p>
            <p>
              Our comprehensive risk platform aggregates data from multiple sources, providing a unified view of portfolio exposure across asset classes, geographies, and strategies. Advanced analytics continuously evaluate market conditions and portfolio positions to identify emerging risks before they become critical.
            </p>
          </div>
          <div className="rcc-split-right">
            <img 
              className="rcc-split-image"
              src={Risk2} 
              alt="Risk intelligence dashboard" 
            />
          </div>
        </div>
      </section>

      {/* Proactive Recommendations */}
      <section className="rcc-section-alt">
        <div className="rcc-split reverse">
          <div className="rcc-split-left">
            <h2 className="rcc-feature-title">Proactive Recommendations</h2>
            <p>
              The platform doesn't just flag vulnerabilities; it recommends real-time adjustments such as asset rebalancing, hedging strategies, and exposure shifts aligned with portfolio objectives and risk appetite.
            </p>
            <p>
              AI-powered scenario analysis evaluates thousands of potential market conditions and suggests optimal responses. These intelligent recommendations consider portfolio constraints, transaction costs, and market liquidity to provide actionable guidance that investment teams can implement immediately.
            </p>
          </div>
          <div className="rcc-split-right">
            <img 
              className="rcc-split-image"
              src={Risk3}
              alt="AI-driven risk recommendations" 
            />
          </div>
        </div>
      </section>

      {/* Custom Alerts & Compliance */}
      <section className="rcc-section">
        <div className="rcc-split">
          <div className="rcc-split-left">
            <h2 className="rcc-feature-title">Custom Alerts & Compliance</h2>
            <p>
              Threshold-based alerts escalate automatically to decision-makers when risk metrics exceed predefined limits. Deep audit trails and reporting features uphold fiduciary duties, ensuring transparency and accountability.
            </p>
            <p>
              Configurable notification workflows ensure the right people receive the right information at the right time. Complete documentation of all risk events and responses provides regulatory compliance and enables thorough post-event analysis and continuous improvement.
            </p>
          </div>
          <div className="rcc-split-right">
            <img 
              className="rcc-split-image"
              src={Risk4}
              alt="Risk alerts dashboard" 
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="rcc-section-alt">
        <div className="rcc-container">
          <h2 className="rcc-h2">Command Center Capabilities</h2>
          <p className="rcc-p">
            Comprehensive risk management powered by real-time data and intelligent analytics.
          </p>
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

      {/* Summary Section with Background */}
      <section 
        className="rcc-section-final"
        style={{ backgroundImage: "url(/images/rcc-summary-bg.jpg)" }}
      >
        <div className="rcc-container">
          <h2 className="rcc-h2">Strategic Risk Management</h2>
          <div className="rcc-long-content">
            <p>
              <strong>The Risk Command Center transforms risk management from a defensive necessity into a strategic advantage.</strong> By combining real-time monitoring, AI-powered analytics, and proactive recommendations, we enable investment teams to make informed decisions with confidence.
            </p>
            <p>
              Our integrated approach ensures that risk considerations are embedded in every stage of the investment process—from initial analysis through ongoing portfolio management. This comprehensive framework helps identify opportunities while protecting against downside scenarios.
            </p>
            <p>
              <strong>With complete transparency, robust compliance, and continuous monitoring, MAPSIGMA CAPITAL's Risk Command Center delivers the discipline and foresight required to navigate today's complex markets successfully.</strong>
            </p>
          </div>
        </div>
      </section>

      
    </div>
  )
}