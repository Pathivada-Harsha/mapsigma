import React, { useState } from 'react';
import '../components_css/Navbar.css';
import logo1 from "../images/logo1.png"
const Navbar = ({ logoSrc, logoAlt = "MAPSIGMA CAPITAL" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const mainMenuItems = [
    'RESEARCH & INSIGHTS',
    'CULTURE', 
    'Principles',
    'PEOPLE',
    'TECHNOLOGY',
    'LIFE AT MAPSIGMA',
    'OUR FOUNDER'
  ];

  return (
    <div className="page-container">
      <nav className="navbar">
        {/* Top Section */}
        <div className="navbar-top">
          {/* Logo */}
          <div className="logo-container">
            {logo1 ? (
              <img 
                src={logo1} 
                alt={logoAlt}
                className="logo-image"
              />
            ) : (
              <div className="logo-text">
                MAPSIGMA
                <span className="logo-superscript">50</span>
              </div>
            )}
          </div>

          {/* Right Side Buttons */}
          <div className="desktop-buttons">
            {/* Newsletter Button */}
            <button className="newsletter-btn">
              <span className="newsletter-icon">✉</span>
              NEWSLETTER
            </button>

            {/* Clients Button */}
            <button className="clients-btn">
              CLIENTS
            </button>

            {/* Alumni Button */}
            <button className="alumni-btn">
              ALUMNI
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="mobile-menu-btn"
          >
            <div className="hamburger">
              <span className={`hamburger-line ${isMenuOpen ? 'line-1-open' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'line-2-open' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'line-3-open' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Bottom Section - Main Menu */}
        <div className="navbar-bottom">
          <div className="desktop-menu">
            {mainMenuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
          <div className="mobile-menu-content">
            {/* Mobile Main Menu */}
            {mainMenuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`mobile-nav-link ${index < mainMenuItems.length - 1 ? 'mobile-nav-border' : ''}`}
              >
                {item}
              </a>
            ))}
            
            {/* Mobile Buttons */}
            <div className="mobile-buttons">
              <button className="mobile-newsletter-btn">
                <span className="newsletter-icon">✉</span>
                NEWSLETTER
              </button>

              <button className="mobile-clients-btn">
                CLIENTS
              </button>

              <button className="mobile-alumni-btn">
                ALUMNI
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;