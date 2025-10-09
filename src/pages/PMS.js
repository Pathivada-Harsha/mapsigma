import "../pages_css/PMS.css";
import PMS1 from "../images/Technology/PMS1.png"
import PMS2 from "../images/Technology/PMS2.png"
import PMS3 from "../images/Technology/PMS3.png"
import PMS4 from "../images/Technology/PMS4.png"
import PMS5 from "../images/Technology/PMS5.png"
export default function PMSPage() {
  return (
    <div className="pms-page">
      {/* Hero Section */}
      <section 
        className="pms-hero"
        style={{ backgroundImage: "url(/images/hero-pms.jpg)" }}
      >
        <div className="pms-hero-inner">
          <div className="pms-hero-left">
            <h1 className="pms-title">Portfolio Management System</h1>
            <p className="pms-subtitle">
              MAPSIGMA CAPITAL's central hub for portfolio oversight—execute strategies with precision, discipline, and transparency across all asset classes.
            </p>
            <div className="pms-actions">
              <a className="pms-button-primary" href="#overview">
                Explore the System
              </a>
              <a className="pms-button-ghost" href="/client-command-portal">
                Client Portal
              </a>
            </div>
          </div>
          <div className="pms-hero-right">
            <img
              className="pms-side-image"
              src={PMS1}
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
            MAPSIGMA CAPITAL's Portfolio Management System is the central hub that brings together every element of portfolio oversight, ensuring that our investment strategies are executed with precision, discipline, and transparency.
          </p>
          <p className="pms-p">
            This advanced platform tracks each investment position across all asset classes in real time—equities, fixed income, commodities, currencies, and alternative investments—providing a unified view of portfolio performance and risk exposure.
          </p>
        </div>
      </section>

      {/* Automation & Efficiency */}
      <section className="pms-section-alt">
        <div className="pms-split">
          <div className="pms-split-left">
            <h2 className="pms-feature-title">Automation & Efficiency</h2>
            <p>
              Automation is at the heart of our PMS. Routine tasks such as trade execution, compliance checks, and performance reporting are streamlined to reduce human error and enhance operational efficiency.
            </p>
            <p>
              This frees our investment professionals to focus on what truly matters: analysis, strategy development, and critical decision-making. Automated workflows ensure consistency while maintaining the highest standards of execution quality.
            </p>
          </div>
          <div className="pms-split-right">
            <img 
              className="pms-split-image"
              src={PMS2}
              alt="PMS automation workflow" 
            />
          </div>
        </div>
      </section>

      {/* Audit & Compliance */}
      <section className="pms-section">
        <div className="pms-split reverse">
          <div className="pms-split-left">
            <h2 className="pms-feature-title">Audit & Compliance</h2>
            <p>
              Every action and adjustment within the PMS is logged through robust audit trails, ensuring full accountability and regulatory compliance at every level of portfolio management.
            </p>
            <p>
              This transparency builds trust with clients and regulators alike, while allowing for rigorous post-trade review and performance attribution. Our comprehensive audit capabilities provide complete visibility into all portfolio decisions and their outcomes.
            </p>
          </div>
          <div className="pms-split-right">
            <img 
              className="pms-split-image"
              src={PMS3} 
              alt="Audit and compliance dashboard" 
            />
          </div>
        </div>
      </section>

      {/* Integrated Risk Management */}
      <section className="pms-section-alt">
        <div className="pms-split">
          <div className="pms-split-left">
            <h2 className="pms-feature-title">Integrated Risk Management</h2>
            <p>
              Risk overlays continuously monitor critical factors such as volatility, sector concentration, liquidity constraints, and counterparty risk across the entire portfolio.
            </p>
            <p>
              These metrics are embedded directly into portfolio decision-making workflows, helping maintain discipline and avoid unintended exposures. Real-time risk analytics enable proactive adjustments before issues escalate.
            </p>
          </div>
          <div className="pms-split-right">
            <img 
              className="pms-split-image"
              src={PMS4}
              alt="Portfolio risk monitoring" 
            />
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="pms-section">
        <div className="pms-container">
          <h2 className="pms-h2">Core System Capabilities</h2>
          <p className="pms-p">
            Our Portfolio Management System integrates advanced technology with investment expertise to deliver superior results.
          </p>
          <ul className="pms-features">
            <li className="pms-feature-card">
              <h3 className="pms-feature-title">Real-Time Tracking</h3>
              <p className="pms-feature-body">
                Monitor all portfolio positions across asset classes with live pricing, exposure metrics, and performance attribution updated continuously.
              </p>
            </li>
            <li className="pms-feature-card">
              <h3 className="pms-feature-title">Trade Execution</h3>
              <p className="pms-feature-body">
                Automated trade routing and execution with pre-trade compliance checks, best execution analysis, and post-trade reconciliation.
              </p>
            </li>
            <li className="pms-feature-card">
              <h3 className="pms-feature-title">Performance Analytics</h3>
              <p className="pms-feature-body">
                Comprehensive performance measurement and attribution across multiple dimensions—security, sector, strategy, and time period.
              </p>
            </li>
            <li className="pms-feature-card">
              <h3 className="pms-feature-title">Regulatory Reporting</h3>
              <p className="pms-feature-body">
                Automated generation of required regulatory reports with complete audit trails and documentation for compliance oversight.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Summary Section */}
      <section 
        className="pms-section-final"
        style={{ backgroundImage: "url(/images/pms-summary-bg.jpg)" }}
      >
        <div className="pms-container">
          <h2 className="pms-h2">Optimized Portfolio Execution</h2>
          <div className="pms-long-content">
            <p>
              <strong>By combining comprehensive tracking, seamless automation, rigorous auditability, and embedded risk management,</strong> MAPSIGMA CAPITAL's Portfolio Management System empowers our team to optimize portfolio construction and execution.
            </p>
            <p>
              Our integrated approach ensures that every investment decision is supported by complete information, executed efficiently, and monitored continuously for risk and performance. The system serves as the operational backbone for our investment strategies, enabling us to scale our capabilities while maintaining the highest standards of precision and discipline.
            </p>
            <p>
              <strong>This comprehensive infrastructure delivers consistent, disciplined results for our clients,</strong> providing the transparency and accountability that sophisticated investors demand in today's complex investment environment.
            </p>
          </div>
        </div>
      </section>

      
    </div>
  )
}