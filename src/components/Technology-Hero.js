import React from 'react';
import '../components_css/Technology-Hero.css';
import hero1 from "./../images/Technology/Tech-Home2.png";

import { NavLink } from 'react-router-dom';
const TechHomeHero = () => {
  return (
    <section className="tech-home-section">
      {/* Background Image */}
      <div className="tech-home-background">
        <img
          src={hero1}
          alt="Technology and innovation at MAPSIGMA CAPITAL"
          className="tech-home-background-image"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/1920x1080/004225/FFFFFF?text=MAPSIGMA+Technology"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="tech-home-content">
        {/* Welcome Badge */}
        <div className="tech-home-welcome-badge">TECHNOLOGY</div>

        {/* Main Headline */}
        <h1 className="tech-home-headline">Where Intelligence Meets Precision</h1>

        {/* Subheading */}
        <p className="tech-home-subtext">
          At MAPSIGMA CAPITAL, technology is not an afterthought. It is a strategic foundation. 
          We have designed and engineered a robust, intelligent and adaptive technology ecosystem 
          that empowers everything we do.
        </p>

        {/* CTA Button */}
        <NavLink to="/contact" className="tech-home-cta-button">
          Explore Our Platform →
        </NavLink>
      </div>
    </section>
  );
}

export default TechHomeHero;