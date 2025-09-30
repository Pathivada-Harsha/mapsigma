import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Heart, Zap, Building2, User } from 'lucide-react';
import '../components_css/Technology-pillars.css';
import Tp1 from "./../images/Technology/Tp1.png"
import { Link } from 'react-router-dom';

const IndustryCard = ({ industry, icon: Icon, title, image, isHovered, onHover, onLeave, link }) => {
  return (
    <div
      className="tp-industry-card"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Background Image */}
      <div className={`tp-card-image ${isHovered ? 'tp-hovered' : ''}`}>
        <img src={image} alt={industry} />
        <div className="tp-image-overlay" />
      </div>

      {/* Content */}
      <div className="tp-card-content">
        {/* Icon and Title */}
        <div className="tp-card-header">
          <div className={`tp-icon-container ${isHovered ? 'tp-hovered' : ''}`}>
            <Icon className="tp-icon" />
          </div>
          <h3 className="tp-industry-title">{industry}</h3>
        </div>

        {/* Description */}
        <div className={`tp-description-section ${isHovered ? 'tp-visible' : ''}`}>
          <p className="tp-description-text">{title}</p>
        </div>

        {/* Learn More Link */}
        <div className={`tp-learn-more-link ${isHovered ? 'tp-visible' : ''}`}>
          <Link to={link} className="tp-learn-button">
            Learn more <span className="tp-arrow-right">→</span>
          </Link>
        </div>
      </div>
    </div>

  );
};

export default function IndustrySolutions() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const industries = [
  {
    id: 'real-time-data',
    industry: 'Real Time Data Infrastructure',
    icon: TrendingUp,
    title: 'We ingest and process millions of data points daily across global markets enabling our analysts and strategists to make decisions based on live market intelligence not yesterday\'s news.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80',
    link: '/RealTime'
  },
  {
    id: 'ai-models',
    industry: 'AI Enhanced Investment Models',
    icon: Heart,
    title: 'Our machine learning algorithms are used to uncover non-obvious patterns, simulate macroeconomic scenarios and stress test portfolios across multiple time horizons.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    link: '/AiPage'
  },
  {
    id: 'pms',
    industry: 'Portfolio Management System (PMS)',
    icon: Zap,
    title: 'A centralized platform that tracks, evaluates and optimizes every investment position across asset classes. Built with automation audit trails and risk overlays to maintain discipline in execution.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    link: '/PMS'
  },
  {
    id: 'risk-center',
    industry: 'Risk Command Center',
    icon: Building2,
    title: 'A real time risk dashboard that monitors exposure volatility and correlation across all portfolios. Our risk system doesn\'t just flag issues, it recommends solutions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    link: '/RiskCommand'
  },
  {
    id: 'cybersecurity',
    industry: 'Cybersecurity and Data Governance',
    icon: Building2,
    title: 'Security is not negotiable. We operate with enterprise grade encryption layered firewalls penetration testing and full compliance with international data protection standards.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    link: '/Cybersecurity'
  },
  {
    id: 'client-portal',
    industry: 'Client Command Portal',
    icon: User,
    title: 'Total Transparency. Real-Time Control. Personalized Experience. A secure, intuitive, and fully personalized digital platform giving clients real-time visibility, clarity and control over their portfolios — accessible anytime, anywhere with bank-grade security.',
    image: Tp1,
    link: '/ClientCommand'
  }
];



  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(industries.length - 4, currentIndex + 1));
  };

  const visibleIndustries = industries.slice(currentIndex, currentIndex + 4);

  return (
    <div className="tp-main-container">
      <div className="tp-content-wrapper">
        {/* Header */}
        <div className="tp-header-section">
          <p className="tp-header-label">Technology</p>
          <div className="tp-header-content">
            <h1 className="tp-main-title">
              Key pillars of our<br />technology structure
            </h1>
            <div className="tp-navigation-buttons">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="tp-nav-button"
              >
                <ChevronLeft className="tp-nav-icon" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= industries.length - 4}
                className="tp-nav-button"
              >
                <ChevronRight className="tp-nav-icon" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="tp-cards-grid">
          {visibleIndustries.map((industry) => (
            <IndustryCard
              key={industry.id}
              {...industry}
              isHovered={hoveredCard === industry.id}
              onHover={() => setHoveredCard(industry.id)}
              onLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}