import "../pages_css/CyberSecurity.css";
import Cyber1 from "../images/Technology/Cyber1.png"
import Cyber2 from "../images/Technology/Cyber2.png"
import Cyber3 from "../images/Technology/Cyber3.png"
import Cyber4 from "../images/Technology/Cyber4.png"

export default function CybersecurityGovernance() {
  const items = [
    {
      title: "Defense in Depth",
      body: "Enterprise encryption, secure cloud infrastructure, next-generation firewalls, and biometric access protocols protect data at every layer.",
    },
    {
      title: "Relentless Testing",
      body: "External penetration testing, red-team simulations, and 24/7 AI-powered monitoring across all endpoints and systems.",
    },
    {
      title: "Global Standards",
      body: "GDPR, ISO 27001, and SOC 2 alignment that exceeds regulatory expectations and demonstrates commitment to security excellence.",
    },
  ];

  return (
    <div className="csg-page">
      {/* Hero Section */}
      <section 
        className="csg-hero"
        style={{ backgroundImage: "url(/images/hero-cybersecurity.jpg)" }}
      >
        <div className="csg-hero-inner">
          <div className="csg-hero-left">
            <h1 className="csg-title">Cybersecurity & Data Governance</h1>
            <p className="csg-subtitle">
              Trust begins with protection—comprehensive security and governance as frontline priorities protecting your investments and data.
            </p>
            <div className="csg-actions">
              <a className="csg-button-primary" href="#features">
                Security Policies
              </a>
              <a className="csg-button-ghost" href="/client-command-portal">
                Client Portal
              </a>
            </div>
          </div>
          <div className="csg-hero-right">
            <img
              className="csg-side-image"
              src={Cyber1}
              alt="Cybersecurity lock and network"
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="csg-section">
        <div className="csg-container">
          <h2 className="csg-h2">Enterprise-Grade Protection</h2>
          <p className="csg-p">
            At MAPSIGMA CAPITAL, cybersecurity and data governance are not afterthoughts—they are foundational priorities embedded in every aspect of our operations.
          </p>
          <p className="csg-p">
            Our comprehensive security framework protects client data, investment information, and proprietary systems through multiple layers of defense, continuous monitoring, and strict compliance with global regulatory standards.
          </p>
        </div>
      </section>

      {/* Multi-Layered Security */}
      <section className="csg-section-alt">
        <div className="csg-split">
          <div className="csg-split-left">
            <h2 className="csg-feature-title">Multi-Layered Security</h2>
            <p>
              Our cybersecurity infrastructure employs enterprise-grade encryption, advanced firewalls, secure cloud architecture, and continuous threat detection to protect client data and assets at every level of the technology stack.
            </p>
            <p>
              From network perimeter security to endpoint protection and data encryption both in transit and at rest, our defense-in-depth strategy ensures that multiple security controls work in concert to prevent, detect, and respond to potential threats.
            </p>
          </div>
          <div className="csg-split-right">
            <img 
              className="csg-split-image"
              src={Cyber2}
              alt="Multi-layered security architecture" 
            />
          </div>
        </div>
      </section>

      {/* Governance & Compliance */}
      <section className="csg-section">
        <div className="csg-split reverse">
          <div className="csg-split-left">
            <h2 className="csg-feature-title">Governance & Compliance</h2>
            <p>
              Comprehensive data lifecycle management, strict enforcement of GDPR, ISO 27001, SOC 2 Type II, and regular independent audits ensure regulatory compliance and maintain the highest standards of client trust.
            </p>
            <p>
              Our governance framework defines clear policies, procedures, and accountability for data handling, access controls, incident response, and continuous improvement. Regular compliance assessments and third-party audits validate our commitment to security excellence.
            </p>
          </div>
          <div className="csg-split-right">
            <img 
              className="csg-split-image"
              src={Cyber3}
              alt="Data governance and compliance" 
            />
          </div>
        </div>
      </section>

      {/* Continuous Monitoring */}
      <section className="csg-section-alt">
        <div className="csg-split">
          <div className="csg-split-left">
            <h2 className="csg-feature-title">Continuous Monitoring</h2>
            <p>
              24/7 security operations center (SOC) monitoring, AI-powered threat detection, and automated incident response systems provide round-the-clock protection against evolving cyber threats.
            </p>
            <p>
              Real-time analysis of security events, anomaly detection, and automated alerting ensure that potential threats are identified and addressed before they can impact operations or compromise sensitive data.
            </p>
          </div>
          <div className="csg-split-right">
            <img 
              className="csg-split-image"
              src={Cyber4}
              alt="Security operations monitoring" 
            />
          </div>
        </div>
      </section>

      {/* Key Security Features */}
      <section id="features" className="csg-section">
        <div className="csg-container">
          <h2 className="csg-h2">Security Framework Pillars</h2>
          <p className="csg-p">
            Our comprehensive approach to cybersecurity and data governance encompasses technology, processes, and people.
          </p>
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

      {/* Summary Section with Background */}
      <section 
        className="csg-section-final"
        style={{ backgroundImage: "url(/images/csg-summary-bg.jpg)" }}
      >
        <div className="csg-container">
          <h2 className="csg-h2">Unwavering Commitment to Security</h2>
          <div className="csg-long-content">
            <p>
              <strong>Security is not a one-time implementation—it's a continuous commitment that evolves with emerging threats and changing technology landscapes.</strong> Our proactive approach to cybersecurity combines cutting-edge technology, rigorous processes, and a culture of security awareness.
            </p>
            <p>
              Every member of our organization understands their role in maintaining security. From executive leadership to operational teams, security responsibilities are clearly defined, regularly trained, and consistently enforced. This comprehensive approach ensures that human factors complement our technical controls.
            </p>
            <p>
              <strong>By maintaining the highest standards of cybersecurity and data governance, MAPSIGMA CAPITAL protects not just data and systems, but the trust that clients place in us to safeguard their investments and sensitive information.</strong>
            </p>
          </div>
        </div>
      </section>

      
    </div>
  )
}
