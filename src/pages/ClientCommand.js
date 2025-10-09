import "../pages_css/ClientCommand.css";
import Client1 from "../images/Technology/Client1.png"
import Client2 from "../images/Technology/Client2.png"
import Client3 from "../images/Technology/Client3.png"
import Client4 from "../images/Technology/Client4.png"
import Client5 from "../images/Technology/Client5.png"

export default function ClientCommandPortal() {
  return (
    <div className="ccp-page">
      {/* Hero Section */}
      <section 
        className="ccp-hero"
        style={{ backgroundImage: "url(/images/hero-client-portal.jpg)" }}
      >
        <div className="ccp-hero-inner">
          <div className="ccp-hero-left">
            <h1 className="ccp-title">Client Command Portal</h1>
            <p className="ccp-subtitle">
              Total Transparency. Real-Time Control. Personalized Experience. Your complete financial command center, accessible anytime, anywhere.
            </p>
            <div className="ccp-actions">
              <a className="ccp-button-primary" href="#features">
                Explore Features
              </a>
              <a className="ccp-button-ghost" href="/login">
                Portal Login
              </a>
            </div>
          </div>
          <div className="ccp-hero-right">
            <img
              className="ccp-side-image"
              src={Client2}
              alt="Client portal interface"
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="ccp-section">
        <div className="ccp-container">
          <h2 className="ccp-h2">Your Financial Command Center</h2>
          <div className="ccp-long-content">
            <p>
              At MAPSIGMA CAPITAL, we believe that every client deserves more than a report—they deserve a window into their financial world. That's why we built the Client Command Portal, a secure, intuitive, and fully personalized digital platform that gives clients real-time visibility, clarity, and control over their portfolios.
            </p>
            <p>
              <strong>This isn't just a dashboard—it's a decision-making command center.</strong> The portal offers a seamless interface where clients can monitor their investments, access insights, and stay connected with our team, all from a single, powerful platform.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="ccp-section-alt">
        <div className="ccp-container">
          <h2 className="ccp-h2">Comprehensive Portal Capabilities</h2>
          <p className="ccp-p">
            The Client Command Portal provides everything you need to stay informed and in control of your investments.
          </p>
          <ul className="ccp-features">
            <li className="ccp-feature-card">
              <h3 className="ccp-feature-title">Live Portfolio Performance</h3>
              <p className="ccp-feature-body">
                View real-time portfolio performance and position-level breakdowns across all asset classes with live pricing and market data.
              </p>
            </li>
            <li className="ccp-feature-card">
              <h3 className="ccp-feature-title">Risk Monitoring</h3>
              <p className="ccp-feature-body">
                Monitor risk exposure, returns, and market movements in real time with comprehensive risk analytics and alerts.
              </p>
            </li>
            <li className="ccp-feature-card">
              <h3 className="ccp-feature-title">Bespoke Reports</h3>
              <p className="ccp-feature-body">
                Access customized strategy reports, economic insights, and research tailored to your investment objectives.
              </p>
            </li>
            <li className="ccp-feature-card">
              <h3 className="ccp-feature-title">Secure Communication</h3>
              <p className="ccp-feature-body">
                Receive secure updates, alerts, and direct communication from the MAPSIGMA team through encrypted channels.
              </p>
            </li>
            <li className="ccp-feature-card">
              <h3 className="ccp-feature-title">Document Management</h3>
              <p className="ccp-feature-body">
                Upload, retrieve, and manage important documents—statements, tax forms, contracts—all in one secure location.
              </p>
            </li>
            <li className="ccp-feature-card">
              <h3 className="ccp-feature-title">Global Access 24/7</h3>
              <p className="ccp-feature-body">
                Access your portal via web or mobile from any device, anywhere in the world, without compromising security or speed.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Tailored Experiences */}
      <section className="ccp-section">
        <div className="ccp-split">
          <div className="ccp-split-left">
            <h2 className="ccp-feature-title">Tailored Experiences</h2>
            <p>
              Every client's experience is tailored to their unique needs and objectives. From customized reports and curated insights to personalized risk metrics and benchmark comparisons, you receive information that is directly relevant to your goals.
            </p>
            <p>
              The portal adapts to your investment mandate, preferences, and communication style, ensuring that every interaction delivers maximum value. Whether you prefer detailed analytics or high-level summaries, the platform adjusts to serve your needs.
            </p>
          </div>
          <div className="ccp-split-right">
            <img 
              className="ccp-split-image"
              src={Client3}
              alt="Tailored client experience" 
            />
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="ccp-section-alt">
        <div className="ccp-split reverse">
          <div className="ccp-split-left">
            <h2 className="ccp-feature-title">Security & Trust</h2>
            <p>
              Built with bank-grade encryption, multi-factor authentication, and continuous monitoring, the Client Command Portal combines trust with usability. Every interaction is protected by enterprise-level security protocols.
            </p>
            <p>
              Our security infrastructure includes regular penetration testing, 24/7 threat monitoring, and compliance with the highest industry standards. You can access your sensitive financial information with complete confidence in every click.
            </p>
          </div>
          <div className="ccp-split-right">
            <img 
              className="ccp-split-image"
              src={Client4}
              alt="Security and encryption" 
            />
          </div>
        </div>
      </section>

      {/* Clarity & Control */}
      <section className="ccp-section">
        <div className="ccp-split">
          <div className="ccp-split-left">
            <h2 className="ccp-feature-title">Clarity & Control</h2>
            <p>
              In a world filled with noise, we offer clarity. In a world full of complexity, we offer control. The Client Command Portal cuts through the clutter to deliver actionable insights and transparent reporting.
            </p>
            <p>
              Interactive visualizations, intuitive navigation, and intelligent alerts keep you informed without overwhelming you. The portal empowers you to make decisions with confidence, backed by complete transparency and real-time data.
            </p>
          </div>
          <div className="ccp-split-right">
            <img 
              className="ccp-split-image"
              src={Client5}
              alt="Clarity and control dashboard" 
            />
          </div>
        </div>
      </section>

      {/* Mobile Experience */}
      <section className="ccp-section-alt">
        <div className="ccp-container">
          <h2 className="ccp-h2">Seamless Mobile Experience</h2>
          <p className="ccp-p">
            The Client Command Portal is fully optimized for mobile devices, providing the same powerful features and security on your smartphone or tablet as on your desktop.
          </p>
          <p className="ccp-p">
            Monitor your portfolio, review performance, and communicate with your investment team from anywhere—whether you're traveling internationally, between meetings, or simply prefer mobile access.
          </p>
        </div>
      </section>

      {/* Final CTA with Background */}
      <section 
        className="ccp-section-final"
        style={{ backgroundImage: "url(/images/ccp-summary-bg.jpg)" }}
      >
        <div className="ccp-container">
          <h2 className="ccp-h2">Experience Full Control Today</h2>
          <div className="ccp-long-content">
            <p>
              <strong>The Client Command Portal represents our commitment to transparency, innovation, and client empowerment.</strong> We've built a platform that doesn't just report information—it enables understanding, facilitates decisions, and strengthens the partnership between you and your investment team.
            </p>
            <p>
              Join the growing number of sophisticated investors who demand real-time visibility and complete control over their portfolios. Experience the difference that true transparency makes.
            </p>
          </div>
          <div className="ccp-cta-buttons">
            <a className="ccp-button-primary" href="/login">
              Open Your Portal
            </a>
            <a className="ccp-button-ghost-light" href="/contact">
              Request Access
            </a>
          </div>
        </div>
      </section>

      
    </div>
  )
}
