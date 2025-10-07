import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from "../images/logo1.png";
import '../components_css/Navbar.css'

const Navbar = ({ logoSrc, logoAlt = "MAPSIGMA CAPITAL" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const mainMenuItems = [
    { name: 'RESEARCH & INSIGHTS', path: '/' },
    { name: 'CULTURE', path: '/culture' },
    { name: 'PRINCIPLES', path: '/principles' },
    { name: 'PEOPLE', path: '/people' },
    { name: 'TECHNOLOGY', path: '/Technology' },
    { name: 'LIFE AT MAPSIGMA', path: '/LifeAtMapSigma' },
    { name: 'OUR FOUNDER', path: '/Founder' }
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="custom-navbar sticky-navbar">
        {/* Top Section: Logo + Buttons */}
        <div className="navbar-top-row">
          <div className="container-fluid px-4 px-lg-5">
            <div className="row align-items-center">
              {/* Logo - Left Side */}
              <div className="col-6 col-lg-auto">
                <NavLink to="/" className="logo-link" >
                  <img
                    src={logo1}
                    alt={logoAlt}
                    className="navbar-logo"
                  />
                </NavLink>
              </div>

              {/* Buttons - Right Side (Desktop) */}
              <div className="col-6 col-lg d-flex justify-content-end align-items-center">
                {/* Desktop Buttons */}
                <div className="d-none d-lg-flex align-items-center ms-auto top-buttons-custom-margin">
                  <NavLink to="/newsletter" className="top-btn newsletter-button">
                    <span className="me-1"><i className="bi bi-envelope"></i></span>
                    <span>NEWSLETTER</span>
                  </NavLink>
                  <NavLink to="/clients" className="top-btn clients-button">
                    CLIENTS
                  </NavLink>
                  <NavLink to="/alumni" className="top-btn alumni-button">
                    ALUMNI
                  </NavLink>
                </div>

                {/* Mobile Toggle */}
                <button
                  className="mobile-toggle d-lg-none"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  {!isMenuOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <span style={{ fontSize: '24px' }}>✕</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Navigation Menu (Desktop) */}
        <div className="navbar-bottom-row d-none d-lg-block">
          <div className="container-fluid px-4 px-lg-5">
            <div className="d-flex align-items-center">
              {mainMenuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `bottom-nav-link${isActive ? " active" : ""}`
                  }
                >
                  {item.name}
                </NavLink>

              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-dropdown d-lg-none">
            <div className="container-fluid px-4">
              {/* Mobile Navigation Links */}
              <div className="mobile-nav-section">
                {mainMenuItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <NavLink
                      to={item.path}
                      className="mobile-nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                    {index < mainMenuItems.length - 1 && (
                      <div className="mobile-divider"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Mobile Buttons */}
              <div className="mobile-buttons-section">
                <NavLink
                  to="/newsletter"
                  className="mobile-btn mobile-newsletter"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="me-2">✉</span>
                  NEWSLETTER
                </NavLink>
                <NavLink
                  to="/clients"
                  className="mobile-btn mobile-clients"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CLIENTS
                </NavLink>
                <NavLink
                  to="/alumni"
                  className="mobile-btn mobile-alumni"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ALUMNI
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;