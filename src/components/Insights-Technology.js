import React, { useState } from 'react';

const TechnologyPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const techPillars = [
    {
      title: "Real-Time Data Infrastructure",
      icon: "📊",
      description: "Process millions of data points daily across global markets with ultra-low latency systems.",
      features: [
        "Live market intelligence feeds",
        "Multi-asset class coverage",
        "Advanced data normalization",
        "Continuous monitoring systems"
      ]
    },
    {
      title: "AI-Enhanced Investment Models",
      icon: "🤖",
      description: "Machine learning algorithms that uncover patterns and simulate macroeconomic scenarios.",
      features: [
        "Pattern recognition systems",
        "Scenario analysis engines",
        "Portfolio stress testing",
        "Predictive analytics"
      ]
    },
    {
      title: "Portfolio Management System",
      icon: "📈",
      description: "Centralized platform tracking and optimizing every investment position across all asset classes.",
      features: [
        "Real-time position tracking",
        "Automated compliance checks",
        "Performance attribution",
        "Risk overlay integration"
      ]
    },
    {
      title: "Risk Command Center",
      icon: "🛡️",
      description: "Real-time intelligence platform monitoring exposure, volatility, and correlation across portfolios.",
      features: [
        "Live risk dashboards",
        "Automated alert systems",
        "Solution recommendations",
        "Regulatory reporting"
      ]
    }
  ];

  const innovations = [
    {
      title: "Cybersecurity Excellence",
      description: "Enterprise-grade encryption, next-generation firewalls, and 24/7 security operations protecting what matters most."
    },
    {
      title: "Client Command Portal",
      description: "Secure, intuitive platform providing clients real-time visibility, clarity, and control over their portfolios."
    },
    {
      title: "Adaptive Systems",
      description: "Continuously evolving tools that respond to shifts in markets, regulations, and client needs."
    }
  ];

  const stats = [
    { number: "1M+", label: "Data Points Processed Daily" },
    { number: "24/7", label: "Real-Time Monitoring" },
    { number: "<100ms", label: "System Response Time" },
    { number: "99.9%", label: "Platform Uptime" }
  ];

  return (
    <div className="Insight-technology-page">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .Insight-technology-page {
          font-family: 'Georgia', 'Times New Roman', serif;
          color: #1a1a1a;
          background-color: #ffffff;
          line-height: 1.6;
        }

        .Insight-technology-hero {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          color: #ffffff;
          padding: 140px 40px 100px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .Insight-technology-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.03) 49%, rgba(255,255,255,0.03) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(255,255,255,0.03) 49%, rgba(255,255,255,0.03) 51%, transparent 52%);
          background-size: 30px 30px;
          opacity: 0.5;
        }

        .Insight-technology-hero-content {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .Insight-technology-hero h1 {
          font-size: 4rem;
          font-weight: 300;
          margin-bottom: 24px;
          letter-spacing: -1.5px;
        }

        .Insight-technology-hero-subtitle {
          font-size: 1.75rem;
          font-weight: 300;
          line-height: 1.8;
          opacity: 0.95;
          max-width: 700px;
          margin: 0 auto;
        }

        .Insight-technology-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          max-width: 1200px;
          margin: -60px auto 0;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        .Insight-technology-stat-card {
          background: #ffffff;
          padding: 40px 24px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          transition: all 0.3s ease;
        }

        .Insight-technology-stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 48px rgba(0, 0, 0, 0.18);
        }

        .Insight-technology-stat-number {
          font-size: 3rem;
          font-weight: 700;
          color: #16213e;
          margin-bottom: 8px;
        }

        .Insight-technology-stat-label {
          font-size: 0.875rem;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .Insight-technology-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 40px;
        }

        .Insight-technology-section-title {
          font-size: 2.75rem;
          font-weight: 400;
          margin-bottom: 20px;
          color: #1a1a2e;
          text-align: center;
        }

        .Insight-technology-section-subtitle {
          font-size: 1.25rem;
          color: #666;
          text-align: center;
          margin-bottom: 70px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .Insight-technology-pillars {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          margin-bottom: 60px;
        }

        .Insight-technology-pillar-card {
          background: #f8f9fa;
          padding: 40px;
          border-left: 4px solid #16213e;
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .Insight-technology-pillar-card:hover {
          background: #ffffff;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
          transform: translateX(8px);
          border-left-color: #0f3460;
        }

        .Insight-technology-pillar-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          display: block;
        }

        .Insight-technology-pillar-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 16px;
        }

        .Insight-technology-pillar-description {
          color: #555;
          margin-bottom: 24px;
          line-height: 1.7;
        }

        .Insight-technology-pillar-features {
          list-style: none;
        }

        .Insight-technology-pillar-features li {
          padding: 8px 0 8px 24px;
          position: relative;
          color: #666;
          font-size: 0.95rem;
        }

        .Insight-technology-pillar-features li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #16213e;
          font-weight: bold;
        }

        .Insight-technology-innovations {
          background: linear-gradient(135deg, #16213e 0%, #0f3460 100%);
          color: #ffffff;
        }

        .Insight-technology-innovations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 48px;
        }

        .Insight-technology-innovation-item {
          text-align: center;
          padding: 32px;
        }

        .Insight-technology-innovation-title {
          font-size: 1.75rem;
          font-weight: 500;
          margin-bottom: 16px;
          color: #ffffff;
        }

        .Insight-technology-innovation-description {
          font-size: 1.05rem;
          line-height: 1.8;
          opacity: 0.9;
        }

        .Insight-technology-platform {
          background: #f8f9fa;
        }

        .Insight-technology-platform-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .Insight-technology-platform-text h3 {
          font-size: 2.25rem;
          font-weight: 500;
          color: #1a1a2e;
          margin-bottom: 24px;
        }

        .Insight-technology-platform-text p {
          font-size: 1.125rem;
          color: #555;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .Insight-technology-platform-visual {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          padding: 60px;
          text-align: center;
          color: #ffffff;
          border-radius: 4px;
        }

        .Insight-technology-platform-visual-title {
          font-size: 1.5rem;
          margin-bottom: 24px;
          opacity: 0.95;
        }

        .Insight-technology-platform-layers {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .Insight-technology-layer {
          background: rgba(255, 255, 255, 0.1);
          padding: 16px 24px;
          border-left: 3px solid rgba(255, 255, 255, 0.5);
          text-align: left;
          transition: all 0.3s ease;
        }

        .Insight-technology-layer:hover {
          background: rgba(255, 255, 255, 0.15);
          border-left-color: #ffffff;
          transform: translateX(8px);
        }

        .Insight-technology-cta {
          background: #ffffff;
          text-align: center;
          padding: 100px 40px;
        }

        .Insight-technology-cta h2 {
          font-size: 2.75rem;
          font-weight: 400;
          color: #1a1a2e;
          margin-bottom: 24px;
        }

        .Insight-technology-cta p {
          font-size: 1.25rem;
          color: #666;
          margin-bottom: 40px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .Insight-technology-cta-button {
          display: inline-block;
          background: #16213e;
          color: #ffffff;
          padding: 18px 48px;
          font-size: 1.05rem;
          font-weight: 500;
          border: 2px solid #16213e;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .Insight-technology-cta-button:hover {
          background: #0f3460;
          border-color: #0f3460;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(22, 33, 62, 0.3);
        }

        @media (max-width: 968px) {
          .Insight-technology-hero h1 {
            font-size: 3rem;
          }

          .Insight-technology-hero-subtitle {
            font-size: 1.5rem;
          }

          .Insight-technology-stats {
            grid-template-columns: repeat(2, 1fr);
            margin-top: -40px;
          }

          .Insight-technology-platform-content {
            grid-template-columns: 1fr;
          }

          .Insight-technology-section {
            padding: 70px 24px;
          }
        }

        @media (max-width: 640px) {
          .Insight-technology-hero {
            padding: 100px 24px 80px;
          }

          .Insight-technology-hero h1 {
            font-size: 2.25rem;
          }

          .Insight-technology-hero-subtitle {
            font-size: 1.25rem;
          }

          .Insight-technology-stats {
            grid-template-columns: 1fr;
            padding: 0 24px;
          }

          .Insight-technology-pillars {
            grid-template-columns: 1fr;
          }

          .Insight-technology-innovations-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="Insight-technology-hero">
        <div className="Insight-technology-hero-content">
          <h1>Technology</h1>
          <p className="Insight-technology-hero-subtitle">
            Shape the future of investing by turning insight into intelligent systems.
          </p>
        </div>
      </div>

      <div className="Insight-technology-stats">
        {stats.map((stat, index) => (
          <div key={index} className="Insight-technology-stat-card">
            <div className="Insight-technology-stat-number">{stat.number}</div>
            <div className="Insight-technology-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="Insight-technology-section">
        <h2 className="Insight-technology-section-title">Our Technology Infrastructure</h2>
        <p className="Insight-technology-section-subtitle">
          A robust, intelligent, and adaptive ecosystem that empowers everything we do
        </p>
        
        <div className="Insight-technology-pillars">
          {techPillars.map((pillar, index) => (
            <div key={index} className="Insight-technology-pillar-card">
              <span className="Insight-technology-pillar-icon">{pillar.icon}</span>
              <h3 className="Insight-technology-pillar-title">{pillar.title}</h3>
              <p className="Insight-technology-pillar-description">{pillar.description}</p>
              <ul className="Insight-technology-pillar-features">
                {pillar.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="Insight-technology-section Insight-technology-innovations">
        <h2 className="Insight-technology-section-title" style={{color: '#ffffff'}}>
          Innovation at the Core
        </h2>
        <p className="Insight-technology-section-subtitle" style={{color: 'rgba(255,255,255,0.9)'}}>
          Building systems that adapt, protect, and empower
        </p>
        
        <div className="Insight-technology-innovations-grid">
          {innovations.map((innovation, index) => (
            <div key={index} className="Insight-technology-innovation-item">
              <h3 className="Insight-technology-innovation-title">{innovation.title}</h3>
              <p className="Insight-technology-innovation-description">{innovation.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="Insight-technology-section Insight-technology-platform">
        <div className="Insight-technology-platform-content">
          <div className="Insight-technology-platform-text">
            <h3>Built to Adapt and Evolve</h3>
            <p>
              What we build today is designed to evolve tomorrow. Our in-house technology team 
              continuously develops tools that respond to shifts in markets, regulations, and client needs.
            </p>
            <p>
              We integrate seamlessly with third-party APIs and platforms to maintain interoperability 
              and innovation, ensuring our systems stay at the cutting edge.
            </p>
            <p>
              MAPSIGMA CAPITAL is not just tech-enabled. We are tech-driven, insight-led, and future-focused.
            </p>
          </div>
          <div className="Insight-technology-platform-visual">
            <div className="Insight-technology-platform-visual-title">Our Technology Stack</div>
            <div className="Insight-technology-platform-layers">
              <div className="Insight-technology-layer">Data Layer: Real-time ingestion & processing</div>
              <div className="Insight-technology-layer">Intelligence Layer: AI & machine learning</div>
              <div className="Insight-technology-layer">Execution Layer: Portfolio management</div>
              <div className="Insight-technology-layer">Security Layer: Enterprise-grade protection</div>
              <div className="Insight-technology-layer">Client Layer: Intuitive interfaces</div>
            </div>
          </div>
        </div>
      </div>

      <div className="Insight-technology-cta">
        <h2>Experience the Difference</h2>
        <p>
          Discover how our technology-driven approach delivers clarity, control, and confidence 
          for sophisticated investors
        </p>
        <button className="Insight-technology-cta-button">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default TechnologyPage;