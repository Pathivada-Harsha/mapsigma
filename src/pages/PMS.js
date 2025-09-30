import "../pages_css/PMS.css";

export default function PMSPage() {
  return (
    <main className="pms-page">
      {/* Hero */}
      <section
        className="pms-hero"
        style={{ backgroundImage: "url(/images/hero-pms.jpg)" }}
        aria-label="Hero section"
      >
        <div className="pms-hero-inner">
          <div className="pms-hero-left">
            <h1 className="pms-title">Portfolio Management System</h1>
            <p className="pms-subtitle">
              MAPSIGMA CAPITAL’s central hub for portfolio oversight—execute strategies with precision, discipline, and transparency.
            </p>
            <div className="pms-actions">
              <a className="pms-button-primary" href="#overview">
                Learn More
              </a>
              <a className="pms-button-ghost" href="/client-command-portal">
                See Client Portal
              </a>
            </div>
          </div>
          <div className="pms-hero-right">
            <img
              className="pms-side-image"
              src="/images/side-pms.jpg"
              alt="Portfolio management dashboard"
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="pms-section">
        <div className="pms-container">
          <h2 className="pms-h2">Comprehensive Portfolio Oversight</h2>
          <p className="pms-p">
            MAPSIGMA CAPITAL’s Portfolio Management System is the central hub that brings together every element of
            portfolio oversight, ensuring that our investment strategies are executed with precision, discipline, and
            transparency. This advanced platform tracks each investment position across all asset classes in real time—
            equities, fixed income, commodities, currencies, and alternative investments.
          </p>
        </div>
      </section>

      {/* Automation & Efficiency Section */}
      <section className="pms-section pms-split">
        <div className="pms-text">
          <h2 className="pms-h2">Automation & Efficiency</h2>
          <p className="pms-p">
            Automation is at the heart of our PMS. Routine tasks such as trade execution, compliance checks, and
            performance reporting are streamlined to reduce human error and enhance operational efficiency. This frees
            our investment professionals to focus on analysis, strategy, and decision-making.
          </p>
        </div>
        <div className="pms-image">
          <img src="/images/pms-automation.jpg" alt="PMS automation workflow" />
        </div>
      </section>

      {/* Audit & Compliance Section */}
      <section className="pms-section pms-split-reverse">
        <div className="pms-image">
          <img src="/images/pms-audit.jpg" alt="Audit and compliance dashboard" />
        </div>
        <div className="pms-text">
          <h2 className="pms-h2">Audit & Compliance</h2>
          <p className="pms-p">
            Every action and adjustment within the PMS is logged through robust audit trails, ensuring full accountability
            and regulatory compliance. This transparency builds trust with clients and allows for rigorous post-trade
            review and performance attribution.
          </p>
        </div>
      </section>

      {/* Risk Management Section */}
      <section className="pms-section pms-split">
        <div className="pms-text">
          <h2 className="pms-h2">Integrated Risk Management</h2>
          <p className="pms-p">
            Risk overlays continuously monitor factors such as volatility, sector concentration, liquidity, and
            counterparty risk. These metrics are embedded directly into portfolio decision-making workflows, helping
            maintain discipline and avoid unintended exposures.
          </p>
        </div>
        <div className="pms-image">
          <img src="/images/pms-risk.jpg" alt="Portfolio risk monitoring" />
        </div>
      </section>

      {/* Summary Section */}
      <section className="pms-section">
        <div className="pms-container">
          <h2 className="pms-h2">Optimized Portfolio Execution</h2>
          <p className="pms-p">
            By combining comprehensive tracking, seamless automation, rigorous auditability, and embedded risk management,
            MAPSIGMA CAPITAL’s Portfolio Management System empowers our team to optimize portfolio construction and
            execution, delivering consistent, disciplined results for our clients.
          </p>
        </div>
      </section>
    </main>
  );
}
