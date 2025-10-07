import React from 'react';
import '../components_css/Principle-Hero.css';
import heroBg from "./../images/principles/PrincipleHome.png";
import { NavLink } from 'react-router-dom';


const PrinciplesHero = () => {
  return (
    <section className="principles-home-section">
      {/* Background Image */}
      <div className="principles-home-background">
        <img
          src={heroBg}
          alt="Principles at MAPSIGMA CAPITAL"
          className="principles-home-background-image"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/1920x1080/004225/FFFFFF?text=MAPSIGMA+Principles"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="principles-home-content">
        {/* Welcome Badge */}
        <div className="principles-home-welcome-badge">OUR PRINCIPLES</div>

        {/* Main Headline */}
        <h1 className="principles-home-headline">Principles at MAPSIGMA CAPITAL</h1>

        {/* Subheading */}
        <p className="principles-home-subtext">
          How Austin Prakesh's Life Philosophy Became the Operating DNA of a Modern Investment Firm
        </p>

        {/* CTA Button */}
        <NavLink to="/contact" className="principles-home-cta-button">
          Learn Our Approach →
        </NavLink>
      </div>
    </section>
  );
}

export default PrinciplesHero;