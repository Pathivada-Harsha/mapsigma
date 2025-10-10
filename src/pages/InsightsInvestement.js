import React, { useState } from 'react';

const ResearchInsightsPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const featuredInsights = [
    {
      title: "Global Market Outlook 2025",
      category: "Market Analysis",
      excerpt: "Our comprehensive analysis of emerging trends and opportunities across global markets.",
      date: "October 2025"
    },
    {
      title: "The Future of Sustainable Investing",
      category: "ESG Strategy",
      excerpt: "How environmental and social factors are reshaping investment strategies.",
      date: "September 2025"
    },
    {
      title: "Navigating Volatility",
      category: "Risk Management",
      excerpt: "Strategic approaches to managing portfolio risk in uncertain times.",
      date: "September 2025"
    },
    {
      title: "Technology's Impact on Finance",
      category: "Innovation",
      excerpt: "Examining how AI and technology are transforming investment management.",
      date: "August 2025"
    }
  ];

  const recentPublications = [
    {
      title: "Quarterly Economic Review",
      type: "Report",
      date: "Q3 2025"
    },
    {
      title: "Emerging Markets Deep Dive",
      type: "Analysis",
      date: "September 2025"
    },
    {
      title: "Fixed Income Perspectives",
      type: "White Paper",
      date: "August 2025"
    },
    {
      title: "Portfolio Construction Strategies",
      type: "Guide",
      date: "July 2025"
    }
  ];

  const handleSubscribe = () => {
    if (name && email) {
      alert('Thank you for subscribing! We will send insights and market analysis to your email.');
      setEmail('');
      setName('');
    }
  };

  return (
    <div className="Insight-Investment1-page">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .Insight-Investment1-page {
          font-family: 'Georgia', 'Times New Roman', serif;
          color: #1a1a1a;
          background-color: #ffffff;
          line-height: 1.6;
        }

        .Insight-Investment1-hero {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: #ffffff;
          padding: 120px 40px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .Insight-Investment1-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" fill="rgba(255,255,255,0.05)"/></svg>') repeat;
          opacity: 0.1;
        }

        .Insight-Investment1-hero-content {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .Insight-Investment1-hero h1 {
          font-size: 3.5rem;
          font-weight: 300;
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .Insight-Investment1-hero-subtitle {
          font-size: 1.5rem;
          font-weight: 300;
          line-height: 1.8;
          opacity: 0.95;
          max-width: 800px;
          margin: 0 auto;
        }

        .Insight-Investment1-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 40px;
        }

        .Insight-Investment1-section-title {
          font-size: 2.5rem;
          font-weight: 400;
          margin-bottom: 16px;
          color: #2c3e50;
          text-align: center;
        }

        .Insight-Investment1-section-subtitle {
          font-size: 1.125rem;
          color: #666;
          text-align: center;
          margin-bottom: 60px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .Insight-Investment1-insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          margin-bottom: 48px;
        }

        .Insight-Investment1-insight-card {
          background: #ffffff;
          border: 1px solid #e5e5e5;
          padding: 32px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .Insight-Investment1-insight-card:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          transform: translateY(-4px);
          border-color: #2c3e50;
        }

        .Insight-Investment1-card-category {
          font-size: 0.875rem;
          color: #7f8c8d;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }

        .Insight-Investment1-card-title {
          font-size: 1.5rem;
          font-weight: 500;
          color: #2c3e50;
          margin-bottom: 16px;
          line-height: 1.4;
        }

        .Insight-Investment1-card-excerpt {
          color: #555;
          margin-bottom: 16px;
          font-size: 1rem;
        }

        .Insight-Investment1-card-date {
          color: #95a5a6;
          font-size: 0.875rem;
        }

        .Insight-Investment1-publications {
          background-color: #f8f9fa;
        }

        .Insight-Investment1-publications-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        .Insight-Investment1-publication-item {
          background: #ffffff;
          padding: 24px;
          border-left: 4px solid #34495e;
          transition: all 0.3s ease;
        }

        .Insight-Investment1-publication-item:hover {
          border-left-color: #2c3e50;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .Insight-Investment1-publication-type {
          display: inline-block;
          background: #ecf0f1;
          color: #34495e;
          padding: 4px 12px;
          border-radius: 3px;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }

        .Insight-Investment1-publication-title {
          font-size: 1.125rem;
          font-weight: 500;
          color: #2c3e50;
          margin-bottom: 8px;
        }

        .Insight-Investment1-publication-date {
          color: #95a5a6;
          font-size: 0.875rem;
        }

        .Insight-Investment1-cta-button {
          display: inline-block;
          background: #2c3e50;
          color: #ffffff;
          padding: 14px 40px;
          text-decoration: none;
          font-size: 1rem;
          transition: all 0.3s ease;
          border: 2px solid #2c3e50;
          cursor: pointer;
          text-align: center;
          margin-top: 32px;
        }

        .Insight-Investment1-cta-button:hover {
          background: #34495e;
          border-color: #34495e;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(44, 62, 80, 0.3);
        }

        .Insight-Investment1-subscribe {
          background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);
          color: #ffffff;
          padding: 80px 40px;
        }

        .Insight-Investment1-subscribe-content {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .Insight-Investment1-subscribe h2 {
          font-size: 2.5rem;
          font-weight: 400;
          margin-bottom: 16px;
        }

        .Insight-Investment1-subscribe p {
          font-size: 1.125rem;
          margin-bottom: 40px;
          opacity: 0.95;
        }

        .Insight-Investment1-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .Insight-Investment1-input {
          padding: 16px;
          font-size: 1rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          transition: all 0.3s ease;
        }

        .Insight-Investment1-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .Insight-Investment1-input:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.15);
        }

        .Insight-Investment1-submit {
          background: #ffffff;
          color: #2c3e50;
          padding: 16px 40px;
          font-size: 1rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .Insight-Investment1-submit:hover {
          background: #ecf0f1;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .Insight-Investment1-center {
          text-align: center;
        }

        @media (max-width: 768px) {
          .Insight-Investment1-hero {
            padding: 80px 24px 60px;
          }

          .Insight-Investment1-hero h1 {
            font-size: 2.5rem;
          }

          .Insight-Investment1-hero-subtitle {
            font-size: 1.25rem;
          }

          .Insight-Investment1-section {
            padding: 60px 24px;
          }

          .Insight-Investment1-section-title {
            font-size: 2rem;
          }

          .Insight-Investment1-insights-grid {
            grid-template-columns: 1fr;
          }

          .Insight-Investment1-subscribe h2 {
            font-size: 2rem;
          }
        }
      `}</style>

      <div className="Insight-Investment1-hero">
        <div className="Insight-Investment1-hero-content">
          <h1>Research & Insights</h1>
          <p className="Insight-Investment1-hero-subtitle">
            We uncover what drives markets and turn that knowledge into smart portfolios and sharp insights for our clients.
          </p>
        </div>
      </div>

      <div className="Insight-Investment1-section">
        <h2 className="Insight-Investment1-section-title">Selected Insights from Our Research Library</h2>
        <p className="Insight-Investment1-section-subtitle">
          Explore our latest thinking on markets, economics, and investment strategy
        </p>
        
        <div className="Insight-Investment1-insights-grid">
          {featuredInsights.map((insight, index) => (
            <div key={index} className="Insight-Investment1-insight-card">
              <div className="Insight-Investment1-card-category">{insight.category}</div>
              <h3 className="Insight-Investment1-card-title">{insight.title}</h3>
              <p className="Insight-Investment1-card-excerpt">{insight.excerpt}</p>
              <div className="Insight-Investment1-card-date">{insight.date}</div>
            </div>
          ))}
        </div>

        <div className="Insight-Investment1-center">
          <button className="Insight-Investment1-cta-button">
            Learn More
          </button>
        </div>
      </div>

      <div className="Insight-Investment1-section Insight-Investment1-publications">
        <h2 className="Insight-Investment1-section-title">Recent Publications</h2>
        <p className="Insight-Investment1-section-subtitle">
          In-depth analysis and research from our investment team
        </p>
        
        <div className="Insight-Investment1-publications-list">
          {recentPublications.map((publication, index) => (
            <div key={index} className="Insight-Investment1-publication-item">
              <span className="Insight-Investment1-publication-type">{publication.type}</span>
              <h3 className="Insight-Investment1-publication-title">{publication.title}</h3>
              <div className="Insight-Investment1-publication-date">{publication.date}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="Insight-Investment1-subscribe">
        <div className="Insight-Investment1-subscribe-content">
          <h2>Map Your Move</h2>
          <p>Subscribe for insights and market analysis from MAPSIGMA CAPITAL</p>
          
          <div className="Insight-Investment1-form">
            <input
              type="text"
              className="Insight-Investment1-input"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="Insight-Investment1-input"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              className="Insight-Investment1-submit"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchInsightsPage;